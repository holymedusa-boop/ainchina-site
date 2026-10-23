---
title: "Kimi K3.1 Pro: The 0.7-Point Gap That Is Rewriting China's Open-Weight Ambition"
date: "2026-10-24"
excerpt: "Moonshot AI's Kimi K3.1 Pro scored 65.7% on Terminal-Bench 4.0 — 0.7 points behind Claude Opus 5.5 and 7.5 points ahead of GPT-6 Astra — while cutting API prices 33% and promising full open weights by November 4. Inside the launch, the deliberate cyber-capability downgrade, and what a 2.8T-parameter open model means for the frontier."
author: "AI in China Editorial"
readTime: "16 min read"
tags: ["Kimi", "Moonshot AI", "K3.1 Pro", "China AI", "Open Weight", "AI Benchmarks", "Claude Opus 5.5", "AI Coding", "China AI 2026"]
image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop"
keywords: ["Kimi K3.1 Pro", "Moonshot AI", "open weight model 2026", "Terminal-Bench 4.0", "China AI frontier", "Claude Opus 5.5 competitor", "kimi-k3.1-pro API pricing", "1M context window", "AI hallucination rate", "China open source AI"]
---

![Code on a developer's laptop — Kimi K3.1 Pro targets exactly this workflow, shipping through Kimi Code, Kimi Work, and a dual OpenAI/Anthropic-compatible API](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop)

At 2:41 AM Beijing time on October 24, 2026, a developer in Hangzhou opened a terminal and typed one command: `/model k3.1-pro-highspeed`. Within seconds, Kimi Code — Moonshot AI's terminal agent — acknowledged the switch, and the developer pasted in a half-finished Three.js repository that had resisted his team's best efforts for a week. The model he was now talking to had been public for less than six hours. It had been tested in secret on LMArena for weeks under the codename "Kibitz." And according to the numbers Moonshot published alongside the launch, it was now **0.7 percentage points behind Anthropic's Claude Opus 5.5** on Terminal-Bench 4.0, the benchmark that measures how well AI agents survive real, resource-constrained programming tasks.

Zero point seven. In January 2025, when DeepSeek's R1 shocked Western labs, the gap between China's best open model and America's closed frontier was measured in years. Ten months later, Moonshot's K3 cut that gap to months. This week, K3.1 Pro compressed it to **a rounding error** — while undercutting the frontier on price by an order of magnitude, and promising to give the entire thing away, weights and all, by November 4.

This is the story of how Moonshot built the model, why it deliberately made the open-weight version *worse* at one specific thing, and what happens when a 2.8-trillion-parameter open model lands within striking distance of the most expensive closed systems on Earth.

## Ninety-Nine Days from Shock to Sequel

To understand what K3.1 Pro is, you have to start with what K3 did.

On July 16, 2026, Moonshot AI released Kimi K3 — a 2.8-trillion-parameter open-weight model that became the first in history to break the 3T-parameter class. It topped Arena.ai's Frontend Code Arena with an Elo of 1,679, outscoring Claude Fable 5 (1,631) and GPT-5.6 Sol (1,618). It scored a perfect 42/42 on IMO 2026 problems, solving them autonomously in 17.4 hours at a total cost of $31.40. The Nasdaq fell roughly 1% on the launch day as investors repriced the moats of Western AI companies.

Then reality arrived. Within 48 hours, demand had overwhelmed Moonshot's inference capacity, and the company suspended new consumer subscriptions. The "Kimi moment" became a case study in Chinese AI's recurring bind: world-class models, insufficient world-class compute to serve them.

K3.1 Pro is the answer to that bind — not with more parameters, but with better ones.

Rather than scaling the base model, Moonshot's team focused almost entirely on **post-training**: heavier reinforcement learning on long-horizon tasks, computer-use trajectories, and real production task data. The result is a model that carries the same 2.8T total / 104B active architecture as its predecessor but behaves like something from a different generation entirely.

| Metric | Kimi K3 (July 2026) | Kimi K3.1 Pro (Oct 2026) | Delta |
|---|---|---|---|
| Terminal-Bench 4.0 (agentic coding) | 55.95% (Code Bench 3.0 Long-horizon) | 65.7% | +9.75 pts |
| Kimi Code Bench 3.0 Long-horizon | 55.95% | 61.2% | +5.25 pts |
| Claim-level hallucination rate (Hallu Bench Hard) | 23.4% | 8.3% | −64.5% relative |
| 3D modeling generation (internal suite) | Baseline | 92.7% task success | New capability |
| Enterprise operations (financial analysis tasks) | 1x baseline | ≈4.2x | New tier |
| Artificial Analysis Intelligence Index | 57.1 (#3/#4 at launch) | 55 (4th overall, Pareto line) | Verified third-party |
| API input price (per 1M tokens) | $3.00 | $2.00 | −33% |
| API output price (per 1M tokens) | $15.00 | $10.00 | −33% |

*Sources: Moonshot AI K3.1 Pro technical blog (Oct 24, 2026); Artificial Analysis; Hacker News launch threads. K3 benchmark rows reflect Moonshot's published K3 model card figures.*

The most important row in that table is not the coding score. It is the hallucination rate. A 23.4% claim-level hallucination rate is what kills enterprise pilots — not benchmark losses. Dropping it to 8.3%, if the figure holds up under independent testing, matters more for Moonshot's revenue than any point on Terminal-Bench.

## The Architecture Moonshot Bet the Company On

K3.1 Pro is not a new architecture. It is a distillation of lessons — literally and organizationally — from the K3 program.

The base remains the hybrid attention stack Moonshot introduced with K3: **Kimi Delta Attention (KDA)** for linear-attention efficiency at million-token scale, **Attention Residuals (AttnRes)** for routing information across depth, and **Stable LatentMoE** for training stability across 896 routed experts. Of those 2.8 trillion parameters, only about **104 billion are active per token**, with 16 experts firing on each forward pass across 93 layers.

| Specification | Kimi K3.1 Pro |
|---|---|
| Total parameters | ≈2.8 trillion (3T-class) |
| Active parameters per token | 104 billion |
| Architecture | Sparse MoE + KDA linear attention + AttnRes |
| Routed experts | 896 (16 active/token) + shared experts |
| Context window | 1,048,576 tokens (1M native) |
| Max output | 128K tokens |
| Input modalities | Text, image, video |
| Release license | Open weights (full release by Nov 4, 2026) |
| Thinking mode | Always-on (cannot be fully disabled) |

*Source: Moonshot AI Kimi K3.1 Pro technical blog; Kimi K3 architecture disclosures.*

Three of these decisions deserve scrutiny because each reverses an industry assumption.

![Engineering collaboration — Moonshot's post-training team focused heavier RL on long-horizon tasks and real production trajectories rather than scaling the base architecture](https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800)

**First: thinking-mode-only operation.** In Kimi Code, K3.1 Pro always reasons before answering. There is no toggle to disable it. Moonshot has decided that the latency cost of reasoning is non-negotiable — the model without its thinking loop is a different, lesser product.

**Second: the mid-session cache trap.** Switching models or thinking-effort mid-session in Kimi Code invalidates the context cache and inflates token usage. Type a model ID wrong — say, `k3.1-pro` instead of the exact identifier — and requests silently fall back to K2.8 Preview *without thinking enabled*. It is a small detail that will generate real support tickets, and it reveals how aggressively Moonshot is pushing users toward the exact, metered frontier product.

**Third: dual-protocol API.** The Kimi API now speaks both OpenAI's Chat Completions/Responses formats *and* Anthropic's Messages format natively. That is not a convenience feature — it is a migration tool. Teams running Claude Code, OpenCode, or Codex can point their existing harnesses at `kimi-k3.1-pro` without rewriting client code. Moonshot is not asking developers to adopt a new ecosystem. It is asking them to change a base URL.

## The Benchmark Ledger — and the Footnote That Matters

On Moonshot's own numbers, K3.1 Pro's headline comparisons look like this:

| Benchmark | Kimi K3.1 Pro | Claude Opus 5.5 | GPT-6 Astra | DeepSeek V4.1 Flash |
|---|---|---|---|---|
| Terminal-Bench 4.0 | **65.7%** | 66.4% | 58.2% | — |
| PostTrainBench (Moonshot internal) | **Beats V4.1-Flash** | — | — | Second |
| Exploit proficiency test | 81% | — | — | **85.7%** |
| 3D modeling suite | 92.7% | — | — | — |
| Financial/enterprise ops | ≈4.2x prior gen | — | — | — |
| Artificial Analysis Index | 55 (4th, Pareto line) | Higher | Higher | 45 |

*Sources: Moonshot AI published benchmark chart (Oct 24, 2026); Artificial Analysis; Hacker News. Tool-use scores for Claude Opus 5.5 and GPT-6 Astra are taken from their official system cards; GPT-6 Astra's no-tool score was not published. PostTrainBench figures are Moonshot internal evaluations.*

Every serious reader should pause at the footnote row. Moonshot evaluated K3.1 Pro against DeepSeek's V4.1 Flash on its internal PostTrainBench — and used the test to argue its model is better. But on the exploit-proficiency subtest, **DeepSeek's model scored higher**. Moonshot published that too. When a company includes the row where it loses, the table as a whole becomes more credible.

The evaluation methodology deserves equal attention, because it is unusually rigorous for vendor-reported numbers:

| Evaluation Choice | Moonshot's Approach | Why It Matters |
|---|---|---|
| GPU environment | H20 (not H100) for internal coding evals | Matches real-world Chinese deployment constraints under export controls |
| Judge model | DeepSeek-V4.1-Flash-1017 at max reasoning | Cross-vendor judge; matched official GPT-5.6-Terra `xhigh` judging most closely |
| ProgramBench scoring | Binary (≥95% = 1, else 0) | Eliminates partial-credit inflation |
| BenchCAD subset | 1,000 cases sampled from 17,900 Vision2Code tasks | Statistically meaningful sample of CAD-to-code generation |
| Tool-use condition | Claude Code harness | Comparable to how frontier rivals report |

*Source: Moonshot AI K3.1 Pro technical blog, evaluation methodology section.*

Independent verification is arriving on its own schedule. Within hours of launch, the model appeared on Artificial Analysis at **55 Intelligence Index points, fourth overall and sitting directly on the Pareto line** — meaning no other model currently beats it on both capability and cost. The Hacker News launch thread climbed past 113 points and 37 comments, with community sentiment tracking roughly 35% positive, 40% mixed, 25% skeptical — the skepticism concentrated, predictably, on the cyber question.

## The Cybersecurity Gamble: Building a Weaker Model on Purpose

Here is the strangest sentence in AI this month: **Moonship nerfed its own model, on purpose, and then said it would slowly un-nerf it.**

According to the technical blog and reporting around the launch, Moonshot deliberately reduced K3.1 Pro's cyber-offense proficiency before releasing it — a decision aimed squarely at the November 4 open-weights date. The reasoning is structural. Once 2.8 trillion parameters are downloadable by anyone with the hardware to run them, the offense capability of the base model becomes the offense capability of every actor who possesses it. Moonshot chose to ship a model that is measurably less useful for exploitation than DeepSeek's alternative — the 81% vs 85.7% row above is the direct cost of that choice.

The company has signaled it will progressively restore cyber capability under a staged framework — raising limits as safeguards mature, rather than shipping the full-strength version into the wild on day one.

The community reaction split instantly, and the split is instructive:

- **The safety case**: a 2.8T open-weight model with frontier exploit skills is a proliferation event. Moonshot is the first open-weight lab to treat capability restraint as a *launch feature*, not an afterthought.
- **The skeptic case**: the nerfed weights are still the weights. Anyone with the compute to serve a 2.8T model can fine-tune the capability back in — the exploit knowledge is latent, not absent. The gesture is PR, the skeptics say, not protection.
- **The strategic case**: this is also a compliance play. Chinese regulators have been tightening AI security review requirements all year, and Washington is actively legislating against Chinese model "distillation." A documented, deliberate capability reduction gives Moonshot a paper trail in both capitals.

All three readings can be true simultaneously. What is undeniable is the precedent: the first time a frontier-class open model shipped with a *publicly documented downgrade* of a dangerous capability, priced into the launch narrative itself. Whatever November 4 brings, that template — release strong, disclose the restraint, stage the restoration — will be studied by every open lab that follows.

## The Price Cut Nobody Expected

The most quietly radical move in this launch is the pricing. K3 arrived in July at $3 per million input tokens and $15 per million output — already under half the price of the Western frontier. K3.1 Pro **cut those numbers by a third** while improving the model:

| Billing Item | kimi-k3.1-pro | kimi-k3.1-pro-highspeed | Kimi K3 (prior) |
|---|---|---|---|
| Standard input (per 1M) | $2.00 | $4.00 | $3.00 |
| Standard output (per 1M) | $10.00 | $20.00 | $15.00 |
| Cached input read (per 1M) | $0.20 (90% off) | $0.20 (90% off) | $0.60 |
| 5-min cache write (per 1M) | $2.00 | $4.00 | $3.00 |
| 1-hour cache write (per 1M) | $4.00 | $8.00 | Unavailable |
| Speed | Baseline | 2–3x faster | — |
| Quota consumption | Baseline | ≈2x standard | — |

*Source: Kimi API Platform pricing page, K3 series models, read October 24, 2026.*

Consider the strategic picture this creates. Across the same seven-day window: DeepSeek reportedly closed a **¥100 billion (~$15 billion) funding round** — the largest single financing in Chinese AI history — with CATL and Tencent among the lead investors. MiniMax's Hong Kong-listed shares fell **below their IPO price** on October 22, down over 88% from their March peak. Alibaba raised DeepSeek V4 Flash output prices by 230%. And Moonshot cut flagship prices by a third while shipping its best model yet.

Three companies, three opposite capital strategies, one market. DeepSeek is absorbing capital to build compute at Ulanqab-scale. MiniMax is absorbing the verdict of public markets that revenue quality matters more than overseas download counts. Moonshot is absorbing margin — betting that cheaper tokens at frontier-adjacent quality will compound into developer lock-in faster than the margin loss hurts.

The Highspeed variant completes the ladder: the same model at two to three times the speed, at roughly double the quota burn, for double the per-token price. It is the same trick every Chinese lab has learned this year — **sell latency as a product line** — executed at flagship quality for the first time.

## The Chessboard: One Week in China's Model Wars

| | Kimi K3.1 Pro | DeepSeek V4.1 Flash | Claude Opus 5.5 | GPT-6 Astra |
|---|---|---|---|---|
| Class | 3T-class open-weight | Flash-tier open-weight | Closed frontier | Closed frontier |
| TB 4.0 | 65.7% | — | 66.4% | 58.2% |
| AA Index | 55 (4th) | 45 | Higher | Higher |
| 1M context | Yes | Yes | No | Varies |
| Price (1M in/out) | $2/$10 | ~$0.15-tier | Premium | Premium |
| Weights | Open by Nov 4 | Open (MIT) | Closed | Closed |
| Cyber posture | Deliberately reduced | Full capability | Policy-gated | Policy-gated |

*Sources: vendor publications, Artificial Analysis, Kimi API pricing page, DeepSeek pricing disclosures. Flash-tier pricing varies by provider; V4.1 Flash ships under permissive licensing at commodity prices.*

The asymmetry is the story. On the left side of this table sits a model anyone will soon be able to download, self-host, and fine-tune, priced like a mid-tier SaaS feature. On the right sit two models that remain better by margins small enough to embarrass — and large enough, for now, to defend premium pricing.

Whether those margins survive contact with November 4 is the question this entire industry is now asking. A 2.8T-parameter model requires a data center to serve — community estimates have put the floor near 64 high-end GPUs and ~45kW for K3 — so the "anyone can run it" framing has real infrastructure limits. But national labs, sovereign cloud programs, and large enterprises can. That is precisely the buyer set Moonshot needs for its next act.

## Ecosystem and the November 4 Countdown

K3.1 Pro ships through every channel Moonshot controls, and the channel strategy is itself a signal:

| Channel | Access |
|---|---|
| Kimi app / kimi.ai | General availability (iOS, Android, HarmonyOS) |
| Kimi Work | Desktop v3.1.0+ (Windows, Apple silicon Mac) |
| Kimi Code | `/model` command; six model IDs on the selector |
| API | `kimi-k3.1-pro`, `kimi-k3.1-pro-highspeed` — OpenAI + Anthropic formats, Zero Data Retention available |
| Enterprise | Kimi Business; K3.1 Pro disabled by default at launch, admin-enabled |

*Source: Moonshot AI K3.1 Pro availability announcement.*

The enterprise detail — off by default — is easy to miss and worth dwelling on. Moonshot learned from K3's July overload: demand for frontier models in China now exceeds supply the moment supply exists. Enterprise administrators get an opt-in; consumers get whatever capacity remains. It is a rationing mechanism dressed as a settings page.

![Robotics and AI hardware — the November 4 open-weights release will hand the largest open model ever published to every national lab, sovereign cloud, and enterprise with the infrastructure to serve it](https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800)

The 1M-token context, now standard across both the Pro and Highspeed variants and already democratized down to the free tier in the K2.8 Preview line, continues to be Moonshot's structural differentiator against every Western closed model. A million tokens is an entire product codebase, a full year of a company's financial filings, a novel manuscript — fed in one request, with KDA linear attention keeping decoding costs from exploding at the far end of the window.

And then there is November 4. Eleven days after launch — the same deliberate gap K3 used in July — the full weights land publicly. Moonshot gets an eleven-day exclusive on hosted K3.1 Pro revenue, the inference ecosystem (vLLM, Ascend, Hygon, and the major cloud providers all pre-adapted for K3) gets its day-zero checklist ready, and the open community gets the largest model anyone has ever been allowed to download.

## Risks, K4, and the Road Ahead

The risks are as legible as the achievements.

**Compute remains the binding constraint.** Moonshot's own admission in July — pausing consumer subscriptions after 48 hours — has not gone away. Every K3.1 Pro token served to a new enterprise user competes with the training runs for the company's rumored next act: **K4, reportedly targeting 5–6 trillion parameters** under Nomura-flagged guidance. High-end training silicon remains the scarcest resource in China's AI economy, and Moonshot's HK IPO track (reportedly targeting a 2027 listing) exists precisely to fund the compute war chest this model's successors will need.

**The third-party verdict is still forming.** The 55 on Artificial Analysis is real, but Pareto-line positioning at launch has a habit of degrading as independent labs probe edge cases. The 8.3% hallucination figure is self-reported. Terminal-Bench 4.0 tool-use comparisons lean on rival system cards with different harnesses. The gap to Claude Opus 5.5 — 0.7 points on one benchmark — will widen on some tasks and close on others over the coming weeks.

**And the cyber restraint cuts both ways.** If the staged restoration of exploit capability proceeds, Moonshot will face the same export-control and security-review spotlight that has followed DeepSeek all year — including the US federal civilian ban reported just days ago. If it does not proceed, the open community will accuse the company of shipping a lobotomized artifact under an open license. There is no configuration of this decision that makes everyone happy. There rarely is, at the frontier.

What is left, then, is a company that in ninety-nine days went from shocking the market with the world's first 3T open model to quietly shipping a better one for less money, with a documented safety trade-off, an eleven-day monetization window, and a download date circled in red. The 0.7-point gap will close. The pricing floor it just reset will not be forgotten.

## Social Voices

> "65.7 对 66.4，0.7 分。十五个月前这个差距是几年。技术史上压缩差距最快的行业，没有之一。" — Zhihu user, 2.1k upvotes
>
> "65.7 vs 66.4 — 0.7 points. Fifteen months ago that gap was measured in years. No industry in tech history has compressed a gap this fast."

> "Everyone is quoting Terminal-Bench and nobody is quoting the hallucination drop. 23.4% to 8.3% is the actual story. Benchmarks get press; hallucination rates get enterprise contracts." — @vllm_dev on X
>
> "Everyone is quoting Terminal-Bench and nobody is quoting the hallucination drop. 23.4% to 8.3% is the actual story. Benchmarks get press; hallucination rates get enterprise contracts."

> "主动削能力再逐步放开的发布策略很聪明。既给了监管层交代，又给社区留了念想。问题是：权重一旦开源，'逐步放开'还由得了你吗？" — Weibo tech commentator
>
> "Deliberately weakening capability then restoring it gradually is clever — it satisfies regulators and keeps the community hooked. But once weights are open, is 'gradual restoration' still your call to make?"

> "被 Kibitz 在 Code Arena 上虐了三周，今天才知道对手是谁。这感觉像发现陪练其实是世界冠军。" — Xiaohongshu developer post
>
> "I got beaten by 'Kibitz' on Code Arena for three weeks before learning who my opponent was. It feels like discovering your sparring partner is the world champion."

> "价格反向操作看傻了。别人涨价 230%，它降价 33%。Kimi 打的不是价格战，是开发者心智战。" — Douban AI discussion group
>
> "The pricing move is baffling. While a rival raised prices 230%, Moonshot cut 33%. Kimi isn't fighting a price war — it's fighting a war for developer mindshare."

> "Published the row where they lose (81 vs 85.7 exploit). Whatever else you think of Moonshot, their eval reporting has more integrity than most labs 10x their size." — GitHub discussion, moonshotai/Kimi-K3.1 thread
>
> "Published the row where they lose (81 vs 85.7 exploit). Whatever else you think of Moonshot, their eval reporting has more integrity than most labs 10x their size."

---

*Related reading: [DeepSeek Open-Sources DeepInfer and the US Ban Backfires](/blog/deepseek-deepinfer-open-source-us-ban-backfire-2026/) · [The End of the Cheap Model Era: China's AI Chip Shortage](/blog/china-ai-chip-shortage-end-cheap-model-era-2026/) · [DeepSeek's Federal Ban: The First AI Model Exile](/blog/deepseek-federal-ban-fascsa-first-ai-model-exile-2026/) · [Moonshot's $50B Sovereign AI Capital Blueprint](/blog/moonshot-ai-50-billion-sovereign-ai-capital-blueprint-2026/)*
