---
title: "The Ban That Backfired: DeepSeek Open-Sources DeepInfer as Washington Orders Its Removal"
date: "2026-10-21"
excerpt: "On October 19, the US Department of Homeland Security ordered DeepSeek stripped from every federal civilian IT system. Twenty-four hours later, DeepSeek open-sourced DeepInfer — the production inference engine behind its entire serving stack — and disclosed the numbers: 155 trillion tokens per day per cluster, 400ms to first token, and $38 of revenue per GPU-hour. The ban was designed to contain DeepSeek. Instead, it may have inaugurated the era of uncontainable AI."
author: "AI in China Editorial"
readTime: "16 min read"
tags: ["DeepSeek", "DeepInfer", "Open Source AI", "US China AI", "Inference Engine", "DeepSeek V4.1 Flash", "AI Infrastructure", "FASCSA", "AI Governance", "China AI 2026"]
image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop"
keywords: ["DeepSeek DeepInfer", "DeepSeek open source inference engine", "DHS DeepSeek ban 2026", "FASCSA exclusion order", "DeepSeek V4.1 Flash inference", "China AI open source strategy", "AI inference economics", "Huawei Ascend 950 DeepSeek", "DeepSeek 155 trillion tokens", "US China AI decoupling"]
---

![Macro photography of a circuit board — the inference layer Washington tried to ban, and DeepSeek open-sourced instead](https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop)

On Monday, October 19, 2026, the US Department of Homeland Security made DeepSeek the first Chinese AI company ever formally excluded from American federal IT systems under a 2018 supply-chain security law. The order, signed by Secretary Markwayne Mullin in late June and kept quiet for nearly four months, directs every federal civilian agency — State, Treasury, Justice, and the rest — to rip DeepSeek products out of their networks and never buy them again. It even covers third-party software built on DeepSeek's models.

On Tuesday, October 20, DeepSeek responded in the only way a company named after the philosophy of "seeking depth" could: it published the blueprints for the machine room itself. **DeepInfer**, the production inference framework that schedules the compute clusters serving every DeepSeek API call, went fully open source under an Apache 2.0 license — alongside a MIT-licensed token codec called `deepseek-recipe` and a technical report disclosing numbers no Western AI lab has ever made public: a single cluster processing **155 trillion tokens per day**, a first-token latency of **400 milliseconds** on inputs averaging **77,000 tokens**, and unit revenue of **$38 per GPU per hour**, measured at valley electricity prices.

Washington's theory of the case is that DeepSeek can be quarantined. The engine DeepSeek just handed to the world — compatible with both NVIDIA's latest silicon and Huawei's Ascend 950 — makes that theory read like a dispatch from another era.

## The Conventional Wisdom: Containment as Strategy

The logic behind the DHS order is familiar to anyone who has followed US technology policy since 2019. It runs like this: Chinese AI companies depend on access to American markets, American cloud infrastructure, and American enterprise customers. Cut off the government procurement channel, extend the exclusion to contractors and third-party vendors, and you raise the cost of doing business with Beijing's AI champions. Over time, the thinking goes, the ecosystem starves.

The order itself is legally serious. It is the first use of the Federal Acquisition Supply Chain Security Act (FASCSA) against a named AI lab — the same statute previously deployed against Kaspersky antivirus and Huawei telecom gear. Agencies that believe they cannot function without DeepSeek-linked tools must apply for an exception sixty days in advance, with "compelling justification." The exclusion reaches beyond DeepSeek's own products to anything "developed using DeepSeek implementations," a clause that turns software provenance into a federal compliance question overnight.

DHS's stated rationale leans on the standard vocabulary: "multiple threat vectors," the claim that account registration "collects personally identifiable information," and the warning that employee use "could produce actionable intelligence on U.S. persons." China's Commerce Ministry answered within hours with a prepared statement of "strong dissatisfaction and firm opposition."

None of this is surprising. What is surprising is the timing of what happened next.

## The Paper Trail: A Ban Four Months in the Making

The reconstruction of events matters, because it shows how completely the two capitals failed to read each other. The US spent the summer quietly building a legal cage. DeepSeek spent the same summer building the most cost-efficient inference stack on earth — and then published it the day after the cage was unveiled.

| Date | Actor | Event |
|---|---|---|
| June 26, 2026 | DHS | Secretary Mullin signs the FASCSA exclusion directive; it stays non-public for 115 days |
| September 10, 2026 | DeepSeek | Ships V4.1 Flash, the model that DeepInfer is built to serve |
| October 16, 2026 | DeepSeek | Creates the `deepseek-ai/DeepInfer` repository on GitHub |
| October 17, 2026 | DeepSeek | Releases V4.1 Flash 1017 checkpoint — MIT-licensed weights, benchmark scores ahead of OpenAI's GPT-6 Astra on coding tasks |
| October 19, 2026 | DHS | Files FASCSA Exclusion and Removal Order #2026-01 (docket DHS-2026-0628); ban becomes public |
| October 20, 2026 | DeepSeek | Open-sources DeepInfer (Apache 2.0) and deepseek-recipe (MIT); publishes production metrics; China's Commerce Ministry condemns the US order |
| October 20, 2026 | US media | Federal Register publication of the exclusion order |

*Sources: Federal Register public inspection file 2026-21447; DHS docket DHS-2026-0628; DeepSeek official announcements and GitHub repository records.*

Read the timeline vertically and the story inverts itself. The order was not a reaction to DeepSeek's newest release — it was signed four months before the V4.1 Flash line even launched. DeepSeek, for its part, appears to have finalized its open-source decision on a schedule of its own: the repository was created four days before the ban became public, and the announcement language — framing the inference framework as "a long-undiscussed middle layer" between models and users — reads like a prepared statement, not a riposte.

## The Numbers DeepSeek Just Published

The technical report accompanying DeepInfer is the first time any frontier AI lab has opened its production serving ledger. Training economics get most of the attention in this industry; DeepSeek is arguing, with data, that the real moat — and the real cost center — is inference.

| Metric | Disclosed Value | Industry Context |
|---|---|---|
| Single-cluster daily throughput | 155 trillion tokens | Orders of magnitude beyond published figures for comparable deployments |
| Average request input length | ~77,000 tokens | Indicates agentic, document-heavy workloads, not chat |
| Time to first token (TTFT) | ~400 ms average | On 77K-token inputs; implies aggressive prefix caching and prefill optimization |
| Decode speed | ~230 tokens/s (up to ~300 in code) | Competitive with interactive typing tolerance |
| Input cache hit rate | 96% average | Nearly all request volume avoids re-computation entirely |
| Revenue per GPU-hour | $38 (valley electricity pricing) | A direct disclosure of unit economics no US lab has matched |

*Source: DeepInfer technical report and DeepSeek's published deployment Q&A, October 20, 2026. Metrics describe the production V4.1 Flash serving configuration.*

That $38 figure deserves a moment of its own. DeepSeek is not merely claiming efficiency — it is publishing what it earns per accelerator-hour at off-peak electricity rates, an act of economic transparency that inverts the industry norm of treating serving costs as trade secrets. Analysts quickly noted the implication: at this efficiency, every dollar of inference subsidy from a competitor is a dollar burned, because DeepSeek's cost floor appears to sit far below anyone else's price list.

Consider what the API price implies about the cost structure underneath it:

| Pricing Tier | DeepSeek V4.1 Flash (per 1M tokens) |
|---|---|
| Peak input | $0.30 |
| Off-peak input | $0.15 |
| Cached input (peak) | $0.006 |
| Cached input (off-peak) | $0.003 |
| Output (peak) | $1.20 |
| Output (off-peak) | $0.60 |

*Source: DeepSeek API pricing, October 2026. Off-peak window 16:30–00:30 UTC.*

A cached-input price of six-tenths of a cent per million tokens is only possible when 96% of inputs never touch the model's prefill stage. DeepInfer is the machinery that makes that statistic real.

## Inside DeepInfer: Anatomy of a Production Inference Engine

DeepInfer is not a research artifact. It is the offline-inference release of the system that actually runs DeepSeek's paid API, hardened for two hardware platforms that are not supposed to cooperate: NVIDIA's SM100 Blackwell generation and Huawei's Ascend 950 NPU. The architecture reads as a catalog of everything the industry has learned about serving sparse mixture-of-experts models at industrial scale — assembled, tuned, and now given away.

The core design is a strict separation of labor between **prefill** (digesting the prompt) and **decode** (generating tokens). Because the two phases have radically different compute profiles, DeepInfer runs them on differently shaped hardware: conventional 8-GPU nodes handle prefill, while 64-to-128-card supernodes — the same class of machine Huawei has been deploying for its domestic AI clusters — handle decode. An autoscaling controller continuously rebalances the ratio between the two pools as traffic shifts.

| Component | Function | License |
|---|---|---|
| DeepInfer engine | Scheduling, execution, distributed inference, speculative decoding, structured output | Apache 2.0 |
| deepseek-recipe | Production token codec; aligns third-party deployments with official API behavior | MIT |
| FlashMLA | Optimized attention kernels for DeepSeek's multi-head latent attention | Open source (prior release) |
| DeepGEMM | Matrix-multiplication kernels for MoE inference | Open source (prior release) |
| DeepEP | Expert-parallel communication layer across accelerators | Open source (prior release) |
| DSpark | Adaptive speculative decoding; budgets verification work by confidence per draft position | Included in DeepInfer |
| EPLB | Expert placement, replication, and load balancing across devices | Included in DeepInfer |
| TileLang | Domain-specific compiler for custom operators | Open source (prior release) |

*Source: DeepSeek GitHub organization and accompanying architecture documentation.*

The most technically interesting piece is **DSpark**, DeepSeek's take on speculative decoding. Rather than verifying a fixed number of draft tokens, the engine prices verification work: it estimates runtime costs from recent observations, allocates verification budget per request based on confidence at each draft position, and protects the batch from low-yield drafts during load spikes. Low-traffic moments buy interactivity; high-traffic moments buy throughput. This is the kind of operational intelligence that normally lives behind an API wall, invisible to everyone except the operator.

![Abstract render of layered computation — prefill and decode split across differently shaped clusters, coordinated by an autoscaling controller](https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&h=400&fit=crop)

There is a deliberate hardware story embedded here. Supporting Ascend 950 alongside NVIDIA Blackwell is not a portability nicety; it is a declaration that DeepSeek's software layer is now hardware-agnostic by design — the exact property a company needs when one of its two silicon suppliers is subject to export controls and the other is racing to replace it. DeepSeek open-sourced its Huawei Ascend toolchain less than three weeks ago. DeepInfer completes the circuit: model, kernels, compiler, and now the serving runtime, all available, all dual-platform.

## What the Ban Covers — and What It Cannot

The DHS order is sweeping within its domain and nearly irrelevant outside it. Understanding that distinction is the key to the whole episode.

| Covered by the Order | Not Covered |
|---|---|
| Federal civilian executive agencies (State, Treasury, Justice, etc.) | Department of Defense agencies |
| Direct procurement of DeepSeek products and services | Private companies and individuals |
| Third-party products built on DeepSeek implementations | State and local governments |
| Future acquisitions and existing installations | Foreign governments and their markets |
| Agency use by employees and contractors | Self-hosted open-weight deployments |

*Source: FASCSA Exclusion and Removal Order #2026-01, as reported by WSJ, CyberScoop, and The Register, October 19–20, 2026.*

The third row is where the containment theory strains. Before DeepInfer, "built on DeepSeek implementations" meant vendors who wrapped the API or fine-tuned the weights. After DeepInfer, it potentially means any organization on earth running an Apache-2.0 codebase on its own hardware — including, awkwardly, American defense contractors evaluating the stack on air-gapped NVIDIA clusters for competitive intelligence purposes. The open-source genie does not just escape the bottle; it publishes its own source code.

The historical precedent is instructive, because FASCSA exclusions have a consistent record: they segment government procurement but never contain the underlying technology.

| Year | Target | Mechanism | Outcome |
|---|---|---|---|
| 2017 | Kaspersky Lab | Federal procurement ban | US enterprise market share collapsed; global business continued |
| 2019–2020 | Huawei / ZTE | Entity List + FASCSA-style exclusions | Lost US market; became the dominant non-Western telecom supplier worldwide |
| 2026 | DeepSeek | FASCSA Exclusion Order #2026-01 | Federal market — never DeepSeek's — closed; global API and open-source footprint intact |

*Sources: US federal records; industry analyses of each episode.*

Kaspersky lost the customers it had. Huawei lost a market it was never dependent on and responded by building the world's most complete alternative telecom stack. The pattern suggests a rule: exclusion orders are effective at protecting federal networks and nearly useless at protecting the industry they are meant to shield.

## The Real Story: Infrastructure as Deterrence

Strip away the press-release language and DeepInfer's release is a strategic act. Frontier labs compete on model quality; DeepSeek is competing on the **cost of intelligence itself**. Every table above converges on the same conclusion: DeepSeek has built a serving machine so efficient that it can publish its own economics without fear, because no competitor can match the number without also replicating years of kernel-level engineering — which DeepSeek has now conveniently open-sourced.

The reasoning has three layers. First, **adoption**: by aligning deepseek-recipe with the official API's exact behavior, DeepSeek ensures that self-hosters, clouds, and framework builders converge on its tokenization, its prompt rendering, and its defaults. That is platform gravity, built in a week. Second, **defense**: an Apache-2.0 inference engine running on Ascend silicon inside Chinese data centers is un-sanctionable in any practical sense; you cannot embargo mathematics. Third, **offense**: every enterprise that deploys DeepInfer — on either platform — is an enterprise that has internalized DeepSeek's cost structure as its baseline, which makes rival APIs priced at twenty times the number look like a legacy tax.

![Code on a developer's screen — DeepInfer requires Blackwell-class datacenter GPUs; the community's next move is porting its tricks downstream](https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=400&fit=crop)

The timing relative to the federal ban is almost certainly not coincidence, but it is also not mere theater. DeepSeek's announcement frames open-sourcing as continuity — the next step after models, TileLang, and kernel libraries — which is true. What the frame omits is that the release converts an American security order into a global marketing event. Within hours of the DHS notice, the inference engine it was meant to contain was trending on the largest code-hosting platform on earth, and the Commerce Ministry's condemnation of the ban was running in state media beside glowing coverage of the open-source drop. Two messages, one day, perfectly synchronized: Washington closes a door; Beijing opens a window and invites the world through.

## Implications: The Two-Stack World Accelerates

The deepest consequence of this week is not about DeepSeek at all. It is about the structure of the global AI market. DeepInfer is designed to run on both NVIDIA and Ascend hardware. The US government has just made it administratively radioactive for American agencies to touch anything DeepSeek-built, while the same code is now freely available to every other government on the planet deciding between an American stack with export conditions and a Chinese stack with no strings except geopolitical alignment.

Expect three developments to follow. First, a compliance scramble: federal contractors and SaaS vendors will spend the next two quarters auditing their products for "DeepSeek implementations," a task made surreal by the fact that the implementations are now public goods. Second, an inference-efficiency race: with DeepSeek's ledger published, every lab's serving economics become comparable, and the pressure to match 155-trillion-token clusters will squeeze margins across the industry. Third, an Ascend validation cycle: Huawei's silicon now has a flagship, production-proven serving framework running on it — the software legitimacy its chip division has needed.

The contrarian thesis, then, is the one the evidence keeps supporting: **the DHS order did not contain DeepSeek; it canonized it.** Kaspersky's exclusion made it a cautionary tale. Huawei's made it a global infrastructure empire. DeepSeek's arrived on day one of the era of open inference infrastructure, and it may already be too late for the containment strategy to be anything more than a domestic procurement rule with excellent branding.

## Social Voices

**@quantized_coder on Zhihu:**
> "美国周一禁用DeepSeek，DeepSeek周二就把饭碗开源了。这不是回应，这是降维打击——你禁的是一个产品，人家给的是一套基础设施。"
>
> "The US bans DeepSeek on Monday; DeepSeek open-sources its rice bowl on Tuesday. This isn't a response — it's dimension-reduction warfare. You banned a product; they gave away an entire infrastructure."

**MarkH on Hacker News:**
> "The $38/GPU-hour disclosure is the actual bombshell here. No Western lab has ever published unit revenue on inference. DeepSeek just made everyone else's cost structure look like a guess."
>
> (English original)

**@AI芯片观察员 on Weibo:**
> "注意一个细节：DeepInfer同时支持英伟达和昇腾。国产推理框架第一次有了旗舰级生产验证，这比任何跑分都值钱。"
>
> "Notice the detail: DeepInfer supports both NVIDIA and Ascend. China's domestic inference stack gets flagship production validation for the first time — that's worth more than any benchmark score."

**sarah_dev on Twitter/X:**
> "Everyone covering the DHS DeepSeek ban as 'US cracks down.' I'm covering it as 'DeepSeek publishes the recipe for the cheapest intelligence on earth the next day.' One of these stories is bigger."
>
> (English original)

**@沉思的引擎 on Douban:**
> "96%的缓存命中率，平均输入77K token——这说明DeepSeek的用户根本不是聊天，是在喂整个代码库和文档库。这是给Agent时代准备的引擎。"
>
> "96% cache hit rate, 77K average input tokens — DeepSeek's users aren't chatting, they're feeding entire codebases and document archives. This is an engine built for the agent era."

**@vllm_contributor on GitHub:**
> "Read the DSpark scheduler code twice. The confidence-priced verification budget is genuinely novel — vLLM and SGLang will be studying this for months. Competition in open inference just got a lot more interesting."
>
> (English original)

**@跨境合规笔记 on Xiaohongshu:**
> "做政府单的美国SaaS公司今晚要通宵了：'使用DeepSeek实现开发的第三方产品'怎么界定？开源组件算不算？60天豁免申请怎么写？订单先停一停。"
>
> "US SaaS firms on government contracts will be up all night: how do you define 'third-party products developed using DeepSeek implementations'? Do open-source components count? How do you file the 60-day exception? Pause the orders for now."

---

## Related Reading

- [China's Flash AI War: DeepSeek and MiniMax Rewrite the Economics of Intelligence](/blog/china-ai-flash-war-deepseek-minimax-2026/)
- [DeepSeek Open-Sources Its Huawei Ascend AI Toolchain](/blog/deepseek-open-sources-huawei-ascend-ai-toolchain-2026/)
- [Two Stacks, One Hotline: The Parallel AI Worlds of the US and China](/blog/two-stacks-one-hotline-us-china-ai-parallel-2026/)
- [DeepSeek's Silence Before V4 Pro: Strategy or Struggle?](/blog/deepseek-silence-v4-pro-china-ai-strategy-2026/)
