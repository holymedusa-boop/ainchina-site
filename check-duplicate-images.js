const fs = require('fs');
const path = require('path');

const postsDir = 'content/posts';
const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));

const issues = [];

for (const file of files) {
  const filePath = path.join(postsDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');

  // Extract frontmatter image
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---\n/);
  if (!fmMatch) continue;

  const fmImage = fmMatch[1].match(/image:\s*["']?(.+?)["']?\s*$/m);
  if (!fmImage) continue;

  const heroUrl = fmImage[1].trim();

  // Find first markdown image in body (after frontmatter)
  const body = content.slice(fmMatch[0].length);
  const firstImg = body.match(/!\[.*?\]\((.+?)\)/);
  if (!firstImg) continue;

  const bodyUrl = firstImg[1].trim();

  // Check if they're the same (allow for query param differences)
  const heroBase = heroUrl.split('?')[0].replace(/\/?$/, '');
  const bodyBase = bodyUrl.split('?')[0].replace(/\/?$/, '');

  if (heroBase === bodyBase || heroUrl === bodyUrl) {
    issues.push({
      file,
      heroUrl,
      bodyUrl,
      firstImg: firstImg[0]
    });
  }
}

if (issues.length === 0) {
  console.log('✅ No duplicate image issues found');
} else {
  console.log(`⚠️ Found ${issues.length} articles with duplicate first images:\n`);
  issues.forEach(i => {
    console.log(`📄 ${i.file}`);
    console.log(`  hero: ${i.heroUrl}`);
    console.log(`  body: ${i.bodyUrl}`);
    console.log(`  match: ${i.firstImg}`);
    console.log('');
  });
}

// Write report
fs.writeFileSync('duplicate-images-report.json', JSON.stringify(issues, null, 2));
