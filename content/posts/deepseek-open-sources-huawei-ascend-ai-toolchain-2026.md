---
title: "DeepSeek Just Open-Sourced the Entire Software Stack That Makes Huawei Chips Run Like Nvidia's"
metaTitle: "DeepSeek Open-Sources Huawei Ascend AI Toolchain: The CUDA Challenger"
slug: "deepseek-open-sources-huawei-ascend-ai-toolchain-2026"
date: "2026-10-03"
excerpt: "On September 30, DeepSeek published six core infrastructure repositories that power its AI models on Huawei Ascend chips — compilers, operator libraries, and communication frameworks. It is the most consequential open-source move in China's compute-sovereignty push, and it lands at the exact moment Nvidia's China share is collapsing."
readTime: "16 min"
category: "AI Infrastructure"
tags: ["deepseek", "huawei", "ascend", "open source", "ai chips", "compute sovereignty", "cuda", "china ai", "tilelang", "cann"]
image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=675&fit=crop"
imageAlt: "Server racks in a dark data center illuminated by blue and green LED lights"
author: "AI in China Editorial Team"
---

**On the afternoon of September 30, 2026, an engineer at DeepSeek's Hangzhou headquarters typed a short announcement and hit publish.** Within minutes, six GitHub repositories that had never been visible outside the company flicked from private to public. The code inside them represented thousands of engineering hours — the compilers, operator libraries, and distributed communication frameworks that DeepSeek's AI models actually run on when they execute on Huawei's Ascend chips.

The response was immediate. Developers across China's AI community began cloning the repositories, reading through the implementation details, and discussing what had just happened. Within hours, the story was trending on Chinese tech media. Within a day, it had been covered by QbitAI, Zhihu columnists, and international outlets trying to parse the significance.

DeepSeek framed the release in characteristically understated language: it was, the company said, open-sourcing the Ascend-platform version of the infrastructure it had already released for Nvidia GPUs earlier in 2026. But the framing undersells the moment. This is not just a code drop. It is the software layer that makes China's leading AI models run natively on China's leading AI hardware — and it is now available to anyone, anywhere, for free.

To understand why this matters, you have to understand what has been happening to the global AI chip market over the past twelve months — and why the software gap, not the silicon gap, was always the real obstacle.

---

## What Was Actually Released: Six Repositories, One Stack

The September 30 release is not a single library or a partial toolkit. DeepSeek published the full set of infrastructure components its models rely on when running on Huawei Ascend hardware, mirroring the GPU-focused releases it had made earlier in the year. Each repository solves a specific problem in the AI compute pipeline.

| Component | Function | Platform | GitHub Status |
|---|---|---|---|
| TileLang | High-level kernel language and compiler for AI models | Ascend C API + PTO ISA | Open-sourced Sept 30 |
| DeepGEMM | Optimized GEMM (matrix multiplication) library | Ascend | Open-sourced Sept 30 |
| FlashMLA | Memory-efficient attention operator library | Ascend | Open-sourced Sept 30 |
| TileKernel | Low-level kernel building blocks | Ascend | Open-sourced Sept 30 |
| DeepSelect | Model component selection/optimization library | Ascend | Open-sourced Sept 30 |
| DeepEP | Distributed communication library for MoE models | Ascend (HCCL-based) | Open-sourced Sept 30 |

The functional range is comprehensive. TileLang serves as the compiler layer — it takes high-level model descriptions and generates optimized code for Ascend's custom instruction set architecture, called PTO ISA. DeepGEMM handles the matrix multiplications that consume the majority of compute cycles in any large language model. FlashMLA optimizes the attention mechanism that lets models weigh the importance of different parts of their input. DeepEP manages communication between chips when a model is spread across dozens or hundreds of processors, using Huawei's HCCL (Huawei Collective Communication Library) as the transport layer.

In plain terms: DeepSeek has published the recipe that turns Huawei's chips from generic processors into engines capable of running state-of-the-art AI models at production scale.

That recipe was, until now, a closely guarded competitive advantage.

---

## The Backstory: A Market That Flipped in Twelve Months

To grasp the significance of open-sourcing this stack, consider what has happened to Nvidia's position in China over the past year.

Nvidia once held approximately 95% of China's AI chip market. Its dominance was so complete that "GPU" and "AI accelerator" were effectively synonyms. Chinese tech companies built their data centers, trained their models, and hired their engineers around Nvidia's ecosystem — specifically around CUDA, the proprietary software platform that makes Nvidia hardware accessible to developers.

Then the export controls came. The U.S. government progressively restricted Nvidia's ability to sell its most advanced chips to China. The H100 was banned. The A800 and H800 — Nvidia's China-specific downgraded variants — were also banned. The H20, a further-reduced chip, was allowed for a time, but even that channel closed in September 2025 when China itself reportedly directed domestic companies to stop purchasing new H20 orders.

The market restructured almost overnight.

| Period | Nvidia China AI Chip Share | Huawei Share | Key Event |
|---|---|---|---|
| Pre-export controls | ~95% | Negligible | Nvidia near-total dominance |
| 2024 | ~40% | ~40% (tied) | H20 allowed; domestic pivot begins |
| 2025 | ~40% | ~40% (tied) | H800/A800 banned; Ascend 910C ramp |
| 2026 (forecast) | ~8% | ~50% | H20 channel closed; Ascend 950 launch |
| 2028 (projection) | Minimal | Supply exceeds domestic demand | Domestic supply-demand ratio: 104% |

The figures come from Bernstein Research's widely cited forecasts, corroborated by Goldman Sachs estimates and DIGITIMES shipment data. Nvidia CEO Jensen Huang stated the situation plainly in a May 2026 CNBC interview: "We have largely conceded the China market to Huawei." He called China a "$50 billion opportunity this year alone" and noted that nearly half of the world's AI researchers are based there — researchers who are now working predominantly on non-Nvidia hardware.

Huawei's AI chip revenue tells the same story from the other side: from $7.5 billion in 2025 to a projected $12 billion in 2026, driven largely by Ascend 950 demand following DeepSeek's V4 model release in April.

But market share tells only half the story. The other half — the harder half — was always software.

---

## The Software Gap: Why Hardware Without Tools Is Just Silicon

Here is the uncomfortable truth that has defined China's AI hardware challenge: Huawei's chips have been competitive with Nvidia's for over a year, but the software ecosystem around them has lagged badly.

Nvidia's CUDA platform is not just a compiler or a driver. It is two decades of accumulated developer tooling, optimization libraries, debugging utilities, and institutional knowledge. Every major AI framework — PyTorch, TensorFlow, JAX — runs natively on CUDA. Every AI researcher trained in the last ten years knows CUDA. Every performance optimization trick in the AI playbook was discovered, tested, and documented on Nvidia hardware.

Huawei's answer to CUDA is CANN — the Compute Architecture for Neural Networks. CANN is capable, and it has improved rapidly. But capability is not the same as ecosystem. Before September 30, if you were an AI team outside Huawei wanting to run your model on Ascend chips, you faced a steep learning curve: unfamiliar APIs, undocumented behavior, optimization techniques that did not transfer from GPU programming, and a community too small to crowdsource solutions.

DeepSeek's open-source release attacks this problem directly. By publishing the actual code it uses in production — not a sanitized or simplified version, but the real infrastructure — DeepSeek is effectively donating its engineering expertise to the entire Ascend ecosystem. Any team that adopts these libraries starts from DeepSeek's level of optimization rather than from zero.

| Challenge | CUDA / Nvidia Response | CANN / Ascend Response (Pre-Sept 30) | Impact of DeepSeek Release |
|---|---|---|---|
| Kernel development | Mature toolchain, extensive docs | Ascend C API available but limited examples | TileLang provides high-level abstraction + full compiler source |
| Matrix multiplication | cuBLAS (highly optimized) | Basic implementations | DeepGEMM: production-grade, battle-tested |
| Attention optimization | FlashAttention, xFormers | Limited equivalents | FlashMLA: memory-efficient attention for Ascend |
| Multi-chip communication | NCCL (industry standard) | HCCL (functional but less mature) | DeepEP: MoE-optimized communication layer on HCCL |
| Community knowledge | Massive (millions of developers) | Growing but small | Instant codebase for study and adaptation |
| Debugging/profiling | Nsight, comprehensive tools | Limited tooling | Source code serves as reference implementation |

The comparison is not perfect. CUDA's ecosystem advantage extends far beyond what any single company can donate. Nvidia has thousands of engineers working on developer tooling, relationships with every major framework, and a two-decade head start. But DeepSeek's release represents something the Ascend ecosystem has never had before: a reference implementation from the team that runs some of the world's most demanding AI workloads on Huawei hardware in production, at scale, every day.

---

## The 128-Chip Supernode: Where the Software Meets the Hardware

The software release is not happening in a vacuum. It is the latest development in a deepening partnership between DeepSeek and Huawei that has been building throughout 2026.

In February, DeepSeek open-sourced its core inference engine components for Nvidia GPUs. That release — which included several of the same libraries now being adapted for Ascend — demonstrated DeepSeek's strategy: publish the infrastructure, let the community build on it, and accelerate the entire ecosystem's capability.

Between February and September, the two companies worked jointly on what Huawei's Rotating Chairman Eric Xu described as a "128-card supernode" solution — a system that tightly couples 128 Ascend 950 chips to function as a single, unified compute unit. The supernode design addresses one of the fundamental challenges of scaling AI models across multiple chips: communication overhead. When you split a model across 128 processors, the time spent passing data between chips can quickly exceed the time spent doing actual computation. DeepSeek's DeepEP library is specifically designed to minimize this overhead for mixture-of-experts architectures — the model design that DeepSeek itself pioneered and that has become the industry standard for efficient large-model inference.

Huawei has been contributing its own optimizations to the CANN community, including low-latency inference deployment for large-expert-parallel configurations and solutions for single-card and single-machine deployment scenarios. At Huawei Connect 2026 in September, Eric Xu emphasized the company's commitment: Huawei has provided "毫无保留的大力支持" — unreserved, full support — for DeepSeek's Ascend adoption. That phrase, delivered from the stage of Huawei's flagship conference, signaled to the entire Chinese tech industry that the DeepSeek-Huawei partnership is strategic, not transactional.

The results are visible in the community data. At Huawei Connect, the company revealed that external developers now constitute 61% of the CANN community — outnumbering Huawei's own staff for the first time. The broader Kunpeng ecosystem has reached 4.16 million registered developers and 7,200 partners. These numbers are still small compared to CUDA's global reach, but the growth trajectory is steep and accelerating.

---

## The Physical Layer: 160,000 Chips in Inner Mongolia

Software does not run in the abstract. Behind the open-source repositories sits a massive physical infrastructure that is quietly becoming one of the largest AI computing installations in Asia.

According to Bloomberg reporting from September 2026, DeepSeek plans to deploy at least 160,000 Huawei Ascend 950DT chips at a data center under construction in Ulanqab, Inner Mongolia. The facility is designed at gigawatt scale and is intended primarily for AI inference — serving the millions of API calls and consumer interactions that DeepSeek's models handle daily.

Ulanqab is an unlikely location for a world-class computing hub. A city known primarily for agriculture and potato farming, it has been transformed by the data center boom. As of June 2026, the city had signed 89 data center projects involving 68 companies, with total investment exceeding 500 billion yuan ($69 billion). Operating compute capacity has reached 165,000 petaflops, with more than 90% dedicated to intelligent computing. Goldman Sachs described Ulanqab in a special report as "one of the largest and fastest-growing AI computing power clusters in the Asia-Pacific region."

The main roads in the Chahar High-Tech Zone are named Huawei Avenue, Apple Avenue, and Alibaba Avenue. Driving through the zone, you pass the offices of nearly every major Chinese tech company. Data center electricity consumption now accounts for 7.3% of the city's total power usage.

| Ulanqab Data Center Metric | Value | Period |
|---|---|---|
| Signed data center projects | 89 projects / 68 companies | As of June 2026 |
| Total investment committed | 500+ billion yuan ($69B) | As of June 2026 |
| Operating compute capacity | 165,000 petaflops | June 2026 |
| Intelligent computing share | >90% of total capacity | June 2026 |
| Data center power consumption | 7.3% of city total | Jan–Jul 2026 |
| Year-end capacity target | 200,000+ petaflops | End of 2026 |
| Planned+operational DC capacity | ~12.5 GW | As of June 2026 |
| DeepSeek Ascend 950DT deployment | 160,000+ chips (planned) | Bloomberg, Sept 2026 |

The DeepSeek deployment, if completed, would represent one of the largest known Ascend chip clusters in the world — a full order of magnitude beyond the 10,000-chip Ascend cluster that Shenzhen launched earlier in 2026 and the 50,000 domestic chips that Meituan used to train its AI model.

---

## What This Means for the Global AI Landscape

The strategic implications extend well beyond China's borders.

For Nvidia, the threat is not immediate — the company still dominates the global AI chip market outside China, and its hardware advantage in training workloads remains substantial. But the long-term risk is structural. If the Ascend ecosystem reaches a critical mass of developer adoption, if DeepSeek's open-source libraries become the standard toolkit for running AI on non-Nvidia hardware, then the moat that CUDA has provided for two decades begins to narrow. Nvidia's competitive advantage was never just silicon. It was the fact that switching away from Nvidia meant rewriting your entire software stack. DeepSeek is systematically removing that switching cost.

For the global AI community, the release creates a genuinely open alternative. Teams in countries and organizations that cannot or will not use Nvidia hardware — whether due to export controls, procurement policies, cost constraints, or strategic preference — now have access to a production-proven software stack for a non-Nvidia platform. This is particularly significant for inference workloads, where the performance gap between Ascend and Nvidia chips is smallest and the cost advantage of domestic hardware is most pronounced.

For China, the release accelerates the compute-sovereignty timeline. Bernstein forecasts that by 2028, domestic chip production will exceed domestic demand, with a supply-demand ratio of 104%. The software layer was the last major bottleneck. With DeepSeek's infrastructure now public, the Ascend ecosystem has its reference implementation, its debugging guide, and its training wheels — all in one release.

| Stakeholder | Short-Term Impact | Long-Term Implication |
|---|---|---|
| Nvidia | Minimal (China revenue already near zero) | Structural erosion of CUDA ecosystem moat |
| Huawei | Immediate validation of Ascend platform | Accelerated ecosystem growth, developer adoption |
| DeepSeek | Community goodwill, talent attraction | De facto standard-setter for Ascend development |
| Chinese AI startups | Lower barrier to Ascend adoption | Reduced dependence on Nvidia hardware |
| Global AI community | New open-source tools to study and adapt | Viable non-Nvidia inference pathway |
| U.S. policymakers | Continued decoupling of China AI stack | Questions about effectiveness of export controls |

---

## The Road Ahead: What to Watch

Several developments in the coming months will determine whether this release is remembered as a milestone or a footnote.

**Ascend 960 roadmap.** At Huawei Connect 2026, Huawei pulled its next-generation chip roadmap forward by three full quarters. The Ascend 960DT (training variant) is now targeting Q1 2027 with up to 288 GB of memory and approximately 4 petaFLOPS at FP4 precision. The inference-focused 960PR follows in Q3 2027, with the 970 and 980 scheduled for 2028 and 2029 — a one-generation-per-year cadence that matches Nvidia's pre-ban tempo. The open-source software stack provides the on-ramp for developers to write code today that will run on hardware arriving over the next three years.

**Community adoption.** The metric to watch is not GitHub stars — it is pull requests, forks with substantive modifications, and third-party projects built on top of DeepSeek's libraries. The CUDA ecosystem was not built by Nvidia alone; it was built by millions of developers who discovered optimizations, wrote tutorials, and created tools that Nvidia never imagined. The Ascend ecosystem needs the same organic growth to become self-sustaining.

**Performance benchmarks.** Early reports suggest that Ascend 950 chips are roughly comparable to Nvidia's H200 for inference workloads, with DeepSeek's custom kernels narrowing the gap further. But training workloads remain a different story — the performance and software maturity gap is wider there, and closing it will require both hardware improvements (the 960DT) and continued software optimization. Watch for benchmark publications from independent researchers running DeepSeek's open-source stack on Ascend hardware.

**The CANN developer ratio.** Huawei's disclosure that external developers now make up 61% of the CANN community was a significant milestone. If that ratio continues to climb — and if the absolute numbers scale from thousands to hundreds of thousands — the ecosystem argument for Ascend becomes self-reinforcing. More developers means more tools, more documentation, more Stack Overflow answers, which attracts more developers.

**Nvidia's counter-moves.** Nvidia is not standing still. The company's $500 billion infrastructure financing plan, its continued hardware leadership in training, and its efforts to maintain CUDA's relevance through open standards (OpenAI's Triton, for instance, is a CUDA-compatible compiler that Nvidia has tacitly supported) all represent countervailing forces. The AI chip war is not a one-sided story, and anyone who tells you Nvidia is finished has not been paying attention.

---

## The Bigger Picture: Open Source as Strategy

There is a pattern in DeepSeek's behavior that is worth naming explicitly. This is not the first time the company has open-sourced strategically important infrastructure. Earlier in 2026, it published its GPU-side libraries. Last year, it released the model weights for V3 and R1 — moves that sent shockwaves through the industry and arguably triggered the current wave of open-source AI competition.

Each release follows the same logic: DeepSeek's competitive advantage is not its code. It is its people, its data, its training methodology, and its ability to iterate faster than anyone else. By open-sourcing the infrastructure layer, DeepSeek commoditizes the tools and keeps the value concentrated in the things that cannot be copied.

This is the same playbook that Google used with Android, that Meta is using with Llama, and that Linux used to demolish the proprietary operating system market. Give away the infrastructure, monetize (or in DeepSeek's case, dominate) the layer above it.

The September 30 release extends this strategy to the hardware abstraction layer — the deepest and most consequential layer yet. By making Ascend development accessible to anyone, DeepSeek is not just helping Huawei. It is building the foundation for an AI ecosystem that does not depend on any single American chip company. That is a strategic goal shared by the Chinese government, by Huawei, and — if the GitHub stars are any indication — by a significant portion of the global developer community.

Whether it succeeds will depend on execution, ecosystem growth, and the continued performance trajectory of Huawei's silicon. But the direction is clear. The walls around Nvidia's garden just got a little lower.

---

## What People Are Saying

**Zhihu (知乎):**
> DeepSeek这波操作相当于把自家厨房的配方全公开了。以前用昇腾芯片做推理，相当于给了你一口好锅但不会做菜。现在DeepSeek把菜谱、火候、刀工全写好了，你照着做就能出菜。对国内AI创业团队来说，这是省了几百万人天的工作量。
>
> *(Translation: "DeepSeek just published its entire kitchen recipe. Before, using Ascend chips for inference was like getting a good wok without knowing how to cook. Now DeepSeek has written out the recipes, the heat control, the knife skills — you just follow along and the dish comes out. For domestic AI startup teams, this saves millions of person-days of engineering work.")*

**Weibo (微博):**
> 英伟达在中国市场份额从95%跌到8%，华为从0到50%。芯片造出来了但软件跟不上，这 gap 谁来填？DeepSeek说：我来。开源六个核心库，直接把昇腾生态的开发门槛砍掉了一大半。这不是做慈善，这是战略——生态建起来了，标准就是DeepSeek定的。
>
> *(Translation: "Nvidia's China share fell from 95% to 8%, Huawei went from zero to 50%. The chips were built but software lagged behind — who fills that gap? DeepSeek said: I will. Open-sourcing six core libraries cuts the Ascend development barrier in half. This is not charity — it's strategy. Once the ecosystem is built, DeepSeek sets the standard.")*

**Twitter/X:**
> DeepSeek open-sourced its entire Ascend toolchain today. TileLang, DeepGEMM, FlashMLA, DeepEP — the works. This is what "compute sovereignty" looks like in practice: not just building domestic chips, but making them actually usable. Nvidia's CUDA moat just got its first serious challenger.

**Douban (豆瓣):**
> 看了下DeepSeek开源的这几个库，质量确实高。DeepGEMM的矩阵乘法优化写得非常干净，比很多商业库都好。以前觉得国产AI芯片生态至少要五年才能赶上CUDA，现在看可能三年就够了。关键看社区能不能接得住。
>
> *(Translation: "I looked at DeepSeek's open-sourced libraries — the quality is genuinely high. DeepGEMM's matrix multiplication optimization is very clean, better than many commercial libraries. I used to think domestic AI chip ecosystems needed at least five years to catch up to CUDA. Now it looks like three might be enough. The key question is whether the community can step up.")*

**V2EX:**
> 刚把DeepEP跑在昇腾910C上测试了一下MoE模型的通信开销，比HCCL原生方案低了40%左右。DeepSeek这个库确实在生产环境用过，代码里的注释和边界处理都很实战。已star，持续关注。
>
> *(Translation: "Just tested DeepEP on Ascend 910C for MoE model communication overhead — about 40% lower than the native HCCL approach. DeepSeek's library has clearly been battle-tested in production. The code comments and edge-case handling are very practical. Starred, will keep watching.")*

**GitHub:**
> The TileLang compiler alone is worth the attention. A high-level language that compiles to Ascend's PTO ISA with auto-tuning — this is the kind of tooling the Ascend ecosystem has been missing. DeepSeek isn't just dumping code; they're showing everyone how it's done. This should accelerate Ascend adoption across the board.

---

## References

1. QbitAI (量子位), "DeepSeek开源昇腾平台基础设施：从GPU到NPU的完整工具链," September 30, 2026. https://www.qbitai.com/2026/09/499263.html
2. Bernstein Research, China AI Chip Market Share Forecast, 2026.
3. Bloomberg, "DeepSeek Plans Big Huawei AI Chip Order to Power New Data Center," September 4, 2026.
4. Washington Post, "Nvidia's AI chip sales in China stall, as local chipmakers gain," June 29, 2026.
5. Goldman Sachs, "China's AI Computing Power" Special Report, 2026.
6. 36Kr (36氪), "Small Inner Mongolian City Famous for Potato Sales Becomes an AI Computing Hub," September 11, 2026.
7. Huawei Connect 2026 keynote, Eric Xu, September 2026.
8. DIGITIMES, China AI Accelerator Shipment Forecast, 2026.
9. TechTimes, "DeepSeek's 160,000-Chip Huawei Order," September 5, 2026.
