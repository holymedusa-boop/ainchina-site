import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'
import Link from 'next/link'


// SEO Metadata for each article
const postMetadata = {
  'china-green-ai-computing-inner-mongolia-sustainable-intelligence-2026': {
    metaTitle: "China's Green AI Computing Revolution: How Inner Mongolia Built the World's Largest Sustainable Intelligence Factory",
    metaDescription: "At the 2026 Green Computing Power Conference in Hohhot, China signed ¥186 billion in green AI infrastructure projects. Inner Mongolia now hosts 315,000 petaflops of computing power—one-seventh of China's total—powered by 84% renewable energy. The rest of the world is still debating AI's carbon footprint. China has already solved it at scale.",
    keywords: '["green computing", "China AI infrastructure", "Inner Mongolia data center", "East Data West Computing", "renewable energy AI", "Hohhot computing hub", "sustainable AI", "carbon neutral data center", "token economy China", "Volcano Engine", "Cambricon", "green AI revolution"]',
  },
  'china-open-source-trap-ai-strategy-silicon-valley-2026': {
    metaTitle: "The Open-Source Trap: How China's AI Strategy Is Making Closed Models Obsolete",
    metaDescription: "The dominant narrative about China's artificial intelligence industry has remained stubbornly consistent for the better part of a decade: China copies, America innovates. Chinese tech firms, the...",
    keywords: '',
  },
  'china-ai-token-price-war-end-pricing-reset-2026': {
    metaTitle: "China's AI Token Price War Is Over: Why the Industry-Wide Pricing Reset Signals Global AI Maturity",
    metaDescription: "DeepSeek's August 17 peak-valley pricing implementation marked the formal end of China's two-year AI token price war. With Zhipu, Moonshot, Tencent, and cloud providers all raising prices, the industry is entering a sustainable pricing era that mirrors global software economics.",
    keywords: '',
  },
  'china-embodied-ai-robotics-revolution-2026': {
    metaTitle: "The Physical AI Revolution: How China Is Winning the Race for Embodied Intelligence",
    metaDescription: "While Silicon Valley obsesses over chatbots, China is building an army of thinking machines that can walk, drive, and manipulate the physical world. From DeepSeek's robotics debut to Unitree's $9 billion IPO, embodied AI has become China's most consequential AI frontier.",
    keywords: '',
  },
  'bytedance-10-trillion-parameter-model-china-ai-scale-bet-2026': {
    metaTitle: "ByteDance's 10 Trillion Parameter Gamble: Why the Biggest Number in AI Might Not Mean What You Think",
    metaDescription: "ByteDance is pre-training a 10-trillion-parameter AI model that would dwarf every Chinese competitor and rival Anthropic's Mythos 5. But in the Mixture-of-Experts era, total parameters measure storage capacity—not intelligence. The real story lies in what ByteDance isn't saying.",
    keywords: '["ByteDance 10 trillion parameters", "ByteDance AI model", "Seed team", "Zhang Yiming", "Doubao", "China AI race", "Mixture of Experts", "MoE architecture", "Kimi K3", "DeepSeek V4-Pro", "Anthropic Mythos", "AI distillation", "Chinese AI infrastructure", "Volcano Cloud", "AI parameter count"]',
  },
  'huawei-ascend-950dt-cloud-launch-china-ai-training-sovereignty-2026': {
    metaTitle: "From Entity List to Cloud Launch: How Huawei's Ascend 950DT Closed the Loop on China's AI Training Sovereignty",
    metaDescription: "On August 20, 2026, Huawei's Ascend 950DT training chip went live on Huawei Cloud — the culmination of a six-year journey from US sanctions to self-sufficiency. With 144GB of in-house HBM, 4 TB/s bandwidth, and DeepSeek V4 already proven on the architecture, China now has an end-to-end domestic training stack. The per-chip gap to Nvidia remains large. But the system-level bet is paying off.",
    keywords: '',
  },
  'bytedance-10-trillion-parameter-model-china-ai-scaling-race-2026': {
    metaTitle: "ByteDance's 10-Trillion-Parameter Bet: How China's Biggest AI Model Is Rewriting the Scaling Race",
    metaDescription: "ByteDance is reportedly pre-training a 10-trillion-parameter AI model — triple the size of any Chinese model shipped and rivaling Anthropic's Mythos 5. Behind the number lies a deeper shift: a no-distillation policy, a $5.6 billion Huawei chip order, and a founder mandate to chase world-class capability over short-term wins.",
    keywords: '["ByteDance AI model", "10 trillion parameters", "China AI scaling", "Huawei Ascend chips", "Doubao", "Zhang Yiming", "DeepSeek", "Moonshot Kimi K3", "AI model size", "China chip independence"]',
  },
  'zhipu-glm-5-3-post-training-coding-cyber-revolution-2026': {
    metaTitle: "Zhipu GLM-5.3: How 30 Days of Post-Training Turned a 743B Model Into China's Coding King",
    metaDescription: "On August 14, 2026, Zhipu AI released GLM-5.3 with a radical claim: every capability gain came from post-training, not a new pretraining run. The 743B-parameter model leaped 515% on Terminal-Bench 3.0, discovered 2,436 vulnerabilities in open-source code, and forced a conversation about whether the AI frontier has shifted from scale to training strategy.",
    keywords: '["Zhipu GLM-5.3", "Z.ai", "China AI coding model", "post-training AI", "open weight model", "Terminal-Bench", "cybersecurity AI", "GLM-5.2", "DeepSeek V4-Pro", "Chinese LLM benchmark", "AI vulnerability discovery", "MSCI China Index", "Zhipu AI stock", "coding AI model 2026", "mixture of experts"]',
  },
  'china-ai-trinity-glm-deepseek-kimi-2026': {
    metaTitle: "China's AI Trinity: GLM-5.3, DeepSeek V4, and Kimi K3 — A Comparative Framework",
    metaDescription: "In mid-August 2026, three Chinese AI labs dropped flagship models within one week. We compare GLM-5.3, DeepSeek V4-Pro, and Kimi K3 across architecture, pricing, benchmarks, and strategy to reveal what China's AI trinity means for the global open-source race.",
    keywords: '',
  },
  'china-open-source-ai-3-billion-downloads-qwen-deepseek-2026': {
    metaTitle: "3 Billion Downloads and Counting: The Great Open Source Reversal Nobody in Silicon Valley Saw Coming",
    metaDescription: "Alibaba's Qwen just crossed 3 billion global downloads, surpassing Meta's Llama and Google's entire model family. DeepSeek Harness hit 141,000 GitHub stars in four days. Kimi K3 became the world's largest open-weight model at 2.8 trillion parameters. The open-source AI narrative has been rewritten — and this time, the byline is Chinese.",
    keywords: '',
  },
  'world-humanoid-robot-games-beijing-2026': {
    metaTitle: "2,056 Robots, 666 Teams, One Arena: Inside the World's Largest Humanoid Robot Games",
    metaDescription: "The second World Humanoid Robot Games opens August 22 in Beijing's Ice Ribbon with 2,056 robots from 16 countries competing across 51 events. Here's why this event matters more than entertainment—it's become the proving ground for China's embodied AI ambitions.",
    keywords: '',
  },
  'bytedance-ai-strategic-pivot-admit-weakness-play-strengths-2026': {
    metaTitle: "ByteDance Just Admitted Its AI Is Behind. That's Exactly Why It's Winning.",
    metaDescription: "On August 6, 2026, ByteDance CEO Liang Rubo did something no Chinese tech leader had dared: he told 110,000 employees that his company's large language models lag behind America's. The confession was not surrender. It was the opening move of a strategy that may prove more durable than any parameter-count arms race.",
    keywords: '',
  },
  'china-ai-medical-insurance-global-first-2026': {
    metaTitle: "The 1.2 Billion Patient Experiment: How China Put AI Doctors on National Insurance",
    metaDescription: "On April 1, 2026, China became the first nation to reimburse AI-assisted diagnoses through national health insurance. Eight hundred thirty-seven top hospitals now bill insurers for AI readings of CT scans, retinal images, and ECGs—with patients paying as little as 15% out of pocket.",
    keywords: '',
  },
  'unitree-610-billion-ipo-china-robot-capital-markets-2026': {
    metaTitle: "The $85 Billion Robot: How Unitree's Historic IPO Proves China's AI Manufacturing Dominance",
    metaDescription: "For three years, the consensus among Western analysts was brutally simple: Chinese robotics companies were burning venture capital on science projects. The humanoid robots looked impressive in demo...",
    keywords: '["Unitree IPO", "China robotics", "STAR Market", "humanoid robot", "AI manufacturing", "DeepSeek", "embodied intelligence", "China AI stocks", "robot IPO", "Hangzhou tech"]',
  },
  'facewall-intelligence-ipo-edge-ai-china-first-llm-listing-2026': {
    metaTitle: "FaceWall Intelligence's $3 Billion IPO Gambit: Can China's Edge AI Pioneer Rewrite the Rules of Public Markets?",
    metaDescription: "On the morning of August 11, 2026, a regulatory filing appeared on the China Securities Regulatory Commission's disclosure platform. It contained no press release, no celebratory announcement. Just...",
    keywords: '',
  },
  'minimax-h3-open-source-video-model-china-2026': {
    metaTitle: "MiniMax H3: The 33-Billion-Parameter Video Model That China Just Gave Away",
    metaDescription: "MiniMax open-sourced H3, a 33B omni-modal video model capable of 2K generation with native stereo audio. Within 48 hours, the global community built LoRA support and Apple Silicon inference. Here's what this means for the future of open-source video generation.",
    keywords: '',
  },
  'china-nvidia-h200-reversal-huawei-ascend-paradox-2026': {
    metaTitle: "The Great Silicon Reversal: Why Beijing Is Quietly Letting Its AI Giants Buy Nvidia Again",
    metaDescription: "After spending eighteen months and hundreds of billions of yuan building a Nvidia-free AI chip ecosystem around Huawei Ascend, Beijing is now allowing ByteDance, Alibaba, Tencent and DeepSeek to purchase limited quantities of Nvidia H200 chips. The reversal reveals a strategic fracture that nobody saw coming.",
    keywords: '',
  },
  'us-sanctions-built-china-ai-chip-industry-cambricon-smic-2026': {
    metaTitle: "How US Sanctions Built China's AI Chip Industry: The Cambricon Miracle and the SMIC Bottleneck",
    metaDescription: "Cambricon just posted its first annual profit after nine years of losses, with revenue surging 453%. The company it should thank? NVIDIA — or rather, the US government that banned NVIDIA from selling to China. Inside the great semiconductor irony of 2026.",
    keywords: '["Cambricon", "China AI chip", "SMIC", "US sanctions", "semiconductor", "Huawei Ascend", "ByteDance", "AI chip independence", "export controls", "China semiconductor"]',
  },
  'baichuan-ai-healthcare-pivot-wang-xiaochuan-medical-ai-2026': {
    metaTitle: "Sole Survivor: How Wang Xiaochuan Burned Down China's 'OpenAI' to Build an AI Doctor",
    metaDescription: "In March 2025, Wang Xiaochuan made a decision no Chinese AI founder had dared: he killed his own general-purpose model, fired his entire co-founding team, and bet everything on medical AI. Eighteen months later, Baichuan-M4 ranks #1 globally on HealthBench, serves 500,000 paying users, and has a clearer path to profit than any 'Six Little Dragon' peer.",
    keywords: '',
  },
  'deepseek-price-war-end-8-billion-robotics-pivot-2026': {
    metaTitle: "DeepSeek Ends the Price War: Why China's AI Unicorn Is Raising Prices, Raising $8 Billion, and Betting on Robots",
    metaDescription: "On August 6, 2026, DeepSeek did what no one thought possible: it raised prices. After processing 8 trillion tokens in a single day, the Hangzhou lab announced a funding round at $74 billion and a strategic robotics partnership with Unitree. The era of China's AI price war is ending — and something far more interesting is beginning.",
    keywords: '',
  },
  'kimi-k3-open-source-trillion-parameter-china-ai-2026': {
    metaTitle: "Kimi K3: The 3-Trillion-Parameter Open-Source Moonshot That Broke the Internet",
    metaDescription: "It was supposed to be a routine product launch. On July 16, 2026, Moonshot AI — the Beijing-based startup behind the Kimi chatbot — unveiled its most ambitious creation yet: Kimi K3, a model with 2.8...",
    keywords: '',
  },
  'china-ai-openrouter-revolution-global-api-dominance-2026': {
    metaTitle: "The OpenRouter Revolution: How Chinese AI Models Captured Two-Thirds of Global API Traffic",
    metaDescription: "On August 2, 2026, OpenRouter's weekly rankings revealed something Silicon Valley refused to believe: the top five most-called AI models on Earth were all Chinese. From DeepSeek's $0.87-per-million-token API to Xiaomi's MiMo-V2.5 surging 616% in sixty days, Chinese models now command 63.5% of global API traffic — and the infrastructure map of AI has been redrawn.",
    keywords: '',
  },
  'apple-intelligence-china-qwen-baidu-ai-sovereignty-2026': {
    metaTitle: "Two Apple Intelligences: How China's Regulatory Approval Forced Apple to Rebuild Its AI From the Inside",
    metaDescription: "Apple Intelligence finally cleared China's regulatory hurdle on July 15, 2026 — but the version Chinese iPhone users will receive is architecturally different from what runs everywhere else. Here's what the Qwen-Baidu partnership reveals about the future of AI sovereignty.",
    keywords: '["Apple Intelligence China", "Alibaba Qwen", "Baidu Apple partnership", "AI sovereignty", "China AI regulation", "CAC approval", "iPhone AI China", "tech geopolitics", "Qwen model", "Apple China strategy"]',
  },
  'deepseek-v4-flash-0731-post-training-beats-scale-2026': {
    metaTitle: "DeepSeek V4-Flash-0731: The Post-Training Breakthrough That Beat Its Own 1.6 Trillion-Parameter Flagship",
    metaDescription: "On July 31, 2026, DeepSeek released V4-Flash-0731 — the same 284 billion-parameter model, re-post-trained on agent data. It beat its own 1.6 trillion-parameter V4-Pro-Preview on every agent benchmark. At $0.14 per million tokens, it is the cheapest capable agentic model on Earth. The implication is radical: scale is no longer the primary frontier.",
    keywords: '["DeepSeek", "V4-Flash-0731", "post-training", "agentic AI", "Mixture of Experts", "AI benchmarking", "China AI", "open weight model", "AI efficiency", "Terminal-Bench"]',
  },
  'china-ai-model-wars-summer-2026': {
    metaTitle: "China's AI Model Wars: The Summer That Changed Global AI",
    metaDescription: "In the span of four months, four Chinese AI labs—Moonshot, DeepSeek, ByteDance, and Alibaba—released models that collectively erased the perceived capability gap between Chinese and American AI. With 2.8 trillion-parameter open weights, 1.6 trillion-parameter MoE architectures, and a 10 trillion-parameter behemoth in training, China's AI model ecosystem has gone from follower to co-leader.",
    keywords: '["China AI model wars", "Kimi K3", "DeepSeek V4", "ByteDance Seed", "Alibaba Qwen", "Moonshot AI", "Chinese LLM", "open source AI", "AI benchmark 2026", "China vs US AI"]',
  },
  'bytedance-seedance-2.5-ai-video-revolution-2026': {
    metaTitle: "Seedance 2.5: How ByteDance Built the World's Most Ambitious AI Video Engine",
    metaDescription: "ByteDance's Seedance 2.5 delivers native 4K video, 30-second single-generation clips, and 50 simultaneous reference inputs. Launched in July 2026, it represents not merely a product upgrade but a declaration that China intends to own the creative AI layer — from TikTok's billion users to Hollywood's post-production pipelines.",
    keywords: '',
  },
  'openai-price-war-chinese-ai-rivals-2026': {
    metaTitle: "OpenAI Blinks: How an 80% Price Cut Revealed the New Power Balance in Global AI",
    metaDescription: "In August 2026, OpenAI slashed GPT-5.6 prices by up to 80% — not to reward developers, but to stop the bleeding. DeepSeek V4-Flash had already claimed the top spot on OpenRouter. Chinese models occupied nine of the global top ten. For the first time, an American frontier lab was fighting a price war it did not start.",
    keywords: '',
  },
  'china-ai-monetization-awakening-end-free-token-era-2026': {
    metaTitle: "China's AI Monetization Awakening: How the Industry Killed 8 Million Free Bots to Build a Real Business",
    metaDescription: "Liu wasn't alone. Across China, eight million user-created AI agents — virtual companions, coding assistants, study tutors, fantasy characters, and business automation bots — went dark within a...",
    keywords: '',
  },
  'tencent-hy3-ai-turnaround-openrouter-china-2026': {
    metaTitle: "How Tencent's Hy3 Turned the Tables on China's AI Wars",
    metaDescription: "Tencent's Hunyuan Hy3 model went from industry laughingstock to OpenRouter's #1 ranked model in three months. Inside the organizational shakeup, the 28-year-old prodigy, and the engineering philosophy that made it possible.",
    keywords: '["Tencent", "Hunyuan", "Hy3", "China AI", "OpenRouter", "Yaoshunyu", "AI model", "ByteDance", "Alibaba", "open source AI"]',
  },
  'alibaba-qwen-3-8-max-2-4-trillion-china-ai-race-2026': {
    metaTitle: "Alibaba's Qwen 3.8-Max: The 2.4 Trillion-Parameter Gamble That Just Reset China's AI Race",
    metaDescription: "On August 3, 2026, Alibaba released Qwen 3.8-Max: a 2.4-trillion-parameter multimodal model priced at $2 per million input tokens, with open weights promised within days. It is the capstone of a summer that saw four Chinese frontier models drop in six weeks—and a direct challenge to Anthropic's Fable 5 dominance.",
    keywords: '["Alibaba Qwen", "Qwen 3.8-Max", "China AI model", "Chinese AI competition", "Kimi K3", "Moonshot AI", "open weight model", "AI token pricing", "Alibaba AI strategy", "China frontier AI", "Qwen benchmark", "Chinese LLM comparison", "Alibaba Tongyi", "AI model release 2026"]',
  },
  'china-embodied-ai-revolution-shenzhen-not-silicon-valley-2026': {
    metaTitle: "China's Embodied AI Revolution: Why the World Is Building Robots in Shenzhen, Not Silicon Valley",
    metaDescription: "China commands 78% of the global humanoid robot market, with 22 unicorns and $13.8B in 2026 funding. The real story isn't hardware—it's an ecosystem Silicon Valley can't replicate.",
    keywords: '["embodied AI", "humanoid robots", "China robotics", "Shenzhen", "Unitree", "AgiBot", "Galbot", "physical AI", "robot manufacturing", "China tech"]',
  },
  'bytedance-fullstack-ai-seedance-audio-doubao-ecosystem-2026': {
    metaTitle: "ByteDance's Full-Stack AI Gambit: How Seedance 2.5, Seed Audio, and the Doubao Ecosystem Are Reshaping Creative AI in China",
    metaDescription: "If you have been watching ByteDance's AI strategy from the outside, the past six weeks have felt like watching someone assemble a jigsaw puzzle at triple speed. Pieces that seemed scattered — a video...",
    keywords: '["ByteDance AI", "Seedance 2.5", "Seed Audio", "Doubao AI", "AI video generation", "AI music generation", "ByteDance hardware", "AI glasses China", "TikTok AI", "Volcano Engine"]',
  },
  'china-ai-open-source-captured-american-developers-2026': {
    metaTitle: "The Open-Source Reversal: How Chinese AI Models Captured the American Developer",
    metaDescription: "In July 2026, Mozilla's CTO switched to Kimi K3. Coinbase moved workloads to DeepSeek. The top five models on OpenRouter were Chinese. After years of US dominance, a quiet revolution is underway — and it's being built on open weights, radical affordability, and engineering excellence.",
    keywords: '',
  },
  'baidu-kunlunxin-50-billion-ipo-china-ai-chip-independence-2026': {
    metaTitle: "The $50 Billion Silicon Gamble: Inside Baidu's Kunlunxin IPO and China's Race for AI Chip Independence",
    metaDescription: "On the morning of June 28, 2026, a story hit The Information that sent shockwaves through both Silicon Valley and Zhongguancun. Baidu's AI chip subsidiary, Kunlunxin, was targeting a Hong Kong IPO...",
    keywords: '["Kunlunxin IPO", "Baidu AI chip", "China AI chip independence", "Hong Kong IPO 2026", "Kunlun chip", "China semiconductor", "AI chip design", "US export controls", "DeepSeek chip", "Huawei Ascend"]',
  },
  'china-ai-six-tigers-divergence-ipo-wave-2026': {
    metaTitle: "The Six Tigers No More: How China's AI Unicorns Split Into Six Different Species",
    metaDescription: "China's 'Six AI Tigers' were once treated as a single class of company. In 2026, they've become six entirely different species — with $100 billion valuations, healthcare pivots, enterprise retreats, and hardware bets that share nothing but a founding year.",
    keywords: '["China AI", "Zhipu AI", "MiniMax", "Moonshot AI", "Baichuan", "01.AI", "Stepfun", "AI IPO", "Chinese startups", "AI unicorns"]',
  },
  'china-embodied-intelligence-revolution-brains-beat-bodies-2026': {
    metaTitle: "China's Embodied Intelligence Revolution: Why 2026 Is the Year Brains Finally Beat Bodies",
    metaDescription: "China's embodied intelligence sector raised 934.7 billion RMB in H1 2026, surpassing all of 2025. But the real story isn't the funding numbers—it's the shift from 'PPT robots' to commercial contracts, from hardware demos to model-driven productivity.",
    keywords: '["embodied intelligence", "China robotics", "WAIC 2026", "humanoid robots", "VLA models", "Zhijing Fang", "Zhiyuan Robotics", "Galaxy General", "embodied AI unicorns", "robotics IPO"]',
  },
  'huawei-atlas-950-superpod-china-ai-chip-independence-2026': {
    metaTitle: "The Atlas Gambit: How Huawei's 8,192-Chip SuperPoD Is Rewiring the Global AI Hardware Order",
    metaDescription: "At WAIC 2026, Huawei unveiled the Atlas 950 SuperPoD — an 8,192-chip system claiming 6.7x the compute of Nvidia's NVL144. With DeepSeek V4 running on Huawei silicon, ByteDance committing $5.6 billion, and Beijing declaring computing a national utility, China's AI hardware decoupling has reached its tipping point.",
    keywords: '',
  },
  'apple-intelligence-china-alibaba-baidu-real-winners-2026': {
    metaTitle: "Apple Intelligence in China: Why Alibaba and Baidu Are the Real Winners",
    metaDescription: "Apple finally got its AI approved in China through partnerships with Alibaba and Baidu. But the deal reveals something far more significant: Chinese AI has already won.",
    keywords: '["Apple Intelligence", "Alibaba Qwen", "Baidu", "China AI", "Apple China", "AI regulation", "Qwen model", "iPhone AI", "AI partnership", "China tech policy"]',
  },
  'moonshot-kimi-k3-2-8-trillion-open-ai-china-2026': {
    metaTitle: "Moonshot's Kimi K3: How a 2.8-Trillion-Parameter Open-Weight Model Shook Global Markets",
    metaDescription: "Moonshot AI's Kimi K3 became the world's largest open-weight AI model at 2.8 trillion parameters, triggering a Nasdaq selloff and a White House investigation — all within 48 hours of launch.",
    keywords: '["Moonshot AI", "Kimi K3", "open weight model", "China AI", "Mixture of Experts", "AI Index", "Nvidia", "WAIC 2026", "Alibaba", "AI chips"]',
  },
  'china-ai-video-models-conquer-global-market-kling-seedance-wan-2026': {
    metaTitle: "Sora Is Dead, Long Live Kling: How Chinese AI Video Models Conquered Hollywood's Dream Machine",
    metaDescription: "OpenAI shut down Sora. In its place, Chinese video models now hold 7 of the top 8 spots globally. From Kling's $500M ARR to Seedance's $2B enterprise empire and Wan 2.7's open-source revolution, the AI video crown has moved east — permanently.",
    keywords: '["Chinese AI video models", "Kling 3.0", "Seedance 2.0", "Wan 2.7", "Sora shutdown", "AI video generation 2026", "Kuaishou Kling", "ByteDance Seedance", "Alibaba Wan", "China AI video dominance"]',
  },
  'china-open-weight-coding-models-global-software-development-2026': {
    metaTitle: "The $18 Coding Revolution: How Chinese Open-Weight Models Are Rewriting the Global Software Playbook",
    metaDescription: "Chinese open-weight coding models now match 85-90% of frontier performance at 5-10x lower cost. From GLM-5.2's $18 monthly plan to DeepSeek V4's sub-dollar API rates, a new playbook for software development is emerging — and Silicon Valley's closed-source incumbents are being forced to respond.",
    keywords: '["Chinese AI coding models", "open-weight LLMs", "GLM-5.2", "Kimi K2.7 Code", "DeepSeek V4", "agentic coding", "ZCode", "software development AI", "China AI export", "coding AI price war"]',
  },
  'deepseek-funding-frenzy-74-billion-ipo-china-ai-2026': {
    metaTitle: "From $0 to $74 Billion in 90 Days: The DeepSeek Funding Frenzy Rewriting China's AI Order",
    metaDescription: "DeepSeek went from a hedge fund side project to a $74 billion IPO candidate in 90 days. Here's how China's AI industry learned to print money — and why Silicon Valley is suddenly playing catch-up on capital efficiency.",
    keywords: '["DeepSeek", "China AI", "IPO", "Zhipu AI", "MiniMax", "STAR market", "AI funding", "Liang Wenfeng", "Six AI Tigers", "Hangzhou"]',
  },
  'kimi-k3-moonshot-2-8-trillion-open-weight-model-2026': {
    metaTitle: "Kimi K3: The 2.8 Trillion-Parameter Open-Weight Model That Moved the Nasdaq",
    metaDescription: "Moonshot AI's Kimi K3 became the largest open-source model ever released at 2.8 trillion parameters. Launched at WAIC 2026, it triggered a Nasdaq selloff and proved Chinese AI labs can ship frontier capability as a free download.",
    keywords: '["Kimi K3", "Moonshot AI", "open source AI", "2.8 trillion parameters", "China AI", "WAIC 2026", "mixture of experts", "Kimi K2", "Alibaba AI", "open weight models"]',
  },
  'china-ai-compute-crunch-custom-chips-silicon-wall-2026': {
    metaTitle: "The Silicon Wall: How China's AI Revolution Ran Out of Chips — And Started Building Its Own",
    metaDescription: "At 3:14 AM on July 19, 2026, Moonshot AI made a decision no fast-growing startup wants to make: it stopped selling. Kimi K3 had grown too popular, too fast. The story of what happened next reveals the hidden battle that will shape the future of global AI.",
    keywords: '["China AI chips", "DeepSeek", "Zhipu AI", "Kimi K3", "AI compute crisis", "custom AI chips", "NVIDIA sanctions", "Moonshot AI", "Huawei Ascend", "domestic chips", "AI inference", "compute shortage", "WAIC 2026", "open source AI"]',
  },
  'china-ai-companion-ban-doubao-qwen-yuanbao-july-2026': {
    metaTitle: "China Just Unplugged 345 Million Virtual Lovers: Inside the World's First AI Companion Ban",
    metaDescription: "China Just Unplugged 345 Million Virtual Lovers: Inside the World's First AI Companion Ban On July 15, 2026, Beijing flipped a switch and millions of...",
    keywords: '["China AI companion ban", "AI anthropomorphic interaction", "Doubao agent shutdown", "Qwen companion", "Yuanbao AI", "ByteDance AI regulation", "China birth rate", "AI emotional dependency", "virtual boyfriend", "AI girlfriend", "CAC regulation", "China demographic crisis"]',
  },
  'apple-intelligence-china-qwen-baidu-ai-approval-2026': {
    metaTitle: "The Two-Year Wait Is Over: How Apple Intelligence Cracked China's AI Wall",
    metaDescription: "After two years of regulatory limbo, Apple Intelligence finally won approval in China through an unprecedented partnership with Alibaba's Qwen and Baidu. Here's what it means for the global AI order.",
    keywords: 'Apple Intelligence China, Alibaba Qwen Apple, Baidu Apple partnership, China AI regulation, CAC approval Apple AI, iPhone AI China, smartphone AI market',
  },
  'china-ai-july-tipping-point-chips-models-capital-2026': {
    metaTitle: "The July Tipping Point: How China's AI Industry Crossed the Threshold From Catching Up to Setting the Pace",
    metaDescription: "The July Tipping Point: How China's AI Industry Crossed the Threshold From Catching Up to Setting the Pace At 2:47 AM Beijing time on July 17, 2026, a...",
    keywords: '["Chinese AI", "Beijing", "Moonshot AI", "Kimi", "DeepSeek", "NVIDIA", "AI chip", "semiconductor", "GPT", "Claude"]',
  },
  'kimi-k3-moonshot-28-trillion-open-ai-2026': {
    metaTitle: "The 2.8-Trillion Parameter Gambit: How Moonshot's Kimi K3 Is Rewriting the Rules of Open AI",
    metaDescription: "Moonshot AI's Kimi K3 delivers 2.8 trillion parameters with open weights, challenging the closed-source dominance of GPT-5.6 and Claude Fable 5 while proving China's open-source AI strategy is no longer just viable — it's winning.",
    keywords: '["Kimi K3", "Moonshot AI", "open source AI", "China AI models", "MoE architecture", "Kimi Delta Attention", "Yang Zhilin", "2.8 trillion parameters", "AI benchmarks 2026", "China vs US AI"]',
  },
  'waic-2026-live-china-ai-ships-products-humanoid-robot-mass-production': {
    metaTitle: "WAIC 2026 Live: When China's AI Industry Stopped Competing on Parameters and Started Shipping Products",
    metaDescription: "At the 2026 World AI Conference in Shanghai, 1,100 companies showcased 3,000 exhibits across 100,000 square meters. But the real story wasn't the numbers. It was the moment China's AI industry stopped chasing benchmark scores and started shipping products that work.",
    keywords: '["WAIC 2026", "World Artificial Intelligence Conference", "Shanghai AI", "humanoid robot", "embodied intelligence", "AI agent phone", "Unitree", "ZTE", "MiniMax M3", "China AI commercialization", "robot mass production", "AI smart device"]',
  },
  'chinese-ai-models-46-percent-us-enterprise-invasion-2026': {
    metaTitle: "The 46% Invasion: How Chinese AI Models Quietly Conquered American Enterprise",
    metaDescription: "OpenRouter data reveals a shocking reversal: US enterprises now route 46% of their AI model calls to Chinese systems like DeepSeek, Zhipu GLM, and Qwen. At WAIC 2026 in Shanghai, the industry is celebrating a victory that Washington never saw coming.",
    keywords: '["Chinese AI models", "DeepSeek", "Zhipu GLM", "OpenRouter", "US enterprise AI", "WAIC 2026", "AI model pricing", "China AI market share", "Lindy AI", "Coinbase", "AI cost reduction", "open source AI", "Qwen", "ByteDance Doubao"]',
  },
  'apple-intelligence-qwen-china-regulatory-approval-2026': {
    metaTitle: "Apple Intelligence Clears China: How the Qwen Partnership and a 22-Month Regulatory Marathon Reshaped Global AI's Borderlines",
    metaDescription: "\"Apple Intelligence Clears China: How the Qwen Partnership and a 22-Month Regulatory Marathon Reshaped Global AI's Borderlines",
    keywords: '["Apple Intelligence", "Qwen", "Alibaba", "China AI regulation", "CAC approval", "on-device AI", "Apple China", "generative AI governance", "smartphone AI", "Qwen integration", "Baidu AI", "Huawei Xiaoyi", "Xiaomi HyperOS AI", "OPPO AndesGPT", "vivo BlueLM", "Samsung Galaxy AI", "Nubia Doubao", "cross-border data security", "iPhone 18"]',
  },
  'china-embodied-ai-13-billion-funding-boom-2026': {
    metaTitle: "The $13.8 Billion Awakening: China's Embodied AI Sector Hits Escape Velocity",
    metaDescription: "In the first half of 2026, China's embodied AI sector attracted $13.8 billion across 322 deals—a fivefold increase from a year ago. With Unitree Robotics clearing its STAR Market IPO in a record 104 days, Momenta listing as the 'physical AI first stock' at 414x oversubscription, and 22 unicorns now roaming the landscape, China's robotics industry has shifted from laboratory curiosity to capital market heavyweight.",
    keywords: '["embodied AI", "humanoid robot", "Unitree IPO", "Momenta listing", "China robotics funding", "AI unicorn", "STAR Market", "physical AI", "Tesla Optimus", "ZhiPu"]',
  },
  'kimi-k3-moonshot-2-5-trillion-open-source-ai-2026': {
    metaTitle: "Kimi K3 and the 2.5 Trillion-Parameter Question: What Moonshot's Leap Means for the Open-Source AI Race",
    metaDescription: "The economics of context — not parameters — will define the next phase of AI competition On July 14, 2026, a promotional page on the Kimi Open Platform...",
    keywords: '["Beijing", "Kimi", "DeepSeek", "GPU", "OpenAI", "GPT", "Claude", "inference", "CES"]',
  },
  'china-ai-price-revolution-silicon-valley-waic-2026': {
    metaTitle: "The $0.07 Model: How China's AI Price Revolution Is Forcing Silicon Valley to Rethink Everything",
    metaDescription: "In July 2026, a Chinese AI model costs $0.07 per million tokens while its Western equivalent charges $1.25. Goldman Sachs is recommending Chinese models to Wall Street clients. And President Xi Jinping is about to walk into the World AI Conference in Shanghai. This is not a market trend. It is a structural inversion of the global AI order.",
    keywords: '["China AI models", "Qwen 3.5", "DeepSeek", "ByteDance Seedream", "AI pricing", "WAIC 2026", "Goldman Sachs China AI", "Silicon Valley AI competition", "Chinese AI benchmarks", "AI model cost comparison"]',
  },
  'china-ai-agent-wars-tencent-alibaba-bytedance-2026': {
    metaTitle: "The Agent Wars: How Tencent, Alibaba, and ByteDance Are Fighting for China's AI Future",
    metaDescription: "In mid-2026, China's tech giants have stopped competing on model parameters and started a far more consequential battle: who controls the AI agents that will run the next billion digital tasks. Inside the trillion-yuan race between Tencent's WeChat-integrated WorkBuddy, Alibaba's consolidated QoderWork platform, and ByteDance's Doubao empire.",
    keywords: '["China AI agents", "Tencent WorkBuddy", "Alibaba QoderWork", "ByteDance Doubao", "AI agent wars 2026", "Chinese tech giants AI", "OpenClaw China", "混元3 Hy3", "AI productivity tools China", "agent economy"]',
  },
  'china-ai-midyear-reckoning-three-forces-2026': {
    metaTitle: "China's AI Midyear Reckoning: Three Converging Forces Reshaping the Global Technology Order",
    metaDescription: "On July 15, 2026, China's consumer AI agent ecosystem faces its most consequential regulatory reset yet. Simultaneously, Huawei Ascend chips capture over half the domestic AI chip market, and Chinese humanoid robot exports surge 210%. These are not isolated events. They are the three faces of a single strategic pivot.",
    keywords: '["AI agent", "Shanghai", "ByteDance", "Doubao", "Alibaba", "Tongyi Qianwen", "Baidu", "Tencent", "Moonshot AI", "Kimi"]',
  },
  'meituan-longcat-2-trillion-domestic-chips-china-ai-independence-2026': {
    metaTitle: "How Meituan Built a Trillion-Parameter AI Model on 50,000 Domestic Chips — And Open-Sourced It",
    metaDescription: "Meituan's LongCat-2.0 is the world's first trillion-parameter model trained entirely on domestic Chinese chips. Here's why that matters for the global AI race.",
    keywords: '["Chinese AI", "Beijing", "DeepSeek", "Huawei", "Ascend", "NVIDIA", "GPU", "AI chip", "OpenAI", "GPT"]',
  },
  'deepseek-7-4-billion-funding-deal-china-ai-map-2026': {
    metaTitle: "DeepSeek's $7.4 Billion Question: The Deal That Changed China's AI Map",
    metaDescription: "When DeepSeek closed its $7.4 billion funding round at a $50 billion valuation, it became China's most valuable AI startup. But beneath the headline lies a deal structure that could define the future of state-capital collaboration in Chinese technology.",
    keywords: '["DeepSeek", "AI funding", "China AI investment", "Liang Wenfeng", "VIE structure", "state-owned AI", "AI valuation", "China venture capital", "AI policy", "DeepSeek IPO"]',
  },
  'china-humanoid-robot-100000-units-production-milestone-2026': {
    metaTitle: "The 100,000 Robot Year: How China's Humanoid Industry Crossed the Mass Production Threshold",
    metaDescription: "China's humanoid robot production is set to exceed 100,000 units in 2026 — a staggering leap from 1,800 the year before. From factory floors in Shanghai to supply chains in Shenzhen, the world's largest robot manufacturing ecosystem is hitting its stride.",
    keywords: '["China humanoid robot", "humanoid robot production", "AgiBot", "Unitree", "UBTECH", "WAIC 2026", "embodied intelligence", "robot manufacturing China", "AI factory", "humanoid robot market share", "China robotics supply chain", "industrial automation", "robot cost reduction", "Tiangong robot"]',
  },
  'china-ai-terminals-overtake-humanoid-robot-factory-2026': {
    metaTitle: "China's AI Terminal Revolution: How Smart Devices and Humanoid Robots Overtook the Old World",
    metaDescription: "2026 is the year AI devices overtook non-AI in China. With 100 million+ AI terminals shipped, 100,000 humanoid robots entering factories, and a trillion-RMB industry growing at 30%+, China's consumer tech landscape has crossed an irreversible threshold.",
    keywords: '["China AI terminal", "AI phone China", "AI PC China", "humanoid robot 2026", "WAIC 2026", "China AI device sales", "smart terminal", "AI manufacturing China", "embodied intelligence", "Shanghai AI industry", "Unitree humanoid", "AI plus consumption", "China AI ecosystem", "Huawei AI chip", "robot factory China"]',
  },
  'china-ai-companion-ban-doubao-qwen-digital-friends-lost-2026': {
    metaTitle: "China's AI Companion Ban: When 345 Million Users Lose Their Digital Friends — and What It Means for the Global AI Industry",
    metaDescription: "On July 15, 2026, China's first-ever regulation targeting AI emotional companionship takes effect. ByteDance's Doubao and Alibaba's Qwen are shutting down custom agent features used by hundreds of millions. Users are mourning digital friends on Weibo. This is the world's first national AI companion ban — and Silicon Valley is watching closely.",
    keywords: '["China AI companion ban", "Doubao AI agent shutdown", "Qwen AI companion", "AI anthropomorphic regulation", "CAC AI rules July 2026", "ByteDance Doubao", "Alibaba Qwen", "AI emotional interaction", "China AI policy", "AI companion regulation", "digital friends AI", "AI addiction regulation", "China AI agent market", "Tencent Yuanbao", "AI human relationships"]',
  },
  'bytedance-200-billion-ai-infrastructure-china-arms-race-2026': {
    metaTitle: "ByteDance's $29 Billion AI Bet: How China's Quiet Infrastructure Arms Race Is Reshaping Global Computing",
    metaDescription: "\"ByteDance's $29 Billion AI Bet: How China's Quiet Infrastructure Arms Race Is Reshaping Global Computing Photo by NASA on Unsplash",
    keywords: '["ByteDance AI investment", "China AI infrastructure", "AI capex 2026", "Doubao", "NVIDIA H200", "Huawei Ascend", "AI data center", "China tech spending", "AI chip shortage", "global AI competition"]',
  },
  'china-ai-companion-law-countdown-doubao-qwen-shutdown-2026': {
    metaTitle: "Seven Days to Digital Heartbreak: Inside China's AI Companion Law Countdown",
    metaDescription: "Seven Days to Digital Heartbreak: Inside China's AI Companion Law Countdown Beijing, July 8, 2026 — In exactly seven days, China's landmark AI...",
    keywords: '["China AI Companion Law", "ByteDance Doubao", "Alibaba Qwen", "AI regulation China 2026", "virtual companion ban", "AI anthropomorphic interaction", "CAC regulation", "AI ethics China", "Doubao 345 million users", "Qwen companion shutdown"]',
  },
  'alibaba-bans-claude-code-hidden-spyware-ai-war-2026': {
    metaTitle: "The Code That Wasn't Supposed to Be Found: How Anthropic's Hidden Spyware Turned Alibaba Against Claude Code",
    metaDescription: "When a Reddit user reverse-engineered Claude Code and found XOR-encrypted tracking routines that singled out Chinese developers, the story of who was spying on whom in the US-China AI war flipped overnight. Inside the hidden code, the industrial-scale 'distillation attack' allegations, and Alibaba's July 2026 decision to ban Anthropic products company-wide.",
    keywords: '["Claude Code spyware", "Anthropic Alibaba", "China AI distillation", "Pentagon 1260H blacklist", "Alibaba Qoder", "AI espionage", "US China AI war", "Claude Code hidden code", "Anthropic tracking", "AI decoupling 2026"]',
  },
  'china-ai-export-revolution-global-intelligence-2026': {
    metaTitle: "The Great AI Export: How China's Intelligence Industry Is Rewiring the Global Tech Map",
    metaDescription: "In 2026, China became the world's largest exporter of AI intelligence—not just hardware, but the algorithms, models, and solutions that power global innovation. With $16.5 billion in quarterly startup funding, 170+ countries hosting Chinese AI businesses, and a 1000-fold explosion in daily token consumption, something fundamental has shifted.",
    keywords: '["China AI export", "Chinese AI going global", "China AI funding 2026", "AI globalization", "China AI unicorn", "StepFun", "Moonshot AI", "Kunlun Tech", "ByteDance AI", "China AI overseas"]',
  },
  'china-ai-companion-ban-virtual-lovers-regulation-2026': {
    metaTitle: "China's AI Heartbreak: How a New Law Is Erasing Millions of Virtual Companions",
    metaDescription: "On July 4, ByteDance's Doubao and Alibaba's Qwen shocked 500 million users with identical announcements: their AI companion features would vanish on July 15, the very day China's groundbreaking AI anthropomorphic interaction regulation takes effect.",
    keywords: '["China AI regulation", "AI companionship", "Doubao", "Qwen", "ByteDance", "Alibaba", "anthropomorphic AI", "virtual companion", "AI governance", "emotional AI"]',
  },
  'china-ai-video-revolution-seedance-sora-2026': {
    metaTitle: "From Sora to Seedance: How China Conquered the AI Video Revolution",
    metaDescription: "Eighteen months after OpenAI's Sora dazzled the world, the AI video landscape has been redrawn. ByteDance's Seedance 2.5 is launching in July 2026 with native 4K, 30-second outputs, and a $2 billion enterprise ARR. An AI-generated feature film just premiered at Cannes. And China's AI video ecosystem has grown from a curiosity into a global production infrastructure. This is the story of how the world learned to make movies with algorithms—and how China built the factory.",
    keywords: '["Seedance 2.5", "ByteDance AI video", "China AI video generation", "Sora shutdown", "Kling 3.0", "AI cinema", "Cannes Film Festival AI", "micro-drama AI", "Volcano Engine", "AI video market 2026"]',
  },
  'lingsheng-supercomputer-china-cpu-ai-paradigm-2026': {
    metaTitle: "LingSheng's Bet Against GPUs: How China's CPU-Only Supercomputer Could Rewrite the Rules of AI",
    metaDescription: "China's LingSheng supercomputer just claimed the TOP500 crown with a radical proposition: what if the future of AI computing isn't about GPUs at all?",
    keywords: '["Beijing", "Shenzhen", "NVIDIA", "GPU", "API", "training", "compute", "CES", "export control"]',
  },
  'waic-2026-global-ai-diplomacy-shanghai': {
    metaTitle: "WAIC 2026: The Conference That Rewrote Global AI Diplomacy",
    metaDescription: "In eight years, Shanghai's World Artificial Intelligence Conference grew from a local trade show into the world's most consequential AI diplomacy platform. With 1,400+ international guests, 300+ global product debuts, and the inaugural WAIC Academic conference co-chaired by Turing laureate Andrew Yao and reinforcement learning pioneer Richard Sutton, WAIC 2026 is not merely an exhibition. It is a declaration of where the global AI order is heading.",
    keywords: '["WAIC 2026", "World Artificial Intelligence Conference", "Shanghai AI", "China AI diplomacy", "WAIC Academic", "SAIL Award", "Andrew Yao", "Richard Sutton", "global AI governance", "China AI ecosystem 2026"]',
  },
  'china-multimodal-ai-revolution-end-text-only-2026': {
    metaTitle: "The End of Text-Only AI: How China's Multimodal Revolution Is Redefining What Machines Can See",
    metaDescription: "In July 2026, China's AI industry quietly crossed a threshold that most Western observers missed. For the first time, multimodal models—systems that see, hear, and reason across images, video, and text—began outperforming their text-only predecessors on the metrics that matter: enterprise adoption, developer preference, and revenue. This is the story of how the world's largest AI market ended the text-only era.",
    keywords: '["China AI", "multimodal AI", "large multimodal models", "DeepSeek-VL2", "Qwen3 vision", "GLM-5.1", "AI vision", "text-only AI obsolete", "Chinese AI 2026"]',
  },
  'china-ai-video-captured-global-creative-frontier-2026': {
    metaTitle: "How China's AI Video Models Captured the Global Creative Frontier",
    metaDescription: "Beijing, July 1, 2026 — In the summer of 2024, a short-video company from Beijing released an AI video generator that most Western observers dismissed as...",
    keywords: '["Chinese AI", "Beijing", "ByteDance", "Doubao", "OpenAI", "investment", "API", "AI video", "training", "CES"]',
  },
  'china-global-autonomous-driving-regulation-ads-gtr-2026': {
    metaTitle: "China Writes the Rules for Global Autonomous Driving: How the ADS GTR Signals a New Era of Technical Leadership",
    metaDescription: "China Writes the Rules for Global Autonomous Driving: How the ADS GTR Signals a New Era of Technical Leadership On a Tuesday afternoon in late June,...",
    keywords: '["Beijing", "Shanghai", "Shenzhen", "Baidu", "Huawei", "venture capital", "API", "autonomous driving", "CES"]',
  },
  'ai-on-era-mwc-shanghai-2026-china-networks-intelligent': {
    metaTitle: "The AI-ON Era: How MWC Shanghai 2026 Marked the Moment China's Networks Became Intelligent",
    metaDescription: "The Summit That Changed Everything On the afternoon of June 24, 2026, in the Kerry Hotel Pudong, a few hundred telecom executives, government officials,...",
    keywords: '["artificial intelligence", "large language model", "AI agent", "Shanghai", "Huawei", "CES", "MWC"]',
  },
  'china-ai-benchmark-war-caught-frontier-2026': {
    metaTitle: "The Great AI Benchmark War: How Chinese Models Caught the Frontier in 2026",
    metaDescription: "The Myth That Won't Die At dinner tables in San Francisco, investment briefings in London, and tech podcasts streamed from New York, one assumption...",
    keywords: '["neural network", "ByteDance", "Doubao", "Alibaba", "Baidu", "Kimi", "DeepSeek", "MiniMax", "Zhipu AI", "Huawei"]',
  },
  'bytedance-30-billion-ai-capex-huawei-chips-2026': {
    metaTitle: "ByteDance's $30 Billion AI Gambit: How One Budget Revision Is Rewriting China's Chip Playbook",
    metaDescription: "ByteDance's Beijing headquarters. The company's expanded AI infrastructure spending reflects a broader shift toward domestic semiconductor supply chains....",
    keywords: '["large language model", "Beijing", "ByteDance", "Doubao", "semiconductor", "investment", "API", "inference", "training", "compute"]',
  },
  'pentagon-blacklist-alibaba-baidu-byd-china-tech-decoupling-2026': {
    metaTitle: "The Pentagon's Blacklist Gamble: Why Adding Alibaba, Baidu, and BYD to the Military List Is Accelerating the Very Decoupling It Seeks to Prevent",
    metaDescription: "On June 8, 2026, the Pentagon added Alibaba, Baidu, BYD, and NIO to its Chinese Military Companies list. By June 24, Alibaba had sued the U.S. government. The blacklist now covers 188 entities—a 45% expansion in one year. But the real story isn't the legal fight. It's how Washington's escalating pressure is forcing China's tech giants to build a parallel ecosystem that may soon need no American technology at all.",
    keywords: '["Pentagon blacklist", "Chinese Military Companies list", "Alibaba lawsuit", "BYD", "Baidu", "NIO", "US China tech decoupling", "Section 1260H", "China tech sanctions", "military-civil fusion", "Huawei", "AI chips", "China semiconductor independence"]',
  },
  'china-embodied-ai-revolution-robotics-awakening-2026': {
    metaTitle: "China's Embodied AI Revolution: From Laboratory Curiosity to Trillion-Yuan Industrial Machine",
    metaDescription: "In 2025, embodied AI barely existed in China's government vocabulary. By June 2026, the country hosts 140+ humanoid robot manufacturers, ships thousands of units globally, and is racing toward a ¥1 trillion market. How did China's physical AI industry go from zero to warp speed in eighteen months?",
    keywords: '["embodied AI China", "humanoid robots China", "Unitree Robotics", "AgiBot", "China AI robotics 2026", "embodied intelligence market", "physical AI China", "robotics IPO China", "World Intelligence Expo 2026", "China AI standards", "smart manufacturing robots", "China robotics export"]',
  },
  'china-ai-consumption-gambit-17-point-plan-2026': {
    metaTitle: "China's AI+Consumption Gambit: Beijing's 17-Point Plan to Turn 1.4 Billion Shoppers Into the World's Smartest Consumers",
    metaDescription: "On June 18, 2026, eight Chinese ministries released a sweeping 17-point policy to fuse AI with consumer life—from AI phones and smart homes to humanoid robots and brain-computer interfaces. Experts call it China's 'new energy vehicle moment' for artificial intelligence. Here's what the world's largest AI consumption experiment actually looks like.",
    keywords: '["China AI consumption", "AI+consumption policy", "China AI strategy 2026", "smart home AI", "humanoid robots China", "AI phone China", "brain-computer interface", "China AI legislation", "AI agent regulation", "Sword Network 2026", "China AI governance", "AI retail China"]',
  },
  'china-ai-agent-revolution-2026': {
    metaTitle: "China's AI Agent Revolution: Why 2026 Is the Year Agents Stop Chatting and Start Working",
    metaDescription: "While Western tech media obsesses over GPT-5 benchmarks, China's tech giants have quietly built the world's first large-scale AI agent economy. With 79% enterprise adoption, billion-user platforms embedding agents directly into WeChat, and inference costs 3-5x below Western levels, 2026 is the year AI agents stop chatting and start working.",
    keywords: '["China AI agents", "AI agent economy", "Tencent ClawBot", "Alibaba Wukong", "ByteDance Doubao", "Baidu OpenClaw", "AI agent platform war", "China enterprise AI adoption", "AI inference cost", "AI agent monetization", "Huawei Ascend AI chips", "China AI infrastructure"]',
  },
  'huawei-ascend-12-billion-ai-chip-surge-global-bifurcation-2026': {
    metaTitle: "The Silicon Curtain: How Huawei's $12 Billion AI Chip Surge Is Splitting Global AI in Two",
    metaDescription: "Huawei's AI chip revenue is projected to hit $12 billion in 2026 — a 60% surge driven by Alibaba, ByteDance, Tencent, and Baidu shifting from NVIDIA to domestic silicon. As DeepSeek trains on Ascend, ByteDance plans 350,000 custom chips, and Chinese models close within 5 points of the American frontier, the global AI infrastructure map is splitting in two.",
    keywords: '["Huawei Ascend", "AI chip", "NVIDIA export ban", "China semiconductor", "ByteDance AI chip", "Alibaba Qwen", "DeepSeek Huawei", "AI infrastructure bifurcation", "Ascend 910C", "CANN vs CUDA", "China AI sovereignty", "US chip sanctions", "Samsung foundry", "AI compute", "domestic substitution"]',
  },
  'qwen-billion-downloads-china-open-source-ai-dominance-2026': {
    metaTitle: "Qwen's Open-Source Conquest: How China's AI Model Captured a Billion Downloads and Redrew Global Developer Economics",
    metaDescription: "Alibaba's Qwen model family has become the most downloaded open-source AI system in history, fundamentally shifting the global developer ecosystem...",
    keywords: '["LLM", "Alibaba", "DeepSeek", "GPU", "OpenAI", "Llama", "startup", "API", "inference", "compute"]',
  },
  'baidu-apollo-go-swiss-level4-robotaxi-permit-europe-2026': {
    metaTitle: "The Swiss Connection: How Baidu's Apollo Go Beat Waymo and Tesla to Europe's First Level 4 Robotaxi Permit",
    metaDescription: "On June 16, 2026, Baidu's Apollo Go received a Level 4 autonomous driving permit in Switzerland — the first on European soil. With 22 million cumulative rides, 330 million kilometers logged, and a partnership with Swiss Post's PostBus, Baidu just leaped ahead of Waymo and Tesla in the global robotaxi race.",
    keywords: '["Baidu Apollo Go", "AmiGo Switzerland", "Level 4 autonomous driving", "robotaxi Europe", "Waymo vs Baidu", "Tesla FSD", "PostBus", "FEDRO permit", "RT6 robotaxi", "China autonomous driving"]',
  },
  'china-profit-future-gamble-ai-war-2026': {
    metaTitle: "The Profit-for-Future Gamble: How China's Tech Giants Sacrificed $100 Billion in Profits to Win the AI War",
    metaDescription: "ByteDance profits collapsed 70%. Alibaba committed ¥3.8 trillion. Tencent's capex surged 91%. Yet valuations soared, investors cheered, and employees got richer. Welcome to China's 'profit-for-future' AI economy — where losing money is the new winning strategy.",
    keywords: '["artificial intelligence", "AI agent", "ByteDance", "Doubao", "Alibaba", "Baidu", "Tencent", "Hunyuan", "NVIDIA", "GPU"]',
  },
  'china-ai-iron-cage-governance-regime-2026': {
    metaTitle: "China's AI Iron Cage: How Beijing Built the World's Most Prescriptive Algorithmic Regulatory Regime in 1,826 Days",
    metaDescription: "While Western policymakers debate AI safety frameworks, China has already erected a three-pillar regulatory architecture that mandates registration for every algorithm, labels every AI-generated pixel, and can fine companies up to ¥5 million—or imprison executives for seven years. This is not a draft proposal. It is live law, enforced daily.",
    keywords: '["large language model", "LLM", "generative AI", "Beijing", "venture capital", "startup", "API", "training", "CES"]',
  },
  'china-low-altitude-economy-drones-ai-500bn-airspace-2026': {
    metaTitle: "China's Low-Altitude Economy: How Drones, AI, and eVTOLs Are Building a $500 Billion Airspace Industry",
    metaDescription: "With 1.2 million cargo drone flights in 2025, 70% of global consumer drone production, and a $500 billion market projection by 2035, China's low-altitude economy has moved from policy concept to commercial reality. Here's how Shenzhen, Meituan, DJI, and a fleet of eVTOL startups are reshaping the skies.",
    keywords: '["low-altitude economy", "China drones", "Meituan drone delivery", "eVTOL China", "Shenzhen low-altitude", "DJI", "EHang", "XPeng AeroHT", "China air taxi", "drone logistics"]',
  },
  'china-embodied-intelligence-revolution-2026': {
    metaTitle: "China's Embodied Intelligence Revolution: From Spring Festival Gala to Factory Floor",
    metaDescription: "Eight out of ten humanoid robots worldwide now come from China. From the CCTV Spring Festival Gala to factory floors, China's embodied intelligence industry has shifted from laboratory curiosity to mass production reality. Here's how Unitree, AgiBot, and 140+ manufacturers are building the physical AI future.",
    keywords: '["embodied intelligence", "humanoid robots", "Unitree", "AgiBot", "China AI", "physical AI", "robotics IPO", "Tianjin World Intelligence Expo", "UBTECH", "embodied AI standards"]',
  },
  'china-physical-ai-awakening-world-models-robot-ipos-295b-bet-2026': {
    metaTitle: "China's Physical AI Awakening: World Models, Robot IPOs, and the $295 Billion Bet on Embodied Intelligence",
    metaDescription: "In a single week, China unveiled the world's first general world foundation model, a humanoid robot maker filed for IPO, and Beijing prepared a $295 billion nationwide AI buildout. The physical AI era has arrived.",
    keywords: '["China world model", "Physis BAAI", "embodied intelligence", "humanoid robot IPO", "EngineAI", "China AI buildout", "physical AI", "robotics China 2026", "AI liability China", "Beijing Academy of AI"]',
  },
  'china-industrial-ai-revolution-smart-factories-2026': {
    metaTitle: "China's 30,000 Smart Factories: Why the Real AI War Is Happening on the Factory Floor, Not in Chatbots",
    metaDescription: "While Silicon Valley obsesses over chatbot leaderboards, China has quietly deployed 30,000 smart factories, produced 143,608 industrial robots in two months, and built an industrial AI ecosystem that triples factory output without adding workers. The numbers tell a story the West isn't hearing.",
    keywords: '["artificial intelligence", "Doubao", "Kimi", "DeepSeek", "semiconductor", "enterprise AI", "API", "robotics", "compute", "CES"]',
  },
  'ai-builds-ai-forgetrain-modelbest-china-2026': {
    metaTitle: "AI Builds AI: How a Chinese Lab Taught Artificial Intelligence to Write Its Own Training Framework — and Beat NVIDIA",
    metaDescription: "ModelBest's ForgeTrain is the world's first production-grade LLM pre-training framework written entirely by AI. It trains models 10% faster than NVIDIA's Megatron-LM on identical H100 hardware, runs on both NVIDIA and Huawei Ascend chips, and trained MiniCPM5-1B — the world's top-ranked sub-2B parameter model.",
    keywords: '["AI builds AI", "ForgeTrain", "ModelBest", "MiniCPM5-1B", "AI-generated code", "NVIDIA Megatron", "Huawei Ascend", "AI training framework", "Tsinghua University", "OpenBMB", "distributed training", "AI self-improvement", "China AI"]',
  },
  'china-ai-network-doctrine-miit-three-year-plan-2026': {
    metaTitle: "China's AI Network Doctrine: How the 2026-2028 Plan Is Wiring Intelligence Into Every Fiber",
    metaDescription: "China's MIIT just released a three-year implementation plan to integrate AI with information and communications networks. With 75% compute latency targets, 30+ high-value use cases, and autonomous network goals by 2028, this is not just policy—it is infrastructure-as-strategy.",
    keywords: '["China AI policy", "MIIT", "AI communications networks", "autonomous networks", "AI infrastructure", "China 2026-2028 AI plan", "compute latency", "intelligent agents", "5G AI", "digital infrastructure"]',
  },
  'forbes-china-ai-top-50-six-decoupling-signals-2026': {
    metaTitle: "The Forbes China AI TOP 50: Six Decoupling Signals That Silicon Valley Can't Ignore",
    metaDescription: "Forbes China's 2026 AI TOP 50 rankings reveal six decoupling signals across foundation models, silicon, embodied intelligence, and frontier science that prove China's AI ecosystem has fundamentally separated from Western technology at every layer.",
    keywords: '["Forbes China AI TOP 50", "China AI ecosystem", "AI decoupling", "DeepSeek", "Cambricon", "UBTECH", "ADASPACE", "embodied intelligence", "Chinese AI companies", "AI stack independence"]',
  },
  'glm-5-1-open-source-crown-beijing-2026': {
    metaTitle: "GLM-5.1: The 754B-Parameter Open-Source MoE That Beat GPT-5.4 on Real-World Coding — and Trained Without NVIDIA",
    metaDescription: "On April 7, 2026, a Chinese AI research lab quietly uploaded a set of model weights to Hugging Face. There was no splashy livestream. No carefully...",
    keywords: '["Chinese AI", "Moonshot AI", "Kimi", "Zhipu AI", "Huawei", "Ascend", "NVIDIA", "OpenAI", "GPT", "Claude"]',
  },
  'unitree-robotics-ipo-china-humanoid-robot-first-stock-2026': {
    metaTitle: "Unitree's IPO Sprint: How a Chinese Robot Maker Went From Zero to ¥17 Billion in Eight Years",
    metaDescription: "Unitree's IPO Sprint: How a Chinese Robot Maker Went From Zero to ¥17 Billion in Eight Years On the morning of June 1, 2026, Wang Xingxing sat in a...",
    keywords: '["Shanghai", "IPO", "investment", "API", "robotics", "humanoid robot"]',
  },
  'gaokao-agent-wars-china-ai-battleground-2026': {
    metaTitle: "The Gaokao Agent Wars: How China's 12.9 Million Student Exam Became Tech's Biggest AI Battleground",
    metaDescription: "The Gaokao Agent Wars: How China's 12.9 Million Student Exam Became Tech's Biggest AI Battleground It was 11:47 PM on June 10, 2026, and 17-year-old Liu...",
    keywords: '["AI agent", "Beijing", "ByteDance", "Doubao", "Alibaba", "Tencent", "DeepSeek", "funding", "API", "CES"]',
  },
  'triple-silicon-china-ai-chip-independence-2026': {
    metaTitle: "The Triple Silicon Gambit: How China's AI Chip Surge Is Forging an Independent Path to AGI",
    metaDescription: "The Triple Silicon Gambit: How China's AI Chip Surge Is Forging an Independent Path to AGI The conventional wisdom says US semiconductor export controls...",
    keywords: '["artificial intelligence", "Chinese AI", "Beijing", "ByteDance", "DeepSeek", "Huawei", "Ascend", "NVIDIA", "GPU", "AI chip"]',
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
    metaDescription: "China's 12 million graduates are facing an existential question: write their thesis themselves, or let AI do it? The answer is reshaping academia. China's...",
    keywords: '["AI thesis writing", "China AI education", "Kimi AI", "ChatGPT", "Claude", "academic integrity", "Chinese graduates", "AI detection", "thesis generation", "generative AI education"]',
  },
  'tencent-wechat-ai-agent-billion-users-china-2026': {
    metaTitle: "Tencent's WeChat AI Agent: The 1.4 Billion-User Bet That Reshaped China's Tech Markets Overnight",
    metaDescription: "A Financial Times report on June 2 revealed Tencent is testing an AI agent inside WeChat. The result: a $41 billion market cap surge, China's biggest agentic AI platform, and a direct challenge to Alibaba and ByteDance.",
    keywords: '["Tencent WeChat AI agent", "WeChat agent 2026", "Tencent AI strategy", "China AI agent market", "WeChat mini program AI", "Tencent stock surge", "Hunyuan model", "ByteDance vs Tencent AI", "super app AI agent", "China tech stocks 2026"]',
  },
  'china-ai-ipo-wave-zhipu-minimax-2026': {
    metaTitle: "China's AI IPO Wave: How Zhipu and MiniMax Are Rewriting the Rules of AI Capitalization",
    metaDescription: "China's AI unicorns are trading at valuations that would have seemed impossible just 18 months ago Something historic is happening in China's AI industry.",
    keywords: '["China AI IPO", "Zhipu AI", "MiniMax", "China AI market", "AI valuation", "Hong Kong stock market", "DeepSeek", "AI model companies", "Chinese AI stocks", "AI investment 2026"]',
  },
  'ai-interview-coaching-china-graduates-job-market-2026': {
    metaTitle: "AI Interview Coaching: How Chinese Graduates Are Using AI to Crack the Job Market (+120% Trend Explosion)",
    metaDescription: "With Xiaohongshu views surging 120% in one week, AI interview coaching has become the hottest trend among Chinese graduates facing a brutal job market. We analyze 6 platforms, university adoption programs, and the DeepSeek-V3 technology powering this revolution.",
    keywords: '["AI interview coaching", "China job market", "graduate employment AI", "Chinese AI tools", "DeepSeek V3", "Xiaohongshu trends", "AI recruitment", "OfferGoose", "MianShiMao", "AI career tools", "Chinese graduates", "virtual HR"]',
  },
  'china-ai-agent-era-140-trillion-tokens-2026': {
    metaTitle: "China's AI Agent Era: How 140 Trillion Daily Tokens, New Regulations, and a DeepSeek Price War Are Reshaping Global AI",
    metaDescription: "China's AI Agent Era: How 140 Trillion Daily Tokens, New Regulations, and a DeepSeek Price War Are Reshaping Global AI June 2026 marks a watershed moment...",
    keywords: '["AI agent", "Chinese AI", "Beijing", "DeepSeek", "NVIDIA", "API", "AI regulation", "inference", "data center", "CES"]',
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
    metaDescription: "China's humanoid robot industry is scaling from thousands to tens of thousands of units in a single year—a shift that is redefining global robotics...",
    keywords: '["Shanghai", "Huawei", "venture capital", "IPO", "startup", "API", "robotics", "humanoid robot", "embodied AI"]',
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
    metaDescription: "In February 2026, Chinese regulators drew a hard line: every AI-generated face in a livestream must be labeled. Two months later, that rule hasn't slowed...",
    keywords: '["ByteDance", "SaaS", "API", "digital human", "CES"]',
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
    metaDescription: "China AI Goes Global: How MiniMax Built a 236 Million User Empire from Shanghai In 2025, a Shanghai startup earned 73% of its revenue from overseas...",
    keywords: '["Chinese AI", "Shanghai", "ByteDance", "Kimi", "DeepSeek", "MiniMax", "Zhipu AI", "GPT", "IPO", "startup"]',
  },
  'china-ai-interview-revolution-2026': {
    metaTitle: "AI Interview Coaching: China's 2026 Grad Job Market Hack",
    metaDescription: "AI Interview Coaching: China's 2026 Grad Job Market Hack Xiaohongshu searches for \"AI interview coaching\" surged 120% in one week. Six hundred eighty...",
    keywords: '["ByteDance", "Doubao", "Alibaba", "Tongyi Qianwen", "Moonshot AI", "Kimi", "CES"]',
  },
  'china-ai-chip-renaissance-q1-2026': {
    metaTitle: "China's AI Chip Renaissance: The Quarter That Changed Everything",
    metaDescription: "China's AI Chip Renaissance: The Quarter That Changed Everything Cambricon's profit surge of 185%. Hygon crossing ¥40 billion in quarterly revenue. Moore...",
    keywords: '["machine learning", "Shanghai", "DeepSeek", "Huawei", "Ascend", "NVIDIA", "AI chip", "semiconductor", "Llama", "cloud computing"]',
  },
  'china-ai-ppt-revolution-3-minute-decks-2026': {
    metaTitle: "The 3-Minute Deck Revolution: How China's Office Workers Are Using AI to Replace PowerPoint Design",
    metaDescription: "The 3-Minute Deck Revolution: How China's Office Workers Are Using AI to Replace PowerPoint Design China's office workers are abandoning manual slide...",
    keywords: '["training", "CES", "artificial intelligence", "China tech", "AI industry", "machine learning", "technology"]',
  },
  'china-ai-hallucination-blind-spot-crisis-2026': {
    metaTitle: "The Hallucination Blind Spot: How China's 249M AI Users Became Perfect Prey for a Deception Epidemic",
    metaDescription: "The Hallucination Blind Spot: How China's 249M AI Users Became Perfect Prey for a Deception Epidemic On May 17, 2025, two reports dropped within hours of...",
    keywords: '["neural network", "large language model", "generative AI", "Chinese AI", "Shanghai", "DeepSeek", "CES"]',
  },
  'china-ai-creator-economy-digital-humans-2026': {
    metaTitle: "China's AI Creator Economy: How Digital Humans and $45B Valuations Are Reshaping Global Content",
    metaDescription: "China's AI Creator Economy: How Digital Humans and $45B Valuations Are Reshaping Global Content On May 6, 2026, while Western markets were digesting...",
    keywords: '["Chinese AI", "Shanghai", "Moonshot AI", "Kimi", "DeepSeek", "MiniMax", "funding", "venture capital", "investment", "API"]',
  },
  'china-ai-invisible-empire-consumer-apps-2026': {
    metaTitle: "The Invisible Empire: How China's AI Consumer Apps Quietly Conquered 2.5 Billion Users — And Why the World Barely Noticed",
    metaDescription: "The Invisible Empire: How China's AI Consumer Apps Quietly Conquered 2.5 Billion Users — And Why the World Barely Noticed While Silicon Valley obsessed...",
    keywords: '["Chinese AI", "Shanghai", "ByteDance", "Doubao", "Alibaba", "Tongyi Qianwen", "Baidu", "Wenxin Yiyan", "Moonshot AI", "Kimi"]',
  },
  'china-six-networks-trillion-infrastructure-ai-compute-2026': {
    metaTitle: "China's $7 Trillion 'Six Networks' Strategy: When AI Compute Gets the Same Priority as Water and Electricity",
    metaDescription: "On April 28, 2026, China's Politburo did something unprecedented: it elevated compute networks (算力网) to the same strategic tier as water networks, power...",
    keywords: '["investment", "API", "compute", "data center", "CES"]',
  },
  'china-ai-olympus-65-billion-war-future-intelligence-2026': {
    metaTitle: "China's AI Olympus: The $65 Billion War for the Future of Intelligence",
    metaDescription: "In seven days, Chinese AI companies raised more capital than the entire European AI sector raised in 2025. They did it while simultaneously releasing models that collectively hold the top five positions on global open-source leaderboards. This is not a funding cycle. This is an arms race with a product launch attached.",
    keywords: '["Kimi AI", "DeepSeek valuation", "Moonshot AI funding", "Chinese open source AI", "AI arms race", "China AI investment", "AI infrastructure", "token economy", "Cursor AI", "Alibaba AI", "China tech funding"]',
  },
  'china-agent-era-national-policy-ai-terminal-standards-anthropic-trillion-2026': {
    metaTitle: "China's Agent Era Begins: National Policy Framework, AI Terminal Standards, and the Trillion-Dollar Global AI Race",
    metaDescription: "Three Chinese ministries jointly issued the most comprehensive national policy framework for AI agent governance to date. AI terminal intelligence grading standards were released. Anthropic nears a $1 trillion valuation. And China's AI models processed 8 trillion tokens in a single week. May 2026 will be remembered as the month AI agents went mainstream.",
    keywords: '["AI agent policy", "China AI regulation", "Anthropic valuation", "AI terminal standards", "DeepSeek API", "China AI patent", "AI infrastructure", "China US tech dialogue", "smart agent", "GB/Z 177", "AI policy framework"]',
  },
  'doubao-charging-ai-free-era-ends-china-2026': {
    metaTitle: "Doubao Charging: China's AI Free Era Ends | 345M Users",
    metaDescription: "ByteDance's Doubao launched paid subscriptions ($9.50-$72/mo) for 345M users. Analysis of token economics, pricing strategy, and what China's AI monetization shift means globally.",
    keywords: 'Doubao, ByteDance AI, China AI monetization, AI subscription, token economy, ChatGPT China, AI pricing, large language model business model, Doubao paid, China AI market 2026',
  },
  'kimi-20-billion-valuation-china-ai-token-economy': {
    metaTitle: "Kimi's $20 Billion Bet: How China's AI Token Economy Is Rewriting Global Power Dynamics",
    metaDescription: "Kimi hits a $20 billion funding round at $200 billion valuation while China's AI token consumption surges past the US for the third time. Here's what it means for the global AI landscape.",
    keywords: '["Chinese AI", "Moonshot AI", "Kimi", "DeepSeek", "MiniMax", "Zhipu AI", "funding", "venture capital", "startup", "API"]',
  },
  'deepseek-v4-promo-ending-analysis': {
    metaTitle: "DeepSeek V4's 75% Promo Ends May 31: What Happens Next and Why the AI Pricing War Is Just Beginning",
    metaDescription: "DeepSeek V4 launched on April 24, 2026, with a 75% promotional discount on its flagship Pro model. Originally set to expire on May 5, the offer has been...",
    keywords: '["DeepSeek", "GPT", "Claude", "Gemini", "API", "CES"]',
  },
  'china-ai-deepfake-fraud-crisis-2026': {
    metaTitle: "China's AI Deepfake Fraud Crisis: How 700,000 Annual Scams and a $40 Billion Global Threat Are Reshaping Trust in the Digital Age",
    metaDescription: "China's AI Deepfake Fraud Crisis: How 700,000 Annual Scams and a $40 Billion Global Threat Are Reshaping Trust in the Digital Age China's AI digital human...",
    keywords: '["generative AI", "Moonshot AI", "Kimi", "DeepSeek", "MiniMax", "GPT", "IPO", "investment", "API", "digital human"]',
  },
  'kimi-k2-6-open-source-coding-revolution': {
    metaTitle: "Kimi K2.6: How a $18B Chinese Startup Is Rewriting the Rules of Open-Source AI Coding",
    metaDescription: "Kimi K2.6: How a $18B Chinese Startup Is Rewriting the Rules of Open-Source AI Coding On April 20, 2026, while Silicon Valley was still processing...",
    keywords: '["Beijing", "Moonshot AI", "Kimi", "OpenAI", "GPT", "Claude", "venture capital", "startup", "API", "compute"]',
  },
  'china-ai-global-surge-api-traffic-empire-2026': {
    metaTitle: "From Made in China to Trained in China: The Untold Story of How Chinese AI Conquered Global Developers",
    metaDescription: "China's AI export model defies every precedent in technology history. Image: Unsplash China's technology exports have always followed a familiar playbook:...",
    keywords: '["Chinese AI", "Shenzhen", "Kimi", "DeepSeek", "Huawei", "Ascend", "GPU", "AI chip", "semiconductor", "OpenAI"]',
  },
  'china-ai-agent-revolution-2026-policy-market': {
    metaTitle: "Inside China's AI Policy Machine: How the Politburo's 'AI+ Action' Directive Is Rewriting Procurement Law",
    metaDescription: "\"The question isn't whether AI agents will replace human workers. The question is whether companies that don't deploy agents will be replaced by companies...",
    keywords: '["artificial intelligence", "AI agent", "funding", "training", "compute", "CES"]',
  },
  'ai-compute-crunch-china-token-crisis-2026': {
    metaTitle: "The Great AI Compute Crunch: How China's AI Boom Is Running Out of Tokens",
    metaDescription: "China's AI revolution is facing an unexpected bottleneck. In April 2026, as DeepSeek launched its highly anticipated V4 model and Kimi pushed out K2.6,...",
    keywords: '["AI agent", "Beijing", "Alibaba", "Baidu", "Tencent", "Hunyuan", "Moonshot AI", "Kimi", "DeepSeek", "MiniMax"]',
  },
  'bytedance-seed-brain-drain-70-engineers': {
    metaTitle: "ByteDance's AI Brain Drain: 70 Top Engineers Exit Seed Team in 12 Months",
    metaDescription: "\"Bytedance's AI Brain Drain: 70 Top Engineers Exit Seed Team in 12 Months",
    keywords: '["large language model", "LLM", "generative AI", "Chinese AI", "Beijing", "Shanghai", "ByteDance", "Doubao", "Alibaba", "Tencent"]',
  },
  'deepseek-v4-million-token-china-ai-sovereignty': {
    metaTitle: "DeepSeek V4: The Million-Token API Update That Signals China's AI Sovereignty Shift",
    metaDescription: "DeepSeek's quiet API update on April 22 signals something far bigger than a context window expansion—it's the prelude to China's most significant AI model...",
    keywords: '["DeepSeek", "Huawei", "Ascend", "NVIDIA", "funding", "investment", "API", "inference", "training", "compute"]',
  },
  'china-embodied-intelligence-robot-marathon-2026': {
    metaTitle: "China's Embodied Intelligence Revolution: When Robots Outrun Humans — April 2026",
    metaDescription: "China's Embodied Intelligence Revolution: When Robots Outrun Humans Meta Title: China's Embodied Intelligence Revolution: When Robots Outrun Humans —...",
    keywords: '["artificial intelligence", "Beijing", "funding", "investment", "API", "robotics", "humanoid robot", "training", "data center"]',
  },
  'china-ai-avatar-revolution-2026': {
    metaTitle: "China's AI Avatar Revolution: How 410 Million Views Signal a Global Content Creation Shift",
    metaDescription: "<!-- Hero Image -- AI avatar technology is reshaping content creation at unprecedented scale (Image: Unsplash)  China's AI Avatar Revolution: How 410...",
    keywords: '["ByteDance", "API", "digital human", "training", "CES"]',
  },
  'stanford-ai-index-2026-china-rise': {
    metaTitle: "Stanford AI Index 2026: China's 'Parallel Run' Era Has Arrived",
    metaDescription: "\"The Stanford campus at dusk, where the world's most authoritative AI report originates",
    keywords: '["artificial intelligence", "Chinese AI", "Beijing", "Alibaba", "DeepSeek", "MiniMax", "OpenAI", "GPT", "Claude", "CES"]',
  },
  'alibaba-token-hub-100b-gambit': {
    metaTitle: "Alibaba's $100B Token Gambit: Inside the Alibaba Token Hub Revolution Reshaping China's AI Economy",
    metaDescription: "On March 16, 2026, Alibaba did something unprecedented in corporate history: it named a core business unit after a technical metric. The Alibaba Token Hub...",
    keywords: '["large language model", "LLM", "AI agent", "Alibaba", "NVIDIA", "GPU", "GPT", "Gemini", "API", "cloud computing"]',
  },
  'china-ai-agent-explosion-2025-enterprise-deployment': {
    metaTitle: "China's AI Agent Explosion: How 126 Platforms and $1B+ in Enterprise Deals Are Reshaping Global Automation",
    metaDescription: "China's AI Agent ecosystem spans 126 development platforms and serves millions of enterprise users across manufacturing, e-commerce, and financial...",
    keywords: '["AI agent", "Chinese AI", "Beijing", "ByteDance", "Alibaba", "Baidu", "Tencent", "Kimi", "Zhipu AI", "GPT"]',
  },
  'china-ai-model-war-april-2026-week-changed-everything': {
    metaTitle: "The Week That Changed Everything: China's AI Model War Intensifies in April 2026",
    metaDescription: "The AI model wars: Chinese tech giants battle for dominance in the world's largest AI market. Photo by Google DeepMind / Unsplash The first week of April...",
    keywords: '["Chinese AI", "Beijing", "Doubao", "Alibaba", "Kimi", "GPT", "funding", "API", "embodied AI", "inference"]',
  },
  'china-ai-chip-war-2026-us-sanctions': {
    metaTitle: "The Great Silicon Wall: How China's AI Industry Is Defying U.S. Chip Sanctions in 2026",
    metaDescription: "The Great Silicon Wall: How China's AI Industry Is Defying U.S. Chip Sanctions in 2026 ByteDance's $5.6 billion bet on Huawei. DeepSeek V4 launching on...",
    keywords: '["Chinese AI", "ByteDance", "Doubao", "DeepSeek", "Huawei", "Ascend", "NVIDIA", "GPU", "AI chip", "startup"]',
  },
  'china-ai-model-wars-april-2026': {
    metaTitle: "China's AI Model Wars: How Alibaba, ByteDance, and MiniMax Are Reshaping Global AI Competition in April 2026",
    metaDescription: "China's AI Model Wars: How Alibaba, ByteDance, and MiniMax Are Reshaping Global AI Competition in April 2026 The most intense week in Chinese AI...",
    keywords: '["Chinese AI", "ByteDance", "Alibaba", "Moonshot AI", "Kimi", "MiniMax", "Llama", "API", "CES"]',
  },
  'modelbest-edge-ai-unicorn-2026': {
    metaTitle: "ModelBest Becomes Unicorn: How Tsinghua's Edge AI Pioneer Is Reshaping On-Device Intelligence",
    metaDescription: "A quiet revolution in artificial intelligence is happening on the smallest screens. While tech giants battle for cloud dominance, ModelBest—a Tsinghua...",
    keywords: '["artificial intelligence", "Beijing", "Shenzhen", "GPU", "GPT", "Gemini", "funding", "investment", "startup", "API"]',
  },
  'ai-interview-coaching-china-2025': {
    metaTitle: "The AI Interview Coach Phenomenon: How Chinese Graduates Are Using AI to Crack the Job Market",
    metaDescription: "China's job market has become a battleground for millions of fresh graduates, and a surprising new weapon has emerged: AI interview coaches. In the past...",
    keywords: '["large language model", "LLM", "Chinese AI", "ByteDance", "Doubao", "Alibaba", "Tongyi Qianwen", "Moonshot AI", "Kimi", "CES"]',
  },
  'china-ai-token-surge-gen-z': {
    metaTitle: "China's AI Overtake: 31% Surge in Token Usage Signals Global Power Shift",
    metaDescription: "China's AI Overtake: 31% Surge in Token Usage Signals Global Power Shift China's AI revolution is accelerating beyond predictions. According to OpenRouter...",
    keywords: '["Chinese AI", "Kimi", "DeepSeek", "MiniMax", "Zhipu AI", "OpenAI", "GPT", "Claude", "funding", "venture capital"]',
  },
  'china-ai-avatar-revolution-2025': {
    metaTitle: "China's AI Avatar Revolution: 410M Views Transformed Content Creation Forever",
    metaDescription: "China's AI Avatar Revolution: How 410 Million Views Transformed Content Creation Forever The rise of faceless influencers and the $4.4 billion digital...",
    keywords: '["neural network", "investment", "API", "digital human", "CES"]',
  },
  'china-ai-digital-human-revolution': {
    metaTitle: "China's AI Digital Human Revolution: 80,000 Virtual Avatars Reshaping Content",
    metaDescription: "AI digital humans are becoming indistinguishable from real creators, sparking a revolution in China's content economy The creator economy in China has...",
    keywords: '["Doubao", "Tongyi Qianwen", "Kimi", "GPT", "Claude", "funding", "IPO", "API", "digital human", "CES"]',
  },
  'doubao-12-trillion-token-explosion': {
    metaTitle: "Doubao's 12 Trillion Token Explosion: How ByteDance Is Quietly Winning the Global AI Race",
    metaDescription: "Doubao's 12 Trillion Token Explosion: How ByteDance Is Quietly Winning the Global AI Race The exponential rise of China's AI ecosystem is reshaping global...",
    keywords: '["large language model", "Chinese AI", "ByteDance", "Doubao", "Alibaba", "Moonshot AI", "Kimi", "DeepSeek", "MiniMax", "OpenAI"]',
  },
  'stepfun-terminal-ai-revolution': {
    metaTitle: "StepFun's $7 Billion Bet: How China's AI Unicorn Is Winning the Terminal Race",
    metaDescription: "StepFun's $7 Billion Bet: How China's AI Unicorn Is Winning the Terminal Race The Shanghai AI lab that abandoned the consumer chatbot race is now inside...",
    keywords: '["Chinese AI", "Shanghai", "Alibaba", "Tencent", "DeepSeek", "GPT", "funding", "API", "robotics", "embodied AI"]',
  },
  'ai-thesis-writing-china': {
    metaTitle: "AI Thesis Writing Explodes: How 12 Million Chinese Students Are Rewriting Academic Rules",
    metaDescription: "\"AI Thesis Writing Explodes: How 12 Million Chinese Students Are Rewriting Academic Rules",
    keywords: '["Chinese AI", "ByteDance", "Doubao", "Alibaba", "Tongyi Qianwen", "Tencent", "Kimi", "GPT", "Claude", "data center"]',
  },
  'doubao-bytedance': {
    metaTitle: "ByteDance Doubao: The 200 Million User AI Assistant Reshaping Content Creation",
    metaDescription: "While Baidu's Wenxin Yiyan dominates search integration and DeepSeek captures the technical elite, ByteDance's Doubao has carved out a different kingdom:...",
    keywords: '["ByteDance", "Doubao", "Alibaba", "Baidu", "Wenxin Yiyan", "DeepSeek", "GPT", "API", "CES"]',
  },
  'bytedance-ai-gamble-gpu-kingpin-profit-drop': {
    metaTitle: "ByteDance's AI Obsession: How a 70% Profit Plunge Turned a Social Media Giant Into China's GPU Kingpin",
    metaDescription: "ByteDance's AI Obsession: How a 70% Profit Plunge Turned a Social Media Giant Into China's GPU Kingpin The company that built its empire on 15-second...",
    keywords: '["artificial intelligence", "large language model", "AI agent", "ByteDance", "Alibaba", "Tencent", "DeepSeek", "NVIDIA", "GPU", "API"]',
  },
  'china-ai-april-infrastructure-2026': {
    metaTitle: "China's AI Revolution: Education Reform, National Standards, and Ecosystem Breakthroughs in April 2026",
    metaDescription: "China's AI Revolution: Education Reform, National Standards, and Ecosystem Breakthroughs in April 2026 Shanghai Jiao Tong University launches...",
    keywords: '["artificial intelligence", "generative AI", "Beijing", "Shanghai", "DeepSeek", "funding", "investment", "API", "humanoid robot", "compute"]',
  },
  'minimax-ipo-212-million-users-ai-companion-empire': {
    metaTitle: "MiniMax Files for IPO: How China's AI Companion Empire Built 212 Million Users and Challenged the Global Social Landscape",
    metaDescription: "MiniMax Files for IPO: How China's AI Companion Empire Built 212 Million Users and Challenged the Global Social Landscape MiniMax's Talkie and 星野 apps...",
    keywords: '["artificial intelligence", "Chinese AI", "ByteDance", "DeepSeek", "MiniMax", "venture capital", "IPO", "investment", "startup", "SaaS"]',
  },
  'tars-embodied-intelligence-455-million-brain-club': {
    metaTitle: "Tars Raises $455M: How China's 'Robot Brain' Startup Cracked the Embodied Intelligence Code",
    metaDescription: "Tars Raises $455M: How China's \"Robot Brain\" Startup Cracked the Embodied Intelligence Code Tars' AWE 3.0-powered A1 robot set a Guinness World Record for...",
    keywords: '["Beijing", "Shanghai", "NVIDIA", "funding", "investment", "startup", "API", "robotics", "CES"]',
  },
  'tongyi-qianwen-alibaba': {
    metaTitle: "Alibaba Tongyi Qianwen: Enterprise AI Powerhouse",
    metaDescription: "While Baidu captured consumer mindshare and DeepSeek shocked the industry with cost efficiency, Alibaba's Tongyi Qianwen has quietly built the most...",
    keywords: '["Alibaba", "Tongyi Qianwen", "Baidu", "Wenxin Yiyan", "DeepSeek", "GPT", "Claude", "enterprise AI", "API", "compute"]',
  },
  'wenxin-yiyan-baidu': {
    metaTitle: "Baidu Wenxin Yiyan: The 300 Million User AI Assistant",
    metaDescription: "When international headlines celebrate DeepSeek's cost efficiency and Kimi's technical innovations, Baidu's Wenxin Yiyan has quietly achieved something equally remarkable: 300 million monthly active users and a $5 billion annual revenue run rate that makes it one of the most valuable AI products on Earth.",
    keywords: '["Baidu", "Wenxin Yiyan", "Ernie Bot", "China AI", "AI chatbot", "Chinese search", "LLM", "ByteDance", "Doubao", "Alibaba", "Tongyi Qianwen", "Moonshot AI", "Kimi", "DeepSeek", "AI assistant", "search AI"]',
  },
  'ai-video-tools-china': {
    metaTitle: "Chinese AI Video Generation: Kling, Vidu, Hailuo vs Sora Technical Comparison",
    metaDescription: "While OpenAI's Sora captured global attention with its demonstration videos, Chinese companies have been quietly building video generation tools that are...",
    keywords: '["Chinese AI", "MiniMax", "OpenAI", "API", "AI video", "training", "CES"]',
  },
  'chinese-ai-index-2026': {
    metaTitle: "The Chinese AI Index 2026: Mapping 103 Companies That Are Reshaping Global Technology",
    metaDescription: "The Chinese AI Index 2026: Mapping 103 Companies That Are Reshaping Global Technology Photo by Joshua Sortino on Unsplash In March 2026, something changed...",
    keywords: '["Chinese AI companies", "AI ecosystem China", "foundation models China", "AI infrastructure", "DeepSeek", "Kimi", "ByteDance", "AI investment China"]',
  },
  'deepseek-v3-deep-dive': {
    metaTitle: "DeepSeek-V3: The $5.6M Training Run",
    metaDescription: "DeepSeek-V3 represents one of the most significant efficiency breakthroughs in AI history. Training a model competitive with GPT-4 for just $5.6 million...",
    keywords: '["Chinese AI", "DeepSeek", "GPU", "OpenAI", "GPT", "Claude", "startup", "inference", "training", "compute"]',
  },
  'minimax-talkie': {
    metaTitle: "MiniMax: The 212 Million User AI Companion Empire Built on Digital Intimacy",
    metaDescription: "While ByteDance's Doubao dominates content creation and DeepSeek captures the technical elite, MiniMax has built something arguably more intimate: 212...",
    keywords: '["Chinese AI", "ByteDance", "Doubao", "Alibaba", "Baidu", "DeepSeek", "MiniMax", "GPT", "IPO", "API"]',
  },
  'chinese-ai-landscape': {
    metaTitle: "The Rise of Chinese AI: Complete Ecosystem Map (Foundation to Application)",
    metaDescription: "China's AI ecosystem has evolved from a fragmented collection of research labs into a comprehensive industrial stack that rivals Silicon Valley....",
    keywords: '["artificial intelligence", "neural network", "Chinese AI", "Shanghai", "Doubao", "Alibaba", "Tencent", "Hunyuan", "Kimi", "DeepSeek"]',
  },
  'kimi-2m-context': {
    metaTitle: "Kimi K2.5 Technical Analysis: 1 Trillion Parameters, 256K Context, Agent Swarms",
    metaDescription: "When Cursor announced that Composer 2.0 was built on Kimi K2.5 rather than GPT-4 or Claude, the message was clear: Chinese foundation models had reached...",
    keywords: '["neural network", "large language model", "Moonshot AI", "Kimi", "DeepSeek", "GPU", "GPT", "Claude", "inference", "training"]',
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
