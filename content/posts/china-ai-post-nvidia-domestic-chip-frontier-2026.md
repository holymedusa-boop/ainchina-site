---
title: "The Post-Nvidia Era Has Already Begun — and Nobody Noticed"
date: "2026-11-20"
excerpt: "On November 17, Nvidia's acting CEO announced the company would stop selling H200 chips in China. Within 48 hours, China Telecom published a technical report describing a 285-billion-parameter model trained entirely on 8,192 Huawei Ascend 910C chips — no GPUs, no CUDA, no Nvidia. Days earlier, Meituan open-sourced a 1.6-trillion-parameter agent model built the same way. The export controls designed to slow China's AI didn't just fail. They built the industry's most resilient domestic compute ecosystem."
metaTitle: "China's Post-Nvidia AI Era Begins"
metaDescription: "Nvidia exits China as China Telecom trains 285B models on 8,192 Huawei Ascend chips and Meituan ships 1.6T open-weight agents — the post-Nvidia era is here."
tags: ["China AI", "Huawei Ascend", "Nvidia", "Xing4", "LongCat-2.5", "Domestic Chips", "Export Controls", "MindSpore", "China Telecom", "Meituan"]
keywords: "China AI domestic chips, Xing4 285B Ascend 910C, LongCat-2.5 1.6T Meituan, Nvidia H200 China exit, MindSpore HyperParallel, China Telecom AI model, post-Nvidia era, export controls backfire, Huawei AI training, domestic compute sovereignty"
image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80"
heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200"
readingTime: 15
---

Everyone said the same thing when the United States began tightening AI chip export controls in 2022: China will be set back years. Without Nvidia's latest accelerators, Chinese labs would be unable to train frontier models. The gap would widen. The race would be over before it started.

Four years later, the opposite has happened. And the proof arrived within a single week in November 2026 — not with a press release or a policy paper, but with two technical reports that most Western coverage filed under "interesting but niche."

On November 17, Nvidia's acting CEO Colette Kress told Wall Street that the company would stop selling H200 chips to China entirely, closing the tariff-backed loophole that former CEO Jensen Huang had personally negotiated with President Trump. The same day, China Telecom's Xingchen AGI Lab published a 138-author technical report describing Xing4 — a 285-billion-parameter mixture-of-experts model pretrained entirely on 8,192 Huawei Ascend 910C accelerators using the MindSpore framework. No GPUs. No CUDA. No Nvidia silicon anywhere in the stack.

Three days earlier, Meituan had released the weights for LongCat-2.5 — a 1.6-trillion-parameter native multimodal agent model, also trained entirely on domestic Chinese chips, open-sourced under the MIT license with a reference deployment guide that describes 194 Huawei Ascend Atlas A2 accelerators and mentions Nvidia not once.

The export controls weren't a cage. They were a construction brief.

## What Everyone Believed

The conventional wisdom about China's AI chip dependency was simple and, for most of the past four years, appeared accurate. Nvidia dominated AI training hardware with a margin that had no historical precedent — not in CPUs, not in mobile, not in any previous semiconductor category. Its CUDA software ecosystem had compounded for seventeen years, creating a moat that no competitor had meaningfully crossed. Training a frontier model required thousands of interconnected H100s or H200s, and only Nvidia made those.

| Assumption (2022–2025) | Source | Reality (November 2026) |
|------------------------|--------|------------------------|
| Chinese labs need Nvidia GPUs for frontier training | US export control rationale | Xing4 285B trained on 8,192 Ascend 910C with no CUDA |
| CUDA ecosystem is irreplaceable | Industry consensus | MindSpore HyperParallel now supports 8,000+ NPU clusters |
| Chinese chips can't handle MoE at scale | Analyst estimates | LongCat-2.5 (1.6T MoE) trained entirely on domestic hardware |
| Export controls slow Chinese AI by 2–3 years | Brookings, CSIS projections | Frontier-class models shipping on domestic silicon 4 years post-ban |
| US chip firms retain China as fallback market | Nvidia investor guidance | Nvidia exits; China never needed the H200 anyway |

The numbers seemed to support the pessimism. When the Biden administration first imposed export controls in October 2022, Huawei's Ascend 910 was roughly comparable to Nvidia's A100 from 2020 — two generations behind. SMIC's most advanced process node was years behind TSMC. Chinese AI labs stockpiled Nvidia chips, with DeepSeek alone reportedly acquiring 10,000 A100s before the ban took effect. The gap appeared structural, not tactical.

When the Trump administration escalated controls in 2025 — adding the H20 to the banned list and pressuring allies to restrict equipment sales to Chinese fabs — most analysts projected a widening capability gap. Anthropic CEO Dario Amodei argued in 2025 that export controls were "the only thing keeping the US ahead." A 2025 RAND Corporation assessment concluded that Chinese frontier labs "remain fundamentally dependent on US-origin compute."

That assessment was wrong. And the proof isn't speculative — it's running in production.

## The Evidence: Two Models, Zero Nvidia

The Xing4 report (arXiv:2611.22115), published November 17, 2026, deserves close reading — not for its benchmark scores but for what it demonstrates about systems engineering at scale. China Telecom's Xingchen AGI Lab, working with Huawei and Harbin Institute of Technology (Shenzhen), detailed how they pretrained a 285-billion-parameter MoE model on a cluster of 8,192 Ascend 910C NPUs.

The engineering challenges were substantial, and the report is candid about them:

| System Challenge | Xing4 Solution | Measured Impact |
|-----------------|----------------|-----------------|
| Pipeline parallelism bottleneck | HSDP: shard params within SuperPoD, replicate across SuperPoDs | Step time: 36.4s → 31.8s (1.14×) |
| MoE routing communication overhead | Topology-aware scheduling + selective recomputation | +96% throughput vs. naive baseline |
| Long-context prefill cost | MLA + DeepSeek Sparse Attention + cross-layer IndexShare | 4.68× prefill throughput vs. MLA-only |
| Variable-length agent trajectories | TeleGym: disaggregated async execution with partial rollouts | Continuous policy updates across heterogeneous tasks |
| Host CPU interference | CPU affinity binding + core isolation | +5–10% overall training throughput at 8,192-card scale |
| Decoding latency | DSpark block-wise speculative decoding | 2.67×–3.77× decode throughput |

The architecture itself was redesigned around the hardware. Instead of the 60-layer "skinny tower" that works well on Nvidia clusters, the team chose a 45-layer "wide and shallow" topology — expanding expert intermediate dimensions from 1,536 to 2,048 and increasing activated experts from 6 to 8 — because it trains approximately 10% faster on Ascend hardware. This is not porting. It is co-design: the model and the chip were shaped together.

The open-weight companion, Xing4.0-29B-A4B, activates only 4 billion of its 29 billion parameters per token with native 256K context, released under Apache 2.0 on Hugging Face in BF16, FP8, W8A8, and GGUF formats — quantizable to 4-bit for deployment on approximately 15GB of memory.

![The engineering shift: model architectures are now being co-designed around domestic hardware constraints](https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800)

*Model architectures are increasingly co-designed around specific hardware constraints — a shift from the CUDA-era default of designing for Nvidia first. (Image: Unsplash)*

### Meituan's LongCat-2.5: A Different Scale, Same Conclusion

If Xing4 proves that 8,000-card Ascend clusters work, LongCat-2.5 proves the approach scales to the frontier. Released under MIT license on November 15, the model carries 1.6 trillion total parameters with roughly 48 billion active per token. It accepts text, images, and video as input. Its context window extends to 1 million tokens. And according to Meituan's engineering writeup, the entire training pipeline ran on domestic Chinese accelerators where a single card carries less than 80GB of memory.

The self-hosting guide is telling: 194 Huawei Ascend Atlas A2 accelerators arranged as 2 for image processing, 64 for prompt ingestion, and 128 for response generation. There is no Nvidia option. Not as a preferred path — not at all.

| Specification | Xing4 285B-A17B | LongCat-2.5 |
|--------------|-----------------|-------------|
| Total parameters | 285B | 1.6T |
| Active per token | 17B | ~48B |
| Training hardware | 8,192× Ascend 910C | Domestic chips (unnamed, <80GB/card) |
| Training framework | MindSpore HyperParallel | Proprietary (domestic stack) |
| Context window | Up to 1M tokens | 1M tokens |
| Open weights | Xing4.0-29B-A4B (Apache 2.0) | Yes (MIT license) |
| Multimodal input | Text | Text + Image + Video |
| Agentic focus | TeleGym post-training platform | Long-horizon coding and design agents |
| Deployment guide | 4-bit @ ~15GB VRAM | 194× Ascend Atlas A2 reference |

The benchmark numbers, while vendor-reported, are competitive. LongCat-2.5 scores 88.4 on Terminal Bench v2.1 — behind Claude Opus 5 (89.1) and GPT-5.6 Sol (88.8), but close enough that for many production workloads the distinction is academic. On BrowseComp, it posts 91.9. W4A4 quantization — 4-bit weights and 4-bit activations — delivers 43.3% higher prefill throughput and 42.77% higher decode throughput versus an 8-bit baseline, with accuracy the company describes as comparable.

The predecessor, LongCat-2.0, was trained in late June 2026 on a cluster of more than 50,000 Chinese chips. That model ran anonymously as "Owl Alpha" on OpenRouter before Meituan revealed the connection. The current release continues the pattern: train on domestic hardware, release openly, price aggressively (€0.27/M input tokens at launch), and let the ecosystem effects compound.

## Nvidia's Exit, China's Indifference

The timing of these releases — within days of Nvidia's H200 exit — is not coincidental. It is a deliberate demonstration of independence.

Nvidia's Q3 earnings call on November 17 was remarkable for what it revealed about China. Acting CEO Colette Kress announced that licensed Hopper product shipments to China totaled $2.4 billion in the quarter — approximately 2% of Data Center revenue. She then confirmed Nvidia would no longer ship licensed Hopper data center products to China at all, and the Q4 guidance assumes zero Data Center compute revenue from the country.

The subtext: China had already largely refused H200 deliveries. According to Jacob Feldgoise, a researcher at Georgetown's Center for Security and Emerging Technology, Beijing preferred to generate demand for domestic chips — even though major compute users still wanted Nvidia equipment. The H200 pathway, which required chips to pass through the United States so the government could collect a 25% tariff, was a deal that neither side's market truly wanted.

New rules issued November 16 extended the restrictions further: advanced US chips are now barred from foreign data centers that serve Chinese customers remotely. Export-control attorney Dan Fisher-Owens noted that large AI-training data centers seeking Nvidia chips would have to certify they do not serve Chinese customers. Jefferies estimates the rules could trim $44–62 billion from Nvidia's data center revenue in 2027.

| Nvidia–China Timeline | Event |
|----------------------|-------|
| Oct 2022 | First export controls on advanced AI chips to China |
| 2023 | H800/A800 banned; Chinese labs stockpile A100/H100 |
| Jan 2026 | Trump proclamation: 25% tariff on qualifying export-tier chips |
| Jan 2026 | BIS moves H200 to case-by-case review; ~10 firms cleared |
| Mar 2026 | Nvidia halts production of China-configured H200 chips |
| Apr 2026 | DeepSeek V4 ships with day-one full Ascend support |
| Jul 2026 | Commerce official tells Congress H200 shipments to China "very few" |
| Nov 15, 2026 | Meituan open-sources LongCat-2.5 (1.6T, domestic chips only) |
| Nov 16, 2026 | US bars advanced chips from foreign data centers serving Chinese customers |
| Nov 17, 2026 | Nvidia halts all H200 China sales; Xing4 report published |
| Nov 17, 2026 | Jensen Huang resigns (affair with woman linked to Chinese intelligence) |

The Huang resignation adds a layer of irony that would seem heavy-handed in fiction. The CEO who personally brokered the H200 tariff deal with Trump, who argued on the Dwarkesh Podcast that conceding the Chinese market would "disserve" the United States, resigned amid revelations of at least one extramarital affair with a Chinese businesswoman whom US authorities have linked to Chinese intelligence — the same week his company exited the market he fought to keep.

## The Real Story: Co-Design as National Strategy

What Xing4 and LongCat-2.5 actually demonstrate is not that Chinese chips have caught up to Nvidia in raw silicon performance. They haven't. The Ascend 910C, while respectable, remains behind the H200 and Blackwell on most compute and memory metrics. The real breakthrough is systems-level: China's AI industry has learned to extract frontier capability from non-frontier hardware through co-design.

This is a fundamentally different approach from the one that dominated the CUDA era. When every lab trained on Nvidia, the optimization target was universal. Model architectures were designed for GPU characteristics first, and hardware alternatives had to conform. The Xing4 report inverts this: the architecture was shaped around Ascend's memory bandwidth patterns, its interconnect topology, and its parallelism characteristics.

| Optimization Layer | CUDA-Era Approach | Ascend-Era Approach |
|-------------------|-------------------|---------------------|
| Model architecture | Design for GPUs, port to others | Co-design with specific NPU characteristics |
| Parallelism strategy | Data/pipeline/tensor parallelism defaults | HSDP: topology-aware hybrid sharding within/across SuperPoDs |
| Attention mechanism | Standard MHA/GQA | MLA + sparse attention + IndexShare, tuned for prefill throughput |
| Training framework | PyTorch + CUDA | MindSpore HyperParallel |
| Deployment target | Nvidia GPU clusters | Huawei Ascend Atlas A2 reference (194 chips) |
| Speculative decoding | MTP variants | DSpark block-wise, 2.67×–3.77× throughput |
| Quantization | FP8/INT8 | W4A4 native, +43.3% prefill throughput |

This co-design pattern extends beyond China Telecom and Meituan. Earlier TeleChat models were also trained entirely on Huawei chips. DeepSeek's V4 shipped in April 2026 with day-one full Ascend support. Tencent's Q3 earnings call acknowledged that US restrictions on remote chip access would slow its next model generation — but also noted that current inference workloads already run on what President Martin Lau called "a surprisingly limited number of domestic chips."

The state-owned telecom operators are natural early adopters — they are both the customers of and investors in the domestic chip supply chain. But the fact that Meituan, a consumer technology company with no state mandate, chose to build its flagship agent model on domestic hardware is more revealing. This is not compliance. It is competitive economics.

## The Broader Ecosystem: Who Else Is Building

China Telecom and Meituan are not isolated cases. The domestic chip training ecosystem has been quietly assembling across the industry:

| Organization | Model/System | Hardware | Status |
|--------------|-------------|----------|--------|
| China Telecom (Xingchen) | Xing4 285B-A17B / Xing4.0-29B-A4B | 8,192× Ascend 910C | Technical report published Nov 17 |
| Meituan (LongCat) | LongCat-2.5 (1.6T MoE) | Domestic chips, 194× Atlas A2 deploy | Open weights Nov 15 |
| Huawei | MindSpore / CANN stack | Own Ascend silicon | Infrastructure layer for all above |
| DeepSeek | V4 series | Ascend + mixed domestic | Day-one Ascend support since April 2026 |
| Tencent | Hy4 / next-gen | Domestic inference; training TBD | Q3 call: inference on "limited domestic chips" |
| Earlier TeleChat models | Multiple releases | Huawei Ascend | Established precedent |

The MindSpore framework — Huawei's answer to PyTorch — has matured to the point where a 138-author team can publish a credible technical report about 8,000-card pretraining runs. The CANN (Compute Architecture for Neural Networks) software stack now supports the parallelization patterns that PyTorch users take for granted. And the broader domestic chip ecosystem beyond Huawei — Cambricon, Biren, Moore Threads, Enflame — has moved from prototype to production, with several pure-play AI chipmakers reporting their first profits in Q3 2026.

The supply chain constraints remain real. SMIC's advanced process nodes lag TSMC by an estimated 2–3 years. HBM memory — critical for large-model training — remains a bottleneck, with Chinese suppliers still ramping. And the Ascend 910C's per-chip performance, while improving, is not at parity with the H200. But the systems-level optimization gains documented in the Xing4 report suggest that the effective gap is narrower than the per-chip gap — and narrowing.

## What the Post-Nvidia Era Actually Looks Like

For the global AI industry, the implications are profound and underappreciated.

First, the compute dependency narrative has inverted. For four years, the story was that China needed American chips. Increasingly, the story is that China is building frontier AI without them — and open-sourcing the results. When a 1.6-trillion-parameter model lands on Hugging Face under MIT license with a deployment guide for non-Nvidia hardware, it creates an adoption pathway for every organization worldwide that cannot access or afford Nvidia's latest silicon.

Second, the export control framework has encountered its structural limit. The November 16 rules extend restrictions to foreign data centers — a measure designed to close the "compute tourism" loophole where Chinese labs rent overseas GPU capacity. But this only matters if Chinese labs still need that capacity. Xing4 and LongCat-2.5 suggest they increasingly don't. The controls are tightening around a dependency that is dissolving.

Third, and most consequential for Nvidia: the company has voluntarily exited the world's largest AI market at the exact moment that market is proving it can survive without Nvidia's products. Kress argued on the earnings call that the Vera Rubin backlog would offset any China revenue loss. Jefferies' $44–62 billion estimate suggests otherwise. And the long-term competitive risk — that Chinese domestic chips, validated by real frontier training runs, become viable alternatives in markets well beyond China — is the scenario that should concern Nvidia's board most.

![The post-Nvidia era is not about replacement — it is about a parallel ecosystem built on different assumptions](https://images.unsplash.com/photo-1676299081847-824916de030a?w=800)

*The emergence of a parallel AI hardware ecosystem — built on domestic Chinese chips and open-source frameworks — represents a structural shift in the global compute landscape. (Image: Unsplash)*

The most likely near-term outcome is not a clean bifurcation into "Nvidia world" and "Ascend world." It is a three-tier reality: US frontier labs on Nvidia's latest; Chinese frontier labs on domestic silicon; and everyone else — enterprises, researchers, developers in Southeast Asia, the Middle East, Latin America, and Africa — choosing between premium closed Nvidia systems and freely available open-weight models that run on increasingly capable domestic Chinese hardware.

The third tier is where the volume is. And it is growing fastest.

---

## Voices from the Community

> **@GPUTracking** (Twitter/X)
> 
> Nvidia voluntarily leaving China while Chinese labs publish 285B models trained on 8K Ascend chips in the same week is the most "plot twist" moment in AI this year. The H200 sales were already symbolic — $2.4B out of $115.8B is a rounding error. But the symbolism matters. Jensen built the China deal. Colette killed it. And the models are already trained.
> 
> *(Translation: Commentary on the timing and symbolism of Nvidia's China exit alongside domestic chip training breakthroughs)*

> **知乎·硬件工程师** (Zhihu)
> 
> 看了Xing4的报告，最震撼的不是285B参数，而是138个作者。这说明中国电信、华为、哈工大是作为一个整体在做这件事。CUDA生态的优势是17年积累，但MindSpore现在有了第一个万卡集群的实证案例。这个门槛跨过去之后，后面就是工程优化的事了。
> 
> *(Translation: A hardware engineer notes that the 138-author list signals deep institutional collaboration between China Telecom, Huawei, and HIT — and that MindSpore now has its first verified 10,000-card cluster precedent)*

> **@AINewsPod** (Twitter/X)
> 
> Everyone focused on Nvidia's earnings miss but the real story is in the footnotes. Jefferies estimates $44-62B in lost data center revenue from the remote access rules. That's not China sales — that's the ENTIRE overseas compute tourism market. The controls are now costing more than the China market was ever worth.
> 
> *(Translation: Analysis of the broader financial impact of extended export controls beyond direct China sales)*

> **小红书·大模型训练师** (Xiaohongshu)
> 
> 我们组上周讨论了要不要切换到国产芯片做下一个项目的预训练。结论是可以，但得按Ascend的特性重新设计模型。Xing4的45层方案给了我们很好的参考——他们证明了宽浅结构在昇腾上训练快10%。以前觉得换芯片是纯成本问题，现在发现其实是架构设计问题。
> 
> *(Translation: A model trainer describes their team's decision to consider domestic chips for pretraining, citing Xing4's wider-shallower architecture as evidence that co-design is the right approach)*

> **GitHub Discussion (opencompass #1247)**
> 
> LongCat-2.5's Terminal Bench score is close enough to Opus 5 that the difference is within noise for most tasks. The MIT license means I can fine-tune it for our codebase without legal review. At $0.27/M input tokens, my CFO just asked why we're still paying $5/M for GPT-5.5. I didn't have a good answer.
> 
> *(Comment from a developer evaluating LongCat-2.5 as a production replacement for more expensive US frontier models)*

> **微博·科技评论人** (Weibo)
> 
> 英伟达退出中国市场的同一天，中国电信发布了用8192张昇腾芯片训练285B模型的论文。这不是巧合，这是宣告。美国用四年时间证明了封锁不了中国AI，反而逼出了全球最完整的国产替代方案。以后的历史书会把这个星期写成转折点。
> 
> *(Translation: A Weibo tech commentator frames the simultaneous Nvidia exit and Xing4 publication as a deliberate declaration of independence in AI compute)*

> **Hacker News (thread: "Xing4: 285B on 8,192 Ascend 910C")**
> 
> The systems engineering here is legitimately impressive regardless of geopolitics. Removing pipeline parallelism via HSDP and getting a 1.35× step-time improvement on 8K non-Nvidia chips is a real result. The question nobody can answer yet: can they iterate? One training run is an achievement. A sustained release cadence is a program.
> 
> *(HN commenter acknowledging the technical merit while questioning long-term sustainability of the approach)*

---

## Sources

- "TeleChat to Xing4: Advancing Frontier Agentic Models on Domestic Chips and Frameworks" (arXiv:2611.22115, November 17, 2026)
- The Decoder, "Meituan releases a 1.6-trillion-parameter agent model that never touched an Nvidia GPU" (November 15, 2026)
- TechCrunch, "Nvidia is abandoning China after Jensen Huang's ouster" (November 17, 2026)
- CBS News, "Nvidia says it will stop selling some AI data center chips to China" (November 18, 2026)
- Superpower Daily, "Nvidia will stop selling H200 AI chips to China as U.S. tightens access" (November 18, 2026)
- Unite.AI, "NVIDIA Ends H200 Chip Sales in China Amid Tighter Export Rules" (November 18, 2026)
- explainx, "Xing4 and TeleGym: Frontier Agentic Training on 8,192 Ascend 910C GPUs" (November 18, 2026)
- AIEdge Insights, "AI News Today, November 19, 2026" (November 19, 2026)
- IADecider, "178 Provider Updates Tracked — November 2026" (November 2026)
