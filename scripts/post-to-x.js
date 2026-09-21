#!/usr/bin/env node
/**
 * Trigger GitHub Actions to post latest AI in China article to X.
 * (Direct X API is blocked from CN servers; GitHub Actions runners reach it fine.)
 *
 * Usage: node scripts/post-to-x.js [--slug <slug>] [--force]
 * Auth: reads GitHub token from git remote URL (ghp_xxx@github.com)
 * Idempotency: records posted slugs in ~/.secrets/x-posted.json
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const STATE_FILE = '/root/.openclaw/workspace/.secrets/x-posted.json';
const REPO = 'holymedusa-boop/ainchina-site';
const WORKFLOW = 'post-to-x.yml';

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

async function main() {
  const args = process.argv.slice(2);
  const slugIdx = args.indexOf('--slug');
  const force = args.includes('--force');
  const slug = slugIdx !== -1 ? args[slugIdx + 1] : null;

  const { allPosts } = require('../lib/posts-meta');
  const post = slug ? allPosts.find(p => p.slug === slug) : allPosts[0];
  if (!post) { console.error('❌ Post not found' + (slug ? `: ${slug}` : '')); process.exit(1); }

  const state = loadPosted();
  if (!force && state.posted.includes(post.slug)) {
    console.log(`⏭  Already posted, skipping: ${post.slug}`);
    return;
  }

  const token = getGitHubToken();
  const url = `https://www.ainchina.com/blog/${post.slug}/`;

  console.log('📝 Dispatching X post for:', post.title);
  console.log('   URL:', url);

  const res = await fetch(`https://api.github.com/repos/${REPO}/actions/workflows/${WORKFLOW}/dispatches`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
    body: JSON.stringify({
      ref: 'main',
      inputs: { title: post.title, url, slug: post.slug },
    }),
  });

  if (res.status === 204) {
    state.posted.push(post.slug);
    savePosted(state);
    console.log('✅ Dispatched. Tweet will appear on @AInChina5 within ~1 min.');
  } else {
    const body = await res.text();
    console.error(`❌ Dispatch failed (HTTP ${res.status}):`, body.slice(0, 300));
    process.exit(1);
  }
}

main().catch(e => { console.error('❌', e.message); process.exit(1); });
