import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'
import Link from 'next/link'

// SEO Metadata for each article
const postMetadata = {
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
    metaTitle: "China's AI Global Surge: How Chinese Models Captured 61% of Global API Traffic and Built a $180 Billion Empire",
    metaDescription: "Chinese AI models went from under 2% global market share to 61% in just one year. With OpenRouter data showing Chinese models overtaking American API traffic by 4x, MiniMax hitting $1.5B ARR, and Kimi's overseas revenue surpassing domestic — China's AI industry has executed the fastest global technology export in modern history.",
    keywords: 'China AI, Chinese AI models, AI globalization, OpenRouter, MiniMax, DeepSeek, Kimi, AI API traffic, China AI export, AI model pricing, ByteDance Dola, AI agent economy',
  },
  'china-ai-agent-revolution-2026-policy-market': {
    metaTitle: "China's AI Agent Revolution: How 'AI+ Action' Policy and a ¥449 Billion Market Are Turning Chatbots Into Workers",
    metaDescription: "The Politburo's 'AI+ Action' directive, CAICT's ¥449B market forecast, and DeepSeek V4's agent architecture converge to mark China's inflection point from chatbots to autonomous AI workers.",
    keywords: 'China AI Agent, AI+ Action, DeepSeek V4, CAICT white paper, policy, Huawei Ascend, JD.com, Alibaba, ByteDance Coze, enterprise AI, automation, government procurement',
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
    metaTitle: "bytedance-seed-brain-drain-70-engineers",
    metaDescription: "",
    keywords: 'bytedance-seed-brain-drain-70-engineers, China AI, AI trends',
  },
  'china-ai-agent-explosion-2025-enterprise-deployment': {
    metaTitle: "China's AI Agent Explosion: How 126 Platforms and $1B+ ...",
    metaDescription: "With 371 government-contracted projects in H1 2025 alone, China's AI Agent market is hitting an inflection point. From JD.com's 7,000+ deployed agents t...",
    keywords: 'china, agent, explosion, platforms, enterprise, deals, reshaping, global, automation, China AI, AI trends',
  },
  'china-ai-april-infrastructure-2026': {
    metaTitle: "china-ai-april-infrastructure-2026",
    metaDescription: "",
    keywords: 'china-ai-april-infrastructure-2026, China AI, AI trends',
  },
  'china-ai-april-revolution-2026': {
    metaTitle: "china-ai-april-revolution-2026",
    metaDescription: "",
    keywords: 'china-ai-april-revolution-2026, China AI, AI trends',
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
    metaTitle: "china-ai-deepfake-fraud-crisis-2026",
    metaDescription: "",
    keywords: 'china-ai-deepfake-fraud-crisis-2026, China AI, AI trends',
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
    metaTitle: "china-ai-token-surge-gen-z",
    metaDescription: "",
    keywords: 'china-ai-token-surge-gen-z, China AI, AI trends',
  },
  'china-embodied-ai-revolution-2026': {
    metaTitle: "China's Embodied AI Revolution: How $30 Billion in Q1 F...",
    metaDescription: "China's embodied intelligence sector raised $30 billion in Q1 2026 alone, creating 9 unicorn companies valued at $10B+. From Zhi Robotics' Tesla-like ap...",
    keywords: 'china, embodied, revolution, billion, funding, reshaping, global, robotics, China AI, AI trends',
  },
  'deepseek-v4-agent-era-million-tokens-2026': {
    metaTitle: "deepseek-v4-agent-era-million-tokens-2026",
    metaDescription: "",
    keywords: 'deepseek-v4-agent-era-million-tokens-2026, China AI, AI trends',
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

const posts = readPosts()

export async function generateMetadata({ params }) {
  const { slug } = params
  const post = posts[slug]
  const meta = postMetadata[slug]
  
  if (!post || !meta) {
    return {
      title: 'Article Not Found | AI in China',
    }
  }
  
  return {
    title: meta.metaTitle,
    description: meta.metaDescription,
    keywords: meta.keywords,
    authors: [{ name: 'AI in China' }],
    openGraph: {
      title: meta.metaTitle,
      description: meta.metaDescription,
      type: 'article',
      url: `https://www.ainchina.com/blog/${slug}/`,
      images: [{
        url: post.heroImage,
        width: 1200,
        height: 600,
        alt: meta.metaTitle,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.metaTitle,
      description: meta.metaDescription,
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
      '@type': 'Organization',
      name: 'AI in China',
      url: 'https://www.ainchina.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'AI in China',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.ainchina.com/logo.png',
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
    
    // Process bold (**text**)
    const boldRegex = /\*\*(.+?)\*\*/g
    let match
    while ((match = boldRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(<span key={lastIndex}>{text.substring(lastIndex, match.index)}</span>)
      }
      parts.push(<strong key={match.index} style={{ color: '#f5f5f5', fontWeight: '700' }}>{match[1]}</strong>)
      lastIndex = match.index + match[0].length
    }
    if (lastIndex < text.length) {
      parts.push(<span key={lastIndex}>{text.substring(lastIndex)}</span>)
    }
    
    if (parts.length === 0) return text
    
    // Process italic (*text*) - but skip if already processed as bold
    // For simplicity, we process italic on the remaining text
    return parts
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
        </article>

        <footer style={{ 
          padding: '48px 24px', 
          borderTop: '1px solid #1a1a1a',
          textAlign: 'center'
        }}
        >
          <p style={{ color: '#737373', fontSize: '14px' }}>
            © 2026 AI in China. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  )
}
