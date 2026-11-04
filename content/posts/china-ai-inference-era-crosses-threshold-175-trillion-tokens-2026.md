---
title: "China's AI Just Crossed the Inference Threshold: 175 Trillion Tokens a Day"
date: "2026-11-04"
excerpt: "On October 31, a little-noticed report from a Beijing research institute recorded a milestone most of the world missed: China's AI inference data volume surpassed training volume for the first time. With 175 trillion tokens now flowing through Chinese models every day — a thousandfold increase in thirty months — the industry has quietly flipped from building intelligence to consuming it."
tags: ["China AI", "AI Inference", "Token Economy", "Qwen", "Alibaba", "Wuzhen Summit", "AI Compute", "Intelligent Agents", "Open Source AI", "Industrial AI", "CCID", "World Internet Conference"]
image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"
heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200"
readingTime: 16
---

Somewhere in a data center outside Beijing at 3 AM, a steel mill's quality-control agent flagged a micro-crack in a rolled coil no human inspector would have caught. In Shenzhen, a cross-border e-commerce seller's listing generator rewrote forty product descriptions in Portuguese while she slept. In Kampala, a nonprofit's language model — fine-tuned from an Alibaba open-source release — answered a farmer's question in Luganda about cassava blight.

None of these systems is being trained. All of them are inferring. And somewhere in the aggregate of millions of such moments, a statistical line was crossed that nobody designed and few noticed.

On October 31, the China Center for Information Industry Development (CCID) released its *Top 10 Trends of New-Domain New-Quality Innovation Development*, a report that normally circulates among policy researchers and slips past the global tech press. This year's edition contained a single data point that deserves far more attention than it received: **China's AI inference data volume has exceeded its training data volume for the first time.**

The milestone sounds technical. It is anything but. For three years, the world's AI conversation has been dominated by training — by parameter counts, cluster sizes, and the race to build ever-larger foundation models. Inference was the afterthought, the meter running after the real work was done. That era just ended in China. The meter is now the main event.

## The Scale: A Thousandfold Expansion in Thirty Months

The raw numbers behind the CCID finding are difficult to internalize. As of June 2026, China's daily token call volume exceeded **175 trillion** — up more than **1,000 times** from early 2024. To put that in perspective: in January 2024, China's entire AI ecosystem processed roughly what its industrial AI fleet alone now burns through every ninety minutes.

| Milestone | Date | Daily Token Volume (approx.) | Notes |
|---|---|---|---|
| Baseline | Early 2024 | ~150 billion | Pre-DeepSeek-moment; mostly chatbots and search |
| First acceleration | March 2026 | 140 trillion | 1,000x in 26 months; 6 of global top-10 models by call volume are Chinese |
| Inference crossover | Mid-2026 | 175+ trillion | Inference data volume surpasses training volume (CCID) |
| Current trajectory | Q4 2026 | 200+ trillion (projected) | Agent workloads compounding consumption |

Source: CCID, MIIT disclosures, public statements, October–November 2026.

The human side of the ledger is equally striking. By December 2025, monthly active users of AI applications in China had passed **1.4 billion** — more than the populations of North America and Europe combined. Mobile AI apps accounted for 722 million of those users, with phone-native AI assistants adding another 559 million and desktop applications 205 million. Crucially, engagement has held: users of AI-native apps spend an average of 143 minutes per month inside them, well above traditional utility apps.

| China AI Application Adoption (as of December 2025) | Figure | Share / Context |
|---|---|---|
| Total AI app monthly active users | 1.4 billion | Roughly equal to US + EU + Japan populations |
| Mobile AI app users | 722 million | 56.6% of total AI app usage |
| Phone-native AI assistant users | 559 million | On-device inference driving volume |
| PC AI application users | 205 million | Office and coding workloads lead |
| Avg. monthly time in AI-native apps | 143.2 minutes | vs. ~90 min for traditional tool apps |

Source: QuestMobile 2025 year-end report, as cited by industry researchers.

"What you're seeing is the difference between a laboratory industry and a utility industry," said Liu Wenqiang, CCID's Party secretary and vice president, at the report's release. "AI is no longer just a tool being changed. It is becoming the thing that does the changing."

Two days after the report landed, the National Development and Reform Commission made it official policy language. At its November 3 press briefing on China's 15th Five-Year Plan, the NDRC declared the country's AI development speed and application scale "globally leading," and noted that AI is moving "from laboratories into factories, fields, and offices." The commission also disclosed that 38 countries have joined as founding members of a World AI Cooperation Organization that Beijing is pushing to formalize.

## On the Ground: How the Tokens Get Spent

Statistics at this scale can feel abstract, so it helps to look at where the tokens actually go. The short answer: everywhere, but not evenly.

The clearest window into industrial deployment came, surprisingly, from a state-owned telecom. At the Wuzhen "Light of the Internet" Expo that opened November 2, China Telecom showed off results from its Xingchen ("Star") large model program under the banner *guoxin xun guomo* — "national chips training national models." The company claims it is the first in China to push real-world training utilization above 98% on a genuine 10,000-card cluster, and its showcase product, the TeleAgent super-agent, decomposes tasks from natural-language instructions, draws on a library of more than 100,000 office skills, and carries a four-layer security stack that passed China's first national security evaluation for such products. An education variant covers the full loop of teaching, learning, assessment, administration, and training.

| Deployment Signal | Sector | What It Demonstrates |
|---|---|---|
| TeleAgent super-agent (100k+ skills, national security clearance) | Enterprise office / government | Agents entering regulated, security-sensitive workflows |
| 98% utilization on 10,000-card cluster | Compute operations | Domestic clusters hitting operational maturity |
| Humanoid "Aitu" sewing garments on a factory floor | Manufacturing | Embodied inference in flexible production |
| Robotic prescription filling at smart pharmacies | Healthcare | High-frequency, latency-sensitive inference at the edge |
| Nonprofit Luganda-language model (68 African languages) | Global South | Open-weight models as development infrastructure |
| 6G space-air-ground network test results | Telecom infrastructure | Connectivity being rebuilt around AI workloads |

Wuzhen itself is the phenomenon in miniature. On the eve of the first World Internet Summit in 2014, the canal town could identify exactly 12 internet-related enterprises. By 2024 that number passed 1,200 — a hundredfold increase — and the town's GDP grew from ¥2.84 billion to ¥10.89 billion, effectively "rebuilding three Wuzhens," as local officials like to say.

> **@知乎用户 · Zhihu**  
> "推理量超过训练量，意味着这个行业终于从'造模型'变成了'用模型'。三年前所有发布会都在比参数，现在没人关心你参数量多少，只关心你一次任务烧多少token、花多少钱。"  
> *"Inference volume overtaking training volume means this industry has finally shifted from 'building models' to 'using models.' Three years ago every launch event compared parameter counts. Now nobody cares how many parameters you have — only how many tokens one task burns and what it costs."*

## The Engine Room: Open Source as Distribution

If inference is the phenomenon, open source is the flywheel underneath it — and the theme Alibaba chairman Joe Tsai hammered in his November 3 keynote at the Wuzhen Summit's opening ceremony.

Tsai's numbers, delivered to an audience of government officials and executives from 54 countries and regions, were a deliberate flex: Alibaba's Qwen family has open-sourced more than 470 models with over **4 billion cumulative downloads** and more than **330,000 derivative models** — the largest open-source model family in the world. The ModelScope community Alibaba operates now counts 33 million users across 239 countries and regions, offering 280,000 open models, 40,000 datasets, and 12,000 MCP (Model Context Protocol) tools.

"Only open source can make AI universal, and only universality can create a sustainable, inclusive era of intelligence," Tsai said. "China's open-source models lead the world in downloads and derivatives."

The strategic logic is easy to miss if you only read it as altruism. Every one of those 330,000 derivative models is a deployment decision made in Qwen's image — a model that runs on Qwen's tokenizer, Qwen's architecture, Qwen's inference economics. Open source in this framing is not the opposite of a business model; it is a distribution strategy for the inference era, where the winners are whoever's weights get loaded into the most machines. Alibaba's Qoder agent platform, the only Chinese general-purpose agent product to win a Leading Technology Award at Wuzhen this year, sits one layer up the same stack.

The reach is genuinely global. Tsai cited a Ugandan nonprofit that fine-tuned Qwen into local-language models covering 68 African languages, letting farmers access AI help in languages no frontier lab will ever prioritize. "AI should not belong to a few technology powers," he said — a line that doubles as positioning against American closed-model dominance.

## Behind the Scenes: Infrastructure Built for a Different Game

Training and inference are different physics. Training rewards raw peak throughput on monolithic clusters; inference rewards cost per token at sustained utilization across thousands of endpoints close to users. China's infrastructure buildout of the past eighteen months increasingly reflects the second game.

| China AI Compute Buildout | Figure | Date / Horizon |
|---|---|---|
| 10,000-card clusters built | 42 | By early 2026 (MIIT) |
| Intelligent compute capacity | 1,590+ EFLOPS | Early 2026 baseline |
| Intelligent compute capacity | 2,576.5 EFLOPS (+87.9% YoY) | 2026 estimate (IDC/Inspur) |
| Intelligent compute capacity | 10,524.3 EFLOPS | 2030 projection |
| National Supercomputing Internet pool | 100,000+ domestic cards, 48,000 PFLOPS peak | Commercial, late 2026 |
| AI compute market size | $51.5B (+37% YoY) | 2026 |
| AI compute market size | $150.1B (31.8% CAGR) | 2030 |

Sources: MIIT, IDC/Inspur *2026 China AI Computing Power Assessment Report*, National Supercomputing Internet disclosures.

The National Supercomputing Internet's new pool is the most telling project: over 100,000 domestically produced accelerator cards, unified scheduling across regions, and a layered architecture that mixes supercomputing and intelligent computing. It exists because inference demand does not respect provincial borders, and because the NDRC's national integrated compute network — eight eastern and western hub nodes holding over 80% of the country's intelligent compute — needs a traffic cop.

Then there is the multiplier that keeps infrastructure planners awake at night: agents. IDC's research found that as agent tasks evolved from simple retrieval and drafting into multi-round reasoning, tool calling, and cross-system coordination, single-task token consumption grew from tens of tokens to tens of thousands — in some complex workflows, hundreds of thousands.

| Workload Type | Tokens per Task (typical) | Growth Driver |
|---|---|---|
| Simple Q&A / search | 50–500 | Chatbot baseline, largely flat |
| Document drafting & summarization | 2,000–20,000 | Long-context windows, multi-pass refinement |
| Coding agent task | 20,000–100,000+ | Tool calls, test loops, file edits |
| Multi-agent business workflow | 100,000–500,000+ | Orchestration overhead, retries, verification |

The arithmetic is brutal in one direction: every agent that replaces a human workflow multiplies the token demand of that workflow by orders of magnitude. IDC projects agents will drive corporate AI procurement budgets up roughly 20% — on top of an already steep curve.

## Global Parallels: An Inference-First Leap

China is not the only market crossing this line, but it is crossing it from a different direction and at a different speed.

Globally, inference is projected to surpass 45% of the $385 billion AI compute infrastructure market in 2026 — $173.25 billion — for the first time. Enterprise inference requests worldwide are expected to hit 1.2 trillion per month, with real-time workloads above 65% of that. China's share of the global market is roughly $92 billion, or 23.9%.

But the composition differs sharply. IDC estimates inference will account for **62.2% of China's AI workloads in 2026**, versus roughly half in the United States, where frontier training runs still dominate the capital-expenditure conversation. Fintech alone consumes 28% of China's industry inference compute, with healthcare second.

| Indicator (2026) | China | Global | U.S. (approx.) |
|---|---|---|---|
| Inference share of AI workloads | 62.2% | ~50% | ~48% |
| AI compute market | $51.5B | $385B | ~$180B |
| Share of global market | 23.9% | — | ~47% |
| Intelligent compute growth (YoY) | +87.9% | — | — |
| Models in global top-10 by call volume | 6 | 10 | ~3 |

Sources: IDC/Inspur 2026 report; global figures from IIM industry research; composition estimates from IDC workload tracking.

The supply side is where the comparison turns uncomfortable for everyone. Global AI compute demand fulfillment is projected to fall from 79% in 2024 to a trough of 71% in 2027 before recovering only partially to 77% by 2030 — an absolute shortfall exploding from $38.9 billion to $380.9 billion. Every market wants to be inference-first; the hardware and energy to get there are scarce everywhere.

> **@数码闲聊站 · Weibo**  
> "175万亿什么概念？相当于全国人民每天人均问AI一万多次。算力缺口还有这么大，国产芯片这波是真的吃到红利了。"  
> *"What does 175 trillion mean? It's like every person in China asking AI ten thousand-plus questions a day. And with the compute gap this large, domestic chips are genuinely eating well this cycle."*

## The Friction: Cold Spots in the Boom

The crossover headline hides an uneven reality, and the same IDC research that celebrates the milestone is blunt about it.

Adoption is bimodal. Coding and office-work agents have scaled because they are digital-native, results are verifiable, and error tolerance is high. The physical economy — manufacturing, energy, healthcare — tells a different story: zero percent of surveyed deployments in those sectors have closed the full "execute–feedback–optimize" loop in core operations. Even among telecom operators, the most advanced group, 70% have agents in some business processes but only 3.3% have them in core closed-loop functions.

| Sector | Partial Process Integration | Core Closed-Loop Penetration | Constraint |
|---|---|---|---|
| Software coding | Scale phase | High | Verifiable outputs, clear boundaries |
| Office / knowledge work | Scale phase | Medium-high | Document-centric, low physical risk |
| Telecom operators | 70.0% | 3.3% | Legacy systems, liability questions |
| Manufacturing | Pilots | 0% | Safety, real-time constraints, integration debt |
| Healthcare | Pilots | 0% | Regulation, accountability, data silos |
| Energy / power | Early pilots | 0% | Physical-system risk, certification |

Source: IDC/Inspur *2026 China AI Computing Power Assessment Report*, industry agent maturity matrix.

Energy is the other quiet constraint. Data centers consumed 1.68% of China's electricity in 2024; the China Academy of Information and Communications Technology projects that share reaches roughly 3% — over 400 billion kilowatt-hours annually — by 2030 under mid-range growth, and potentially 700 billion under aggressive growth. The government's answer is "compute-power coordination," pushing inference-heavy loads toward western renewable hubs. But physics and transmission costs do not negotiate, and inference's latency sensitivity limits how much work can migrate west.

There is also the open question of what inference-first economics does to the model layer itself. Training is a barrier to entry; inference at this scale is a commodity war. Token prices in China have collapsed repeatedly over the past two years, and the current 175-trillion-token economy runs on margins that would have been unsustainable eighteen months ago. Volume is exploding; unit economics are doing something else entirely.

> **@mikechen_dev · X (Twitter)**  
> "1,000x token growth in 30 months is insane, but watch the denominator: Chinese inference prices have fallen ~90% in the same period. The token economy is a volume business now. Margin is the new moat — and nobody has it yet."  
> *(posted in English)*

## What Comes Next

Three markers will tell us whether the crossover is a threshold or just a statistic.

First, **closed-loop penetration in the physical economy**. If manufacturing, energy, and healthcare agents move from pilot to closed-loop at anything like the coding sector's pace, token demand gets another order-of-magnitude shock. The Wuzhen expo floor — sewing humanoids, robotic pharmacies, 6G-connected construction machinery — suggests the pilots are at least getting more serious.

Second, **whether the inference buildout stays domestic**. The National Supercomputing Internet's 100,000-card pool is built entirely on Chinese accelerators. If utilization holds and costs keep falling, the inference era quietly accomplishes what export controls could not: a self-sufficient compute stack with a captive, trillion-token market to amortize it.

Third, **the global governance layer**. Beijing used Wuzhen to push the World AI Cooperation Organization toward formal operation with 38 founding members, and the summit's explicit theme — "open source and openness, joint contribution and shared benefits" — was calibrated against American closed-model policy. If inference economics really are marginal-economics, the bloc that standardizes the cheapest token wins the next billion users. China is betting its entire stack, from Qwen's weights to Ulanqab's wind farms, on that bet.

The CCID report called inference's overtaking of training the moment China moved "from the model-training R&D stage into the scaled industrial application stage." History will decide whether October 31, 2026 gets remembered as the date China's AI industry grew up. But the 175 trillion tokens flowing through it every day are already casting the vote.

---

## Voices from the Ground

**@湾区搬砖工 · Xiaohongshu**
"我们做跨境电商的，去年还请了两个运营写listing，今年一个Qwen插件全干了，葡语西语阿拉伯语随便切。你说token贵吗？一个月几百块，比一顿火锅便宜。"
*"We run cross-border e-commerce. Last year we hired two operators to write listings; this year one Qwen plugin does it all, switching between Portuguese, Spanish, and Arabic. Is token usage expensive? A few hundred yuan a month — cheaper than one hotpot dinner."*

**@隔壁老王看AI · Douban**
"别光盯着175万亿欢呼。推理便宜是靠电价和补贴堆出来的，数据中心用电量2030年奔着4000亿度去。这个成本最后谁买单，报道里从来不写。"
*"Don't just cheer the 175 trillion. Cheap inference is propped up by electricity prices and subsidies, with data-center power consumption heading toward 400 billion kWh by 2030. Who ultimately pays that bill is never in the reports."*

**@karminski · GitHub Discussion**
"Maintained an internal Qwen-based agent fleet for a year. The interesting shift: we stopped tracking model versions and started tracking cost-per-task. Nobody asks 'which model is smartest' in reviews anymore. Everyone asks 'what does this workflow cost now vs. March.'"
*(posted in English)*

---

**Related reading:**

- [China's 500-Trillion Token Economy: The CAICT Report That Stunned the Industry](/blog/china-token-economy-500-trillion-caict-report-2026/)
- [The Compute Empire: How Sanctions Built China's AI Hardware Stack](/blog/china-ai-compute-empire-sanctions-boomerang-deepseek-huawei-2026/)
- [Wuzhen Summit: Open Source and the New Rules of Global Tech](/blog/wuzhen-summit-open-source-ai-global-tech-rules-2026/)
- [China's AI Outage Era: A Compute Reckoning](/blog/china-ai-outage-era-compute-reckoning-2026/)
