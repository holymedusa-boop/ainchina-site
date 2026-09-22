---
title: "Huawei Ascend 960 SuperNode: The NPO Breakthrough Rewriting China's AI Compute Playbook"
metaTitle: "Huawei Ascend 960 SuperNode: NPO Breakthrough Explained"
slug: "huawei-ascend-960-supernode-npo-compute-sovereignty-2026"
date: "2026-09-23"
excerpt: "At Huawei Connect 2026, Huawei unveiled the Ascend 960 SuperNode — the industry's first near-packaged optics supernode with 4,096 cards, 8 EFLOPS of FP8 compute, and a chip roadmap pulled three quarters ahead of schedule. Here's what NPO means, why 5,500 optical engines replace 48,000 transceivers, and whether China's compute sovereignty bet actually holds."
author: "AI in China Editorial"
readTime: "16 min"
heroImage: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=1200"
category: "AI Infrastructure"
tags:
  - China AI
  - Huawei
  - Ascend 960
  - NPO
  - AI Chips
  - SuperNode
  - Data Center
  - Compute Sovereignty
  - NVIDIA
  - Lingqu
keywords:
  - huawei ascend 960 supernode 2026
  - near-packaged optics NPO AI
  - huawei ascend 960DT 960PR specs
  - china AI compute sovereignty 2026
  - huawei connect 2026 announcements
  - ascend 960 vs nvidia NVL144
  - hi-one optical engine
  - huawei atlas 960 superpod
  - china domestic AI chip roadmap
  - lingqu unifiedbus interconnect
related:
  - /blog/huawei-atlas-950-superpod-china-ai-chip-independence-2026/
  - /blog/china-ai-compute-empire-sanctions-boomerang-deepseek-huawei-2026/
  - /blog/china-ai-chip-renaissance-q1-2026/
  - /blog/lingsheng-supercomputer-china-cpu-ai-paradigm-2026/
---

![A macro view of a semiconductor circuit board — the Ascend 960 represents Huawei's most aggressive answer yet to the AI compute bottleneck](https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=1200)
*Huawei's Ascend 960 SuperNode packs 4,096 AI processors into a single system with near-packaged optics — a first for the industry. (Image: Unsplash)*

The applause inside the Shanghai Expo Center on September 17 lasted long enough to interrupt Wang Tao's keynote. Huawei's rotating chairman had just announced, almost as an aside, that the Ascend 960DT — the training variant of the company's next-generation AI chip — had reached mass production readiness three full quarters ahead of schedule. It was not the announcement anyone in the room had expected. Roadmaps in this industry slip; they almost never accelerate.

That moment set the tone for Huawei Connect 2026's main reveal: the Ascend 960 SuperNode, the industry's first supernode built on near-packaged optics (NPO). A single system interconnects 4,096 Ascend 960 processors, delivers 8 exaflops of FP8 compute, and houses one petabyte of high-bandwidth memory. Five thousand five hundred proprietary Hi-ONE optical engines replace roughly 48,000 conventional 800G optical transceivers, cutting power consumption by more than 550 kilowatts and pushing system availability to 99.8 percent.

The numbers are staggering on their own. But the real story is what they represent: after four years of export controls designed to freeze China's AI compute progress, Huawei has stopped trying to win the chip race on silicon alone — and started trying to win the system race on interconnects, packaging, and sheer engineering will. Whether the strategy works depends on questions the keynote stage could not answer: yield rates, HBM supply, independent benchmarks, and whether customers beyond China's borders will ever buy in.

## From Siege to Supernode: How Huawei Got Here

To understand why a supernode matters, it helps to remember what the world looked like when Huawei first sketched this path. In October 2022, the US Department of Commerce cut Huawei off from TSMC's advanced process nodes and, more painfully, from NVIDIA's A100 and H100 data center GPUs. The assumption in Washington and on Wall Street was straightforward: without access to leading-edge fabrication and foreign accelerators, China's AI ambitions would stall at the frontier.

The assumption was wrong, but not immediately. Huawei's first response — the Ascend 910 and its 910B/910C successors — was competent but constrained. The 910C, which entered volume deployment in early 2025, could not match NVIDIA's H100 on raw per-chip performance. What it could do was interconnect. Huawei's engineers realized that in the era of trillion-parameter models, the binding constraint is rarely a single chip's FLOPS. It is the bandwidth, latency, and energy cost of moving data between thousands of chips. A cluster of slightly slower chips with dramatically better communication can outperform a cluster of faster chips that spend most of their time waiting for data.

That insight became the UnifiedBus protocol — branded Lingqu (灵衢) in Chinese — first unveiled in September 2025. The protocol treated memory access across servers the way a single motherboard treats memory access across DIMM slots: one address space, near-uniform latency, no manual data shuffling. The Atlas 950 SuperPoD, shown as physical hardware at WAIC 2026 in July, scaled the concept to 1,024 Ascend 950 processors in 16 liquid-cooled cabinets, offering a 256 terabyte globally addressable memory pool with 3-microsecond round-trip latency. Huawei claimed it delivered 6.7 times the compute and 15 times the memory capacity of NVIDIA's NVL144 supernode configuration.

The Ascend 960, announced just two months later, doubles every one of those numbers and swaps the electrical-optical boundary that has bottlenecked every large AI cluster ever built. The supernode strategy has gone from survival tactic to center of gravity.

| Milestone | Date | What Happened |
|-----------|------|---------------|
| US export controls expand | Oct 2022 | Huawei cut off from TSMC advanced nodes, NVIDIA A100/H100 |
| UnifiedBus (Lingqu) protocol unveiled | Sep 2025 | Huawei's scale-up interconnect standard announced |
| Atlas 950 SuperPoD released on paper | Sep 2025 | 1,024-card supernode architecture published |
| Atlas 850E air-cooled SuperPoD | Mar 2026 | Enterprise-friendly air-cooled variant at MWC Barcelona |
| Atlas 950 SuperPoD live demo | Jul 2026 | Real hardware shown at WAIC 2026, wins SAIL Award |
| Ascend 960 SuperNode announced | Sep 2026 | First NPO-based supernode, 4,096 cards, roadmap pulled forward |

## The Technology: Why Near-Packaged Optics Changes the Math

Every large AI cluster built before 2026 shares the same dirty secret: the optics are a mess. When thousands of accelerators exchange gradients and activations, the signals that travel between servers must convert from electrical to optical and back again, using pluggable transceiver modules that sit at the front of each switch. Each conversion costs power, adds latency, introduces failure points, and — because each transceiver is a discrete component with its own laser — occupies physical space and thermal budget that engineers would rather spend on compute.

Huawei's answer is to move the optics onto the package. Near-packaged optics places the optical engine directly adjacent to the silicon interposer, shortening the electrical path from centimeters to millimeters. The Hi-ONE engine Huawei announced at Connect 2026 is a 7.2-terabit module with the light source built directly in — which Huawei claims makes it the only NPO part in production with an integrated source. Signals leave the chip, hit the optical engine, and become photons almost immediately.

The engineering payoff is not subtle. A conventional 4,096-card cluster built with standard 800G pluggable optics requires roughly 48,000 optical transceiver modules, each drawing power and generating heat at the switch faceplate. The Ascend 960 SuperNode replaces that forest of pluggables with 5,500 Hi-ONE engines. The part count collapse — nearly 9x fewer optical components — yields three compounding benefits: over 550 kilowatts of power savings per system, mean time between failures doubled, and system availability of 99.8 percent. In a training run that lasts months, availability is not an operational metric. It is the difference between finishing and restarting.

| Attribute | Conventional Optics (800G Pluggables) | Ascend 960 NPO (Hi-ONE) |
|-----------|--------------------------------------|-------------------------|
| Optical modules per 4,096-card system | ~48,000 | 5,500 |
| Optical engine capacity | 800G per module | 7.2T per engine |
| Integrated light source | No (external lasers) | Yes (built-in) |
| Power overhead from optics | Baseline | -550 kW |
| System availability | Baseline | 99.8% |
| Mean time between failures | Baseline | 2x improvement |
| Round-trip latency inside supernode | — | ~2 microseconds |

The approach is gaining industry validation. In May 2026, the Optical Internetworking Forum — the standards body where optical vendors hammer out interoperability — approved a 12.8 terabit-per-second module standard project based on the NPO architecture Huawei proposed. Adopting a Huawei-originated standard is a notable diplomatic concession in an industry where Chinese contributions to physical-layer standards have historically faced political headwinds.

## The Chip Behind the System

The supernode is only as good as the silicon inside it. The Ascend 960 family splits into two variants, each tuned for a different half of the AI workload economy.

The 960DT is the training chip, and it is the one whose schedule just accelerated. Originally targeted for late 2027, it will now be ready in the first quarter of 2027. Per chip, it delivers 2 PFLOPS of FP8 compute and 4 PFLOPS at FP4 precision, paired with 288 gigabytes of HBM running at 9.6 terabytes per second of bandwidth — roughly 2.4 times the memory bandwidth of the 950 series it replaces. Interconnect bandwidth per chip reaches 2.2 terabytes per second. The chip supports a wide numeric format stack — FP32, HF32, FP16, BF16, FP8, MXFP8, HiF8, MXFP4, and HiF4 — with the "H" formats designed to merge precision and dynamic range in a single representation.

The 960PR, arriving in the third quarter of 2027, pushes FP4 inference to 8 PFLOPS per chip with 192 gigabytes of HBM, one quarter ahead of its original schedule. For inference-heavy deployments — the workloads that dominate commercial AI economics — the PR variant trades memory capacity for raw token throughput.

| Specification | Ascend 910C | Ascend 950DT | Ascend 960DT | Ascend 960PR | Ascend 970 (2028) |
|---------------|-------------|--------------|--------------|--------------|-------------------|
| FP8 compute | — | 1 PFLOPS | 2 PFLOPS | — | 3.6 PFLOPS |
| FP4 compute | — | 2 PFLOPS | 4 PFLOPS | 8 PFLOPS | 14 PFLOPS |
| HBM capacity | 128 GB | 144 GB | 288 GB | 192 GB | 288 GB |
| Memory bandwidth | 3.2 TB/s | 4.0 TB/s | 9.6 TB/s | 2.4 TB/s | 14.4 TB/s |
| Interconnect bandwidth | 784 GB/s | 2.0 TB/s | 2.2 TB/s | 2.2 TB/s | 4.4 TB/s |
| Availability | Deployed | Q4 2026 | Q1 2027 | Q3 2027 | 2028 |

Wang Tao also committed publicly to what he called a "one-generation-per-year" cadence: the Ascend 970 lands in 2028 with 3.6 PFLOPS of FP8 and 14.4 TB/s of memory bandwidth, and the Ascend 980 follows in 2029. He attributed the pace to what Huawei internally calls the Tau (τ) Scaling Law — a claim that systematic co-optimization across chip, interconnect, memory, and cooling can keep doubling effective compute even when process-node improvements alone cannot. It is a convenient framing for a company locked out of the newest lithography, but the schedule acceleration on the 960DT suggests the engineering organization has genuinely internalized the cadence.

## Peerium: The Architecture Nobody Talks About

Buried beneath the NPO headlines is arguably the more consequential software story. At Connect 2026, Huawei detailed Peerium, a computing architecture built on nested parallelism, unified memory addressing, and peer-to-peer interconnect. Peerium replaces the traditional master-slave scheduling of distributed training — where a parameter server coordinates thousands of worker GPUs — with what Huawei calls Nested BSP (bulk synchronous processing), in which all nodes are architectural peers.

The Atlas 950 SuperPoD was the first product built on Peerium, and a 256,000-card Atlas 950 cluster is already being deployed — a scale that would have been unthinkable to schedule efficiently two years ago. According to simulations from Huawei's in-house Markov Lab, a 100,000-card cluster built from Ascend 960 supernodes achieves 2.75 times the model floating-point utilization (MFU) of a traditional 8-card-server architecture. MFU is the metric practitioners actually care about: it measures what fraction of theoretical peak compute ends up doing useful work. Doubling MFU at fixed chip performance is equivalent to doubling the chip count — without buying a single extra processor.

The software ecosystem around the hardware is quietly compounding too. Huawei revealed that Ascend became the first Chinese compute platform installable directly from the official PyTorch website, lowering the adoption friction for the millions of developers who train on PyTorch by default. Its openEuler server operating system passed 20 million installations, making it the top server OS in China by market share. The CANN and Mind software stacks are now fully open source, with thousands of external contributors.

## The Deployment Numbers

Announcements are cheap; deployed hardware is not. Here Huawei's track record gives the claims some weight. More than 1,000 Ascend 910C supernodes are already deployed across over 370 customers — a count Reuters independently confirmed. The Ascend 950 SuperPoD has entered large-scale commercial use, and Huawei executives stated on stage that over 750 of the earlier Ascend 384 supernodes are running in production across finance, healthcare, and internet industries.

| Deployment Metric | Figure | Status |
|-------------------|--------|--------|
| Ascend 910C supernodes deployed | 1,000+ units | In production |
| Customer count | 370+ organizations | Commercial |
| Ascend 384 supernodes in production | 750+ units | 20+ industries |
| Ascend 950 SuperPoD | Commercial use | Volume rollout started |
| Atlas 950 SuperCluster (256K cards) | Being deployed | In progress |
| Ascend 960 SuperNode (NPO) | In testing | Q3 2027 launch |
| PyTorch native support | First Chinese platform | Live |

The customer base is also showing early signs of breadth beyond state-backed buyers. Chinese internet companies, once reluctant to standardize on Huawei silicon because of CUDA's gravitational pull, are now training on Ascend at scale. GLM-5.3-FlashX — Zhipu AI's fastest inference model — runs on inference capacity provided by 100,000 domestic chips. China Telecom's Xing4.0-29B-A4B, released September 17, was trained entirely on Ascend processors using a domestic framework, the first 10-billion-plus-parameter model built start-to-finish on Chinese compute. When a state telecom's research arm calls that a milestone, it is also signaling to every other state-linked enterprise which infrastructure the ecosystem expects them to buy.

## How It Stacks Against NVIDIA

The comparison everyone in the industry wants to make — and the one Huawei is most careful to stage-manage — is against NVIDIA. The honest framing is that the two companies are now optimizing for different constraints. NVIDIA, unencumbered by fabrication restrictions, pushes per-chip performance and sells systems like the GB200 NVL72 and the announced NVL144 as premium building blocks. Huawei, unable to access the newest process nodes, pushes system-level efficiency: more chips, better-connected, at lower total cost per unit of useful training throughput.

| Dimension | NVIDIA NVL144 | Huawei Ascend 960 SuperNode |
|-----------|---------------|----------------------------|
| Cards per supernode | 144 | 4,096 |
| Interconnect approach | NVLink copper + optics | Lingqu UnifiedBus + NPO optics |
| Memory pooling | HBM per-GPU, NVLink unified | 1 PB globally addressable HBM |
| Optical components | Pluggable transceivers | 5,500 Hi-ONE NPO engines |
| System availability | Not published | 99.8% |
| Max cluster scale | NVL576 (multi-rack) | 512,000 cards (2-tier), 1M (multi-rail) |
| Per-chip FP8 | Industry-leading | 2 PFLOPS (960DT) |
| Software moat | CUDA, 4M+ developers | CANN/Mind, PyTorch-native install |

Huawei's 6.7x-compute claim over NVL144 from the Atlas 950 era should be read as a systems-level comparison — 1,024 interconnected cards versus 144 — not a per-chip victory. On per-chip metrics, NVIDIA retains a clear lead, and its CUDA ecosystem remains the deepest moat in the industry. But the gap that matters for training frontier models is cluster-level throughput per dollar and per megawatt, and on that metric Huawei's engineering is closing fast enough that China's labs no longer need NVIDIA hardware to train competitive models.

There is also a strategic asymmetry working in Huawei's favor domestically: energy. AI data centers are increasingly power-constrained, and the Ascend 960's 550-kW optics power savings per system compounds at the scale of a 100,000-card deployment — a figure approaching half a gigawatt of avoided draw. In a country where data center electricity quotas are political decisions, that arithmetic does not go unnoticed by procurement departments.

## The Bigger Picture: Compute Sovereignty Goes Physical

The Ascend 960 announcement landed the same week as two other infrastructure reveals that together sketch the full scope of China's compute sovereignty project. In Wuhu, Anhui province, Huawei opened the world's first 3D data center to outside visitors: a facility where cooling, IT, and power layers are decoupled and stacked vertically rather than spread across a campus. The IT layer houses 1,024-card Ascend 950 supernodes; the cooling layer draws on natural water from the adjacent Yangtze River. Huawei executives framed the 100,000-card-capable facility as the template for how Chinese AI infrastructure will scale without mirroring the land- and water-hungry sprawl of American hyperscale campuses.

The second reveal was chip-adjacent: Huawei announced that its OceanStor M900 AI memory storage system and an upgraded Kunpeng supernode would round out a full-stack portfolio spanning compute, memory, storage, and interconnect. Add the openEuler operating system, the CANN software stack, and PyTorch-native support, and the picture is a vertically integrated alternative to the entire NVIDIA-CUDA-hyperscaler stack — built by one company, deployed at national scale.

Whether this is efficiency or forced autarky depends on where you sit. For Chinese AI labs, the practical reality is liberating: DeepSeek, Qwen, GLM, Kimi, and Step models can all now be trained and served without a single American chip in the loop. For the global market, the emergence of a credible non-NVIDIA full-stack alternative fragments what was until recently a monopoly — with pricing, supply-chain, and geopolitical consequences that will play out over the rest of the decade.

## The Skeptic's Case

None of this should be taken at face value, and serious analysts inside and outside China are not. The most important caveat is that every performance figure cited above originates from Huawei itself. There is no independent third-party benchmark of an Ascend 960 system, and no Ascend 960 system exists yet outside Huawei's labs. The 960DT mass-production claim refers to manufacturing readiness, not shipped silicon.

Three structural risks shadow the roadmap. First, advanced packaging yield: stacking HBM at 288 gigabytes per chip requires packaging capabilities Huawei is building under export-control constraints, and yields on new generations have historically taken quarters to stabilize. Second, HBM supply and cost: memory prices industry-wide have risen sharply, and Chinese DRAM makers — CXMT chief among them — are not yet producing HBM at competitive densities at scale. Third, the scaling question: Huawei's original 2025 roadmap sketched supernodes of over 15,000 cards; the Ascend 960 system announced is 4,096. Whether the gap reflects engineering conservatism, packaging yield realities, or thermal limits at NPO density is unclear, and Huawei has not explained it.

The commercial risk is subtler. Huawei's 370-plus Ascend customer count is real, but the majority of deployment is domestic and heavily weighted toward state-linked buyers. Converting system-level leadership into a global business requires software adoption well beyond China's borders, and CUDA's four-million-developer ecosystem does not evaporate because a faster box exists. The Tau Scaling Law may keep Huawei competitive within China's walled garden; whether it exports is a question marketing cannot answer.

## What the Community Is Saying

The announcement triggered intense debate across Chinese and international tech communities. Here is a sampling of reactions, with translations where the original was not in English.

> **知乎 (Zhihu) — upvoted 4,200 times:**
> "5500个光引擎替代4.8万颗光模块，这个降维打击思路才是华为最可怕的地方。单卡比不过，那就把系统的账算赢。"
> *"5,500 optical engines replacing 48,000 transceiver modules — this dimension-reduction approach is what makes Huawei truly formidable. If you can't win per-chip, win the system-level accounting."*

> **Twitter/X — @SemiconductorJoe, 892 likes:**
> "Huawei's NPO supernode is the most interesting AI hardware announcement of the year and it isn't close. 48,000 pluggables to 5,500 engines. The optics supply chain just got rewritten. Everyone in San Jose should be studying this deck."

> **微博 (Weibo) — trending tech commentator:**
> "提前三个季度量产，一年一代，这是把美国的制裁逼成了反向闹钟。昇腾960DT提前这么多，说明中芯的先进封装良率可能已经过关了。"
> *"Mass production three quarters early, one generation per year — the US sanctions have been turned into a reverse alarm clock. The 960DT arriving this early suggests SMIC's advanced packaging yields may have already crossed the threshold."*

> **Hacker News — top comment on the announcement thread:**
> "Cautiously impressed. The interconnect engineering is genuinely world-class — the NPO approach is something Western vendors are also pursuing. But until independent benchmarks exist, every number here is marketing. The 99.8% availability claim is especially bold."

> **V2EX — Chinese developer forum:**
> "CANN开源 + PyTorch原生安装才是隐藏大招。硬件参数再好，没有开发者生态就是铁疙瘩。等一个非华为的第三方实测。"
> *"CANN going open source plus native PyTorch install is the real hidden move. Great hardware without a developer ecosystem is just a hunk of metal. Waiting for third-party benchmarks from outside Huawei."*

> **LinkedIn — former hyperscale infrastructure executive:**
> "The 550kW power saving per system is the number that should worry NVIDIA's customers, not the FLOPS. Power is the binding constraint for AI data centers globally. If Huawei's MFU claims hold up at 100K-card scale, the TCO story becomes very uncomfortable for incumbents outside China too."

---

## The Road Ahead

The Ascend 960 SuperNode is scheduled for launch in the third quarter of 2027, with an air-cooled Atlas 860 variant arriving one quarter earlier for enterprise data centers that lack liquid-cooling infrastructure. Between now and then, the milestones that matter are unglamorous: whether the 960DT hits its Q1 2027 readiness date with stable yields, whether independent benchmarks confirm the MFU claims, and whether any non-Chinese customer publicly commits to the platform.

What is already certain is the strategic shift the announcement crystallizes. The global AI compute race is no longer a chip race. It is a systems race — interconnect, packaging, memory, cooling, and software — and Huawei has just made the strongest systems-level statement of any company this year. The export controls were designed to slow China down. Instead, they produced the industry's first NPO supernode, a million-card cluster roadmap, and a vertically integrated stack that did not exist three years ago. The next test is whether engineering ambition can outrun manufacturing reality. On the evidence of September 17, Huawei intends to find out.

---

*Related reading: [Huawei Atlas 950 SuperPod: China's AI Chip Independence Play](/blog/huawei-atlas-950-superpod-china-ai-chip-independence-2026/) · [China's AI Compute Empire: Sanctions Boomerang](/blog/china-ai-compute-empire-sanctions-boomerang-deepseek-huawei-2026/) · [China's AI Chip Renaissance Q1 2026](/blog/china-ai-chip-renaissance-q1-2026/) · [Lingsheng Supercomputer: China's CPU-AI Paradigm](/blog/lingsheng-supercomputer-china-cpu-ai-paradigm-2026/)*
