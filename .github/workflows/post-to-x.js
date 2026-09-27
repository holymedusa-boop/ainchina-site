/**
 * GitHub Actions runner for @AInChina5 X account.
 * Modes (env MODE):
 *  - post   (default): hook tweet (no link) + stat-card image + self-reply with article link
 *  - search: recent search, prints results to stdout (retrieved via logs)
 *  - reply:  post a reply to an existing tweet
 *  - resolve: resolve account usernames -> user IDs (for sweep)
 *  - sweep:  poll curated China-AI accounts' timelines, print top candidates, optionally like
 * Env: X_API_KEY / X_API_SECRET / X_ACCESS_TOKEN / X_ACCESS_SECRET
 */
const { TwitterApi } = require('twitter-api-v2');
const sharp = require('sharp');
const fs = require('fs');

const MODE = process.env.MODE || 'post';

const client = new TwitterApi({
  appKey: process.env.X_API_KEY,
  appSecret: process.env.X_API_SECRET,
  accessToken: process.env.X_ACCESS_TOKEN,
  accessSecret: process.env.X_ACCESS_SECRET,
});

async function mustGetMe() {
  const me = await client.v2.me();
  return me.data;
}

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function wrapTitle(title, maxChars) {
  const words = title.split(/\s+/);
  const lines = [];
  let cur = '';
  for (const w of words) {
    if ((cur + ' ' + w).trim().length > maxChars) { lines.push(cur.trim()); cur = w; }
    else cur += ' ' + w;
  }
  if (cur.trim()) lines.push(cur.trim());
  return lines;
}

function buildCardSvg(title) {
  let fontSize = 56, lines = wrapTitle(title, 30);
  if (lines.length > 4) { fontSize = 46; lines = wrapTitle(title, 38); }
  if (lines.length > 4) lines = lines.slice(0, 4);
  const lineH = fontSize * 1.28;
  const startY = 340 - ((lines.length - 1) * lineH) / 2;
  const titleText = lines.map((l, i) =>
    `<text x="90" y="${startY + i * lineH}" font-family="Arial,Helvetica,sans-serif" font-size="${fontSize}" font-weight="800" fill="url(#txt)">${esc(l)}</text>`
  ).join('\n    ');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0a0a0a"/><stop offset="1" stop-color="#111118"/>
    </linearGradient>
    <linearGradient id="txt" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#22d3ee"/><stop offset="0.55" stop-color="#3b82f6"/><stop offset="1" stop-color="#8b5cf6"/>
    </linearGradient>
    <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="1200" height="675" fill="url(#bg)"/>
  <g stroke="#22d3ee" stroke-width="2.5" fill="none" opacity="0.4" filter="url(#glow)">
    <path d="M0 90 H70 L110 130 H185"/><path d="M0 585 H90 L130 545 H200"/>
  </g>
  <g fill="#22d3ee" opacity="0.7"><circle cx="185" cy="130" r="4"/><circle cx="200" cy="545" r="4"/></g>
  <g stroke="#8b5cf6" stroke-width="2.5" fill="none" opacity="0.4" filter="url(#glow)">
    <path d="M1200 110 H1130 L1090 150 H1015"/><path d="M1200 600 H1110 L1070 560 H1000"/>
  </g>
  <g fill="#8b5cf6" opacity="0.7"><circle cx="1015" cy="150" r="4"/><circle cx="1000" cy="560" r="4"/></g>
  <text x="90" y="120" font-family="Arial,Helvetica,sans-serif" font-size="30" font-weight="800" letter-spacing="5" fill="#22d3ee">AI IN CHINA</text>
  <rect x="330" y="96" width="200" height="36" rx="18" fill="none" stroke="#8b5cf6" stroke-width="1.5" opacity="0.85"/>
  <text x="430" y="121" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="18" font-weight="700" letter-spacing="3" fill="#8b5cf6">DAILY DEEP DIVE</text>
  ${titleText}
  <text x="90" y="600" font-family="Arial,Helvetica,sans-serif" font-size="26" font-weight="600" fill="#525252" letter-spacing="3">ainchina.com</text>
  <rect x="90" y="618" width="180" height="3" rx="1.5" fill="url(#txt)" opacity="0.9"/>
</svg>`;
}

async function uploadCard(title) {
  const svg = buildCardSvg(title);
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  console.log(`card generated (${png.length} bytes)`);
  const mediaId = await client.v1.uploadMedia(png, { mimeType: 'image/png' });
  console.log('card uploaded, media_id:', mediaId);
  return mediaId;
}

async function runPost() {
  const hook = process.env.TWEET_HOOK;
  const title = process.env.TWEET_TITLE;
  const url = process.env.TWEET_URL;
  const slug = process.env.TWEET_SLUG;
  if (!hook || !title || !url) {
    console.error('Missing TWEET_HOOK / TWEET_TITLE / TWEET_URL');
    process.exit(1);
  }

  const tags = '#ChinaAI #AI';
  let replyText = `${title}\n\n${url}\n\n${tags}`;
  if (replyText.length > 280) {
    const budget = 280 - (url.length + tags.length + 4);
    replyText = `${title.slice(0, budget - 3)}...\n\n${url}\n\n${tags}`;
  }

  console.log(`[${slug}] MAIN (${hook.length}/280):`, hook);
  console.log(`[${slug}] REPLY (${replyText.length}/280):`, replyText.replace(/\n/g, ' | '));

  let main;
  if (process.env.DRY_RUN === 'true') {
    console.log('DRY RUN — skipping tweets');
    return;
  }
  try {
    const mediaId = await uploadCard(title);
    main = await client.v2.tweet(hook, { media: { media_ids: [mediaId] } });
  } catch (e) {
    console.log('⚠️ card upload/attach failed, posting text-only:', (e.message || '').slice(0, 140));
    main = await client.v2.tweet(hook);
  }
  console.log('✅ MAIN posted:', `https://x.com/AInChina5/status/${main.data.id}`);

  const reply = await client.v2.tweet(replyText, { reply: { in_reply_to_tweet_id: main.data.id } });
  console.log('✅ REPLY posted:', `https://x.com/AInChina5/status/${reply.data.id}`);
}

async function runSearch() {
  const query = process.env.SEARCH_QUERY;
  if (!query) { console.error('Missing SEARCH_QUERY'); process.exit(1); }
  const users = {};
  let tweets = [];
  try {
    const res = await client.v2.search(query, {
      max_results: 15,
      'tweet.fields': ['public_metrics', 'created_at', 'author_id'],
      expansions: ['author_id'],
      'user.fields': ['username', 'name', 'followers_count'],
    });
    tweets = res.data.data || [];
    for (const u of res.data.includes?.users || []) users[u.id] = u;
  } catch (e1) {
    console.log('full-params search failed, retrying minimal:', (e1.message || '').slice(0, 120));
    try {
      const res = await client.v2.search(query, { max_results: 10, 'tweet.fields': ['public_metrics', 'created_at'] });
      tweets = res.data.data || [];
    } catch (e2) {
      console.log('minimal search failed, trying bare:', (e2.message || '').slice(0, 120));
      const res = await client.v2.search(query);
      tweets = res.data.data || [];
    }
  }
  console.log('===SEARCH_RESULTS===');
  for (const t of tweets) {
    const u = users[t.author_id] || {};
    const m = t.public_metrics || {};
    console.log(JSON.stringify({
      id: t.id,
      author: u.username,
      followers: u.followers_count,
      likes: m.like_count, replies: m.reply_count, reposts: m.retweet_count,
      text: t.text.slice(0, 200),
      created: t.created_at,
    }));
  }
  console.log('===END===');
}

async function runReply() {
  const text = process.env.REPLY_TEXT;
  const toId = process.env.REPLY_TO_ID;
  if (!text || !toId) { console.error('Missing REPLY_TEXT / REPLY_TO_ID'); process.exit(1); }
  if (text.length > 280) { console.error('Reply exceeds 280 chars:', text.length); process.exit(1); }
  const res = await client.v2.tweet(text, { reply: { in_reply_to_tweet_id: toId } });
  console.log('✅ REPLY posted:', `https://x.com/AInChina5/status/${res.data.id}`);
}

const SWEEP_ACCOUNTS = ['DylanPatel', 'drjimfan', 'TheZvi', 'rowancheung', 'paulmozur', 'CateCadell', 'kaboroevich', 'MattSheehan88', 'niubi'];
const SWEEP_KEYWORDS = /deepseek|qwen|huawei|ascend|moonshot|kimi|stepfun|manus|cambricon|minimax|zhipu|alibaba|tencent|baidu|smic|chiplet|ai chip|china[\s\S]{0,16}(ai|model|chip|tech)|ai[\s\S]{0,12}china/i;

async function runResolve() {
  const me = await client.v2.me();
  console.log('ME_ID:', me.data.id, '@' + me.data.username);
  console.log('===RESOLVE_RESULTS===');
  for (const username of SWEEP_ACCOUNTS) {
    try {
      const u = await client.v2.userByUsername(username);
      console.log(JSON.stringify({ username, id: u.data.id, followers: u.data.public_metrics?.followers_count }));
    } catch (e) {
      console.log(JSON.stringify({ username, error: (e.message || '').slice(0, 80) }));
    }
  }
  console.log('===END===');
}

async function runSweep() {
  const likeTop = parseInt(process.env.LIKE_TOP || '0', 10);
  const me = await client.v2.me();
  const accountsFile = 'scripts/x-accounts.json';
  let idMap = {};
  try { idMap = JSON.parse(fs.readFileSync(accountsFile, 'utf8')); } catch { idMap = {}; }

  const candidates = [];
  for (const [username, id] of Object.entries(idMap)) {
    try {
      const tl = await client.v2.userTimeline(id, {
        max_results: 10,
        'tweet.fields': ['public_metrics', 'created_at'],
      });
      for (const t of tl.data.data || []) {
        if (t.text.startsWith('RT @')) continue;
        if (/ainchina\.com/i.test(t.text)) continue;
        if (!SWEEP_KEYWORDS.test(t.text)) continue;
        const m = t.public_metrics || {};
        if ((m.like_count || 0) < 15) continue;
        candidates.push({ id: t.id, author: username, likes: m.like_count || 0, reposts: m.retweet_count || 0, replies: m.reply_count || 0, text: t.text.replace(/\s+/g, ' ').slice(0, 220), created: t.created_at });
      }
    } catch (e) {
      console.log(`timeline @${username} failed:`, (e.message || '').slice(0, 100));
    }
  }
  candidates.sort((a, b) => b.likes - a.likes);

  let liked = 0;
  for (const c of candidates.slice(0, likeTop)) {
    try {
      await client.v2.like(me.data.id, c.id);
      liked++;
      console.log(`❤️ liked @${c.author} (${c.likes} likes) ${c.id}`);
    } catch (e) {
      console.log(`like failed ${c.id}:`, (e.message || '').slice(0, 80));
    }
  }

  // Follow sweep accounts (free, idempotent) — notifications put @AInChina5 on their radar
  let followed = 0;
  for (const [username, id] of Object.entries(idMap)) {
    try {
      await client.v1.createFriendship({ user_id: id });
      followed++;
    } catch (e) {
      console.log(`follow @${username} skipped:`, (e.message || '').slice(0, 60));
    }
  }
  console.log(`followed/confirmed: ${followed}/${Object.keys(idMap).length}`);

  console.log('===SWEEP_RESULTS===');
  for (const c of candidates.slice(0, 12)) console.log(JSON.stringify(c));
  console.log('===END===');
  console.log(`candidates: ${candidates.length}, liked: ${liked}`);
}

async function runDiag() {
  const me = await client.v2.me({ 'user.fields': ['created_at', 'verified', 'protected', 'withheld', 'public_metrics', 'description'] });
  console.log('===ME===');
  console.log(JSON.stringify(me.data));
  console.log('===TWEETS===');
  const tl = await client.v2.userTimeline(me.data.id, {
    max_results: 10,
    'tweet.fields': ['created_at', 'public_metrics', 'organic_metrics'],
  });
  for (const t of tl.data.data || []) {
    console.log(JSON.stringify({
      id: t.id, created: t.created_at,
      impressions: t.organic_metrics?.impression_count ?? null,
      likes: t.public_metrics?.like_count, replies: t.public_metrics?.reply_count,
      reposts: t.public_metrics?.retweet_count,
      text: t.text.slice(0, 80),
    }));
  }
  console.log('===END===');
}

(async () => {
  try {
    if (process.env.DRY_RUN === 'true') {
      const me = await mustGetMe();
      console.log('✅ DRY RUN OK — creds valid for @' + me.username);
      return;
    }
    if (MODE === 'search') await runSearch();
    else if (MODE === 'reply') await runReply();
    else if (MODE === 'resolve') await runResolve();
    else if (MODE === 'sweep') await runSweep();
    else if (MODE === 'diag') await runDiag();
    else await runPost();
  } catch (err) {
    console.error('❌ FAILED:', err.message || err);
    if (err.data) console.error(JSON.stringify(err.data).slice(0, 500));
    process.exit(1);
  }
})();
