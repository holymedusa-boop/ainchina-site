---
title: "China's Trillion-Token Price War: DeepSeek vs. Zhipu"
slug: "china-ai-token-price-war-deepseek-zhipu-2026"
date: "2026-09-20"
excerpt: "On September 10, DeepSeek cut its API prices by up to 60%. Three days later, Zhipu raised HK$39.3 billion to survive the same war. One company is betting that engineering can outrun economics. The other is betting that capital can buy time for engineering to catch up. China's AI industry is splitting into two species — and the trillion-token battlefield will decide which one inherits the future."
author: "AI in China Editorial"
readTime: "15 min"
heroImage: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=1200"
category: "AI Industry & Market"
tags:
  - China AI
  - DeepSeek
  - Zhipu AI
  - Token Price War
  - OpenRouter
  - MiniMax
  - Alibaba Qwen
  - Tencent Hy4
  - AI Pricing
  - ByteDance
keywords:
  - china ai price war 2026
  - deepseek v4.1 flash pricing
  - zhipu 39.3 billion hk fundraising
  - openrouter chinese models token volume
  - glm-5.3-flash api price
  - ai token cost comparison china us
  - minimax 16 billion funding
  - bytedance 29.6 billion loan ai
  - deepseek 500 billion valuation
  - china ai compute race 2026
related:
  - /blog/china-open-source-ai-empire-brics-frontier-gap-2026/
  - /blog/china-ai-compute-empire-sanctions-boomerang-deepseek-huawei-2026/
  - /blog/china-ai-efficiency-engineering-more-with-less-2026/
  - /blog/china-ai-asean-deployment-playbook-southeast-asia-2026/
---

![A trading screen glowing with market data — China's AI labs are fighting a price war measured in trillionths of a dollar per token](https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=1200)
*China's AI price war is fought in fractions of a cent per million tokens, but the battlefield is measured in the trillions. (Image: Unsplash)*

On September 10, 2026, DeepSeek did what DeepSeek does: it made intelligence cheaper. The Hangzhou lab's new V4.1 Flash model arrived with a price list that undercut its own predecessor by as much as 60% — cached input tokens during off-peak hours now cost ¥0.02 per million, a figure so low it rounds to zero on most corporate budgets. A 552-billion-parameter model with native vision understanding, priced like a utility.

Three days later, on September 13, Zhipu AI did what Zhipu does: it raised money. HK$39.3 billion (roughly US$5 billion) in fresh capital through a share placement — the second major raise in nine weeks for the Beijing lab behind the GLM model family, on top of the HK$31.4 billion it placed in July and the HK$4.9 billion from its January IPO. Zhipu's explanation to investors was unusually candid: compute supply is favorable right now, deployment takes time, and the company intends to sign contracts for a lot of it.

Two companies. Two completely opposite answers to the same question: *how do you survive a war where the product you sell loses value every single week?*

China's AI industry is splitting into two species. One is engineering-led, betting that ruthless efficiency can hold prices near cost while volume makes up the difference. The other is capital-led, betting that fundraising firepower can buy compute, talent, and market share faster than margins collapse. Both cannot be right forever. The trillion-token battlefield they now share will decide which model of the AI company inherits the future — and September 2026 delivered the clearest head-to-head evidence yet.

## Part One: The Efficiency Machine

### Anatomy of a 60% Price Cut

DeepSeek V4.1 Flash is not a budget model in the sense Western users understand the term. It is the smallest member of an entirely new architecture family — a Causal-Encoder-Decoder design that treats input and output as asymmetric problems. The full model carries 552 billion parameters in a mixture-of-experts layout, but only 8 billion parameters activate when reading input, and 16 billion when generating output. The result is a model that punches at or above DeepSeek V4 Pro on performance, cost, speed, and total task completion time — while costing a fraction of its predecessor to serve.

The engineering is where the price cut comes from, and it is worth examining closely, because this is the actual weapon in China's price war:

| Efficiency Metric | DeepSeek V4 Flash | DeepSeek V4.1 Flash | Improvement |
|---|---|---|---|
| KV cache (HBM requirement) | Baseline | 1/4 of previous generation | 75% reduction |
| KV cache (SSD requirement) | Baseline | 1/8 of previous generation | 87.5% reduction |
| KV cache vs. first-gen DeepSeek | Baseline | 1/437 | 99.8% reduction |
| Input-active parameters | — | 8B | Asymmetric activation |
| Output-active parameters | — | 16B | Asymmetric activation |
| Agent-scenario serving cost | Baseline | Significantly lower | Cost structurally compressed |

*Source: DeepSeek technical disclosures, September 2026. KV cache compression is the quiet enabler of the price war — memory, not FLOPs, is the binding constraint on serving economics.*

KV cache — the temporary memory a model needs to keep context alive during a conversation — is the silent tax on every token served. By compressing it to a quarter of the previous generation's HBM footprint and an eighth of its SSD footprint, DeepSeek freed capacity that translates directly into per-token cost. Multiply that by the agentic workloads the architecture was explicitly designed for — long-running tasks with enormous contexts — and the savings compound.

Then came the price list, effective September 10 at noon:

| API Price (per 1M tokens) | V4 Flash (prior gen, same period) | V4.1 Flash Off-Peak | V4.1 Flash Peak | Change vs. Prior Generation |
|---|---|---|---|---|
| Cached input | ¥0.05 | ¥0.02 | ¥0.04 | −60% off-peak |
| Uncached input | ¥1.50 | ¥1.00 | ¥2.00 | −33.3% off-peak |
| Output | ¥4.50 | ¥4.00 | ¥8.00 | −11.1% off-peak |

*Source: DeepSeek platform pricing, September 10, 2026. Off-peak/cache-hit pricing is the industry lever for monetizing idle capacity — a trick borrowed from airlines and cloud computing.*

Read the structure of that table rather than just the numbers. The deepest cut lands on cached input — the workload of returning customers with established context, exactly the users an agent platform accumulates. The peak/off-peak split is airlines revenue management applied to GPUs: fill the valleys, charge for the peaks. DeepSeek is not just selling cheap tokens; it is running a capacity-utilization business with a cost curve its competitors cannot easily match.

### The Volume Flywheel

The bet is simple: if tokens are cheap enough, developers will route everything through your API, and volume will finance the next round of efficiency. And the early evidence suggests the flywheel is spinning. In OpenRouter's tracking for the week of September 7–13, DeepSeek V4.1 Flash — live for barely four days — surged straight to the number two position globally with 11.8 trillion tokens processed, trailing only OpenAI's GPT-5.6 Luna at 15.8 trillion. Total platform volume hit 127 trillion tokens, up 10.4% week over week.

![A laptop glowing with analytics dashboards — token volume, not benchmark scores, has become the metric that decides who can afford to keep fighting](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800)
*Token volume has replaced benchmark scores as the number that decides who survives. DeepSeek's V4.1 Flash hit 11.8 trillion tokens in its first four days on OpenRouter. (Image: Unsplash)*

This is the efficiency machine in its purest form: architecture innovation lowers cost, lower cost drives volume, volume funds the next architecture. DeepSeek's reported second-round funding talks — at a pre-money valuation near ¥500 billion, up from ¥350 billion earlier in the year — suggest investors believe the loop compounds. Notably, DeepSeek has not announced a monster raise. It has not needed to. The market is coming to it.

## Part Two: The Capital Machine

### 39.3 Billion Reasons to Fight

If DeepSeek's story is engineering, Zhipu's is arithmetic — the arithmetic of a company that has decided the window to secure compute is open now and may not stay open.

| Zhipu Financing Event | Date | Amount | Detail |
|---|---|---|---|
| Hong Kong IPO | January 2026 | HK$4.9 billion | Fully deployed by September |
| First placement (H-shares) | Announced July 9, completed July 13 | HK$31.41 billion | Placed at HK$1,588 per share |
| — of which consumed | By September 13 | HK$10.955 billion | 34.92% of first placement |
| Second placement | Announced September 13 | HK$39.3 billion | Second raise in nine weeks |

*Source: Zhipu AI exchange filings, September 2026. The company's disclosure that its January IPO proceeds were fully spent underscores how quickly capital converts into compute in this market.*

Zhipu's own filing explains the logic. Compute supply conditions and delivery terms are currently favorable, the company wrote, but there is a lag between signing a contract and bringing capacity online. Raising now aligns new compute deployment with expansion plans. Translated from filings language: GPU rental prices fluctuate, availability tightens without warning, and a lab that waits for profitability to fund infrastructure will find the shelf empty.

The allocation of proceeds is equally revealing — roughly 60% to R&D, infrastructure, and technical talent; 15% to business expansion, strategic investment, and potential acquisitions; 25% to capital structure optimization and liquidity. This is not the budget of a company trimming costs to survive a price war. It is the budget of a company planning to out-produce it.

### Burn Rate as Strategy

Zhipu is not alone. The second half of 2026 has turned into an arms race not of models, but of balance sheets:

| Company | Event | Amount | Strategic Logic |
|---|---|---|---|
| Zhipu AI | Second placement (Sept 13) | HK$39.3 billion | Lock in favorable compute supply |
| MiniMax | Placement + zero-coupon convertible bonds (July 10) | ~HK$16 billion | Fund model family expansion |
| ByteDance | Syndicated loan | US$29.6 billion (~¥198.7 billion) | Back AI spending across Doubao ecosystem |
| DeepSeek | Second-round talks (July–August) | Pre-money valuation ~¥500 billion | Let volume and margins justify premium |
| Moonshot AI | Kimi K3 premium positioning | Price increases on flagship tier | Monetize frontier capability, cede volume tier |

*Source: Company announcements and Caixin reporting, July–September 2026. The split is ideological as much as financial: DeepSeek and Moonshot let pricing power flow from capability, while Zhipu and MiniMax raise capital ahead of need.*

The contrast with Moonshot is instructive. While DeepSeek cuts and Zhipu fundraises, Moonshot moved the other direction — raising prices on its flagship Kimi K3 tier, the open-source 3-trillion-parameter reasoning model, effectively conceding the ultra-cheap volume segment to focus on workloads where buyers pay for capability rather than cost. Xiaomi, meanwhile, has crashed into the volume game from the hardware side: its MiMo-V2.5 model posted a 230% week-over-week surge to 7.77 trillion tokens in domestic tracker data, riding the same cheap-token wave DeepSeek created.

The capital machine's thesis is that this market will reward scale — that the last lab standing will be the one with the biggest fleet, the deepest talent bench, and the most distribution, not the leanest cost structure. It is the AWS playbook applied to foundation models: lose money on the product, own the infrastructure.

## Head-to-Head: The Price List That Shook the Industry

Strip away the strategies and the war is visible in a single table. Here is what a million tokens actually cost across the major APIs serving China — and what the American incumbents charge by comparison:

| Provider / Model | Input (per 1M) | Output (per 1M) | Notes |
|---|---|---|---|
| DeepSeek V4.1 Flash (off-peak, cached) | ¥0.02 | ¥4.00 | Cache-hit input; uncached ¥1.00 |
| Zhipu GLM-5.3-Flash (list) | ~¥1.08 ($0.15) | ~¥3.60 ($0.50) | MIT-licensed weights; 1M context |
| Alibaba Qwen3.8-Flash-Next | Ultra-low tier | Ultra-low tier | Qwen4-architecture preview; 262K context |
| Tencent Hy4 Preview | Competitive volume tier | Competitive volume tier | 770B total / 49B active; open-sourced Aug 28 |
| Xiaomi MiMo-V2.5 | Volume-tier | Volume-tier | +230% weekly token growth |
| OpenAI GPT-5.6 Luna (reference) | Premium tier | Premium tier | #1 globally at 15.8T tokens/week |
| Anthropic Claude (reference) | Premium tier | Premium tier | 30–100x Chinese pricing on comparable tiers |

*Sources: Platform price lists as of mid-September 2026; OpenRouter weekly data. Chinese labs price in yuan at levels that make Western list prices look like a different currency — because functionally, they are.*

The pattern analysts keep returning to is not merely that Chinese models are cheaper. It is that the *frontier* Chinese models are cheaper — GLM-5.3-Flash, with MIT-licensed weights and a one-million-token context window, lists at $0.15 per million input tokens. Models at that price should not exist at that capability level, by the economics the industry understood in 2024. They exist because DeepSeek proved they could, and everyone else was forced to follow.

## The Market's Verdict

So who is winning? The token meters are the closest thing this war has to a scoreboard, and their reading is unambiguous:

| OpenRouter Ranking, Week of Sept 7–13 | Model | Weekly Tokens | Origin |
|---|---|---|---|
| 1 | GPT-5.6 Luna | 15.8 trillion | US |
| 2 | DeepSeek V4.1 Flash | 11.8 trillion | China |
| 3 | Tencent Hy4 Preview | 11.6 trillion | China |
| — | Total platform volume | 127 trillion (+10.4% WoW) | — |
| — | Chinese models in global top 10 | 8 of 10 | China |

*Source: OpenRouter data cited by Caixin, September 2026. Domestic trackers separately logged Xiaomi's MiMo-V2.5 at 7.77 trillion tokens, up 230% week over week.*

Eight of the ten most-called models in the world are now Chinese. Domestic trackers have recorded Chinese models leading global call-volume rankings for twenty consecutive weeks. The market's verdict, so far, is that the efficiency machine and the capital machine are *both* working — because they are collectively flooding the zone. DeepSeek's price cuts expand the market; Zhipu's compute build-out ensures Chinese labs can serve it; and the resulting volume starves everyone else's margin structure.

That last point is the one that should worry Silicon Valley. American labs are cutting prices too — Anthropic dropped cache pricing 75% on its Fable line, OpenAI trimmed GPT-5.6 Sol by 20% — but they are cutting from margins, while their Chinese rivals are cutting from a cost structure that was lower to begin with. China's labs have structural advantages in engineering labor costs, energy pricing, and an open-source ecosystem that amortizes research across a dozen labs simultaneously.

![Financial charts tracking a steep downward curve — every price cut expands the market, and the market expansion funds the next cut](https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800)
*Every price cut expands the market; market expansion funds the next cut. The question is who runs out of either first. (Image: Unsplash)*

## What Comes Next

Three fault lines will decide this war over the next twelve months.

**The margin question.** DeepSeek's model requires that engineering outpace depreciation — that each architecture generation lowers cost faster than token prices fall. If V4.1 Flash's successors stall, the flywheel reverses: volume becomes a liability, not an asset. Zhipu's model requires that compute bought today is worth more tomorrow. If inference prices keep falling 30–60% per generation, yesterday's fleet becomes a stranded asset. Both companies are short the same thing: time.

**The consolidation wave.** Not every lab can run either machine. The middle of China's model market — the labs that are neither the cheapest nor the best-funded — is already hollowing out. MiniMax's convertible bond structure and Zhipu's 15% allocation for "strategic investment and potential M&A" are both, in part, preparation for buying distressed capability at distressed prices. Expect the twenty-week token-volume leaderboard to compress to five or six Chinese names by mid-2027.

**The export of deflation.** The price war cannot stay contained. As Chinese models capture more of OpenRouter's global volume — already 8 of the top 10 — American labs face a choice between matching prices they cannot match at their cost structure, or retreating upmarket to the premium reasoning tier where Moonshot has already positioned Kimi K3. The irony is rich: the country that invented the razor-and-blade, scale-then-monetize playbook may be on the receiving end of it.

Two species entered September 2026. The efficiency machine proved it can win volume. The capital machine proved it can survive the burn. The trillion-token battlefield now has room for both — but only because the market itself keeps growing fast enough to hide the casualty rate. When the growth pauses, the war gets honest. Neither DeepSeek's cost curve nor Zhipu's war chest has faced that moment yet. It is coming.

## Social Voices

*What developers, investors, and observers are saying across Chinese and global platforms:*

> **@ModelBehavior (Twitter/X):** "8 of the top 10 models on OpenRouter are now Chinese. GPT-5.6 Luna is #1 but the other 9 slots are a mix of DeepSeek, Tencent, Zhipu, Xiaomi. The 'China models are cheap but nobody uses them' era is officially over."
> *"OpenRouter 前十的模型里现在八个是中国的。'中国模型便宜但没人用'的时代正式结束了。"*

> **知乎用户「算力即权力」:** "DeepSeek 的降价不是价格战，是成本结构碾压。V4.1 Flash 的 KV cache 压缩到上一代的四分之一，别人跟得起价格跟不起架构。等对手追上架构，下一代又出来了。这是飞轮，不是补贴。"
> *"DeepSeek's price cuts aren't a price war — they're a cost-structure crush. V4.1 Flash compresses KV cache to a quarter of the previous generation. Rivals can match the price, not the architecture. By the time they catch up, the next generation ships. It's a flywheel, not a subsidy."*

> **微博用户「科技财经君」:** "智谱九周融了七百多亿港币，烧钱速度比训练模型还快。钱能买来算力，买不来 DeepSeek 那种把 KV cache 压到 1/437 的工程文化。最后的赢家大概率还是工程师文化，不是 CFO 文化。"
> *"Zhipu raised over HK$70 billion in nine weeks, burning money faster than it trains models. Money buys compute, but it can't buy the engineering culture that compresses KV cache to 1/437. The winner will be the engineers, not the CFOs."*

> **小红书博主「AI产品经理阿黎」:** "实测对比了一周：同样一个 agent 任务，DeepSeek V4.1 Flash 成本是 GPT-5.6 的 1/20，GLM-5.3-Flash 开源自部署后成本还能再砍一半。现在团队里已经没人讨论用哪家美国模型了，讨论的是哪家国产模型剩的钱多。"
> *"Tested for a week: the same agent task costs 1/20th on DeepSeek V4.1 Flash vs GPT-5.6, and self-hosting open-source GLM-5.3-Flash halves it again. Nobody on my team discusses which American model to use anymore — we debate which Chinese model leaves more budget."*

> **豆瓣小组「好奇心研究所」:** "泼点冷水：二十周调用量冠军是建立在补贴上的。等资本市场的钱烧完、等美国出口管制进一步收紧，再看这个榜单。价格战热闹，但没有一家中国大模型公司真正盈利了。"
> *"Cold water: the twenty-week volume lead is built on subsidies. Wait until venture capital runs dry and US export controls tighten further, then check the leaderboard again. The price war is loud, but not one Chinese foundation model company is actually profitable."*

> **GitHub 用户 wanghaofei (issue comment, Qwen repo):** " shipped our internal tool from GPT-5.6 to MiMo-V2.5 last week. Latency down 40%, cost down 95%. The interesting part wasn't the migration — it took one engineer one afternoon. The moat is gone; only the price list matters now."
> *"上周把内部工具从 GPT-5.6 迁到了 MiMo-V2.5。延迟降了 40%，成本降了 95%。有意思的是迁移本身——一个工程师一个下午就完成了。护城河没了，现在只看价目表。"*
