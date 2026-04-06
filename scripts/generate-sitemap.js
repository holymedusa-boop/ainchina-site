#!/usr/bin/env node

/**
 * AI in China - Sitemap Generator
 * 
 * 自动生成 sitemap.xml 从 lib/posts-meta.js
 * 用法: node scripts/generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

// 项目根目录
const ROOT_DIR = path.resolve(__dirname, '..');
const POSTS_META_PATH = path.join(ROOT_DIR, 'lib', 'posts-meta.js');
const SITEMAP_PATH = path.join(ROOT_DIR, 'public', 'sitemap.xml');

// 基础 URL
const BASE_URL = 'https://www.ainchina.com';

// 今天的日期
const today = new Date().toISOString().split('T')[0];

function generateSitemap() {
  try {
    // 读取并解析 posts-meta.js
    const metaContent = fs.readFileSync(POSTS_META_PATH, 'utf-8');
    
    // 提取 allPosts 数组（简单解析，假设格式稳定）
    const postsMatch = metaContent.match(/const\s+allPosts\s*=\s*(\[.*?\]);/s);
    if (!postsMatch) {
      throw new Error('无法找到 allPosts 数组');
    }
    
    // 使用 eval 安全地解析数组（因为是本地文件）
    let allPosts;
    try {
      allPosts = eval(postsMatch[1]);
    } catch (e) {
      // 如果 eval 失败，尝试更宽松的解析
      allPosts = parsePostsArray(metaContent);
    }
    
    if (!Array.isArray(allPosts) || allPosts.length === 0) {
      throw new Error('无法解析文章列表或列表为空');
    }
    
    console.log(`📚 找到 ${allPosts.length} 篇文章`);
    
    // 按分类分组（用于日志输出）
    const byCategory = {};
    allPosts.forEach(post => {
      const cat = post.category || 'Uncategorized';
      if (!byCategory[cat]) byCategory[cat] = [];
      byCategory[cat].push(post);
    });
    
    // 输出分类统计
    console.log('\n📊 文章分类统计:');
    Object.entries(byCategory).forEach(([cat, posts]) => {
      console.log(`  ${cat}: ${posts.length} 篇`);
    });
    
    // 生成 XML
    const sitemap = buildSitemapXML(allPosts);
    
    // 写入文件
    fs.writeFileSync(SITEMAP_PATH, sitemap, 'utf-8');
    
    console.log(`\n✅ Sitemap 生成成功!`);
    console.log(`   文件: ${SITEMAP_PATH}`);
    console.log(`   URL 数量: ${allPosts.length + 3} (文章 + 基础页面)`);
    console.log(`   文件大小: ${(fs.statSync(SITEMAP_PATH).size / 1024).toFixed(2)} KB`);
    
    return true;
    
  } catch (error) {
    console.error('❌ 生成 sitemap 失败:', error.message);
    process.exit(1);
  }
}

/**
 * 备选解析方法：从内容中提取文章数据
 */
function parsePostsArray(content) {
  const posts = [];
  
  // 匹配每个文章对象
  const postRegex = /\{\s*slug:\s*['"]([^'"]+)['"],\s*title:\s*['"]([^'"]+)['"],\s*category:\s*['"]([^'"]+)['"],[^}]*date:\s*['"]([^'"]+)['"]/g;
  
  let match;
  while ((match = postRegex.exec(content)) !== null) {
    posts.push({
      slug: match[1],
      title: match[2],
      category: match[3],
      date: match[4]
    });
  }
  
  return posts;
}

/**
 * 构建 Sitemap XML
 */
function buildSitemapXML(posts) {
  // 按日期排序（最新的在前）
  const sortedPosts = [...posts].sort((a, b) => {
    return new Date(b.date || '2026-01-01') - new Date(a.date || '2026-01-01');
  });
  
  // XML 头部
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  xml += `\n`;
  xml += `  <!-- Generated: ${new Date().toISOString()} -->\n`;
  xml += `  <!-- Total Posts: ${posts.length} -->\n`;
  xml += `\n`;
  
  // 首页
  xml += `  <!-- Homepage -->\n`;
  xml += `  <url>\n`;
  xml += `    <loc>${BASE_URL}/</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += `    <changefreq>daily</changefreq>\n`;
  xml += `    <priority>1.0</priority>\n`;
  xml += `  </url>\n`;
  xml += `\n`;
  
  // Blog 列表页
  xml += `  <!-- Blog Index -->\n`;
  xml += `  <url>\n`;
  xml += `    <loc>${BASE_URL}/blog</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += `    <changefreq>daily</changefreq>\n`;
  xml += `    <priority>0.9</priority>\n`;
  xml += `  </url>\n`;
  xml += `\n`;
  
  // 关于页面
  xml += `  <!-- About Page -->\n`;
  xml += `  <url>\n`;
  xml += `    <loc>${BASE_URL}/about</loc>\n`;
  xml += `    <lastmod>2026-03-31</lastmod>\n`;
  xml += `    <changefreq>monthly</changefreq>\n`;
  xml += `    <priority>0.5</priority>\n`;
  xml += `  </url>\n`;
  xml += `\n`;
  
  // HTML Sitemap 页面
  xml += `  <!-- HTML Sitemap -->\n`;
  xml += `  <url>\n`;
  xml += `    <loc>${BASE_URL}/sitemap</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += `    <changefreq>weekly</changefreq>\n`;
  xml += `    <priority>0.3</priority>\n`;
  xml += `  </url>\n`;
  xml += `\n`;
  
  // 按分类分组输出文章
  const byCategory = {};
  sortedPosts.forEach(post => {
    const cat = post.category || 'Uncategorized';
    if (!byCategory[cat]) byCategory[cat] = [];
    byCategory[cat].push(post);
  });
  
  // 输出每个分类的文章
  Object.entries(byCategory).forEach(([category, categoryPosts]) => {
    xml += `  <!-- ${category} -->\n`;
    
    categoryPosts.forEach(post => {
      const priority = getPriorityByCategory(category);
      const changefreq = getChangefreqByDate(post.date);
      
      xml += `  <url>\n`;
      xml += `    <loc>${BASE_URL}/blog/${post.slug}</loc>\n`;
      xml += `    <lastmod>${post.date || today}</lastmod>\n`;
      xml += `    <changefreq>${changefreq}</changefreq>\n`;
      xml += `    <priority>${priority}</priority>\n`;
      xml += `  </url>\n`;
    });
    
    xml += `\n`;
  });
  
  xml += `</urlset>\n`;
  
  return xml;
}

/**
 * 根据分类获取优先级
 */
function getPriorityByCategory(category) {
  const priorities = {
    'AI Trends': '0.8',
    'AI Infrastructure': '0.8',
    'AI Applications': '0.8',
    'AI Chatbots': '0.8',
    'Market Intelligence': '0.8',
    'Technical Analysis': '0.7',
    'AI Video': '0.7',
  };
  return priorities[category] || '0.6';
}

/**
 * 根据发布日期获取更新频率
 * 新文章更新更频繁
 */
function getChangefreqByDate(dateStr) {
  if (!dateStr) return 'weekly';
  
  const postDate = new Date(dateStr);
  const now = new Date();
  const daysDiff = Math.floor((now - postDate) / (1000 * 60 * 60 * 24));
  
  if (daysDiff < 7) return 'daily';      // 一周内：每天
  if (daysDiff < 30) return 'weekly';    // 一月内：每周
  return 'monthly';                       //  older：每月
}

// 执行生成
if (require.main === module) {
  console.log('🚀 AI in China - Sitemap Generator\n');
  generateSitemap();
}

module.exports = { generateSitemap };
