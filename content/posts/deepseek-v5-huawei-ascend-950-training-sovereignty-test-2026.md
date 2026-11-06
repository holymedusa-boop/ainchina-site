---
title: "DeepSeek V5 to Train on 160,000 Huawei Chips: The $5.8 Billion Bet on China's AI Independence"
date: "2026-11-06"
excerpt: "On November 3, Chinese financial outlets reported that DeepSeek will pretrain its next-generation V5 model on Huawei Ascend 950 chips — up to 160,000 of them at a new data center in Inner Mongolia. Neither company has confirmed it. But the reporting trajectory, DeepSeek's own open-source code, and Huawei's chip roadmap all point the same direction."
tags: ["DeepSeek", "Huawei Ascend 950", "AI Training", "China AI", "Semiconductors", "Nvidia", "Export Controls", "Ascend 950DT", "Ulanqab", "AI Chips", "Compute Sovereignty", "SMIC", "Open Source AI", "Frontier Models"]
image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80"
heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200"
readingTime: 15
---

On November 3, two Chinese financial outlets — STAR Market Daily and Caiwen — published reports that, if accurate, represent the most consequential infrastructure decision in China's AI industry since US export controls began.

DeepSeek, the Hangzhou-based startup whose open-weight models have redefined global expectations for Chinese AI, plans to pretrain its next-generation V5 model on Huawei Ascend 950 chips. Not Nvidia H100s. Not H20s routed through third countries. Huawei silicon, designed in Shenzhen, manufactured at SMIC's Shanghai fabs, and running software DeepSeek itself has been porting to Ascend hardware for months.

The scale is staggering. DeepSeek intends to deploy at least **160,000 Ascend 950DT chips** at a new data center in Ulanqab, Inner Mongolia — if fully populated, the largest concentration of AI training compute outside the United States. Neither DeepSeek nor Huawei has confirmed the plan. But it did not emerge from a vacuum. It is the latest data point in a two-month arc of increasingly specific leaks, code releases, and executive statements describing one of the most ambitious engineering efforts in Chinese technology history.

The stakes could not be higher. Training a frontier AI model on non-Nvidia hardware has never been done at scale. Every major Chinese lab has built its training stack on Nvidia GPUs. If DeepSeek succeeds, it breaks the last technological dependency US export controls were designed to preserve. If it fails, the company that shocked the world with V3 and V4 could find itself locked out of the compute it needs to compete.

## What We Know — and What We Don't

The November 3 reports trace to unnamed industry sources. Separating confirmed fact from credible reporting from speculation matters here.

The confirmed layer is substantial. DeepSeek open-sourced its Ascend-optimized libraries on September 30, publishing FlashMLA attention kernels achieving 410 teraflops on Ascend 950 during prefill — performance DeepSeek claims reaches 95% of the hardware's theoretical peak. The company also released DeepGEMM-Ascend for matrix operations, DeepEP-Ascend for inter-chip communication, and TileKernels, which runs identical Python code across Nvidia GPUs and Huawei NPUs. These are not side projects. They are the core components needed to train a large model on Ascend hardware.

The credibly reported layer includes founder Liang Wenfeng's September statement to investors, first reported by The Information, that training on Huawei chips is "one of the company's biggest bets" and "has to work." It includes Bloomberg's September report that DeepSeek planned at least 160,000 Ascend 950DT chips for Inner Mongolia, initially for inference. And it now includes the November 3 reports that V5 will use Ascend 950 as its core training compute, with a 2027 release window.

What remains unconfirmed is the full picture. DeepSeek has not announced V5. Its own API changelog names V4.1-Pro as the next model. The 160,000-chip figure comes from a single Bloomberg source. And the Ulanqab facility, per Caiwen, is still in early stages — it may not host V5's first training run.

| Claim | Source | Status |
|---|---|---|
| V5 pretrained on Ascend 950 | STAR Market Daily, Caiwen (Nov 3) | Reported, unconfirmed |
| 160,000 chips at Ulanqab | Bloomberg (Sept 4) | Single-source report |
| Huawei training "has to work" | Liang via The Information | Credible |
| Pretraining starts end of 2026 | The Information (mid-Oct) | Plausible |
| V5 release in 2027 | Caiwen sources | Unconfirmed |
| Ascend libraries open-sourced | GitHub (Sept 30) | Confirmed |
| V4.1-Pro is next named model | DeepSeek API changelog | Confirmed |

## Six Weeks That Redrew the Map

The reporting accumulated in stages. The pattern mirrors how DeepSeek operates — quiet, methodical, invisible until the work is nearly done.

On September 4, Bloomberg reported the 160,000-chip Ulanqab deployment, with a critical qualifier: the chips would initially run inference, not training. The distinction matters enormously. Inference is predictable, parallelizable, and tolerant of hardware quirks. Training a frontier model demands sustained numerical precision, tightly synchronized communication across thousands of chips, and fault tolerance at the limit of every component.

On September 21, The Information reported Liang's framing of Huawei training as existential. By mid-October, it added that pretraining on Ascend 950DT could start by end of 2026, with Huawei engineers embedded inside DeepSeek's offices — a detail suggesting the partnership had moved from exploratory to operational.

Then November 3 brought the specificity: V5, not just "a future model," will run on Ascend. A separate report noted that full post-training of the 1.6-trillion-parameter V4-Pro had already been completed on Ascend 910C chips — though not pretraining. That distinction, as the financial news service CLS noted, is the real test. Until now, the question of whether a top Chinese model can be trained on Chinese chips has drawn doubts, not answers.

| Date | Outlet | Development |
|---|---|---|
| Sept 4 | Bloomberg | 160K chips for Inner Mongolia, inference-first |
| Sept 21 | The Information | Liang: Huawei training "has to work" |
| Sept 30 | DeepSeek GitHub | Ascend-optimized libraries released |
| Mid-Oct | The Information | Pretraining by end of 2026; Huawei engineers on-site |
| Nov 3 | STAR Market Daily | V5 to be pretrained on Ascend |
| Nov 3 | Caiwen | V5 on Ascend 950; 2027 release target |

## The Silicon: What Ascend 950 Delivers

Huawei launched the Ascend 950PR on March 20, 2026, as the compute heart of the Atlas 350 accelerator card: 1.56 petaflops of FP4 compute, 112 GB of proprietary HiBL 1.0 HBM at 1.4 TB/s, 600W TDP, priced around $16,000.

The 950DT — the training variant — carries 144 GB of newer HiZQ 2.0 HBM at up to 4 TB/s bandwidth, nearly triple the 950PR's throughput. Compute targets 1 petaflop FP8 and 2 petaflops MXFP4, with 2 TB/s chip-to-chip interconnect via Huawei's LingQu protocol. It reached Huawei Cloud in August 2026, with commercial launch in Q4.

Both chips use homegrown HBM — developed because export controls cut off access to SK Hynix, Samsung, and Micron's latest stacks. A Chinese vendor shipping competitive on-package HBM is a genuine engineering achievement. The 950DT's 144 GB at 4 TB/s is in the right ballpark for a modern training part — not leading-edge by Nvidia standards, but functional.

The interconnect matters equally. LingQu's 2 TB/s is 2.5 times the previous Ascend 910 series. For training workloads requiring thousands of chips exchanging weights and activations in near-lockstep, interconnect bandwidth is often the binding constraint. Huawei's prioritization of this metric suggests the chip was designed for training from the start.

| Spec | Ascend 950PR | Ascend 950DT | Nvidia H20 (China) | Nvidia H100 |
|---|---|---|---|---|
| FP4 Compute | 1.56 PFLOPS | 2 PFLOPS (MXFP4) | ~0.56 PFLOPS | N/A |
| HBM | 112 GB (HiBL 1.0) | 144 GB (HiZQ 2.0) | 96 GB (HBM3) | 80 GB (HBM3) |
| Bandwidth | 1.4 TB/s | 4.0 TB/s | 4.0 TB/s | 3.35 TB/s |
| Interconnect | 2 TB/s (LingQu) | 2 TB/s (LingQu) | 900 GB/s (NVLink) | 900 GB/s |
| TDP | 600W | Not disclosed | ~400W | 700W |
| Price | ~$16,000 | ~$37,000 | $15K–25K | $30,000+ |
| Status | Shipping | Q4 2026 commercial | Restricted | Banned |

## The Software: Solving the CUDA Problem

Hardware is only half the equation. The other half — arguably the harder problem — is software. Nvidia's CUDA ecosystem represents two decades of accumulated tooling and developer knowledge. Replicating it on Huawei's CANN stack is monumental.

DeepSeek has been solving this in public. FlashMLA's 410 teraflops at 95% peak on Ascend 950 requires deep, low-level understanding of both hardware and model. DeepGEMM-Ascend ports the matrix library underpinning DeepSeek's mixture-of-experts architecture. DeepEP-Ascend handles inter-chip communication. TileKernels — perhaps the most forward-looking piece — runs identical Python code on Nvidia GPUs and Huawei NPUs, abstracting hardware differences at the kernel level. The project page thanks Huawei for its "technical support and engineering expertise."

By open-sourcing these tools, DeepSeek is creating a portable training framework any Chinese lab can use to migrate from Nvidia to Ascend. If DeepSeek proves the path, others will follow.

![DeepSeek's Ascend-optimized libraries form the most complete CUDA-independent training pipeline any Chinese lab has published](https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80)

*DeepSeek's Ascend-optimized libraries — FlashMLA, DeepGEMM, DeepEP, and TileKernels — represent the most serious attempt yet to build a CUDA-independent training pipeline.*

## The Infrastructure: A Training Site the Size of a City

Ulanqab, a city of 2.1 million in Inner Mongolia, has become an unlikely compute hub. Cheap land, abundant wind and solar, and cool desert air reduce data center costs. China has been steering compute westward for two years, following a national strategy of moving power-hungry AI facilities closer to western renewable sources.

Huawei's Atlas 950 SuperPoD wires 8,192 Ascend 950DT chips into a single unit. Huawei claims 8 exaflops FP8 and 16 exaflops FP4, across 160 cabinets, comparing it to Nvidia's NVL144 with claimed advantages of 6.7x compute, 15x memory, and 62x interconnect bandwidth. These are vendor claims, not independent benchmarks.

Scale up further: the Atlas 950 SuperCluster — 64 SuperPoDs — would connect 524,288 chips delivering 524 exaflops FP8. Huawei targets end-of-2026 operation. If Ulanqab follows SuperPoD architecture, 160,000 chips represents roughly 20 SuperPoDs.

| System | Chips | FP8 Compute | Status |
|---|---|---|---|
| Atlas 350 (card) | 1 | — | Shipping |
| Atlas 950 SuperPoD | 8,192 | 8 EFLOPS | Q4 2026 target |
| Atlas 950 SuperCluster | 524,288 | 524 EFLOPS | End 2026 target |
| Ulanqab (reported) | ~160,000 | — | Early stages |

## The Economics and the Honest Gap

Per-chip, the 950DT at ~$37,000 is not cheaper than an H20 at $15,000–25,000. The estimate that DeepSeek needs roughly four times more Ascend chips for equivalent training scale implies higher total hardware cost. But the calculus changes when factoring supply certainty. H20 availability shifts with US policy; Ascend production is fully domestic. For a multi-year training roadmap, that certainty has quantifiable value.

At $37,000 per unit, 160,000 chips cost approximately **$5.9 billion** before data center construction, power, cooling, and staffing. Total facility cost could exceed $8–10 billion. DeepSeek would need significant state support or a major capital raise — and the fact it is reportedly proceeding suggests both are likely.

The honest per-chip gap remains large. Nvidia's Rubin VR200, due in H2 2026, targets roughly 35 PFLOPS FP4 for training and 50 for inference, with 288 GB of HBM4 at ~22 TB/s. That is a 17–25x per-chip gap. Huawei's counter is system-level: wire thousands of chips together and compete on aggregate throughput. This mirrors China's approach to other technology gaps — not matching component-for-component, but building systems that compensate through scale and integration.

The manufacturing constraint is harder to engineer around. SMIC is limited to 7nm DUV multi-patterning, with lower yields and higher costs than TSMC's EUV process. SemiAnalysis estimates HBM supply caps Ascend output at roughly 250,000–300,000 chips annually. If Ulanqab alone needs 160,000, that leaves thin margins for Huawei's cloud business, other labs, and government customers.

| Metric | Ascend 950DT | Nvidia Rubin VR200 | Gap |
|---|---|---|---|
| FP4 (training) | ~2 PFLOPS | ~35 PFLOPS | ~17x |
| FP4 (inference) | ~2 PFLOPS | ~50 PFLOPS | ~25x |
| HBM Capacity | 144 GB | 288 GB | 2x |
| Bandwidth | 4 TB/s | ~22 TB/s | 5.5x |
| Process | SMIC 7nm DUV | TSMC 3nm EUV | 2+ gens |
| Annual capacity | ~250–300K (HBM-limited) | Significantly higher | — |

![Huawei's four-generation Ascend roadmap faces manufacturing constraints at SMIC's DUV-limited fabs](https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80)

*Huawei's Ascend roadmap runs through 2028, but SMIC's 7nm DUV process and domestic HBM supply remain binding constraints on volume.*

## What Comes Next

Three milestones determine whether this bet pays off. First, V4.1-Pro — DeepSeek's named next model — needs to ship on time, confirming the Nvidia pipeline remains operational. Second, the first actual pretraining run on Ascend 950DT, expected by end of 2026, needs healthy loss curves — meaning the model is learning, not diverging from numerical instability or communication failures.

Third, Huawei's chip cadence must hold. The Ascend 960, due Q4 2027, promises to double the 950's compute, bandwidth, and memory. The 970 follows in Q4 2028. If Huawei maintains one generation per year at roughly 2x each, the per-chip gap begins narrowing in absolute terms. By Huawei's own roadmap, the 960 is the first chip designed to beat an H200.

For V5, Caiwen's timeline matters most: training still in selection phase, parameters undecided, release expected in H1 or H2 2027. A model still being planned does not ship in weeks. Pretraining takes months; post-training, safety evaluation, and deployment follow.

| Milestone | Timing | Confirms |
|---|---|---|
| V4.1-Pro release | Late 2026 | Nvidia pipeline functional |
| First Ascend pretraining run | End 2026 | Hardware + software viability |
| Ulanqab operational | 2026–mid 2027 | Infrastructure readiness |
| Ascend 960 launch | Q4 2027 | Next-gen cadence on track |
| V5 release | 2027 | End-to-end Ascend training success |

If this works, it restructures the global AI compute landscape. US export controls lose their bite not because the hardware is better, but because the dependency they exploited no longer exists. Other Chinese labs gain a proven migration template — DeepSeek's open-source Ascend stack becomes the industry's blueprint. And Nvidia, which acknowledged Huawei as a competitor in an SEC filing, watches its China revenue trajectory accelerate in the wrong direction.

The question is no longer whether DeepSeek will attempt Ascend training. Every piece of evidence says the attempt is underway. The question is whether it works. That answer will shape the next decade of AI competition.

> **Editor's Note on Data Boundaries**: The 160,000-chip figure originates from a single Bloomberg source, unconfirmed by DeepSeek or Huawei. Ascend 950 specifications are vendor-published, not independently benchmarked. The four-times-chip-requirement estimate comes from a September 2026 social media post citing unnamed sources. The V5 training plan and 2027 release window rely on unnamed industry contacts cited by Chinese financial media. Treat all unconfirmed figures as directional.

## Social Media Reactions

**@半导体老兵 on Zhihu**
> DeepSeek在华为芯片上训练V5，这意味着中国AI产业第一次有可能完全不依赖美国硬件。V3还需要H800，V4开始转向，V5如果完全用昇腾训练成功，那就是真正的"去美化"。不过910C做后训练没问题，预训练是另一个量级的挑战。我个人谨慎乐观。
>
> *DeepSeek training V5 on Huawei chips means China's AI industry could shed American hardware dependence for the first time. V3 still needed H800s, V4 started the transition. Post-training on 910C is fine — pretraining is a different magnitude of challenge. I'm cautiously optimistic.*

**@TechWatcherSarah on Twitter/X**
> The per-chip gap between Ascend 950 (~2 PFLOPS FP4) and Rubin VR200 (~35 PFLOPS) is massive. But training is about sustained throughput across thousands of chips, not per-chip benchmarks. If system-level optimization closes even 60% of that gap, the economics shift dramatically — especially with supply certainty.

**@内蒙特快 on Weibo**
> 乌兰察布又要建超大规模数据中心了？风电光伏资源确实好，但160,000颗芯片的耗电量不是开玩笑的。对本地经济肯定是利好。
>
> *Another massive data center in Ulanqab? We have great renewable resources, but 160,000 chips' power draw is no joke. Great for the local economy though.*

**@distributed-dan on GitHub**
> FlashMLA at 410 TFLOPS / 95% peak on non-native hardware is genuinely impressive. TileKernels is the sleeper — same Python on Nvidia and NPU makes hardware migration a config change, not a rewrite. If they open-source the full training stack, it becomes a blueprint for the entire Chinese AI industry.

**@AlibabaInsider on Xiaohongshu**
> 阿里也在评估把部分训练负载迁到昇腾。不是因为更好用——CUDA生态优势还在——而是地缘政治风险太大。如果DeepSeek成功了，各家都会加速。说白了全行业都在看这个实验的结果。
>
> *Alibaba is also evaluating migrating some training to Ascend. Not because it's better — CUDA's ecosystem still leads — but geopolitical risk is too high. If DeepSeek succeeds, everyone accelerates. The whole industry is watching this experiment.*

**@douban_ai_observer on Douban**
> 最紧张的可能不是美国，而是英伟达。美国还有出口管制这张牌，但英伟达失去中国市场就是实打实的收入损失。黄仁勋第一次在SEC文件里承认华为是竞争对手，当时很多人觉得只是客气话。现在回头看，那是预警。
>
> *The most nervous party might not be the US but Nvidia. The US still has export controls; Nvidia losing China is real revenue loss. Jensen Huang's first SEC filing acknowledging Huawei as a competitor seemed polite at the time. In retrospect, it was a warning.*

---

**Related Articles:**

- [Huawei Ascend 950 Supernode: DeepSeek's Nvidia Workaround](/blog/huawei-ascend-950-supernode-deepseek-nvidia-export-controls-2026/)
- [China's AI Inference Era Crosses 175 Trillion Tokens](/blog/china-ai-inference-era-crosses-threshold-175-trillion-tokens-2026/)
- [DeepSeek Open-Sources Huawei Ascend AI Toolchain](/blog/deepseek-open-sources-huawei-ascend-ai-toolchain-2026/)
- [Kimi K3.1 Pro Open Weights: Export Controls Meet Their Escape Hatch](/blog/kimi-k3-1-pro-open-weights-export-control-escape-hatch-2026/)
