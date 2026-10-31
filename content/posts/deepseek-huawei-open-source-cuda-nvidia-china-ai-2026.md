---
title: "Breaking the CUDA Wall: How DeepSeek and Huawei Are Cracking NVIDIA's Software Empire"
date: "2026-10-31"
excerpt: "NVIDIA's real moat was never silicon — it was CUDA, the software layer that locked four million developers into its ecosystem. Now DeepSeek and Huawei have open-sourced a full toolchain that could tear down that wall from the inside."
author: "AI in China Editorial"
readTime: "15 min read"
heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80"
tags: ["DeepSeek", "Huawei", "NVIDIA", "CUDA", "CANN", "Ascend", "TileLang", "Open Source", "China AI", "Semiconductor", "Export Controls", "AI Infrastructure"]
image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80"
keywords: ["DeepSeek Huawei CUDA alternative 2026", "TileLang open source kernel language", "Huawei CANN vs NVIDIA CUDA", "Ascend 950PR specifications", "China AI chip software ecosystem 2026", "DeepSeek open source Ascend toolkit", "NVIDIA China market share collapse", "export controls AI chips China", "Huawei Ascend production 2026", "China AI software sovereignty"]
---

![A circuit board traces its own logic — the battle for AI's software layer is being fought in code, not silicon](https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80)

In a shared workspace in Hangzhou, a 28-year-old machine learning engineer named Chen Wei faces a decision that would have been unthinkable eighteen months ago. Her team needs to deploy a 70-billion-parameter language model for a provincial government client. The model is ready. The budget is approved. The only question is what hardware it will run on.

Chen's employer, a mid-tier AI services firm, has already purchased a rack of Huawei Ascend 950PR accelerators — the inference-optimized chips that Huawei's HiSilicon unit began shipping earlier this year. What her team lacks is the expertise to write low-level kernels for the Ascend architecture. Three of her five engineers know CUDA, NVIDIA's proprietary parallel-computing platform, cold. None have written a line of code for Huawei's CANN stack.

Then, on September 30, 2026, DeepSeek and Huawei published something that changed her calculus: a complete, open-source programming toolchain for Ascend chips, centered on a kernel-language abstraction called TileLang that promises to write optimized Ascend code without hand-tuned assembly. Within two weeks, Chen's team had their model running on domestic hardware.

"We didn't switch because Ascend is better," Chen said in a developer forum post that was shared widely on Chinese social media. "We switched because the tool chain finally doesn't punish us for trying." (我们没有换是因为昇腾更好，而是因为工具链终于不再惩罚尝试。)

Chen's story is being repeated across thousands of Chinese engineering teams in late 2026. And it represents the most dangerous threat NVIDIA has faced since it invented the GPU computing market: not a better chip, but a credible attempt to make the chip's software ecosystem irrelevant.

## The Empire: What CUDA Actually Is and Why It Matters

To understand the threat, you first have to understand what is being threatened.

CUDA — Compute Unified Device Architecture — is not a product. It is not a chip. It is a software platform, launched by NVIDIA in 2007, that lets developers write parallel-computing code that runs on NVIDIA GPUs. Before CUDA, programming a GPU required graphics-specific languages like OpenGL shaders. CUDA turned the GPU into a general-purpose supercomputer that any C++ programmer could access.

The result was a lock-in so complete that the term "CUDA moat" became shorthand for one of the most durable competitive advantages in technology history.

| CUDA Ecosystem Metric | Figure (2026) |
|---|---|
| Registered CUDA developers worldwide | 4.2 million+ |
| NVIDIA GPU market share (AI training) | ~92% |
| NVIDIA GPU market share (AI inference) | ~85% |
| CUDA-optimized libraries on GitHub | 1,800+ |
| Years of accumulated CUDA optimizations | 19 (since 2007) |
| Universities teaching CUDA as standard curriculum | 800+ |
| AI frameworks with first-class CUDA support | All major frameworks |
| AI frameworks with first-class CANN support | 14 (and growing) |

The numbers tell a deceptively simple story: CUDA won because it was first, it was good, and it built an ecosystem that made leaving economically irrational. Every paper published with CUDA code, every GitHub repository with CUDA kernels, every university course teaching CUDA programming, every PyTorch and TensorFlow optimization tuned for NVIDIA hardware — all of it accumulated into a network effect that no competitor could match.

NVIDIA's CEO Jensen Huang understood this deeply. In a 2024 earnings call, when asked about competition from AMD's ROCm platform, Huang's response was characteristically direct: "CUDA is not a moat. It is the ocean." The implication was clear: you do not compete with the ocean. You swim in it.

But oceans can be crossed. And in 2026, two Chinese organizations — one a hedge fund spinoff that became the world's most-watched AI lab, the other a telecommunications giant turned semiconductor powerhouse — decided to build the boat.

## The Challenger: How DeepSeek and Huawei Joined Forces

The DeepSeek-Huawei partnership did not emerge from a conference room deal. It emerged from necessity, converging along two parallel tracks that intersected in early 2026.

Huawei's track was survival. Under U.S. entity list restrictions since May 2019, Huawei had been progressively cut off from American technology — most critically, from TSMC's advanced process nodes and from the CUDA ecosystem that dominates AI development. The company's response was to build replacements: SMIC for manufacturing (stuck at 7nm-class process because EUV lithography is export-controlled), HiBL and HiZQ for high-bandwidth memory, and CANN (Compute Architecture for Neural Networks) as its answer to CUDA.

The problem was that CANN, despite years of development, remained a second-class citizen in the AI world. Porting a model from CUDA to CANN was like translating a novel by hand — technically possible, practically painful. Every kernel, every optimization, every layer of the software stack had to be rewritten or adapted. Most AI teams simply refused.

DeepSeek's track was ideological and strategic. From its founding in 2023, DeepSeek had embraced open-source as a competitive weapon, releasing model weights under permissive licenses and publishing research that made its methods transparent. When the U.S. banned NVIDIA's H20 chip from the Chinese market in April 2025 — the last NVIDIA product legally available for AI workloads in China — DeepSeek faced the same hardware wall as everyone else.

The lab's response was characteristically aggressive: rather than accepting the performance penalty of running on inferior hardware, DeepSeek committed engineering resources to making the hardware better — specifically, to making the software layer good enough that the hardware gap mattered less.

| Partnership Timeline | Event |
|---|---|
| May 2019 | Huawei placed on U.S. Entity List; CANN development accelerates |
| July 2023 | DeepSeek founded by Liang Wenfeng as High-Flyer Quant spinoff |
| October 2022 | First BIS export controls on advanced AI chips |
| October 2023 | H800/A800 banned; Huawei Ascend becomes only domestic alternative at scale |
| April 2025 | NVIDIA H20 effectively banned from China; NVIDIA China revenue collapses |
| December 2025 | Huawei commits to open-sourcing CANN |
| April 2026 | DeepSeek V4 preview launches with day-0 Huawei Ascend Super Node support |
| September 30, 2026 | DeepSeek + Huawei open-source TileLang/Ascend toolkit |
| October 17, 2026 | DeepSeek releases V4.1-Flash-1017 with optimized Ascend kernels |
| November 1, 2026 | DeepSeek Search API and Fetch API billing begins ($0.75/1,000 calls) |

The September 30 toolkit release was the culmination. It included TileLang, a tile-based kernel programming language that DeepSeek had been developing internally for over a year; a set of pre-optimized kernels for common AI operations; migration tools that could automatically convert CUDA kernels to their CANN equivalents; and documentation written in both Chinese and English.

The message was unmistakable: this was not a research project. This was a production-ready attempt to make porting from CUDA to Ascend as painless as possible.

## Head-to-Head: The Numbers Behind the Challenge

The hardware comparison is where most analysis of China's AI chip challenge begins and ends. But the software layer is where the real battle will be decided.

| Specification | Huawei Ascend 950PR | NVIDIA B200 | Gap |
|---|---|---|---|
| FP4 compute | ~1.56 PFLOPS | ~4.5 PFLOPS (est.) | ~2.9x behind |
| FP8 compute | ~1 PFLOPS | ~2.25 PFLOPS | ~2.25x behind |
| Memory capacity | 112 GB HiBL 1.0 | 192 GB HBM3e | 1.7x behind |
| Memory bandwidth | ~1.6 TB/s | ~8 TB/s | 5x behind |
| Process node | SMIC 7nm (N+2) | TSMC 4NP | ~2 generations |
| Price (approximate) | $16,000 | $30,000–40,000 | 2x cheaper |
| Domestic availability (China) | Full | Zero | Huawei wins |
| Software ecosystem | CANN + TileLang (growing) | CUDA (mature, dominant) | NVIDIA wins decisively |

The table tells an uncomfortable truth: Huawei's best chip is roughly one generation behind NVIDIA's best, and the gap is widening at the silicon level. A single Ascend 950 reaches approximate parity with NVIDIA's Hopper generation (H100), not with what NVIDIA is shipping in 2026.

But here is the counterargument that DeepSeek and Huawei are making: for inference workloads — running trained models in production, which is where the majority of AI compute demand now lies — the per-chip gap matters less than the system-level economics. If you can buy two Ascend chips for the price of one NVIDIA chip, and if your software stack is good enough to keep both chips fed, the aggregate throughput can be competitive for many workloads.

| Inference Economics (Est. Q3 2026) | Huawei Ascend (2x 950PR) | NVIDIA (1x B200) |
|---|---|---|
| Hardware cost | ~$32,000 | ~$35,000 |
| FP4 throughput (combined) | ~3.1 PFLOPS | ~4.5 PFLOPS |
| Performance per dollar | ~97 GFLOPS/$ | ~129 GFLOPS/$ |
| Software readiness | Requires porting effort | Zero porting |
| Power consumption | ~700W (combined) | ~1,000W |
| Availability in China | Immediate | Not available |
| Export control risk | None | N/A (already banned) |

For Chinese companies that cannot buy NVIDIA chips at any price, the comparison is moot — Ascend is the only option. The question is whether Ascend is good enough, and whether the software toolchain has crossed the threshold from "painful" to "merely annoying."

By most accounts, the September 30 toolkit brought the experience from "painful" to "tolerable." That may not sound like a breakthrough. In the context of China's AI ecosystem, it is transformative.

## The Technical Reality: What TileLang Actually Does

TileLang is the centerpiece of the DeepSeek-Huawei toolkit, and understanding what it does requires a brief detour into how AI accelerators actually work.

When you run a neural network — say, a large language model generating a response — the computation boils down to massive numbers of matrix multiplications. On an NVIDIA GPU, these are executed by CUDA cores, and the code that tells those cores what to do is called a kernel. Writing an efficient kernel in raw CUDA requires deep knowledge of the GPU's memory hierarchy, thread scheduling, and hardware-specific optimizations. It is the programming equivalent of hand-building an engine: rewarding for experts, impractical for everyone else.

TileLang abstracts this. Instead of writing low-level CUDA or CANN code, developers write in a higher-level tile-based language that describes what the computation should do, and TileLang's compiler generates the optimized kernels for the target hardware — whether that is an NVIDIA GPU or a Huawei Ascend chip.

The implication is profound: with TileLang, a developer does not need to know whether their code will run on NVIDIA or Huawei hardware. The compiler handles the differences. This is the same model that made PyTorch and TensorFlow dominant — abstract away the hardware, let the framework deal with it — applied one layer lower, at the kernel level.

| TileLang vs Hand-Tuned Kernels | TileLang (Auto-Generated) | Hand-Tuned CUDA/CANN |
|---|---|---|
| Developer expertise required | Moderate | Expert |
| Lines of code per kernel | ~10–30 | ~200–500 |
| Performance vs. optimal | ~85–95% | ~100% |
| Cross-platform portability | Yes (NVIDIA + Ascend) | No |
| Time to port existing model | Days | Weeks–months |
| Open source | MIT license | N/A |
| GitHub stars (first month) | 28,400 | N/A |

The performance penalty — losing 5–15% compared to hand-tuned kernels — is real but acceptable for most production workloads. For a company deploying a model to serve millions of users, the difference between 92% and 100% kernel efficiency is negligible compared to the difference between being able to deploy on domestic hardware and not being able to deploy at all.

DeepSeek's own usage validates the approach. When V4 launched in April 2026, it shipped with day-0 support for Huawei Ascend (via CANN), Cambricon, and Hygon — three domestic Chinese chip platforms — alongside NVIDIA. The V4.1-Flash update in October 2026 included kernel-level optimizations for Ascend that DeepSeek claims brought inference throughput within 8% of equivalent NVIDIA H800 performance for their specific model architecture.

Those are vendor-adjacent numbers and should be treated with appropriate skepticism. But even if the real gap is 15–20%, the trajectory is what matters: six months ago, the gap was 40%. The software is closing faster than the hardware.

## The Production Bottleneck: Hardware Still Constrains Everything

For all the software progress, the CUDA challenge runs into a hard physical wall: Huawei cannot manufacture enough Ascend chips to replace NVIDIA's installed base, even if every Chinese company wanted to switch tomorrow.

The bottleneck is not compute dies. SMIC, China's largest domestic foundry, can produce 7nm-class silicon at meaningful volumes. The constraint is high-bandwidth memory — the HBM stacks that sit next to the compute die and feed it data at terabytes per second.

| Huawei Ascend Production Reality (2026 Estimates) | Figure |
|---|---|
| SMIC 7nm AI die production capacity | ~1.2 million dies/year |
| CXMT HBM stack production capacity | ~2 million stacks/year |
| Maximum Ascend-class chips (HBM-limited) | ~250,000–300,000/year |
| Huawei 910C production target (2026) | 600,000 units |
| Actual expected 2026 output (analyst consensus) | 350,000–400,000 |
| NVIDIA B200 annual production capacity (est.) | 2.5–3 million units |
| Huawei share of NVIDIA's aggregate AI compute | ~5% (optimistic), ~1% (median) |

The HBM constraint is severe enough that the Ascend 950PR and 950DT actually have lower total processing performance than 2025's Ascend 910C in some metrics — a sign that Huawei is optimizing around memory supply limitations rather than pure compute. According to SemiAnalysis estimates, Chinese memory maker CXMT can produce only about 2 million HBM stacks per year, enough for roughly 250,000–300,000 Ascend-class chips, even though SMIC could fabricate dies for more than a million.

By comparison, NVIDIA's 2026 production capacity for B200-class chips alone is estimated at 2.5 to 3 million units, with TSMC's 4nm process and a mature HBM supply chain from SK Hynix, Micron, and Samsung providing effectively unlimited memory.

The Council on Foreign Relations' most Huawei-favorable scenario still has the company producing only about 5% of NVIDIA's total AI compute output in 2026, falling toward 2% in 2027. The median estimate is closer to 1%.

This is the paradox at the heart of China's AI chip strategy: the software is ready before the hardware can scale. DeepSeek and Huawei have built a credible CUDA alternative, but they cannot yet manufacture enough chips to make it the default choice. The toolkit is a bet on the future — a future where domestic production eventually catches up.

## The Broader Play: China's Software Sovereignty Strategy

Step back from the technical details, and the DeepSeek-Huawei toolkit reveals itself as one move in a much larger strategic pattern.

China's AI sovereignty strategy operates across four layers: hardware manufacturing (SMIC, CXMT), chip design (Huawei HiSilicon, Cambricon, Hygon), model development (DeepSeek, Qwen, Kimi, GLM), and software infrastructure (CANN, TileLang, MindSpore). The September 30 toolkit connects all four layers into a coherent stack.

| China's AI Sovereignty Stack (2026) | Layer | Primary Players | Status |
|---|---|---|---|
| Chip fabrication | SMIC (7nm), CXMT (HBM) | Constrained by EUV export ban |
| Chip design | Huawei HiSilicon, Cambricon, Hygon | Competitive at 7nm, 1–2 gens behind |
| System integration | Atlas SuperCluster, Sugon Dengfeng | 100,000-chip fully domestic cluster online |
| Software platform | CANN, TileLang, MindSpore | Rapidly improving, still behind CUDA |
| Model layer | DeepSeek, Qwen, Kimi, GLM | Frontier-competitive, open-weight advantage |
| Application layer | Thousands of AI startups | Thriving, driving domestic chip demand |

The Zhengzhou supercluster, switched on in August 2026, is the most visible proof of what this stack can accomplish at scale. The 100,000-chip system — built entirely from Sugon accelerators, Chinese interconnect, and domestic immersion cooling — is Chinese at every layer. Its per-chip performance still trails NVIDIA equivalents, and its workloads currently lean toward double-precision scientific computing rather than frontier model training. But it exists, it works, and it did not require a single American component.

Meanwhile, the demand side is being pulled by government mandate and commercial reality simultaneously. After DeepSeek V4 launched with day-0 domestic chip support, Alibaba, ByteDance, and Tencent collectively ordered hundreds of thousands of Ascend 950 processors. ByteDance alone placed a $5.6 billion order for Ascend chips to power its Volcengine AI cloud. When Washington cleared the H200 for export to ten Chinese firms in May 2026 — with a 25%-of-revenue condition attached — Beijing reportedly told those companies not to buy, keeping investment pointed at domestic chips. Actual H200 deliveries to China remained at zero.

This is not market economics. This is industrial policy, executed with the full weight of the Chinese state behind it.

## The Global Response: NVIDIA Concedes, the World Watches

NVIDIA's response to all of this has been remarkably candid: Jensen Huang has said, on the record, that his company has "largely conceded" China's advanced AI chip market to Huawei. NVIDIA's China revenue, which was $17 billion in fiscal 2023, has fallen to effectively zero for data-center AI products by the end of fiscal 2026.

The company's strategy has shifted from defending China to containing the damage. NVIDIA continues to sell gaming GPUs and automotive chips in China — products not subject to AI-specific export controls. But for the AI accelerator market, the door is shut, and Huang knows it.

| NVIDIA China Timeline | Event |
|---|---|
| FY2023 | China data-center revenue: ~$17B (21% of total) |
| October 2022 | A100/H100 banned from China; A800/H800 created as compliance variants |
| October 2023 | A800/H800 banned; H20 created as next compliance variant |
| April 2025 | H20 effectively banned; $4.5B inventory write-off |
| May 2026 | Huang says NVIDIA has "largely conceded" China to Huawei |
| August 2026 | NVIDIA China data-center AI revenue: effectively zero |
| October 2026 | DeepSeek/Huawei open-source toolkit consolidates domestic alternative |

The more interesting global response is not from NVIDIA but from the broader AI industry. If TileLang succeeds — if it becomes genuinely easy to write code that runs on both NVIDIA and Ascend hardware — it fundamentally changes the competitive dynamics of the AI chip market. It turns CUDA from a moat into a commodity.

That is a nightmare scenario for NVIDIA. The company's valuation premium is built not just on hardware superiority but on the assumption that the software ecosystem locks customers in even if competitors approach hardware parity. If the lock breaks, NVIDIA must compete purely on silicon performance — a competition it would likely still win in 2026, but with thinner margins and less certainty about the future.

AMD, Intel, and a dozen smaller chip companies are watching the DeepSeek-Huawei experiment with intense interest. If TileLang-style abstraction works for Ascend, the same approach could work for any alternative accelerator. The open-source kernel-compiler layer could become the Linux of AI hardware — a neutral platform that prevents any single vendor from controlling the software stack.

## What's Next: The 2027 Horizon

Three variables will determine whether the CUDA challenge succeeds or stalls.

**First, HBM production.** If CXMT can scale HBM output from 2 million stacks to 5 million by mid-2027, Huawei's production constraint relaxes dramatically. Reports suggest CXMT is building new HBM lines with domestic equipment, but the timeline is uncertain. Until HBM supply expands, Ascend remains supply-constrained in a market with effectively unlimited demand.

**Second, developer adoption.** The TileLang toolkit needs critical mass. DeepSeek's own usage gives it credibility, but the platform needs independent developers, third-party libraries, and community contributions to become self-sustaining. The 28,400 GitHub stars in the first month are encouraging, but stars are not production deployments. The real test comes in the first half of 2027, when we will see whether enterprise AI teams outside the DeepSeek/Huawei orbit adopt the toolchain voluntarily.

**Third, U.S. policy response.** The current export control regime targets hardware — chips, lithography, HBM. Software has been largely untouched. If TileLang gains traction, Washington may face pressure to extend export controls to AI development tools, cloud platforms, or even open-source repositories. Such a move would be legally complex and practically difficult to enforce, but it cannot be ruled out.

Huawei's own roadmap offers a glimpse of the endgame. The Ascend 960, scheduled for Q4 2027, is the first part on Huawei's public roadmap that could beat an NVIDIA H200 on performance or memory bandwidth. If Huawei can pair a competitive chip with a mature software ecosystem by then, the CUDA wall will not just be cracked — it will be structurally irrelevant for the Chinese market.

| 2027 Milestones to Watch | Expected Date | Significance |
|---|---|---|
| CXMT HBM capacity expansion | Q1–Q2 2027 | Unlocks Ascend production scaling |
| TileLang v2.0 (multi-vendor support) | Q1 2027 | Extends beyond Ascend to Cambricon, Hygon |
| Ascend 960 launch | Q4 2027 | First part targeting H200+ performance |
| CUDA 13.0 release | Mid-2027 | NVIDIA's counter — expected AI-specific features |
| DeepSeek V5 | TBD 2027 | Will day-0 Ascend support become standard? |
| U.S. policy review on AI software exports | Ongoing | Potential expansion of export controls to toolchain |

## The Bottom Line

The story of DeepSeek and Huawei's open-source CUDA challenge is not a story about a chip. It is a story about what happens when the world's most sophisticated AI lab, operating under the world's most aggressive technology sanctions, decides that the only way forward is to rebuild the entire software stack from first principles.

The hardware gap is real and will persist through at least 2027. A single Ascend 950 does not beat a single NVIDIA B200, and the manufacturing constraints — especially HBM supply — mean Huawei cannot produce enough chips to compete on volume. Jensen Huang's CUDA ocean is still very much an ocean.

But oceans have shores. And on the shore that is China's domestic AI market — a market of 500 million potential enterprise AI users, backed by government procurement mandates and commercial desperation — a complete alternative stack now exists. It is rougher, less polished, and measurably slower than the NVIDIA equivalent. But it exists, it is improving at a rate that outpaces the hardware gap's growth, and it is free.

For the rest of the world, the implications extend beyond China. If open-source abstraction layers like TileLang make it possible to write AI code that runs efficiently on any hardware, the era of CUDA lock-in — and the pricing power that comes with it — may be approaching its end. Not because NVIDIA's competitors built better chips, but because they made the chips interchangeable.

Chen Wei, the engineer in Hangzhou, does not care about any of this. She cares that her team's model is running, her client's deadline is met, and her engineers did not have to spend three months learning CANN assembly. "The tools just worked," she wrote. That is either the most mundane endorsement or the most dangerous sentence NVIDIA's shareholders could hear.

---

## Social Media Reactions

**@量子位前线观察 (QbitAI Frontline Observer) — Weibo, 2.4M followers**
> DeepSeek开源TileLang这件事，被严重低估了。这不是简单的代码发布，而是直接挑战CUDA的根基。想象一下：如果AI模型可以无缝跑在任何国产芯片上，NVIDIA的护城河还剩多少？(DeepSeek open-sourcing TileLang is seriously underestimated. This isn't just a code release — it's a direct challenge to CUDA's foundation. Imagine: if AI models can seamlessly run on any domestic chip, how much of NVIDIA's moat remains?)

**@芯片说 (ChipTalk) — Zhihu, 890K followers**
> 作为前CUDA开发者，我试用了TileLang三周。诚实地说：对于标准Transformer推理，体验已经接近CUDA的80%。但训练还是不行，尤其是需要自定义kernel的场景。不过考虑到半年前这个数字是30%，进步速度惊人。(As a former CUDA developer, I tried TileLang for three weeks. Honestly: for standard Transformer inference, the experience is already at about 80% of CUDA. But training still doesn't work well, especially for custom kernel scenarios. Still, considering this number was 30% six months ago, the progress is remarkable.)

**@硅谷八卦女 (Silicon Valley Gossip Girl) — Weibo, 1.1M followers**
> NVIDIA说不在乎中国市场，但财报不会说谎。中国区数据中心收入从170亿跌到接近零，这不是"战略调整"，这是被扫地出门。现在连软件护城河都开始漏水了。(NVIDIA says it doesn't care about the China market, but financial reports don't lie. China data-center revenue fell from $17 billion to near zero. This isn't a "strategic adjustment" — it's being kicked out. Now even the software moat is leaking.)

**@国产芯片加油 (Domestic Chips Cheerleader) — Bilibili, 450K followers**
> 不要光看跑分！CUDA的真正威力是19年的生态积累，几百万开发者的肌肉记忆，800所大学的课程体系。TileLang要替代的不是一个软件，而是一个文明。(Don't just look at benchmarks! CUDA's real power is 19 years of ecosystem accumulation, millions of developers' muscle memory, 800 university curricula. What TileLang needs to replace is not a software — it is a civilization.)

**@AI投资笔记 (AI Investment Notes) — X/Twitter, 320K followers**
> DeepSeek's open-source strategy is genius. They can't beat NVIDIA on chips, so they're making chips interchangeable. If the hardware layer becomes a commodity, the value migrates to models and applications — where DeepSeek already wins. This is asymmetric warfare at its finest.

**@老石谈芯 (LaoShi Talks Chips) — WeChat Official Account, 780K subscribers**
> 冷静一下。HBM产能才是卡脖子的关键，不是软件。CXMT一年只能做200万堆HBM，够25万颗昇腾芯片。NVIDIA一年产300万颗B200。软件再好，没芯片跑也是空中楼阁。(Let's be calm. HBM capacity is the real bottleneck, not software. CXMT can only make 2 million HBM stacks a year — enough for 250,000 Ascend chips. NVIDIA produces 3 million B200s annually. Great software without chips to run it is a castle in the air.)

---

## Sources & Further Reading

1. [DeepSeek, Huawei Ascend Tools vs CUDA Alternative — Tech Insider, October 2026](https://tech-insider.org/deepseek-huawei-ascend-tools-cuda-alternative-2026/)
2. [Huawei Ascend 950PR: The 1.56 PFLOP AI Chip vs Nvidia — Tech Insider, October 2026](https://tech-insider.org/huawei-ascend-950pr-ai-chip-nvidia-china-2026/)
3. [Huawei Ascend 950 vs NVIDIA B300 and B200 — Spheron Network, June 2026](https://www.spheron.network/blog/huawei-ascend-950-vs-nvidia-b300-b200-llm-inference-2026/)
4. [Huawei Ascend 950 & Pangu: China's 2026 AI-Chip Play — Convly, August 2026](https://convly.ai/huawei-ascend-950-pangu-explained-2026/)
5. [Ascend, Cambricon, Hygon vs Export Controls — China AI Dispatch, July 2026](https://chinaaidispatch.com/topics/chips-export-controls/)
6. [Two Loops: How China's Open AI Strategy Reinforces Its Industrial Dominance — USCC, March 2026](https://www.uscc.gov/sites/default/files/2026-03/Two_Loops--How_Chinas_Open_AI_Strategy_Reinforces_Its_Industrial_Dominance.pdf)
7. [Huawei plans 600,000 Ascend 910C chips by 2026 — Huawei Central, September 2025](https://www.huaweicentral.com/huawei-plans-600000-ascend-910c-chips-by-2026-to-block-nvidia-in-china/)
8. [AI News Today, October 31 — AI Weekly](https://aiweekly.co/ai-news-today)

*Article by AI in China Editorial. Data as of October 31, 2026. Hardware specifications are vendor figures unless otherwise noted. Production estimates reflect analyst consensus and are subject to revision.*
