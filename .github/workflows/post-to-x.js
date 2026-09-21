/**
 * GitHub Actions runner script: post article to X.
 * Env: X_API_KEY / X_API_SECRET / X_ACCESS_TOKEN / X_ACCESS_SECRET
 *      TWEET_TITLE / TWEET_URL / TWEET_SLUG
 */
const { TwitterApi } = require('twitter-api-v2');

const title = process.env.TWEET_TITLE;
const url = process.env.TWEET_URL;
const slug = process.env.TWEET_SLUG;

if (!title || !url) {
  console.error('Missing TWEET_TITLE or TWEET_URL');
  process.exit(1);
}

const tags = '#ChinaAI #AI';
let text = `${title}\n\n${url}\n\n${tags}`;
if (text.length > 280) {
  const budget = 280 - (url.length + tags.length + 4);
  text = `${title.slice(0, budget - 3)}...\n\n${url}\n\n${tags}`;
}

console.log(`[${slug}] Tweet (${text.length}/280 chars):`);
console.log(text);

const client = new TwitterApi({
  appKey: process.env.X_API_KEY,
  appSecret: process.env.X_API_SECRET,
  accessToken: process.env.X_ACCESS_TOKEN,
  accessSecret: process.env.X_ACCESS_SECRET,
});

if (process.env.DRY_RUN === 'true') {
  client.v2
    .me()
    .then((me) => {
      console.log('✅ DRY RUN OK — creds valid for @' + me.data.username);
    })
    .catch((err) => {
      console.error('❌ DRY RUN FAILED:', err.message || err);
      if (err.data) console.error(JSON.stringify(err.data));
      process.exit(1);
    });
} else {
  client.v2
    .tweet(text)
    .then((res) => {
      console.log('✅ Posted:', `https://x.com/AInChina5/status/${res.data.id}`);
    })
    .catch((err) => {
      console.error('❌ Post failed:', err.message || err);
      if (err.data) console.error(JSON.stringify(err.data));
      process.exit(1);
    });
}
