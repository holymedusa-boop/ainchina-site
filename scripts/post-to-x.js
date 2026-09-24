#!/usr/bin/env node
/**
 * @AInChina5 X account dispatcher.
 * Subcommands:
 *   (default)          post unposted articles (hook tweet + link reply), max 3, verify each
 *   --slug <slug>      post one article
 *   --force            ignore posted-state
 *   --dry              dry-run (validate creds)
 *   --search "<query>" search mode: dispatch search, print results
 *   --reply <tweet_id> --text "..."   reply mode: post reply, print URL
 * Auth: GitHub token from git remote URL. State: ~/.secrets/x-posted.json
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const STATE_FILE = '/root/.openclaw/workspace/.secrets/x-posted.json';
const REPO = 'holymedusa-boop/ainchina-site';
const WORKFLOW = 'post-to-x.yml';
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

async function dispatch(token, inputs) {
  const res = await fetch(`https://api.github.com/repos/${REPO}/actions/workflows/${WORKFLOW}/dispatches`, {
    method: 'POST',
    headers: { ...ghHeaders(token), 'Content-Type': 'application/json' },
    body: JSON.stringify({ ref: 'main', inputs }),
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
    const fresh = (data.workflow_runs || []).find(r => !knownIds.has(r.id) && (r.status === 'in_progress' || r.status === 'completed'));
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
    if (data.status === 'completed') return data.conclusion;
    await sleep(8000);
  }
  return 'timeout';
}
async function getRunLogs(token, runId) {
  const res = await fetch(`https://api.github.com/repos/${REPO}/actions/runs/${runId}/logs`, { headers: ghHeaders(token) });
  const buf = Buffer.from(await res.arrayBuffer());
  const { execSync } = require('child_process');
  const tmp = `/tmp/xrun-${runId}`;
  fs.mkdirSync(tmp, { recursive: true });
  fs.writeFileSync(`${tmp}.zip`, buf);
  execSync(`unzip -o -q ${tmp}.zip -d ${tmp}`, { stdio: 'ignore' });
  let out = '';
  const walk = (d) => {
    for (const f of fs.readdirSync(d)) {
      const p = path.join(d, f);
      if (fs.statSync(p).isDirectory()) walk(p);
      else if (f.endsWith('.txt')) out += fs.readFileSync(p, 'utf8');
    }
  };
  walk(tmp);
  execSync(`rm -rf ${tmp} ${tmp}.zip`, { stdio: 'ignore' });
  return out;
}

/** Extract a punchy hook (no link) from article markdown */
function extractHook(slug) {
  const file = path.join(__dirname, '..', 'content', 'posts', `${slug}.md`);
  let md;
  try { md = fs.readFileSync(file, 'utf8'); } catch { return null; }
  const body = md.replace(/^---[\s\S]*?---\s*/, '');
  const paras = body.split(/\n\s*\n/).map(p => p.trim()).filter(p =>
    p.length > 80 && !p.startsWith('#') && !p.startsWith('!') && !p.startsWith('|') &&
    !p.startsWith('>') && !p.includes('[comment]') && !/^[\s>*-]*\[/.test(p)
  );
  // prefer a paragraph containing digits (stats are punchy), else first
  const pick = paras.find(p => /\d/.test(p)) || paras[0] || '';
  let hook = pick
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\*\*/g, '').replace(/\*/g, '').replace(/`/g, '')
    .replace(/\s+/g, ' ').trim();
  if (hook.length > 265) {
    hook = hook.slice(0, 262);
    hook = hook.slice(0, hook.lastIndexOf(' ')) + '…';
  }
  return hook || null;
}

async function runAndReport(token, inputs, label) {
  const knownIds = await listRunIds(token);
  const ok = await dispatch(token, inputs);
  if (!ok) { console.error(`❌ dispatch rejected (${label})`); return { ok: false }; }
  const runId = await waitNewRun(token, knownIds);
  if (!runId) { console.error(`⚠️  no run confirmed (${label})`); return { ok: false }; }
  const concl = await waitConclusion(token, runId);
  const logs = await getRunLogs(token, runId);
  return { ok: concl === 'success', concl, runId, logs };
}

async function main() {
  const args = process.argv.slice(2);
  const token = getGitHubToken();

  // --- search subcommand ---
  const searchIdx = args.indexOf('--search');
  if (searchIdx !== -1) {
    const q = args[searchIdx + 1];
    const r = await runAndReport(token, { mode: 'search', slug: 'search', search_query: q, dry_run: false }, 'search');
    if (r.ok && r.logs) {
      const lines = r.logs.split('\n').filter(l => l.startsWith('{'));
      console.log(`✅ ${lines.length} results:`);
      for (const l of lines) console.log(l);
    } else {
      console.error('❌ search failed', r.concl || '');
      if (r.logs) console.error(r.logs.split('\n').filter(l => l.includes('❌') || l.includes('FAILED')).join('\n'));
      process.exit(1);
    }
    return;
  }

  // --- reply subcommand ---
  const replyIdx = args.indexOf('--reply');
  if (replyIdx !== -1) {
    const toId = args[replyIdx + 1];
    const textIdx = args.indexOf('--text');
    const text = textIdx !== -1 ? args[textIdx + 1] : null;
    if (!toId || !text) { console.error('Usage: --reply <tweet_id> --text "..."'); process.exit(1); }
    const r = await runAndReport(token, { mode: 'reply', slug: 'reply', reply_to_id: toId, reply_text: text, dry_run: false }, 'reply');
    if (r.ok) {
      const m = r.logs.match(/https:\/\/x\.com\/AInChina5\/status\/\d+/);
      console.log('✅ reply posted:', m ? m[0] : '(see logs)');
    } else {
      console.error('❌ reply failed:', r.concl);
      process.exit(1);
    }
    return;
  }

  // --- post mode (default) ---
  const slugIdx = args.indexOf('--slug');
  const force = args.includes('--force');
  const dry = args.includes('--dry');
  const singleSlug = slugIdx !== -1 ? args[slugIdx + 1] : null;

  const { allPosts } = require('../lib/posts-meta');
  const state = loadPosted();

  let targets;
  if (singleSlug) {
    const p = allPosts.find(x => x.slug === singleSlug);
    if (!p) { console.error(`❌ Slug not found: ${singleSlug}`); process.exit(1); }
    targets = [p];
  } else {
    targets = allPosts.filter(p => force || !state.posted.includes(p.slug)).slice(0, 3);
  }
  if (!targets.length) { console.log('⏭  Nothing new to post.'); return; }

  for (const post of targets) {
    const url = `https://www.ainchina.com/blog/${post.slug}/`;
    const hook = extractHook(post.slug);
    if (!hook) { console.error(`⚠️  no hook extracted for ${post.slug} — skipped`); continue; }

    const inputs = { mode: 'post', title: post.title, hook, url, slug: post.slug, dry_run: dry ? 'true' : 'false' };
    console.log(`⏳ ${dry ? 'DRY ' : ''}Dispatch: ${post.title}\n   hook: ${hook.slice(0, 100)}…`);
    const r = await runAndReport(token, inputs, post.slug);
    if (dry) { console.log(r.ok ? '🔍 DRY ok' : '❌ DRY failed', r.concl || ''); continue; }
    if (r.ok) {
      if (!state.posted.includes(post.slug)) { state.posted.push(post.slug); savePosted(state); }
      const links = (r.logs.match(/https:\/\/x\.com\/AInChina5\/status\/\d+/g) || []);
      console.log(`✅ VERIFIED: ${post.slug}`);
      links.forEach(l => console.log('   ', l));
    } else {
      console.error(`❌ ${r.concl}: ${post.slug} — NOT marked, will retry`);
      const errs = r.logs ? r.logs.split('\n').filter(l => l.includes('❌') || l.includes('402') || l.includes('credits')) : [];
      errs.slice(0, 3).forEach(e => console.error('   ', e));
      process.exitCode = 1;
    }
  }
}

main().catch(e => { console.error('❌', e.message); process.exit(1); });
