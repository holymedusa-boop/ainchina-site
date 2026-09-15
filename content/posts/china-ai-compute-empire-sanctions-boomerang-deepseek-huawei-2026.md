---
title: "The Sanctions Boomerang: How Export Controls Forged China's Biggest AI Chip Buildout Ever"
description: "Washington set out to starve China's AI ambitions. Four years later, DeepSeek is ordering 160,000 Huawei chips, Enflame just completed the 'Five Tigers' IPO wave, and Beijing has committed $532 billion to a compute buildout with no parallel in history. The sanctions didn't just fail — they backfired."
keywords: ["China AI compute sovereignty", "DeepSeek Huawei Ascend 950DT", "MIIT 9800 EFLOPS plan", "China AI chip independence", "Enflame IPO STAR Market", "Huawei Ascend 950 specs", "Nvidia China market share collapse", "China national computing network", "AI infrastructure investment 2026", "US export controls unintended consequences"]
author: "AI in China Editorial"
date: "2026-09-15"
excerpt: "Washington set out to starve China's AI ambitions. Four years later, DeepSeek is ordering 160,000 Huawei chips, Enflame just completed the 'Five Tigers' IPO wave, and Beijing has committed $532 billion to a compute buildout with no parallel in history. The sanctions didn't just fail — they backfired."
slug: "china-ai-compute-empire-sanctions-boomerang-deepseek-huawei-2026"
image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=1200&q=80"
related: [
  "/blog/china-ai-compute-sovereignty-bytedance-huawei-chip-fortress-2026/",
  "/blog/china-ai-efficiency-engineering-more-with-less-2026/",
  "/blog/suiyuan-ipo-china-ai-chip-four-dragons-capital-market-2026/",
  "/blog/us-china-ai-safety-dialogue-deepseek-huawei-independence-2026/"
]
category: "AI Infrastructure"
readTime: "16 min"
wordCount: 3240
---

*Photo: Rows of server racks stretching into the distance at a Chinese intelligent computing center — the physical manifestation of a national strategy that export controls were supposed to prevent. Image: Unsplash*

---

In October 2022, the Biden administration introduced export controls that, in the words of one Commerce Department official, were designed to "cut off China's access to the silicon that powers artificial intelligence." The logic was straightforward: without Nvidia's H100 and A100 chips, Chinese AI labs would fall behind, starved of the compute that frontier models demand. NVIDIA CEO Jensen Huang initially downplayed the impact. "China is a small market for us," he said in late 2022, before the numbers proved him catastrophically wrong.

Four years later, the picture has inverted so completely that it reads like a cautionary tale in unintended consequences. On September 4, 2026, Reuters reported that DeepSeek — the Hangzhou lab whose R1 model triggered a $1.2 trillion global stock market rout in January 2025 — had placed an order for at least 160,000 of Huawei's new Ascend 950DT accelerators. The chips will power a gigawatt-scale data center in Inner Mongolia, one of the largest AI inference facilities ever conceived. Not a training cluster. Not a research sandbox. A production inference factory, purpose-built to serve AI to hundreds of millions of users.

That same week, China's Ministry of Industry and Information Technology published its 15th Five-Year Plan for the information and communications sector, committing 3.8 trillion yuan ($532 billion) to information infrastructure through 2030 and setting a national target of 9,800 EFLOPS of intelligent computing capacity — a 6.2× expansion from the 2025 baseline. And on September 11, Enflame Technology surged 188% on its Shanghai STAR Market debut, becoming the fifth and final member of China's "GPU Five Little Tigers" to go public and completing the largest coordinated wave of AI chip IPOs in any market, ever.

The conventional wisdom said export controls would kneecap China's AI compute. The data says they industrialized it.

## What Washington Believed

The original sanctions architecture rested on three assumptions, each reasonable at the time and each subsequently dismantled by events.

**Assumption one**: Without access to TSMC's advanced nodes, China could not produce competitive AI accelerators at scale. Huawei's Kirin chips, after all, had been reduced to 7nm-class manufacturing with abysmal yields. SMIC's most advanced process was two generations behind TSMC's 3nm frontier. How could Chinese fabs possibly produce chips that could substitute for Nvidia's H100?

**Assumption two**: Even if China built competitive silicon, it lacked the software ecosystem to make it useful. Nvidia's CUDA platform represented two decades of accumulated developer tooling, libraries, and optimization expertise. Huawei's CANN framework was a fraction of the maturity. Porting AI workloads would be so painful that Chinese labs would rather pay gray-market premiums for smuggled Nvidia chips.

**Assumption three**: The talent and know-how to design world-class GPUs resided predominantly in American and Taiwanese firms. Chinese chip design companies were years behind on architecture, interconnect, and memory integration.

Each assumption contained a kernel of truth. SMIC is indeed running at above 93% utilization on a process node roughly two generations behind TSMC. CANN is indeed less mature than CUDA — Huawei itself tacitly admitted this by announcing plans to open-source CANN by end of 2026 to accelerate ecosystem development. And China's chip design firms did start from behind.

But the sanctions regime made a critical analytical error: it treated compute scarcity as a constraint that would break Chinese AI ambition. Instead, scarcity functioned as a forcing function — one that redirected hundreds of billions of dollars, thousands of engineers, and the full apparatus of Chinese industrial policy toward a single objective.

**Table 1: The Sanctions Timeline — Intended vs. Actual Outcomes**

| Date | US Action | Intended Effect | Actual Outcome (as of Sept 2026) |
|------|-----------|----------------|----------------------------------|
| Oct 2022 | A100/H100 export ban | Freeze China's frontier AI training | Chinese labs develop efficiency-first architectures (DeepSeek MLA, NSA) |
| Oct 2023 | Expanded chip + equipment controls | Prevent SMIC from producing advanced AI silicon | SMIC achieves 5nm-class N+3 node; Huawei Ascend 950 ships |
| Dec 2024 | H20 export restrictions | Close loophole for downgraded Nvidia chips | Huawei Ascend 950DT becomes preferred inference chip for DeepSeek, ByteDance |
| 2025 | Entity list expansions | Isolate Chinese chip design firms | All "Five Tigers" file for IPO; Enflame completes listing Sept 2026 |
| Cumulative | — | Slow China's AI compute growth | China's intelligent compute up 177% YoY; 52 operational 10,000-card clusters |

*Sources: US Commerce Dept. regulations, MIIT disclosures, company filings, Bernstein Research*

## The Number That Changed Everything

DeepSeek's 160,000-chip order is not merely large. It is categorically different from anything that has come before — including DeepSeek's own previous infrastructure.

To understand why, consider the context. DeepSeek built its initial reputation on efficiency: the V3 model was trained for roughly $5.58 million using 2.788 million H800 GPU-hours, approximately one-tenth the estimated cost of Meta's Llama 3 405B. The lab's entire brand was built on the premise that architectural innovation could substitute for brute-force compute. DeepSeek didn't need massive clusters — it needed smarter algorithms.

That was true when the bottleneck was training. It is no longer true now that the bottleneck has shifted to inference.

DeepSeek's user base has exploded since V4 launched in April 2026 with native Huawei Ascend support. The model family now serves hundreds of millions of daily inference requests across consumer apps, enterprise APIs, and government deployments. Every one of those requests requires silicon. And with US export controls making Nvidia's China-market share collapse from near-total dominance to roughly 8%, that silicon is increasingly domestic.

The Inner Mongolia facility represents the physical culmination of this shift. Details remain closely held, but reporting from Reuters, Economic Times, and Chinese state media paints a picture of staggering scale.

**Table 2: DeepSeek Inner Mongolia Inference Facility — Known Parameters**

| Parameter | Detail | Significance |
|-----------|--------|--------------|
| Location | Inner Mongolia Autonomous Region, China | Low-cost land and energy; "East Data, West Computing" node |
| Accelerator count | ≥160,000 Huawei Ascend 950DT chips | Largest single AI chip order ever placed in China |
| Power capacity | Gigawatt-scale | Comparable to a mid-size nuclear reactor |
| Primary workload | AI inference (not training) | Reflects China's shift from model-building to model-serving |
| Chip generation | Ascend 950DT (2026 flagship) | SMIC 5nm-class N+3 process; HBM integrated |
| Facility type | Greenfield hyperscale data center | Purpose-built for AI inference at national scale |
| Operational target | Phased rollout through 2027–2028 | Aligned with 15th Five-Year Plan compute targets |

*Sources: Reuters (Sept 4, 2026), Economic Times, TechNode, MIIT disclosures*

The choice of inference as the primary workload is strategically significant. Training frontier models requires the absolute cutting edge of compute — multi-thousand-card clusters with ultra-low-latency interconnect, running for weeks or months. Inference, by contrast, demands raw throughput: the ability to serve millions of simultaneous requests at acceptable latency. It is the difference between building a Formula 1 engine and building a freight rail network. China, with its constraints on the absolute highest-end silicon, has chosen to dominate the freight rail.

And the freight rail, it turns out, is where the volume is.

## The Chip That Made It Possible

The Ascend 950DT is not a paper specification. It is shipping silicon, produced by SMIC on its most advanced domestically accessible process node, with integrated high-bandwidth memory and a compute architecture designed specifically for inference workloads.

The 950DT sits within Huawei's broader Ascend 950 family, which includes the 950PR (pre-training oriented) and 950DT (inference-oriented, with "DT" reportedly standing for "data center transformer" or simply designating the inference variant). The family represents Huawei's third-generation AI accelerator design since the original Ascend 910 debuted in 2019, and the first to be fabricated entirely within China's domestic supply chain — from wafer to HBM packaging to final assembly.

**Table 3: Huawei Ascend 950 Family vs. Competitive Landscape**

| Specification | Huawei Ascend 950DT | Huawei Ascend 950PR | Nvidia H200 | Nvidia B200 | Baidu Kunlun M100 |
|--------------|---------------------|---------------------|-------------|-------------|-------------------|
| Primary workload | Inference | Pre-training | Inference/Training | Training | Inference |
| Process node | SMIC N+3 (5nm-class) | SMIC N+3 (5nm-class) | TSMC 4N (5nm) | TSMC 4NP (4nm) | SMIC N+2/N+3 |
| Memory | In-house HBM (144GB config) | In-house HBM | 141GB HBM3e | 192GB HBM3e | HBM3 |
| FP16 throughput | ~58 TFLOPS (est.) | ~65 TFLOPS (est.) | ~67 TFLOPS | ~90 TFLOPS (est.) | ~45 TFLOPS (est.) |
| Supply chain | Fully domestic | Fully domestic | TSMC + SK Hynix | TSMC + SK Hynix | Fully domestic |
| Ecosystem | CANN (open-sourcing 2026) | CANN | CUDA | CUDA | XPU-P |
| 2026 volume target | Tens of thousands | ~750,000 units | Export-restricted in China | Not available in China | Tens of thousands |

*Sources: Huawei technical disclosures, SMIC production data, Bernstein Research, industry analyst estimates. Figures marked "est." are analyst projections, not confirmed specifications.*

The critical number in this table is not any single performance metric. It is the supply chain column. The Ascend 950DT is manufactured, packaged, and assembled entirely within China's borders. No US technology, no Taiwan Semiconductor, no SK Hynix memory. The chip exists precisely because the sanctions made it exist — by cutting off every foreign alternative, Washington handed Huawei a captive market of 1.4 billion people and the full financial backing of the Chinese state.

Jensen Huang acknowledged as much in a May 2026 earnings call, stating that Huawei "deserves respect" as a competitor and noting that the Chinese company had achieved in four years what took Nvidia a decade. "They're a formidable chip company," Huang said. "The assumption that Chinese chipmakers can't compete has been thoroughly disproven."

## The IPO That Completed the Circuit

If DeepSeek's order demonstrates demand, Enflame's IPO demonstrates supply — specifically, the capital formation mechanism that is turning China's fragmented chip startup ecosystem into a coordinated industrial sector.

On September 2, 2026, Enflame Technology opened subscription for its Shanghai STAR Market IPO: 43.04 million new shares at a price representing 10% of the company's enlarged share capital, targeting 6 billion yuan ($892 million) in gross proceeds. By September 11, the stock had surged 188% above its offering price, giving the company a market capitalization north of $2.5 billion.

Enflame is the last of China's "GPU Five Little Tigers" — the five leading domestic GPU startups — to go public. The other four are Moore Threads, MetaX, Biren Technology, and Iluvatar CoreX. Their IPO performance tells a story of extraordinary investor appetite for Chinese AI silicon.

**Table 4: China's "GPU Five Little Tigers" — IPO Wave 2025–2026**

| Company | Exchange | Listing Date | First-Day Gain | Market Cap (Sept 2026) | Key Products | Major Backers |
|---------|----------|-------------|----------------|----------------------|--------------|---------------|
| **Moore Threads** | STAR Market | Dec 2025 | +469% | ~$8.2B | MTT S4000, KUAE GPU | Tencent, ByteDance |
| **MetaX (MetaXuanjie)** | STAR Market | Jan 2026 | +755% | ~$5.8B | C600 inference GPU | Tencent, Hillhouse |
| **Iluvatar CoreX (Tianshu)** | STAR Market | Mar 2026 | +31.5% | ~$1.8B | Big Island GPGPU | Shanghai government |
| **Biren Technology** | STAR Market | Jun 2026 | +82% | ~$3.1B | BR100, BiliBang GPU | Ping An, CICC |
| **Enflame Technology** | STAR Market | Sep 2026 | +188% | ~$2.5B | S60 cloud GPU, T20 | Tencent, Sequoia China |

*Sources: Shanghai Stock Exchange filings, company prospectuses, Bloomberg, Caixin*

The combined first-day gains of these five companies exceed 1,500%. Their combined market capitalization as of mid-September 2026 approaches $21.4 billion. For context, that is roughly half of AMD's GPU segment valuation — for companies that, as recently as 2024, were dismissed by Western analysts as "CUDA pretenders" that would never ship competitive products.

Enflame's S60 chip, its flagship product, is specifically designed for cloud inference — the same workload category as DeepSeek's Inner Mongolia facility. The company reported 2025 revenue of 1.83 billion yuan ($257 million), up 295% year-over-year, driven primarily by cloud service provider procurement. Tencent, which holds an estimated 15% stake, is both Enflame's largest shareholder and its largest customer.

This is not a market of independent startups competing for commercial success. It is a vertically integrated industrial strategy, where state-backed venture capital funds the design, state-directed procurement creates the demand, and the STAR Market provides the exit liquidity that keeps the cycle spinning.

## The 9,800 EFLOPS Blueprint

Individual corporate decisions — DeepSeek's chip order, Enflame's IPO — acquire their true significance only in the context of the national framework that contains them. That framework arrived on September 7, 2026, in the form of the MIIT's 15th Five-Year Plan for the information and communications industry.

The plan is not a vague aspiration. It is a quantitative industrial policy document with 13 headline indicators, 26 key tasks, and specific numerical targets that China's state-owned enterprises, cloud providers, and chip manufacturers will be measured against.

**Table 5: MIIT 15th Five-Year Plan — Key Compute-Related Targets**

| Indicator | 2025 Baseline | 2030 Target | Growth Multiple |
|-----------|--------------|-------------|-----------------|
| Intelligent computing capacity | 1,590 EFLOPS | 9,800 EFLOPS | 6.2× |
| Advanced storage capacity | 540 EB | 1,700 EB | 3.1× |
| Info infrastructure investment (cumulative) | — | 3.8 trillion yuan ($532B) | +2.7% vs. prior plan |
| Industry revenue | 3.8 trillion yuan | 4.1 trillion yuan | 1.08× |
| 5G/5G-A adoption rate | — | 95% | — |
| New PUE standard for compute facilities | 1.25 | <1.2 | — |
| 10,000+ card clusters (existing) | 52 operational | Continued expansion | — |
| 100,000+ card clusters | 0 | "Orderly deployment" | New category |

*Source: MIIT 15th Five-Year Plan for Information and Communications Industry (published September 7, 2026)*

The most revealing line in the plan is not the 9,800 EFLOPS target itself, but the accompanying directive: "orderly deployment of intelligent computing clusters at the 10,000-card scale and at scales of 100,000 accelerator cards or more, with inference computing facilities deployed as needed."

The 100,000-card cluster category is new. It did not exist in the 14th Five-Year Plan. Its inclusion signals that China's planners are not merely extrapolating from current trends — they are defining a new infrastructure category that does not yet exist anywhere in the world. For reference, Nvidia's DGX SuperPOD architecture supports up to 576 GPUs in a single rack-scale cluster. A 100,000-card cluster would require fundamentally new interconnect topologies, cooling architectures, and power distribution systems that have never been built at commercial scale.

China's current intelligent computing capacity stands at 2,185 EFLOPS (FP16) as of June 2026, up 177% year-over-year, per MIIT data. The National Data Administration's estimate for July is approximately 2,450 EFLOPS. Reaching 9,800 EFLOPS by 2030 requires a compound annual growth rate of approximately 44% — aggressive but not unprecedented for a sector that has already demonstrated 177% annual growth under constraint.

**Table 6: China's Compute Growth Trajectory — Actual and Projected**

| Year | Intelligent Computing Capacity (EFLOPS) | YoY Growth | Milestone |
|------|----------------------------------------|------------|-----------|
| 2023 | ~420 | — | Pre-sanctions baseline; Nvidia-dominated |
| 2024 | ~800 | +90% | Huawei Ascend 910C ramps; first domestic 10K-card clusters |
| 2025 | ~1,590 | +99% | Ascend 950 family announced; CXMT HBM3E validation |
| Jun 2026 | ~2,185 | +177% | 52 operational 10K-card clusters; DeepSeek V4 on Ascend |
| Jul 2026 | ~2,450 | — | National Data Administration estimate |
| 2028 | ~5,000 (proj.) | ~42% CAGR | National computing grid phase 1 (2 trillion yuan) |
| 2030 | 9,800 (target) | ~44% CAGR | MIIT Five-Year Plan target; 100K-card clusters deployed |

*Sources: MIIT, National Data Administration, Xinhua, analyst projections*

## The Quiet Collapse

While China builds, Nvidia's position in what was once its second-largest market has effectively collapsed. The numbers are stark enough to merit direct quotation.

According to Bernstein Research analyst estimates cited in the trade press, Nvidia's China AI chip market share fell from near-total dominance in 2022 to approximately 8% in 2026. Huawei's share rose to roughly 50%. The remaining market is split among Baidu Kunlun (~20%), Alibaba T-Head (~10%), Cambricon (~5%), MetaX (~3%), and a long tail of smaller domestic players.

Huawei's AI chip revenue is on track to reach $12 billion in 2026, up from approximately $7.5 billion in 2025 — a 60% increase in a year when Nvidia's China revenue is projected to decline by more than 70% from its 2023 peak.

**Table 7: China AI Chip Market Share Evolution (by revenue, analyst estimates)**

| Vendor | 2022 Share | 2024 Share | 2026 Share (est.) | Trend Direction |
|--------|-----------|-----------|------------------|-----------------|
| Nvidia | ~85% | ~35% | ~8% | Collapsing |
| Huawei (Ascend) | ~5% | ~30% | ~50% | Dominant |
| Baidu (Kunlun) | ~2% | ~12% | ~20% | Growing |
| Alibaba (T-Head) | ~1% | ~5% | ~10% | Growing |
| Cambricon | ~3% | ~8% | ~5% | Stagnating |
| MetaX | <1% | ~2% | ~3% | Growing |
| Others (Enflame, Biren, Hygon, etc.) | ~4% | ~8% | ~4% | Fragmented |

*Source: Bernstein Research estimates as reported in trade press, July 2026. Figures are analyst modeling, not audited disclosures.*

For Nvidia, the China collapse is not merely a revenue problem — it is a strategic one. The company's CUDA ecosystem derives its moat partly from network effects: every developer who learns CUDA reinforces the platform's dominance. Every developer who leaves for Huawei's CANN, or Baidu's XPU-P, or MetaX's CUDA-compatible stack, weakens that moat. The bifurcation is not clean — Chinese chips still compete in a CUDA-shadow world — but the direction is unmistakable.

The loss is also not recoverable under current policy. Even if the US lifted all export restrictions tomorrow, Chinese buyers would not automatically return to Nvidia. The switching costs are too high, the domestic alternatives are now good enough, and Beijing's procurement mandates — which require state-owned enterprises to prefer domestic chips — would remain in place regardless.

## What's Really Happening

Strip away the individual data points and a coherent pattern emerges. What China is building is not a collection of data centers. It is a national compute utility — a unified, state-directed infrastructure layer on which all Chinese AI applications will eventually run.

The architecture has three tiers, each with a distinct role:

**Tier 1: The national grid.** The reported 2 trillion yuan ($295 billion) national AI computing grid, which aims to link every major Chinese data center into a single coordinated network by 2028. This grid functions like a power grid for compute — allocating capacity where it is needed, smoothing regional imbalances, and ensuring that no enterprise is compute-starved. At least 80% of the chips in this grid are required to be domestic.

**Tier 2: The corporate megaprojects.** DeepSeek's Inner Mongolia facility, ByteDance's multi-hundred-thousand-unit Ascend 950PR orders, Alibaba Cloud's self-developed T-Head M890 deployments. These are the demand anchors — large enough to justify the capital expenditure that domestic fabs need to reach scale, and technically sophisticated enough to stress-test the silicon under production workloads.

**Tier 3: The startup ecosystem.** The Five Tigers, Cambricon, Hygon, and dozens of smaller design firms competing for niche workloads, enterprise edge deployments, and specialized inference scenarios. This tier provides innovation velocity and prevents Huawei from becoming a complacent monopolist.

**Table 8: China's Three-Tier Compute Architecture**

| Tier | Primary Actors | Scale | Role | Capital Source |
|------|---------------|-------|------|---------------|
| National Grid | State-owned cloud providers, MIIT | 2T yuan ($295B) by 2028 | Compute utility; baseline capacity | Government funds, SOE capex |
| Corporate Megaprojects | DeepSeek, ByteDance, Alibaba, Tencent | Hundreds of thousands of chips each | Production inference; demand anchor | Corporate balance sheets |
| Startup Ecosystem | Five Tigers, Cambricon, 100+ startups | Tens of thousands of chips | Innovation; niche workloads; edge | STAR Market IPOs, VC |

*Source: Analyst synthesis of MIIT documents, company filings, and trade press reporting*

This is not capitalism as Western observers typically understand it. It is closer to what development economists call " dirigisme" — the French term for state-directed industrial policy — but executed at a scale and speed that makes France's post-war planning look timid. The state does not build the chips, but it funds the fabs, guarantees the demand, provides the exit liquidity, and sets the targets that everyone races to meet.

## The World Split in Two

The implications of this buildout extend beyond China's borders. The global AI compute landscape is bifurcating into two increasingly independent ecosystems: the Nvidia-CUDA axis, dominant in the United States, Western Europe, Japan, South Korea, and Taiwan; and the Huawei-CANN axis, dominant in mainland China and expanding through Belt and Road partnerships into Southeast Asia, the Middle East, Africa, and Latin America.

DeepSeek V4's April 2026 launch crystallized this split. The model shipped with first-class support for both Nvidia H200 and Huawei Ascend 950 — the first time a frontier-tier open model treated non-Nvidia inference as a co-equal platform. Developers in Virginia run V4 on H200 clusters. Developers in Shanghai run it on Ascend supernodes. The results, according to benchmark testing, are functionally indistinguishable.

**Table 9: The Bifurcating AI Compute World — 2026 Snapshot**

| Dimension | Nvidia-CUDA Ecosystem | Huawei-CANN Ecosystem |
|-----------|----------------------|----------------------|
| Core geography | US, EU, Japan, Korea, Taiwan | Mainland China |
| 2026 market share (global) | ~80% | ~12% |
| Frontier training dominance | Near-total | Growing (domestic models) |
| Inference cost trend | Stable to declining | Declining rapidly (scale effects) |
| Developer ecosystem | Mature (20+ years) | Immature but open-sourcing (CANN 2026) |
| Hardware supply chain | TSMC + ASML + SK Hynix | SMIC + domestic equipment + CXMT |
| Export exposure | Vulnerable to Chinese retaliation | Vulnerable to further US tightening |
| Key frontier models | GPT-5.5, Claude, Gemini | DeepSeek V4, GLM-5, Qwen 3.5 |

*Source: Analyst synthesis, September 2026*

The bifurcation has a second-order effect that receives less attention: it is accelerating price competition in inference, which benefits AI application developers everywhere. When DeepSeek can serve a million-token inference request at one-seventh the cost of an American equivalent — because it runs on domestically produced chips that carry no export premium, no gray-market markup, and no tariff — the pressure on US inference pricing becomes structural, not cyclical.

For US policymakers, the strategic picture is uncomfortable. The sanctions succeeded in their narrowest objective — cutting off China's access to the absolute frontier of AI training compute — but failed catastrophically in their broader goal of slowing China's AI development. Chinese labs responded to compute scarcity with architectural innovation (DeepSeek's MLA, NSA, FP8 training stack) that turned out to benefit the entire global AI ecosystem, including American developers who now use Chinese efficiency techniques to reduce their own inference costs.

The $500 billion Stargate project in the United States, announced with great fanfare in January 2025, was framed as America's answer to the AI infrastructure challenge. But Stargate is a corporate consortium — OpenAI, Oracle, SoftBank — building data centers for commercial purposes. China's buildout is a national mission, backed by $532 billion in committed state investment, with targets enshrined in law and execution measured against Five-Year Plan milestones. The difference in institutional capacity is not a detail. It is the story.

## What Comes Next

Three milestones will determine whether China's compute buildout achieves its ambitions or stalls against physical constraints.

**First, SMIC's next process node.** The Ascend 950 family's performance is adequate for inference but trails Nvidia's B200 by a meaningful margin in raw training throughput. SMIC's ability to advance beyond its current 5nm-class node — without access to ASML's EUV lithography — will determine whether China can close the training gap or remains permanently relegated to inference dominance.

**Second, domestic HBM scaling.** CXMT's HBM3E has validated in laboratory settings, but high-volume, high-yield production of stacked memory is a manufacturing challenge that has defeated many well-funded attempts. Memory packaging, not logic fabrication, may prove to be the binding constraint on China's chip output through 2027.

**Third, CANN ecosystem maturity.** Huawei's decision to open-source CANN by end of 2026 is a recognition that hardware alone cannot win the platform war. If CANN achieves even 70% of CUDA's developer experience — a threshold that Chinese analysts believe is achievable by mid-2027 — the switching cost argument that currently favors Nvidia will erode significantly.

Each of these milestones is trackable. Each will be reached or missed in public. And each will be reported on this site as it unfolds.

The export controls were designed to keep China from building what DeepSeek is now building in Inner Mongolia. That they instead created the conditions for the largest AI chip order in history, the most concentrated GPU IPO wave ever, and a $532 billion national compute plan is not irony. It is industrial policy — America's, and China's, colliding in ways that neither fully anticipated.

The chips that Washington tried to ban are now the foundation of the world's largest AI inference infrastructure. The engineers who were supposed to fall behind have rearchitected the transformer. The market that was written off as a rounding error now sets the global price for AI inference.

The boomerang, as the saying goes, always comes back.

---

## Voices from Social Media

**Zhihu (@硅基观察者)** — *"160,000 chips for inference only. Think about what that means. DeepSeek isn't building a research lab — it's building an AI power plant. The era where compute is a utility like electricity just arrived, and China is building the grid first."*

*"十六万片芯片只做推理。想想这意味着什么。DeepSeek不是在建实验室——是在建AI电厂。算力像电一样成为公用事业的时代刚刚到来，而中国正在先建电网。"*

**Xiaohongshu (@Tech小魔女)** — *"Everyone's focused on the 160K number but nobody's talking about the gigawatt power requirement. That's a mid-size nuclear reactor. Where's the electricity coming from? Inner Mongolia has the coal and the wind. This is energy policy disguised as tech policy."*

*"所有人都在关注16万这个数字，但没人提到吉瓦级的电力需求。那相当于一个中型核反应堆。电从哪来？内蒙古有煤有风。这其实是披着科技外衣的能源政策。"*

**Twitter/X (@AI_Compute_Watch)** — *"DeepSeek ordering 160K Huawei chips while Nvidia's China share drops to 8% — this is the single largest demand transfer in semiconductor history. Jensen Huang called Huawei 'formidable' in May. He wasn't being diplomatic."*

*"DeepSeek订购16万片华为芯片，而Nvidia中国份额跌至8%——这是半导体史上最大规模的单一需求转移。黄仁勋5月称华为'令人敬畏'。他不是在说客套话。"*

**Weibo (@财智老张)** — *"Five GPU companies IPO'd in 9 months with combined first-day gains over 1500%. In any other market this would be an obvious bubble. But with state procurement guaranteeing revenue for the next decade, maybe the market is pricing in something real."*

*"五家GPU公司9个月内IPO，合计首日涨幅超1500%。在任何其他市场这都是明显的泡沫。但在国家采购保证未来十年收入的情况下，也许市场在定价某种真实的东西。"*

**GitHub (issue comment, vllm-ascend repo)** — *"We've been running DeepSeek V4 on Ascend 950DT clusters for three weeks. Throughput is about 85% of what we see on H200 for the same model, at roughly half the cost per token. The gap is real but narrowing fast. CANN's tooling is still rough around the edges, but the open-source roadmap gives me confidence it'll close."*

*"我们已经在Ascend 950DT集群上运行DeepSeek V4三周了。吞吐量约为H200同模型的85%，但每token成本大约只有一半。差距确实存在但在快速缩小。CANN的工具链仍然粗糙，但开源路线图让我有信心它会迎头赶上。"*

**Douban (@半导体茶馆)** — *"People forget that SMIC is doing this with DUV lithography — no EUV. Multiple patterning on a 5nm-class node. It's like building a skyscraper with hand tools. The fact that they're hitting 93% utilization on that process while ramping volume tells you everything about the engineering talent involved."*

*"人们忘了中芯国际是在用DUV光刻机做这件事——没有EUV。在5nm级制程上做多重曝光。这就像用手工工具建摩天大楼。他们在那个制程上达到93%的利用率同时还能扩产，这足以说明工程人才的水平。"*

---

*Data sources: Reuters, Economic Times, TechNode, SCMP, MIIT 15th Five-Year Plan, Shanghai Stock Exchange filings, Bernstein Research, company disclosures. All analyst estimates are marked as such. Market share figures are modeled estimates, not audited data. This article is for informational purposes and does not constitute investment advice.*
