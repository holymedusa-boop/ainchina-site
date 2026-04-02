# MEMORY.md - Critical Standards

## Content Generation - Language Standard (CRITICAL)

**Rule #1: ALL articles MUST be written in ENGLISH**

This is non-negotiable. The website ain-china.com targets international English-speaking readers.

### Why This Matters
- April 2, 2026: Generated Chinese article by mistake → User corrected me
- April 3, 2026: Generated Chinese article again → User corrected me again  
- **Pattern identified**: When source data is Chinese, I default to Chinese output

### Prevention Checklist (Run before publishing)

Before finalizing ANY article:

1. [ ] **Title is in English**
2. [ ] **Article body is 90%+ English**
3. [ ] **Only social media comments section contains Chinese** (with translations)
4. [ ] **All data tables have English headers**
5. [ ] **Frontmatter excerpt is in English**

If any check fails → REWRITE immediately.

### Source vs Output Language

| Source Data Language | Output Must Be |
|---------------------|----------------|
| Chinese news | English article |
| English reports | English article |
| Mixed sources | English article |

**Never** write article body in Chinese.

---

## Benchmark Article Analysis (MUST READ BEFORE WRITING)

Before generating new content, mentally reference these标杆 articles:

### MiniMax Talkie Article (Gold Standard)
```
Slug: minimax-talkie
Word Count: ~3,400 words
Sections: 9 deep-dive sections
Data Tables: 8 structured tables
Social Comments: 6 bilingual comments
Images: 3 (hero + 2 inline)
Reading Time: 16 minutes
Tone: Analytical + storytelling
Depth: Funding, tech, user feedback, global implications
```

### Doubao ByteDance Article (Gold Standard)
```
Slug: doubao-bytedance
Word Count: ~3,200 words
Sections: 8 sections
Data Tables: 8 tables
Social Comments: 6 comments
Images: 3
Reading Time: 15 minutes
Tone: Professional journalism
Depth: Ecosystem integration, user workflow, business model
```

### AI Thesis Writing Article (Gold Standard)
```
Slug: ai-thesis-writing-china
Word Count: ~3,400 words
Sections: 9 sections
Data Tables: 9 tables
Social Comments: 6 comments
Images: 3
Reading Time: 16 minutes
Tone: Phenomenon analysis + data-driven
Depth: User behavior, tools comparison, social commentary
```

---

## Quality Standards Checklist (BEFORE PUBLISHING)

### Length & Depth
- [ ] **Word count: 2,800 - 3,500 words** (check with wc command)
- [ ] **8-9 sections minimum** (H2 headings count)
- [ ] **Each section has substance** (not just bullet points)
- [ ] **Reading time: 14-18 minutes** stated in frontmatter

### Data & Analysis
- [ ] **6-8 structured tables** with proper headers
- [ ] **Original analysis** (not just news summary)
- [ ] **Comparative metrics** (vs competitors)
- [ ] **User/real-world data** (not just company claims)

### Visual Content
- [ ] **Hero image** (1200x600, Unsplash AI/tech themed)
- [ ] **2-3 inline images** (800x400, placed between sections)
- [ ] **All images have captions** (*italicized text below image*)
- [ ] **Image alt text** descriptive for SEO

### Social Media Comments
- [ ] **6 comments total**
- [ ] **Mixed sources**: Zhihu, Xiaohongshu, Weibo, Twitter/X, Douban, GitHub
- [ ] **Bilingual format**: Chinese quote + English translation
- [ ] **Diverse viewpoints**: Positive, skeptical, analytical
- [ ] **Engagement metrics**: 👍 ❤️ 🔁 ⭐ counts shown

### SEO Optimization
- [ ] **Meta title**: < 60 chars, includes main keyword
- [ ] **Meta description**: 150-160 chars, compelling
- [ ] **Keywords**: 8-10 relevant terms in meta
- [ ] **JSON-LD structured data**: TechArticle schema
- [ ] **URL slug**: kebab-case, keyword-rich
- [ ] **Related articles**: 4 internal links at bottom

### Content Structure
- [ ] **Compelling headline** with data hook ($X billion, XX million users)
- [ ] **Executive summary** at top (key metrics table)
- [ ] **"Why This Matters"** section explaining global significance
- [ ] **User voices/social comments** section
- [ ] **Competitive analysis** table
- [ ] **Future outlook** with milestones
- [ ] **Conclusion** with key insight
- [ ] **Disclaimer** at bottom

---

## Reference Files

- **CONTENT_STANDARDS.md** - Full quality guidelines
- **ainchina-agents/reports/** - Daily market briefs (may be in Chinese)
- **content/posts/** - Published articles
- **ainchina-hello/app/blog/** - Next.js blog implementation

---

## Daily Workflow (Cron at 4:15 AM)

When woken by cron:
1. **READ THIS MEMORY.MD** (language + benchmark standards)
2. Read reports from `/ainchina-agents/reports/`
3. Execute kimi_search for latest Chinese AI news
4. **MENTALLY REFERENCE MiniMax/Doubao article structure**
5. Write article in ENGLISH following ALL checklists above
6. **RUN FULL QUALITY CHECKLIST** (length, depth, images, SEO)
7. Save to `content/posts/`
8. Git add, commit, push
9. Verify deployment

---

## Mistake Log

### 2026-04-02
- **Error**: Generated Chinese article
- **Impact**: User had to manually rewrite
- **Fix**: Re-wrote in English

### 2026-04-03  
- **Error**: Generated Chinese article again
- **Impact**: User frustration, pattern identified
- **Fix**: Re-wrote in English, created this MEMORY.md

---

## User Preferences

- **Content Language**: English only
- **Quality Standard**: Match MiniMax/Doubao articles exactly
- **Execution Mode**: Direct (no subagents for content generation)
- **Wake Mechanism**: Cron job at 4:15 AM daily
- **Verification**: Run full checklist before every publish

---

*Last updated: April 3, 2026*
*Critical Rules: 1 (Language)*
*Quality Checks: 25 items*
*Benchmark Articles: 3*
