---
title: "China Telecom's Xing4: 285 Billion Parameters, 8,192 Huawei Chips, Zero NVIDIA"
date: "2026-11-22"
metaTitle: "China Telecom Xing4: 285B AI Model Trained Without NVIDIA | AI in China"
metaDescription: "China Telecom's Xing4 is a 285B-parameter frontier AI model trained entirely on 8,192 Huawei Ascend 910C chips using MindSpore — no CUDA, no NVIDIA. Here's how the stacks compare."
excerpt: "A state-owned phone company just trained one of China's largest AI models without a single NVIDIA GPU. The Xing4 paper reveals how China Telecom paired 8,192 Ascend 910C chips with architecture-level innovation to close a gap that was supposed to be unbridgeable."
tags: ["China AI", "Huawei Ascend", "China Telecom", "Xing4", "Domestic Chips", "MindSpore", "AI Infrastructure", "Export Controls"]
keywords: ["China Telecom Xing4", "285B model", "Huawei Ascend 910C", "MindSpore HyperParallel", "AI without NVIDIA", "domestic chip training", "TeleGym", "China AI frontier models", "Ascend vs H100"]
heroImage: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&q=80"
---

# China Telecom's Xing4: 285 Billion Parameters, 8,192 Huawei Chips, Zero NVIDIA

On a Tuesday afternoon in Beijing, a research team most of the world has never heard of posted a paper to arXiv. The Xingchen AGI Lab — a subsidiary of China Telecom, the state-owned telecommunications giant — described training a 285-billion-parameter frontier AI model on 8,192 Huawei Ascend 910C accelerators. Not a single NVIDIA GPU. Not a single line of CUDA code.

The paper, titled "TeleChat to Xing4: Advancing Frontier Agentic Models on Domestic Chips and Frameworks," runs 138 authors long and reads less like a research announcement than an engineering war diary. It documents, in granular detail, how a team inside a phone company built the training infrastructure to run a model larger than anything OpenAI has publicly described, entirely on silicon that Washington's export controls were supposed to make irrelevant.

The model is called Xing4 — "Xing" (星) meaning star, the fourth generation of China Telecom's TeleChat lineage. It is not a research demo. It is a production-grade, agentic large language model trained on what is now the largest publicly documented cluster of Chinese-designed AI accelerators. And it arrives at a moment when the global AI industry is questioning whether China's domestic chip ecosystem can ever close the gap with NVIDIA.

This is a comparative deep-dive into how Xing4 stacks up — the hardware, the software, the training methodology, and the business model that made it possible.

## The Xing4 Family: What China Telecom Built

Xing4 is not a single model but a series, spanning from an open-weight compact variant to a closed frontier flagship. The architecture is decoder-only mixture-of-experts (MoE), building on the design language pioneered by DeepSeek while introducing several innovations aimed specifically at Ascend hardware constraints.

The flagship is a 285B-A17B model — 285 billion total parameters with approximately 17 billion active per token. It has not been publicly released. Its weights remain inside China Telecom's infrastructure, accessible through the company's Xingchen TokenHub platform, which processes over one trillion tokens daily.

The open member of the family, Xing4.0-29B-A4B, was released on Hugging Face in September 2026 under the Apache 2.0 license. It carries 29 billion total parameters with just 4 billion active per token — a sparsity ratio that lets it run on a single consumer GPU for inference, while its training happened entirely on Huawei's NPU platform. The model supports a native 256K-token context window, extendable to 512K and potentially one million tokens.

Key architectural choices across the series include:

- **Multi-head Latent Attention (MLA):** Compresses the key-value cache into a latent vector, dramatically reducing memory bandwidth requirements during inference — a critical optimization when your hardware's memory bandwidth is 20% lower than the NVIDIA equivalent
- **Dynamic Sparse Attention (DSA):** Reduces computational overhead for long-context processing by selectively attending to relevant tokens
- **IndexShare:** An efficient indexing mechanism for MoE routing that reduces communication overhead across accelerators
- **First-three-layers-dense design:** The first three transformer layers use dense feed-forward networks rather than MoE, stabilizing early feature extraction before the sparse-routing layers take over
- **MTP (Multi-Token Prediction):** Enables speculative decoding during inference, generating multiple tokens per forward pass to compensate for lower per-chip throughput

| Property | Xing4 Flagship | Xing4.0-29B-A4B (Open) |
|---|---|---|
| Total Parameters | 285B | 29B |
| Active Parameters per Token | ~17B | ~4B |
| Architecture | Decoder-only MoE | Decoder-only MoE |
| Attention | MLA + DSA | MLA (mHC variant) |
| Expert Configuration | Multi-expert routing | 64 routed + 1 shared, 4 active |
| Context Window | Not disclosed | 256K native, 512K+ extended |
| Training Hardware | 8,192 Ascend 910C | Ascend 910C cluster |
| Framework | MindSpore HyperParallel | MindSpore |
| Availability | Closed (API via TokenHub) | Open weights, Apache 2.0 |
| Release Date | November 2026 (paper) | September 2026 (weights) |

*Table 1: The Xing4 model family at a glance. The flagship demonstrates scale on domestic hardware; the 29B member demonstrates openness and practical deployability.*

![Circuit board macro photography — the physical substrate of AI compute](https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80)

*The physical layer: every Xing4 parameter was trained on silicon designed in Shenzhen, not Santa Clara.*

## The Silicon Gap: What 8,192 Ascend 910C Chips Actually Mean

To understand the significance of Xing4, you need to understand the hardware it runs on. The Huawei Ascend 910C is China's most capable AI accelerator — a dual-die design that essentially packages two Ascend 910B dies into a single OAM module. Built on SMIC's 7-nanometer process, it represents the ceiling of what Chinese semiconductor manufacturing can currently achieve under export controls.

The raw numbers tell a sobering story — and then a surprising one.

On paper, the 910C achieves approximately 780–800 TFLOPS of FP16 compute, carries 128 GB of HBM memory, and delivers 3.2 TB/s of memory bandwidth. Against NVIDIA's H100 — the 2022-era Hopper architecture that remains the workhorse of AI training worldwide — the 910C reaches roughly 80% of peak FP16 throughput. Against the Blackwell B200, the gap widens to approximately three-fold in compute and two-and-a-half-fold in memory bandwidth.

Independent testing cited in DeepSeek's own reporting suggests the practical gap is wider: the 910C delivers about 60% of the H100's real-world inference performance, with handwritten kernels and aggressive optimization narrowing but not eliminating the deficit.

| Specification | Huawei Ascend 910C | NVIDIA H100 SXM | NVIDIA B200 |
|---|---|---|---|
| FP16 Compute (Dense) | ~800 TFLOPS | ~989 TFLOPS | ~2,250 TFLOPS |
| Memory Capacity | 128 GB HBM2E | 80 GB HBM3 | 192 GB HBM3E |
| Memory Bandwidth | 3.2 TB/s | 3.35 TB/s | 8.0 TB/s |
| Process Node | SMIC 7nm | TSMC 4N | TSMC 4NP |
| Architecture | Da Vinci v2 (dual-die) | Hopper | Blackwell |
| TDP | ~600W | 700W | 1,000W |
| Die-to-Die Bandwidth | Organic substrate (limited) | NVLink 4 (900 GB/s) | NVLink 5 (1.8 TB/s) |
| Software Stack | CANN / MindSpore | CUDA / PyTorch | CUDA / PyTorch |
| Practical Inference vs H100 | ~60% | 100% | ~250% (est.) |

*Table 2: The hardware reality. The Ascend 910C reaches roughly 80% of H100 peak compute on paper but delivers closer to 60% in production inference workloads — a gap that software engineering must close.*

The die-to-die bandwidth limitation is particularly significant. The 910C's two dies are connected through an organic substrate rather than NVIDIA's advanced silicon interposer, resulting in 10–20× less bandwidth between dies. In practice, this means the 910C often behaves less like a single 128 GB unified accelerator and more like two coupled 64 GB chips — requiring careful model partitioning strategies that NVIDIA's NVLink makes unnecessary.

Training a 285B-parameter model on this hardware is, therefore, not simply a matter of throwing more chips at the problem. It requires rethinking the model architecture, the training framework, and the parallelism strategy from first principles.

## MindSpore HyperParallel: The Software Bridge

The Xing4 paper's most consequential sections are not about the model — they are about the training infrastructure. MindSpore HyperParallel, the framework built by Huawei and refined by China Telecom's engineers, is the connective tissue that makes 8,192 Ascend 910C cards function as a single training cluster.

The paper describes several key systems innovations:

**Topology-aware hybrid sharding.** Rather than using a one-size-fits-all parallelism strategy, HyperParallel dynamically partitions model weights, gradients, and optimizer states across the 8,192-card cluster based on the physical topology of the network. Data parallelism, tensor parallelism, pipeline parallelism, and sequence parallelism are combined and rebalanced at each training stage to minimize communication bottlenecks — a necessity when your interconnect bandwidth is a fraction of what NVLink provides.

**Efficient distributed optimizer execution.** The Adam optimizer states for a 285B model consume terabytes of memory. HyperParallel shards these states across the cluster with optimized all-gather and reduce-scatter operations, reducing the memory footprint per card enough to fit the model and its activations within the 910C's 128 GB.

**Long-sequence workload management.** With context windows extending to hundreds of thousands of tokens, activation memory becomes a bottleneck even for sparse MoE models. The team implemented selective recomputation — recomputing certain activations on demand rather than storing them — and coordinated activation memory management across pipeline stages.

**CPU affinity and core isolation.** Host-side CPU scheduling can become a hidden bottleneck at scale. The team pinned CPU cores to specific network and storage threads, isolating them from general scheduling interference. This level of systems tuning is rarely documented in academic papers and suggests significant production engineering experience.

**Custom fused operators.** The team wrote custom Ascend C operators for the mHC (multi-head compressed) attention variant and MoE routing layers. Combined with DVM automatic graph-operator fusion and selective recomputation, these optimizations raised training throughput by approximately 96% over the out-of-the-box MindSpore configuration — nearly doubling effective cluster capacity without adding a single chip.

| Dimension | NVIDIA-Based Training (Typical) | Xing4 on Ascend 910C |
|---|---|---|
| Framework | PyTorch + Megatron/DeepSpeed | MindSpore HyperParallel |
| Chip Count | Varies (typically 1,000–16,000) | 8,192 Ascend 910C |
| Interconnect | NVLink + InfiniBand | HCCS + RoCE |
| Parallelism | 3D/4D parallelism | Topology-aware hybrid sharding |
| Memory Optimization | ZeRO / FSDP variants | Coordinated activation memory management |
| Custom Kernels | CUDA/Triton (mature ecosystem) | Ascend C (limited, hand-written) |
| Throughput Optimization | Well-documented best practices | 96% improvement from custom engineering |
| Debugging Tools | Extensive (Nsight, PyTorch Profiler) | Limited, mostly internal |
| Ecosystem Maturity | 15+ years of CUDA development | ~5 years, rapidly evolving |

*Table 3: The training stack comparison. Where NVIDIA-based training benefits from a decade of accumulated tooling and community knowledge, Ascend-based training requires deep custom engineering at every layer.*

The 96% throughput improvement figure deserves emphasis. It means that out of the box, the Ascend 910C cluster was delivering roughly half of what it was ultimately capable of. The engineering team nearly doubled the effective compute of their cluster not by buying more hardware, but by writing better software. This is the defining characteristic of China's domestic chip adaptation: the hardware gap is real, but software engineering can close a meaningful portion of it.

## TeleGym: The Agent Factory

Training a frontier model is only half the challenge. The other half — increasingly the more important half — is post-training: teaching the model to reason, use tools, write code, and act as an autonomous agent. For Xing4, this happens on TeleGym, China Telecom's unified agent execution platform.

TeleGym connects three functions that are often siloed in Western labs: execution (running AI agents in sandboxed environments), evaluation (scoring their outputs against ground truth), and trajectory construction (collecting the sequences of actions and observations that serve as training data for reinforcement learning).

The platform introduces several architectural innovations:

**Disaggregated asynchronous execution.** Agent tasks have wildly variable durations — a code review agent might finish in 30 seconds while a multi-step research agent runs for 20 minutes. TeleGym decouples the execution workers from the training loop, allowing completed trajectories to be consumed by the policy optimizer as they become available rather than waiting for the slowest task in a batch.

**Bounded oversampling.** For tasks where success is stochastic, TeleGym generates multiple candidate trajectories and selects the successful ones for training. The "bounded" part caps the oversampling rate to prevent compute waste on tasks that are either too easy (always succeeding) or too hard (always failing).

**Partial rollout.** For very long agent tasks, TeleGym can train on partial trajectories — sequences where the agent has completed some steps but not others — rather than discarding incomplete episodes. This dramatically improves sample efficiency for long-horizon agent tasks.

The results, as reported by China Telecom, are competitive. The open-weight 29B-A4B model scores 75.00 on SWE-bench Verified — within a point of Alibaba's Qwen3.6-35B (76.00), a model trained on NVIDIA hardware with a much larger active parameter count. On Terminal-Bench 2.1, which evaluates command-line agent capabilities, Xing4.0 leads with 57.50 against Qwen3.6's 51.50 — a six-point gap that suggests particular strength in tool-using agentic tasks.

| Capability | Xing4.0-29B-A4B | Qwen3.6-35B-A3B | Notes |
|---|---|---|---|
| SWE-bench Verified | 75.00 | 76.00 | +1 point to Qwen |
| Terminal-Bench 2.1 | 57.50 | 51.50 | +6 points to Xing4 |
| Active Parameters | ~4B | ~3B | Comparable sparsity |
| Training Hardware | Ascend 910C | NVIDIA (presumed) | Xing4 trained domestically |
| Context Window | 256K–512K | 128K–256K | Xing4 leads |
| Open Weights | Yes (Apache 2.0) | Yes | Both fully open |
| Vendor-Reported | Yes | Yes | No independent verification |

*Table 4: Benchmark comparison on agentic coding tasks. Both scores are vendor-reported and have not been independently reproduced. The narrow gap on SWE-bench and Xing4's lead on Terminal-Bench suggest the Ascend-trained model is competitive at the 30B scale.*

![Data visualization — the economics of token production at telecom scale](https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80)

*Token economics: China Telecom's Xingchen TokenHub processes over one trillion tokens daily, rivaling the inference volume of major Western AI platforms.*

## The Operator Advantage: Why a Phone Company Can Do This

The strangest part of the Xing4 story is not the technology — it is the company behind it. China Telecom is, at its core, a telecommunications operator: it runs mobile networks, broadband infrastructure, and data centers across China. It has 445 million mobile subscribers and 201 million broadband connections. It is not a research lab, not a startup, not a hyperscaler.

And yet, China Telecom has quietly assembled one of the most complete AI stacks in China — and possibly the world. The company's H1 2026 financial results reveal the scale:

- **Intelligent business revenue:** RMB 31.1 billion (up 7.1% year-over-year), representing 12.8% of principal business revenue
- **Tianyi Cloud revenue:** RMB 61.8 billion (up 7.8% year-over-year), making it China's second-largest cloud provider
- **Proprietary intelligent compute capacity:** 70.8 EFLOPS, running at 94% utilization
- **Total managed compute (Xirang alliance):** 118.8 EFLOPS, China's largest compute scheduling platform
- **Computing network investment:** RMB 15.4 billion in H1 2026 alone, up 97% year-over-year
- **AI application subscriptions:** Over 120 million across consumer and enterprise segments
- **Token consumption:** Over one trillion daily tokens through the Xingchen TokenHub platform
- **Industry deployment:** 142 large models and 420+ industry-specific agents serving 37,000+ enterprise customers

| Metric | Value | Period | YoY Change |
|---|---|---|---|
| Total Operating Revenue | RMB 260.5B | H1 2026 | Stable |
| Intelligent Business Revenue | RMB 31.1B | H1 2026 | +7.1% |
| Tianyi Cloud Revenue | RMB 61.8B | H1 2026 | +7.8% |
| AIDC Revenue Growth | +9.3% | H1 2026 | Intelligent computing +95% |
| Computing Network Capex | RMB 15.4B | H1 2026 | +97% |
| Proprietary Compute | 70.8 EFLOPS | H1 2026 | 94% utilization |
| Total Managed Compute | 118.8 EFLOPS | H1 2026 | #1 in China scheduling |
| AI Application Subscribers | 120M+ | H1 2026 | — |
| Daily Token Usage | >1 Trillion | Q3 2026 | Surging |
| Token Plan Pricing | From RMB 9.9/month | May 2026 | Commercialized |
| Industry Models / Agents | 142 / 420+ | H1 2026 | — |
| Enterprise AI Customers | 37,000+ | 2025 | — |

*Table 5: China Telecom's AI business metrics. The company has quietly become one of the world's largest vertically integrated AI providers — owning everything from silicon to models to distribution.*

China Telecom's unique advantage is vertical integration. Unlike OpenAI, which rents compute from Microsoft, or Anthropic, which depends on AWS and Google, China Telecom owns its entire stack:

1. **Silicon:** It procures Ascend 910C accelerators directly from Huawei, with priority access as a state-owned enterprise
2. **Infrastructure:** It operates the data centers, networks, and cooling systems that house the chips
3. **Framework:** It co-develops MindSpore optimizations with Huawei
4. **Models:** It trains its own frontier models (Xing4) and hosts others (DeepSeek, GLM-5.2) on its platform
5. **Distribution:** It sells AI tokens the same way it sells phone plans — through its 445-million-subscriber retail channel, with token packages starting at RMB 9.9 per month

This vertical integration means China Telecom can train a model on its own hardware, deploy it on its own cloud, and monetize it through its own retail channel — capturing value at every layer of the stack. No Western AI company has this degree of end-to-end control.

## The Landscape: Who Trains on What in China

Xing4 does not exist in isolation. It is one data point in a rapidly shifting landscape where Chinese AI labs are racing to adapt their training infrastructure to domestic hardware. The comparative picture reveals how quickly this transition is happening:

| Lab / Model | Scale | Training Hardware | Framework | Status |
|---|---|---|---|---|
| **China Telecom Xing4** | 285B MoE (17B active) | 8,192 Ascend 910C | MindSpore HyperParallel | Paper published Nov 2026 |
| **DeepSeek V5** | Not disclosed | Ascend 950 (reported) | Custom + MindSpore | Reported Nov 2026 |
| **Alibaba Qwen 4 Max** | Not disclosed | NVIDIA H20 + domestic mix | PyTorch + Megatron | Released Nov 2026 |
| **Tencent Hy4** | 770B MoE | NVIDIA (presumed) | PyTorch | Open weights Nov 2026 |
| **Zhipu GLM-5.2** | Not disclosed | Mixed (NVIDIA + Ascend) | PyTorch / MindSpore | Available on TokenHub |
| **Moonshot Kimi K3.1** | Not disclosed | NVIDIA (presumed) | PyTorch | Open weights Nov 2026 |
| **Radixark DaisyRose** | 27B | Domestic Ascend cluster | MindSpore | Open weights Nov 2026 |

*Table 6: China's AI training landscape, November 2026. The split is clear: private internet companies (Alibaba, Tencent, Moonshot) still rely primarily on NVIDIA hardware, while state-linked entities (China Telecom, DeepSeek) are leading the transition to domestic chips.*

The pattern is striking. State-linked labs with guaranteed access to Ascend hardware are going all-in on domestic chips, while private companies are hedging — using whatever NVIDIA supply they can secure through export control loopholes while gradually building domestic chip capability.

China Telecom occupies a unique position in this landscape. As a central state-owned enterprise (SOE), it has both the mandate and the means to go domestic-only. The government's directive is clear: reduce dependence on American AI chips, build indigenous capability, and demonstrate that China's AI ambitions cannot be constrained by export controls. Xing4 is the most technically credible response to that directive yet.

## What Xing4 Signals for the Global AI Stack

The Xing4 paper matters far beyond China Telecom's internal AI strategy. It is the most detailed public documentation of what it actually takes to train a frontier AI model outside the NVIDIA-CUDA ecosystem. Several implications deserve attention.

**The hardware gap is narrowing faster than expected.** Two years ago, the consensus was that Chinese AI chips were three to five years behind NVIDIA. The 910C is roughly equivalent to the H100 — a 2022 chip — with practical performance at about 60%. But with the Ascend 950 series on Huawei's roadmap promising FP8 support, higher bandwidth, and improved interconnects, the next generation could close the gap further. And as Xing4 demonstrates, software optimization can effectively double the useful throughput of existing hardware.

**The software moat is shallower than it appeared.** NVIDIA's deepest competitive advantage has never been its silicon — it is CUDA, the software ecosystem that makes its hardware accessible. MindSpore HyperParallel's achievement with Xing4 suggests that for organizations with sufficient engineering resources (138 authors, remember), the CUDA moat can be crossed. It is expensive and slow, but it is possible.

**Telecom operators are emerging as unexpected AI powers.** China Telecom's model — owning everything from chips to models to consumer distribution — may be replicated by other telecom operators globally. Vodafone, Deutsche Telekom, and NTT all have the infrastructure, the enterprise relationships, and the capital to build similar stacks. None has tried with this level of ambition.

**Open weights remain China's soft power play.** By releasing the 29B-A4B model under Apache 2.0, China Telecom ensures that its technology spreads globally — into research labs, startups, and enterprises that will build on Chinese-trained models. This is the same strategy that has made DeepSeek and Qwen the default open-weight choices for developers worldwide. Xing4's open member, with its 256K context window and agentic capabilities, extends this reach further.

The deeper signal is one of strategic patience. China Telecom did not attempt to train a 285B model on domestic chips because it was the easiest path — it did so because export controls left no choice. The company's engineers spent years building the MindSpore optimization stack, writing custom Ascend C operators, and debugging topology-aware sharding algorithms that NVIDIA users take for granted. The result is a working proof that the domestic stack can support frontier-scale training, even if it requires more engineering effort per unit of compute.

## Conclusion

Xing4 is not the best AI model in the world. Its benchmark scores suggest the open 29B variant is competitive with — but not superior to — comparable models from Alibaba and DeepSeek. The closed 285B flagship's quality remains unknown, with no independent evaluation available.

But Xing4 may be the most important AI model of 2026 for a different reason: it demonstrates that the NVIDIA monopoly on frontier AI training is breakable. Not easily, not cheaply, and not without significant engineering sacrifice — but breakable. A state-owned phone company, working with domestic chips that deliver 60% of the H100's practical performance, trained a model larger than anything OpenAI, Anthropic, or Google has publicly described in terms of parameter count.

The comparative frameworks tell the story clearly. On hardware, the gap is real but narrowing. On software, the moat is deep but crossable. On business model, China Telecom's vertical integration is unmatched. On openness, China's strategy of releasing competitive open-weight models continues to expand global influence.

The Xing4 paper is titled "TeleChat to Xing4" — a modest name for what it actually documents. It is not just an iteration on a model line. It is a blueprint for how to build frontier AI when the world's best chips are off-limits. And that blueprint will only get better with each generation of Ascend silicon, each optimization to MindSpore, and each iteration of the Xing series.

The stars, it turns out, do not need CUDA to shine.

---

## Social Media Comments

**Weibo (Sina Weibo)**
中国电信偷偷憋了个大招！2850亿参数的Xing4模型，全程用华为昇腾910C芯片训练，一颗英伟达GPU都没用。这个规模比OpenAI公开描述的任何模型都大。国有运营商+国产芯片+自研框架=中国AI的底层备胎方案正式上线。看来被卡脖子越狠，自研越快。📡🇨🇳
*China Telecom just dropped a bombshell! Their 285B-parameter Xing4 model was trained entirely on Huawei Ascend 910C chips — zero NVIDIA GPUs. This is larger than anything OpenAI has publicly described. State operator + domestic chips + self-developed framework = China's AI backup plan is officially online. The harder they squeeze, the faster we build.*

**X (Twitter)**
A state-owned *phone company* just trained one of the world's largest AI models without a single NVIDIA GPU. 285B parameters. 8,192 Huawei Ascend 910C chips. Custom framework. 138 authors. Benchmarks within a point of Qwen3.6. The export control playbook assumed this was impossible. It isn't. The gap is 60%, not zero — and software engineering just doubled effective throughput. 🧵
*Thread on why China Telecom's Xing4 matters more than any model release this month.*

**LinkedIn**
Most discussions about China's AI progress focus on model benchmarks. The more consequential story is infrastructure. China Telecom's Xing4 paper — published this week with 138 authors — documents how a telecom operator trained a 285B-parameter model entirely on 8,192 Huawei Ascend 910C accelerators, with no NVIDIA hardware and no CUDA. The engineering details are remarkable: topology-aware sharding, custom Ascend C operators, 96% throughput improvement over out-of-the-box MindSpore. This is what building AI sovereignty looks like in practice. It is slower, harder, and more expensive than buying H100s. But it works. And it means the global AI supply chain just became significantly more resilient — or significantly more fragmented, depending on your perspective.

**Zhihu (知乎)**
如何评价中国电信发布的Xing4模型？285B参数，8192张昇腾910C训练，完全脱离CUDA生态。这可能就是"去美化"最硬核的技术答卷了。论文里细节很扎实：拓扑感知混合并行、自定义算子、96%的吞吐提升——没有这些工程优化，国产芯片的纸面算力根本发挥不出来。29B开源版SWE-bench 75分，跟Qwen3.6只差1分。差距在缩小，但Independent verification还缺。值得关注的不是模型本身，而是整套国产化训练pipeline的可行性验证。
*How to evaluate China Telecom's Xing4? 285B parameters, trained on 8,192 Ascend 910C chips, completely脱离 the CUDA ecosystem. This is the hardest-core technical answer to "de-Americanization." The paper is solid: topology-aware hybrid parallelism, custom operators, 96% throughput improvement. Without these optimizations, the domestic chips' paper specs would never materialize. The 29B open version scores 75 on SWE-bench, just 1 point behind Qwen3.6. The gap is narrowing. What's worth watching isn't the model itself but the validation of the entire domestic training pipeline.*

**Reddit r/MachineLearning**
[Discussion] China Telecom's Xing4: 285B MoE trained on 8,192 Ascend 910C NPUs — no CUDA, no NVIDIA
The paper (arXiv:2611.22115) is worth reading for the systems engineering alone. Key takeaways: (1) They achieved 96% throughput improvement over out-of-the-box MindSpore through custom Ascend C operators and topology-aware sharding. (2) The open 29B-A4B model scores 75 on SWE-bench Verified, within 1 point of Qwen3.6-35B. (3) TeleGym, their agentic post-training platform, uses disaggregated async execution — an interesting design for variable-duration agent tasks. The hardware gap is real (~60% of H100 inference per DeepSeek's testing), but the software engineering is closing it faster than expected. Has anyone reproduced the 29B benchmark numbers independently?

**Douyin (抖音)**
中国电信搞了个大新闻！他们的人工智能实验室用华为的芯片训练出了一个超级AI模型，有2850亿个参数，比OpenAI的任何模型都大。关键是：完全没用英伟达的芯片！被美国人卡脖子之后，中国企业硬是自己搞出了一套。29B的开源版本已经在HuggingFace上可以下载了，做编程任务的准确率跟阿里Qwen差不多。以后谁还敢说中国AI离了美国芯片就不行？🇨🇳💪
*China Telecom just made big news! Their AI lab trained a massive AI model with 285 billion parameters using Huawei chips — bigger than anything OpenAI has publicly described. The key: zero NVIDIA chips! After being choked by American export controls, Chinese companies built their own stack. The 29B open-source version is already downloadable on HuggingFace, with coding accuracy comparable to Alibaba's Qwen. Who's going to say China's AI can't survive without American chips now?*

---

*Sources: arXiv:2611.22115 (Xing4 technical report, Nov 17, 2026); Hugging Face model card (Xing4.0-29B-A4B, Sep 16, 2026); China Telecom H1 2026 interim results; China Telecom Q3 2026 earnings (Oct 26, 2026); Ascend 910C specifications (Flopper.io, Huawei Central, BeyondEast Media); DeepSeek Ascend inference testing (reported); TelecomLead telecom operator AI spending analysis (Nov 8, 2026); AI Weekly (Nov 18, 2026).*

*Image credits: [Unsplash](https://unsplash.com)*
