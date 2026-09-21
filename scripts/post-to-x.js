#!/usr/bin/env node
/**
 * Post latest AI in China article to X (Twitter).
 * Usage: node scripts/post-to-x.js [--slug <slug>]
 * Requires env vars: X_API_KEY, X_API_SECRET, X_ACCESS_TOKEN, X_ACCESS_SECRET
 * Optional: X_BEARER_TOKEN (not used for posting)
 */
const { TwitterApi } = require('twitter-api-v2');

async function main() {
  const args = process.argv.slice(2);
  let slug = null;
  const slugIdx = args.indexOf('--slug');
  if (slugIdx !== -1) slug = args[slugIdx + 1];

  const { allPosts } = require('../lib/posts-meta');
  const post = slug
    ? allPosts.find(p => p.slug === slug)
    : allPosts[0];

  if (!post) {
    console.error('❌ No post found' + (slug ? ` for slug: ${slug}` : ''));
    process.exit(1);
  }

  const url = `https://www.ainchina.com/blog/${post.slug}/`;
  const tags = ['ChinaAI', 'AI', 'DeepSeek', 'Qwen', 'Kimi'].slice(0, 3).map(t => '#' + t).join(' ');

  // Compose tweet within 280 chars
  let text = `${post.title}\n\n${url}\n\n${tags}`;
  if (text.length > 280) {
    // Shorten title to fit
    const budget = 280 - (url.length + tags.length + 4);
    const shortTitle = post.title.slice(0, budget - 3) + '...';
    text = `${shortTitle}\n\n${url}\n\n${tags}`;
  }

  console.log('📝 Tweet preview:');
  console.log('─'.repeat(40));
  console.log(text);
  console.log('─'.repeat(40));
  console.log(`Length: ${text.length}/280`);

  const required = ['X_API_KEY', 'X_API_SECRET', 'X_ACCESS_TOKEN', 'X_ACCESS_SECRET'];
  const missing = required.filter(k => !process.env[k]);
  if (missing.length) {
    console.error('❌ Missing env vars: ' + missing.join(', '));
    console.error('Set them in ~/.openclaw/workspace/ainchina-hello/.env.local or export before running.');
    process.exit(1);
  }

  const client = new TwitterApi({
    appKey: process.env.X_API_KEY,
    appSecret: process.env.X_API_SECRET,
    accessToken: process.env.X_ACCESS_TOKEN,
    accessSecret: process.env.X_ACCESS_SECRET,
  });

  try {
    const result = await client.v2.tweet(text);
    console.log('✅ Posted to X:', `https://x.com/AInChina5/status/${result.data.id}`);
  } catch (err) {
    console.error('❌ Post failed:', err.message || err);
    if (err.data) console.error('Details:', JSON.stringify(err.data, null, 2));
    process.exit(1);
  }
}

main();
