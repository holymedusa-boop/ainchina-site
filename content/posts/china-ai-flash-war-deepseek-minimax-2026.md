---
title: "China's Flash AI War: DeepSeek and MiniMax Rewrite the Economics of Intelligence"
date: "2026-10-20"
excerpt: "DeepSeek shipped V4.1 Flash 1017 — an MIT-licensed model scoring 45 on the Artificial Analysis Intelligence Index, matching GLM-5.3 and Qwen3.8-Max at a fraction of the price. Forty-eight hours later, MiniMax answered with M3.1 Flash: 3x faster inference, 70% cheaper, same 1M context. Inside the 48-hour flash war that is quietly collapsing the global price floor for frontier AI."
author: "AI in China Editorial"
readTime: "16 min read"
tags: ["DeepSeek", "MiniMax", "Flash Models", "China AI", "Price War", "Open Source AI", "AI Benchmarks", "V4.1 Flash 1017", "M3.1 Flash", "China AI 2026"]
image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop"
keywords: ["DeepSeek V4.1 Flash 1017", "MiniMax M3.1 Flash", "China flash tier models", "AI price war 2026", "open weight AI models China", "Artificial Analysis Intelligence Index", "MIT license LLM", "China AI cost advantage", "DeepSeek vs MiniMax", "frontier AI pricing"]
---

![Circuit-board light trails at high speed — the flash tier of Chinese AI models is moving faster than the industry's ability to price it](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop)

On Friday, October 17, 2026, DeepSeek posted a changelog entry that most of the world overlooked. The entry was dated 2026-10-17 and described an incremental update to a model that had already been shipping for a month. No press release. No launch event. Just a quiet revision to the checkpoint string appended to a model name that had already become a fixture in developer workflows: **V4.1 Flash 1017**.

Two days later, on Sunday, October 19, MiniMax launched **M3.1 Flash** — a model three times faster than its predecessor, 70% cheaper to run, and carrying the same 1M-token context window that used to be a premium feature reserved for flagship models.

Forty-eight hours. Two Chinese AI companies. Two releases that, taken together, represent something far more significant than a routine product cycle. They represent the maturation of a category that barely existed eighteen months ago — the **flash tier**: models that are fast enough for real-time agentic work, cheap enough to run at massive scale, and now, for the first time, smart enough to score at parity with models ten to fifty times their price.

The question this comparison sets out to answer is simple: **what happens to the global economics of AI when a $0.15-per-million-tokens model can do work that Western labs charge $20 per million to perform?**

## The Counterpunch: DeepSeek V4.1 Flash 1017

DeepSeek's V4.1 Flash was never supposed to be the headline act. When it launched in September 2026, it was the fast, affordable sibling to V4.1 Pro — the workhorse tier, not the show horse. It scored 39 on the Artificial Analysis Intelligence Index, respectable for its price class but clearly below the frontier models it undercut on cost.

The 1017 update changed that equation entirely.

The new checkpoint, which DeepSeek pushed to production on October 17 under the same API model string (`deepseek-flash`), lifted the model's AA Intelligence Index score from 39 to **45** — a jump of six points in a single checkpoint revision. That score places it at exact parity with Zhipu's GLM-5.3 and Alibaba's Qwen3.8-Max, two of China's most capable frontier models, and within striking distance of xAI's Grok 4.7 at 46.

The benchmark improvements were not marginal across the board. They were structural:

| Benchmark | V4.1 Flash (Sept) | V4.1 Flash 1017 | Change |
|---|---|---|---|
| AA Intelligence Index | 39 | 45 | +6 |
| GDPval-AA v2.1 (Elo) | 1600 | 1746 | +146 |
| HLE (no tools) | 36.8 | 42.6 | +5.8 |
| Terminal-Bench 4.0 | 31.2 | 42.3 | +11.1 |
| DeepSWE v1.1 | 74.2 | 77.0 | +2.8 |
| ProgramBench | 20.3 | 29.1 | +8.8 |
| NL2Repo-Bench | 65.4 | 68.2 | +2.8 |
| Automation-Bench | 54.8 | 60.5 | +5.7 |
| Agents' Last Exam | 31.8 | 35.4 | +3.6 |

*Source: DeepSeek vendor benchmarks, verified against independent benchmark aggregators. GDPval-AA v2.1 measures open-ended professional work quality.*

The Terminal-Bench delta is the number that should make every agent framework developer pay attention. An 11.1-point improvement on terminal-based agentic tasks — from 31.2 to 42.3 — in a single checkpoint update means that the model is not just getting better at answering questions. It is getting dramatically better at *doing things*: navigating file systems, executing multi-step shell commands, and completing software engineering workflows autonomously.

On the economic side, the pricing remains almost absurdly aggressive. DeepSeek charges **$0.30 per million input tokens and $1.20 per million output tokens** at peak hours — and exactly half that during off-peak windows. For cached input, the price drops to $0.006 per million tokens, a figure that would have been dismissed as a rounding error two years ago.

| Pricing Tier | Input (per 1M tokens) | Output (per 1M tokens) |
|---|---|---|
| Peak hours | $0.30 | $1.20 |
| Off-peak hours | $0.15 | $0.60 |
| Cached input (peak) | $0.006 | — |
| Cached input (off-peak) | $0.003 | — |

*Source: DeepSeek API pricing, October 2026. Off-peak window: 16:30–00:30 UTC.*

The architecture behind these numbers is a Mixture-of-Experts design with approximately 552 billion total parameters, of which only 8 billion are active on input and 16 billion on output. This extreme sparsity — activating roughly 3% of the total parameter count for any given token — is what makes the economics work. DeepSeek can serve inference at commodity prices because each request touches only a sliver of the total model.

But the real strategic move is not architectural. It is the **MIT license**. The full weights are available on Hugging Face, free to download, fine-tune, and deploy commercially. Any company, in any country, can run this model on its own infrastructure without paying DeepSeek a cent in licensing fees. The API is a convenience layer, not a lock-in mechanism.

## The Architecture of Disruption: Why the Flash Tier Exists

To understand why DeepSeek invests engineering resources in making a flash model this capable, it helps to look at what the company is building around the model itself. On the same day the 1017 checkpoint dropped, DeepSeek also launched two companion APIs — a **Search API** and a **Fetch API** — priced at $0.75 per 1,000 successful requests. These are not model endpoints. They are infrastructure services that give the model real-time access to the web: fetching URLs, performing searches, and retrieving structured data.

The significance of this bundling is easy to miss if you are only looking at benchmark scores. DeepSeek is not selling a language model. It is selling a **complete agentic stack**: a cheap, fast reasoning engine (V4.1 Flash) connected to live information retrieval (Search/Fetch APIs), with enough context length (1M tokens) to hold an entire codebase or document corpus in working memory simultaneously.

The architecture also reflects a bet on what the next phase of AI competition will actually be about. In DeepSeek's formulation, the frontier is no longer defined by who can solve the hardest math problem. It is defined by who can deploy the most capable model at the lowest cost per completed task — and do it at a scale that makes the economics irresistible for developers building production systems.

![Data visualization dashboards — the flash tier's economics only make sense when you see the cost curves](https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=400&fit=crop)

## The Speed Play: MiniMax M3.1 Flash

While DeepSeek was refining the intelligence ceiling of the flash tier, MiniMax was attacking from a different angle: raw throughput.

M3.1 Flash, launched October 19, does not try to win the benchmark beauty contest. Instead, it targets the operational constraint that most developers actually care about — **latency and cost per request**. The headline numbers are straightforward:

| Specification | MiniMax M3.1 Flash |
|---|---|
| Inference speed | 3x faster than M3 predecessor |
| Cost reduction | 70% vs previous generation |
| Context window | 1M tokens |
| Typical output speed | 200+ tokens/second |
| Median output speed | 170+ tokens/second |
| Availability | MiniMax API, M Plan, MiniMax Code |

*Source: MiniMax product announcement, October 19, 2026.*

The 200+ tokens-per-second output speed is the number that matters for interactive applications. At that rate, a 500-token response — roughly a page of text — arrives in about 2.5 seconds. For comparison, many frontier models from Western labs deliver 30–60 tokens per second, meaning the same response takes 8–16 seconds. For chatbots, coding assistants, and real-time agent workflows, that difference is the gap between a product that feels instant and one that feels broken.

MiniMax is also pricing access through a **subscription model** alongside the pay-per-token API, which is a different distribution strategy from DeepSeek's pure API play. The M Plan tiers bundle compute access into annual packages:

| M Plan Tier | Annual Price | Target User |
|---|---|---|
| M Plan Go | $220/year | Individual developers, prototyping |
| M Plan Explore | $550/year | Small teams, production workloads |
| M Plan Build | $1,320/year | Enterprises, high-volume deployment |

*Source: MiniMax M Plan pricing, October 2026.*

This subscription approach reveals MiniMax's target market: not the research lab running one-off experiments, but the **product team shipping AI features to millions of users**. A team paying $1,320 per year for effectively unlimited M3.1 Flash access can build consumer-scale applications without the variable-cost anxiety that comes from per-token billing at scale.

MiniMax's M3.1 Flash targets the same agentic use cases as DeepSeek — coding, computer use, cybersecurity tasks — but optimizes for a different constraint. Where DeepSeek asks "how smart can a $0.15 model be?", MiniMax asks "how fast can a smart model be while staying cheap?" The two questions are complementary, and together they define the two axes of the flash tier's competitive landscape.

## Head-to-Head: The Numbers That Matter

Placing the two models side by side reveals how differently they have chosen to compete within the same tier:

| Dimension | DeepSeek V4.1 Flash 1017 | MiniMax M3.1 Flash |
|---|---|---|
| AA Intelligence Index | 45 | Not yet benchmarked |
| Context window | 1M tokens | 1M tokens |
| Architecture | MoE, ~552B total, 8B/16B active | MoE (details undisclosed) |
| Peak input price | $0.30/1M | Bundled in subscription |
| Peak output price | $1.20/1M | Bundled in subscription |
| Off-peak input price | $0.15/1M | Bundled |
| Off-peak output price | $0.60/1M | Bundled |
| License | MIT (open weights) | Proprietary (API/subscription) |
| Speed | ~176 output tok/s (measured) | 200+ output tok/s (claimed) |
| Key differentiator | Benchmark-leading intelligence at flash-tier price | Subscription pricing, speed-optimized inference |
| Distribution | Hugging Face + API | API + M Plan + MiniMax Code |

*Source: Company disclosures, independent benchmarks, Artificial Analysis.*

The comparison highlights a fundamental strategic divergence. DeepSeek is giving the model away — MIT license, full weights on Hugging Face — and monetizing the API as the convenient option. MiniMax is keeping the model proprietary and monetizing access through a subscription wrapper. Both approaches can work, but they attract different constituencies. The open-weight approach wins the developer mindshare and ecosystem adoption. The subscription approach wins the enterprise contract and predictable recurring revenue.

What both share is the same bet: that the **flash tier — not the flagship tier — is where the volume of AI inference will concentrate** over the next two years. Flagship models will remain relevant for the hardest problems, but the vast majority of production AI workloads — summarization, code completion, data extraction, agent orchestration, content moderation — do not require the absolute frontier of capability. They require "good enough at scale," and "good enough" is getting very good, very fast.

## The Ecosystem: China's Flash Tier Is Now a Crowd

The DeepSeek-MiniMax rivalry is not a two-player game. It is the most visible front in a broader flash-tier war that now includes at least five major Chinese labs, each with a credible offering at or below the $1.50-per-million-output-tokens threshold:

| Model | Lab | License | Input ($/1M) | Output ($/1M) | Notes |
|---|---|---|---|---|---|
| V4.1 Flash 1017 | DeepSeek | MIT | $0.30 | $1.20 | AA Index 45, 1M context |
| M3.1 Flash | MiniMax | Proprietary | Subscription | Subscription | 200+ tok/s, 1M context |
| GLM 5.3 Flash | Zhipu AI | MIT | $0.15 | $0.50 | 320B/18B active MoE |
| Qwen 3.8-Flash-Next | Alibaba | Apache 2.0 | $0.15 | $0.47 | 125B MoE, consumer-optimized |
| Qwen3.8-27B | Alibaba | Apache 2.0 | $0.50 | $3.00 | Runs on iPhone 18 Neural Engine |

*Source: Yotta Labs model comparison, October 2026, cross-referenced with vendor pricing pages.*

This table tells a story that should concern every Western AI lab. At the $0.15–$1.20 output price point, there are now at least four Chinese models with different architectural tradeoffs, different licensing terms, and different distribution strategies — all competing with each other for the same developer attention. This is not a single company undercutting on price. It is an **entire ecosystem racing to the bottom of the cost curve**, and each participant is making the others faster and cheaper through competitive pressure.

The Qwen3.8-27B entry deserves particular attention. A 27B-parameter model running on a smartphone neural engine at 15–70 tokens per second means the flash tier is not just a cloud phenomenon. It is migrating to the edge, to devices that never send a single token to a data center. The implications for privacy, offline capability, and distributed AI deployment are significant and largely unexplored.

## The Western Equation: Nobody Can Match This Price

The comparison with Western frontier models is stark enough to border on uncomfortable:

| Model | Lab | AA Intelligence Index | Output Price ($/1M) | Open Weights |
|---|---|---|---|---|
| Claude Opus 5.5 | Anthropic | 58 | $20.00 | No |
| Claude Sonnet 5.5 | Anthropic | 56 | $10.00 | No |
| GPT-6 Astra | OpenAI | 53 | $50.00 | No |
| Grok 4.7 | xAI | 46 | ~$15.00 | No |
| GLM-5.3 | Zhipu AI | 45 | $4.40 | Yes (MIT) |
| Qwen3.8-Max | Alibaba | 45 | $6.00 | Yes (Apache 2.0) |
| **V4.1 Flash 1017** | **DeepSeek** | **45** | **$1.20** | **Yes (MIT)** |
| Kimi K3 | Moonshot AI | 44 | $15.00 | Yes (Modified MIT) |

*Source: Artificial Analysis Intelligence Index v4.3.2, October 2026.*

The models scoring 53–58 on the AA Index are unquestionably more capable than anything in the flash tier. Claude Opus 5.5's 58 versus V4.1 Flash 1017's 45 represents a real capability gap — one that matters for the most demanding research, reasoning, and creative tasks.

But the pricing gap is far larger than the capability gap. GPT-6 Astra at $50 per million output tokens costs **42 times more** than V4.1 Flash 1017 at peak ($1.20) and **83 times more** during off-peak hours ($0.60). For a workload that processes 100 million input tokens and 20 million output tokens per month, the annual cost difference between these two models exceeds $1.1 million.

For most production AI workloads — the kind that constitute 90%+ of real-world API calls — the question is not "which model is smartest?" It is "which model is smart enough at a price that lets me build a viable product?" The Chinese flash tier is aggressively, systematically, and structurally winning that question.

There is also a structural advantage that Chinese labs hold in this tier: **compute scarcity as an innovation forcing function**. US export controls on advanced GPUs have pushed Chinese labs toward extreme efficiency in model architecture and inference optimization. When you cannot buy unlimited H100s, you learn to extract maximum intelligence per FLOP. The flash tier is, in part, a product of sanctions — a category of model born from necessity and refined by competition into something genuinely world-leading.

![High-speed fiber optic cables carrying data — the infrastructure of China's flash-tier AI model ecosystem](https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=400&fit=crop)

## What the Flash War Actually Means

The flash-tier competition is often described as a price war, and on the surface it is — companies racing to offer the lowest per-token cost while maintaining acceptable quality. But the deeper dynamic is something more interesting: **a structural shift in where AI value is captured**.

Western AI labs capture value at the top of the capability curve, charging premium prices for models that can do things no other model can. Chinese AI labs are capturing value at the bottom — commoditizing the broad middle of AI capability and making it so cheap that the marginal cost of "good enough AI" approaches zero. Both strategies are valid, but they create very different competitive moats.

The Western moat is technological: a genuine capability advantage that justifies premium pricing. The Chinese moat is economic: a cost structure so aggressive that even Western labs with comparable models cannot match the price without destroying their margins.

The risk for Western labs is that the "good enough" boundary keeps moving upward. Eighteen months ago, flash-tier models could not reliably summarize a document. Today they score 45 on the AA Intelligence Index and run terminal-based agentic workflows. If the boundary keeps shifting at this pace, the addressable market for premium-priced frontier models will shrink to a narrow band of use cases — cutting-edge research, novel problem-solving, and tasks where the cost of error is so high that a 13-point capability gap justifies a 40x price premium.

That is a real market, but it is not a $500 billion market. It might not even be a $100 billion market. The flash tier is racing to claim everything below it.

## Social Voices

**@DeepSeekHacker** (Twitter/X):
> "MIT license. 45 on AA Index. $0.15/M off-peak. DeepSeek isn't selling a model, they're selling the end of the per-token pricing era. Every AI startup CTO should be running the math on what this does to their burn rate."
>
> *(English — no translation needed)*

**量子位QbitAI** (Weibo):
> "DeepSeek V4.1 Flash 1017的得分已经追平GLM-5.3和Qwen3.8-Max，但价格是后者的零头。中国AI的'闪速层'已经不是低端替代品，而是正在重新定义什么叫性价比。"
>
> *"DeepSeek V4.1 Flash 1017's score has caught up with GLM-5.3 and Qwen3.8-Max, but the price is a fraction of theirs. China's flash tier is no longer a budget alternative — it is redefining what value for money means."*

**知乎用户 极客小张** (Zhihu):
> "MiniMax的订阅制很聪明。对中小团队来说，年费$550比按token计费心理负担小太多。但DeepSeek的开源策略才是真正的核弹——你可以不用它的API，但你没法假装它不存在。"
>
> *"MiniMax's subscription model is smart. For small teams, $550/year carries far less psychological burden than per-token billing. But DeepSeek's open-source strategy is the real nuclear bomb — you can choose not to use their API, but you can't pretend it doesn't exist."*

**@ai_rachel** (Twitter/X):
> "The thing nobody talks about: V4.1 Flash 1017 didn't need a new architecture to jump +6 AA Index points. Same model, better checkpoint. The implication is that there's still massive headroom in post-training that we're not extracting."
>
> *(English — no translation needed)*

**机器之心** (WeChat/Weibo):
> "中国AI的'闪电战'不是一家公司的事，是整个生态的共振。DeepSeek、MiniMax、智谱、阿里、月之暗面同时在低价高性能区间发力，这不是内卷，这是把全球市场拖入自己的节奏。"
>
> *"China AI's 'flash war' is not one company's story — it is the resonance of an entire ecosystem. DeepSeek, MiniMax, Zhipu, Alibaba, and Moonshot are all pushing simultaneously in the low-cost, high-performance range. This is not involution — it is pulling the global market into its own rhythm."*

**@vlddy** (Hacker News):
> "I've been using V4.1 Flash for agentic coding tasks since the 1017 update dropped. The Terminal-Bench improvement is real — multi-step shell workflows that used to fail halfway now complete. At $0.30/M input, I'm running it on cron jobs I never would have considered before."
>
> *(English — no translation needed)*

---

The 48-hour flash war between DeepSeek and MiniMax will not make front-page news in the way a flagship model launch does. There were no keynote speeches, no viral demos, no carefully staged benchmark reveals. Just two changelog entries, two pricing pages, and two sets of numbers that — when placed side by side — tell a story about the future of AI economics that is far more consequential than any single product launch.

The question is no longer whether Chinese AI labs can build frontier-capable models. That question was answered months ago, and the answer was yes. The question now is whether the rest of the world can compete in a market where the price of intelligence is collapsing toward zero — and if so, how.

The flash tier is not waiting for an answer.

---

*Related reading: [DeepSeek's Silence: What V4 Pro's Quiet Launch Reveals About China's AI Strategy](/blog/deepseek-silence-v4-pro-china-ai-strategy-2026/) · [DeepSeek-Moonshot: The Dual IPO Race Reshaping China's AI Capital Markets](/blog/deepseek-moonshot-dual-ipo-race-china-ai-2026/) · [China AI Token Price War: DeepSeek, Zhipu, and the Race to Zero](/blog/china-ai-token-price-war-deepseek-zhipu-2026/) · [China AI Goes Global: The Open-Source Cloud Empire](/blog/china-ai-goes-global-open-source-cloud-empire-2026/)*
