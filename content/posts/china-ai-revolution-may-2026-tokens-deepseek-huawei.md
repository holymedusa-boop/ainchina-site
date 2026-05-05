---
title: "Zhihu (China's Quora)"
slug: "china-ai-revolution-may-2026-tokens-deepseek-huawei"
date: "May 4, 2026"
category: "AI Infrastructure"
readTime: "16 min read"
---

*Image: The intersection of AI and national technology sovereignty—credit: Unsplash*

## Executive Summary

On April 24, 2026, DeepSeek quietly did something no frontier AI lab had ever attempted: it released its flagship V4 model—1.6 trillion parameters, million-token context windows, performance rivaling Claude Opus 4.6—and made it run *first* on Huawei chips, not NVIDIA's. The NVIDIA CEO called it "a terrible result" for America.

Three weeks later, Stanford's 2026 AI Index dropped with an even more startling figure: the gap between the best American and Chinese AI models has narrowed to **2.7%**. Six companies—Anthropic, xAI, Google, OpenAI, Alibaba, and DeepSeek—now sit in the same Elo rating tier, a clustering so tight that performance differences are practically noise.

Meanwhile, China's AI token economy has reached a scale that defies comprehension. The country now processes **140 trillion tokens per day**—up from 100 billion in early 2024. That's a **1,400x increase in just over two years**. Cloud providers, overwhelmed by demand, have implemented price hikes ranging from 5% to 463%. Alibaba has reorganized its entire AI division into the "Alibaba Token Hub" (ATH), with CEO Eddie Wu declaring the company's mission: "Create tokens. Deliver tokens. Apply tokens."

The global AI arms race has also reached unprecedented financial scale. The world's six largest tech companies are on track to spend **over $700 billion in capital expenditures in 2026**, with roughly half directed toward AI infrastructure. ByteDance alone plans to invest approximately **160 billion yuan** (~$22 billion) in AI chips and data centers.

This is not a story about one company or one breakthrough. It's about a systemic shift in the global technology order—and it's happening faster than almost anyone predicted.

---

## Why This Matters: The 2.7% Gap

Stanford University's 2026 AI Index Report, released in late April, contained a single chart that sent shockwaves through Silicon Valley. Using an Elo rating system modeled on competitive chess, the researchers plotted the performance of the world's top AI models:

| Company | Model | Elo Rating | Tier |
|---------|-------|-----------|------|
| Anthropic | Claude Opus 4.6 | 1,503 | Top Tier |
| xAI | Grok 4 | 1,495 | Top Tier |
| Google | Gemini 3.1 Pro | 1,494 | Top Tier |
| OpenAI | GPT-5.5 | 1,481 | Top Tier |
| Alibaba | Qwen-VL Ultra | 1,449 | Top Tier |
| DeepSeek | DeepSeek V4-Pro | 1,424 | Top Tier |

*Source: Stanford 2026 AI Index Report, March 2026*

The gap between first place (Anthropic) and sixth place (DeepSeek) is just 79 Elo points. For context, in chess, a 100-point difference means the higher-rated player is expected to win roughly 64% of games. These six models are essentially interchangeable for most real-world tasks.

More remarkably, the report found that the performance gap between the best American and Chinese models had shrunk to **2.7%**—down from double-digit percentages just two years prior. The report noted: "Competition has shifted from raw performance to cost, reliability, and specialized domain performance."

This isn't a "catching up" story anymore. It's a "caught up" story. And in some dimensions—cost efficiency, open-source availability, and hardware independence—China has already moved ahead.

---

## DeepSeek V4: The Model That Broke CUDA

On April 24, 2026, DeepSeek released two versions of its V4 model: V4-Pro (1.6 trillion total parameters, 49 billion active) and V4-Flash (284 billion total, 13 billion active). Both support **1 million token context windows** as standard—a feature that previously required specialized, expensive configurations from closed-source providers.

### V4 Performance Benchmarks

| Benchmark | DeepSeek V4-Pro | Claude Opus 4.6 | GPT-5.4 | Status |
|-----------|-----------------|-----------------|---------|--------|
| Codeforces Rating | 3,206 | ~3,200 | ~3,100 | Comparable |
| SWE-bench (Software Engineering) | 80.6% | 81.2% | 79.8% | Near-parity |
| Agentic Coding | Class-leading | Strong | Strong | Open-source #1 |
| Math/STEM | Top-tier | Top-tier | Top-tier | Equivalent |
| 1M Context Efficiency | 27% of V3.2 cost | N/A | N/A | Best-in-class |

*Source: DeepSeek technical report, April 2026; third-party evaluations*

But the performance numbers, impressive as they are, tell only half the story. The real earthquake was in the hardware layer.

### From CUDA to CANN: The Architecture Shift

DeepSeek V4 was developed and optimized for Huawei's **Ascend 950PR** chips using Huawei's **CANN** (Compute Architecture for Neural Networks) framework—not NVIDIA's CUDA ecosystem. This represents the first time a frontier-level AI model was built natively on a non-NVIDIA stack.

To achieve this, DeepSeek and Huawei jointly rewrote approximately **400,000 core computational operators**, migrating the entire codebase from CUDA to CANN Next. Code compatibility reached **95%**, with a one-click migration tool reducing what used to be month-long porting cycles to hours.

| Hardware | FP4 Compute | HBM Capacity | HBM Bandwidth | V4 Inference Performance |
|----------|-------------|--------------|---------------|------------------------|
| NVIDIA H200 | Baseline | 141 GB | 4.8 TB/s | Baseline |
| NVIDIA H20 (China-special) | ~30% of H200 | 96 GB | 4.0 TB/s | 1.0x (baseline) |
| **Huawei Ascend 950PR** | **1.56-2.0 PFLOPS** | **112-128 GB** | **1.4-1.6 TB/s** | **2.87x vs H20** |
| Huawei Ascend 950 SuperNode | Clustered | Clustered | Clustered | Production-ready |

*Source: Huawei technical specifications; DeepSeek performance benchmarks, April 2026*

The numbers are striking. The Ascend 950PR costs roughly **one-third to one-quarter** of an H200 while delivering **2.87x the inference performance** compared to NVIDIA's China-special H20 chip. In FP4 low-precision inference scenarios—where most production AI workloads actually run—the Ascend's specialized SIMD/SIMT architecture outperforms general-purpose GPUs.

---

## The Token Economy: 140 Trillion and Counting

If DeepSeek V4 represents China's AI "brain," the token economy is its circulatory system. And that system is now processing volumes that would have seemed absurd two years ago.

### China's Daily Token Volume Growth

| Period | Daily Tokens | Growth Rate | Key Driver |
|--------|-------------|-------------|------------|
| Q1 2024 | 100 billion | — | Early LLM adoption |
| Q4 2025 | 100 trillion | 1,000x in ~2 years | Enterprise AI integration |
| March 2026 | 140 trillion | +40% in 3 months | AI Agent explosion |
| Projected 2027 | 500+ trillion | 250%+ YoY | Agentic workflows mainstream |

*Source: National Data Administration of China, March 2026; Morgan Stanley projections*

The jump from 100 trillion to 140 trillion in just three months (December 2025 to March 2026) coincides precisely with the rise of AI agents—autonomous AI systems that chain multiple tool calls, reasoning steps, and API interactions to complete complex tasks. A single agentic workflow can consume **10-50x more tokens** than a simple chat interaction.

This surge has created what industry observers are calling the first "AI inflation crisis."

### Cloud Provider Price Adjustments (March-April 2026)

| Provider | Service | Price Change | Effective Date |
|----------|---------|--------------|----------------|
| Tencent Cloud | Hunyan model tokens | +463% | March 13, 2026 |
| Alibaba Cloud | AI compute (various) | +5% to +34% | April 18, 2026 |
| Baidu Cloud | AI compute services | +5% to +30% | April 18, 2026 |
| Zhipu AI | GLM-5 API (cumulative) | +83% | Feb-Mar 2026 |
| AWS China | AI instances | +15% | March 2026 |
| Google Cloud | AI/ML services | +10% to +25% | Q1 2026 |

*Source: Public announcements from respective cloud providers, March-April 2026*

These aren't isolated decisions. They're the market's response to a fundamental supply-demand imbalance. As one Alibaba engineer put it on Zhihu: "For two years we gave tokens away like water. Now the well is running dry."

---

## The $700 Billion Question: Global CapEx Arms Race

The token explosion isn't happening in a vacuum. It's being fueled by the largest capital investment cycle in technology history.

### 2026 Capital Expenditure Projections (Major Tech Companies)

| Company | 2026 CapEx (USD) | AI-Directed Share | Key Investments |
|---------|------------------|-------------------|-----------------|
| Microsoft | ~$80 billion | ~60% | Azure AI, OpenAI partnership |
| Google/Alphabet | ~$75 billion | ~50% | TPU clusters, Gemini training |
| Amazon | ~$65 billion | ~40% | AWS AI infrastructure |
| Meta | ~$45 billion | ~70% | Llama training, AI glasses |
| ByteDance | ~$22 billion | ~50% | AI chips, data centers |
| Alibaba | ~$15 billion | ~60% | Token Hub, Ascend clusters |
| Tencent | ~$11 billion | ~50% | Hunyan training, WeChat AI |
| **Total (Top 6 Global)** | **~$700B+** | **~50% avg** | Data centers, chips, power |

*Source: Company earnings calls and guidance; 21st Century Business Herald; SemiAnalysis*

ByteDance's planned 2026 capital expenditure of approximately **160 billion yuan** (~$22 billion), with roughly half earmarked for AI chips and data centers, places it in the same league as American hyperscalers. The company has reportedly stockpiled **480,000 NVIDIA H20 GPUs** alone, in addition to hundreds of thousands of Huawei Ascend chips.

Tencent and Alibaba have also placed orders for "hundreds of thousands" of Ascend 950PR chips, according to multiple sources. The scale of China's domestic chip demand is creating a self-reinforcing cycle: more chips → more models → more tokens → more revenue → more chips.

---

## Kimi K3: The 2.5 Trillion Parameter Surprise

While DeepSeek dominated April's headlines, Moonshot AI (maker of the Kimi chatbot) announced its own ambitious roadmap in late April. **Kimi K3**, scheduled for Q3 2026 release, will feature **2.5 trillion parameters**—making it the largest announced model from any Chinese lab.

The announcement signals that China's AI frontier isn't a one-horse race. Multiple labs are pushing parameter counts and context windows to extremes:

| Model | Parameters | Context Window | Status | Hardware |
|-------|-----------|----------------|--------|----------|
| DeepSeek V4-Pro | 1.6T (49B active) | 1M tokens | Released Apr 2026 | Huawei Ascend / NVIDIA |
| Kimi K3 | 2.5T (planned) | TBD | Q3 2026 | TBD |
| Alibaba Qwen-VL Ultra | ~1T | 128K | Released | Multi-platform |
| Zhipu GLM-5-Turbo | ~500B | 256K | Released | Multi-platform |
| MiniMax M2.7 | ~800B | 200K | Released | Multi-platform |

*Source: Company announcements and technical reports, April 2026*

Moonshot AI, valued at **$10 billion** after a January 2026 funding round led by Alibaba and HongShan, is reportedly considering a Hong Kong IPO. The company has already demonstrated significant global reach: when Cursor (the popular AI coding tool) launched its Composer 2 feature, eagle-eyed developers discovered it was built on Kimi K2.5. Cursor's co-founder later acknowledged it was "a miss to not mention the Kimi base...from the start."

---

## Embodied Intelligence: When AI Meets the Physical World

China's AI surge isn't limited to language models and cloud APIs. The physical world is becoming the next frontier.

On May 1, 2026, Hangzhou—a city of 12 million people and headquarters to Alibaba—implemented the **nation's first local regulation promoting embodied intelligent robots**. The city has already aggregated over **700 robotics companies**, with the embodied intelligence cluster generating **106.8 billion yuan** (~$15 billion) in output value in 2025.

The talent market is responding with equal intensity. According to recruitment platform data, the average salary for humanoid robot positions has reached **406,100 yuan annually** (~$56,000)—a **215% year-over-year increase**. Positions requiring embodied intelligence expertise command premiums of 40-60% above standard AI engineering roles.

| Sector | Average Salary (Annual, CNY) | YoY Change | Top Cities |
|--------|------------------------------|------------|------------|
| Humanoid Robotics | 406,100 | +215% | Shenzhen, Beijing, Hangzhou |
| General AI Engineering | 285,000 | +45% | Beijing, Shanghai, Shenzhen |
| AI Product Management | 320,000 | +38% | Beijing, Shanghai, Hangzhou |
| Autonomous Driving | 380,000 | +52% | Beijing, Shenzhen, Guangzhou |
| Traditional Software Engineering | 185,000 | +8% | Nationwide |

*Source: Chinese recruitment platform aggregate data, Q1 2026*

The Ministry of Industry and Information Technology's **"Model-Data Resonance"** initiative, launched in early 2026, targets **20 key manufacturing industries** for AI integration. This isn't theoretical policy—companies like Unitree Robotics (filed for a 4.2 billion yuan IPO), Agibot, and UBTech are already shipping humanoid robots to factories and warehouses.

---

## What the World Is Saying: Social Media Reactions

**Zhihu (China's Quora)** — *Top comment, 4,200 upvotes*
> "两年token涨了1400倍，这不叫增长，这叫核爆。很多人还没意识到，我们已经站在AI时代的工业革命门口了。" ("A 1,400x increase in tokens in two years isn't growth—it's a nuclear explosion. Many people haven't realized we're standing at the door of the Industrial Revolution of the AI era.")

**X (Twitter)** — *Tech analyst, 12,000 likes*
> "DeepSeek V4 on Huawei chips is the moment NVIDIA investors should have been dreading. Not because the chip is better, but because the *default* is changing. CUDA's moat was never about performance—it was about being the obvious choice."

**Xiaohongshu (Little Red Book)** — *Tech influencer, 8,500 likes*
> "云厂商涨价说明供需真的失衡了。我觉得这标志着AI从烧钱换增长正式进入商业变现期。早该如此。" ("Cloud providers raising prices means supply and demand is truly out of balance. I think this marks AI's transition from 'burn money for growth' to actual commercial monetization. About time.")

**GitHub Discussion** — *Open-source developer, 340 stars*
> "DeepSeek V4-Pro is now my default for any codebase over 100k lines. The 1M context window means I can throw an entire project at it and ask 'find the bug.' Previously this required Claude Opus at 10x the cost."

**Douban (Chinese community platform)** — *Comment, 2,100 upvotes*
> "黄仁勋说'灾难性结果'的时候，我原以为他在夸张。现在看DeepSeek+华为的组合，这确实可能重构整个技术标准。开源+国产芯片，这套组合拳太强了。" ("When Jensen Huang said 'disastrous result,' I thought he was exaggerating. Now looking at the DeepSeek + Huawei combination, this could genuinely restructure the entire technology standard. Open-source + domestic chips—this combination is too strong.")

**LinkedIn** — *Silicon Valley engineer, 6,700 reactions*
> "The 2.7% gap number from Stanford should terrify American AI labs. Not because China is 'catching up'—they're already there. The question is: what happens when they start setting the standards instead of following them?"

---

## The Great Decoupling: What Happens Next

The convergence of these trends—DeepSeek's hardware independence, the token economy's explosive growth, and the narrowing performance gap—points toward a bifurcation that many analysts are now calling the **"Great AI Decoupling."**

### Two Parallel Ecosystems Emerging

| Dimension | American Stack | Chinese Stack |
|-----------|---------------|---------------|
| Primary Hardware | NVIDIA (CUDA) | Huawei Ascend (CANN) + others |
| Dominant Models | GPT, Claude, Gemini | DeepSeek, Kimi, Qwen, GLM |
| Cost Structure | Higher (IP premiums) | Lower (open-source + domestic HW) |
| Key Advantage | First-mover ecosystem | Scale + manufacturing + energy |
| Energy Cost | Higher ($0.10-0.15/kWh) | Lower ($0.03-0.05/kWh in some regions) |
| Export Control Risk | Low | Moderate (self-sanctioning) |

*Source: Analysis based on public data, April 2026*

NVIDIA CEO Jensen Huang has been remarkably candid about this risk. In an April 15 podcast interview with Dwarkesh Patel, he warned that restricting China would backfire: "China has ample energy, a complete chip supply chain, and massive AI research talent. Forcing them to build their own complete ecosystem is not a wise choice."

His specific fear is not that China will build a good model—it's that they will build a good model that is *optimized for non-American hardware*. As Huang put it: "If it's optimized for [Huawei's] architecture, that puts us at a disadvantage."

This is already happening. DeepSeek V4's open-source nature means its Huawei-optimized codebase is available to any developer worldwide. If Chinese hardware continues to improve while costing 3-4x less, the rational choice for price-sensitive developers—especially in emerging markets—becomes obvious.

---

## The $200B Question: DeepSeek's Valuation and Strategic Shift

DeepSeek's April 2026 pivot wasn't purely technical. The company also initiated its **first-ever external funding round**, seeking capital at a valuation that rapidly escalated from **$10 billion** to **$20 billion** to reports of **$200-300 billion** as Tencent and Alibaba entered negotiations.

This is a dramatic reversal for a company that had famously refused outside capital since its founding in 2023, surviving entirely on profits from its parent quantitative trading firm, High-Flyer Quant.

### What Changed?

| Factor | 2023-2025 | 2026 |
|--------|-----------|------|
| Funding Strategy | Self-funded (High-Flyer profits) | External funding (Tencent, Alibaba rumored) |
| Hardware Dependency | NVIDIA CUDA | Huawei CANN + multi-platform |
| Talent Situation | Stable, mission-driven | Poaching by ByteDance, Xiaomi (reported) |
| Model Scale | V3/R1 era (~100B params) | V4 era (1.6T params) |
| Capital Need | Moderate (training costs) | Massive (infrastructure + research) |

*Source: Company filings; media reports; analyst estimates*

The funding need reflects simple physics: training a 1.6 trillion parameter model requires infrastructure at a scale that strains even the deepest private pockets. More importantly, the shift to Huawei chips requires building out a completely new supply chain and optimization team—a multi-billion-dollar undertaking.

Industry observers note that if the rumored Tencent-Alibaba co-investment materializes, it would create an unprecedented alliance between China's three most significant AI players. Whether this leads to collaboration or competition remains to be seen.

---

## Future Outlook: Milestones to Watch

| Timeline | Event | Significance |
|----------|-------|------------|
| Q2 2026 | Huawei Ascend 950 SuperNode mass deployment | Production-scale inference on domestic chips |
| Q3 2026 | Kimi K3 (2.5T params) release | Largest announced Chinese model |
| 2026 | MiniMax/HK IPO sustained performance | Validates AI lab business model globally |
| 2026-2027 | DeepSeek V4 price cuts on Ascend | "Cost collapse" scenario for inference |
| 2027 | Projected 500T+ daily tokens in China | Agentic workflows become mainstream |
| 2027+ | Potential "Model-Data Resonance" global expansion | Chinese AI standards in manufacturing |

*Source: Company guidance; analyst projections; policy documents*

The most consequential near-term milestone is the mass deployment of Huawei's Ascend 950 SuperNode systems. DeepSeek has already stated that V4-Pro's current pricing reflects compute scarcity and that costs will "drop significantly" once Ascend supernodes are widely available in the second half of 2026.

If that cost collapse materializes—bringing frontier-level inference to prices comparable with current mid-tier models—the competitive dynamics of the global AI market will shift dramatically. Developers in India, Southeast Asia, Africa, and Latin America—markets historically price-sensitive and increasingly important—may find the Chinese stack not just competitive but irresistible.

---

## Conclusion: A New Chapter

In January 2025, DeepSeek's R1 model surprised the world by matching OpenAI's best at a fraction of the cost. Fifteen months later, the surprise has become a pattern. The question is no longer whether Chinese AI can compete. It's whether the global technology industry is prepared for a world where the best AI models are trained on Chinese chips, distributed through Chinese clouds, and priced at fractions of their American competitors.

The 2.7% gap is effectively zero. The 140 trillion tokens are just the beginning. And the $700 billion being poured into global AI infrastructure will determine not just who leads, but whose standards the world follows.

Stanford's report put it best: "The top AI tier has become so densely clustered that differences are increasingly about cost and application fit rather than raw capability." In that world—the world we're entering now—China's advantages in manufacturing scale, energy infrastructure, and open-source distribution may matter more than who had the first-mover advantage.

The race isn't over. But the track has fundamentally changed.

---

## Related Articles

- [The Great AI Compute Crunch: How China's AI Boom Is Running Out of Tokens](/blog/ai-compute-crunch-china-token-crisis-2026)
- [DeepSeek Breaks Its Vow: Inside the $3B Funding Round](/blog/deepseek-first-funding-20-billion-valuation)
- [DeepSeek V4: The Million-Token API Update](/blog/deepseek-v4-million-token-china-ai-sovereignty)
- [MiniMax Files for IPO: 212 Million Users](/blog/minimax-ipo-212-million-users-ai-companion-empire)

---

*Disclaimer: This analysis is based on publicly available information and industry reports as of May 4, 2026. Investment and strategic decisions should not be made solely on the basis of this article. The AI landscape evolves rapidly; facts and figures may change.*
