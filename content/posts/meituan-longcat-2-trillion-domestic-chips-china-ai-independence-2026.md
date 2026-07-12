---
title: "How Meituan Built a Trillion-Parameter AI Model on 50,000 Domestic Chips — And Open-Sourced It"
slug: "meituan-longcat-2-trillion-domestic-chips-china-ai-independence-2026"
date: "2026-07-13"
author: "AI in China Editorial"
excerpt: "Meituan's LongCat-2.0 is the world's first trillion-parameter model trained entirely on domestic Chinese chips. Here's why that matters for the global AI race."
heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200"
keywords:
  - Meituan
  - LongCat-2.0
  - China AI chips
  - Huawei Ascend
  - domestic chip training
  - trillion parameter model
  - AI independence
  - open source China
  - MoE architecture
  - WAIC 2026
related:
  - /blog/triple-silicon-china-ai-chip-independence-2026/
  - /blog/lingsheng-supercomputer-china-cpu-ai-paradigm-2026/
  - /blog/deepseek-73b-megaround-china-ai-funding-frenzy/
  - /blog/waic-2026-global-ai-diplomacy-shanghai/
---

![A close-up of a microprocessor circuit board illuminated by blue light, symbolizing the intricate architecture of AI chips](https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200)
*The architecture of independence: China's domestic chip ecosystem reaches a new threshold. Photo: Unsplash*

At 5:47 AM on June 30, 2026, in a data center somewhere in northern China, a cluster of 50,000 domestically produced AI chips flickered in unison. For the previous 72 hours, engineers from Meituan's LongCat team had watched the loss curves with the kind of focused anxiety that only comes when you are attempting something the industry considers impossible.

Then the numbers stabilized. The training run — a full pre-training pass for a 1.6 trillion parameter mixture-of-experts model — completed without a single node failure. No NVIDIA H100s. No A100s. Not a single foreign GPU in the entire pipeline. Every FLOP had been executed on Chinese silicon.

Six days later, Meituan open-sourced the result. LongCat-2.0 dropped on GitHub, Hugging Face, and ModelScope with an MIT license. Within hours, Huawei Ascend, MetaX (Moore Threads), and Muxi had all announced inference compatibility. The message was unmistakable: China's AI industry no longer needed permission from San Jose to train frontier-scale models.

## The Model Nobody Expected From a Food Delivery Company

Meituan is not a name that typically appears in conversations about foundation model development. For most global observers, the Beijing-based company is synonymous with food delivery, restaurant reservations, and local lifestyle services — China's answer to DoorDash, Yelp, and Uber Eats rolled into one. In 2025, Meituan's platform processed over 700 million orders per month across 2,800 cities.

But beneath the consumer-facing surface, Meituan has been quietly assembling one of China's most ambitious AI research operations. The company's acquisition of Light Year Beyond (Guangnian Zhiwai) in June 2023 — the startup founded by Meituan co-founder Wang Huiwen with the explicit goal of building "China's OpenAI" — marked the beginning of a transformation that has accelerated dramatically over the past three years.

The LongCat team's journey from that acquisition to LongCat-2.0 has been methodical and, at times, precarious. The team's first experiments with domestic chip training began in 2023 at the modest scale of a few hundred cards. Progress was slow. Chinese AI chips at the time were not designed for the massive distributed training runs that NVIDIA's ecosystem had optimized over a decade. Operator adaptations, communication optimizations, and fault-tolerance engineering all had to be rebuilt from first principles.

By early 2025, the team had scaled to a few thousand cards. By late 2025, they were running experiments on clusters of 10,000. The leap to 50,000 — the scale required for a trillion-parameter model — represented not merely a quantitative expansion but a qualitative transformation in what domestic Chinese hardware could deliver.

| Specification | LongCat-2.0 | DeepSeek V4 Pro | GPT-5.5 |
|---------------|-------------|-----------------|---------|
| **Total Parameters** | 1.6 trillion | ~1.5 trillion | Undisclosed |
| **Active Parameters per Token** | ~480 billion | ~450 billion | Undisclosed |
| **Architecture** | MoE (Mixture of Experts) | MoE | Undisclosed |
| **Context Window** | 1 million tokens | 256K tokens | 128K tokens |
| **Training Hardware** | 50,000 domestic chips | Mixed (domestic + NVIDIA) | NVIDIA H100/H200 |
| **Pre-training Data** | 30+ trillion tokens | 20+ trillion tokens | Undisclosed |
| **License** | MIT (fully open) | Partially open | Proprietary |

*Table 1: LongCat-2.0 technical specifications compared to leading frontier models. Sources: Meituan technical blog, DeepSeek release notes, OpenAI documentation.*

## Benchmarks That Turned Heads

The open-source release on July 6 was not accompanied by the kind of flashy demo videos that typically dominate AI product launches. Meituan published model weights, inference engines, and technical documentation. The benchmarks spoke for themselves.

On SWE-bench Pro — the rigorous software engineering benchmark that tests a model's ability to solve real GitHub issues — LongCat-2.0 scored 59.5. That places it ahead of GPT-5.5 (58.6) and Claude Opus 4.6 (57.3), and within striking distance of Claude Opus 4.7/4.8. On Terminal-Bench 2.1, a benchmark for command-line and systems-level reasoning, it scored 70.8.

Perhaps more revealing than the headline numbers was the model's behavior before anyone knew its true identity. In April 2026, Meituan released a preview version under the anonymous codename "Owl Alpha" through OpenRouter, the model routing platform that aggregates APIs for developers. By June 30, Owl Alpha had become the most-called model globally on the Hermes agent harness, second on Claude Code, and third on OpenClaw — all while operating as a free, unlimited service.

Developers had been voting with their API calls. They simply did not know they were voting for Chinese domestic silicon.

| Benchmark | LongCat-2.0 | GPT-5.5 | Claude Opus 4.6 | Claude Opus 4.7 |
|-----------|-------------|---------|-----------------|-----------------|
| **SWE-bench Pro** | 59.5 | 58.6 | 57.3 | 60.2 |
| **Terminal-Bench 2.1** | 70.8 | 68.4 | 69.1 | 71.5 |
| **HumanEval** | 92.1 | 91.8 | 90.7 | 93.2 |
| **MMLU** | 87.4 | 88.1 | 87.9 | 88.6 |
| **Long Context (1M tokens)** | Native | RAG-dependent | 200K | 200K |

*Table 2: Comparative benchmark performance across leading coding and reasoning evaluations. Scores reflect the state of publicly reported results as of July 2026.*

The million-token context window is another differentiator. While competitors have been extending context lengths through retrieval-augmented generation and approximate attention mechanisms, LongCat-2.0's LongCat Sparse Attention (LSA) architecture handles the full million-token window natively. For applications involving legal document analysis, codebase comprehension, and long-form research synthesis, this capability moves from convenience to genuine capability unlock.

## The Chip Alliance: Ascend, MetaX, and Muxi

The most politically significant aspect of LongCat-2.0 is not the model itself but the hardware it ran on. Meituan has not publicly disclosed the specific chip vendors used for training, but industry consensus points to Huawei's Ascend 910 series as the primary workhorse, with potential contributions from MetaX and other domestic suppliers.

What is public is the inference adaptation story. Within hours of the open-source release, three major domestic chip vendors announced complete inference compatibility:

- **Huawei Ascend**: The CANN (Compute Architecture for Neural Networks) team published a full deployment guide for LongCat-2.0 on Ascend A2 chips, achieving a TPOT (time per output token) latency of just 20 milliseconds on a 192-card Atlas A2 cluster.
- **MetaX (Moore Threads)**: Announced same-day support through its MUSA software stack, emphasizing compatibility with the model's sparse attention patterns.
- **Muxi**: Completed adapter integration for its GPGPU lineup, targeting the growing market for cost-effective inference deployment.

| Chip Vendor | Product Line | Inference Latency (TPOT) | Cluster Size | Software Stack |
|-------------|-------------|--------------------------|--------------|----------------|
| **Huawei Ascend** | A2 (910 series) | 20ms | 192 cards | CANN |
| **MetaX** | MTT S4000 | ~25ms | 256 cards | MUSA |
| **Muxi** | MXC500 | ~28ms | 128 cards | MXMACA |
| **NVIDIA H200** | H200 SXM5 | ~12ms | 128 cards | CUDA |

*Table 3: Inference performance comparison across domestic and NVIDIA chip platforms running LongCat-2.0. NVIDIA figures shown for reference. Source: Vendor announcements, independent benchmarks.*

The gap between domestic and NVIDIA inference performance is narrowing. At 20ms TPOT, Huawei's Ascend A2 is roughly 1.7x slower than NVIDIA's H200 on this specific workload — but at what is likely a substantially lower total cost of ownership, and with complete supply chain independence from US export controls.

For Chinese enterprises evaluating AI infrastructure, this changes the calculus. The question is no longer "Can we match NVIDIA performance?" but rather "Is the performance gap small enough that sovereignty, cost, and supply security advantages dominate the decision?"

## Why an Open-Source MIT License Matters

Meituan's choice of the MIT license for LongCat-2.0 was deliberate and, for some observers, surprising. MIT is among the most permissive open-source licenses available, allowing commercial use, modification, and redistribution with minimal restrictions. This is not the approach of a company seeking to build a proprietary moat around its model technology.

The strategic logic becomes clearer when viewed through the lens of ecosystem development. By making LongCat-2.0 freely available, Meituan is effectively seeding the domestic Chinese AI ecosystem with a frontier-capable foundation model that runs natively on domestic hardware. Every startup, research lab, and enterprise that builds on LongCat-2.0 creates demand for the Ascend, MetaX, and Muxi inference stacks. The model becomes a distribution mechanism for the chip ecosystem.

This is a page straight from the Android playbook — Google open-sourced Android not out of altruism but because a thriving open ecosystem creates more value for Google services than a closed platform ever could. Meituan's calculation is similar: a thriving domestic AI ecosystem, built on open models and domestic chips, strengthens the company's strategic position in ways that a closed model never could.

| Model | License | Commercial Use | Training Data Disclosed | Hardware Requirements |
|-------|---------|---------------|------------------------|----------------------|
| **LongCat-2.0** | MIT | Yes | Partial | Domestic + NVIDIA |
| **DeepSeek V4** | MIT | Yes | Partial | Mixed |
| **Qwen 3.5** | Apache 2.0 | Yes | Yes | NVIDIA |
| **Llama 4** | Llama License | Yes (with limits) | No | NVIDIA |
| **GPT-5.5** | Proprietary | API only | No | NVIDIA |

*Table 4: License and openness comparison across major foundation models. LongCat-2.0's permissive licensing stands out among frontier-capable models.*

The decision also carries symbolic weight. At a moment when US-China technology decoupling is accelerating — with the Pentagon's most recent entity list expansion targeting Alibaba, Baidu, and BYD in June 2026 — Meituan's open-source gesture reads as both a technical contribution and a political statement. The company is saying, in effect: "We can build this without you, and we will give it away for free."

## The Capital Behind the Compute

LongCat-2.0 did not emerge from a garage. The model represents a capital investment that few companies outside the hyper-scale cloud providers can afford. Meituan's R&D expenditure in Q1 2026 reached ¥7 billion ($965 million), up 22% year-over-year. While not all of this goes to AI research, the trend line is clear: Meituan is spending like a company that believes AI infrastructure will define its next decade.

The context of this spending matters. Meituan's stock had declined over 27% since the start of 2026, and more than 85% from its February 2021 peak, as investors worried about regulatory pressure, competition from Douyin's local services push, and the macroeconomic slowdown in Chinese consumer spending. The LongCat-2.0 announcement triggered a four-day rally, with shares rising 4.68% on July 6 alone.

But the stock market reaction may be the least interesting part of the story. More significant is what LongCat-2.0 signals about the maturation of China's domestic AI supply chain. Three years ago, training a frontier model on domestic chips was considered technically infeasible. Two years ago, it was theoretically possible but practically unreliable. Today, it is a solved engineering problem.

| Company | Q1 2026 R&D (¥ billion) | YoY Change | AI-Related Focus |
|---------|------------------------|------------|------------------|
| **Meituan** | 7.0 | +22% | LongCat models, agent infrastructure |
| **Baidu** | 6.8 | +15% | Ernie models, autonomous driving |
| **Alibaba** | 12.4 | +18% | Tongyi Qianwen, cloud AI |
| **ByteDance** | 14.2 | +28% | Doubao models, recommendation AI |
| **Tencent** | 9.1 | +12% | Hunyuan models, gaming AI |

*Table 5: R&D spending comparison among major Chinese tech companies. Meituan's AI-focused investment has grown rapidly from a smaller base. Sources: Company Q1 2026 earnings reports.*

## Geopolitics at the FLOP Level

The US export control regime, administered through the Bureau of Industry and Security, has sought to slow Chinese AI development by restricting access to NVIDIA's most advanced GPUs. The H100, H200, and now the Blackwell series are effectively embargoed for Chinese buyers. The H20 — a performance-degraded chip that NVIDIA designed specifically for the Chinese market — remains available but offers substantially reduced memory bandwidth and compute density compared to its unrestricted counterparts.

LongCat-2.0 is evidence that this strategy is failing at its core objective. The model was not trained on smuggled chips, not on cloud instances rented through third countries, and not on the degraded H20. It was trained on chips designed and manufactured within China's own technology ecosystem — however imperfect, however trailing-edge compared to TSMC's latest nodes.

This does not mean US export controls have had no effect. They have raised costs, slowed development timelines, and forced Chinese companies to solve problems that their US counterparts could ignore. But the thesis that restricted access to NVIDIA hardware would prevent Chinese companies from training frontier models has been empirically falsified.

| Year | China's AI Chip Self-Sufficiency Rate | Estimated Domestic AI Chip Production (units, millions) | Leading Domestic Vendors |
|------|--------------------------------------|--------------------------------------------------------|--------------------------|
| **2023** | 12% | 2.1 | Huawei Ascend, Biren |
| **2024** | 19% | 3.8 | Huawei Ascend, Biren, MetaX |
| **2025** | 28% | 6.5 | Huawei Ascend, MetaX, Muxi, Cambricon |
| **2026 (est.)** | 39% | 11.2 | Huawei Ascend, MetaX, Muxi, Cambricon, Enflame |
| **2028 (proj.)** | 55% | 22.0 | Expanded ecosystem |

*Table 6: China's AI chip self-sufficiency trajectory. By 2028, domestic production is projected to meet or exceed domestic demand for the first time. Sources: CINNO Research, company filings, industry analyst estimates.*

What comes next is equally significant. Huawei is preparing to showcase the Atlas 950 SuperPoD — described as the industry's largest-scale hyper-node — at the 2026 World Artificial Intelligence Conference (WAIC) in Shanghai, running July 17-20. The system represents the next generation of domestic training infrastructure, and its public debut will provide a clearer picture of where China's hardware ecosystem stands relative to global frontier capabilities.

## The Week That Shook China's AI Capital Markets

LongCat-2.0 did not arrive in a vacuum. The first week of July 2026 will likely be remembered as one of the most consequential in the short history of China's AI industry.

On July 6, Meituan open-sourced LongCat-2.0. On July 9, Zhipu AI — China's highest-revenue large model company — announced a ¥31.41 billion ($4.3 billion) share placement, with proceeds earmarked for base model R&D, compute infrastructure, and global expansion. On July 10, MiniMax — the second-largest model company by user base — completed a ¥16 billion ($2.2 billion) financing round, attracting over 100 institutional investors with 7x oversubscription.

The MiniMax announcement was particularly notable for founder Yan Junjie's personal commitment: he announced he would take zero salary until the company achieves AGI, and would contribute 5% of his personal equity — worth approximately ¥4.5 billion at current valuations — to team incentives and open-source community support.

| Company | Financing Date | Amount Raised | Valuation | Primary Use of Funds |
|---------|---------------|---------------|-----------|---------------------|
| **Zhipu AI** | July 9, 2026 | ¥31.4B ($4.3B) | ~¥150B | Model R&D, compute, global expansion |
| **MiniMax** | July 10, 2026 | ¥16B ($2.2B) | ~¥90B | Infrastructure, model training, Harness product |
| **Meituan (LongCat)** | Internal R&D | N/A (Q1 R&D ¥7B) | N/A | Model training, chip ecosystem |

*Table 7: Major capital events in China's AI sector during the first half of July 2026. Combined, Zhipu and MiniMax raised over $6.5 billion in a 48-hour window.*

The cumulative message of this week is that China's AI industry has moved from a phase of speculative startup formation to one of capital-intensive infrastructure buildout. The companies that survived the 2023-2024 hype cycle are now deploying resources at a scale that can only be sustained by deep-pocketed corporate parents or public market access.

## What Comes Next: From Proof to Production

LongCat-2.0 is a proof of concept. The next phase is production deployment at scale.

Meituan has indicated that LongCat-2.0 will power its own internal agent systems first — the company's WorkBuddy enterprise assistant already runs on Tencent's Hunyuan Hy3, but the integration of LongCat-2.0 for specific long-context and coding tasks is expected to follow. Beyond internal use, the open-source release creates opportunities for third-party developers to build on the model for applications ranging from legal document analysis to software development.

The competitive landscape is also shifting. MiniMax has reportedly begun training a 2.7 trillion parameter successor to its M3 model, which would reclaim the parameter-size crown from LongCat-2.0. DeepSeek's V4 formal release, expected in mid-July, will introduce peak-valley pricing that doubles API costs during high-demand hours — a signal that even the industry's price leader is facing compute constraints.

For the domestic chip ecosystem, the priority now shifts from training to inference optimization. Training a trillion-parameter model once is expensive; serving inference requests billions of times per day is where the real economics of AI infrastructure are determined. The chip vendors that can deliver the best inference cost-per-token will capture the bulk of the value created by models like LongCat-2.0.

| Milestone | Target Date | Significance |
|-----------|------------|--------------|
| **WAIC 2026 Shanghai** | July 17-20, 2026 | Atlas 950 SuperPoD debut; industry ecosystem showcase |
| **DeepSeek V4 formal release** | Mid-July 2026 | Peak-valley pricing; load management innovation |
| **MiniMax M3 Pro** | Q3 2026 | 2.7T parameters; potentially largest open model |
| **LongCat-2.0 enterprise integrations** | Q3-Q4 2026 | Production deployment beyond research |
| **Huawei next-gen Ascend** | Early 2027 | Next training capability leap |

*Table 8: Key milestones on China's AI roadmap for the remainder of 2026. The domestic chip-model ecosystem is entering a rapid iteration cycle.*

## Social Media Voices

**Zhihu — @硅谷工程师回国**
> "五年前的今天，我还在湾区调NVIDIA的NCCL参数。今天看到LongCat-2.0在昇腾上跑到20ms TPOT，说实话有点恍惚。国产芯片确实还有差距，但已经不是代差，而是迭代差。再给两年，这盘棋就完全不一样了。"
>
> *"Five years ago, I was tuning NVIDIA NCCL parameters in the Bay Area. Seeing LongCat-2.0 hit 20ms TPOT on Ascend today — honestly, it's surreal. Domestic chips still have a gap, but it's no longer a generational gap, just an iteration gap. Give it two more years, and this game changes completely."*

**Xiaohongshu — @AI产品经理小陈**
> "美团做基础模型这件事，很多人不理解。但你想啊，美团每天处理几千万订单，客服、调度、定价全是大模型可以介入的环节。LongCat开源不是为了做慈善，是为了让生态围绕国产算力长起来，这样美团自己的成本才能下来。"
>
> *"A lot of people don't understand why Meituan is building foundation models. But think about it — Meituan processes tens of millions of orders daily. Customer service, dispatch, pricing — all areas where large models can add value. Open-sourcing LongCat isn't charity; it's about growing an ecosystem around domestic compute so Meituan's own costs come down."*

**Weibo — @科技观察者老周**
> "MIT协议 + 国产芯片全链路，这组合拳打得漂亮。 Washington最怕的不是中国封闭，是中国开放。你把最好的模型免费放出来，全世界开发者都跑上来用，NVIDIA的生态优势就被稀释了。"
>
> *"MIT license plus full domestic chip pipeline — that's a beautiful combination. What Washington fears most isn't China closing off, it's China opening up. When you release your best model for free, developers worldwide jump on board, and NVIDIA's ecosystem advantage gets diluted."*

**Twitter/X — @ai_researcher_sg**
> LongCat-2.0 benchmarks are legitimately impressive. The SWE-bench Pro score is no joke — ahead of GPT-5.5 and within range of Claude Opus. But the real story is the hardware. 50K domestic chips, zero failures over a 72h training run. That's an engineering achievement that doesn't show up in benchmark tables.

**GitHub — @linux_developer**
> "克隆了LongCat-2.0的repo，在昇腾A2上跑通了推理。文档写得比很多大厂强，部署脚本也很干净。最让我意外的是1M上下文真的能用，我扔了整本《深入理解计算机系统》进去做RAG，召回质量很高。"
>
> *"Cloned the LongCat-2.0 repo and got inference running on Ascend A2. Documentation is better than many big tech companies, deployment scripts are clean. What surprised me most is that the 1M context window actually works — I threw the entire 'Computer Systems: A Programmer's Perspective' textbook in for RAG, and retrieval quality was excellent."*

**Douban — @芯片行业从业者**
> "作为在芯片行业干了八年的人，我想说别光看涨了多少参数。万亿参数模型在国产卡上能训出来，不代表推理成本有竞争力。现在昇腾推理延迟还是H200的1.7倍，这意味着同样的服务你要多买70%的卡。国产替代是政治正确，但商业账还得慢慢算。"
>
> *"As someone who's worked in chips for eight years, I want to say don't just look at parameter counts. Training a trillion-parameter model on domestic cards doesn't mean inference costs are competitive. Ascend inference latency is still 1.7x H200, meaning you need 70% more cards for the same service. Domestic substitution is politically correct, but the business case still needs time."*

---

The story of LongCat-2.0 is not merely the story of a model. It is the story of an industry that spent three years building capabilities that the global technology establishment insisted were impossible — and then released the proof for free, under the most permissive license available, on the same day that three domestic chip vendors announced they could run it.

Whether this moment marks a true inflection point in the global AI race depends on what happens next. The training run is complete. The model is open. The chips are compatible. The capital is flowing. What remains is the hardest part: building products that people use, applications that generate value, and an ecosystem that sustains itself without government subsidy or geopolitical urgency.

Meituan's engineers solved the first problem at 5:47 AM on June 30. The rest of the industry now has the rest of the year to solve the second.
