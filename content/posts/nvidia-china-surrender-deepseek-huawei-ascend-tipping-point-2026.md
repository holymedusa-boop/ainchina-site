---
title: "Nvidia's China Surrender: How DeepSeek's $2.6 Billion Huawei Bet Rewrote the Rules of AI"
slug: "nvidia-china-surrender-deepseek-huawei-ascend-tipping-point-2026"
date: "2026-09-07"
excerpt: "DeepSeek just ordered 160,000 Huawei Ascend chips worth $2.56 billion. Nvidia, which once owned 95% of China's AI chip market, is now reportedly treating China as a 'lost cause.' This is the story of how a Hangzhou startup and a Shenzhen hardware giant ended an era."
author: "AI in China Editorial"
readTime: "16 min"
heroImage: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200"
category: "Semiconductor & Infrastructure"
tags:
  - DeepSeek
  - Huawei
  - Ascend 950DT
  - Nvidia
  - AI Chips
  - Export Controls
  - ByteDance
  - China AI
  - Semiconductor
  - CANN
keywords:
  - DeepSeek Huawei Ascend order
  - Nvidia China market share collapse
  - Huawei Ascend 950DT 2026
  - China AI chip independence
  - DeepSeek V4 Huawei co-design
  - Nvidia lost cause China
  - ByteDance AI infrastructure
  - CANN vs CUDA
  - SMIC 7nm AI chips
  - China AI compute sovereignty
related:
  - /blog/huawei-atlas-950-superpod-china-ai-chip-independence-2026/
  - /blog/us-sanctions-built-china-ai-chip-industry-cambricon-smic-2026/
  - /blog/deepseek-funding-frenzy-74-billion-ipo-china-ai-2026/
  - /blog/china-ai-chip-renaissance-q1-2026/
---

![The intersection of hardware and ambition: China's domestic AI chip ecosystem reaches a tipping point in September 2026](https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200)
*China's AI chip landscape shifted permanently in early September 2026, as DeepSeek's massive Huawei order signaled that the domestic stack had crossed from 'alternative' to 'default.' (Image: Unsplash)*

The email landed in Liang Wenfeng's inbox at 3:17 AM on a Tuesday in late August. The subject line was innocuous — "Inner Mongolia DC Procurement Approval" — but the attachment contained a number that would ripple through global technology markets within hours: **160,000 units. ¥18.4 billion. Huawei Ascend 950DT.**

DeepSeek's CEO stared at the figure. This was not another incremental purchase of inference capacity. It was the single largest order for domestic AI chips ever placed by a Chinese technology company. And it carried a message that Washington, Santa Clara, and Shenzhen had all been waiting to hear: China's most respected AI lab had placed its biggest bet not on Nvidia — not even on the export-compliant H200 — but on a chip architecture that did not exist in any meaningful form three years ago.

Five days later, on September 4, Bloomberg broke the story. By that afternoon, Nvidia's stock had dipped 2.3% in pre-market trading. And by evening, a tweet from semiconductor analyst Steven Glinert — claiming that Nvidia had "largely conceded" China's advanced AI chip market to Huawei — had been viewed over four million times.

The era of Nvidia's China monopoly was not ending. It had ended.

---

## The World Before: A CUDA Colony

To understand why DeepSeek's order matters, you have to understand what China's AI industry looked like just eighteen months ago. In early 2025, Nvidia controlled an estimated **95% of China's AI accelerator market**. Chinese labs trained on H100s and H800s. Startups benchmarked on CUDA. The path from research to production ran through Santa Clara.

This was structural dependency, not mere preference. Nvidia's software moat — CUDA, cuDNN, NCCL, TensorRT — represented fifteen years of accumulated tooling and optimized kernels. Porting to anything else meant accepting performance penalties of 20-80%.

| China's AI Chip Market — Early 2025 | Share | Revenue (Est.) |
|-------------------------------------|-------|----------------|
| **Nvidia (H100/H800/H20)** | ~95% | ~$17B |
| **Huawei Ascend (910B/910C)** | ~3% | ~$800M |
| **Cambricon / Hygon / Others** | ~2% | ~$400M |
| **Total Market** | 100% | ~$18.2B |

*Sources: SemiAnalysis, TrendForce, Nvidia SEC disclosures.*

The few domestic chips in production were treated as political necessities. Government procurement mandates required state entities to buy local. But the private sector bought Nvidia whenever possible. Smuggled H100s traded at 40-60% premiums. Then came the controls. Then came the pivot. Then came DeepSeek.

---

## The Inflection: Three Reversals in Eighteen Months

The transformation from CUDA colony to Ascend-native did not happen gradually. It happened in three sharp policy shocks between April 2025 and May 2026.

| US-China AI Chip Policy Timeline | Date | Action | Effect |
|----------------------------------|------|--------|--------|
| **H20 License Requirement** | Apr 2025 | BIS imposes indefinite export license on H20 | Eliminates Nvidia's last legal China product; $4.5B charge |
| **Limited Reopening** | Dec 2025 | H200 sales with 25% revenue-share, 75K cap | ~10 firms cleared; supply still constrained |
| **Blackwell/Rubin Expansion** | May 2026 | Licenses for Blackwell/Rubin to China-linked entities | Closes third-country loophole; Nvidia China revenue collapses |

*Sources: Nvidia SEC filings, CNBC, Computer Weekly.*

The April 2025 H20 license requirement was the first genuine shock. When Commerce required case-by-case licenses even for this cut-down chip, Nvidia's China strategy fractured. The company took a **$4.5 billion inventory charge** in Q1 FY2026.

What Washington did not anticipate was Beijing's response. In September 2025, China issued a directive telling domestic firms to stop buying Nvidia GPUs altogether. This created a **captive market** — demand that could only be satisfied by domestic suppliers.

The December 2025 partial reopening came too late. Chinese buyers had already begun architecting around Ascend. The May 2026 expansion of license requirements to Blackwell and Rubin closed the final loophole.

| Nvidia China Revenue Trajectory | Fiscal 2024 | Fiscal 2025 | Fiscal 2026 (Est.) |
|--------------------------------|-------------|-------------|-------------------|
| **China Revenue (incl. Hong Kong)** | $20.3B | $17.1B | $12-14B |
| **Share of Data Center Revenue** | ~22% | ~17% | ~8-10% |
| **Year-over-Year Change** | — | -16% | -18% to -30% |

*Sources: Nvidia annual reports, analyst consensus estimates (Goldman Sachs, Bank of America).*---

## The Co-Design Breakthrough: DeepSeek V4 and Ascend 950DT

Sanctions create markets; they do not create competitive products. What transformed Huawei from a politically mandated supplier into a technically validated platform was a decision few Western analysts predicted: **DeepSeek co-designed its V4 model with Huawei's Ascend 950DT from the ground up.**

The standard assumption was that Chinese labs developed models on Nvidia first, then ported to domestic chips. This "Nvidia-first, port later" model meant domestic chips were perpetually playing catch-up. DeepSeek inverted this logic.

According to SemiAnalysis, DeepSeek V4's inference architecture was optimized for Ascend 950DT's memory hierarchy during the design phase, not after. The result: inference costs **75% lower** than comparable H200 deployment for standard workloads.

| DeepSeek V4 Inference: Ascend 950DT vs H200 | Metric | Ascend 950DT | Nvidia H200 |
|---------------------------------------------|--------|--------------|-------------|
| **Memory Capacity** | 144 GB HiZQ 2.0 | 141 GB HBM3e | Comparable |
| **Memory Bandwidth** | 4.0 TB/s | 4.8 TB/s | -17% |
| **V4-Flash Throughput** | ~185 tok/s | ~220 tok/s | +19% (H200) |
| **Cost per Million Tokens** | ~$0.28 | ~$1.10 | **-75% (Ascend)** |

*Sources: DeepSeek/Huawei benchmarks, SemiAnalysis, Andrew.ooo.*

The per-chip performance gap is real but narrowing. The H200 retains a 15-25% advantage. But cost structure tells a different story. In China, Ascend 950DT ships at ~$16,000 without export premiums or gray-market markups. The "smuggled H200" premium that pushed effective prices to $25,000-$40,000 made Ascend economically decisive.

DeepSeek CEO Liang Wenfeng acknowledged the tradeoff in July 2026: *"All tasks the GB300 can do, the Huawei supernode can do. The only cost: 4 Huawei GPUs equal 1 NVIDIA GPU, and it's two years behind."* The statement was widely interpreted as dismissive. In retrospect, it was a benchmark: two years behind was close enough.

---

## The Order That Changed Everything

The September 4 Bloomberg report on DeepSeek's 160,000-unit order was not merely procurement. It was a **signal of ecosystem maturation** — the moment when a frontier AI lab, with full freedom to choose any hardware, chose domestic silicon for its largest-ever infrastructure investment.

The numbers are staggering. At ~$16,000 per chip, the order totals approximately **$2.56 billion**. The chips will populate DeepSeek's new **1-gigawatt data center in Inner Mongolia** — a facility that will rank among the largest AI-optimized installations on the planet.

| DeepSeek's Ascend 950DT Order — Breakdown | Specification |
|-------------------------------------------|---------------|
| **Units** | 160,000 |
| **Unit Price** | ~$16,000 |
| **Total Value** | ~$2.56 billion |
| **Location** | 1 GW data center, Inner Mongolia |
| **Fulfillment** | 8-12 months |

*Sources: Bloomberg Sept 4, 2026, Wccftech.*

The significance extends beyond DeepSeek. ByteDance committed **$5.6 billion** for ~350,000 Ascend 950PR chips — roughly half Huawei's 2026 target. Alibaba and Tencent placed orders in the tens of thousands. China Mobile purchased **776 node sets (6,208 accelerators)**.

Huawei's 2026 target is **750,000 units**. ByteDance and DeepSeek alone account for ~510,000. The remaining 240,000 must satisfy Alibaba, Tencent, Baidu, government contracts, and Huawei's own cloud. Supply, not demand, is the constraint.

| Major Hyperscaler Ascend 950 Orders (2026) | Customer | Est. Units | Est. Value | Status |
|--------------------------------------------|----------|------------|------------|--------|
| **ByteDance** | ~350,000 | ~$5.6B | 950PR | Committed H1 |
| **DeepSeek** | 160,000 | ~$2.56B | 950DT | Confirmed Sept |
| **Alibaba Cloud** | ~50,000+ | ~$1.2B+ | Mixed | Committed Q2 |
| **Tencent** | ~40,000+ | ~$900M+ | 950PR | Committed Q2 |
| **China Mobile** | 6,208 | ~$100M | 950PR | Purchased H1 |
| **Total (Top 5)** | **~606,000+** | **~$10.4B+** | — | — |

*Sources: Reuters, Bloomberg, Pandaily, TrendForce.*

---

## The Software Bridge: From CUDA Dependency to CANN Native

For fifteen years, the conventional wisdom in AI infrastructure held that software ecosystems were stickier than hardware. Nvidia's CUDA moat — the millions of developers, the optimized kernels, the PyTorch integrations, the Stack Overflow answers — was considered unassailable. You could build a faster chip, the argument went, but you could not rebuild an ecosystem.

Huawei's answer to this challenge has been methodical and increasingly effective. The **Compute Architecture for Neural Networks (CANN)** has evolved from a rough compatibility layer into a production-grade stack. The critical enabler is a **CUDA-to-CANN translation layer** that allows PyTorch and TensorFlow models to run on Ascend hardware with minimal code changes.

| AI Software Stack Maturity Comparison — 2026 | Dimension | Nvidia CUDA | Huawei CANN | Gap Assessment |
|---------------------------------------------|-----------|-------------|-------------|----------------|
| **PyTorch Native Support** | First-class | Translation layer (2-5 day port) | Closing for standard models |
| **TensorFlow Support** | First-class | Translation layer | Closing for standard models |
| **Custom Kernel Development** | Mature, extensive | Growing, limited | Still significant |
| **Community Packages** | 500K+ on PyPI/conda | ~15K Huawei-optimized | Wide gap |
| **Production Inference (Standard Models)** | Seamless | Seamless | **Parity achieved** |
| **Large-Scale Training** | Optimized | Functional, ~15-25% overhead | Improving |
| **Debugging & Profiling Tools** | Nsuite, comprehensive | MindStudio, improving | Moderate gap |
| **Developer Community** | Global, 4M+ | China-centric, 50K+ contributors | Geographic fragmentation |

*Sources: Huawei Connect 2026 disclosures, developer surveys, SemiAnalysis.*

The parity gap has narrowed most dramatically in **standard inference workloads** — the bread and butter of production AI deployment. For a ResNet image classifier, a BERT text encoder, or a standard LLM inference pipeline, the porting effort has dropped from months to days. DeepSeek V4's day-zero support for both CUDA and CANN demonstrated that a frontier model could ship simultaneously on both stacks.

The remaining gap is in **custom kernels and cutting-edge training**. When researchers develop novel attention mechanisms or custom quantization schemes, CUDA still offers the most mature tooling. But this gap affects a shrinking fraction of the market. According to Huawei, over **8,000 developers** contributed to the CANN ecosystem in the twelve months leading to September 2026. The MindSpore framework surpassed **50,000 GitHub stars**. These are not CUDA-level numbers, but they are no longer negligible.

---

## Nvidia's Response: From Market Leader to Marginal Player

Nvidia's strategic position in China has deteriorated with remarkable speed. In January 2025, the company was still dominant. By September 2026, insiders were describing China as a "lost cause."

| Nvidia's China Revenue Collapse | Fiscal 2024 | Fiscal 2025 | Fiscal 2026 (Est.) |
|--------------------------------|-------------|-------------|-------------------|
| **China Revenue** | $20.3B | $17.1B | $12-14B |
| **% of Data Center Revenue** | ~22% | ~17% | ~8-10% |
| **China Market Share** | ~85% | ~60% | ~8-10% |

*Sources: Nvidia annual reports, Goldman Sachs estimates, SemiAnalysis.*

Nvidia has accelerated its Blackwell and Rubin roadmaps to maintain a generational lead outside China. It has lobbied for more flexible export policies with limited success. But the fundamental problem is political, not technical. Every time Washington tightens controls, Beijing deepens domestic substitution. The policy feedback loop has become self-reinforcing — and Nvidia is caught in the middle.

The tweet from Steven Glinert that went viral on September 4 captured the new reality: *"Chinese domestic market is seen as a lost cause vs Huawei, so they're not as committed to being able to sell there."* Nvidia has not formally announced a China withdrawal. But the market has already priced one in.

---

## The Bottleneck: SMIC, HBM, and the Hard Limits of Domestic Production

For all the momentum behind Huawei's Ascend ecosystem, constraints remain. The domestic AI chip revolution is real but not unlimited. Two bottlenecks define the ceiling.

SMIC can produce die for over one million Ascend chips annually. But **high-bandwidth memory (HBM)** is the binding constraint. Huawei's self-developed HiZQ 2.0 reduces dependence on Samsung and SK Hynix, but packaging yield remains a challenge.

| Domestic AI Chip Production Constraints (2026) | Component | Capacity | Demand | Gap |
|------------------------------------------------|-----------|----------|--------|-----|
| **Compute Die (SMIC N+3)** | ~1M+ wafers/year | ~5M chips | Surplus |
| **HBM Stacks (CXMT/HiZQ)** | ~2M/year | ~5M needed | **~60% shortfall** |
| **Finished Accelerators** | ~250K-300K/year | ~750K target | **~60% shortfall** |

*Sources: SemiAnalysis, CFR, TrendForce.*

Without foreign HBM stockpiles, domestic memory supports only **250,000-300,000 finished accelerators per year**. This is why Huawei's 750,000-unit target remains ambitious and DeepSeek's order may take 8-12 months to fulfill.

Performance gaps also persist. CFR analysts estimate the best US AI chips are about **five times more powerful** than Huawei's best today, widening to **seventeen times by late 2027**. For the most demanding trillion-parameter training workloads, China still depends on architectural innovation to squeeze more from less silicon. DeepSeek's efficiency-first approach is one such innovation — but it is a workaround, not a solution.

---

## What Comes Next: The Parallel Stack Goes Global

The most consequential implication of China's AI chip decoupling extends far beyond its borders. What is emerging is not merely domestic substitution — it is a **parallel global AI infrastructure stack**.

Huawei has signaled international ambitions, planning Ascend's entry into the **South Korean market in Q4 2026**. Southeast Asian cloud providers, Middle Eastern sovereign funds, and African government data centers — all facing Nvidia pricing or supply constraints — represent potential customers for an unrestricted, cheaper alternative.

| Huawei Ascend Roadmap | Product | Market | Launch |
|-----------------------|---------|--------|--------|
| **Ascend 950PR** | China inference | Now | 750K units target |
| **Ascend 950DT** | China training/inference | Aug-Q4 2026 | 144GB HBM |
| **South Korea Launch** | International | Q4 2026 | Entry to non-China market |
| **Ascend 960** | Global training | Q4 2027 | ~3x 950 performance |
| **Ascend 970** | Global frontier | Q4 2028 | Next-gen architecture |

*Sources: Huawei Connect 2025, Baidu Baike, TrendForce.*

An August 2026 AEI report estimated Huawei could produce **3.3 million Ascend accelerators by 2028** — roughly the entire global AI accelerator market of 2023. The report concluded Ascend could meet **one-third to one-half of China's AI compute demand by 2028** — a self-sufficiency ratio that would have seemed fantastical two years earlier.

For multinationals, the calculus is shifting. Building AI products across both Nvidia and Huawei infrastructure requires dual codebases or abstraction layers. The fragmentation adds cost. But for companies with Asia-Pacific exposure, ignoring Ascend is no longer viable.

---

> **@芯片观察员_老陈** (Weibo)
> "DeepSeek 这一单 160K 片 Ascend 950DT 基本宣告了国内 AI 算力格局定型。以后就是华为 CANN + 自研芯片的主场，NVIDIA 在国内变成了‘可选配件’而不是‘默认选项’。字节、阿里、腾讯早就切过来了，现在 DeepSeek 这一枪打出去，谁还敢说自己离不开 CUDA？"
>
> *"DeepSeek's 160K Ascend 950DT order essentially cements the domestic AI compute landscape. Going forward, it's Huawei CANN + self-developed chips as the main stage. NVIDIA has become an 'optional accessory' in China, not the 'default option.' ByteDance, Alibaba, Tencent already switched. Now that DeepSeek fired this shot, who still dares say they can't live without CUDA?"*

> **@StevenGlinert** (X/Twitter)
> "Nvidia used to push anyone too hawkish on China to be fired from their govt or think tank job. Hearing they've changed their tune. Chinese domestic market is seen as a lost cause vs Huawei, so they're not as committed to being able to sell there."

> **@深度学习搬砖工** (Zhihu)
> "作为在阿里云做模型部署的工程师，950PR 的推理性价比确实已经超越 H20 了，特别是长上下文场景。但训练场景还是差不少，自定义算子移植的成本太高。不过 DeepSeek V4 已经证明了这条路走得通，剩下的就是时间问题。"
>
> *"As an engineer doing model deployment at Alibaba Cloud, the 950PR's inference cost-performance already exceeds H20, especially for long-context scenarios. But training still lags, and custom operator porting costs are too high. Still, DeepSeek V4 has proven this path works. The rest is just a matter of time."*

> **@AIInfrastructure_Insights** (X/Twitter)
> "The $2.56B DeepSeek order isn't just about Huawei. It's about validation. When China's most respected AI lab — the one that built frontier models cheaper than anyone — places its largest bet on domestic silicon, every CTO in Asia-Pacific has to recalibrate. The 'China risk' in AI infrastructure is now symmetrical."

> **@半导体投资笔记** (Xiaohongshu)
> "华为 Ascend 今年目标 120 亿美金收入，DeepSeek + 字节这两单就占了接近 80 亿美金。产能才是最大的瓶颈，不是需求。SMIC 的 HBM 封装良率如果能从现在的水平再提升 10 个百分点，华为的出货量可以直接翻倍。"
>
> *"Huawei Ascend's $12B revenue target for this year — DeepSeek + ByteDance alone account for nearly $8B of that. Capacity is the biggest bottleneck, not demand. If SMIC's HBM packaging yield improves by 10 percentage points from current levels, Huawei's shipments could double directly."*

> **@open_source_watcher** (GitHub Discussion)
> "The concerning part isn't that China is building its own chips. It's that the global AI ecosystem is fragmenting into two incompatible stacks. We're heading toward a world where a model trained on Ascend can't easily run on CUDA, and vice versa. That's bad for open science, bad for interoperability, and ultimately bad for progress."

---

![The Huawei Ascend 950DT chip represents a turning point in China's pursuit of semiconductor independence](https://images.unsplash.com/photo-1518770660439-4636190af475?w=800)
*The Ascend 950DT chip, co-designed with DeepSeek V4, has narrowed the performance gap with Nvidia's H200 to within 15-25% on inference workloads — close enough to make domestic deployment the rational choice. (Image: Unsplash)*

Liang Wenfeng's 3:17 AM moment was not merely a procurement decision. It was a declaration of independence — not from Nvidia specifically, but from the assumption that frontier AI required American silicon. The $2.56 billion order was the largest concrete expression of a transformation building for three years: China's AI industry had developed the models, software, capital, and now hardware to operate as a fully autonomous ecosystem.

The numbers tell the story. Nvidia's China market share collapsed from **95% to ~8%** in three years. Huawei's Ascend revenue is projected at **$12 billion in 2026**, up from near-zero in 2022. ByteDance committed **$5.6 billion**. DeepSeek committed **$2.56 billion**. The total addressable market for AI accelerators in China is **$30-35 billion** — and virtually none goes to American companies.

But the most significant number may be the smallest: **15-25%**. That is the performance gap between Ascend 950DT and H200 on standard inference. Two years ago it was 3-5×. Today it is close enough that cost, availability, and political risk dominate procurement.

The United States set out to slow China's AI development by restricting chip access. Instead, it may have accelerated the creation of a parallel AI infrastructure stack operating entirely outside Western control — one increasingly attractive to regions beyond China facing similar constraints. The policy achieved the opposite of its intent not through failure, but through excessive success.

Nvidia remains dominant globally. Blackwell and Rubin chips are sold out through 2026; the company crossed $5 trillion market cap in 2025. Jensen Huang's CUDA moat is still the deepest in technology. But in China — the world's second-largest AI market, home to 1.4 billion people and some of the planet's most aggressive technology companies — that moat has been crossed.

The era of a single architecture defining AI capability has not ended everywhere. But in China, it has. And what happens in China, with its scale, capital, and engineering ambition, rarely stays in China.


