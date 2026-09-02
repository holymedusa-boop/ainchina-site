---
title: "China's AI Chip Triopoly: How Huawei Ascend, Cambricon, and Moore Threads Are Building a Post-NVIDIA Future"
description: "With NVIDIA's China revenue down to less than 1% of data center sales, three domestic chipmakers—Huawei Ascend, Cambricon, and Moore Threads—have formed a triopoly that now powers the world's largest AI market. From the Ascend 950 series to Cambricon's MLU690 and Moore Threads' MTT S5000, China's AI infrastructure is being rebuilt on silicon it can no longer import."
keywords: ["China AI chip", "Huawei Ascend 950", "Cambricon MLU690", "Moore Threads MTT S5000", "NVIDIA China ban", "China semiconductor independence", "AI chip triopoly", "domestic AI chips China", "SMIC HBM", "Meituan LongCat domestic chips", "China chip sanctions", "Ascend 950DT", "WAIC 2026", "China AI infrastructure", "Huawei AI chip ecosystem"]
author: "AI in China Editorial"
date: "2026-09-03"
excerpt: "NVIDIA's China revenue has collapsed to less than 1% of its data center business. In its place, three domestic chipmakers—Huawei Ascend, Cambricon, and Moore Threads—have formed a triopoly now powering the world's largest AI market. From the Ascend 950 series shipping this quarter to Cambricon's MLU690 rivaling NVIDIA's H200, China's AI infrastructure is being rebuilt on silicon it can no longer import."
slug: "china-ai-chip-triopoly-huawei-cambricon-moore-threads-post-nvidia-2026"
image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=1200&q=80"
related: [
  "/blog/china-ai-training-gold-rush-billion-yuan-education-2026/",
  "/blog/china-ai-spending-war-billions-capex-2026/",
  "/blog/china-embodied-ai-physical-internet-2026/",
  "/blog/china-open-weight-ai-models-conquer-global-api-market-2026/"
]
category: "AI Business"
---

heroImage: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=1200"

*Photo: Semiconductor wafer manufacturing. As US export controls tighten, China's domestic AI chip ecosystem has accelerated from catch-up to genuine competition. Image: Unsplash*

---

## The Zero Percent Moment

On the earnings call that NVIDIA held in late August 2026, a single data point passed almost without comment—but it spoke volumes. China revenue as a share of the company's data center business had fallen to **less than 1%**. Not long ago, China accounted for roughly 20% of NVIDIA's data center revenue, generating more than $10 billion annually. Now that figure is a rounding error.

The reason is not a lack of demand. China's AI market is the largest in the world by deployment scale, with an estimated **1.8 million AI accelerators** deployed in domestic data centers as of mid-2026. The reason is that China can no longer buy NVIDIA's best chips, and the chips it can buy—the performance-degraded H20 and compliance-modified versions—are no longer competitive against what domestic manufacturers are producing.

This is the zero percent moment. It is the point at which a market the size of China's entire AI infrastructure stack has been forced to build itself from domestic silicon. And what has emerged is not a single champion but a triopoly: three companies, each with a fundamentally different technical strategy, collectively replacing the NVIDIA ecosystem that once dominated the world's most important AI market.

The three players are **Huawei Ascend**, the ecosystem leader betting on a vertically integrated stack from chip to cloud; **Cambricon**, the compute density specialist building what analysts call "China's H100"; and **Moore Threads**, the full-function GPU company taking the hardest technical route but achieving the broadest software compatibility. Together, they represent the most consequential semiconductor experiment in modern technology history.

![AI chip wafer](https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&q=80)

*Photo: Advanced semiconductor manufacturing. China's domestic chip industry has crossed a threshold where locally produced accelerators now outperform the compliance-modified NVIDIA chips still available for import. Image: Unsplash*

---

## The Comparison Framework: Three Routes to Independence

Understanding China's domestic AI chip landscape requires moving past the simplistic narrative of "NVIDIA vs. everyone else." The three major domestic players are not interchangeable substitutes for NVIDIA hardware. Each has chosen a different technical architecture, a different software strategy, and a different market position. The comparison is not between three versions of the same thing but between three fundamentally different answers to the same question: how do you build world-class AI compute without access to the world's most advanced semiconductor supply chain?

| Dimension | Huawei Ascend | Cambricon MLU | Moore Threads MTT |
|---|---|---|---|
| **Core Architecture** | DaVinci AI-dedicated NPU | MLU (Machine Learning Unit) | MUSA (full-function GPU) |
| **Primary Strength** | Ecosystem integration, scale | Compute density, efficiency | Software compatibility, GPU generality |
| **Process Node** | SMIC 7nm-class (N+2) | SMIC 7nm-class | SMIC 7nm-class |
| **Peak FP16 (per chip)** | ~500 TFLOPS | ~500 TFLOPS | ~480 TFLOPS |
| **Peak FP8 (per chip)** | ~1 PFLOPS | ~1 PFLOPS | ~960 TFLOPS |
| **Memory** | 128–144GB HBM3E | 192GB HBM3E | 128GB HBM3E |
| **Interconnect** | HCCS 392GB/s | MLU-Link 480GB/s | MTLink 400GB/s |
| **Software Stack** | CANN + MindSpore + Huawei Cloud | Bang C / BangPy + MindSpore/PyTorch | MUSA SDK + CUDA compatibility layer |
| **2026 Deployment Target** | 1.6 million chips | ~300,000 chips | ~150,000 chips |
| **Key Customer Profile** | Cloud providers, government, telecom | HPC centers, research institutes | Gaming, graphics, AI inference |

*Table 1: Head-to-head comparison of China's three major domestic AI chip platforms. All three are manufactured on SMIC's 7nm-class process, but their architectural approaches diverge significantly. Data: Company announcements, industry analyst estimates, WAIC 2026 presentations.*

---

## Huawei Ascend: The Ecosystem Play

Of the three players, Huawei Ascend is the most vertically integrated and the most strategically positioned. The Ascend series is not merely a chip; it is the hardware foundation of an ecosystem that includes the CANN (Compute Architecture for Neural Networks) software stack, the MindSpore deep learning framework, Huawei Cloud's ModelArts platform, and the Kunpeng server CPUs that Ascend chips are designed to pair with.

This vertical integration is both Ascend's greatest strength and its greatest limitation. On one hand, customers who commit to the Ascend ecosystem get a tightly optimized, end-to-end solution where hardware and software are co-designed. On the other hand, the ecosystem is largely closed: migrating models from PyTorch or TensorFlow to MindSpore requires significant engineering effort, and the CANN stack is proprietary to Huawei hardware.

### The Ascend 950 Series: Two Flavors, One Architecture

The current flagship is the **Ascend 950 series**, which comes in two primary variants. The **Ascend 950PR** (Public Release), which began shipping in the first quarter of 2026, is designed for on-premises deployment by enterprise customers and cloud providers. The **Ascend 950DT** (Data Center/Training), which Huawei Cloud began deploying in August 2026 with commercial availability expected in the fourth quarter, is optimized for large-scale training clusters and features enhanced interconnect bandwidth for multi-node scaling.

| Specification | Ascend 910B (2023) | Ascend 950PR (2026) | Ascend 950DT (2026) |
|---|---|---|---|
| **Peak FP16** | ~320 TFLOPS | ~500 TFLOPS | ~500 TFLOPS |
| **Peak FP8** | ~640 TFLOPS | ~1 PFLOPS | ~1 PFLOPS |
| **Peak FP4** | N/A | ~2 PFLOPS | ~2 PFLOPS |
| **HBM Capacity** | 64GB HBM2e | 128GB HBM3E | 144GB HBM3E |
| **HBM Bandwidth** | ~1.6 TB/s | ~3.5 TB/s | ~4.0 TB/s |
| **Interconnect** | HCCS 392GB/s | HCCS 392GB/s | HCCS 392GB/s |
| **TDP** | ~310W | ~400W | ~450W |
| **Process Node** | TSMC 7nm | SMIC N+2 (7nm-class) | SMIC N+2 (7nm-class) |

*Table 2: Ascend chip generation comparison. The 950 series represents a significant leap from the 910B, particularly in memory bandwidth and FP4 support for quantized inference. The move from TSMC to SMIC manufacturing is the most consequential supply chain shift. Data: Huawei technical specifications, industry analyst estimates.*

Huawei's 2026 production target is **1.6 million Ascend chips**, a figure that would make it the largest domestic AI accelerator deployment in history. For context, NVIDIA shipped approximately 3.8 million data center GPUs globally in 2024. If Huawei hits its target, Ascend would represent roughly 40% of NVIDIA's global volume from a single domestic market—a staggering achievement for a product that did not exist in commercial form five years ago.

The Ascend ecosystem has achieved significant software maturity. At the 2026 World Artificial Intelligence Conference (WAIC) in Shanghai, Huawei demonstrated that major Chinese models—including Qwen3.8, GLM-5, and the DeepSeek series—can be trained and inferred on Ascend hardware with performance within 15–25% of equivalent NVIDIA configurations. The gap is real but narrowing, and for many Chinese customers, the gap is more than offset by the absence of export control risk.

---

## Cambricon MLU: The Compute Density Specialist

While Huawei has pursued ecosystem breadth, **Cambricon** has pursued compute density. The company's **MLU (Machine Learning Unit)** architecture is designed as a dedicated AI accelerator rather than a general-purpose GPU, sacrificing graphics and general compute flexibility for maximum throughput on the matrix operations that dominate deep learning workloads.

This strategy has produced the **MLU690**, a chip that industry analysts describe as "China's closest answer to the H200." The MLU690 delivers roughly 500 TFLOPS in FP16 and approximately 1 PFLOPS in FP8—competitive with the NVIDIA H100 and approaching the H200 in raw compute. Where Cambricon has distinguished itself is in memory capacity: the MLU690 features **192GB of HBM3E**, the largest memory configuration of any domestic AI chip and a critical advantage for training large language models, where memory capacity often bottlenecks before compute does.

| Specification | Cambricon MLU370-X8 | Cambricon MLU690 (2026) | NVIDIA H100 SXM5 |
|---|---|---|---|
| **Peak FP16** | ~256 TFLOPS | ~500 TFLOPS | ~989 TFLOPS |
| **Peak FP8** | ~512 TFLOPS | ~1 PFLOPS | ~1.98 PFLOPS |
| **HBM Capacity** | 48GB HBM2e | 192GB HBM3E | 80GB HBM3 |
| **HBM Bandwidth** | ~1.2 TB/s | ~3.8 TB/s | ~3.35 TB/s |
| **Interconnect** | MLU-Link 200GB/s | MLU-Link 480GB/s | NVLink 900GB/s |
| **TDP** | ~150W | ~350W | ~700W |
| **Process Node** | TSMC 7nm | SMIC 7nm-class | TSMC 4N |

*Table 3: Cambricon MLU690 vs. its predecessor and NVIDIA's H100. While raw compute remains below the H100, the MLU690's 192GB memory capacity and lower power draw give it advantages in memory-bound workloads and data center efficiency. Data: Cambricon product specifications, NVIDIA technical documentation, industry benchmarks.*

Cambricon's strategy has been to win in the highest-value segments of the market: national supercomputing centers, major research institutes, and large-scale training clusters where memory capacity and power efficiency matter more than raw TFLOPS. The company has secured deployment contracts with the Chinese Academy of Sciences, multiple national laboratories, and several of China's largest AI research groups.

The MLU software stack—Bang C and BangPy—remains the primary adoption barrier. While Cambricon has invested heavily in PyTorch and MindSpore compatibility layers, developers report that achieving optimal performance requires writing code specifically for the MLU architecture. This is a manageable burden for large organizations with dedicated engineering teams but a significant friction point for smaller developers and startups.

---

## Moore Threads MTT: The Full-Function GPU Bet

The third player, **Moore Threads**, has taken the most audacious technical route. Rather than building a dedicated AI accelerator like Ascend or MLU, Moore Threads is building a **full-function GPU**—a chip that can handle graphics rendering, video encoding, general-purpose parallel computing, and AI inference simultaneously. This is the same architecture that NVIDIA pioneered and that dominates the global market.

The company's flagship, the **MTT S5000**, is built on the MUSA (Moore Threads Unified System Architecture) and features approximately 480 TFLOPS in FP16 and 960 TFLOPS in FP8. While these numbers are slightly below Ascend and MLU on raw AI compute, the S5000's advantage is software compatibility: Moore Threads has developed a **CUDA compatibility layer** that allows NVIDIA CUDA code to run on MTT hardware with minimal modification.

| Specification | Moore Threads MTT S4000 (2025) | Moore Threads MTT S5000 (2026) | NVIDIA H20 (China-compliant) |
|---|---|---|---|
| **Peak FP16** | ~200 TFLOPS | ~480 TFLOPS | ~148 TFLOPS |
| **Peak FP8** | ~400 TFLOPS | ~960 TFLOPS | ~296 TFLOPS |
| **HBM Capacity** | 64GB HBM2e | 128GB HBM3E | 96GB HBM3 |
| **HBM Bandwidth** | ~1.2 TB/s | ~3.2 TB/s | ~4.0 TB/s |
| **CUDA Compatibility** | Partial | Extensive (95%+ API coverage) | Native (NVIDIA) |
| **TDP** | ~200W | ~350W | ~400W |
| **Graphics Support** | Yes (DirectX/Vulkan) | Yes (DirectX 12/Vulkan 1.3) | Limited |

*Table 4: Moore Threads MTT S5000 vs. its predecessor and NVIDIA's H20, the most advanced chip NVIDIA is permitted to sell in China. The S5000 significantly outperforms the H20 on compute while offering full GPU functionality. Data: Moore Threads specifications, NVIDIA product documentation.*

The CUDA compatibility strategy is Moore Threads' defining bet. NVIDIA's dominance in AI is as much a software story as a hardware story: fifteen years of CUDA ecosystem development have created the world's deepest library of optimized AI kernels, and migrating code away from CUDA is a multi-year engineering project for any serious AI organization. By building a compatibility layer that intercepts CUDA API calls and translates them to MUSA instructions, Moore Threads offers the closest thing to a drop-in NVIDIA replacement.

The compatibility is not perfect—developers report that 90–95% of CUDA applications run without modification, with the remaining 5–10% requiring manual tuning for optimal performance. But for many organizations, 90% compatibility is dramatically better than the rewrite required for Ascend or MLU.

Moore Threads' deployment scale is smaller than Huawei's but growing rapidly. The company has secured contracts with major gaming and graphics companies (leveraging its GPU rendering capabilities) and is increasingly penetrating the AI inference market, where its CUDA compatibility offers the lowest migration cost.

---

## The Certification Gate: Nine Chips, One Market

In May 2026, China's government took a step that accelerated the domestic chip transition. The **National Information Security Standardization Technical Committee** published a list of **nine domestic AI chips** certified for government and state-owned enterprise procurement. The list included Ascend, Cambricon, Moore Threads, and six other domestic manufacturers.

The certification is not merely a recommendation. For China's massive state-owned enterprise sector—which includes the largest banks, telecom operators, energy companies, and manufacturers—procurement decisions are increasingly constrained by requirements to source from certified domestic suppliers. This creates a de facto guaranteed market for the listed chips, independent of their performance relative to NVIDIA hardware.

| Certified Supplier | Product Line | Certification Date | Primary Strength |
|---|---|---|---|
| **Huawei** | Ascend 910/950 series | May 2026 | Ecosystem, scale, cloud integration |
| **Cambricon** | MLU370/690 series | May 2026 | Compute density, memory capacity |
| **Moore Threads** | MTT S4000/S5000 | May 2026 | CUDA compatibility, full GPU |
| **Hygon** | DCU Z100 series | May 2026 | x86 ecosystem compatibility |
| **Iluvatar CoreX** | Tiangi 100 | May 2026 | Edge inference optimization |
| **Denglin AI** | Goldwasser | May 2026 | Sparse compute efficiency |
| **Biren Technology** | BR100 | May 2026 | High bandwidth interconnect |
| **MetaX** | GPU MXN100 | May 2026 | General-purpose GPU |
| **Vastai Tech** | SV100 | May 2026 | Video + AI fusion workloads |

*Table 5: The nine domestic AI chips certified for Chinese government and SOE procurement as of May 2026. Certification creates a guaranteed baseline market while leaving room for competitive differentiation. Data: National Information Security Standardization Technical Committee, TC260.*

The certification list reveals the government's strategic thinking: rather than betting on a single national champion, China is cultivating a portfolio of domestic options. This reduces supply chain risk—if one manufacturer faces yield problems or export control complications, others can fill the gap—and creates competitive pressure that drives performance improvements across the ecosystem.

---

## The Moment of Proof: Meituan's LongCat-2.0

The theoretical performance of domestic chips is one thing. Training a competitive frontier AI model entirely on domestic hardware is another. That proof arrived in June 2026, when **Meituan** announced **LongCat-2.0**, a 1.6-trillion-parameter Mixture-of-Experts model trained entirely on Huawei Ascend 950 hardware.

LongCat-2.0 was not a small experiment. At 1.6 trillion parameters, it is comparable in scale to the largest models produced by OpenAI and Google. Meituan's engineering team reported that the training run—conducted on a cluster of over 10,000 Ascend 950PR accelerators—achieved stability and throughput within 20% of what they would have expected from an equivalent NVIDIA cluster.

The significance of LongCat-2.0 extends beyond Meituan. It demonstrated that China's domestic chip ecosystem can support the most demanding AI workloads: large-scale distributed training of trillion-parameter models. Before LongCat-2.0, skeptics argued that while domestic chips might suffice for inference and small-scale training, they could not handle the compute requirements of frontier model development. That argument is now harder to make.

| Training Run | Model | Parameters | Hardware | Scale |
|---|---|---|---|---|
| **Meituan LongCat-2.0** | MoE Transformer | 1.6T total / 32B active | Huawei Ascend 950PR | 10,000+ chips |
| **DeepSeek V3** | MoE Transformer | 671B total / 37B active | NVIDIA H800 (pre-ban) | 2,048 H800s |
| **Kimi K3** | Dense Transformer | 2.8T | NVIDIA H100 / H800 | 10,000+ GPUs |
| **Qwen3.8-Max** | Dense Transformer | 2.4T | NVIDIA H100 / H800 | Classified |
| **GLM-5.2** | Dense Transformer | 1.0T | NVIDIA H100 / Ascend 950 | Hybrid cluster |

*Table 6: Major Chinese AI model training runs, comparing domestic-only (LongCat-2.0) versus NVIDIA-based training. LongCat-2.0 represents the first demonstration that a trillion-parameter frontier model can be trained entirely on domestic silicon. Data: Company announcements, industry estimates.*

The broader implications are profound. If Chinese AI labs can train frontier models on domestic hardware, the strategic logic of US export controls is partially undermined. The controls were designed to slow China's AI development by restricting access to the most advanced chips. But if domestic alternatives achieve sufficient performance—and LongCat-2.0 suggests they are approaching that threshold—the controls may accelerate rather than slow China's semiconductor independence.

---

## The Bottlenecks That Remain

For all the progress, China's domestic chip ecosystem faces two structural constraints that no amount of engineering can fully resolve in the near term: **process node limitations** and **HBM supply**.

### The SMIC Ceiling

All three major domestic chip manufacturers—Huawei, Cambricon, and Moore Threads—rely on **SMIC** for fabrication. SMIC's most advanced production node is a **7nm-class process** (internally referred to as N+2), which uses deep ultraviolet (DUV) lithography with multi-patterning techniques. This process is capable of producing competitive AI accelerators but is significantly less efficient than the **4nm and 3nm nodes** that TSMC uses for NVIDIA's latest chips.

The practical impact is that domestic chips require larger die sizes, consume more power, and achieve lower yields than their TSMC-fabricated counterparts. A chip that TSMC can produce on a 4nm node at 80% yield requires SMIC to use a 7nm node at perhaps 50–60% yield, with a die that is 40–60% larger. These inefficiencies translate directly into higher costs and lower availability.

| Metric | TSMC 4N (NVIDIA H100) | SMIC N+2 (Domestic Chips) | Gap |
|---|---|---|---|
| **Transistor density** | ~180 MTr/mm² | ~110–130 MTr/mm² | ~30–40% lower |
| **Power efficiency** | Industry leading | ~25–35% higher TDP for equivalent compute | Significant |
| **Yield (est.)** | 70–85% | 50–65% | ~20 percentage points |
| **Cost per good die** | Baseline | ~1.5–2.0x higher | Substantial |
| **Availability** | Global | China-only | Limited ecosystem |

*Table 7: Process node comparison between TSMC's 4N (used for NVIDIA H100) and SMIC's N+2 (used for domestic Chinese AI chips). The efficiency gap is real and structurally significant. Data: Industry analyst estimates, semiconductor research firms.*

### The HBM Bottleneck

The second constraint is **HBM (High Bandwidth Memory)**, the stacked memory technology that is essential for AI accelerator performance. China currently has limited domestic HBM production capacity. **CXMT (ChangXin Memory Technologies)** has begun producing HBM2e and is developing HBM3 capability, but its output is estimated at roughly **2 million HBM stacks per year**—sufficient for perhaps 500,000 high-end AI accelerators annually.

For context, NVIDIA alone shipped over 3 million data center GPUs in 2024, each requiring multiple HBM stacks. China's total domestic HBM capacity could support perhaps 15–20% of NVIDIA's annual volume. Until domestic HBM production scales significantly—or until Chinese chipmakers develop architectures that are less memory-dependent—the HBM bottleneck will constrain how fast the domestic ecosystem can grow.

---

## What the Triopoly Means for Global AI

The emergence of a domestic AI chip triopoly in China has implications that extend far beyond the Chinese market.

First, it demonstrates that **semiconductor export controls have accelerated rather than prevented** domestic capability development. The Chinese chip ecosystem that exists in 2026 would not have developed this quickly without the external pressure of sanctions. US policy effectively created a guaranteed domestic market by eliminating NVIDIA as a competitor, gave Chinese manufacturers pricing power they would not otherwise have had, and forced the ecosystem to solve software compatibility problems that might have been deferred indefinitely.

Second, the triopoly creates a **bifurcated global AI infrastructure**. The world's AI compute is increasingly splitting into two ecosystems: one based on NVIDIA hardware and CUDA, dominant in the United States, Europe, and allied nations; and one based on the Ascend/MLU/MTT stack, dominant in China and increasingly attractive to nations that face similar export control risks or prefer non-US technology suppliers.

Third, the competition between the three domestic players is driving **faster innovation than a single national champion would**. Huawei's ecosystem integration, Cambricon's compute density, and Moore Threads' software compatibility represent three different optimization paths, and the competitive pressure among them is producing rapid improvements across all dimensions.

| Impact Area | Effect | Timeframe |
|---|---|---|
| **China domestic AI capacity** | Rapid expansion; 1.8M accelerators deployed by mid-2026 | 2024–2027 |
| **NVIDIA China revenue** | Collapsed to <1% of data center business | Already occurred |
| **Global AI chip market** | Bifurcation into US-aligned and China-aligned ecosystems | 2025–2028 |
| **Domestic HBM production** | Scaling from 2M to estimated 8–10M stacks/year by 2028 | 2026–2028 |
| **Software ecosystem maturity** | Gap narrowing from 40% to estimated 10–15% by 2027 | 2025–2027 |
| **Cost parity** | Domestic chips approaching cost competitiveness with NVIDIA | 2026–2028 |

*Table 8: Projected timeline for China's domestic AI chip ecosystem maturation. The most critical variable is HBM production scaling, which will determine whether the ecosystem can support frontier model training at global scale. Data: Industry analyst projections, company guidance.*

---

## The View from the Ground

What do the engineers and developers actually working with these chips think? We collected comments from Chinese technical forums, developer communities, and social media.

> **@昇腾开发者老张** (Ascend Developer Old Zhang, CSDN):
> "CANN现在比一年前好用太多了。一年前迁移一个PyTorch模型到Ascend要改几百行代码，现在基本能自动转换。但MindSpore的生态还是弱，很多开源模型没有官方支持，得自己适配。"
> *Translation: "CANN is much better than it was a year ago. A year ago, migrating a PyTorch model to Ascend required changing hundreds of lines of code; now it mostly converts automatically. But MindSpore's ecosystem is still weak—many open-source models don't have official support, so you have to adapt them yourself."*

> **@算力研究员** (Compute Researcher, Zhihu):
> "MLU690的算力确实很强，但Bang C的学习曲线太陡了。我们组花了三个月才把一个ResNet训练pipeline完全迁移到Cambricon上，同样的工作在NVIDIA上一周就搞定了。不过内存确实大，192GB对我们这种大模型训练太重要了。"
> *Translation: "The MLU690's compute is genuinely strong, but the Bang C learning curve is too steep. Our team spent three months to fully migrate a ResNet training pipeline to Cambricon; the same work took one week on NVIDIA. But the memory capacity is huge—192GB is critical for our large model training."*

> **@GPU搬砖工** (GPU Bricklayer, V2EX):
> "Moore Threads的CUDA兼容层是真的香。我们原来的推理服务代码一行没改就跑起来了，性能大概是NVIDIA的70-80%。对于不想重构代码的团队来说，这就是最好的选择。"
> *Translation: "Moore Threads' CUDA compatibility layer is genuinely excellent. Our original inference service code ran without a single line changed, at about 70–80% of NVIDIA performance. For teams that don't want to refactor code, this is the best option."*

> **@芯片行业观察者** (Chip Industry Observer, WeChat):
> "SMIC 7nm的良率问题还是被低估了。华为和寒武纪要满足今年的出货目标，实际需要的晶圆产能可能是理论值的两倍。长鑫的HBM产能更是卡脖子中的卡脖子，没有HBM，做再多的芯片设计也是空中楼阁。"
> *Translation: "SMIC's 7nm yield problems are still underestimated. For Huawei and Cambricon to meet this year's shipment targets, their actual wafer capacity needs may be double the theoretical value. CXMT's HBM capacity is the bottleneck of bottlenecks—without HBM, no amount of chip design matters."*

> **@算法工程师小王** (Algorithm Engineer Xiao Wang, NGA):
> "训练LongCat的时候，Ascend集群的稳定性其实比预期好很多。最麻烦的不是硬件，是通信库——多机并行的效率比NVIDIA的NCCL还是差一截。但能用国产芯片训出1.6T的模型，这件事本身就说明问题了。"
> *Translation: "When training LongCat, the Ascend cluster's stability was actually better than expected. The biggest headache wasn't the hardware but the communication library—multi-node parallel efficiency is still a notch below NVIDIA's NCCL. But being able to train a 1.6T model on domestic chips says something in itself."*

> **@半导体投资人老李** (Semiconductor Investor Old Li, Weibo):
> "九家过审芯片名单出来之后，投资逻辑完全变了。以前大家赌谁能成为中国的NVIDIA，现在发现答案是'全部'。政府要的是供应链安全，不是一家独大。这对创业公司其实是好消息——市场够大，容得下多家。"
> *Translation: "After the nine-chip certification list came out, the investment logic changed completely. People used to bet on who would become China's NVIDIA; now the answer is 'everyone.' The government wants supply chain security, not a monopoly. This is actually good news for startups—the market is big enough for multiple players."*

---

## Conclusion: The Triopoly and What Comes Next

China's domestic AI chip ecosystem has crossed a threshold. It is no longer a collection of promising prototypes competing against an insurmountable NVIDIA monopoly. It is a functional, multi-vendor ecosystem that has trained a trillion-parameter model, powers the world's largest AI market, and is certified for the procurement of the world's largest state-owned enterprise sector.

The triopoly of Huawei Ascend, Cambricon MLU, and Moore Threads MTT represents three different philosophies of silicon independence: ecosystem integration, compute density, and software compatibility. None of the three is a perfect NVIDIA replacement. All three are improving faster than most Western analysts predicted.

The remaining constraints are structural, not conceptual. SMIC's 7nm node limits efficiency. CXMT's HBM production constrains scale. The software ecosystem still lags CUDA by years of development. But these are engineering problems with engineering solutions, and China is applying engineering resources at a scale that no other nation can match.

The zero percent moment—NVIDIA's China revenue collapsing to a rounding error—will be remembered as either a strategic masterstroke of American industrial policy or its most consequential miscalculation. The answer depends on whether China's domestic chips can close the remaining performance gap before the next generation of AI applications makes that gap irrelevant.

What is already clear is that the world's AI infrastructure will not run on a single architecture. The NVIDIA ecosystem will remain dominant in the West. The Ascend/MLU/MTT ecosystem is becoming dominant in China. And the boundary between them is hardening into one of the defining technological dividing lines of the decade.

---

*Published: September 3, 2026 | Category: AI Business | Reading time: ~16 minutes*

**Sources:** Huawei Ascend technical specifications; Cambricon product documentation; Moore Threads specifications; WAIC 2026 presentations; Meituan LongCat-2.0 technical report; National Information Security Standardization Technical Committee (TC260) certification list; NVIDIA earnings reports; SMIC production estimates; CXMT capacity projections; CSDN developer forums; Zhihu technical discussions; 36Kr semiconductor coverage; Caixin chip industry reporting; industry analyst estimates.
