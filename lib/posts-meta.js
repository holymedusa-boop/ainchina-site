// AI in China - Posts Metadata
// 文章元数据管理文件

const allPosts = [
  {
    slug: 'doubao-charging-ai-free-era-ends-china-2026',
    title: "Doubao Starts Charging: How China's Biggest AI App Ended the Free Era — and What It Means for 345 Million Users",
    category: 'AI Business',
    excerpt: "ByteDance's Doubao, China's largest AI app with 345M MAU, just launched paid tiers from $9.50 to $72/month. Here's why 120 trillion daily tokens made free unsustainable, and what this signals for the global AI industry.",
    date: '2026-05-08',
    readTime: '16 min read'
  },
  {
    slug: 'kimi-20-billion-valuation-china-ai-token-economy',
    title: "Kimi's $20 Billion Bet: How China's AI Token Economy Is Rewriting Global Power Dynamics",
    category: 'AI Industry',
    excerpt: "Kimi hits a $2 billion funding round at a $20 billion valuation while China's AI token consumption surges past the US for the third time. Here's what it means for the global AI landscape.",
    date: '2026-05-07',
    readTime: '16 min read'
  },
  {
    slug: 'china-embodied-intelligence-revolution-2026',
    title: "China's Embodied Intelligence Revolution: How 230+ Companies and a $110 Billion Market Are Reshaping Global Robotics in 2026",
    category: 'AI Infrastructure',
    excerpt: "China's embodied intelligence industry is surging from 1,800 humanoid robots shipped in 2025 to an anticipated 100,000+ in 2026, backed by $195 billion in annual funding and a supply chain that cuts costs to 50% of Western equivalents.",
    date: '2026-05-06',
    readTime: '16 min read'
  },
  {
    slug: 'deepseek-v4-promo-ending-analysis',
    title: "DeepSeek V4's 75% Promo Ends May 31: What Happens Next and Why the AI Pricing War Is Just Beginning",
    category: 'AI Infrastructure',
    excerpt: "DeepSeek V4-Pro's 75% promotional discount — extended from May 5 to May 31 — has developers wondering what happens next. Even at standard pricing, V4-Pro remains 17-86× cheaper than Claude Opus 4.7 while matching its SWE-Bench score. Here's the complete analysis.",
    date: '2026-05-05',
    readTime: '16 min read'
  },
  {
    slug: 'china-ai-revolution-may-2026-tokens-deepseek-huawei',
    title: "China's AI Revolution: How 140 Trillion Tokens, DeepSeek V4 on Huawei Chips, and a $700B Arms Race Are Reshaping Global Technology",
    category: 'AI Infrastructure',
    excerpt: "Stanford's 2026 AI Index reveals the US-China gap has narrowed to 2.7%. DeepSeek V4 launches on Huawei chips, breaking NVIDIA's CUDA monopoly. China processes 140 trillion tokens daily—1,000x growth in two years. The global AI order is shifting before our eyes.",
    date: '2026-05-04',
    readTime: '16 min read'
  },
  {
    slug: 'china-ai-deepfake-fraud-crisis-2026',
    title: "China's AI Deepfake Fraud Crisis: How 700,000 Annual Scams and a $40 Billion Global Threat Are Reshaping Trust in the Digital Age",
    category: 'AI Safety',
    excerpt: "As China leads the world in AI digital human technology with 410 million social media engagements, a darker trend emerges: AI-powered deepfake fraud has exploded 3,000% since 2023. With 700,000 annual telecom fraud cases, ¥200 billion in losses, and a single MCN fined ¥1.5 million for AI face-swap violations, China's experience offers critical lessons for global AI governance.",
    date: '2026-05-03',
    readTime: '16 min read'
  },
  {
    slug: 'kimi-k2-6-open-source-coding-revolution',
    title: "Kimi K2.6: How a $18B Chinese Startup Is Rewriting the Rules of Open-Source AI Coding",
    category: 'AI Infrastructure',
    excerpt: "Moonshot AI's Kimi K2.6 matches GPT-5.5 on SWE-Bench Pro with 300-agent swarm architecture, open weights, and pricing 80% below Western flagships. A deep dive into China's most ambitious AI model.",
    date: '2026-05-02',
    readTime: '16 min read'
  },
  {
    slug: 'china-ai-global-surge-api-traffic-empire-2026',
    title: "From Made in China to Trained in China: The Untold Story of How Chinese AI Conquered Global Developers",
    category: 'AI Industry',
    excerpt: "Chinese AI models accomplished in 18 months what smartphones took a decade to achieve globally. This article examines the structural mechanics behind the fastest technology export in history: frictionless distribution, open-source flywheels, and pricing weapons Silicon Valley cannot match.",
    date: '2026-05-01',
    readTime: '17 min read'
  },
  {
    slug: 'china-ai-agent-revolution-2026-policy-market',
    title: "Inside China's AI Policy Machine: How the Politburo's 'AI+ Action' Directive Is Rewriting Procurement Law",
    category: 'AI Policy',
    excerpt: "The April 28, 2026 Politburo directive transformed AI from an experimental tool into a mandatory budget line item. This article examines the policy mechanics: how central directives become local contracts, what the ¥449B CAICT forecast actually measures, and why China's governance architecture enables deployment at a scale Western democracies cannot match.",
    date: '2026-05-01',
    readTime: '17 min read'
  },
  {
    slug: 'deepseek-v4-pricing-strategy-analysis',
    title: "DeepSeek V4 Pricing Strategy: How $0.14/1M Tokens Is Reshaping the Economics of Frontier AI",
    category: 'AI Infrastructure',
    excerpt: "DeepSeek V4's radical pricing — Flash at $0.14/1M input tokens, Pro at $1.74/1M — undercuts OpenAI and Anthropic by 10-30x. We analyze the strategy, architecture, and market disruption behind the cheapest frontier-class AI API ever launched.",
    date: '2026-04-30',
    readTime: '16 min read'
  },
  {
    slug: 'ai-compute-crunch-china-token-crisis-2026',
    title: "The Great AI Compute Crunch: How China's AI Boom Is Running Out of Tokens",
    category: 'AI Infrastructure',
    excerpt: "As DeepSeek V4 and Kimi K2.6 launched in April 2026, China's AI infrastructure hit a wall. Cloud prices surged 5%–463%, APIs failed under agent-driven demand, and Huawei Ascend chips became the unlikely lifeline. Inside the first AI inflation crisis.",
    date: '2026-04-29',
    readTime: '17 min read'
  },
  {
    slug: 'bytedance-ai-gamble-gpu-kingpin-profit-drop',
    title: "ByteDance's AI Obsession: How a 70% Profit Plunge Turned a Social Media Giant Into China's GPU Kingpin",
    category: 'AI Infrastructure',
    excerpt: "ByteDance's 2025 net profit dropped over 70% due to massive AI investments, yet Tencent and Alibaba are buying GPUs from their biggest rival. Inside China's most unexpected AI infrastructure deal and what it reveals about the new tech landscape.",
    date: '2026-04-28',
    readTime: '17 min read'
  },
  {
    slug: 'deepseek-first-funding-20-billion-valuation',
    title: "DeepSeek Breaks Its Vow: Inside the $3 Billion Funding Round That Shook China's AI World",
    category: 'AI Infrastructure',
    excerpt: "DeepSeek's first external funding round at $20B+ valuation marks a strategic shift from bootstrapped research lab to competitive AI company. Analysis of talent exodus, Ascend chip migration, and global implications.",
    date: '2026-04-27',
    readTime: '16 min read'
  },
  {
    slug: 'tars-embodied-intelligence-455-million-brain-club',
    title: "Tars Raises $455M: How China's 'Robot Brain' Startup Cracked the Embodied Intelligence Code",
    category: 'AI Robotics',
    excerpt: "Tars shattered China's embodied intelligence funding record with a $455M Pre-A round, led by rare Hillhouse-Sequoia co-investment. Inside the 14-month-old startup building the world's first 'can actually work' general embodied AI model.",
    date: '2026-04-26',
    readTime: '15 min read'
  },
  {
    slug: 'deepseek-v4-agent-era-million-tokens-2026',
    title: "DeepSeek V4 Unleashed: How China's Open-Source AI Champion Is Winning the Agent Era with Million-Token Superpowers",
    category: 'AI Infrastructure',
    excerpt: "DeepSeek V4 preview launches April 24, 2026 with dual-version strategy, 1M token context windows, and Agent capabilities that rival top closed-source models. At 1/645th the cost of GPT-5.5 Pro, it's reshaping the global AI landscape.",
    date: '2026-04-25',
    readTime: '17 min read'
  },
  {
    slug: 'minimax-ipo-212-million-users-ai-companion-empire',
    title: "MiniMax Files for IPO: How China's AI Companion Empire Built 212 Million Users and Challenged the Global Social Landscape",
    category: 'AI Chatbots',
    excerpt: "MiniMax secretly files for IPO on April 23, 2026, revealing 212 million total users and 27.6 million monthly active users. Inside China's most successful AI companion platform and its global expansion through Talkie.",
    date: '2026-04-24',
    readTime: '16 min read'
  },
  {
    slug: 'deepseek-v4-million-token-china-ai-sovereignty',
    title: "DeepSeek V4: The Million-Token API Update That Signals China's AI Sovereignty Shift",
    category: 'AI Infrastructure',
    excerpt: "DeepSeek quietly updated its API to 1M context window ahead of V4's launch, while announcing its first-ever external funding round. This isn't just a model upgrade—it's China's declaration of AI compute independence.",
    date: '2026-04-23',
    readTime: '17 min read'
  },
  {
    slug: 'china-embodied-intelligence-robot-marathon-2026',
    title: "China's Embodied Intelligence Revolution: When Robots Outrun Humans — April 2026",
    category: 'AI Trends',
    excerpt: "Honor's 'Lightning' robot breaks human half-marathon world record in 50:26. TARS raises $455M. 102 teams compete as China's embodied intelligence sector hits an inflection point.",
    date: '2026-04-21',
    readTime: '18 min read'
  },
  {
    slug: 'china-ai-april-infrastructure-2026',
    title: "China's AI Revolution: Education Reform, National Standards, and Ecosystem Breakthroughs in April 2026",
    category: 'AI Trends',
    excerpt: "Shanghai Jiao Tong University launches 'AI Ten Initiatives,' China establishes first humanoid robot national standards, and domestic AI models achieve parity with DeepSeek-R1 as the nation accelerates AI transformation.",
    date: '2026-04-20',
    readTime: '16 min read'
  },
  {
    slug: 'china-ai-april-revolution-2026',
    title: "China's AI April Revolution: Humanoid Robots Race, Multimodal Models Explode, and 2 Billion AI Videos Reshape Global Content",
    category: 'AI Trends',
    excerpt: "April 2025 marks a watershed moment for China's AI industry. From the world's first humanoid robot half-marathon to DeepSeek's rumored V4 launch and ByteDance's Doubao 2.0 release, Chinese AI is accelerating on all fronts with 20 billion AI-generated clips.",
    date: '2026-04-19',
    readTime: '17 min read'
  },
  {
    slug: 'china-ai-avatar-revolution-2026',
    title: "China's AI Avatar Revolution: How 410 Million Views Signal a Global Content Creation Shift",
    category: 'AI Applications',
    excerpt: "Chinese AI avatar tools are experiencing explosive growth with 410 million topic views and 200% weekly growth. From HeyGen to domestic platforms like Silicon Intelligence and ShanJian, this phenomenon reveals how AI is democratizing video content creation for millions of creators.",
    date: '2026-04-18',
    readTime: '16 min read'
  },
  {
    slug: 'stanford-ai-index-2026-china-rise',
    title: "Stanford AI Index 2026: China's 'Parallel Run' Era Has Arrived",
    category: 'AI Trends',
    excerpt: "Stanford HAI's 423-page AI Index Report 2026 reveals a historic turning point: the China-US AI gap has 'effectively closed' to just 2.7%. Alibaba ranks #3 globally, and Chinese AI models have surpassed US competitors in token consumption for 5 consecutive weeks.",
    date: '2026-04-17',
    readTime: '16 min read'
  },
  {
    slug: 'alibaba-token-hub-100b-gambit',
    title: "Alibaba's $100B Token Gambit: Inside the Alibaba Token Hub Revolution Reshaping China's AI Economy",
    category: 'AI Trends',
    excerpt: "Deep dive into Alibaba's strategic pivot with ATH: How the tech giant is betting its future on Token economics, targeting $100B annual revenue from cloud and AI by 2031.",
    date: '2026-04-16',
    readTime: '17 min read'
  },
  {
    slug: 'china-ai-agent-explosion-2025-enterprise-deployment',
    title: "China's AI Agent Explosion: How 126 Platforms and $1B+ in Enterprise Deals Are Reshaping Global Automation",
    category: 'AI Trends',
    excerpt: "With 371 government-contracted projects in H1 2025 alone, China's AI Agent market is hitting an inflection point. From JD.com's 7,000+ deployed agents to Alibaba serving 100,000+ factories.",
    date: '2026-04-15',
    readTime: '16 min read'
  },
  {
    slug: 'bytedance-seed-brain-drain-70-engineers',
    title: "ByteDance's AI Brain Drain: 70 Top Engineers Exit Seed Team in 12 Months",
    category: 'AI Trends',
    excerpt: "ByteDance is bleeding AI talent. Nearly 70 core engineers walked out of its prestigious Seed AI team in 12 months—most joining Tencent. Inside China's ruthless AI talent wars.",
    date: '2026-04-14',
    readTime: '16 min read'
  },
  {
    slug: 'china-ai-model-war-april-2026-week-changed-everything',
    title: "The Week That Changed Everything: China's AI Model War Intensifies in April 2026",
    category: 'AI Trends',
    excerpt: "In one week, Alibaba launched 3 models, Zhipu raised prices 83%, ByteDance deployed full-duplex voice AI, and China hit 140 trillion daily tokens. Why April 2026 marks the end of the AI price war and the beginning of a new phase.",
    date: '2026-04-13',
    readTime: '17 min read'
  },
  {
    slug: 'china-ai-chip-war-2026-us-sanctions',
    title: "The Great Silicon Wall: How China's AI Industry Is Defying U.S. Chip Sanctions in 2026",
    category: 'AI Infrastructure',
    excerpt: "ByteDance's $5.6B Huawei deal, DeepSeek V4 on domestic chips, and the parallel AI ecosystem China is building. Why U.S. tech dominance faces its biggest challenge.",
    date: '2026-04-12',
    readTime: '17 min read'
  },
  {
    slug: 'china-ai-model-wars-april-2026',
    title: "China's AI Model Wars: How Alibaba, ByteDance, and MiniMax Are Reshaping Global AI Competition in April 2026",
    category: 'AI Trends',
    excerpt: "April 2026 marks a turning point in China's AI race. Alibaba launched 3 models in one week, ByteDance deployed full-duplex voice AI, and MiniMax announced open-source M2.7. Discover how Chinese tech giants are outpacing Western competitors.",
    date: '2026-04-11',
    readTime: '18 min read'
  },
  {
    slug: 'modelbest-edge-ai-unicorn-2026',
    title: "ModelBest Becomes Unicorn: How Tsinghua's Edge AI Pioneer Is Reshaping On-Device Intelligence",
    category: 'AI Trends',
    excerpt: "Inside ModelBest's rise to unicorn status: How a Tsinghua-born startup is challenging AI giants with its 'Density Law' approach to edge AI, securing $100M+ in 2026.",
    date: '2026-04-10',
    readTime: '17 min read'
  },
  {
    slug: 'ai-interview-coaching-china-2025',
    title: 'The AI Interview Coach Phenomenon: How Chinese Graduates Are Using AI to Crack the Job Market',
    category: 'AI Applications',
    excerpt: 'Inside China\'s AI interview coaching boom: How millions of graduates are using Kimi, Doubao, and Tongyi Qianwen to prepare for interviews, with usage surging 120% in one week.',
    date: '2026-04-08',
    readTime: '16 min read'
  },
  {
    slug: 'china-ai-token-surge-gen-z',
    title: "China's AI Overtake: 31% Surge in Token Usage Signals Global Power Shift",
    category: 'AI Trends',
    excerpt: 'Chinese AI models hit 12.96 trillion weekly tokens, surpassing US for 5 consecutive weeks. Inside the Gen Z revolution, $2B unicorn startups, and the technical breakthrough reshaping robotics.',
    date: '2026-04-07',
    readTime: '17 min read'
  },
  {
    slug: 'china-embodied-ai-revolution-2026',
    title: "China's Embodied AI Revolution: How $30 Billion in Q1 Funding Is Reshaping Global Robotics",
    category: 'AI Trends',
    excerpt: 'China\'s embodied intelligence sector raised $30 billion in Q1 2026, creating 9 unicorn companies valued at $10B+. From Zhi Robotics\' Tesla-like approach to Autobot\'s Big Tech backing, discover how China is winning the physical AI race.',
    date: '2026-04-06',
    readTime: '17 min read'
  },
  {
    slug: 'china-ai-avatar-revolution-2025',
    title: "China's AI Avatar Revolution: 410M Views Transformed Content Creation Forever",
    category: 'AI Trends',
    excerpt: 'China\'s AI avatar market exploded to 410 million views in one week (+200% growth). From Xiaohongshu creators to IPO-bound giants like Guiji AI, discover how digital humans are reshaping content creation.',
    date: '2026-04-05',
    readTime: '16 min read'
  },
  {
    slug: 'china-ai-digital-human-revolution',
    title: "China's AI Digital Human Revolution: 80,000 Virtual Avatars Reshaping Content",
    category: 'AI Applications',
    excerpt: 'With 410 million Xiaohongshu views and Guiji AI\'s $440M IPO, China\'s digital human market is exploding. How virtual creators are changing the game.',
    date: '2026-04-05',
    readTime: '16 min read'
  },
  {
    slug: 'doubao-bytedance',
    title: "ByteDance Doubao: The 200 Million User AI Assistant Reshaping Content Creation",
    category: 'AI Chatbots',
    excerpt: 'How ByteDance built the AI assistant reshaping content creation with 200 million users through ecosystem integration.',
    date: '2026-04-03',
    readTime: '15 min read'
  },
  {
    slug: 'minimax-talkie',
    title: 'MiniMax: The 212 Million User AI Companion Empire Built on Digital Intimacy',
    category: 'AI Chatbots',
    excerpt: 'How MiniMax built the worlds largest AI companion platform with 212 million users across 200 countries through emotional connection.',
    date: '2026-04-01',
    readTime: '16 min read'
  },
  {
    slug: 'kimi-2m-context',
    title: "Kimi K2.5 Technical Analysis: 1 Trillion Parameters, 256K Context, Agent Swarms",
    category: 'AI Chatbots',
    excerpt: 'Technical deep dive into Moonshot AI\'s Kimi K2.5 with 1T parameters, MoE architecture, and Agent Swarm capabilities.',
    date: '2026-03-31',
    readTime: '16 min read'
  },
  {
    slug: 'chinese-ai-landscape',
    title: 'The Rise of Chinese AI: Complete Ecosystem Map (Foundation to Application)',
    category: 'Market Intelligence',
    excerpt: 'From foundation models to application layer: mapping the entire Chinese AI ecosystem and its global implications.',
    date: '2026-03-31',
    readTime: '20 min read'
  },
  {
    slug: 'ai-video-tools-china',
    title: 'Chinese AI Video Generation: Kling, Vidu, Hailuo vs Sora Technical Comparison',
    category: 'AI Video',
    excerpt: 'Analysis of Kling, Vidu, and other emerging video generation platforms competing with Sora in the Chinese market.',
    date: '2026-04-01',
    readTime: '15 min read'
  },
  {
    slug: 'tongyi-qianwen-alibaba',
    title: 'Alibaba Tongyi Qianwen: Enterprise AI Powerhouse',
    category: 'AI Chatbots',
    excerpt: 'How Alibaba leverages e-commerce supremacy and cloud infrastructure to dominate enterprise AI adoption in China.',
    date: '2026-04-02',
    readTime: '14 min read'
  },
  {
    slug: 'wenxin-yiyan-baidu',
    title: 'Baidu Wenxin Yiyan: The 300 Million User AI Assistant',
    category: 'AI Chatbots',
    excerpt: 'How Baidu built the most widely used AI assistant in China through ecosystem integration and first-mover advantage.',
    date: '2026-04-02',
    readTime: '14 min read'
  },
  {
    slug: 'ai-thesis-writing-china',
    title: 'AI Thesis Writing Explodes: How 12 Million Chinese Students Are Rewriting Academic Rules',
    category: 'AI Chatbots',
    excerpt: "In the months leading up to China's 2026 graduation season, a remarkable trend erupted across Chinese social media: AI thesis writing.",
    date: '2026-04-02',
    readTime: '16 min read'
  },
  {
    slug: 'chinese-ai-index-2026',
    title: 'Chinese AI Index: 103 Companies Tracking',
    category: 'Market Intelligence',
    excerpt: 'The Chinese AI ecosystem has reached an inflection point. With over 103 significant companies spanning foundation models, application layers, and infrastructure, China\'s AI sector is now a global force.',
    date: '2026-03-31',
    readTime: '12 min read'
  },
  {
    slug: 'deepseek-v3-deep-dive',
    title: 'DeepSeek-V3: The $5.6M Training Run',
    category: 'Technical Analysis',
    excerpt: 'DeepSeek-V3 represents one of the most significant efficiency breakthroughs in AI history. Training a model competitive with GPT-4 for just $5.6 million challenges fundamental assumptions about the cost of intelligence.',
    date: '2026-03-31',
    readTime: '15 min read'
  },
  {
    slug: 'deepseek-vs-chatgpt',
    title: 'DeepSeek vs ChatGPT: Complete Comparison',
    category: 'AI Chatbots',
    excerpt: 'Choosing between DeepSeek and ChatGPT is no longer obvious. This comprehensive comparison helps you decide which AI assistant fits your needs.',
    date: '2026-03-31',
    readTime: '10 min read'
  },
  {
    slug: 'doubao-12-trillion-token-explosion',
    title: "Doubao's 12 Trillion Token Explosion: How ByteDance Is Quietly Winning the Global AI Race",
    category: 'AI Infrastructure',
    excerpt: 'On April 2, 2026, while Silicon Valley was still digesting the latest GPT-5 rumors, a single announcement from Wuhan, China sent shockwaves through the global AI industry.',
    date: '2026-04-04',
    readTime: '10 min read'
  },
  {
    slug: 'stepfun-terminal-ai-revolution',
    title: "StepFun's $7 Billion Bet: How China's AI Unicorn Is Winning the Terminal Race",
    category: 'AI Infrastructure',
    excerpt: 'On January 26, 2026, while most of the tech world was still digesting DeepSeek\'s open-source strategy, another Shanghai-based AI company quietly dropped a bombshell.',
    date: '2026-04-03',
    readTime: '10 min read'
  }
];

module.exports = { allPosts };

// Sort posts by date (newest first)
allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
