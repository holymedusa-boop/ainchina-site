const fs = require('fs');
const path = require('path');

// Read the full article content
const articlePath = path.join(__dirname, '../content/posts/ai-compute-crunch-china-token-crisis-2026.md');
const pageJsPath = path.join(__dirname, '../app/blog/[slug]/page.js');

const articleContent = fs.readFileSync(articlePath, 'utf-8');

// Extract body (remove frontmatter)
const bodyMatch = articleContent.match(/---[\s\S]*?---\s*([\s\S]*)/);
const body = bodyMatch ? bodyMatch[1].trim() : articleContent;

// Escape for JavaScript template literal
const escaped = body
  .replace(/\\/g, '\\\\')
  .replace(/`/g, '\\`')
  .replace(/\$/g, '\\$');

// Create the new posts entry
const newEntry = `  'ai-compute-crunch-china-token-crisis-2026': {
    title: "The Great AI Compute Crunch: How China's AI Boom Is Running Out of Tokens",
    category: 'AI Infrastructure',
    date: 'April 29, 2026',
    readTime: '17 min read',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop',
    content: \`
${escaped}
\`,
  },`;

// Read current page.js
let pageJs = fs.readFileSync(pageJsPath, 'utf-8');

// Insert after 'const posts = {'
pageJs = pageJs.replace(
  /const posts = \{/,
  `const posts = {\n${newEntry}`
);

console.log('✅ 已插入新文章条目到 posts');

// Now add to postMetadata
const newMetaEntry = `  'ai-compute-crunch-china-token-crisis-2026': {
    metaTitle: "The Great AI Compute Crunch: How China's AI Boom Is Running Out of Tokens",
    metaDescription: "As DeepSeek V4 and Kimi K2.6 launched in April 2026, China's AI infrastructure hit a wall. Cloud prices surged 5%–463%, APIs failed under agent-driven demand, and Huawei Ascend chips became the unlikely lifeline. Inside the first AI inflation crisis.",
    keywords: 'China AI, AI compute crunch, token shortage, cloud price hike, Huawei Ascend, DeepSeek V4, MiniMax, Kimi K2.6, AI inflation, OpenClaw agent, AI infrastructure, China cloud computing, AI token economy',
  },`;

pageJs = pageJs.replace(
  /const postMetadata = \{/,
  `const postMetadata = {\n${newMetaEntry}`
);

console.log('✅ 已插入新文章条目到 postMetadata');

// Write back
fs.writeFileSync(pageJsPath, pageJs, 'utf-8');
console.log('✅ page.js 已更新');
console.log('📊 内容统计:');
console.log('   - 字符数:', body.length);
console.log('   - 估计词数:', body.split(/\s+/).length);
console.log('   - 表格行数:', (body.match(/\|.*\|.*\|/g) || []).length);
