import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'
import Link from 'next/link'


// SEO Metadata for each article
const postMetadata = {
  'forbes-china-ai-top-50-six-decoupling-signals-2026': {
    metaTitle: "The Forbes China AI TOP 50: Six Decoupling Signals That Silicon Valley Can't Ignore",
    metaDescription: "Forbes China's 2026 AI TOP 50 rankings reveal six decoupling signals across foundation models, silicon, embodied intelligence, and frontier science that prove China's AI ecosystem has fundamentally separated from Western technology at every layer.",
    keywords: '["Forbes China AI TOP 50", "China AI ecosystem", "AI decoupling", "DeepSeek", "Cambricon", "UBTECH", "ADASPACE", "embodied intelligence", "Chinese AI companies", "AI stack independence"]',
  },
  'gaokao-agent-wars-china-ai-battleground-2026': {
    metaTitle: "The Gaokao Agent Wars: How China's 12.9 Million Student Exam Became Tech's Biggest AI Battleground",
    metaDescription: "The gaokao has always been more than an exam. For decades, it has been the single most consequential information market in China. Every year, 12–13 million students and their families engage in a...",
    keywords: '',
  },
  'triple-silicon-china-ai-chip-independence-2026': {
    metaTitle: "The Triple Silicon Gambit: How China's AI Chip Surge Is Forging an Independent Path to AGI",
    metaDescription: "For nearly three years, the prevailing narrative in Washington, London, and Silicon Valley has been straightforward: the US ban on advanced GPU exports to China has created a \"compute moat\" that...",
    keywords: '',
  },
  'china-embodied-ai-revolution-funding-world-models-2026': {
    metaTitle: "China's Embodied AI Revolution: The $3.3 Billion Quarterly Funding Frenzy, World Models, and the Physical AI Economy",
    metaDescription: "China's embodied AI sector raised $3.3 billion in Q1 2026 alone, with Unitree Robotics targeting a $7 billion IPO and ByteDance declaring world models its top priority. Here's how physical AI is becoming China's next trillion-dollar industry.",
    keywords: '["China embodied AI", "robotics funding 2026", "Unitree IPO", "ByteDance world models", "TARS Robotics", "humanoid robots China", "AI robotics investment", "Seed world models", "physical AI economy", "China robotics IPO"]',
  },
  'china-ai-agent-army-126-platforms-67-enterprise-adoption-2026': {
    metaTitle: "China's AI Agent Army: 126 Platforms, 67% Enterprise Adoption",
    metaDescription: "China has built 126 AI Agent platforms with 67% enterprise adoption. The strategy, scale, and enterprise-first approach look nothing like America's—and that's why it's working.",
    keywords: 'AI Agent, China AI, Coze, enterprise automation, ByteDance, Alibaba, AI platforms, agentic AI, B2B AI, China tech',
  },
  'ai-thesis-writing-phenomenon-china-2026': {
    metaTitle: "The AI Thesis Writing Phenomenon: How Chinese Students Are Redefining Academic Work with Generative AI",
    metaDescription: "China's graduation season is upon us, and a new phenomenon is dominating social media: AI thesis writing. On Xiaohongshu alone, searches for \"AI写论文\" (AI writing thesis) have surged 85% in just one...",
    keywords: '["AI thesis writing", "China AI education", "Kimi AI", "ChatGPT", "Claude", "academic integrity", "Chinese graduates", "AI detection", "thesis generation", "generative AI education"]',
  },
  'tencent-wechat-ai-agent-billion-users-china-2026': {
    metaTitle: "Tencent's WeChat AI Agent: The 1.4 Billion-User Bet That Reshaped China's Tech Markets Overnight",
    metaDescription: "A Financial Times report on June 2 revealed Tencent is testing an AI agent inside WeChat. The result: a $41 billion market cap surge, China's biggest agentic AI platform, and a direct challenge to Alibaba and ByteDance.",
    keywords: '["Tencent WeChat AI agent", "WeChat agent 2026", "Tencent AI strategy", "China AI agent market", "WeChat mini program AI", "Tencent stock surge", "Hunyuan model", "ByteDance vs Tencent AI", "super app AI agent", "China tech stocks 2026"]',
  },
  'china-ai-june-surge-deepseek-zhipu-agentic-ai-2026': {
    metaTitle: "China's AI June Surge: DeepSeek's $7B First Round, Zhipu's STAR Market Bid, and the Agentic AI Stack",
    metaDescription: "DeepSeek closes its first external round at $59B. Zhipu files for a $2B STAR Market IPO. Huawei unveils an Agentic AI stack. And on June 6, China's AI industry converges on Hangzhou for a summit that signals the shift from 'model hype' to 'industrial deployment.'",
    keywords: '["DeepSeek funding", "Zhipu AI IPO", "Huawei Agentic AI", "China AI investment 2026", "STAR Market AI", "AI agent platform", "China AI policy", "DeepSeek valuation", "AI infrastructure", "agentic core"]',
  },
  'deepseek-7-billion-fundraising-tencent-catl-api-price-war-2026': {
    metaTitle: "DeepSeek's $7.4B Fundraising Frenzy: How 500 Billion Yuan, Tencent's Bet, and a 97.5% API Price Collapse Are Rewriting China's AI Rules",
    metaDescription: "While Silicon Valley fixates on Anthropic's $96.5 billion valuation and its secret IPO filing, something equally seismic is unfolding in China. DeepSeek—the startup that taught the world that $5.6...",
    keywords: '',
  },
  'china-ai-ipo-wave-zhipu-minimax-2026': {
    metaTitle: "China's AI IPO Wave: How Zhipu and MiniMax Are Rewriting the Rules of AI Capitalization",
    metaDescription: "Something historic is happening in China's AI industry. Zhipu AI, one of China's \"Big Five\" large model companies, has seen its share price surge over 1,600% since its Hong Kong IPO, pushing its...",
    keywords: '["China AI IPO", "Zhipu AI", "MiniMax", "China AI market", "AI valuation", "Hong Kong stock market", "DeepSeek", "AI model companies", "Chinese AI stocks", "AI investment 2026"]',
  },
  'ai-interview-coaching-china-graduates-job-market-2026': {
    metaTitle: "AI Interview Coaching: How Chinese Graduates Are Using AI to Crack the Job Market (+120% Trend Explosion)",
    metaDescription: "With Xiaohongshu views surging 120% in one week, AI interview coaching has become the hottest trend among Chinese graduates facing a brutal job market. We analyze 6 platforms, university adoption programs, and the DeepSeek-V3 technology powering this revolution.",
    keywords: '["AI interview coaching", "China job market", "graduate employment AI", "Chinese AI tools", "DeepSeek V3", "Xiaohongshu trends", "AI recruitment", "OfferGoose", "MianShiMao", "AI career tools", "Chinese graduates", "virtual HR"]',
  },
  'china-ai-agent-era-140-trillion-tokens-2026': {
    metaTitle: "China's AI Agent Era: How 140 Trillion Daily Tokens, New Regulations, and a DeepSeek Price War Are Reshaping Global AI",
    metaDescription: "On June 1, 2026, three Chinese ministries jointly issued the \"Implementation Opinions on Standardized Application and Innovative Development of AI Agents\" — the most comprehensive national policy...",
    keywords: '',
  },
  'deepseek-7b-mega-round-china-ai-capital-shift-2026': {
    metaTitle: "DeepSeek's $7.4B Mega-Round: How China's Most Secretive AI Lab Went All-In on Capital",
    metaDescription: "DeepSeek — the company that built a $5.6M model to rival GPT-4 and rejected venture capital for two years — is now raising $7.4 billion in the largest AI funding round in Chinese history. Founder Liang Wenfeng is putting $2.8 billion of his own money on the table. Tencent commits $1.4 billion. CATL invests $700 million. And the valuation? A staggering $52-59 billion.",
    keywords: '["DeepSeek", "AI funding", "China AI", "Liang Wenfeng", "Tencent AI investment", "CATL", "AI infrastructure", "Chinese AI lab", "AI mega-round", "DeepSeek valuation", "AI capital race"]',
  },
  'minimax-300m-users-arr-doubles-a-share-ipo-china-ai-export-2026': {
    metaTitle: "MiniMax Hits 300M Users and Doubles ARR in 60 Days: The Anatomy of China's Most Successful AI Export",
    metaDescription: "In 60 days, MiniMax doubled its annual recurring revenue to approximately $300M, crossed 300 million global users, and launched its A-share IPO process. With 73% of revenue from international markets, the company has built the most successful Chinese AI export since TikTok—and the financials reveal both extraordinary growth and a brutal path to profitability.",
    keywords: '["MiniMax", "Talkie AI", "Hailuo AI", "China AI export", "AI startup IPO", "Chinese AI overseas", "MiniMax M3", "AI companion app", "China AI model pricing", "Token economics", "AI revenue", "A-share IPO"]',
  },
  'china-ai-drama-revolution-bytedance-650m-empire-2026': {
    metaTitle: "China's AI Drama Revolution: How ByteDance Built a $650M Short-Content Empire in 90 Days",
    metaDescription: "In 90 days, China's AI short drama market expanded sixfold from $100M to $650M. ByteDance's integrated ecosystem—Doubao for scripts, Jimeng for visuals, Volcano Engine for compute, and Red Fruit for distribution—has compressed production cycles from 90 days to 7-10 days at 20% of traditional cost. With 150M overseas active users and nearly 50% willing to pay, this is China's most explosive AI content revolution yet.",
    keywords: '["China AI drama", "AI short drama", "ByteDance Red Fruit", "AI video generation China", "Kling AI", "Hailuo AI", "MiniMax video", "AI content creation", "China creator economy", "AI filmmaking"]',
  },
  'china-humanoid-robot-tsunami-2026-50k-units-global-dominance': {
    metaTitle: "China's Humanoid Robot Tsunami: 50,000 Units, 700% Growth, and Why 2026 Is the Year Everything Changed",
    metaDescription: "In May 2026, three separate research reports dropped within two weeks of each other. Each told the same story in slightly different numbers, but the narrative was unmistakable: the humanoid robot...",
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
    metaDescription: "A 62-year-old retired teacher in Hangzhou lost ¥280,000 to an AI deepfake video call from her 'son.' The story sparked a national conversation reaching 5.6 billion views across Chinese social media — the fastest-growing AI topic at +300% week-over-week. What began as scattered fraud reports has crystallized into a full-blown public anxiety crisis, forcing regulators and AI companies into an unprecedented response.",
    keywords: '["AI deepfake", "AI fraud", "China AI security", "deepfake video call", "digital trust", "AI regulation China", "face swap fraud", "AI crime", "social media panic", "AI ethics"]',
  },
  'ai-digital-humans-china-billion-dollar-livestream-revolution': {
    metaTitle: "China's AI Digital Human Explosion: The 100 Billion Yuan Avatar Economy Reshaping E-Commerce",
    metaDescription: "In February 2026, Chinese regulators drew a hard line: every AI-generated face in a livestream must be labeled. Two months later, that rule hasn't slowed the industry down—it's accelerated it. With...",
    keywords: '',
  },
  'china-ai-unicorn-stampede-kimi-deepseek-valuation-shakeout-2026-26': {
    metaTitle: "China's AI Unicorn Stampede: Kimi's $20B Round, DeepSeek's $500B Valuation, and the Great Model Shakeout of 2026",
    metaDescription: "One $20 billion funding round. Another $500 billion valuation. Two IPOs with stock prices up 600%. And a single question on every investor's mind: Is China's AI industry about to produce its own NVIDIA? This is the moment China's AI industry transforms from 'copycat' to 'category leader.'",
    keywords: '["Kimi funding", "DeepSeek valuation", "Zhipu AI IPO", "MiniMax IPO", "ByteDance Doubao", "China AI unicorn", "AI model shakeout", "Chinese AI investment", "AI stock surge", "Qwen model", "Alibaba AI"]',
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
    metaDescription: "On March 2, 2026, MiniMax released its first annual report as a publicly traded company — and in doing so, delivered something the global AI industry had never seen: audited financial proof that a...",
    keywords: '',
  },
  'china-ai-interview-revolution-2026': {
    metaTitle: "AI Interview Coaching: China's 2026 Grad Job Market Hack",
    metaDescription: "In the seven days leading up to May 20, 2026, Chinese social media platform Xiaohongshu recorded a 120% week-over-week surge in searches for \"AI interview coaching\" (AI面试辅导). The topic accumulated...",
    keywords: '',
  },
  'china-ai-chip-renaissance-q1-2026': {
    metaTitle: "China's AI Chip Renaissance: The Quarter That Changed Everything",
    metaDescription: "For years, China's AI chip industry was defined by what it couldn't do. Couldn't access the most advanced manufacturing. Couldn't match Nvidia's software ecosystem. Couldn't turn a profit. The...",
    keywords: '',
  },
  'china-ai-ppt-revolution-3-minute-decks-2026': {
    metaTitle: "The 3-Minute Deck Revolution: How China's Office Workers Are Using AI to Replace PowerPoint Design",
    metaDescription: "The 3-Minute Deck Revolution: How China's Office Workers Are Using AI to Replace PowerPoint Design",
    keywords: '',
  },
  'china-ai-hallucination-blind-spot-crisis-2026': {
    metaTitle: "The Hallucination Blind Spot: How China's 249M AI Users Became Perfect Prey for a Deception Epidemic",
    metaDescription: "China's generative AI adoption has reached a scale unmatched by any nation: 249 million users—17.7% of the population—now interact with large language models regularly. But beneath this milestone...",
    keywords: '',
  },
  'china-ai-creator-economy-digital-humans-2026': {
    metaTitle: "China's AI Creator Economy: How Digital Humans and $45B Valuations Are Reshaping Global Content",
    metaDescription: "On May 6, 2026, while Western markets were digesting another quarterly earnings cycle, China's AI industry quietly delivered a one-two punch that reverberated through global venture capital....",
    keywords: '',
  },
  'china-ai-capital-war-deepseek-kimi-funding-2026': {
    metaTitle: "China's AI Capital War: DeepSeek Hits $50B, Kimi Raises $2B in Historic Funding Frenzy",
    metaDescription: "> In a single week, China's AI startup valuations jumped by over $100 billion. DeepSeek went from $10B to $50B. Kimi locked in $2B fresh capital. And the entire \"Six Little Tigers\" cohort is racing...",
    keywords: '',
  },
  'china-ai-invisible-empire-consumer-apps-2026': {
    metaTitle: "The Invisible Empire: How China's AI Consumer Apps Quietly Conquered 2.5 Billion Users — And Why the World Barely Noticed",
    metaDescription: "While Silicon Valley obsessed over GPT-5's next token and Anthropic's march toward a trillion-dollar valuation, something extraordinary was happening on the other side of the Pacific. China's AI...",
    keywords: '',
  },
  'china-six-networks-trillion-infrastructure-ai-compute-2026': {
    metaTitle: "China's $7 Trillion 'Six Networks' Strategy: When AI Compute Gets the Same Priority as Water and Electricity",
    metaDescription: "On April 28, 2026, China's Politburo did something unprecedented: it elevated compute networks (算力网) to the same strategic tier as water networks, power grids, and logistics networks. In a single...",
    keywords: '',
  },
  'china-ai-olympus-65-billion-war-future-intelligence-2026': {
    metaTitle: "China's AI Olympus: The $65 Billion War for the Future of Intelligence",
    metaDescription: "In seven days, Chinese AI companies raised more capital than the entire European AI sector raised in 2025. They did it while simultaneously releasing models that collectively hold the top five positions on global open-source leaderboards. This is not a funding cycle. This is an arms race with a product launch attached.",
    keywords: '["Kimi AI", "DeepSeek valuation", "Moonshot AI funding", "Chinese open source AI", "AI arms race", "China AI investment", "AI infrastructure", "token economy", "Cursor AI", "Alibaba AI", "China tech funding"]',
  },
  'deepseek-73b-megaround-china-ai-funding-frenzy-2026': {
    metaTitle: "DeepSeek's $7.3B Mega-Round: China's AI Funding Frenzy Hits Historic Heights",
    metaDescription: "DeepSeek — the Hangzhou-based research lab that upended global AI markets in January 2025 with its shockingly efficient R1 reasoning model — is now seeking 500 billion yuan ($7.35 billion) in its...",
    keywords: '',
  },
  'china-agent-era-national-policy-ai-terminal-standards-anthropic-trillion-2026': {
    metaTitle: "China's Agent Era Begins: National Policy Framework, AI Terminal Standards, and the Trillion-Dollar Global AI Race",
    metaDescription: "Three Chinese ministries jointly issued the most comprehensive national policy framework for AI agent governance to date. AI terminal intelligence grading standards were released. Anthropic nears a $1 trillion valuation. And China's AI models processed 8 trillion tokens in a single week. May 2026 will be remembered as the month AI agents went mainstream.",
    keywords: '["AI agent policy", "China AI regulation", "Anthropic valuation", "AI terminal standards", "DeepSeek API", "China AI patent", "AI infrastructure", "China US tech dialogue", "smart agent", "GB/Z 177", "AI policy framework"]',
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
    metaDescription: "DeepSeek V4 launched on April 24, 2026, with a 75% promotional discount on its flagship Pro model. Originally set to expire on May 5, the offer has been extended to May 31 — but the clock is ticking....",
    keywords: '',
  },
  'china-ai-deepfake-fraud-crisis-2026': {
    metaTitle: "China's AI Deepfake Fraud Crisis: How 700,000 Annual Scams and a $40 Billion Global Threat Are Reshaping Trust in the Digital Age",
    metaDescription: "China's AI industry has achieved remarkable commercial success. Moonshot AI's Kimi K2.6 matches GPT-5.5 on coding benchmarks. DeepSeek V4 undercuts Western APIs by 10-30x. MiniMax filed for IPO with...",
    keywords: '',
  },
  'china-ai-revolution-may-2026-tokens-deepseek-huawei': {
    metaTitle: "China's AI Revolution: How 140 Trillion Tokens, DeepSeek V4 on Huawei Chips, and a $700B Arms Race Are Reshaping Global Technology",
    metaDescription: "On April 24, 2026, DeepSeek quietly did something no frontier AI lab had ever attempted: it released its flagship V4 model—1.6 trillion parameters, million-token context windows, performance rivaling...",
    keywords: '',
  },
  'kimi-k2-6-open-source-coding-revolution': {
    metaTitle: "Kimi K2.6: How a $18B Chinese Startup Is Rewriting the Rules of Open-Source AI Coding",
    metaDescription: "On April 20, 2026, while Silicon Valley was still processing OpenAI's GPT-5.5 launch, a Beijing-based startup quietly shipped a model that would send shockwaves through the global developer...",
    keywords: '',
  },
  'china-ai-global-surge-api-traffic-empire-2026': {
    metaTitle: "From Made in China to Trained in China: The Untold Story of How Chinese AI Conquered Global Developers",
    metaDescription: "China's technology exports have always followed a familiar playbook: manufacture hardware cheaply, sell globally, gradually move up the value chain. Smartphones took a decade. Solar panels took...",
    keywords: '',
  },
  'china-ai-agent-revolution-2026-policy-market': {
    metaTitle: "Inside China's AI Policy Machine: How the Politburo's 'AI+ Action' Directive Is Rewriting Procurement Law",
    metaDescription: "> \"The question isn't whether AI agents will replace human workers. The question is whether companies that don't deploy agents will be replaced by companies that do.\" — Industry analyst, 36Kr Summit,...",
    keywords: '',
  },
  'deepseek-v4-pricing-strategy-analysis': {
    metaTitle: "DeepSeek V4 Pricing Strategy: How $0.14/1M Tokens Is Reshaping the Economics of Frontier AI",
    metaDescription: "On April 24, 2026, DeepSeek released V4 — a dual-tier model family (Pro and Flash) with a pricing structure that instantly became the new global benchmark for cost-per-capability in frontier AI. The...",
    keywords: '',
  },
  'ai-compute-crunch-china-token-crisis-2026': {
    metaTitle: "The Great AI Compute Crunch: How China's AI Boom Is Running Out of Tokens",
    metaDescription: "China's AI revolution is facing an unexpected bottleneck. In April 2026, as DeepSeek launched its highly anticipated V4 model and Kimi pushed out K2.6, the nation's hottest AI companies discovered a...",
    keywords: '',
  },
  'bytedance-seed-brain-drain-70-engineers': {
    metaTitle: "ByteDance's AI Brain Drain: 70 Top Engineers Exit Seed Team in 12 Months",
    metaDescription: "Bytedance's AI Brain Drain: 70 Top Engineers Exit Seed Team in 12 Months",
    keywords: '',
  },
  'deepseek-v4-million-token-china-ai-sovereignty': {
    metaTitle: "DeepSeek V4: The Million-Token API Update That Signals China's AI Sovereignty Shift",
    metaDescription: "On April 22, 2026, Chinese developers noticed something peculiar. DeepSeek's API—previously capped at 128K context tokens—suddenly accepted prompts up to 1 million tokens. The knowledge cutoff...",
    keywords: '',
  },
  'china-embodied-intelligence-robot-marathon-2026': {
    metaTitle: "China's Embodied Intelligence Revolution: When Robots Outrun Humans — April 2026",
    metaDescription: "Meta Title: China's Embodied Intelligence Revolution: When Robots Outrun Humans — April 2026\nMeta Description: Honor's \"Lightning\" robot breaks human half-marathon world record in 50:26. TARS raises...",
    keywords: '',
  },
  'deepseek-first-funding-20-billion-valuation': {
    metaTitle: "DeepSeek Breaks Its Vow: Inside the $3 Billion Funding Round That Shook China's AI World",
    metaDescription: "On April 22, 2026, The Information broke the story that would send China's venture capital ecosystem into a frenzy: DeepSeek was finally taking external money.",
    keywords: '',
  },
  'china-ai-avatar-revolution-2026': {
    metaTitle: "China's AI Avatar Revolution: How 410 Million Views Signal a Global Content Creation Shift",
    metaDescription: "China's AI avatar market has reached an inflection point. With 410 million views on the topic \"AI数字人\" (AI Digital Humans) on Xiaohongshu alone, and a staggering 200% weekly growth rate, this isn't...",
    keywords: '',
  },
  'stanford-ai-index-2026-china-rise': {
    metaTitle: "Stanford AI Index 2026: China's 'Parallel Run' Era Has Arrived",
    metaDescription: "> Alibaba ranks #3 globally and #1 in China. The performance gap between top Chinese and US AI models has narrowed to just 2.7%.",
    keywords: '',
  },
  'alibaba-token-hub-100b-gambit': {
    metaTitle: "Alibaba's $100B Token Gambit: Inside the Alibaba Token Hub Revolution Reshaping China's AI Economy",
    metaDescription: "On March 16, 2026, Alibaba did something unprecedented in corporate history: it named a core business unit after a technical metric. The Alibaba Token Hub (ATH)—a name that would make most boardrooms...",
    keywords: '',
  },
  'china-ai-agent-explosion-2025-enterprise-deployment': {
    metaTitle: "China's AI Agent Explosion: How 126 Platforms and $1B+ in Enterprise Deals Are Reshaping Global Automation",
    metaDescription: "The Chinese AI Agent market has crossed a critical threshold in 2025. What began as experimental pilots in 2023 has evolved into a full-scale industrial deployment, with enterprises moving from...",
    keywords: '',
  },
  'china-ai-model-war-april-2026-week-changed-everything': {
    metaTitle: "The Week That Changed Everything: China's AI Model War Intensifies in April 2026",
    metaDescription: "The first week of April 2026 will be remembered as the moment China's AI industry fundamentally shifted gears. What started as a typical news week quickly escalated into an unprecedented flurry of...",
    keywords: '',
  },
  'china-ai-chip-war-2026-us-sanctions': {
    metaTitle: "The Great Silicon Wall: How China's AI Industry Is Defying U.S. Chip Sanctions in 2026",
    metaDescription: "In January 2025, when the Biden administration imposed sweeping restrictions on AI chip exports to China, the consensus in Silicon Valley was clear: Chinese AI development would slow dramatically....",
    keywords: '',
  },
  'china-ai-model-wars-april-2026': {
    metaTitle: "China's AI Model Wars: How Alibaba, ByteDance, and MiniMax Are Reshaping Global AI Competition in April 2026",
    metaDescription: "April 1-10, 2026 will be remembered as the moment China's AI industry shifted from \"fast follower\" to \"global leader.\" In just ten days, domestic tech giants unleashed a barrage of innovations that...",
    keywords: '',
  },
  'modelbest-edge-ai-unicorn-2026': {
    metaTitle: "ModelBest Becomes Unicorn: How Tsinghua's Edge AI Pioneer Is Reshaping On-Device Intelligence",
    metaDescription: "A quiet revolution in artificial intelligence is happening on the smallest screens. While tech giants battle for cloud dominance, ModelBest—a Tsinghua University spinoff barely three years old—has...",
    keywords: '',
  },
  'ai-interview-coaching-china-2025': {
    metaTitle: "The AI Interview Coach Phenomenon: How Chinese Graduates Are Using AI to Crack the Job Market",
    metaDescription: "China's job market has become a battleground for millions of fresh graduates, and a surprising new weapon has emerged: AI interview coaches. In the past week alone, searches for \"AI interview...",
    keywords: '',
  },
  'china-ai-token-surge-gen-z': {
    metaTitle: "China's AI Overtake: 31% Surge in Token Usage Signals Global Power Shift",
    metaDescription: "China's AI Overtake: 31% Surge in Token Usage Signals Global Power Shift",
    keywords: '',
  },
  'china-ai-avatar-revolution-2025': {
    metaTitle: "China's AI Avatar Revolution: 410M Views Transformed Content Creation Forever",
    metaDescription: "Something extraordinary is happening on Chinese social media. In the first week of April 2026, the topic \"AI Digital Human\" (AI数字人) on Xiaohongshu (China's Instagram-equivalent) accumulated 410...",
    keywords: '',
  },
  'china-ai-digital-human-revolution': {
    metaTitle: "China's AI Digital Human Revolution: 80,000 Virtual Avatars Reshaping Content",
    metaDescription: "The creator economy in China has reached an inflection point. A single hashtag on Xiaohongshu—\"AI数字人\" (AI Digital Human)—has accumulated 410 million views with a staggering +200% growth in just one...",
    keywords: '',
  },
  'doubao-12-trillion-token-explosion': {
    metaTitle: "Doubao's 12 Trillion Token Explosion: How ByteDance Is Quietly Winning the Global AI Race",
    metaDescription: "On April 2, 2026, while Silicon Valley was still digesting the latest GPT-5 rumors, a single announcement from Wuhan, China sent shockwaves through the global AI industry.",
    keywords: '',
  },
  'stepfun-terminal-ai-revolution': {
    metaTitle: "StepFun's $7 Billion Bet: How China's AI Unicorn Is Winning the Terminal Race",
    metaDescription: "On January 26, 2026, while most of the tech world was still digesting DeepSeek's open-source strategy, another Shanghai-based AI company quietly dropped a bombshell that would reshape the competitive...",
    keywords: '',
  },
  'ai-thesis-writing-china': {
    metaTitle: "AI Thesis Writing Explodes: How 12 Million Chinese Students Are Rewriting Academic Rules",
    metaDescription: "In the months leading up to China's 2026 graduation season, a remarkable trend erupted across Chinese social media: \"AI thesis writing\" (AI写论文).",
    keywords: '',
  },
  'doubao-bytedance': {
    metaTitle: "ByteDance Doubao: The 200 Million User AI Assistant Reshaping Content Creation",
    metaDescription: "While Baidu's Wenxin Yiyan dominates search integration and DeepSeek captures the technical elite, ByteDance's Doubao has carved out a different kingdom: 200 million monthly active users who create,...",
    keywords: '',
  },
  'bytedance-ai-gamble-gpu-kingpin-profit-drop': {
    metaTitle: "ByteDance's AI Obsession: How a 70% Profit Plunge Turned a Social Media Giant Into China's GPU Kingpin",
    metaDescription: "On April 20, 2026, Securities Times dropped a bombshell that rippled through China's tech ecosystem: ByteDance's 2025 net profit had collapsed by more than 70% compared to the previous year. The...",
    keywords: '',
  },
  'china-ai-april-infrastructure-2026': {
    metaTitle: "China's AI Revolution: Education Reform, National Standards, and Ecosystem Breakthroughs in April 2026",
    metaDescription: "China's AI Revolution: Education Reform, National Standards, and Ecosystem Breakthroughs in April 2026",
    keywords: '',
  },
  'minimax-ipo-212-million-users-ai-companion-empire': {
    metaTitle: "MiniMax Files for IPO: How China's AI Companion Empire Built 212 Million Users and Challenged the Global Social Landscape",
    metaDescription: "MiniMax Files for IPO: How China's AI Companion Empire Built 212 Million Users and Challenged the Global Social Landscape",
    keywords: '',
  },
  'tars-embodied-intelligence-455-million-brain-club': {
    metaTitle: "Tars Raises $455M: How China's 'Robot Brain' Startup Cracked the Embodied Intelligence Code",
    metaDescription: "Tars Raises $455M: How China's \"Robot Brain\" Startup Cracked the Embodied Intelligence Code",
    keywords: '',
  },
  'tongyi-qianwen-alibaba': {
    metaTitle: "Alibaba Tongyi Qianwen: Enterprise AI Powerhouse",
    metaDescription: "While Baidu captured consumer mindshare and DeepSeek shocked the industry with cost efficiency, Alibaba's Tongyi Qianwen has quietly built the most comprehensive enterprise AI platform in China. With...",
    keywords: '',
  },
  'wenxin-yiyan-baidu': {
    metaTitle: "Baidu Wenxin Yiyan: The 300 Million User AI Assistant",
    metaDescription: "When international headlines celebrate DeepSeek's cost efficiency and Kimi's technical innovations, Baidu's Wenxin Yiyan has quietly achieved something equally remarkable: 300 million monthly active...",
    keywords: '',
  },
  'ai-video-tools-china': {
    metaTitle: "Chinese AI Video Generation: Kling, Vidu, Hailuo vs Sora Technical Comparison",
    metaDescription: "While OpenAI's Sora captured global attention with its demonstration videos, Chinese companies have been quietly building video generation tools that are already in production use. Kling, Vidu, and...",
    keywords: '',
  },
  'chinese-ai-index-2026': {
    metaTitle: "Chinese AI Index: 103 Companies Tracking",
    metaDescription: "The Chinese AI ecosystem has reached an inflection point. With over 103 significant companies spanning foundation models, application layers, and infrastructure, China's AI sector is now a global...",
    keywords: '',
  },
  'deepseek-v3-deep-dive': {
    metaTitle: "DeepSeek-V3: The $5.6M Training Run",
    metaDescription: "DeepSeek-V3 represents one of the most significant efficiency breakthroughs in AI history. Training a model competitive with GPT-4 for just $5.6 million challenges fundamental assumptions about the...",
    keywords: '',
  },
  'deepseek-vs-chatgpt': {
    metaTitle: "DeepSeek vs ChatGPT: Complete Comparison",
    metaDescription: "Choosing between DeepSeek and ChatGPT is no longer obvious. This comprehensive comparison helps you decide which AI assistant fits your needs.",
    keywords: '',
  },
  'minimax-talkie': {
    metaTitle: "MiniMax: The 212 Million User AI Companion Empire Built on Digital Intimacy",
    metaDescription: "While ByteDance's Doubao dominates content creation and DeepSeek captures the technical elite, MiniMax has built something arguably more intimate: 212 million users who have formed emotional bonds...",
    keywords: '',
  },
  'chinese-ai-landscape': {
    metaTitle: "The Rise of Chinese AI: Complete Ecosystem Map (Foundation to Application)",
    metaDescription: "China's AI ecosystem has evolved from a fragmented collection of research labs into a comprehensive industrial stack that rivals Silicon Valley. Understanding this landscape—from domestic chip...",
    keywords: '',
  },
  'kimi-2m-context': {
    metaTitle: "Kimi K2.5 Technical Analysis: 1 Trillion Parameters, 256K Context, Agent Swarms",
    metaDescription: "When Cursor announced that Composer 2.0 was built on Kimi K2.5 rather than GPT-4 or Claude, the message was clear: Chinese foundation models had reached parity with Western alternatives. But Kimi...",
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

// Extract first image URL from markdown content for hero/OG fallback
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
      heroImage: meta.heroImage || meta.image || extractFirstImageFromContent(content) || 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
      keywords: meta.keywords || meta.tags || '',
      excerpt: meta.excerpt || meta.description || '',
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
  const description = meta?.metaDescription || post.excerpt || post.title
  const keywords = meta?.keywords || post.keywords || 'China AI, artificial intelligence'

  return {
    metadataBase: new URL('https://www.ainchina.com'),
    title: title,
    description: description,
    keywords: Array.isArray(keywords) ? keywords.join(', ') : keywords,
    authors: [{ name: 'Meeeeed@AI in China', url: 'https://www.ainchina.com/about/' }],
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
      '@type': 'Organization',
      name: 'Meeeeed@AI in China',
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
    keywords: Array.isArray(meta?.keywords || post.keywords) ? (meta?.keywords || post.keywords).join(', ') : (meta?.keywords || post.keywords || 'China AI, artificial intelligence'),
  }

  const jsonLdString = JSON.stringify(jsonLd).replace(/</g, '\\u003c')

  // Parse markdown content to HTML-like JSX
  function parseContent(content, options = {}) {
    const { skipTitle, heroImage } = options
    const lines = content.split('\n')
    const elements = []
    let currentTable = null
    let currentCodeBlock = null
    let currentQuote = null
    let i = 0
    let h1Skipped = false
    let heroSkipped = false

    // Normalize title for comparison (strip markdown formatting, lowercase)
    const normalizedSkipTitle = skipTitle ? skipTitle.replace(/\*\*/g, '').trim().toLowerCase() : null

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
        const headingText = line.substring(2).trim().replace(/\*\*/g, '').toLowerCase()
        // Skip first H1 if it matches the article title (already rendered in header)
        if (!h1Skipped && normalizedSkipTitle && headingText === normalizedSkipTitle) {
          h1Skipped = true
          i++
          continue
        }
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
          // Skip first image if it matches the hero image (already rendered above content)
          if (!heroSkipped && heroImage && match[2] === heroImage) {
            heroSkipped = true
            i++
            continue
          }
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
            {parseContent(post.content, { skipTitle: post.title, heroImage: post.heroImage })}
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
