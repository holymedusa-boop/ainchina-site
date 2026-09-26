---
title: "StepFun Step 5 Preview: How China's Quietest AI Tiger Built a 600B-Parameter Model That Matches Trillion-Parameter Giants"
slug: "stepfun-step-5-preview-600b-moe-china-ai-2026"
date: "2026-09-27"
category: "Model Releases"
excerpt: "StepFun's Step 5 Preview scores 44 on the Artificial Analysis Intelligence Index — tying Kimi K3's 2.8-trillion-parameter model with only 600B parameters and 27B active. Here's how China's most under-the-radar AI startup pulled it off."
description: "StepFun Step 5 Preview achieves trillion-parameter-level intelligence at one-fifth the inference cost. A deep dive into the architecture, pricing strategy, and business turnaround behind China's most efficient open-source model."
author: "AI in China"
image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200"
imageAlt: "Abstract digital matrix representing neural network computation and sparse mixture-of-experts routing"
tags: ["StepFun", "Step 5", "MoE", "Model Efficiency", "Open Source", "AI Tigers", "China AI"]
---

On September 20, 2026, StepFun did something unusual: it skipped a generation entirely. After releasing Step-3.7-Flash in May, the Shanghai-based startup jumped straight to **Step 5 Preview**, bypassing Step 4 altogether. The company said the improvement was too significant for an incremental number.

The numbers back that up. Step 5 Preview — a sparse Mixture-of-Experts model with **600 billion total parameters but only 27 billion active during inference** — scored **44 on the Artificial Analysis Intelligence Index**, tying Moonshot AI's Kimi K3, which has roughly **4.7 times the total parameters**. On Terminal-Bench 4.0, the industry-standard agentic coding benchmark, Step 5 Preview hit **33.3%**, placing it within one percentage point of GPT-5.6 Terra and roughly equal to Claude Opus 5.

But the headline isn't just about intelligence. Step 5 Preview achieves this at **$1 per million input tokens and $2.70 per million output tokens** — roughly half the input price and one-quarter the output price of Kimi K3. It generates at 100 tokens per second, 54% faster than the industry average. And on October 15, StepFun plans to release the full BF16 weights on Hugging Face, making it one of the largest open-source model releases in history.

For a company that was written off by some analysts just eighteen months ago — after its consumer chatbot ambitions collapsed — StepFun's Step 5 Preview represents one of the most dramatic turnarounds in China's AI industry. This is how they did it.

## The Quiet Tiger

StepFun (阶跃星辰, formally Shanghai Jieyue Xingchen Intelligent Technology) was founded on April 6, 2023, by Jiang Daxin, who spent 16 years at Microsoft and rose to Corporate Vice President and Chief Scientist of the Software Technology Center Asia. His co-founders included Zhu Yibo, formerly head of AI infrastructure at ByteDance, and Jiao Binxing. The company's name combines "step function" — a mathematical function that jumps discontinuously — with a nod to reaching for the stars. The ambition was embedded in the name: not gradual progress, but sudden leaps.

| Attribute | Detail |
|---|---|
| **Founded** | April 6, 2023 |
| **Headquarters** | Xuhui District, Shanghai |
| **Founder & CEO** | Jiang Daxin (former Microsoft Corporate VP) |
| **CTO** | Zhu Yibo (former ByteDance AI infrastructure lead) |
| **Chairman** | Yin Qi (Megvii co-founder, appointed January 2026) |
| **Employees** | ~400 (as of early 2026) |
| **Classification** | One of China's "Six Little Tigers" of AI |
| **Key Investors** | Tencent, Qiming Venture Partners, Shanghai State-owned Capital, Alibaba, China Life Insurance, Hong Kong Investment Corporation |

StepFun was quickly grouped with Zhipu AI, Moonshot AI, MiniMax, Baichuan Intelligence, and 01.AI as China's "Six Little Tigers" — the domestic challengers to OpenAI and Anthropic. But while Moonshot captured consumer attention with Kimi Chat and MiniMax built a global consumer product empire, StepFun struggled to find its footing in the consumer market. Its chatbot apps 跃问 (Yuewen) and 冒泡鸭 (Bubble Duck) failed to gain traction against better-funded competitors.

By mid-2025, StepFun made a decisive pivot: abandon the consumer market and go all-in on B2B model services. It was a painful but ultimately transformative decision. The company redirected its engineering talent toward building the most cost-efficient API-first foundation models in China, targeting enterprise customers and developers who cared about performance per dollar above all else.

The turnaround was swift. By the end of 2025, StepFun's revenue had reached approximately **¥500 million ($68 million)** — a fraction of DeepSeek's billions but significant for a company that had essentially restarted its business model eighteen months earlier. In January 2026, StepFun closed a **¥5+ billion ($717 million) Series B+ round**, the largest single funding round for a Chinese AI startup in over a year. Five months later, it raised approximately **$2.5 billion at a $10 billion valuation**, with the Hong Kong government's Investment Corporation (HKIC) participating as a strategic investor. The company converted to a joint-stock structure in April 2026 — a standard precursor to a Hong Kong IPO — and has been actively preparing for a listing.

## The Technology: Narrow but Deep

Step 5 Preview's architecture represents a philosophical bet that the future of AI isn't about making models bigger — it's about making them smarter about which parameters they use.

The model uses a **sparse Mixture-of-Experts design**: of its 600 billion total parameters spread across 92 layers, only 27 billion are activated for any given token. This "narrow but deep" approach means the model can maintain the knowledge capacity of a much larger system while keeping inference costs proportional to a much smaller one. StepFun describes this as the **"Pareto Frontier"** philosophy — finding the optimal balance between intelligence and cost rather than simply scaling up.

Several architectural innovations make this efficient:

- **Sparse Grouped Query Attention (GQA)** — Reduces the memory bandwidth bottleneck that typically constrains long-context inference
- **Block-wise Token Merging** — Compresses redundant visual and textual tokens before they reach the expert routing layer, reducing the computational cost of the Indexer and Top-k Selection mechanism by **8x**
- **Context Compaction** — Dynamically compresses conversation history during long agentic tasks, preventing context window bloat while preserving task-relevant information
- **Long-horizon Reinforcement Learning** — The model was trained with extended-episode RL specifically optimized for multi-step agentic workflows, not just single-turn responses

The result is a model that processes **1 million tokens of context**, accepts text, image, and video inputs, and maintains 100 tokens per second generation speed — all while keeping inference costs near the bottom of the industry range.

![Code on a developer screen illustrating sparse mixture-of-experts architecture with token routing](https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800)

## The Benchmarks: Punching Above Its Weight Class

The performance data tells a remarkable story of efficiency. Step 5 Preview doesn't just compete with models in its size class — it matches or exceeds models that are several times larger and significantly more expensive.

| Benchmark | Step 5 Preview | Kimi K3 | GLM-5.3 | Claude Opus 5 | GPT-5.6 Terra |
|---|---|---|---|---|---|
| **AA Intelligence Index** | 44 | 44 | 45 | 45 | — |
| **Terminal-Bench 4.0** | 33.3% | 12.6% | 28.7% (Flash) | 33.1% | 34.1% |
| **GPQA Diamond** | 93.5% | — | — | — | — |
| **Total Parameters** | 600B | 2.8T | — | — | — |
| **Active Parameters** | 27B | — | — | — | — |

The Terminal-Bench 4.0 result deserves special attention. Step 5 Preview's 33.3% places it within striking distance of GPT-5.6 Terra (34.1%) — a model likely trained with an order of magnitude more compute — and essentially tied with Claude Opus 5 (33.1%). It dramatically outperforms Kimi K3 (12.6%) on this specific agentic benchmark, despite both models sharing the same AA Intelligence Index score.

This divergence between general intelligence benchmarks and agentic coding benchmarks highlights something important: Step 5 Preview's training specifically optimized for long-horizon, multi-step tasks. The Context Compaction mechanism and extended-episode RL training show up most clearly in agentic scenarios where the model must maintain coherent behavior across hundreds of sequential operations.

On SWE-bench, the software engineering benchmark, Step 5 Preview scored **67.7** — competitive with dedicated coding models. On BrowseComp, which tests deep web research capabilities, it scored **88.7%**. On MMMU-Pro, the advanced multimodal reasoning benchmark, it achieved **76.0%**.

Perhaps the most striking demonstration of Step 5 Preview's agentic capability came from an internal evaluation: the model was tasked with autonomously optimizing GPU kernel code. It worked for **22 hours** without human intervention, ultimately achieving **508 TFLOPS** — surpassing Claude Opus 5's 493 TFLOPS on the same task, at roughly one-eighth the API cost.

## The Price Disruption: Intelligence at One-Fifth the Cost

StepFun's pricing strategy is arguably as important as its architecture. The company has positioned Step 5 Preview as the definitive answer to a question that every AI buyer is asking: *"How much intelligence can I get per dollar?"*

| Model | Input Price ($/M tokens) | Output Price ($/M tokens) | AA Score | Cost Efficiency (Score/Input$) |
|---|---|---|---|---|
| **Step 5 Preview** | **$1.00** | **$2.70** | **44** | **44.0** |
| Kimi K3 | $3.00 | $15.00 | 44 | 14.7 |
| GLM-5.3 | $1.80 | $8.00 | 45 | 25.0 |
| Claude Opus 5 | $5.00 | $25.00 | 45 | 9.0 |
| Industry Median | $1.88 | $10.00 | — | — |

Step 5 Preview's **cost efficiency score of 44.0** (intelligence index divided by input price) is nearly 3x that of Kimi K3 and nearly 5x that of Claude Opus 5. For enterprises running high-volume AI workloads — customer service, code generation, document analysis — this difference is transformative. A company spending $100,000/month on Kimi K3 API calls could theoretically switch to Step 5 Preview and achieve equivalent intelligence for approximately $33,000.

The speed advantage compounds this. At 100 tokens per second, Step 5 Preview is **54% faster than the industry average** of ~65 tokens per second. For latency-sensitive applications like real-time coding assistants or interactive agents, this means fewer timeouts, better user experience, and lower infrastructure overhead.

StepFun has also introduced a **Token Plan** subscription starting at **¥49 (~$6.80)/month**, targeting individual developers and small teams who want predictable costs for agentic workloads. This pricing tier — barely enough for a lunch in Shanghai — undercuts every major competitor's entry-level offering and signals StepFun's aggressive land-grab strategy.

The company's cost per completed task tells the most compelling story. On a standard agentic coding benchmark run, Step 5 Preview costs approximately **$0.71 per task** — roughly **one-eighth the cost of Claude Opus 5** ($5.68) and one-third the cost of Kimi K3 ($2.15). For developers building AI-powered applications, this isn't a marginal improvement; it's a step-change in what's economically viable to build.

## Skipping a Generation: The Step 5 Gamble

StepFun's decision to skip Step 4 entirely was unusual but deliberate. The company's model evolution had been steady but unremarkable through the Step-3.x series:

| Model | Release | Architecture | Key Innovation |
|---|---|---|---|
| Step-1 | 2023 | Dense, 100B+ | Bilingual (Chinese/English) foundation model |
| Step-2 | July 2024 | MoE, 1T+ | First trillion-parameter MoE by a Chinese startup |
| Step-3 | July 2025 | MoE, 321B/38B | Vision-language reasoning, open weights |
| Step-3.5-Flash | Feb 2026 | MoE, 196B/11B | Open-source with training code (SteptronOss) |
| Step-3.7-Flash | May 2026 | MoE | Real-world agentic optimization |
| **Step 5 Preview** | **Sept 2026** | **MoE, 600B/27B** | **1M context, Pareto frontier efficiency** |

The jump from Step-3.7 to Step-5 reflects both the magnitude of improvement and a marketing calculation. In China's crowded AI landscape, where a new model drops every week, calling your release "Step 4" when it represents a fundamental architectural overhaul risks underselling the achievement. "Step 5" signals a clean break.

The naming also positions StepFun alongside competitors who have reached "5" or higher in their versioning — GLM-5.3, MiniMax-5, GPT-5.6. In a market where version numbers function as shorthand for technical maturity, StepFun was unwilling to appear a generation behind.

## The Efficiency Wave: Step 5 in Context

Step 5 Preview doesn't exist in isolation. It's the latest and perhaps most dramatic example of what might be called China's **"efficiency engineering" wave** — a broad industry shift away from brute-force scaling toward architectural optimization, sparse computation, and cost-effective deployment.

Across the Chinese AI landscape in September 2026, the pattern is unmistakable:

| Model | Total Params | Active Params | Key Efficiency Innovation |
|---|---|---|---|
| **Step 5 Preview** | 600B | 27B | Sparse MoE with Block-wise Token Merging |
| DeepSeek V4.1 Flash | — | — | Distilled from larger model, aggressive quantization |
| Kimi K3 | 2.8T | — | Native multimodal MoE (dense-style) |
| GLM-5.3 | — | — | Reasoning-optimized with tiered compute |
| Tencent Hy4 | 770B | 49B | Open-weight MoE, Apache 2.0 |
| China Telecom Xing4.0 | 29B | 4B | Ultra-sparse, runs on consumer GPUs |
| MiniCPM5-2B | 2B | — | Sub-4B parameter performance leader |

This isn't accidental. China's AI industry has been operating under **US export restrictions on advanced GPUs** since October 2022, with tightening controls in subsequent years. When access to cutting-edge Nvidia hardware is uncertain, efficiency becomes a strategic necessity, not just a competitive advantage. Chinese labs have been forced to extract more intelligence per FLOP than their American counterparts — and the results are starting to show.

StepFun's approach is distinctive within this wave. While DeepSeek focuses on training efficiency and Moonshot on architectural scale, StepFun has optimized primarily for **inference efficiency** — the cost of running the model after training is complete. This is the metric that matters most for commercial viability, since inference costs dominate the total cost of ownership for production AI deployments.

The multimodal design is also strategic. Step 5 Preview accepts images and video as inputs, positioning it for the growing market of visual AI applications — document analysis, video understanding, multimodal agents. StepFun's early investment in multimodal research (Step-1V launched in 2023) is now paying dividends as enterprise demand for vision-language models accelerates.

## The Business: From Flop to IPO Contender

StepFun's business trajectory over the past eighteen months is as remarkable as its technology. The company's pivot from consumer to B2B has transformed it from an also-ran into one of China's most valuable AI startups.

| Metric | 2024 | 2025 | 2026 (Projected) |
|---|---|---|---|
| **Revenue** | ~¥50M | ~¥500M | ~¥2B (estimated) |
| **Valuation** | ~$2B | ~$4B | ~$10B |
| **Cumulative Funding** | ~$300M | ~$1.2B | ~$3.3B |
| **Primary Business** | Consumer apps (failed) | B2B API services | B2B API + open-source |

![Business team meeting representing StepFun's strategic pivot from consumer to B2B enterprise AI services](https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800)

The funding acceleration has been dramatic. After raising approximately $300 million in its first two years, StepFun brought in $717 million in January 2026 and another $2.5 billion in May 2026. The May round, which valued the company at approximately $10 billion, included participation from the Hong Kong government's Investment Corporation — a signal of state-level confidence in StepFun's strategic importance.

| Funding Round | Date | Amount | Key Investors |
|---|---|---|---|
| Seed | Dec 2023 | ~$100M | Sinovation Ventures, Qiming, Matrix Partners China |
| Series A | Aug 2024 | ~$200M | Tencent, Shanghai state capital |
| Series B+ | Jan 2026 | ~$717M (¥5B+) | Shanghai State-owned Capital Investment (lead) |
| Series C (reported) | May 2026 | ~$2.5B | Hong Kong IC, Alibaba, China Life |
| **Total** | | **~$3.5B** | |

The appointment of **Yin Qi** — Megvii's co-founder and former CEO — as Chairman in January 2026 was another strategic move. Yin brings deep experience in AI commercialization and government relations, both critical for a company preparing for a Hong Kong IPO. His presence signals to investors that StepFun is serious about the business side of the AI equation.

StepFun's revenue model is straightforward: API usage fees, enterprise licensing, and increasingly, cloud partnerships. The company has been aggressive in making its models available on major Chinese cloud platforms — Alibaba Cloud, Tencent Cloud, and Huawei Cloud — as well as international platforms like OpenRouter. This distribution strategy maximizes reach without requiring StepFun to build its own cloud infrastructure.

The open-source strategy is more nuanced. StepFun has been selectively open-weight since Step-3, releasing model weights but not training data or code. The planned October 15 release of Step 5 Preview's BF16 weights continues this approach — the model will be freely available for commercial use, but the training pipeline remains proprietary. This "open enough" strategy builds developer goodwill and community adoption without giving away the crown jewels.

## The Road Ahead: Risks and Open Questions

For all its impressive metrics, Step 5 Preview faces real challenges.

**Benchmark-to-production gap.** Terminal-Bench and AA Index scores are useful proxies, but enterprise buyers care about reliability, safety, and domain-specific performance. Step 5 Preview is still a "Preview" — the full release may address edge cases that the preview version handles poorly.

**Competitive response.** Moonshot AI, Zhipu, and DeepSeek are not standing still. The efficiency techniques StepFun pioneered — sparse MoE, token merging, context compaction — are being studied and adapted by every major lab. The window of differentiation may be narrow.

**Revenue quality.** StepFun's ~¥500 million in 2025 revenue is growing fast but remains heavily dependent on API pricing that undercuts competitors. The company has not yet demonstrated that it can maintain its cost advantage while scaling to profitability. China's AI price war — which has seen input token prices drop by over 90% since early 2024 — shows no signs of abating.

**Geopolitical exposure.** As a Chinese AI company with state investors, StepFun faces potential restrictions in Western markets. US government scrutiny of Chinese AI models has been increasing, and StepFun's models could be caught in the crossfire of export control expansions or sanctions.

**Talent density.** With ~400 employees, StepFun is significantly smaller than DeepSeek (~1,000+) or Zhipu (~800). Maintaining a rapid release cadence with a lean team is sustainable only if the company can continue attracting top talent — and competition for AI researchers in China is fierce.

Despite these risks, the October 15 open-source release could be transformative. If Step 5 Preview's weights are widely adopted by the open-source community, StepFun could become the default choice for organizations that need frontier-adjacent intelligence without frontier pricing — a market segment that includes the vast majority of enterprises worldwide.

## What People Are Saying

The response to Step 5 Preview's release has been electric across Chinese developer communities and international AI forums alike. Here's what people are saying:

> **@AI_Deep_Dive (Weibo):** 阶跃星辰这波直接跳级到Step 5，600B参数27B激活，性能对标Kimi K3但成本只有五分之一，这才是真正的效率革命。不懂为什么还有人在吹万亿参数。
> *"StepFun jumped straight to Step 5 — 600B parameters with 27B active, matching Kimi K3's performance at one-fifth the cost. This is the real efficiency revolution. Why are people still hyping trillion-parameter models?"*

> **@CloudArchitect_Li (V2EX):** 我们在生产环境测试了Step 5 Preview的agentic coding能力，Terminal-Bench 33.3%确实不虚。关键是价格，同样的任务成本只有Claude的八分之一，已经开始迁移了。
> *"We tested Step 5 Preview's agentic coding in production. The Terminal-Bench 33.3% is legit. The key is price — same task costs one-eighth of Claude. We've already started migrating."*

> **@SarahChen_AI (X/Twitter):** StepFun just made the most compelling case yet that bigger ≠ better. 600B total / 27B active, matching 2.8T models on intelligence benchmarks. Sparse MoE isn't new, but this execution level is.
> *"StepFun just made the most compelling case yet that bigger ≠ better. 600B total / 27B active, matching 2.8T models on intelligence benchmarks. Sparse MoE isn't new, but this execution level is."*

> **@量化交易员小王 (Zhihu):** 从消费者应用转型到B2B，再从B2B做到港股IPO预备，阶跃星辰的商业转型路径值得所有AI创业公司学习。姜大昕确实是老江湖。
> *"From consumer apps to B2B, from B2B to Hong Kong IPO preparation — StepFun's business transformation path is worth studying for every AI startup. Jiang Daxin is truly a veteran."*

> **@ML_Enthusiast_JP (Reddit r/LocalLLaMA):** The Oct 15 open-source release is the real story here. If Step 5 Preview's BF16 weights are truly open (not just open-weight), this could be the biggest open-source drop since DeepSeek. 600B params is enormous though — hopefully they release quantized versions too.
> *"The Oct 15 open-source release is the real story here. If Step 5 Preview's BF16 weights are truly open (not just open-weight), this could be the biggest open-source drop since DeepSeek. 600B params is enormous though — hopefully they release quantized versions too."*

> **@国产AI观察者 (Bilibili):** 中国AI六小虎现在分化太严重了。MiniMax上市了，智谱也上市了，月之暗面靠Kimi K3撑着，阶跃星辰突然杀出来个Step 5。最惨的是百川和零一，基本上没什么声音了。
> *"China's Six Little Tigers are diverging dramatically. MiniMax IPO'd, Zhipu IPO'd, Moonshot is riding on Kimi K3, and now StepFun suddenly drops Step 5. The sad ones are Baichuan and 01.AI — they've basically gone silent."*

## The Bottom Line

StepFun's Step 5 Preview is more than a impressive benchmark run — it's a validation of a thesis that China's AI industry has been testing for three years: that **architectural efficiency can substitute for raw compute scale**, and that the winning strategy in an era of GPU scarcity isn't building the biggest model but the smartest one.

The 600B-parameter model that punches at the weight class of 2.8-trillion-parameter giants, at one-fifth the cost and double the speed, isn't just a technical achievement. It's a business model. StepFun has bet that the future of AI belongs not to the labs with the most GPUs, but to the labs that extract the most intelligence per FLOP — and per dollar.

With a $10 billion valuation, a Hong Kong IPO on the horizon, and one of the largest open-source releases in history scheduled for October 15, StepFun has transformed from China's quietest AI tiger into one of its loudest contenders. The step function, it turns out, was aptly named.
