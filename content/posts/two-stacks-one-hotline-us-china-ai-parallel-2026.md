---
title: "Two Stacks, One Hotline: How the US and China Are Building Parallel AI Empires"
description: "DeepSeek just open-sourced six chip programming modules for Huawei's Ascend. Huawei pulled its 960DT launch forward three quarters. And Washington wants an AI hotline with Beijing. Inside the parallel AI ecosystems being built on both sides of the Pacific — and the fragile diplomatic bridge that now connects them."
date: "2026-10-04"
author: "Meeeeed"
tags: ["US-China AI", "DeepSeek", "Huawei", "NVIDIA", "AI chips", "CUDA", "export controls", "AI governance", "TileLang", "Ascend"]
image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop"
readTime: '16 min read'
category: "AI Policy"
excerpt: "As DeepSeek open-sources chip software for Huawei's Ascend and Washington proposes an AI incident hotline, two complete, competing AI stacks are crystallizing. This is a systematic comparison of the parallel ecosystems — hardware, software, models, infrastructure, and governance — and an assessment of what the new diplomatic channel actually changes."
keywords: ["US China AI competition", "DeepSeek Huawei partnership", "NVIDIA CUDA monopoly", "AI chip export controls", "AI hotline Bessent", "Huawei Ascend 950", "TileLang open source", "China AI stack", "AI governance 2026", "parallel AI ecosystems"]
related: [
  "/blog/ymtc-49-billion-ipo-nand-sanctions-reversal-2026/",
  "/blog/deepseek-open-sources-huawei-ascend-ai-toolchain-2026/",
  "/blog/huawei-ascend-12-billion-ai-chip-surge-global-bifurcation-2026/",
  "/blog/china-ai-dual-circulation-funding-boom-2026/"
]
---
heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200"

*Photo: Fiber optic cables carrying data across the Pacific. Two separate AI technology stacks are now being built in parallel — one anchored in Silicon Valley, one in Shenzhen and Hangzhou. Image: Unsplash*

---

On the afternoon of September 20, 2026, in a conference room on the 47th floor of JPMorgan Chase headquarters at 270 Park Avenue, Treasury Secretary Scott Bessent leaned across a polished walnut table and made an unusual request to Chinese Vice Premier He Lifeng. Not about tariffs. Not about currency. About artificial intelligence — specifically, about what happens when it goes wrong.

Bessent proposed what he called a "notification mechanism": a standing channel through which the United States and China would alert each other if an AI system in either country began behaving in ways that threatened the other. A hotline, essentially, for algorithmic emergencies. Two days later, President Trump and President Xi Jinping sat down at the White House and discussed it further. On October 3, Bessent went on the record with Axios, confirming the proposal was moving forward.

The timing was not accidental. That same week, 7,000 miles away in Hangzhou, DeepSeek quietly released six open-source software modules designed to program Huawei's Ascend AI chips — the most direct challenge yet to NVIDIA's CUDA programming ecosystem, the moat that has kept the world's AI developers locked into American hardware. Among the modules was TileLang, DeepSeek's high-level chip programming language, adapted specifically for Huawei's newest Ascend 950 accelerators. DeepSeek described it as the first step toward "a new generation of independent, self-controlled GPU software ecosystems."

Two events. One week. Two governments racing to build AI empires that increasingly do not share a single screw, a single line of code, or a single safety standard — and a tentative, almost reluctant acknowledgment that perhaps they should at least share a phone line.

This is a systematic comparison of the two stacks now crystallizing on opposite sides of the Pacific, and an assessment of whether a hotline can bridge a divide that is growing wider by the day.


[248 lines in file truncated] Use offset=31 to see remaining content]

---

## Table of Contents

1. [The Hardware Divide: Ascend vs. GeForce](#hardware)
2. [The Software War: CUDA vs. TileLang](#software)
3. [The Model Layer: Frontier Labs vs. Open-Weights Factories](#models)
4. [Infrastructure at Scale: Supernodes and Compute Targets](#infrastructure)
5. [The Governance Gap: Export Controls vs. Cyberspace Rules](#governance)
6. [The Underworld: Smuggling and Gray Markets](#underworld)
7. [The Hotline: What It Actually Means](#hotline)
8. [What Comes Next](#outlook)


---

## The Hardware Divide: Ascend vs. GeForce {#hardware}

The most visible layer of the bifurcation is silicon. For three decades, the global AI industry ran on a single supply chain: NVIDIA designed the chips, TSMC fabricated them, and every serious AI lab on Earth bought them. That chain broke in stages — first with the October 2022 export controls, then with successive rounds of restrictions that eventually reduced NVIDIA's China-compatible offerings to the deliberately downgraded H20.

Huawei's response has been methodical. The Ascend 910C, built on SMIC's enhanced 7nm process, delivers roughly one-third the BF16 throughput of NVIDIA's B200. That sounds like a rout until you consider the system-level play: Huawei's Atlas 950 SuperPoD, demonstrated publicly at WAIC 2026, interconnects 8,192 Ascend NPU cards via Huawei's proprietary Lingqu protocol to deliver 8 exaFLOPS at FP8 precision — 6.7 times the total compute of NVIDIA's comparable NVL144 system. When individual chips are weaker, the answer is more chips and better interconnects.

The production numbers tell the story of scale:

| Metric | Huawei Ascend 910C | Huawei Ascend 950PR | NVIDIA B200 | NVIDIA H20 (China) |
|---|---|---|---|---|
| Process Node | SMIC 7nm (N+2) | SMIC 7nm enhanced | TSMC 4NP | TSMC 4N |
| BF16 Throughput | ~0.75 PFLOPS | 1.56 PFLOPS FP4 | ~2.25 PFLOPS | ~0.15 PFLOPS |
| 2026 Production Target | 600,000 units | 750,000 units | Restricted from China | Zero shipments confirmed |
| Key Customers | Alibaba, DeepSeek, Tencent | ByteDance, Alibaba Cloud | N/A (export-banned) | Legacy installs only |
| Software Stack | CANN + TileLang | CANN + TileLang | CUDA | CUDA |
| Volume Shipments | Q2 2026 | Q3 2026 | N/A | Discontinued |

Sources: Bloomberg, Reuters, Financial Times, company disclosures. H20 throughput estimated from published specifications.

The numbers that matter most are not in that table. They are in Huawei's revenue projection: approximately $12 billion in AI chip revenue for 2026, representing 60% year-over-year growth, as reported by the Financial Times and confirmed by Reuters. Huawei Rotating Chairman Eric Xu went further at Huawei Connect in September, claiming — without providing data — that Ascend chips now hold a larger share of China's AI chip market than NVIDIA does.

Whether or not that claim holds, the trajectory is clear. Huawei plans 1.6 million total Ascend die distributions in 2026 across all models, with the Ascend 950 series as the flagship. The 950PR is the only domestic Chinese chip that supports compressed numerical formats for AI inference at scale, and ByteDance alone has committed $5.6 billion in orders. The follow-on Ascend 960DT, originally scheduled for late 2027, was pulled forward to Q1 2027 — three quarters early — at Huawei Connect 2026.

The gap in raw silicon performance remains real. The upcoming Ascend 950 delivers roughly 6% of the per-chip performance of NVIDIA's VR200, by some estimates. But in a world where DeepSeek's V4 model runs entirely on Huawei silicon and Chinese labs are compensating through cluster-scale engineering, the per-chip metric is becoming less decisive. The question is no longer "how fast is the chip?" but "how big can you build the system?"


---

## The Software War: CUDA vs. TileLang {#software}

If hardware is the visible battleground, software is the decisive one. NVIDIA's true moat has never been its silicon — it is CUDA, the programming ecosystem that has accumulated 4 million developers, 600 university courses, and two decades of library optimization over two decades. Every major AI framework, every research paper's reference implementation, every startup's training pipeline assumes CUDA. It is, in the words of more than one industry executive, the Windows of AI.

Breaking that lock-in is the explicit goal of the DeepSeek-Huawei partnership announced on September 30. The six open-source modules released that day are not trivial utilities. They include libraries for compute and communication workloads, a version of TileLang adapted for Ascend 950, and — most significantly — a joint "supernode" solution based on 128 Ascend 950 chips that optimizes both computation and communication. TileLang is positioned as a direct CUDA competitor with what DeepSeek describes as "a simpler programming model," offering native code generation, automatic scheduling, and synchronization for the Ascend platform.

The strategic framing was explicit. "Establishing a high-level language that is universal, easy to program, and still capable of reaching the hardware's full performance potential," DeepSeek wrote in its announcement, "is the foundational step toward building a new generation of independent, self-controlled GPU software ecosystems."

| Dimension | NVIDIA CUDA Ecosystem | Huawei CANN + TileLang |
|---|---|---|
| Developer Base | ~4 million globally | Estimated 500,000+ in China |
| Programming Languages | CUDA C/C++, Python, Triton | TileLang, CANN C++, MindSpore |
| Key Libraries | cuDNN, cuBLAS, NCCL, TensorRT | CANN libraries, MindSpore, MindIE |
| Framework Support | PyTorch, TensorFlow, JAX, everything | PyTorch (via adapter), MindSpore native |
| University Adoption | 600+ courses worldwide | Growing in Chinese universities |
| Open Source | Partial (Triton, some libraries) | TileLang fully open source |
| Maturity | 18 years, production-proven | ~3 years active development |
| Key Differentiator | Entrenched ecosystem, every framework | State backing, DeepSeek optimization |

Sources: NVIDIA developer documentation, Huawei CANN releases, DeepSeek GitHub, industry analysis.

The maturity gap is enormous but narrowing. The critical variable is DeepSeek's engineering credibility. When the lab that produced V4 — a model that competes with the global frontier — writes its own software stack for your chips and open-sources it, the adoption calculus changes for every other Chinese AI company. If DeepSeek's best engineers are committing code to CANN and TileLang, the ecosystem gains legitimacy that no amount of government mandate could provide.

Huawei has also been working to reduce migration friction. The 950PR's compatibility layer allows many CUDA-based workloads to port with significantly less rewriting than earlier domestic chips required. Chinese developers report they can migrate AI models from NVIDIA-based systems in days rather than the months that earlier Cambricon and Huawei offerings demanded.

The software war will not be won in a quarter or a year. But the trajectory mirrors what happened with Linux vs. Windows in servers: the challenger does not need to match the incumbent feature-for-feature. It needs to be good enough for a sufficiently large market, backed by a sufficiently motivated coalition. China provides both.


---

## The Model Layer: Frontier Labs vs. Open-Weights Factories {#models}

The third layer is where the divergence becomes philosophically interesting. American frontier labs — OpenAI, Anthropic, Google DeepMind — have converged on a closed-weights, API-access model with heavy safety packaging. Chinese labs have increasingly moved in the opposite direction: open weights, permissive licenses, and distribution through every channel simultaneously.

The September 2026 numbers are instructive:

| Lab | Flagship Model | Open Weights? | Key Metric (Sept 2026) | Valuation / Revenue |
|---|---|---|---|---|
| DeepSeek | V4.1-Flash / V4-Pro | Yes | #1 on OpenRouter by token volume since Aug 3 | Bootstrapped, reportedly profitable |
| Alibaba | Qwen3.8 (Qwen 4 in training) | Yes | 3 billion downloads in 6 months (Hugging Face) | $100B+ cloud AI revenue run-rate |
| Zhipu AI | GLM-5.3 | Yes | H1 2026 revenue up ~400% YoY | ~$7B valuation (post-raise) |
| Moonshot AI | Kimi K3 (2.8T parameters) | Yes | Largest open-weight model ever published | $35–50B valuation range |
| OpenAI | GPT-6 Astra | No | Epoch Capabilities Index #2 (166.51) | $300B+ valuation |
| Anthropic | Claude Opus 5.5 | No | Epoch Capabilities Index #1 (167.35) | $100B+ valuation |

Sources: OpenRouter, Hugging Face, Epoch AI, Reuters, company disclosures.

The open-weights strategy is not ideology — it is competitive positioning. Chinese labs cannot match the compute budgets of their American counterparts. Open weights leverage the global developer community as a force multiplier: fine-tunes, derivative models, and integrations that a single lab could never build alone. When Qwen passes 3 billion downloads in six months, that is not a vanity metric — it is ecosystem colonization at global scale.

There is also a regulatory dimension that cuts both ways. On October 1, new cyberspace security inspection rules took effect in China, replacing 2018 provisions and creating immediate compliance obligations for AI system operators. The same week, a startup called Hirundo published a 500-prompt audit claiming that Qwen models embed China-favorable responses on sensitive topics, and that a weight-edit technique could reduce this from 89.8% to 2.8% of responses. Alibaba did not comment. The tension between China's open-weights export strategy and its domestic content controls remains unresolved.

Meanwhile, Anthropic's September report accusing seven Chinese labs of "industrial-scale distillation" of Claude — totaling 190 million API exchanges — led to China's Cyberspace Administration summoning the named companies for discussions. Beijing's response was telling: it did not deny the practice but reframed it as normal competitive learning, while quietly investigating the data exfiltration methods.


---

## Infrastructure at Scale: Supernodes and Compute Targets {#infrastructure}

Both countries are now treating compute infrastructure as strategic national assets, but with different architectures and different math.

China's five-year plan calls for a more than fourfold increase in intelligent computing capacity by 2030, relative to the June 2026 baseline. Beijing's AI core industry has already reached ¥1.2 trillion ($170 billion) with over 6,200 AI companies, according to CAICT. The capital city alone accounts for ¥450 billion — roughly half the national total — driven by Doubao's 172 million monthly active users and Volcano Engine's 63 trillion daily processed tokens.

| Infrastructure Metric | United States | China |
|---|---|---|
| Leading System Architecture | NVIDIA DGX/HGX clusters, NVLink | Huawei Atlas SuperPoD, Lingqu interconnect |
| Max Cards per System | 144 (NVL144) | 8,192 (Atlas 950 SuperPoD) |
| Peak System Compute | ~1.2 exaFLOPS FP8 (NVL144) | 8 exaFLOPS FP8 (Atlas 950 SuperPoD) |
| 2030 Compute Target | No unified federal target | 4x increase over June 2026 baseline |
| National Supercomputing | NSF/DOE facilities | National Supercomputing Internet + Sugon 8000 (100K cards) |
| Cloud AI Market Position | AWS/Azure/GCP dominate globally | Alibaba Cloud: 107 zones, 31 regions, 8-country expansion |
| Key Constraint | Power availability, permitting | Advanced lithography, HBM supply |

Sources: Huawei WAIC 2026 disclosures, Sugon, Alibaba Cloud Apsara Conference, SCMP, government planning documents.

The Sugon 8000 Dengfeng system deserves particular attention. Fully domestic, with 100,000 interconnected AI accelerator cards tied into China's National Supercomputing Internet, it represents a different philosophy from the American approach. The US builds boutique supercomputers — El Capitan, Frontier — each a flagship. China is building a mesh, treating compute as a utility like electricity, distributed across the national network.

Alibaba Cloud's Zhenwu V900 chip and the Lingjun M890 supernode instance — a public-cloud-ready 64-card computing unit with 800 GB/s card-to-card connectivity — show that the system-level innovation is not limited to Huawei. Multiple Chinese vendors are converging on the same insight: in a world where you cannot buy the best single chip, you win through system architecture.


---

## The Governance Gap: Export Controls vs. Cyberspace Rules {#governance}

The regulatory architectures could hardly be more different. The United States wields export controls as its primary instrument — choking off the supply of advanced chips, lithography equipment, and AI-accelerated cloud services to Chinese entities. China wields market access and content control, dictating what AI systems must say and how they must be inspected.

| Governance Dimension | United States | China |
|---|---|---|
| Primary Instrument | Export controls (BIS Entity List, chip rules) | Content regulations + security inspections |
| Key Enforcement Body | Bureau of Industry and Security, DOJ | Cyberspace Administration of China (CAC), MPS |
| Recent Major Action | DOJ charges in $300M Nvidia GPU smuggling case | New cyberspace security inspection rules (Oct 1, 2026) |
| AI Safety Framework | NIST AI RMF, TEVV-Athlon, voluntary commitments | Algorithm registry, mandatory content review |
| International Push | Chip diplomacy (Netherlands, Japan, Korea) | WAICO (29-nation coalition), Belt & Road AI |
| Lab Accountability | Anthropic distillation report, Congressional probes | CAC summons after distillation accusations |

Sources: US Department of Justice, CAC, NIST, Ministry of Public Security, industry reporting.

The $300 million smuggling case that surfaced this week illustrates the enforcement reality. Federal prosecutors charged a California man, Greg Lui, with conspiracy, money laundering, and smuggling for allegedly re-exporting export-controlled NVIDIA GPUs to China through intermediary countries including Malaysia and Singapore. Four other individuals were arrested last year on similar charges. The pipeline exists because the demand exists — Chinese AI companies will pay almost any premium for compute that Washington says they cannot have.

China's countermove is institutional rather than criminal. The new cyberspace security inspection rules that took effect October 1 give public security authorities sweeping authority to inspect AI system operators, adding to the existing obligations around algorithm registration and content review. Where the US approach is to prevent China from getting the tools, the Chinese approach is to ensure that whatever tools exist operate within prescribed boundaries.


---

## The Underworld: Smuggling and Gray Markets {#underworld}

Between the two formal stacks lies a shadow economy that neither government fully controls. The scale is difficult to measure precisely, but the indicators are striking.

NVIDIA CEO Jensen Huang described the Chinese AI market as a $50 billion annual opportunity growing at 50% per year — a market his company is now almost entirely excluded from. That gap between demand and legal supply creates enormous arbitrage incentives. The smuggling cases that have surfaced represent what prosecutors could trace. Industry estimates suggest the gray market in AI chips — servers diverted through third countries, repackaged consumer GPUs, cloud access rented through foreign shell companies — may account for tens of thousands of high-end accelerators reaching Chinese buyers annually.

| Smuggling Indicator | Details |
|---|---|
| Largest Known Case | $300M in servers with NVIDIA AI chips (Greg Lui, arrested Oct 2026) |
| Prior Arrests | 4 individuals arrested in 2025 on similar smuggling charges |
| Common Transit Routes | Malaysia, Singapore, Thailand, UAE |
| Method | Re-export of US-manufactured servers through third countries |
| Estimated Gray Market Volume | Tens of thousands of accelerators annually (industry estimates) |
| Premium over MSRP | 2–4x for restricted NVIDIA chips in Chinese gray markets |

Sources: US Department of Justice, The Verge, industry estimates.

The underworld matters for the parallel stacks narrative because it is a pressure valve. It means that China's domestic stack is not evolving in isolation — it is co-evolving with continued, if covert, access to NVIDIA hardware. Chinese labs can benchmark against the frontier because some of the frontier's hardware keeps leaking through. The question is whether the domestic stack will eventually become so capable that the underworld becomes unnecessary, or whether it remains a permanent feature of the bifurcated landscape.


---

## The Hotline: What It Actually Means {#hotline}

Which brings us back to the 47th floor of JPMorgan Chase. What is the Bessent-He Lifeng channel, and what is it not?

According to Politico's reporting, the "notification mechanism" is far simpler than the formal language suggests. It is, in effect, an open line of communication between two officials — a way for the US Treasury Secretary and the Chinese Vice Premier to call each other if an AI system in one country appears to threaten the other. No formal treaty. No verification regime. No shared technical standards. As one person familiar with the arrangement told Politico, "The scientific, technical term is BS."

And yet the diplomatic significance is real. The channel was proposed on September 20, discussed at the Trump-Xi summit on September 24, and confirmed publicly by Bessent on October 3. Beijing's response has been characteristically guarded. Xinhua described the New York talks as "candid, in-depth and constructive" but did not mention the notification mechanism. Foreign Ministry spokesperson Guo Jiakun declined to confirm it directly, referring reporters to the existing summit readout. But the readout itself said Xi supported continued dialogue on AI risks, benefits, and misuse — language that showed Beijing publicly endorsed engagement after initial uncertainty.

The subtext of the hotline is what makes it interesting. It exists because both sides now recognize a category of risk that crosses borders faster than any treaty mechanism can respond to: an AI system that escapes its sandbox, a model that produces a bioweapon recipe, an agentic system that autonomously hacks critical infrastructure. The Axios report framed it as a channel for "when something goes wrong with AI" — a hedging mechanism, not a cooperation framework.

| Hotline Dimension | What It Is | What It Is Not |
|---|---|---|
| Scope | Bilateral notification of AI incidents with cross-border implications | A joint safety research program |
| Mechanism | Open line between Bessent and He Lifeng | A formal treaty with verification |
| Triggers | Uncontrolled AI systems, critical infrastructure threats, national security incidents | General AI policy coordination |
| Precedent | Nuclear hotlines (conceptual analogy) | Existing US-China military channels |
| Status | Proposed, under discussion | Operational (as of Oct 4, 2026) |

Sources: Politico, Axios, Al Jazeera, Xinhua, Foreign Ministry readouts.

The nuclear analogy is instructive but imperfect. Nuclear hotlines emerged from a shared understanding that both sides possessed the same category of weapon and faced the same category of risk. AI is different. The US and China are not building the same weapon — they are building entirely different technology stacks, with different failure modes, different safety cultures, and different definitions of what "going wrong" even means. A notification channel between two countries that cannot agree on what to notify about has obvious limitations.

But it is a start. And the fact that it was proposed by the Treasury Secretary — not the State Department, not a science agency — reveals something about how the US government now conceptualizes AI risk: as a financial stability and economic security issue, not just a technology policy question.


---

## What Comes Next {#outlook}

The parallel stack dynamic is likely to intensify before it stabilizes. Three developments in the coming weeks will be decisive.

**First, the Ascend 960DT launch in Q1 2027.** Huawei pulled the schedule forward three quarters at Huawei Connect, signaling urgency. If the 960DT closes even half the per-chip performance gap with NVIDIA's current generation, the system-level argument becomes overwhelming for Chinese buyers. If it disappoints, the underworld economy gets a second wind.

**Second, Qwen 4.** Alibaba confirmed at Apsara that its next-generation model is in training, with reports suggesting it could target 10 trillion parameters. If Qwen 4 matches or exceeds GPT-6 Astra on frontier benchmarks while running on Huawei hardware and being released as open weights, the competitive framing shifts from "China catching up" to "China defining a different game entirely."

**Third, the hotline's first test.** Every communication channel is defined by its first use. If an AI incident occurs — a major model escape, a cross-border cyber event with AI involvement, a synthetic media operation that triggers market panic — the Bessent-He Lifeng line either works or it doesn't. The answer will determine whether the October 2026 proposal was the foundation of something durable or a diplomatic gesture that dissolves under pressure.

The deeper pattern is structural. Two complete AI ecosystems — silicon to software to models to applications — are being built with minimal interoperability and maximal geopolitical friction. The $300 million smuggling operation, the open-sourced TileLang modules, the pulled-forward chip roadmaps, and the tentative hotline are all symptoms of the same underlying condition: a technological Cold War in which both sides are simultaneously decoupling and trying not to blow each other up.

The hotline is a phone between two construction sites. Both buildings are going up fast. Neither architect is sharing the blueprints. But at least now, if one of them catches fire, there is someone to call.


---

## What People Are Saying

> **@量子位 (QbitAI)**
> DeepSeek和华为联手开源6个芯片编程模块，直接对标CUDA。这是中国AI生态最重要的一步棋，不是之一。
> *DeepSeek and Huawei jointly open-sourced 6 chip programming modules, directly targeting CUDA. This is the single most important move for China's AI ecosystem — bar none.*
>
> **@AI政策观察 (AI Policy Watch)**
> 热线是好事，但没有技术标准和验证机制的热线，就是两个官员之间的微信聊天。真正的AI安全合作需要共享评估框架，而不仅仅是电话号码。
> *A hotline is nice, but a hotline without technical standards and verification mechanisms is just a WeChat chat between two officials. Real AI safety cooperation requires shared evaluation frameworks, not just phone numbers.*
>
> **@硅谷投资客 (Silicon Valley Investor)**
> NVIDIA失去中国市场，Huawei拿回主场。但别忘了，CUDA生态有400万开发者。18年的护城河不是6个开源模块就能填平的。这是一场马拉松。
> *NVIDIA loses China, Huawei takes the home field. But don't forget — the CUDA ecosystem has 4 million developers. An 18-year moat doesn't get filled by 6 open-source modules. This is a marathon.*
>
> **@科技日报 (Tech Daily China)**
> 美国一边卡芯片，一边求通话。这说明什么？说明他们意识到封锁阻止不了中国AI，只能管控风险。主动权已经转移。
> *The US blocks chips on one hand and asks for a hotline on the other. What does that tell you? It tells you they've realized the blockade can't stop Chinese AI — it can only manage risk. The initiative has shifted.*
>
> **@DrSarahChen_AI**
> Everyone's focused on the chips. The real story is TileLang. If DeepSeek can make Huawei chips programmable at CUDA-like abstraction, the entire Chinese AI stack becomes self-sustaining. Software, not silicon, is the binding constraint.
>
> **@出口管制研究员 (Export Control Researcher)**
> 3亿美元的走私案只是冰山一角。灰色市场的实际规模可能是已发现案件的10倍。只要价差存在，封锁就永远有漏洞。
> *The $300M smuggling case is just the tip of the iceberg. The actual gray market could be 10x the discovered cases. As long as the price differential exists, the blockade will always have leaks.*

---

*Daily AI in China — October 4, 2026. Reporting and analysis by Meeeeed. Data compiled from Reuters, Bloomberg, Politico, Axios, Financial Times, Huawei Connect 2026, Apsara Conference, and company disclosures.*
