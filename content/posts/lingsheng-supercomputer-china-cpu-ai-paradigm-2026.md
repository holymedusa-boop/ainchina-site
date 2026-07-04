---
title: "LingSheng's Bet Against GPUs: How China's CPU-Only Supercomputer Could Rewrite the Rules of AI"
date: "2026-07-04"
excerpt: "China's LingSheng supercomputer just claimed the TOP500 crown with a radical proposition: what if the future of AI computing isn't about GPUs at all?"
keywords:
  - LingSheng supercomputer
  - China supercomputing
  - CPU-only architecture
  - AI computing paradigm
  - TOP500 2026
  - exascale computing
  - LX2 processor
  - heterogeneous computing
  - science-AI convergence
  - national supercomputing center
heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop"
readingTime: 16
---

![Earth from space with technology overlay](https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop)
*China's LingSheng supercomputer at the National Supercomputing Center in Shenzhen represents a fundamentally different vision of what exascale computing should be — one that doesn't depend on GPUs at all.*

## The Speed Run That Wasn't

On June 23, 2026, at the ISC High Performance conference in Hamburg, a Chinese delegation accepted a certificate that many had assumed would never again bear a Chinese name. LingSheng — the entirely domestically developed supercomputer deployed at the National Supercomputing Center in Shenzhen — had officially claimed the top spot on the TOP500 list with a sustained performance of 2.198 exaflops in double-precision floating-point operations.

The headlines wrote themselves. "China reclaims supercomputing crown after nine years." "Domestic chips beat American E-class systems." "LingSheng tops El Capitan by 21.5%."

But here's the uncomfortable truth those headlines missed: **LingSheng isn't just faster. It's different in a way that threatens to make the entire GPU-centric AI computing paradigm look like a detour rather than a destination.**

While American supercomputing has spent the last decade racing toward ever-larger GPU clusters — El Capitan packs AMD Instinct MI300A accelerators, Frontier relies on AMD Radeon Instinct MI250X GPUs — LingSheng achieved its record with something that sounds almost retro in 2026: **pure CPU architecture**. No NVIDIA. No AMD GPUs. No AI accelerators from anyone. Just 47,000 homegrown LX2 processors, each embedding hardware matrix-computation units directly into the CPU die.

This isn't a speed contest. It's a philosophical argument about what computing should look like in the age of AI — and China just made its case with 2.198 exaflops of evidence.

## What Everyone Thinks This Is About

The conventional narrative is straightforward and satisfying. The U.S. has led supercomputing since 2018, when Oak Ridge National Laboratory's Summit dethroned China's Sunway TaihuLight. American systems — Summit, then Frontier, then El Capitan — represented the state of the art. China's apparent absence from the TOP500 summit wasn't due to technical inability, the story went, but strategic caution: after years of U.S. export controls targeting Chinese supercomputing, Beijing had simply stopped submitting systems to an American-dominated benchmark.

| System | Country | Rmax (EFLOPS) | Architecture | Power (MW) | Efficiency (GFLOPS/W) |
|--------|---------|---------------|--------------|------------|----------------------|
| **LingSheng** | China | **2.198** | Pure CPU (LX2) | ~25 | **51** |
| El Capitan | USA | 1.809 | CPU + GPU (AMD MI300A) | ~30 | ~60 |
| Frontier | USA | 1.353 | CPU + GPU (AMD MI250X) | ~21 | ~65 |
| Aurora | USA | 1.012 | CPU + GPU (Intel Max) | ~38 | ~27 |
| Fugaku | Japan | 0.442 | Pure CPU (ARM A64FX) | ~30 | ~15 |

*Source: TOP500 List, June 2026 edition. ISC Hamburg.*

The return of a Chinese system to the top spot, then, looks like a simple reclamation of status. A geopolitical victory. Proof that export controls can't contain Chinese technological ambition indefinitely.

That reading isn't wrong. It's just incomplete — like describing the iPhone as "a phone with a touchscreen." The superficial description misses the structural transformation underneath.

## The Evidence: Three Benchmarks, One Message

LingSheng's performance numbers tell a more complex story than raw speed alone. The system didn't just win the traditional High Performance Linpack (HPL) benchmark that determines TOP500 rankings. It also claimed the top spot on HPCG, the conjugate gradient benchmark designed to measure performance on real-world computational science workloads — the kind of messy, memory-bound, irregularly structured problems that actual researchers face.

| Benchmark | LingSheng Rank | El Capitan Rank | What It Measures |
|-----------|---------------|-----------------|------------------|
| HPL (FP64) | **#1** | #2 | Dense linear algebra — traditional supercomputing |
| HPCG | **#1** | #3 | Sparse iterative methods — real scientific workloads |
| HPL-MxP (AI mixed precision) | #4 | #2 | Mixed-precision matrix multiplication — AI training |

*Source: TOP500, HPCG, and HPL-MxP rankings, June 2026.*

The HPL-MxP result — where LingSheng placed fourth, behind American GPU-heavy systems — is where conventional analysis stops. "See," the argument goes, "it's not actually competitive on AI workloads." But that reading fundamentally misunderstands what LingSheng is trying to be.

The system's "three-computing convergence" (三算合一) architecture — integrating scientific computing, engineering simulation, and AI training on a single hardware platform — represents a bet that these domains aren't separate workloads requiring separate hardware. They're converging expressions of the same underlying need: massive-scale parallel computation on heterogeneous data.

| Computing Domain | Traditional Hardware | LingSheng Approach | Representative Application |
|------------------|---------------------|-------------------|---------------------------|
| Scientific Computing (FP64) | CPU clusters | LX2 CPU native | Climate simulation, fusion research |
| Engineering Simulation (FP32) | CPU + GPU | LX2 mixed-precision units | Aerospace CFD, automotive crash testing |
| AI Training (FP16/BF16/INT8) | GPU clusters | LX2 embedded AI accelerators | Large language models, drug discovery |

*Source: National Supercomputing Center in Shenzhen technical briefings, ISC 2026.*

Lu Yutong, the Zhongshan University professor who served as LingSheng's chief designer, has been explicit about this vision. In multiple technical presentations, she has described the system's design philosophy as solving a resource fragmentation problem: traditional supercomputers and AI training clusters operate as separate infrastructure, creating waste, scheduling conflicts, and data-movement bottlenecks. A unified architecture, she argues, can dynamically allocate resources across workloads rather than leaving GPU clusters idle during science-computing peaks, or science nodes underutilized during AI training surges.

## The Real Story: A Bet Against the GPU Kingdom

To understand why LingSheng matters, you need to understand how strange it is.

Every major AI training system built in the last five years — from OpenAI's clusters to Meta's Research SuperCluster to Saudi Arabia's Shaheen III — has been built around NVIDIA GPUs or AMD accelerators. The reason isn't mysterious: transformer architectures, the foundation of modern large language models, are embarrassingly parallel matrix-multiplication workloads that map beautifully onto GPU architectures. NVIDIA's CUDA ecosystem, built over nearly two decades, has created switching costs that make alternative hardware economically irrational for most AI workloads.

| AI Training Infrastructure | Primary Accelerator | Peak FP16 (EFLOPS) | Software Ecosystem | China Availability |
|---------------------------|---------------------|-------------------|-------------------|-------------------|
| OpenAI GPT-5 cluster | NVIDIA H100/H200 | ~8.0 | CUDA, PyTorch, custom | Restricted by export controls |
| Google TPU v5p | Google TPU | ~4.8 | JAX, TensorFlow | Not available |
| Amazon Trainium2 | AWS Trainium | ~1.3 | AWS Neuron, PyTorch | Available |
| LingSheng | Domestic LX2 CPU | ~4.5 (estimated) | Custom stack, OpenMP | Fully available |
| El Capitan (AI partition) | AMD MI300A | ~5.9 | ROCm, PyTorch | N/A (U.S. system) |

*Source: Vendor disclosures, analyst estimates, and ISC 2026 technical presentations. LingSheng FP16 is estimated from HPL-MxP results and architecture disclosures.*

LingSheng's designers knew all of this. They built their system anyway — not because they couldn't get GPUs (though export controls certainly complicated that path), but because they genuinely believe the GPU-centric paradigm has fundamental limitations that become more problematic as AI models and scientific workloads grow larger and more complex.

The argument goes like this: GPU clusters are optimized for a specific type of workload — dense matrix operations with predictable memory-access patterns. Scientific computing, by contrast, is dominated by sparse matrices, irregular graphs, and stencil operations that GPUs handle poorly. Running both on the same cluster means accepting suboptimal performance for at least one workload class, or building separate infrastructure and accepting the cost of data movement between them.

A CPU-based architecture with embedded AI acceleration units, the LingSheng team argues, can achieve better aggregate utilization across diverse workloads while eliminating the memory-bandwidth bottleneck that limits GPU performance on non-AI tasks. The LX2 processor's integrated high-bandwidth memory — reportedly providing 10x the memory bandwidth of conventional DDR5 configurations — is specifically designed to address what the team calls the "data wall" that limits performance on memory-bound workloads.

Whether this architectural philosophy is correct remains an open question. The HPL-MxP results suggest LingSheng's AI-training performance, while respectable, doesn't match dedicated GPU clusters. But the system was never designed to win on AI benchmarks alone. It was designed to win on the combined workload that represents how modern research institutions actually use supercomputers — and on that metric, the HPL + HPCG dual-first is genuinely unprecedented.

## Implications: Who Wins If CPUs Come Back?

If LingSheng's bet pays off — if the convergence of scientific computing and AI training does create demand for unified architectures — the implications extend far beyond the TOP500 list.

**For China's domestic semiconductor industry**, LingSheng validates a path forward that doesn't depend on matching NVIDIA's GPU architecture. The LX2 processor is entirely domestic, from instruction set to fabrication. If the CPU-plus-embedded-acceleration model proves competitive, it creates a domestic alternative to the GPU hegemony that U.S. export controls have attempted to enforce.

| Domestic Processor | Architecture | Primary Use Case | Manufacturing Node | Key Advantage |
|-------------------|--------------|------------------|-------------------|---------------|
| LX2 (LingSheng) | Custom CPU + AI matrix units | Unified HPC/AI | Domestic advanced node | No GPU dependency |
| Cambricon MLU | Dedicated AI accelerator | AI training/inference | SMIC N+2 | High INT8 throughput |
| Huawei Ascend 910B | AI-specific NPU | AI training | SMIC 7nm equivalent | MindSpore ecosystem |
| Hygon C86 | x86-compatible CPU | General server | Domestic | Software compatibility |

*Source: Company disclosures, industry analyst reports, and ISC 2026 presentations.*

**For the global AI infrastructure market**, a competitive CPU-based alternative would introduce pricing pressure that has been largely absent from the AI accelerator market. NVIDIA's gross margins on data-center GPUs — consistently above 70% — reflect the absence of meaningful competition at the high end. A credible alternative, even one initially limited to domestic Chinese deployment, would give cloud providers leverage in negotiations and potentially accelerate the commoditization of AI training hardware.

**For scientific research**, the most immediate impact is straightforward: Chinese researchers now have access to the world's most powerful openly benchmarked supercomputer for computational science workloads. The system's declared application areas — climate and ocean modeling, materials science, drug discovery, brain science, and electromagnetic simulation — read like a priority list for China's research establishment.

But the deeper question is whether LingSheng represents a genuinely new computing paradigm or simply a regional optimization for a specific regulatory and industrial context. American and European supercomputing centers have examined the "three-computing convergence" concept and largely rejected it in favor of heterogeneous architectures that pair general-purpose CPUs with specialized AI accelerators. The Aurora system at Argonne National Laboratory, for instance, uses Intel's Max Series GPUs specifically because they offer superior AI-training performance than CPU-only approaches.

| Design Philosophy | Representative System | Strengths | Limitations |
|-------------------|----------------------|-----------|-------------|
| **Unified CPU (LingSheng)** | LingSheng | Flexibility, no accelerator dependency, unified memory space | AI peak performance below GPU specialists |
| CPU + GPU Heterogeneous | El Capitan, Frontier | Maximum AI throughput, mature software stack | Resource fragmentation, data movement overhead |
| CPU + Dedicated AI NPU | Japanese Fugaku successor (planned) | Balanced approach, domain-specific optimization | Ecosystem fragmentation |

*Source: ISC 2026 architecture presentations and vendor roadmaps.*

The coming years will determine which philosophy prevails. If large language models continue to dominate AI research and their training requirements continue to scale exponentially, the GPU specialists may maintain their advantage. But if scientific AI — the use of machine learning for physics simulation, drug discovery, and materials science — becomes as computationally demanding as language modeling, LingSheng's unified approach could look prescient rather than peculiar.

## The Shenzhen Model

There's one more dimension to LingSheng that doesn't fit the standard state-versus-market framing of Chinese technology. According to multiple accounts from the ISC 2026 conference, the system's development was not funded through China's traditional major-project mechanism — the state-directed, centrally planned programs that produced previous Chinese supercomputing achievements like Tianhe-2 and TaihuLight.

Instead, LingSheng was built through what participants described as a "market-oriented and open operational architecture" — local institutions and enterprises in the Greater Bay Area collaborating on a system designed to serve regional commercial and research needs. The National Supercomputing Center in Shenzhen, while state-affiliated, operates with a mandate to serve industrial users and generate revenue through commercial contracts.

This matters because it suggests a shift in how China builds frontier infrastructure — from top-down state projects to regional innovation ecosystems that happen to produce world-class technology as a side effect of serving local economic needs. Whether this model can scale beyond a single successful project remains to be seen, but it represents a genuinely different approach to industrial policy than the centralized model that characterized China's previous supercomputing achievements.

## What Comes Next

The LingSheng story is still in its early chapters. The system has been operational for only a few months, and real-world performance on production workloads — as opposed to benchmark-optimized performance — remains largely unreported. The software ecosystem around the LX2 processor is immature compared to CUDA or ROCm, and migrating existing AI workloads to a new architecture carries significant friction costs.

But the system's existence fundamentally changes the terms of debate about AI infrastructure. For a decade, the question has been "How many GPUs can you afford?" LingSheng proposes a different question: "What if the premise is wrong?"

In the next 18-24 months, several developments will test LingSheng's architectural bet:

| Milestone | Timeline | Significance |
|-----------|----------|------------|
| Production AI training benchmarks | Q3 2026 | First independent evaluations of LLM training performance |
| Commercial cloud availability | Q4 2026 | Whether regional businesses adopt the platform |
| Next-generation LX3 disclosure | H1 2027 | Whether the architecture scales to next process node |
| International replication attempts | 2027-2028 | Whether non-Chinese centers adopt similar unified designs |
| "Three-computing" software ecosystem maturity | Ongoing | Whether programming models converge or fragment |

*Source: Industry analyst projections and NSCS Shenzhen public statements.*

The GPU isn't going away. NVIDIA's market position, software ecosystem, and architectural optimization for transformer workloads represent genuine technical achievements that won't be displaced by a single competing system, however impressive. But monopoly rents depend on the absence of alternatives — and LingSheng, at minimum, proves that alternatives are possible.

What happens when those alternatives get cheaper, their software ecosystems mature, and the workloads they target become economically dominant? That's the question LingSheng's designers are betting on. The rest of the industry is now forced to consider whether they're right.

---

*LingSheng's 2.198 exaflops placed it at the summit of the June 2026 TOP500 list, released at ISC High Performance in Hamburg on June 23, 2026.*

## Social Voices

> **Zhihu** — "灵晟的纯CPU路线很多人看不懂，觉得AI训练性能不如GPU就没意义。但搞过科研计算的都知道，真正的瓶颈从来不在峰值算力，而在内存带宽和任务调度。统一架构的价值要跑几年真实负载才能看出来。"
>
> *"LingSheng's CPU-only approach is misunderstood by many who think it's meaningless if AI training performance trails GPUs. But anyone who's done scientific computing knows the real bottleneck has never been peak compute — it's memory bandwidth and job scheduling. The value of a unified architecture only becomes clear after years of real workloads."*

> **Twitter/X** — "The real story of LingSheng isn't that China beat El Capitan. It's that they did it with an architecture that fundamentally questions the GPU-centric paradigm that NVIDIA has built a $3T company on. This is either genius or a $2B mistake. No one knows yet."

> **GitHub** — "As someone who ports ML frameworks to new hardware for a living, the LingSheng software stack is going to be the make-or-break factor. The hardware is impressive, but without PyTorch/ JAX-level ecosystem maturity, it's a research toy, not a production platform."

> **Douban** — "从天河一号到神威太湖之光再到灵晟，中国超算换了三代架构。每次都有人唱衰说软件生态不行，每次都被打脸。这次最大的不同是市场化运营，不是国家工程拨款，这反而让人更看好。"
>
> *"From Tianhe-1 to Sunway TaihuLight to LingSheng, China's supercomputing has gone through three architecture generations. Every time people predicted failure due to software ecosystem immaturity. Every time they were wrong. The biggest difference this time is market-oriented operation, not state project funding — which actually makes me more optimistic."*

> **Hacker News** — "The HPL-MxP #4 ranking is the most important number here. It means LingSheng is competitive but not dominant on AI training. If the next-gen LX3 can close that gap while maintaining the HPL/HPCG lead, NVIDIA has a real problem. If not, this is a fascinating but limited scientific computing system."

> **Xiaohongshu** — "在ISC现场听了卢宇彤老师的报告，她讲'三算合一'的时候全场安静。不是那种无聊的安静，是大家都在认真想这件事到底意味着什么。超算和智算融合，可能是下一代AI基础设施的默认形态。"
>
> *"I attended Professor Lu Yutong's presentation at ISC. When she explained 'three-computing convergence,' the room went completely silent — not the bored kind, but the kind where everyone is actually thinking about what this means. The fusion of supercomputing and AI computing might become the default form of next-generation AI infrastructure."*
