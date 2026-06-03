import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'
import Link from 'next/link'


// SEO Metadata for each article
const postMetadata = {
  'ai-interview-coaching-china-graduates-job-market-2026': {
    metaTitle: "AI Interview Coaching: How Chinese Graduates Are Using AI to Crack the Job Market (+120% Trend Explosion)",
    metaDescription: "With Xiaohongshu views surging 120% in one week, AI interview coaching has become the hottest trend among Chinese graduates facing a brutal job market. We analyze 6 platforms, university adoption programs, and the DeepSeek-V3 technology powering this revolution.",
    keywords: '["AI interview coaching", "China job market", "graduate employment AI", "Chinese AI tools", "DeepSeek V3", "Xiaohongshu trends", "AI recruitment", "OfferGoose", "MianShiMao", "AI career tools", "Chinese graduates", "virtual HR"]',
  },
  'china-ai-agent-era-140-trillion-tokens-2026': {
    metaTitle: "China's AI Agent Era: How 140 Trillion Daily Tokens, New Regulations, and a DeepSeek Price War Are Reshaping Global AI",
    metaDescription: "",
    keywords: '',
  },
  'deepseek-7b-mega-round-china-ai-capital-shift-2026': {
    metaTitle: "DeepSeek's $7.4B Mega-Round: How China's Most Secretive AI Lab Went All-In on Capital",
    metaDescription: "",
    keywords: '',
  },
  'minimax-300m-users-arr-doubles-a-share-ipo-china-ai-export-2026': {
    metaTitle: "MiniMax Hits 300M Users and Doubles ARR in 60 Days: The Anatomy of China's Most Successful AI Export",
    metaDescription: "In 60 days, MiniMax doubled its annual recurring revenue to approximately $300M, crossed 300 million global users, and launched its A-share IPO process. With 73% of revenue from international markets, the company has built the most successful Chinese AI export since TikTok-and the financials reveal both extraordinary growth and a brutal path to profitability.",
    keywords: '["MiniMax", "Talkie AI", "Hailuo AI", "China AI export", "AI startup IPO", "Chinese AI overseas", "MiniMax M3", "AI companion app", "China AI model pricing", "Token economics", "AI revenue", "A-share IPO"]',
  },
  'china-ai-drama-revolution-bytedance-650m-empire-2026': {
    metaTitle: "China's AI Drama Revolution: How ByteDance Built a $650M Short-Content Empire in 90 Days",
    metaDescription: "In 90 days, China's AI short drama market expanded sixfold from $100M to $650M. ByteDance's integrated ecosystem-Doubao for scripts, Jimeng for visuals, Volcano Engine for compute, and Red Fruit for distribution-has compressed production cycles from 90 days to 7-10 days at 20% of traditional cost. With 150M overseas active users and nearly 50% willing to pay, this is China's most explosive AI content revolution yet.",
    keywords: '["China AI drama", "AI short drama", "ByteDance Red Fruit", "AI video generation China", "Kling AI", "Hailuo AI", "MiniMax video", "AI content creation", "China creator economy", "AI filmmaking"]',
  },
  'china-humanoid-robot-tsunami-2026-50k-units-global-dominance': {
    metaTitle: "China's Humanoid Robot Tsunami: 50,000 Units, 700% Growth, and Why 2026 Is the Year Everything Changed",
    metaDescription: "",
    keywords: '',
  },
  'alibaba-zhenwu-m890-ai-chip-china-silicon-sovereignty': {
    metaTitle: "Alibaba Zhenwu M890: 3x AI Chip, 560K Units Shipped",
    metaDescription: "Alibaba's T-Head Zhenwu M890 AI chip delivers 3x performance with 144GB HBM and 800GB/s bandwidth. 560,000 units shipped. Full analysis of specs, roadmap, and China's AI chip sovereignty shift.",
    keywords: 'Alibaba Zhenwu M890, T-Head AI chip, China AI chip, NVIDIA alternative, Zhenwu 810E, AI chip sovereignty, Panjiu AL128, ICN Switch, Qwen3.7-Max, China semiconductor, Agentic AI infrastructure, domestic AI chip',
  },
  'china-ai-inflection-point-may-2026': {
    metaTitle: "China's AI Inflection Point: From Burn Rate to Revenue Rate (2026)",
    metaDescription: "May 2026 delivered the clearest signal yet that China's AI industry has shifted from a cash-burning sprint to a revenue-generating marathon. DeepSeek accepted its first external funding, Alibaba reported AI revenue exceeding 50% of total cloud income, and ByteDance committed $23 billion to infrastructure. Here's the full breakdown.",
    keywords: '["China AI", "DeepSeek funding", "Alibaba AI revenue", "ByteDance Doubao", "Baidu AI", "Kuaishou Kling", "AI investment China 2026", "China tech funding", "AI commercialization"]',
  },
  'china-ai-models-dominate-global-api-traffic-token-export-2026': {
    metaTitle: "China AI Models Dominate Global API Traffic | Token Export Boom",
    metaDescription: "Chinese AI models capture 61% of global API token consumption on OpenRouter. Analysis of MiniMax, Kimi, DeepSeek's global developer dominance and the token export economy reshaping AI infrastructure.",
    keywords: 'China AI API, OpenRouter, token export, MiniMax M2.5, Kimi K2.5, DeepSeek V3.2, China AI global dominance, API traffic, token economy, China AI developers, GLM 5, Chinese LLM global market',
  },
  'china-ai-fraud-epidemic-deepfake-panic-2026': {
    metaTitle: "China's AI Fraud Epidemic: Inside the 5.6 Billion View Deepfake Panic Reshaping Digital Trust",
    metaDescription: "",
    keywords: '',
  },
  'ai-digital-humans-china-billion-dollar-livestream-revolution': {
    metaTitle: "China's AI Digital Human Explosion: The 100 Billion Yuan Avatar Economy Reshaping E-Commerce",
    metaDescription: "",
    keywords: '',
  },
  'china-ai-unicorn-stampede-kimi-deepseek-valuation-shakeout-2026-26': {
    metaTitle: "China's AI Unicorn Stampede: Kimi's $20B Round, DeepSeek's $500B Valuation, and the Great Model Shakeout of 2026",
    metaDescription: "",
    keywords: '',
  },
  'deepseek-permanent-75-percent-api-price-cut-ai-war-2026': {
    metaTitle: "DeepSeek Permanent 75% API Price Cut: AI Pricing War 2026",
    metaDescription: "DeepSeek makes V4-Pro API pricing permanent at 25% of original. $0.025 per million cached tokens vs GPT-4o's $72. Inside the pricing war reshaping global AI economics.",
    keywords: 'DeepSeek API price cut, DeepSeek V4 Pro pricing, AI API pricing war, China AI cost advantage, DeepSeek permanent discount, LLM inference cost, OpenAI pricing comparison, AI token economics',
  },
  'china-storage-twin-giants-ipo-ai-compute-2026': {
    metaTitle: "China Storage Giants IPO: Changxin + YMTC $500B AI Compute",
    metaDescription: "Changxin Technology and Yangtze Memory Technologies rush toward IPO with combined $10B Q1 revenue. A deep dive into China's storage chip twin giants and their role in AI infrastructure.",
    keywords: 'Changxin IPO, Yangtze Memory IPO, China storage chip, DRAM NAND, AI compute infrastructure, semiconductor IPO 2026, CXMT, YMTC, China chip sovereignty',
  },
  'china-embodied-intelligence-infrastructure-ndrc-robots-factories-malls-homes': {
    metaTitle: "China Embodied Intelligence Plan: NDRC Robots Infrastructure 2026",
    metaDescription: "NDRC unveils China's national embodied intelligence infrastructure plan with training bases, big brain/small brain models, and a 2027 target for factory, mall, and home robot deployment.",
    keywords: 'China embodied intelligence, NDRC robot infrastructure, big brain small brain model, humanoid robot training, China AI policy, 15th Five-Year Plan AI, Zhiyuan robot, GAITC 2026, embodied data collection, China robot factory deployment',
  },
  'huawei-pangu-ultra-moe-718b-chinese-silicon': {
    metaTitle: "Huawei Pangu Ultra MoE: 718B Params on Chinese Chips",
    metaDescription: "Huawei shipped Pangu Ultra MoE with 718B parameters trained entirely on Ascend AI silicon. Analysis of architecture, benchmarks, and what native-chip training means for global AI competition.",
    keywords: 'Huawei Pangu Ultra MoE, Ascend AI chip, China AI sovereignty, 718 billion parameters, Mixture of Experts, NVIDIA alternative, domestic AI chip, Huawei AI model, China semiconductor independence, large language model infrastructure',
  },
  'china-ai-global-expansion-minimax-2-billion-users-2026': {
    metaTitle: "China AI Goes Global: How MiniMax Built a 236 Million User Empire from Shanghai",
    metaDescription: "",
    keywords: '',
  },
  'china-ai-interview-revolution-2026': {
    metaTitle: "AI Interview Coaching: China's 2026 Grad Job Market Hack",
    metaDescription: "",
    keywords: '',
  },
  'china-ai-chip-renaissance-q1-2026': {
    metaTitle: "China's AI Chip Renaissance: The Quarter That Changed Everything",
    metaDescription: "",
    keywords: '',
  },
  'china-ai-ppt-revolution-3-minute-decks-2026': {
    metaTitle: "The 3-Minute Deck Revolution: How China's Office Workers Are Using AI to Replace PowerPoint Design",
    metaDescription: "",
    keywords: '',
  },
  'china-ai-hallucination-blind-spot-crisis-2026': {
    metaTitle: "The Hallucination Blind Spot: How China's 249M AI Users Became Perfect Prey for a Deception Epidemic",
    metaDescription: "",
    keywords: '',
  },
  'china-ai-creator-economy-digital-humans-2026': {
    metaTitle: "China's AI Creator Economy: How Digital Humans and $45B Valuations Are Reshaping Global Content",
    metaDescription: "",
    keywords: '',
  },
  'china-ai-capital-war-deepseek-kimi-funding-2026': {
    metaTitle: "China's AI Capital War: DeepSeek Hits $50B, Kimi Raises $2B in Historic Funding Frenzy",
    metaDescription: "",
    keywords: '',
  },
  'china-ai-invisible-empire-consumer-apps-2026': {
    metaTitle: "The Invisible Empire: How China's AI Consumer Apps Quietly Conquered 2.5 Billion Users - And Why the World Barely Noticed",
    metaDescription: "",
    keywords: '',
  },
  'china-six-networks-trillion-infrastructure-ai-compute-2026': {
    metaTitle: "China's $7 Trillion 'Six Networks' Strategy: When AI Compute Gets the Same Priority as Water and Electricity",
    metaDescription: "",
    keywords: '',
  },
  'china-ai-olympus-65-billion-war-future-intelligence-2026': {
    metaTitle: "China's AI Olympus: The $65 Billion War for the Future of Intelligence",
    metaDescription: "",
    keywords: '',
  },
  'deepseek-73b-megaround-china-ai-funding-frenzy-2026': {
    metaTitle: "DeepSeek's $7.3B Mega-Round: China's AI Funding Frenzy Hits Historic Heights",
    metaDescription: "",
    keywords: '',
  },
  'china-agent-era-national-policy-ai-terminal-standards-anthropic-trillion-2026': {
    metaTitle: "China's Agent Era Begins: National Policy Framework, AI Terminal Standards, and the Trillion-Dollar Global AI Race",
    metaDescription: "",
    keywords: '',
  },
  'china-ai-infrastructure-awakening-wuwenxinqiong-deepseek-multimodal-2026': {
    metaTitle: "China AI Infrastructure Awakens: $100M Wuwenxinqiong + 8T Tokens",
    metaDescription: "Wuwenxinqiong's $100M+ raise, DeepSeek's multimodal launch, and Alibaba's voice-first PC AI signal China's AI infrastructure layer is maturing. Analysis of the 8 trillion token economy.",
    keywords: 'Wuwenxinqiong, China AI infrastructure, DeepSeek multimodal, Alibaba Qianwen voice AI, AI token economy, China AI compute, AI native infrastructure, Huawei Ascend, AI voice interface, China AI funding 2026',
  },
  'doubao-charging-ai-free-era-ends-china-2026': {
    metaTitle: "Doubao Charging: China's AI Free Era Ends | 345M Users",
    metaDescription: "ByteDance's Doubao launched paid subscriptions ($9.50-$72/mo) for 345M users. Analysis of token economics, pricing strategy, and what China's AI monetization shift means globally.",
    keywords: 'Doubao, ByteDance AI, China AI monetization, AI subscription, token economy, ChatGPT China, AI pricing, large language model business model, Doubao paid, China AI market 2026',
  },
  'kimi-20-billion-valuation-china-ai-token-economy': {
    metaTitle: "Kimi's $20 Billion Bet: How China's AI Token Economy Is Rewriting Global Power Dynamics",
    metaDescription: "Kimi hits a $20 billion funding round at $200 billion valuation while China's AI token consumption surges past the US for the third time. Here's what it means for the global AI landscape.",
    keywords: '',
  },
  'china-embodied-intelligence-revolution-2026': {
    metaTitle: "China's Embodied Intelligence Revolution: How 230+ Companies and a $110 Billion Market Are Reshaping Global Robotics in 2026",
    metaDescription: "China's embodied intelligence industry is surging from 1,800 humanoid robots shipped in 2025 to an anticipated 100,000+ in 2026, backed by $195 billion in annual funding and a supply chain that cuts costs to 50% of Western equivalents.",
    keywords: 'embodied intelligence, humanoid robot, China AI, robotics industry, Unitree, UBTECH, embodied AI, VLA model, manufacturing automation',
  },
  'deepseek-v4-promo-ending-analysis': {
    metaTitle: "DeepSeek V4's 75% Promo Ends May 31: What Happens Next and Why the AI Pricing War Is Just Beginning",
    metaDescription: "",
    keywords: '',
  },
  'china-ai-deepfake-fraud-crisis-2026': {
    metaTitle: "China's AI Deepfake Fraud Crisis: How 700,000 Annual Scams and a $40 Billion Global Threat Are Reshaping Trust in the Digital Age",
    metaDescription: "",
    keywords: '',
  },
  'china-ai-revolution-may-2026-tokens-deepseek-huawei': {
    metaTitle: "China's AI Revolution: How 140 Trillion Tokens, DeepSeek V4 on Huawei Chips, and a $700B Arms Race Are Reshaping Global Technology",
    metaDescription: "",
    keywords: '',
  },
  'kimi-k2-6-open-source-coding-revolution': {
    metaTitle: "Kimi K2.6: How a $18B Chinese Startup Is Rewriting the Rules of Open-Source AI Coding",
    metaDescription: "",
    keywords: '',
  },
  'china-ai-global-surge-api-traffic-empire-2026': {
    metaTitle: "From Made in China to Trained in China: The Untold Story of How Chinese AI Conquered Global Developers",
    metaDescription: "",
    keywords: '',
  },
  'china-ai-agent-revolution-2026-policy-market': {
    metaTitle: "Inside China's AI Policy Machine: How the Politburo's 'AI+ Action' Directive Is Rewriting Procurement Law",
    metaDescription: "",
    keywords: '',
  },
  'deepseek-v4-pricing-strategy-analysis': {
    metaTitle: "DeepSeek V4 Pricing Strategy: How $0.14/1M Tokens Is Reshaping the Economics of Frontier AI",
    metaDescription: "",
    keywords: '',
  },
  'ai-compute-crunch-china-token-crisis-2026': {
    metaTitle: "The Great AI Compute Crunch: How China's AI Boom Is Running Out of Tokens",
    metaDescription: "",
    keywords: '',
  },
  'bytedance-seed-brain-drain-70-engineers': {
    metaTitle: "ByteDance's AI Brain Drain: 70 Top Engineers Exit Seed Team in 12 Months",
    metaDescription: "",
    keywords: '',
  },
  'deepseek-v4-million-token-china-ai-sovereignty': {
    metaTitle: "DeepSeek V4: The Million-Token API Update That Signals China's AI Sovereignty Shift",
    metaDescription: "",
    keywords: '',
  },
  'china-embodied-intelligence-robot-marathon-2026': {
    metaTitle: "China's Embodied Intelligence Revolution: When Robots Outrun Humans - April 2026",
    metaDescription: "",
    keywords: '',
  },
  'deepseek-first-funding-20-billion-valuation': {
    metaTitle: "DeepSeek Breaks Its Vow: Inside the $3 Billion Funding Round That Shook China's AI World",
    metaDescription: "",
    keywords: '',
  },
  'china-ai-avatar-revolution-2026': {
    metaTitle: "China's AI Avatar Revolution: How 410 Million Views Signal a Global Content Creation Shift",
    metaDescription: "",
    keywords: '',
  },
  'stanford-ai-index-2026-china-rise': {
    metaTitle: "Stanford AI Index 2026: China's 'Parallel Run' Era Has Arrived",
    metaDescription: "",
    keywords: '',
  },
  'alibaba-token-hub-100b-gambit': {
    metaTitle: "Alibaba's $100B Token Gambit: Inside the Alibaba Token Hub Revolution Reshaping China's AI Economy",
    metaDescription: "",
    keywords: '',
  },
  'china-ai-agent-explosion-2025-enterprise-deployment': {
    metaTitle: "China's AI Agent Explosion: How 126 Platforms and $1B+ in Enterprise Deals Are Reshaping Global Automation",
    metaDescription: "",
    keywords: '',
  },
  'china-ai-model-war-april-2026-week-changed-everything': {
    metaTitle: "The Week That Changed Everything: China's AI Model War Intensifies in April 2026",
    metaDescription: "",
    keywords: '',
  },
  'china-ai-chip-war-2026-us-sanctions': {
    metaTitle: "The Great Silicon Wall: How China's AI Industry Is Defying U.S. Chip Sanctions in 2026",
    metaDescription: "",
    keywords: '',
  },
  'china-ai-model-wars-april-2026': {
    metaTitle: "China's AI Model Wars: How Alibaba, ByteDance, and MiniMax Are Reshaping Global AI Competition in April 2026",
    metaDescription: "",
    keywords: '',
  },
  'modelbest-edge-ai-unicorn-2026': {
    metaTitle: "ModelBest Becomes Unicorn: How Tsinghua's Edge AI Pioneer Is Reshaping On-Device Intelligence",
    metaDescription: "",
    keywords: '',
  },
  'ai-interview-coaching-china-2025': {
    metaTitle: "The AI Interview Coach Phenomenon: How Chinese Graduates Are Using AI to Crack the Job Market",
    metaDescription: "",
    keywords: '',
  },
  'china-ai-token-surge-gen-z': {
    metaTitle: "China's AI Overtake: 31% Surge in Token Usage Signals Global Power Shift",
    metaDescription: "",
    keywords: '',
  },
  'china-ai-avatar-revolution-2025': {
    metaTitle: "China's AI Avatar Revolution: 410M Views Transformed Content Creation Forever",
    metaDescription: "",
    keywords: '',
  },
  'china-ai-digital-human-revolution': {
    metaTitle: "China's AI Digital Human Revolution: 80,000 Virtual Avatars Reshaping Content",
    metaDescription: "",
    keywords: '',
  },
  'doubao-12-trillion-token-explosion': {
    metaTitle: "Doubao's 12 Trillion Token Explosion: How ByteDance Is Quietly Winning the Global AI Race",
    metaDescription: "",
    keywords: '',
  },
  'stepfun-terminal-ai-revolution': {
    metaTitle: "StepFun's $7 Billion Bet: How China's AI Unicorn Is Winning the Terminal Race",
    metaDescription: "",
    keywords: '',
  },
  'ai-thesis-writing-china': {
    metaTitle: "AI Thesis Writing Explodes: How 12 Million Chinese Students Are Rewriting Academic Rules",
    metaDescription: "",
    keywords: '',
  },
  'doubao-bytedance': {
    metaTitle: "ByteDance Doubao: The 200 Million User AI Assistant Reshaping Content Creation",
    metaDescription: "",
    keywords: '',
  },
  'bytedance-ai-gamble-gpu-kingpin-profit-drop': {
    metaTitle: "ByteDance's AI Obsession: How a 70% Profit Plunge Turned a Social Media Giant Into China's GPU Kingpin",
    metaDescription: "",
    keywords: '',
  },
  'china-ai-april-infrastructure-2026': {
    metaTitle: "China's AI Revolution: Education Reform, National Standards, and Ecosystem Breakthroughs in April 2026",
    metaDescription: "",
    keywords: '',
  },
  'minimax-ipo-212-million-users-ai-companion-empire': {
    metaTitle: "MiniMax Files for IPO: How China's AI Companion Empire Built 212 Million Users and Challenged the Global Social Landscape",
    metaDescription: "",
    keywords: '',
  },
  'tars-embodied-intelligence-455-million-brain-club': {
    metaTitle: "Tars Raises $455M: How China's 'Robot Brain' Startup Cracked the Embodied Intelligence Code",
    metaDescription: "",
    keywords: '',
  },
  'tongyi-qianwen-alibaba': {
    metaTitle: "Alibaba Tongyi Qianwen: Enterprise AI Powerhouse",
    metaDescription: "",
    keywords: '',
  },
  'wenxin-yiyan-baidu': {
    metaTitle: "Baidu Wenxin Yiyan: The 300 Million User AI Assistant",
    metaDescription: "",
    keywords: '',
  },
  'ai-video-tools-china': {
    metaTitle: "Chinese AI Video Generation: Kling, Vidu, Hailuo vs Sora Technical Comparison",
    metaDescription: "",
    keywords: '',
  },
  'chinese-ai-index-2026': {
    metaTitle: "Chinese AI Index: 103 Companies Tracking",
    metaDescription: "",
    keywords: '',
  },
  'deepseek-v3-deep-dive': {
    metaTitle: "DeepSeek-V3: The $5.6M Training Run",
    metaDescription: "",
    keywords: '',
  },
  'deepseek-vs-chatgpt': {
    metaTitle: "DeepSeek vs ChatGPT: Complete Comparison",
    metaDescription: "",
    keywords: '',
  },
  'minimax-talkie': {
    metaTitle: "MiniMax: The 212 Million User AI Companion Empire Built on Digital Intimacy",
    metaDescription: "",
    keywords: '',
  },
  'chinese-ai-landscape': {
    metaTitle: "The Rise of Chinese AI: Complete Ecosystem Map (Foundation to Application)",
    metaDescription: "",
    keywords: '',
  },
  'kimi-2m-context': {
    metaTitle: "Kimi K2.5 Technical Analysis: 1 Trillion Parameters, 256K Context, Agent Swarms",
    metaDescription: "",
    keywords: '',
  }
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

    // Extract first image URL from markdown content
function extractFirstImageFromContent(content) {
  const imgMatch = content.match(/!\[.*?\]\((https:\/\/images\.unsplash\.com\/[^)]+)\)/)
  if (imgMatch) {
    // Ensure it has proper dimensions for hero/OG
    let url = imgMatch[1]
    if (!url.includes('w=')) {
      url += (url.includes('?') ? '&' : '?') + 'w=1200&h=600&fit=crop'
    }
    return url
  }
  return null
}
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
      heroImage: meta.heroImage || extractFirstImageFromContent(content) || 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
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

  // === Affiliate Link Auto-Injection ===
  const usedAffiliateLinks = new Set()
  const affiliateMap = {
    // 占位符：填入你的 affiliate 链接，每个关键词每篇文章只替换第一次出现
    // 'DeepSeek': 'https://platform.deepseek.com/',
    // 'Kimi': 'https://kimi.moonshot.cn/',
    // 'MiniMax': 'https://www.minimaxi.com/',
    // 'ByteDance': 'https://www.bytedance.com/',
    // 'Alibaba': 'https://www.alibaba.com/',
    // 'Huawei': 'https://www.huawei.com/',
  }

  function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  }

  function renderAffiliateText(text, keyPrefix) {
    if (!text || !text.trim()) return <span key={keyPrefix}>{text}</span>

    const availableKeywords = Object.keys(affiliateMap)
      .filter(k => !usedAffiliateLinks.has(k))
      .sort((a, b) => b.length - a.length)

    if (availableKeywords.length === 0) return <span key={keyPrefix}>{text}</span>

    const matches = []
    for (const keyword of availableKeywords) {
      const regex = new RegExp(`\\b${escapeRegex(keyword)}\\b`, 'gi')
      let match
      while ((match = regex.exec(text)) !== null) {
        matches.push({
          index: match.index,
          length: match[0].length,
          text: match[0],
          key: keyword,
        })
      }
    }

    matches.sort((a, b) => a.index - b.index)

    const seenKeys = new Set()
    const uniqueMatches = []
    for (const m of matches) {
      if (!seenKeys.has(m.key)) {
        seenKeys.add(m.key)
        uniqueMatches.push(m)
        usedAffiliateLinks.add(m.key)
      }
    }

    const parts = []
    let lastIndex = 0
    for (const m of uniqueMatches) {
      if (m.index < lastIndex) continue
      if (m.index > lastIndex) {
        parts.push(<span key={`${keyPrefix}-${parts.length}`}>{text.substring(lastIndex, m.index)}</span>)
      }
      parts.push(
        <a key={`${keyPrefix}-${parts.length}`}
           href={affiliateMap[m.key]}
           target="_blank"
           rel="noopener noreferrer sponsored"
           style={{ color: '#22d3ee', textDecoration: 'underline' }}>
          {m.text}
        </a>
      )
      lastIndex = m.index + m.length
    }

    if (lastIndex < text.length) {
      parts.push(<span key={`${keyPrefix}-${parts.length}`}>{text.substring(lastIndex)}</span>)
    }

    if (parts.length === 0) return <span key={keyPrefix}>{text}</span>
    return <span key={keyPrefix}>{parts}</span>
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
        return renderAffiliateText(part.content, idx)
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

          {/* Author Attribution - E-E-A-T Signal */}
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
            <Link href="/privacy/" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '14px' }}>
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
