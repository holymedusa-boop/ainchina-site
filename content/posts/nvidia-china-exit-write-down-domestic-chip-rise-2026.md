---
title: "The Day Nvidia Wrote Down China: How Beijing Built a Chip Empire Out of Sanctions"
date: "2026-10-09"
excerpt: "Nvidia took a $400 million write-down on unsold H200 chips and guided to zero China data center revenue. Meanwhile, domestic Chinese AI chips captured 52.3% of the home market for the first time. The sanctions didn't cripple China's AI ambitions — they catalyzed them."
author: "AI in China Editorial"
readTime: 16
tags: ["Nvidia", "Huawei", "AI Chips", "Export Controls", "Cambricon", "Semiconductors", "China Tech"]
image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=600&fit=crop"
keywords: ["Nvidia China revenue zero", "Huawei Ascend 950", "China domestic AI chips", "Cambricon market cap", "AI chip sanctions", "China compute sovereignty", "H200 write-down", "Ascend SuperPod"]
---

![Semiconductor manufacturing facility with robotic precision equipment](https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=600&fit=crop)
*A semiconductor fabrication facility. Nvidia's exit from China created a vacuum that domestic chipmakers rushed to fill — with state backing and unprecedented speed. (Image: Unsplash)*

Everyone said cutting China off from Nvidia's best chips would slow Beijing's AI ambitions by years. The Q2 2026 earnings report tells the opposite story: Nvidia wrote down $400 million in unsold H200 inventory, disclosed that China contributed less than 1% of its $89 billion quarterly data center revenue, and guided to zero China data center revenue going forward. The company that once derived a quarter of its revenue from China has effectively exited the world's largest AI compute market.

The conventional wisdom got it backwards. US export controls didn't slow China's AI industry. They forced it to build something Washington never anticipated: a fully domestic chip supply chain that now designs, manufactures, and deploys AI accelerators at scale — without a single American component.

## The Conventional Wisdom: Sanctions as a Speed Bump

For three years, the policy consensus in Washington held that restricting access to advanced AI chips would create a "compute moat" — a durable American advantage in the most resource-intensive layer of the AI stack. The logic was straightforward: frontier AI models require massive clusters of cutting-edge GPUs, only Nvidia made those GPUs at scale, and blocking China from buying them would cap Beijing's ambitions at a level comfortably behind Silicon Valley.

The Biden administration began the effort in October 2022 with rules restricting A100 and H100 sales to China. The Trump administration expanded the controls, adding H200 chips to the restricted list. In December 2025, Washington approved licenses for H200 sales to China — but with conditions that made the deal unattractive. The assumption was that Chinese companies would snap up every available chip, that demand for Nvidia hardware was effectively infinite, and that Beijing's AI labs would remain dependent on American silicon indefinitely.

That assumption was wrong. Not because Chinese companies didn't want Nvidia chips — they did, desperately — but because Beijing had already decided that dependence was the problem, not the solution.

## The Evidence: Nvidia's Numbers Don't Lie

The financial data from Nvidia's August 2026 Q2 earnings report paints a picture that should unsettle anyone who believed in the compute moat thesis. These aren't projections or estimates — they're audited figures from the world's most valuable chipmaker.

| Metric | Q2 2026 Result | Prior Year Comparison |
|--------|---------------|----------------------|
| Total Data Center Revenue | ~$89 billion | — |
| China Data Center Revenue | <1% of total | ~20-25% historically |
| H200 Inventory Write-Down | $400 million | None |
| Forward China Revenue Guidance | Zero | — |
| H200 Units Delivered to China (est.) | ~20,000 (ByteDance + Tencent) | 0 before August |
| H20 Sales Status | Continued but declining | Was primary China SKU |

*Nvidia Q2 FY2026 results. Sources: Bloomberg, CNBC, August 26, 2026 earnings coverage.*

The $400 million write-down is the most revealing number. Nvidia had H200 chips manufactured, shipped to the region, and then couldn't move them. The licenses were granted. Chinese buyers held them. The chips barely sold. This wasn't a supply problem — it was a demand collapse engineered by policy.

The Financial Times reported on August 18 that ByteDance and Tencent each received approximately 10,000 H200 GPUs — the first meaningful shipments since Washington's approval. But these were exceptions that proved a larger rule: Beijing wasn't banning foreign chips outright. It was rationing them, deciding exactly who could receive them, in what quantities, and where they could be deployed. Imports had shifted from a commodity market to a state allocation system.

Meanwhile, the domestic chip market share data tells the other half of the story — the half where China's alternative ecosystem didn't just survive but crossed a critical threshold.

| Period | Domestic Chip Share (China AI Market) | Leading Domestic Vendor | Nvidia Share Trend |
|--------|--------------------------------------|------------------------|-------------------|
| Q4 2025 | ~47% | Huawei Ascend (~32%) | Declining |
| Q1 2026 | **52.3%** (first majority) | Huawei Ascend (~37%) | Steep decline |
| Q2 2026 | 55%+ (forecast) | Huawei Ascend (~38%) | Marginal |
| H2 2026 (projected) | 57-60% | Huawei Ascend + Cambricon | Near zero in data center |

*China domestic AI chip market share trajectory. Sources: FutureX Capital research, industry analyst reports, Q1-Q2 2026.*

Crossing 50% domestic share in Q1 2026 was not a symbolic milestone. It represented the moment when the default choice for AI compute procurement in China shifted from "imported, if available" to "domestic, unless a specific exception exists." That behavioral shift, once made, is extraordinarily difficult to reverse.

## The Real Story: Beijing Chose Self-Reliance Before the Market Did

Here's what most Western analysis missed: China's pivot away from Nvidia wasn't purely reactive. It was a strategic decision made at the highest levels of the Chinese government, and it preceded the H200 license approvals by months.

The December 2025 decision to approve H200 exports to China created what Beijing's economic planners saw as a trap. Accepting the chips would create renewed dependence on American suppliers just as domestic alternatives were reaching viability. Worse, it would expose Chinese AI companies to the risk of sudden cutoff — a lever Washington could pull at any time for maximum disruption. The answer wasn't to refuse the chips entirely, but to treat them as a strictly rationed supplement to a domestic system that was growing fast enough to stand on its own.

This policy manifested in three concrete ways during 2026. First, government guidance to state-owned enterprises and government-affiliated AI labs specified domestic chips as the default for new deployments. Second, procurement rules for the "Eastern Data, Western Computing" national infrastructure program mandated domestic content for data center construction in the eight national computing hubs. Third, Beijing approved only limited H200 allocations to ByteDance and Tencent — the two companies with the most acute short-term needs — while quietly discouraging broader purchases.

![Massive data center server racks with blue LED lighting](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop)
*Server racks inside a Chinese data center. The Eastern Data, Western Computing initiative has driven tens of billions of dollars into domestic compute infrastructure. (Image: Unsplash)*

## The Hardware That Replaced Nvidia

The domestic chip ecosystem that filled the Nvidia vacuum is more diverse and technically capable than most Western observers expected even twelve months ago. It isn't just Huawei — though Huawei is clearly the anchor tenant — but a broader constellation of companies that each contribute different capabilities to the stack.

Huawei's Ascend series remains the flagship. The Ascend 910C, which entered mass production in Q1 2026, delivers approximately 800 TFLOPS of FP16 performance with 3.2 TB/s of memory bandwidth — roughly 80% of an Nvidia H100. It became the workhorse for domestic AI training runs during the first half of 2026. The Ascend 950PR, launched in March 2026 for inference workloads, pushed further: 1 PFLOPS of FP8 compute, 128GB of Huawei's proprietary HiBL 1.0 HBM, and memory bandwidth of 1.6 TB/s. Its single-card compute is 2.87 times that of Nvidia's H20 — the cut-down chip Nvidia designed specifically for the Chinese market.

The Ascend 950DT, scheduled for Q4 2026 commercial rollout, targets training workloads with 144GB of next-generation HiZQ 2.0 HBM and 4 TB/s of memory bandwidth — double the data-movement efficiency of its predecessor. DeepSeek has reportedly ordered at least 160,000 of these accelerators for a massive deployment in Ulanqab, Inner Mongolia, with approximately 1 GW of power capacity at full buildout. If fulfilled, this would be the largest single domestic chip deployment in Chinese AI history.

| Chip | Launch | FP8 Compute | HBM Capacity | Memory Bandwidth | Primary Use Case |
|------|--------|------------|--------------|-----------------|-----------------|
| Ascend 910C | Q1 2026 (mass production) | — | 64GB | 3.2 TB/s | Training + inference |
| Ascend 950PR | March 2026 | 1 PFLOPS | 128GB (HiBL 1.0) | 1.6 TB/s | Inference (prefill) |
| Ascend 950DT | Q4 2026 | 1 PFLOPS | 144GB (HiZQ 2.0) | 4.0 TB/s | Training + inference (decode) |
| Cambricon Siyuan 690 | Q1 2026 | — | 196GB HBM3 | — | Training + inference |
| Ascend 960 (roadmap) | Q4 2027 (pulled forward to Q1 2027) | — | — | — | Next-gen training |

*Key domestic Chinese AI chips, 2026. Sources: Huawei Connect announcements, Cambricon disclosures, TrendForce, tech-insider.org.*

Cambricon, the second pillar of China's domestic chip strategy, achieved its own milestone in July 2026 when its market capitalization crossed RMB 1 trillion (approximately $138 billion) for the first time. Its Siyuan 690 chip — a dual-die design with 700+ TFLOPS of FP16 compute and 196GB of HBM3 — entered mass production in early 2026 with day-zero DeepSeek-V4 adaptation. Between July and September 2025, Cambricon's stock had already surged 124%, and its valuation briefly surpassed Tokyo Electron, making it one of the highest-valued semiconductor design firms in Asia.

Beyond Huawei and Cambricon, the ecosystem includes Moore Threads and MetaX (both now in the STAR 50 index), Biren Technology, and a growing cohort of inference-focused startups. In July 2026, SenseTime led the formation of a domestic AI infrastructure alliance with nearly 20 member companies, standardizing software interfaces and interconnection protocols across vendor boundaries.

## The Software Moat: From CUDA to CANN

Hardware is only half the equation. Nvidia's most durable advantage was never silicon — it was CUDA, the software platform that locked developers into an ecosystem with over two decades of accumulated tools, libraries, and institutional knowledge. Replicating CUDA was always the harder problem. In 2026, China's answer reached critical mass.

Huawei's CANN (Compute Architecture for Neural Networks) stack, combined with the MindSpore framework, has matured to the point where porting a model from CUDA to Ascend is a matter of weeks, not months. DeepSeek went further than any other company: its V4-Pro release in April 2026 was post-trained entirely on Ascend 910C hardware, with inference code rewritten from CUDA to CANN — a signal that the company is actively and permanently decoupling from the US chip software ecosystem.

Zhipu AI (Z.ai) trained its GLM-5.2 model on Huawei Ascend processors, delivered through Shenzhou Digital's Ascend and Kuntai servers. Its GLM-Image multimodal model was the first top-tier Chinese multimodal system trained entirely on domestic silicon. This matters because multimodal training is more computationally demanding than text-only training — it's the hardest possible proving ground for domestic chips.

| Company | Model | Domestic Chip Used | CUDA Dependency Status |
|---------|-------|-------------------|----------------------|
| DeepSeek | V4-Pro | Ascend 910C (training + inference) | Fully ported to CANN |
| Zhipu AI | GLM-5.2 | Ascend (via Shenzhou Digital) | Fully domestic |
| Moonshot AI | Kimi K3 | Mixed (proprietary Mooncake architecture) | Partially ported |
| Alibaba | Qwen3.8-Max | Zhenwu V900 + Ascend | Dual-track (CUDA + domestic) |
| Baidu | Ernie series | Kunlunxin chips | Fully domestic |

*Domestic chip adoption across major Chinese AI labs. Sources: company announcements, industry reporting, July-September 2026.*

The software transition isn't frictionless. CANN still lacks some of CUDA's mature debugging and profiling tools. Developer training programs are scaling up but haven't yet reproduced the army of CUDA-literate engineers that Nvidia spent decades cultivating. But the direction is unmistakable: every major Chinese AI lab now treats domestic chip compatibility as a day-zero requirement, not an afterthought. That cultural shift — baked into engineering processes and hiring decisions — is effectively irreversible.

## The Infrastructure Layer: SuperPods and Gigawatt Clusters

Individual chips tell only part of the story. The more consequential development is China's ability to deploy those chips at data center scale — the layer where training runs actually happen.

In July 2026, the Greater Bay Area's first all-domestic Ascend 10,000-card cluster went live in Shaoguan, Guangdong Province. The cluster comprises 30 supernodes with 11,520 Ascend 910C accelerators, delivering approximately 9,000 petaflops of compute. The RMB 5.5 billion ($760 million) investment represented the first time a domestic chip cluster of this scale trained domestic models entirely within China's own hardware ecosystem — a true closed loop.

Huawei's Atlas 950 SuperPod scales the concept further. A single SuperPod houses 8,192 Ascend accelerators with non-blocking all-optical interconnect, delivering 8 EFLOPS of FP8 compute, 1,152 TB of aggregate memory, and 16.3 PB/s of interconnect bandwidth. Sixty-four SuperPods can be composed into a SuperCluster exceeding 500,000 accelerators — a configuration that approaches the scale of the largest known US AI training clusters.

| Infrastructure Project | Location | Scale | Investment | Status |
|----------------------|----------|-------|------------|--------|
| Shaoguan Ascend Cluster | Guangdong | 11,520 cards (910C) | RMB 5.5B ($760M) | Live (July 2026) |
| DeepSeek Ulanqab Project | Inner Mongolia | 160,000+ Ascend 950DT | Undisclosed (est. RMB 20B+) | In progress |
| Gui'an Computing Hub | Guizhou | Multi-vendor, GW-scale | Part of $6.1B+ national program | Operational |
| Huawei Atlas 950 SuperPod | Multiple sites | 8,192 cards per pod | — | Q4 2026 rollout |
| East-West Computing (national) | 8 hubs, 10 clusters | Multi-GW cumulative | $6.1B government + $28B private | Ongoing |

*Major Chinese AI infrastructure projects. Sources: National Data Bureau, Huawei, Bloomberg, Reuters.*

The broader market context underscores the scale of what's being built. China's AI data center market was valued at $42.18 billion in 2025 and is projected to reach $336.2 billion by 2032 — a compound annual growth rate of 33.1%. This isn't speculative venture capital spending. It's state-directed infrastructure investment on the scale of China's high-speed rail buildout, with domestic compute procurement as a mandated design principle.

## Implications: Who Wins, Who Loses

The zeroing-out of Nvidia's China revenue has asymmetric consequences that extend well beyond a single company's earnings report.

**Nvidia loses more than revenue.** China was historically 20-25% of Nvidia's data center business — tens of billions of dollars annually at current run rates. More critically, Nvidia loses the network effects of having Chinese developers, researchers, and enterprises building on its platform. Every engineer trained on CANN instead of CUDA is a developer Nvidia will never win back. The company's bet on other markets — Saudi Arabia, UAE, India, Southeast Asia — is real, but none offers China's combination of scale, engineering density, and state-level commitment to AI deployment.

**Huawei gains a captive market and a global springboard.** With domestic share above 50% and Ascend chips achieving near-parity with Nvidia's previous-generation hardware, Huawei now has the volume to iterate rapidly. The company plans to enter South Korea's AI chip market in Q4 2026 — its first major overseas push — offering Atlas 950 SuperPods as a lower-cost alternative to Nvidia's NVL72 systems. If Huawei succeeds in Korea, one of Nvidia's strongest overseas markets, the competitive implications will reverberate globally.

**The US policy establishment faces a reckoning.** The export control strategy assumed that restricting supply would maintain American technological leadership. Instead, it accelerated the development of a rival ecosystem that is now self-sustaining and growing at 33% annually. A March 2026 US-China Economic and Security Review Commission report acknowledged the paradox: open-source Chinese models running on domestically produced chips now threaten American dominance not by matching frontier performance but by offering "good enough" capabilities at a fraction of the cost to a global market that doesn't share Washington's strategic concerns.

**Chinese AI labs face their own challenges.** Domestic chips, while improving rapidly, still lag Nvidia's flagship hardware by 12-18 months on raw performance. Training efficiency on Ascend requires more engineering effort than on CUDA. And the compute crunch remains real — Z.ai's shares fell 23% in February 2026 when compute shortages forced it to restrict new user signups. The closed loop is functional but not yet comfortable.

![Aerial view of a large industrial complex with solar panels](https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=400&fit=crop)
*A large-scale computing facility powered by renewable energy. China's Inner Mongolia and Guizhou regions have become the backbone of the national AI compute buildout, leveraging cheap renewable power and cool climates. (Image: Unsplash)*

## The Global AI Landscape After Nvidia's Exit

Nvidia's China exit doesn't just reshape the Chinese market — it fragments the global AI compute landscape in ways that will define the industry's next decade. The era of a single dominant chip vendor serving a globally interconnected developer ecosystem is ending. What replaces it looks more like the telecommunications industry: parallel technology stacks, regional champions, and a growing incompatibility between the tools and platforms used in different parts of the world.

For AI developers and enterprises outside China, the practical consequence is a bifurcated procurement landscape. Companies operating in both US and Chinese markets will need to maintain compatibility with both CUDA and CANN, both Nvidia and Ascend hardware. The "write once, run anywhere" dream of AI infrastructure is giving way to a reality of parallel tracks, duplicated engineering effort, and geopolitically determined technology choices.

The $400 million write-down on Nvidia's balance sheet is, in the end, a small number for a company generating $89 billion per quarter. But it's a marker for a much larger shift — one that took three years of export controls, hundreds of billions of dollars in Chinese state investment, and a willingness on Beijing's part to absorb short-term pain for long-term independence. The sanctions didn't contain China's AI ambitions. They convinced Beijing that the only safe compute is domestic compute, and then gave it the motivation to build exactly that.

The chips are now flowing. They're just not Nvidia's.

---

## Voices from the Tech Community

**Zhihu (知乎)** — @芯片观察员 (Chip Observer):
> "英伟达退出中国市场不是被中国芯片打败的，是被美国政策打败的。华为昇腾本来还要三年才能到这个水平，制裁帮它压缩到了十八个月。"
> 
> *"Nvidia didn't lose the China market to Chinese chips — it lost to US policy. Huawei's Ascend was three years away from this level; sanctions compressed the timeline to eighteen months."*

**X (Twitter/X)** — @AIComputeWatch:
> "The H200 write-down is the first hard evidence that export controls have a supply-side paradox. We restricted the supply, and China responded by building its own supply chain. Now we've lost the market AND the leverage."
> 

**Xiaohongshu (小红书)** — @科技小姐姐爱硬件:
> "在华为实习过半年，昇腾的生态确实还不完善，CANN的调试工具跟CUDA比差远了。但是公司内部的共识是：再不完善也要用，因为这是唯一的长期选择。"
> 
> *"I interned at Huawei for six months. The Ascend ecosystem really isn't as polished — CANN's debugging tools are far behind CUDA. But the internal consensus is clear: use it regardless, because it's the only long-term choice."*

**Weibo (微博)** — @财经老狼:
> "寒武纪市值破万亿说明资本已经在投票了。不管你信不信国产芯片能替代英伟达，钱已经做出了选择。"
> 
> *"Cambricon crossing one trillion RMB in market cap means capital has already voted. Whether or not you believe domestic chips can replace Nvidia, the money has made its choice."*

**GitHub** — @cuda-dev-porting:
> "Ported our inference stack from CUDA to CANN last quarter. Took 6 weeks, 2 engineers. Performance within 15% of our H100 baseline. Not perfect, but very much workable. The myth that Ascend is unusable for production doesn't match reality."
> 

**Douban (豆瓣)** — @未来学小组:
> "美国想通过制裁让中国AI落后，结果逼出了完整的国产替代产业链。历史会证明这是一个战略性错误。真正的遏制应该是倾销——用低价芯片淹没市场，让国产芯片永远没有规模效应。"
> 
> *"The US tried to hold back China's AI through sanctions and ended up forcing the creation of a complete domestic supply chain. History will prove this was a strategic error. Real containment would have been dumping — flooding the market with cheap chips so domestic alternatives could never achieve scale."*
