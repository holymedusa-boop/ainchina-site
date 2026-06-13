---
title: "GLM-5.1: The 754B-Parameter Open-Source MoE That Beat GPT-5.4 on Real-World Coding — and Trained Without NVIDIA"
slug: "glm-5-1-open-source-crown-beijing-2026"
date: "2026-06-13"
category: "AI"
readTime: "16 min read"
image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200"
---

On April 7, 2026, a Chinese AI research lab quietly uploaded a set of model weights to Hugging Face. There was no splashy livestream. No Sam Altman tweet thread. No carefully choreographed product demo. Just a repository named `zai-org/GLM-5` and a one-line release note: "GLM-5.1 is now available under the MIT License."

Within 72 hours, the global developer community realized something extraordinary had happened. GLM-5.1 — a 754-billion-parameter Mixture-of-Experts model built by Z.ai, the research arm of Zhipu AI — had achieved a score of **58.4 on SWE-Bench Pro**, the industry's most rigorous benchmark for real-world software engineering. That score placed it ahead of GPT-5.4 (57.7), Claude Opus 4.6 (57.3), and Gemini 3.1 Pro (54.2). For the first time in the history of frontier AI, an open-source model had surpassed every closed-source competitor on a benchmark that tests actual code repair in real open-source repositories.

The conventional wisdom in Silicon Valley holds that open-source AI leadership belongs to Western institutions — Meta's Llama family, Google's Gemma, Mistral's European engineering. The corollary assumption is that Chinese AI labs, cut off from the most advanced NVIDIA chips by US export restrictions, cannot compete at the frontier of model capability. GLM-5.1 shatters both assumptions simultaneously. Not only did it top the global leaderboard, but it was trained entirely on **Huawei Ascend 910B chips** using the MindSpore framework — with zero NVIDIA hardware involvement.

This is not merely a technical achievement. It is a structural signal that the geography of open-source AI leadership is being redrawn in real time.

## The Benchmark That Matters: Why SWE-Bench Pro Is Different

Most AI benchmarks test what models know. SWE-Bench Pro tests what models can actually do. Developed by researchers at Princeton and OpenAI, the benchmark presents models with real bug reports from GitHub repositories and asks them to write patches that fix the issue. The model must read the codebase, understand the problem, write code, and verify that the fix works. It is not a multiple-choice test. It is a practical engineering exam.

Before GLM-5.1, the top of the SWE-Bench Pro leaderboard was dominated by closed-source models with multimillion-dollar training budgets and exclusive access to the latest NVIDIA clusters. GPT-5.4 held the crown at 57.7. Claude Opus 4.6 followed at 57.3. The best open-source model, Kimi K2.6 from Moonshot AI, had reached 58.4 — but Kimi K2.6 was released two weeks later, on April 20, creating a brief period where GLM-5.1 stood alone at the top.

What makes GLM-5.1's achievement particularly striking is the architecture. While GPT-5.4 and Claude Opus 4.6 are dense models trained on proprietary infrastructure with effectively unlimited budgets, GLM-5.1 is a Mixture-of-Experts design with only 40 billion active parameters per token. The full 754 billion parameters are never activated simultaneously. This sparse architecture keeps inference costs manageable while delivering frontier capability — a efficiency advantage that closed-source competitors cannot easily replicate.

## GLM-5.1: Technical Architecture and Capabilities

To understand why GLM-5.1 represents a qualitative leap, it is necessary to examine the specifications in detail. The model is not merely a scaled-up version of its predecessor. It introduces several architectural innovations that specifically target the gap between open-source and closed-source performance on agentic tasks.

| Specification | GLM-5.1 | GPT-5.4 | Claude Opus 4.6 | Kimi K2.6 |
|---------------|---------|---------|-----------------|-----------|
| **Total Parameters** | 754B (MoE) | ~1.8T (dense) | ~1.5T (dense) | 1T (MoE) |
| **Active Parameters per Token** | ~40B | ~1.8T | ~1.5T | ~32B |
| **Context Window** | 200,000 tokens | 256,000 tokens | 200,000 tokens | 256,000 tokens |
| **Max Output Length** | 128,000 tokens | 128,000 tokens | 128,000 tokens | 128,000 tokens |
| **SWE-Bench Pro** | 58.4% | 57.7% | 57.3% | 58.4% |
| **Training Data** | 28.5T tokens | Undisclosed | Undisclosed | Undisclosed |
| **License** | MIT | Proprietary | Proprietary | Open-weight |
| **Training Hardware** | Huawei Ascend 910B | NVIDIA H100/H200 | NVIDIA H100 | NVIDIA H100 |

*Data compiled from Z.ai technical documentation, OpenAI specifications, Anthropic release notes, and Moonshot AI reports (April-June 2026)*

The most significant specification is not a single number but a combination: 754 billion parameters with only 40 billion active per token, a 200,000-token context window, and an MIT license. This combination means that GLM-5.1 can be deployed by any organization, modified for any use case, and run at inference costs that are a fraction of what dense models of equivalent capability would require.

### The 8-Hour Autonomy Breakthrough

Beyond benchmark scores, GLM-5.1 introduces a capability that fundamentally changes how developers can use AI models: sustained autonomous execution. In demonstrations, the model has been shown to work on a single coding task for up to **eight hours** without human intervention — planning, executing, testing, debugging, and iterating across hundreds of tool calls. In one documented session, GLM-5.1 made over 6,000 tool calls to build a vector database from scratch, achieving 21,500 queries per second.

This "marathon runner" architecture contrasts sharply with the "sprinter" models that dominate consumer AI interfaces. Most chat models are optimized for short, single-turn interactions. They excel at answering questions but struggle with tasks that require sustained reasoning over hours. GLM-5.1 was explicitly designed for the latter: long-horizon agentic workflows where the model must maintain context, adapt its strategy, and recover from errors over extended time periods.

| Capability | GLM-5.1 | Industry Standard | Significance |
|------------|---------|-------------------|--------------|
| **Autonomous Work Duration** | Up to 8 hours | 5-30 minutes | First open model with sustained agentic capability |
| **Tool Calls per Session** | 6,000+ | 50-200 | Enables complex multi-step engineering |
| **KernelBench Speedup** | 3.6x geometric mean | 1.49x (torch.compile) | Superior kernel-level optimization |
| **NL2Repo (Repo Generation)** | 42.7% | 35-40% | Can generate entire repositories from descriptions |
| **Terminal-Bench 2.0** | 54.9% | 50-55% | Strong CLI and system-level operation |

*Data from Z.ai benchmark reports, independent evaluations, and community testing (April-May 2026)*

## The Hardware Story: Training on Huawei Ascend 910B

The most politically significant technical detail about GLM-5.1 is not its benchmark score or its parameter count. It is the hardware on which it was trained. Every parameter was optimized on **Huawei Ascend 910B AI processors** using Huawei's MindSpore deep learning framework. No NVIDIA GPUs. No AMD accelerators. No Western silicon whatsoever.

This matters because since October 2022, the United States has maintained increasingly strict export controls on advanced AI chips to China. The Biden administration's restrictions, tightened in 2023 and 2025, have effectively banned the sale of NVIDIA's most powerful data center GPUs — including the H100, H200, and the entire Blackwell generation — to Chinese entities. The Trump administration's March 2026 policy split, which allowed the H200 while banning the Blackwell B100/B200/B300, further complicated the landscape but did not change the fundamental reality: Chinese AI labs have been forced to build their training infrastructure on domestic hardware.

| Training Infrastructure | GLM-5.1 | DeepSeek V4 | Kimi K2.6 | Qwen 3.7 Max |
|-------------------------|---------|-------------|-----------|--------------|
| **Primary Hardware** | Huawei Ascend 910B | Huawei Ascend 910B | NVIDIA H100 | NVIDIA H100 |
| **Framework** | MindSpore | Custom CUDA + PyTorch | PyTorch | PyTorch |
| **NVIDIA Dependency** | None | Partial (interference) | Full | Full |
| **Domestic Compute %** | 100% | ~80% | ~0% | ~0% |
| **Training Cost Estimate** | Undisclosed | ~$5.6M | Undisclosed | Undisclosed |

*Data from technical reports, industry analysis, and company disclosures (2026)*

For years, the dominant narrative in Washington and Silicon Valley has been that these export controls create a "compute moat" — an insurmountable gap in training capability that guarantees American AI labs will maintain a permanent lead. DeepSeek's V3 model, trained for approximately $5.6 million on a cluster of NVIDIA H800s (the downgraded chips China could still access), had already challenged this narrative by matching GPT-4's performance at a fraction of the cost. But DeepSeek still used NVIDIA chips.

GLM-5.1 goes further. It proves that a frontier-level model can be trained entirely on Chinese domestic hardware. The Ascend 910B is a 7nm AI processor with 310 teraflops of FP16 performance — competitive with the NVIDIA A100 but behind the H100. Training a 754-billion-parameter MoE model on this hardware required not just raw compute but also sophisticated software optimization, distributed training algorithms, and what Z.ai engineers describe as "aggressive pipeline parallelism" to compensate for the interconnect bandwidth differences between Ascend and NVIDIA architectures.

The achievement has implications that extend far beyond Zhipu AI. It means that China's AI industry now has a proven pathway to train frontier models without any dependence on Western semiconductor technology. The next generation of Ascend chips — the 910C, reportedly sampling in late 2026 — is expected to close the remaining performance gap with NVIDIA's H200. If Zhipu can train a SWE-Bench Pro leader on the 910B, the industry is already asking what the 910C generation will make possible.

## The Licensing Choice: Why MIT Matters

GLM-5.1's release under the MIT License is not a minor footnote. It is a strategic decision with profound implications for adoption and ecosystem development. The MIT License is one of the most permissive open-source licenses available: it allows commercial use, modification, distribution, and even creation of closed-source derivative works without requiring attribution beyond the original copyright notice.

Compare this to the licensing landscape of other frontier models:

| Model | License | Commercial Use | Modification | Closed Derivatives | Patent Grant |
|-------|---------|----------------|------------|-------------------|--------------|
| **GLM-5.1** | MIT | Yes | Yes | Yes | Yes |
| **Kimi K2.6** | Open-weight | Yes | Limited | No | Unclear |
| **DeepSeek V4** | DeepSeek License | Yes (with restrictions) | Yes | Case-by-case | No |
| **Llama 4** | Llama 4 Community License | Yes (if <700M users) | Yes | No | No |
| **Gemma 4** | Apache 2.0 | Yes | Yes | Yes | Yes |
| **GPT-5.4** | Proprietary | No | No | No | N/A |
| **Claude Opus 4.6** | Proprietary | No | No | No | N/A |

*License analysis from legal review and company documentation (2026)*

Meta's Llama 4 Community License, while generous, contains a clause that requires companies with more than 700 million users to negotiate a separate commercial agreement. This effectively excludes the world's largest technology companies from using Llama without legal risk. DeepSeek's custom license, while open in spirit, includes provisions that require approval for certain high-scale commercial deployments and explicitly excludes patent grants. Google's Gemma 4 uses Apache 2.0, which is fully permissive — but Gemma 4's 31B dense model, while efficient, does not match the frontier capability of GLM-5.1.

The MIT License on GLM-5.1 means that a Fortune 500 company can download the weights, fine-tune them on proprietary data, deploy the resulting model in a closed-source product, and face no legal obligation to share their improvements. This is the same license that underpinned the entire modern open-source software ecosystem. For enterprises evaluating AI deployment, legal clarity is not a secondary concern — it is often the primary concern. GLM-5.1 offers that clarity in a way that even Meta's Llama does not.

## The Chinese Open-Source Convergence: Four Labs, Four Frontier Models

GLM-5.1 did not appear in a vacuum. It is part of a broader pattern that has crystallized in mid-2026: China's leading AI labs have converged on the frontier of open-weight model capability simultaneously, creating what industry observers are calling the "Four Tigers" of open-source AI.

| Model | Lab | Release Date | Parameters | Best Benchmark | License | Key Differentiator |
|-------|-----|--------------|------------|----------------|---------|-------------------|
| **GLM-5.1** | Z.ai / Zhipu AI | April 7, 2026 | 754B MoE | SWE-Bench Pro 58.4% | MIT | 8-hour autonomous coding |
| **DeepSeek V4 Pro** | DeepSeek | April 24, 2026 | 1.6T MoE | GDPval-AA 1554 | DeepSeek License | Best agentic real-world performance |
| **Kimi K2.6** | Moonshot AI | April 20, 2026 | 1T MoE | BenchLM 87 | Open-weight | Top coding composite score |
| **Qwen 3.7 Max** | Alibaba | May 20, 2026 | Undisclosed | AA Intelligence 56.6 | Proprietary | 1M-token closed-weight flagship |

*Data from company announcements and independent benchmark evaluations (April-June 2026)*

The convergence is striking. Between April 7 and May 20, 2026 — a span of just six weeks — four Chinese labs released models that collectively hold the top positions on global open-source leaderboards. DeepSeek V4 Pro leads on GDPval-AA, a real-world agentic performance metric. Kimi K2.6 ties GLM-5.1 on SWE-Bench Pro and tops the broader coding composite. GLM-5.1 holds the crown for sustained autonomous execution and the most permissive license. Qwen 3.7 Max, while closed-weight, brings a 1-million-token context window to the closed-source tier.

This is not the pattern of a "copycat" ecosystem. It is the pattern of an ecosystem that has reached technical maturity. Each lab has chosen a different optimization target: DeepSeek for cost efficiency, Kimi for coding composite, GLM for sustained autonomy, Qwen for context length. The diversity of approaches suggests that Chinese labs are no longer playing catch-up — they are setting their own research agendas.

## The Business Model: From Research to Revenue

Zhipu AI's trajectory from Tsinghua University spinoff to publicly traded company provides essential context for understanding GLM-5.1's release strategy. The company went public on the Hong Kong Stock Exchange in January 2026, becoming the first of China's "Big Five" AI model companies to list. Its stock price has surged over 1,600% since the IPO, pushing its market capitalization to approximately **HK$880 billion** (~$113 billion USD) as of late May 2026.

Despite the astronomical valuation, Zhipu's revenue remains modest. The company reported **¥724 million** (~$100 million USD) in 2025 revenue, a 132% year-over-year increase but still tiny relative to its market cap. This valuation disconnect reflects investor belief that Zhipu is not merely an AI company but a platform for compute sovereignty — a bet that Chinese enterprises will increasingly prefer domestic models trained on domestic hardware for both performance and geopolitical reasons.

| Pricing Tier | GLM-5.1 (Z.ai API) | GPT-5.4 (OpenAI) | Claude Opus 4.6 (Anthropic) | Kimi K2.6 (Moonshot) |
|--------------|---------------------|-------------------|------------------------------|----------------------|
| **Input (per 1M tokens)** | $1.00 | $15.00 | $15.00 | $2.00 |
| **Output (per 1M tokens)** | $3.20 | $60.00 | $75.00 | $8.00 |
| **Cached Input (per 1M tokens)** | $0.26 | $7.50 | $7.50 | $0.50 |
| **Coding Plan Subscription** | ~$3/month | N/A | N/A | N/A |
| **Self-Hosting Cost** | 4-8x A100/H100 | Not available | Not available | Not available |

*Pricing data from API documentation as of June 2026. Peak-hour rates (14:00-18:00 Beijing Time) may apply multipliers.*

The pricing strategy is revealing. At $1.00 per million input tokens and $3.20 per million output tokens, GLM-5.1's direct API is **15x cheaper than GPT-5.4** and **23x cheaper than Claude Opus 4.6** for equivalent capability on coding benchmarks. This is not a promotional discount. It is the standard price. The gap reflects the fundamental economics of MoE architecture: sparse activation means fewer FLOPs per token, which translates directly to lower inference costs.

Z.ai also offers a GLM Coding Plan starting at approximately $3 per month, targeting individual developers who want to integrate the model into their workflows. The model is already compatible with Claude Code, OpenClaw, Cline, Cursor, and any other OpenAI-compatible agentic framework. For developers already using these tools, switching to GLM-5.1 is a one-line configuration change.

## What This Means for the Global AI Landscape

The implications of GLM-5.1 extend beyond any single benchmark or company. They touch on three structural shifts that are reshaping the global AI industry.

**First, the center of open-source gravity is shifting east.** For the past decade, the most significant open-source AI releases have come from Western institutions: Google's Transformer architecture, OpenAI's GPT-2, Meta's Llama, Mistral's European models. The "Four Tigers" convergence of 2026 marks the first time that the frontier of open-weight capability is dominated by Chinese labs. This does not mean Western labs are no longer competitive. It means they are no longer the default.

**Second, hardware independence is now a proven path, not an aspiration.** The narrative that Chinese AI requires NVIDIA chips to reach the frontier has been the intellectual foundation of US export control policy. GLM-5.1's training on Ascend 910B demonstrates that this foundation is cracking. If a 754B-parameter MoE model can be trained on domestic hardware today, the next generation of Chinese chips will only make the path easier.

**Third, the economics of AI deployment are being restructured.** At 15x the price-performance of GPT-5.4 for coding tasks, GLM-5.1 creates a cost arbitrage that is difficult for enterprise procurement teams to ignore. A company running 10 million API calls per month for code generation would spend $150,000 with OpenAI and $10,000 with Z.ai — for equivalent benchmark performance. Over a year, that difference is $1.68 million. For AI-native startups, the economics are even more decisive. The model's MIT license removes the legal uncertainty that has made many enterprises hesitant to adopt open-source AI.

## The Counterarguments: What GLM-5.1 Has Not Yet Proven

No serious analysis can ignore the limitations. GLM-5.1's ecosystem is younger than DeepSeek's or Kimi's. The community of fine-tuned variants, third-party tools, and deployment guides is growing but still smaller. Self-hosting a 754B-parameter model requires substantial infrastructure — 4 to 8 A100 or H100 GPUs for full-precision inference, or careful quantization for smaller clusters. On the broader BenchLM aggregate score, GLM-5.1 scores 83, trailing both Kimi K2.6 and DeepSeek V4 Pro (both at 87). Its strength is specific: coding, agentic execution, and sustained reasoning. It is not a general-purpose model that dominates every benchmark.

The 8-hour autonomy claim, while documented, also raises practical questions. Most enterprise software development is collaborative, not solitary. A model that works for 8 hours without human oversight is impressive in a demonstration but may not map cleanly to real-world workflows where code review, stakeholder communication, and architectural decisions require human judgment. The capability is more likely to augment senior developers working on complex refactoring tasks than to replace junior developers on routine feature work.

Zhipu's own valuation is also a source of legitimate skepticism. A company with $100 million in revenue trading at $113 billion — a 1,130x revenue multiple — reflects extreme optimism about future growth. If the open-source model strategy fails to convert into meaningful enterprise revenue, or if the Hang Seng Tech Index inclusion triggers a correction rather than sustained growth, the stock could reprice dramatically.

## The Verdict: A Structural Shift, Not a Headline

GLM-5.1 is not just a good model. It is a proof point for a broader thesis: that Chinese AI labs have reached the frontier of open-source capability, that domestic hardware can train frontier models, and that permissive licensing can accelerate enterprise adoption faster than closed-source API strategies.

The question for Western observers is not whether GLM-5.1 is better than GPT-5.4 on a specific benchmark. The question is whether the pattern it represents — the Four Tigers convergence, the hardware independence, the cost arbitrage — is a temporary anomaly or a structural shift. All available evidence suggests the latter. The models are getting better. The hardware is getting better. The ecosystems are getting bigger. And the gap between Chinese and Western frontier capability, once measured in years, is now measured in months — or, in some cases, has inverted entirely.

On the day GLM-5.1 was released, a developer on the Z.ai community forum wrote: "We didn't just ship a model. We shipped a question that Silicon Valley will have to answer." That question is now echoing through boardrooms, research labs, and government offices across the world. The answer will define the next decade of AI.

---

## What People Are Saying

*Comments from developers, investors, and analysts across Chinese and global tech communities, translated where original language was Chinese.*

> **@CodeBreaker_X** — "Deployed GLM-5.1 on our internal cluster for a two-week pilot. The SWE-Bench score is real — but the memory requirements are brutal. You need 8x A100s minimum for full precision. The FP8 quantized version is more practical but still heavier than Kimi K2.6." / "我们在内部集群上部署了GLM-5.1进行两周试点。SWE-Bench分数是真的——但内存需求太残酷了。全精度至少需要8块A100。FP8量化版更实用，但仍比Kimi K2.6重。"

> **@BeijingVC_Anna** — "Zhipu's stock is up 1,600% but they made $100M revenue. This is a classic China tech bubble — except this time the underlying model actually works. The bubble is in the valuation, not the technology." / "智谱股价涨了1600%但收入只有1亿美元。这是典型的中国科技泡沫——只不过这次底层模型真的有效。泡沫在估值里，不在技术里。"

> **@SiliconValleyDev** — "The fact that it's trained entirely on Ascend 910B is the most important detail nobody is talking about. Compute sovereignty isn't theoretical anymore. It's shipping." / "完全用昇腾910B训练是最重要但没人讨论的细节。算力主权不再是理论了，它已经出货了。"

> **@OpenSourceFanatic** — "MIT license + frontier capability = enterprise adoption will explode. I've already switched our team's Claude Code backend from Claude Opus to GLM-5.1. Same workflow, 10x cheaper." / "MIT许可证+前沿能力=企业采用会爆发。我已经把团队的Claude Code后端从Claude Opus换成了GLM-5.1。同样的工作流，便宜10倍。"

> **@SkepticalEngineer** — "Another Chinese model claiming to beat GPT. I'll believe it when I see it in production at a Fortune 500 for six months. Benchmarks are not business value." / "又一个中国模型声称打败GPT。等我看到它在财富500强企业生产环境运行六个月我才相信。基准测试不等于商业价值。"

> **@Tsinghua_Alum** — "Proud to see a Tsinghua spinoff at the frontier. But let's be honest — GLM-5.1's ecosystem is still months behind DeepSeek. The model is great. The tooling, fine-tunes, and community need time to catch up." / "看到清华系创业公司站在前沿很自豪。但说实话——GLM-5.1的生态比DeepSeek还落后几个月。模型很棒，但工具、微调模型和社区需要时间来追赶。"

---

*Editor's note: This analysis was compiled from Z.ai technical documentation, independent benchmark evaluations, API pricing data, and industry reports published between April and June 2026. Benchmark scores are subject to ongoing independent verification. For the latest updates on GLM-5.1, visit the Z.ai developer portal or the Hugging Face repository at `zai-org/GLM-5`.*
