const fs = require('fs');
const path = require('path');

const postsDir = 'content/posts';
const report = JSON.parse(fs.readFileSync('duplicate-images-report.json', 'utf-8'));

let fixed = 0;

for (const issue of report) {
  const filePath = path.join(postsDir, issue.file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Find the first markdown image line in body (after frontmatter)
  const fmEnd = content.indexOf('---\n', 3) + 4; // end of frontmatter
  const body = content.slice(fmEnd);
  const imgMatch = body.match(/!\[.*?\]\((.+?)\)/);
  if (!imgMatch) continue;

  // Remove the image line (and any immediately following italic caption line)
  const imgLine = imgMatch[0];
  const bodyLines = body.split('\n');
  let lineIdx = -1;
  for (let i = 0; i < bodyLines.length; i++) {
    if (bodyLines[i].includes(imgLine)) {
      lineIdx = i;
      break;
    }
  }
  if (lineIdx === -1) continue;

  // Check if next line is italic caption (starts with * and ends with *)
  const nextLine = bodyLines[lineIdx + 1];
  const hasCaption = nextLine && nextLine.trim().startsWith('*') && nextLine.trim().endsWith('*');

  // Remove image line (and optional caption)
  bodyLines.splice(lineIdx, hasCaption ? 2 : 1);
  const newBody = bodyLines.join('\n');

  content = content.slice(0, fmEnd) + newBody;

  fs.writeFileSync(filePath, content);
  console.log(`✅ Fixed: ${issue.file}`);
  fixed++;
}

console.log(`\n🎉 Fixed ${fixed} articles`);
