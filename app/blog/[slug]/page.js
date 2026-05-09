import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'
import Link from 'next/link'

// SEO Metadata for each article
const postMetadata = {
  'kimi-20-billion-valuation-china-ai-token-economy': {
    metaTitle: "Kimi's $20 Billion Bet: China's AI Token Economy Rewrites Global Power",
    metaDescription: "Kimi closes $2B funding at $20B valuation while China's AI models consume 7.94 trillion tokens weekly, 2.4x America's output. Inside the shift that's moving AI's center of gravity east.",
    keywords: 'Kimi, Moonshot AI, China AI, token economy, OpenRouter, AI funding, AI valuation, Chinese AI models, AI consumption, API traffic, Kimi K2.6, DeepSeek, MiniMax, AI industry analysis',
  },
  'china-embodied-intelligence-revolution-2026': {
    metaTitle: "China's Embodied Intelligence Revolution: 230+ Companies, $110B Market Reshaping Robotics",
    metaDescription: "China's embodied intelligence industry surges from 1,800 humanoid robots in 2025 to 100,000+ projected for 2026. With 230+ companies, $195B in annual funding, and supply chain costs at 50% of Western equivalents, China is building the physical AI revolution.",
    keywords: 'embodied intelligence, humanoid robot, China AI, robotics industry, Unitree, UBTECH, embodied AI, VLA model, manufacturing automation, China robotics 2026',
  },
  'china-ai-revolution-may-2026-tokens-deepseek-huawei': {
    metaTitle: "China's AI Revolution: 140 Trillion Tokens, DeepSeek V4 on Huawei, and the $700B Arms Race",
    metaDescription: "Stanford's 2026 AI Index: US-China AI gap narrowed to 2.7%. DeepSeek V4 launches on Huawei Ascend chips, breaking NVIDIA's CUDA monopoly. China processes 140 trillion tokens daily. Inside the shift reshaping global technology.",
    keywords: 'China AI, DeepSeek V4, Huawei Ascend, token economy, AI infrastructure, NVIDIA CUDA, China chips, AI competition, Stanford AI Index, Kimi K3, Moonshot AI, Alibaba Token Hub, AI CapEx',
  },
  'ai-compute-crunch-china-token-crisis-2026': {
    metaTitle: "The Great AI Compute Crunch: How China's AI Boom Is Running Out of Tokens",
    metaDescription: "As DeepSeek V4 and Kimi K2.6 launched in April 2026, China's AI infrastructure hit a wall. Cloud prices surged 5%–463%, APIs failed under agent-driven demand, and Huawei Ascend chips became the unlikely lifeline. Inside the first AI inflation crisis.",
    keywords: 'China AI, AI compute crunch, token shortage, cloud price hike, Huawei Ascend, DeepSeek V4, MiniMax, Kimi K2.6, AI inflation, OpenClaw agent, AI infrastructure, China cloud computing, AI token economy',
  },
  'deepseek-first-funding-20-billion-valuation': {
    metaTitle: "DeepSeek Breaks Its Vow: Inside the $3 Billion Funding Round That Shook China's AI World",
    metaDescription: "DeepSeek's first external funding round at $20B+ valuation marks a strategic shift from bootstrapped research lab to competitive AI company. Analysis of talent exodus, Ascend chip migration, and global implications.",
    keywords: 'DeepSeek, Liang Wenfeng, China AI, AI funding, Huawei Ascend, Tencent, Alibaba, DeepSeek V4, AI talent, Chinese AI companies, DeepSeek valuation, High-Flyer Quant',
  },
  'tars-embodied-intelligence-455-million-brain-club': {
    metaTitle: "Tars Raises $455M: How China's 'Robot Brain' Startup Cracked the Embodied Intelligence Code",
    metaDescription: "Tars (它石智航) shattered China's embodied intelligence funding record with a $455M Pre-A round, led by rare Hillhouse-Sequoia co-investment. Inside the 14-month-old startup building the world's first 'can actually work' general embodied AI model.",
    keywords: 'Tars, 它石智航, embodied intelligence, robot brain, China AI, AWE 3.0, Hillhouse Capital, Sequoia China, humanoid robot, physical AI, China robotics funding, Chen Yilun, general embodied intelligence',
  },
  'minimax-ipo-212-million-users-ai-companion-empire': {
    metaTitle: "MiniMax Files for IPO: How China's AI Companion Empire Built 212 Million Users and Challenged the Global Social Landscape",
    metaDescription: "MiniMax secretly files for IPO on April 23, 2026, revealing 212 million total users and 27.6 million monthly active users. Inside China's most successful AI companion platform and its global expansion through Talkie.",
    keywords: 'MiniMax IPO, Talkie AI, AI companion, China AI, MiniMax users, AI social, 星野, Hailuo AI, AI digital human, China AI出海',
  },
  'deepseek-v4-million-token-china-ai-sovereignty': {
    metaTitle: "DeepSeek V4: The Million-Token API Update That Signals China's AI Sovereignty Shift",
    metaDescription: "DeepSeek quietly updated its API to 1M context window ahead of V4's launch, while announcing its first-ever external funding round. This isn't just a model upgrade—it's China's declaration of AI compute independence.",
    keywords: 'DeepSeek V4, DeepSeek, China AI, AI sovereignty, Huawei Ascend, CANN, CUDA, AI chips, domestic chips, trillion parameter model, million token context, AI compute independence',
  },
  'china-embodied-intelligence-robot-marathon-2026': {
    metaTitle: "China's Embodied Intelligence Breakthrough: When Robots Outrun Humans at the Beijing Half-Marathon",
    metaDescription: "The 2026 Beijing Humanoid Robot Half-Marathon delivered results that shocked observers: robots ran faster than human world champions, achieved 100% finish rates, and demonstrated industrial-grade reliability. Inside the race that proved embodied intelligence has arrived.",
    keywords: 'embodied intelligence, humanoid robot, Beijing robot marathon, China robotics, D-Robotics, Tiangong, AgiBot, GalaxyBot, robot half-marathon, physical AI',
  },
  'bytedance-ai-gamble-gpu-kingpin-profit-drop': {
    metaTitle: "ByteDance's AI Obsession: How a 70% Profit Plunge Turned a Social Media Giant Into China's GPU Kingpin",
    metaDescription: "ByteDance's 2025 net profit dropped over 70% due to massive AI investments, yet Tencent and Alibaba are buying GPUs from their biggest rival. Inside China's most unexpected AI infrastructure deal and what it reveals about the new tech landscape.",
    keywords: 'ByteDance, ByteDance AI investment, Tencent GPU purchase, Alibaba GPU, China AI infrastructure, ByteDance profit decline, NVIDIA H20, China tech rivalry, AI compute race, ByteDance Seed, GPU shortage China, AI arms race, TikTok AI, Doubao, China cloud computing',
  },
  'deepseek-v4-pricing-strategy-analysis': {
    metaTitle: "DeepSeek V4 Pricing Strategy: How $0.14/1M Tokens Is Reshaping the Economics of Frontier AI",
    metaDescription: "DeepSeek V4's radical pricing — Flash at $0.14/1M input tokens, Pro at $1.74/1M — undercuts OpenAI and Anthropic by 10-30x. We analyze the strategy, architecture, and market disruption behind the cheapest frontier-class AI API ever launched.",
    keywords: 'DeepSeek V4, AI API pricing, LLM pricing 2026, DeepSeek pricing strategy, AI cost comparison, MoE architecture, open source AI, Chinese AI pricing',
  },
  'china-ai-global-surge-api-traffic-empire-2026': {
    metaTitle: "From Made in China to Trained in China: How Chinese AI Conquered Global Developers",
    metaDescription: "Chinese AI models achieved global dominance in 18 months — what took smartphones a decade. Analysis of frictionless exports, open-source flywheels, and pricing weapons that Silicon Valley cannot match.",
    keywords: 'China AI export, open-source AI, AI globalization, Chinese models, DeepSeek, Kimi, MiniMax, AI pricing, technology export, AI infrastructure',
  },
  'china-ai-agent-revolution-2026-policy-market': {
    metaTitle: "Inside China's AI Policy Machine: How the Politburo's 'AI+ Action' Directive Is Rewriting Procurement Law",
    metaDescription: "The April 28, 2026 Politburo directive transformed AI from an experimental tool into a mandatory budget line item. Analysis of the policy mechanics: how central directives become local contracts, and why China's governance architecture enables deployment at a scale Western democracies cannot match.",
    keywords: 'China AI policy, Politburo directive, AI procurement, CAICT white paper, government AI, AI regulation, China governance, AI budget, state-owned enterprise, AI deployment',
  },
  'kimi-k2-6-open-source-coding-revolution': {
    metaTitle: "Kimi K2.6: How a $18B Chinese Startup Is Rewriting the Rules of Open-Source AI Coding",
    metaDescription: "Moonshot AI's Kimi K2.6 matches GPT-5.5 on SWE-Bench Pro with 300-agent swarm architecture, open weights, and pricing 80% below Western flagships. A deep dive into China's most ambitious AI model.",
    keywords: 'Kimi K2.6, Moonshot AI, open source AI, coding benchmark, agent swarm, Chinese AI, GPT-5.5, Claude Opus, LLM pricing, AI infrastructure',
  },
  'deepseek-v4-promo-ending-analysis': {
    metaTitle: "DeepSeek V4's 75% Promo Ends May 31: What Happens Next and Why the AI Pricing War Is Just Beginning",
    metaDescription: "DeepSeek V4-Pro's 75% promotional discount — extended from May 5 to May 31 — has developers wondering what happens next. Even at standard pricing, V4-Pro remains 17-86x cheaper than Claude Opus 4.7 while matching its SWE-Bench score. Here's the complete analysis.",
    keywords: 'DeepSeek V4, DeepSeek pricing, AI API pricing, DeepSeek promo, LLM cost comparison, MoE architecture, Huawei Ascend, AI pricing war, Claude Opus vs DeepSeek, V4-Flash vs V4-Pro',
  },
  'deepseek-vs-chatgpt': {
    metaTitle: "DeepSeek vs ChatGPT: Complete Comparison",
    metaDescription: "Choosing between DeepSeek and ChatGPT is no longer obvious. This comprehensive comparison helps you decide which AI assistant fits your needs.",
    keywords: 'DeepSeek, ChatGPT, AI comparison, DeepSeek-V3, ChatGPT-4o, AI assistant, China AI, OpenAI',
  },
  'deepseek-v3-deep-dive': {
    metaTitle: "DeepSeek-V3: The $5.6M Training Run",
    metaDescription: "DeepSeek-V3 represents one of the most significant efficiency breakthroughs in AI history. Training a model competitive with GPT-4 for just $5.6 million challenges fundamental assumptions about the cost of intelligence.",
    keywords: 'DeepSeek-V3, $5.6M training, AI efficiency, GPT-4, model training, China AI, DeepSeek architecture',
  },
  'chinese-ai-index-2026': {
    metaTitle: "Chinese AI Index: 103 Companies Tracking",
    metaDescription: "The Chinese AI ecosystem has reached an inflection point. With over 103 significant companies spanning foundation models, application layers, and infrastructure, China's AI sector is now a global force.",
    keywords: 'Chinese AI Index, 103 companies, AI ecosystem, China AI market, foundation models, AI infrastructure',
  },
  'ai-interview-coaching-china-2025': {
    metaTitle: "The AI Interview Coach Phenomenon: How Chinese Graduate...",
    metaDescription: "Inside China's AI interview coaching boom: How millions of graduates are using Kimi, Doubao, and Tongyi Qianwen to prepare for interviews, with usage su...",
    keywords: 'interview, coach, phenomenon, chinese, graduates, using, crack, market, China AI, AI trends',
  },
  'ai-thesis-writing-china': {
    metaTitle: "AI Thesis Writing Explodes: How 12 Million Chinese Stud...",
    metaDescription: "With 320 million views on Xiaohongshu, AI-assisted thesis writing has become a phenomenon reshaping China's higher education. A deep dive into the tools...",
    keywords: 'thesis, writing, explodes, million, chinese, students, rewriting, academic, rules, China AI, AI trends',
  },
  'alibaba-token-hub-100b-gambit': {
    metaTitle: "Alibaba's $100B Token Gambit: Inside the Alibaba Token ...",
    metaDescription: "Deep dive into Alibaba's strategic pivot with ATH: How the tech giant is betting its future on Token economics, reorganizing around 'Create-Deliver-Appl...",
    keywords: 'alibaba, 100b, token, gambit, inside, revolution, reshaping, china, economy, China AI, AI trends',
  },
  'bytedance-seed-brain-drain-70-engineers': {
    metaTitle: "ByteDance's AI Brain Drain: 70 Top Engineers Exit Seed Team in 12 Months",
    metaDescription: "ByteDance is bleeding AI talent. Nearly 70 core engineers walked out of its prestigious Seed AI team in 12 months—most joining Tencent. Inside China's ruthless AI talent wars.",
    keywords: 'ByteDance, AI brain drain, Seed team, AI talent, China AI, Tencent, engineer exodus',
  },
  'china-ai-agent-explosion-2025-enterprise-deployment': {
    metaTitle: "China's AI Agent Explosion: How 126 Platforms and $1B+ ...",
    metaDescription: "With 371 government-contracted projects in H1 2025 alone, China's AI Agent market is hitting an inflection point. From JD.com's 7,000+ deployed agents t...",
    keywords: 'china, agent, explosion, platforms, enterprise, deals, reshaping, global, automation, China AI, AI trends',
  },
  'china-ai-april-infrastructure-2026': {
    metaTitle: "China's AI Revolution: Education Reform, National Standards, and Ecosystem Breakthroughs in April 2026",
    metaDescription: "Shanghai Jiao Tong University launches 'AI Ten Initiatives,' China establishes first humanoid robot national standards, and domestic AI models achieve parity with DeepSeek-R1.",
    keywords: 'China AI, education reform, humanoid robot, national standards, SJTU, AI infrastructure, April 2026',
  },
  'china-ai-avatar-revolution-2025': {
    metaTitle: "China's AI Avatar Revolution: How 410 Million Views Tra...",
    metaDescription: "China's AI avatar market exploded to 410 million views in one week (+200% growth). From Xiaohongshu creators to IPO-bound giants like Guiji AI, discover...",
    keywords: 'china, avatar, revolution, million, views, transformed, content, creation, forever, China AI, AI trends',
  },
  'china-ai-avatar-revolution-2026': {
    metaTitle: "China's AI Avatar Revolution: How 410 Million Views Sig...",
    metaDescription: "Chinese AI avatar tools are experiencing explosive growth with 410 million topic views and 200% weekly growth. From HeyGen to domestic platforms like Si...",
    keywords: 'china, avatar, revolution, million, views, signal, global, content, creation, shift, China AI, AI trends',
  },
  'china-ai-chip-war-2026-us-sanctions': {
    metaTitle: "The Great Silicon Wall: How China's AI Industry Is Defy...",
    metaDescription: "ByteDance just ordered $5.6 billion in Huawei chips. DeepSeek V4 is launching on domestic silicon. Inside China's audacious strategy to build a parallel...",
    keywords: 'great, silicon, wall, china, industry, defying, chip, sanctions, China AI, AI trends',
  },
  'china-ai-deepfake-fraud-crisis-2026': {
    metaTitle: "China's AI Deepfake Fraud Crisis: How 700,000 Annual Scams and a $40 Billion Global Threat Are Reshaping Trust in the Digital Age",
    metaDescription: "AI-powered deepfake fraud has exploded 3,000% since 2023. With 700,000 annual telecom fraud cases and ¥200 billion in losses, China's experience offers critical lessons for global AI governance.",
    keywords: 'AI deepfake, fraud crisis, China AI governance, digital human, MCN, telecom fraud, AI regulation',
  },
  'china-ai-digital-human-revolution': {
    metaTitle: "China's AI Digital Human Revolution: How 80,000 Virtual...",
    metaDescription: "With 410 million views on Xiaohongshu and Guiji's $4.4B IPO filing, China's AI digital human market is exploding. Here's what global creators need to know.",
    keywords: 'china, digital, human, revolution, virtual, avatars, reshaping, creator, economy, China AI, AI trends',
  },
  'china-ai-model-war-april-2026-week-changed-everything': {
    metaTitle: "The Week That Changed Everything: China's AI Model War ...",
    metaDescription: "In one week, Alibaba launched 3 models, Zhipu raised prices 83%, ByteDance deployed full-duplex voice AI, and China hit 140 trillion daily tokens. Why A...",
    keywords: 'week, changed, everything, china, model, intensifies, april, China AI, AI trends',
  },
  'china-ai-model-wars-april-2026': {
    metaTitle: "China's AI Model Wars: How Alibaba, ByteDance, and Mini...",
    metaDescription: "April 2026 marks a turning point in China's AI race. Alibaba launched 3 models in one week, ByteDance deployed full-duplex voice AI, and MiniMax announc...",
    keywords: 'china, model, wars, alibaba, bytedance, minimax, reshaping, global, competition, april, China AI, AI trends',
  },
  'china-ai-token-surge-gen-z': {
    metaTitle: "China's AI Overtake: 31% Surge in Token Usage Signals Global Power Shift",
    metaDescription: "Chinese AI models processed 12.96 trillion tokens in one week—a 31.48% surge. For the fifth consecutive week, China's token consumption has exceeded the United States.",
    keywords: 'China AI, token usage, Gen Z, power shift, AI adoption, China overtakes US',
  },
  'doubao-12-trillion-token-explosion': {
    metaTitle: "Doubao's 12 Trillion Token Explosion: How ByteDance Is ...",
    metaDescription: "ByteDance's Doubao model just hit 12 trillion daily tokens—a 1000x growth in under two years. With China capturing 30% of global AI market share and cha...",
    keywords: 'doubao, trillion, token, explosion, bytedance, quietly, winning, global, race, China AI, AI trends',
  },
  'modelbest-edge-ai-unicorn-2026': {
    metaTitle: "ModelBest Becomes Unicorn: How Tsinghua's Edge AI Pione...",
    metaDescription: "Inside ModelBest's rise to unicorn status: How a Tsinghua-born startup is challenging AI giants with its 'Density Law' approach to edge AI, securing $10...",
    keywords: 'modelbest, becomes, unicorn, tsinghua, edge, pioneer, reshaping, on-device, intelligence, China AI, AI trends',
  },
  'stanford-ai-index-2026-china-rise': {
    metaTitle: "Stanford AI Index 2026: China's 'Parallel Run' Era Has ...",
    metaDescription: "Stanford HAI's 423-page AI Index Report 2026 reveals a historic turning point: the China-US AI gap has 'effectively closed' to just 2.7%. Alibaba ranks ...",
    keywords: 'stanford, index, china, parallel, arrived, China AI, AI trends',
  },
  'stepfun-terminal-ai-revolution': {
    metaTitle: "StepFun's $7 Billion Bet: How China's AI Unicorn Is Win...",
    metaDescription: "With a record-breaking $700M funding round and former Megvii founder Yin Qi at the helm, StepFun is pioneering the shift from cloud AI to physical termi...",
    keywords: 'stepfun, billion, china, unicorn, winning, terminal, race, China AI, AI trends',
  },
}

// Parse YAML frontmatter: key: "value" or key: value (handles multi-line)
function parseYamlFrontmatter(text) {
  const result = {}
  const lines = text.split('\n')
  let currentKey = null
  let currentValue = []
  
  for (const line of lines) {
    const match = line.match(/^(\w+):\s*(.*)$/)
    if (match) {
      // Save previous multi-line value
      if (currentKey) {
        result[currentKey] = currentValue.join('\n').trim()
      }
      currentKey = match[1]
      let value = match[2].trim()
      // Remove surrounding quotes
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1)
      }
      currentValue = [value]
    } else if (currentKey && line.startsWith('  ')) {
      // Continuation of multi-line value (indented)
      currentValue.push(line.trim())
    } else if (currentKey && line.trim()) {
      // Another value line (part of multi-line)
      currentValue.push(line.trim())
    }
  }
  if (currentKey) {
    result[currentKey] = currentValue.join('\n').trim()
  }
  return result
}

// Parse JS export const metadata = {...} format
function parseJsMetadata(raw) {
  const result = {}
  // Extract title: "..." or title: '...'
  const titleMatch = raw.match(/title:\s*["']([^"']+)["']/)
  if (titleMatch) result.title = titleMatch[1]
  
  // Extract description
  const descMatch = raw.match(/description:\s*["']([^"']+)["']/)
  if (descMatch) result.description = descMatch[1]
  
  // Try to extract date from slug or content
  const dateMatch = raw.match(/date:\s*["']([^"']+)["']/)
  if (dateMatch) result.date = dateMatch[1]
  
  return result
}

// Extract title from first markdown heading
function extractTitleFromContent(content) {
  const h1Match = content.match(/^#\s+(.+)$/m)
  if (h1Match) return h1Match[1].trim()
  const boldMatch = content.match(/^\*\*([^*]+)\*\*$/m)
  if (boldMatch) return boldMatch[1].trim()
  return null
}

// Extract date from slug (e.g., "deepseek-v4-pricing-2026-04-30" → "2026-04-30")
function extractDateFromSlug(slug) {
  const dateMatch = slug.match(/(\d{4}-\d{2}-\d{2})/)
  if (dateMatch) return dateMatch[1]
  return null
}

// Read all posts from markdown files
function readPosts() {
  const postsDir = join(process.cwd(), 'content', 'posts')
  const files = readdirSync(postsDir).filter(f => f.endsWith('.md'))
  
  const posts = {}
  for (const file of files) {
    const slug = file.replace('.md', '')
    const raw = readFileSync(join(postsDir, file), 'utf-8')
    
    let meta = {}
    let content = raw
    
    // Case 1: File starts with --- → YAML or JSON frontmatter
    if (raw.trimStart().startsWith('---')) {
      const parts = raw.split('---')
      if (parts.length >= 3) {
        const frontmatter = parts[1].trim()
        content = parts.slice(2).join('---').trim()
        
        // Try JSON first (starts with {)
        if (frontmatter.startsWith('{')) {
          try {
            meta = JSON.parse(frontmatter)
          } catch (e) {
            console.error('JSON parse error for', slug, e.message)
          }
        } else {
          // YAML format
          meta = parseYamlFrontmatter(frontmatter)
        }
      }
    }
    // Case 2: File starts with "export const metadata" → JS metadata format
    else if (raw.trimStart().startsWith('export const metadata')) {
      meta = parseJsMetadata(raw)
      // Find where actual markdown content starts (after the JS block)
      const contentStart = raw.search(/\n#[^#]/)
      if (contentStart > 0) {
        content = raw.slice(contentStart).trim()
      } else {
        // Look for first heading
        const h1Index = raw.search(/^#\s+/m)
        if (h1Index > 0) {
          content = raw.slice(h1Index).trim()
        }
      }
    }
    // Case 3: No frontmatter → extract from content
    else {
      // Try to find frontmatter-like metadata in early content
      const metaBlockMatch = raw.match(/\*\*Meta Title\*\*:\s*([^\n]+)\n\*\*Meta Description\*\*:\s*([^\n]+)\n\*\*Keywords\*\*:\s*([^\n]+)/)
      if (metaBlockMatch) {
        meta.title = metaBlockMatch[1].trim()
        meta.description = metaBlockMatch[2].trim()
        meta.keywords = metaBlockMatch[3].trim()
      }
    }
    
    // Fallback: extract title from content if not in frontmatter
    if (!meta.title) {
      meta.title = extractTitleFromContent(content)
    }
    
    // Fallback: extract date from slug if not in frontmatter
    if (!meta.date) {
      meta.date = extractDateFromSlug(slug)
    }
    
    // Skip if we still can't get title
    if (!meta.title) {
      console.error('Failed to parse article (no title found):', slug)
      continue
    }
    
    // Fallback date if still missing
    if (!meta.date) {
      meta.date = '2026-01-01' // Default fallback
    }
    
    // Format date
    const dateObj = new Date(meta.date)
    const formattedDate = isNaN(dateObj) 
      ? meta.date 
      : dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    
    posts[slug] = {
      title: meta.title,
      category: meta.category || 'AI Trends',
      date: formattedDate,
      readTime: meta.readTime || '10 min read',
      heroImage: meta.heroImage || 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
      content: content,
    }
  }
  return posts
}

// Initialize posts by reading markdown files
const posts = readPosts()

export async function generateMetadata({ params }) {
  const { slug } = params
  const post = posts[slug]
  const meta = postMetadata[slug]
  
  if (!post) {
    return {
      title: 'Article Not Found',
    }
  }
  
  // Use postMetadata if available, otherwise generate defaults from post data
  const title = meta?.metaTitle || post.title
  const description = meta?.metaDescription || post.title
  const keywords = meta?.keywords || 'China AI, artificial intelligence'
  
  return {
    title: title,
    description: description,
    keywords: keywords,
    authors: [{ name: 'Meeeeed', url: 'https://www.ainchina.com/about/' }],
    openGraph: {
      title: title,
      description: description,
      type: 'article',
      url: `https://www.ainchina.com/blog/${slug}/`,
      images: [{
        url: post.heroImage,
        width: 1200,
        height: 600,
        alt: title,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [post.heroImage],
    },
    alternates: {
      canonical: `https://www.ainchina.com/blog/${slug}/`,
    },
  }
}

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export default function BlogPost({ params }) {
  const post = posts[params.slug]
  const meta = postMetadata[params.slug]

  // Find previous and next articles
  const allSlugs = Object.keys(posts)
  const currentIndex = allSlugs.indexOf(params.slug)
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null
  const prevPost = prevSlug ? posts[prevSlug] : null
  const nextPost = nextSlug ? posts[nextSlug] : null
  
  if (!post) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: '#0a0a0a',
        color: '#e5e5e5',
        padding: '100px',
        textAlign: 'center'
      }}>
        <h1>Article Not Found</h1>
        <Link href="/blog/" style={{ color: '#22d3ee' }}>← Back to Blog</Link>
      </div>
    )
  }

  // Generate JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: post.title,
    description: meta?.metaDescription || post.title,
    image: post.heroImage,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: 'Meeeeed',
      url: 'https://www.ainchina.com/about/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'AI in China',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.ainchina.com/logo.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.ainchina.com/blog/${params.slug}/`,
    },
    keywords: meta?.keywords || 'China AI, artificial intelligence',
  }

  const jsonLdString = JSON.stringify(jsonLd).replace(/</g, '\\u003c')

  // Parse markdown content to HTML-like JSX
  function parseContent(content) {
    const lines = content.split('\n')
    const elements = []
    let currentTable = null
    let currentCodeBlock = null
    let currentQuote = null
    let i = 0
    
    while (i < lines.length) {
      const line = lines[i]
      
      // Code blocks
      if (line.startsWith('```')) {
        if (currentCodeBlock) {
          elements.push(
            <pre key={i} style={{ 
              backgroundColor: '#1a1a1a',
              padding: '24px',
              borderRadius: '12px',
              overflow: 'auto',
              margin: '24px 0',
              border: '1px solid #2a2a2a'
            }}
            >
              <code style={{ 
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                fontSize: '14px',
                lineHeight: '1.6',
                color: '#e5e5e5'
              }}
              >
                {currentCodeBlock.join('\n')}
              </code>
            </pre>
          )
          currentCodeBlock = null
        } else {
          currentCodeBlock = []
        }
        i++
        continue
      }
      
      if (currentCodeBlock !== null) {
        currentCodeBlock.push(line)
        i++
        continue
      }
      
      // Blockquotes
      if (line.startsWith('> ')) {
        if (!currentQuote) {
          currentQuote = []
        }
        currentQuote.push(line.substring(2))
        i++
        continue
      } else if (currentQuote) {
        elements.push(
          <blockquote key={i} style={{ 
            borderLeft: '4px solid #22d3ee',
            paddingLeft: '24px',
            margin: '24px 0',
            fontStyle: 'italic',
            color: '#a3a3a3'
          }}
          >
            {currentQuote.map((q, idx) => (
              <p key={idx} style={{ margin: '8px 0' }}>{parseInline(q)}</p>
            ))}
          </blockquote>
        )
        currentQuote = null
        continue
      }
      
      // Tables
      if (line.startsWith('|')) {
        if (!currentTable) {
          currentTable = { headers: [], rows: [] }
          // Parse header
          const cells = line.split('|').filter(c => c.trim()).map(c => c.trim())
          currentTable.headers = cells
          i++
          // Skip separator line
          if (i < lines.length && lines[i].includes('|---')) {
            i++
          }
          continue
        } else {
          const cells = line.split('|').filter(c => c.trim()).map(c => c.trim())
          if (cells.length > 0) {
            currentTable.rows.push(cells)
          }
          i++
          continue
        }
      } else if (currentTable) {
        elements.push(
          <div key={i} style={{ overflowX: 'auto', margin: '24px 0' }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              fontSize: '14px'
            }}
            >
              <thead>
                <tr>
                  {currentTable.headers.map((h, idx) => (
                    <th key={idx} style={{ 
                      borderBottom: '2px solid #22d3ee',
                      padding: '12px 16px',
                      textAlign: 'left',
                      fontWeight: '600',
                      color: '#22d3ee'
                    }}
                    >{parseInline(h)}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentTable.rows.map((row, ridx) => (
                  <tr key={ridx}>
                    {row.map((cell, cidx) => (
                      <td key={cidx} style={{ 
                        borderBottom: '1px solid #1a1a1a',
                        padding: '12px 16px',
                        color: '#e5e5e5'
                      }}
                      >{parseInline(cell)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
        currentTable = null
        continue
      }
      
      // Empty lines
      if (!line.trim()) {
        i++
        continue
      }
      
      // Headings
      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={i} style={{ fontSize: '36px', fontWeight: '700', margin: '48px 0 24px', color: '#f5f5f5' }}>
            {parseInline(line.substring(2))}
          </h1>
        )
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={i} style={{ fontSize: '28px', fontWeight: '600', margin: '40px 0 20px', color: '#f5f5f5' }}>
            {parseInline(line.substring(3))}
          </h2>
        )
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={i} style={{ fontSize: '22px', fontWeight: '600', margin: '32px 0 16px', color: '#f5f5f5' }}>
            {parseInline(line.substring(4))}
          </h3>
        )
      } else if (line.startsWith('#### ')) {
        elements.push(
          <h4 key={i} style={{ fontSize: '18px', fontWeight: '600', margin: '24px 0 12px', color: '#f5f5f5' }}>
            {parseInline(line.substring(5))}
          </h4>
        )
      } else if (line.startsWith('---')) {
        elements.push(<hr key={i} style={{ border: 'none', borderTop: '1px solid #1a1a1a', margin: '32px 0' }} />)
      } else if (line.startsWith('*') && line.endsWith('*') && !line.includes(' ')) {
        // Horizontal rule or image caption
        elements.push(<p key={i} style={{ fontStyle: 'italic', color: '#737373', textAlign: 'center', margin: '8px 0 24px' }}>{parseInline(line)}</p>)
      } else if (line.startsWith('![')) {
        // Image
        const match = line.match(/!\[([^\]]*)\]\(([^)]+)\)/)
        if (match) {
          elements.push(
            <img key={i} src={match[2]} alt={match[1]} style={{ width: '100%', borderRadius: '12px', margin: '24px 0' }} />
          )
        }
      } else {
        // Regular paragraph
        elements.push(<p key={i} style={{ fontSize: '16px', lineHeight: '1.8', margin: '16px 0', color: '#e5e5e5' }}>{parseInline(line)}</p>)
      }
      
      i++
    }
    
    // Flush remaining elements
    if (currentQuote) {
      elements.push(
        <blockquote key={i} style={{ 
          borderLeft: '4px solid #22d3ee',
          paddingLeft: '24px',
          margin: '24px 0',
          fontStyle: 'italic',
          color: '#a3a3a3'
        }}
        >
          {currentQuote.map((q, idx) => (
            <p key={idx} style={{ margin: '8px 0' }}>{parseInline(q)}</p>
          ))}
        </blockquote>
      )
    }
    
    return elements
  }
  
  function parseInline(text) {
    const parts = []
    let lastIndex = 0
    
    // Process markdown links [text](url) first
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
    let linkMatch
    let linkLastIndex = 0
    const linkParts = []
    
    while ((linkMatch = linkRegex.exec(text)) !== null) {
      if (linkMatch.index > linkLastIndex) {
        linkParts.push({ type: 'text', content: text.substring(linkLastIndex, linkMatch.index) })
      }
      linkParts.push({ type: 'link', text: linkMatch[1], url: linkMatch[2] })
      linkLastIndex = linkMatch.index + linkMatch[0].length
    }
    if (linkLastIndex < text.length) {
      linkParts.push({ type: 'text', content: text.substring(linkLastIndex) })
    }
    
    // Process bold (**text**) on each text segment
    const finalParts = []
    for (const part of linkParts) {
      if (part.type === 'link') {
        finalParts.push({ type: 'link', text: part.text, url: part.url })
      } else {
        const segment = part.content
        let segLastIndex = 0
        const boldRegex = /\*\*(.+?)\*\*/g
        let boldMatch
        while ((boldMatch = boldRegex.exec(segment)) !== null) {
          if (boldMatch.index > segLastIndex) {
            finalParts.push({ type: 'text', content: segment.substring(segLastIndex, boldMatch.index) })
          }
          finalParts.push({ type: 'bold', text: boldMatch[1] })
          segLastIndex = boldMatch.index + boldMatch[0].length
        }
        if (segLastIndex < segment.length) {
          finalParts.push({ type: 'text', content: segment.substring(segLastIndex) })
        }
      }
    }
    
    // Convert to React elements
    return finalParts.map((part, idx) => {
      if (part.type === 'link') {
        return (
          <a key={idx} href={part.url} style={{ color: '#22d3ee', textDecoration: 'underline' }}>
            {part.text}
          </a>
        )
      } else if (part.type === 'bold') {
        return <strong key={idx} style={{ color: '#f5f5f5', fontWeight: '700' }}>{part.text}</strong>
      } else {
        return <span key={idx}>{part.content}</span>
      }
    })
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString }}
      />
      <div style={{ 
        minHeight: '100vh',
        backgroundColor: '#0a0a0a',
        color: '#e5e5e5'
      }}>
        {/* Navigation */}
        <nav style={{ 
          borderBottom: '1px solid #1a1a1a',
          padding: '16px 24px'
        }}>
          <div style={{ 
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            gap: '24px'
          }}
          >
            <Link href="/" style={{ 
              color: '#f5f5f5',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '18px'
            }}
            >
              AI in China
            </Link>
            <Link href="/blog/" style={{ 
              color: '#a3a3a3',
              textDecoration: 'none',
              fontSize: '14px'
            }}
            >
              Blog
            </Link>
          </div>
        </nav>

        {/* Article */}
        <article style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 24px' }}>
          {/* Header */}
          <header style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
              <span style={{ 
                backgroundColor: '#1a1a1a',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: '600',
                color: '#22d3ee',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {post.category}
              </span>
              <span style={{ 
                backgroundColor: '#1a1a1a',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '12px',
                color: '#737373'
              }}>
                {post.readTime}
              </span>
            </div>
            
            <h1 style={{ 
              fontSize: '36px',
              fontWeight: '700',
              lineHeight: '1.2',
              margin: '0 0 24px',
              color: '#f5f5f5'
            }}
            >
              {post.title}
            </h1>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#737373', fontSize: '14px' }}>
              <span>{post.date}</span>
              <span>·</span>
              <span>AI in China</span>
            </div>
          </header>

          {/* Hero Image */}
          {post.heroImage && (
            <img 
              src={post.heroImage}
              alt={post.title}
              style={{ 
                width: '100%',
                height: 'auto',
                borderRadius: '12px',
                marginBottom: '48px'
              }}
            />
          )}

          {/* Content */}
          <div>
            {parseContent(post.content)}
          </div>

          {/* Author Attribution - E-E-A-T Signal for AdSense */}
          <div style={{ 
            marginTop: '48px',
            padding: '24px',
            backgroundColor: '#111',
            border: '1px solid #1a1a1a',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}
          >
            <div style={{ 
              width: '48px', 
              height: '48px', 
              borderRadius: '50%', 
              backgroundColor: '#22d3ee',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              fontWeight: 700,
              color: '#0a0a0a',
              flexShrink: 0
            }}
            >
              M
            </div>
            <div>
              <p style={{ 
                margin: '0 0 4px', 
                fontWeight: '600', 
                color: '#f5f5f5',
                fontSize: '15px'
              }}
              >
                <Link href="/about/" style={{ color: '#22d3ee', textDecoration: 'none' }}>By Meeeeed</Link>
              </p>
              <p style={{ 
                margin: '0', 
                color: '#737373', 
                fontSize: '13px',
                lineHeight: 1.5
              }}
              >
                Editor at AI in China. Tracking Chinese AI companies, funding rounds, and the technologies reshaping global tech. <a href="/about/" style={{ color: '#a3a3a3', textDecoration: 'underline' }}>More about me</a>.
              </p>
            </div>
          </div>
        </article>

        {/* Previous / Next Navigation */}
        {(prevPost || nextPost) && (
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 24px',
          }}>
            <div style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              borderTop: '1px solid #1a1a1a',
              paddingTop: '32px',
              marginBottom: '32px',
            }}>
              {prevPost ? (
                <Link
                  href={`/blog/${prevSlug}/`}
                  style={{
                    flex: '1 1 300px',
                    padding: '20px',
                    backgroundColor: '#111',
                    border: '1px solid #1a1a1a',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    color: '#e5e5e5',
                  }}
                >
                  <p style={{ margin: '0 0 8px', color: '#737373', fontSize: '13px' }}>← Previous</p>
                  <p style={{ margin: 0, fontWeight: '600', fontSize: '15px', lineHeight: 1.4 }}>{prevPost.title}</p>
                </Link>
              ) : <div style={{ flex: '1 1 300px' }} />}
              {nextPost ? (
                <Link
                  href={`/blog/${nextSlug}/`}
                  style={{
                    flex: '1 1 300px',
                    padding: '20px',
                    backgroundColor: '#111',
                    border: '1px solid #1a1a1a',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    color: '#e5e5e5',
                    textAlign: 'right',
                  }}
                >
                  <p style={{ margin: '0 0 8px', color: '#737373', fontSize: '13px' }}>Next →</p>
                  <p style={{ margin: 0, fontWeight: '600', fontSize: '15px', lineHeight: 1.4 }}>{nextPost.title}</p>
                </Link>
              ) : <div style={{ flex: '1 1 300px' }} />}
            </div>
          </div>
        )}

        <footer style={{ 
          padding: '48px 24px', 
          borderTop: '1px solid #1a1a1a',
          textAlign: 'center'
        }}
        >
          <div style={{ 
            maxWidth: '800px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            flexWrap: 'wrap',
            marginBottom: '24px'
          }}
          >
            <Link href="/" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '14px' }}>
              Home
            </Link>
            <Link href="/blog/" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '14px' }}>
              Blog
            </Link>
            <Link href="/about/" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '14px' }}>
              About
            </Link>
            <Link href="/contact/" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '14px' }}>
              Contact
            </Link>
            <Link href="/privacy-policy/" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '14px' }}>
              Privacy
            </Link>
            <Link href="/terms/" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '14px' }}>
              Terms
            </Link>
          </div>
          <p style={{ color: '#737373', fontSize: '14px' }}>
            © 2026 AI in China. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  )
}
