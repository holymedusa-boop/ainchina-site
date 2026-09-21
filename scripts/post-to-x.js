#!/usr/bin/env node
/**
 * Trigger GitHub Actions to post AI in China articles to X.
 * (Direct X API is blocked from CN servers; GitHub Actions runners reach it fine.)
 *
 * Posts unposted articles one by one (newest first), verifies each workflow run
 * succeeded before marking posted. Failed runs stay unmarked → retried next time.
 *
 * Usage: node scripts/post-to-x.js [--slug <slug>] [--force] [--dry]
 * Auth: reads GitHub token from git remote URL (ghp_xxx@github.com)
 * State: posted slugs in ~/.secrets/x-posted.json
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const STATE_FILE = '/root/.openclaw/workspace/.secrets/x-posted.json';
const REPO = 'holymedusa-boop/ainchina-site';
const WORKFLOW = 'post-to-x.yml';
const MAX_PER_RUN = 3;
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

function ghHeaders(token) {
  return {
    Authorization: `Bearer ${token}`,
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  };
}

function getGitHubToken() {
  const remote = execSync('git remote get-url origin', { encoding: 'utf8' }).trim();
  const m = remote.match(/ghp_([a-zA-Z0-9]+)@github\.com/);
  if (!m) throw new Error('No ghp_ token found in git remote URL');
  return 'ghp_' + m[1];
}

function loadPosted() {
  try { return JSON.parse(fs.readFileSync(STATE_FILE, 'utf8')); } catch { return { posted: [] }; }
}
function savePosted(state) {
  fs.mkdirSync(path.dirname(STATE_FILE), { recursive: true });
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
}

async function dispatch(token, post, dryRun) {
  const url = `https://www.ainchina.com/blog/${post.slug}/`;
  const res = await fetch(`https://api.github.com/repos/${REPO}/actions/workflows/${WORKFLOW}/dispatches`, {
    method: 'POST',
    headers: { ...ghHeaders(token), 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ref: 'main',
      inputs: { title: post.title, url, slug: post.slug, dry_run: dryRun ? 'true' : 'false' },
    }),
  });
  return res.status === 204;
}

async function listRunIds(token) {
  const res = await fetch(`https://api.github.com/repos/${REPO}/actions/workflows/${WORKFLOW}/runs?per_page=5`, { headers: ghHeaders(token) });
  const data = await res.json();
  return new Set((data.workflow_runs || []).map(r => r.id));
}

async function waitNewRun(token, knownIds, timeoutMs = 120000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const res = await fetch(`https://api.github.com/repos/${REPO}/actions/workflows/${WORKFLOW}/runs?per_page=5`, { headers: ghHeaders(token) });
    const data = await res.json();
    const fresh = (data.workflow_runs || []).find(r => !knownIds.has(r.id) && r.status === 'in_progress' || (!knownIds.has(r.id) && r.status === 'completed'));
    if (fresh) return fresh.id;
    await sleep(6000);
  }
  return null;
}

async function waitConclusion(token, runId, timeoutMs = 300000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const res = await fetch(`https://api.github.com/repos/${REPO}/actions/runs/${runId}`, { headers: ghHeaders(token) });
    const data = await res.json();
    if (data.status === 'completed') return data.conclusion; // 'success' | 'failure' | ...
    await sleep(8000);
  }
  return 'timeout';
}

async function main() {
  const args = process.argv.slice(2);
  const slugIdx = args.indexOf('--slug');
  const force = args.includes('--force');
  const dry = args.includes('--dry');
  const singleSlug = slugIdx !== -1 ? args[slugIdx + 1] : null;

  const { allPosts } = require('../lib/posts-meta');
  const state = loadPosted();
  const token = getGitHubToken();

  let targets;
  if (singleSlug) {
    const p = allPosts.find(x => x.slug === singleSlug);
    if (!p) { console.error(`❌ Slug not found: ${singleSlug}`); process.exit(1); }
    targets = [p];
  } else {
    targets = allPosts.filter(p => force || !state.posted.includes(p.slug)).slice(0, MAX_PER_RUN);
  }

  if (!targets.length) {
    console.log('⏭  Nothing new to post.');
    return;
  }

  for (const post of targets) {
    const knownIds = await listRunIds(token);
    const ok = await dispatch(token, post, dry);
    if (!ok) {
      console.error(`❌ dispatch rejected for: ${post.slug}`);
      process.exitCode = 1;
      continue;
    }
    if (dry) {
      console.log(`🔍 DRY dispatched: ${post.title}`);
      await sleep(3000);
      continue;
    }

    console.log(`⏳ Dispatched: ${post.title}`);
    const runId = await waitNewRun(token, knownIds);
    if (!runId) {
      console.error(`⚠️  Cannot confirm run for ${post.slug} — NOT marking posted, will retry next time`);
      continue;
    }
    const concl = await waitConclusion(token, runId);
    if (concl === 'success') {
      if (!state.posted.includes(post.slug)) { state.posted.push(post.slug); savePosted(state); }
      console.log(`✅ VERIFIED on X: ${post.slug}`);
    } else {
      console.error(`❌ Workflow ${concl}: ${post.slug} — NOT marking posted (check X credits / logs)`);
      process.exitCode = 1;
    }
  }
}

main().catch(e => { console.error('❌', e.message); process.exit(1); });
