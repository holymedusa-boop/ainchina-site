/**
 * GitHub Actions runner for @AInChina5 X account.
 * Modes (env MODE):
 *  - post   (default): hook tweet (no link) + self-reply with article link
 *  - search: recent search, prints results to stdout (retrieved via logs)
 *  - reply:  post a reply to an existing tweet
 * Env: X_API_KEY / X_API_SECRET / X_ACCESS_TOKEN / X_ACCESS_SECRET
 */
const { TwitterApi } = require('twitter-api-v2');

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

  const main = await client.v2.tweet(hook);
  console.log('✅ MAIN posted:', `https://x.com/AInChina5/status/${main.data.id}`);

  const reply = await client.v2.tweet(replyText, { reply: { in_reply_to_tweet_id: main.data.id } });
  console.log('✅ REPLY posted:', `https://x.com/AInChina5/status/${reply.data.id}`);
}

async function runSearch() {
  const query = process.env.SEARCH_QUERY;
  if (!query) { console.error('Missing SEARCH_QUERY'); process.exit(1); }
  const res = await client.v2.search(query, {
    max_results: 15,
    'tweet.fields': ['public_metrics', 'created_at', 'author_id'],
    expansions: ['author_id'],
    'user.fields': ['username', 'name', 'followers_count'],
  });
  const users = {};
  for (const u of res.data.includes?.users || []) users[u.id] = u;
  console.log('===SEARCH_RESULTS===');
  for (const t of res.data.data || []) {
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

(async () => {
  try {
    if (process.env.DRY_RUN === 'true') {
      const me = await mustGetMe();
      console.log('✅ DRY RUN OK — creds valid for @' + me.username);
      return;
    }
    if (MODE === 'search') await runSearch();
    else if (MODE === 'reply') await runReply();
    else await runPost();
  } catch (err) {
    console.error('❌ FAILED:', err.message || err);
    if (err.data) console.error(JSON.stringify(err.data).slice(0, 500));
    process.exit(1);
  }
})();
