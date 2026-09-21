#!/usr/bin/env node
/**
 * Trigger GitHub Actions to post AI in China articles to X.
 * (Direct X API is blocked from CN servers; GitHub Actions runners reach it fine.)
 *
 * Posts ALL unposted articles (newest first), max 3 per run — catches up missed ones.
 * Usage: node scripts/post-to-x.js [--slug <slug>] [--force] [--dry]
 * Auth: reads GitHub token from git remote URL (ghp_xxx@github.com)
 * Idempotency: records posted slugs in ~/.secrets/x-posted.json
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const STATE_FILE = '/root/.openclaw/workspace/.secrets/x-posted.json';
const REPO = 'holymedusa-boop/ainchina-site';
const WORKFLOW = 'post-to-x.yml';
const MAX_PER_RUN = 3;

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
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
    body: JSON.stringify({
      ref: 'main',
      inputs: { title: post.title, url, slug: post.slug, dry_run: dryRun ? 'true' : 'false' },
    }),
  });
  return res.status === 204;
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
    console.log('⏭  Nothing new to post. All articles already on X.');
    return;
  }

  for (const post of targets) {
    const ok = await dispatch(token, post, dry);
    if (ok) {
      if (!dry && !state.posted.includes(post.slug)) {
        state.posted.push(post.slug);
        savePosted(state);
      }
      console.log(`${dry ? '🔍 DRY' : '✅'} dispatched: ${post.title}`);
    } else {
      console.error(`❌ dispatch failed: ${post.slug}`);
      process.exitCode = 1;
    }
    await new Promise(r => setTimeout(r, 3000)); // 间隔 3s，避免触发 GitHub 限流
  }
  console.log(`\n完成。${dry ? '（dry-run，未真实发帖）' : '推文将在 1-2 分钟内陆续出现在 @AInChina5。'}`);
}

main().catch(e => { console.error('❌', e.message); process.exit(1); });
