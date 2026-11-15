---
title: "The Operator: How Tencent's 770B Hy4 Learned to Drive Your Computer"
date: "2026-11-16"
excerpt: "On November 4, Tencent shipped an open-weight model that can read your screen, click your buttons, and beat three rival Chinese models in a blind finance evaluation. The 770-billion-parameter Hy4 is not another chatbot — it is a software operator. What the evidence actually supports, and what remains unproven, tells a more interesting story than the press release."
metaTitle: "Tencent Hy4: 770B Open-Weight Model That Operates Software"
metaDescription: "Tencent's Hy4 is a 770B open-weight model with vision and computer-use skills. It scored 3.04 in a blind finance test against DeepSeek, Kimi, and GLM — but the 'second place' claim needs scrutiny."
tags: ["China AI", "Tencent", "Hunyuan Hy4", "Open Weight Models", "Computer Use", "AI Agents", "Finance AI", "Vision Language Models", "DeepSeek", "Kimi K3", "GLM-5", "AI Benchmarks"]
keywords: "Tencent Hy4, Hunyuan 770B, computer use AI model, open weight AI China, Hy4 finance benchmark, Hy4 vs DeepSeek, Hy4 WorkBuddy, Tencent AI agent, Hy4 pricing, Chinese open source AI 2026"
image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=1200&q=80"
heroImage: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=1200"
readingTime: 16
---

Three hundred and twelve lines of terminal output scrolled past before the model paused. The task: reorganize a directory of financial reports, extract the quarterly figures from each spreadsheet, cross-reference them against a chart in a PDF, and flag any discrepancies. A human analyst would need the better part of an afternoon. Tencent's new Hy4 model did it in four minutes — reading pixels off the screen, clicking through file dialogs, and typing shell commands when the graphical route was slower.

That demo, shown to select developers on November 4, 2026, in Shenzhen, was the moment Tencent stopped competing in the chatbot race and entered a different one entirely.

Hy4 — the fourth generation of Tencent's Hunyuan foundation model line — arrives not as another language model with impressive benchmark scores, but as something the industry has been promising for two years: an AI that can operate a computer. With 770 billion parameters, fully open weights, and training that includes professional software like Blender and CAD applications, Hy4 is Tencent's bet that the next frontier is not answering questions but finishing jobs. The launch also carried a claim that drew immediate scrutiny: that Hy4 ranks second among all Chinese AI models. That claim, as we will show, is less solid than the model underneath it.

## What Tencent Actually Shipped

Strip away the launch-event framing and Hy4 is defined by three capability groups, each representing a meaningful engineering investment.

The first is visual understanding at a fine-grained level. Hy4 can process detailed images, parse complex charts and tables, and reason about mathematical diagrams — geometry problems where the answer depends on reading a figure correctly. This is not image captioning. It is structured information extraction from the kind of visual clutter that fills real office workflows: slide decks, financial filings, dashboards with overlapping data series.

The second capability is computer use through both command-line and graphical interfaces. This is the headline feature. Hy4 does not merely suggest what a user could do; it acts. Command-line control is the straightforward half — text in, text out, errors returned as readable messages. Graphical control is harder. The model must read pixels, locate buttons, scroll, click, and decide where to focus. Pairing Hy4's visual understanding with its interface skills is what makes the second half possible, and it is what separates this release from the wave of chat-oriented models that preceded it.

The third capability is training on professional software, specifically including Blender and CAD applications. Both are complex tools with deep menu systems, multiple modes, and task chains that span dozens of steps. A model that can genuinely drive them must plan across long horizons — a harder test than answering a single question, and one that most competing models have not attempted publicly.

| Capability | What It Means in Practice | Evidence Status |
|---|---|---|
| Fine-grained vision | Reading labels, text, objects in cluttered frames | Confirmed in launch materials |
| Complex chart analysis | Extracting structured data from graphs and tables | Confirmed; central to finance evaluation |
| Mathematical visual reasoning | Geometry problems requiring diagram interpretation | Confirmed in launch materials |
| CLI control | Operating terminal/shell environments | Demonstrated; no independent benchmark |
| GUI control | Clicking buttons, reading screens, navigating apps | Demonstrated; no independent benchmark |
| Blender/CAD training | Driving professional 3D and design software | Training claim only; no task-completion data |

![Precision engineering workstation — Hy4's CAD and Blender training targets professional design environments](https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80)
*Hy4's professional-software training targets tools like Blender and CAD — applications with deep menus and long task chains. (Image: Unsplash)*

## From Hy3 to Hy4: The Quiet Build

Tencent's Hunyuan line has been running a marathon while the industry sprinted. The first Hunyuan models in 2024 were competent but unremarkable — strong on Chinese-language tasks, middling on global leaderboards. Hy3, released earlier in 2026, changed the trajectory. It climbed to the top tier of Chinese models on OpenRouter's usage rankings, demonstrating that Tencent could ship a model developers actually chose to use rather than one they evaluated and abandoned.

That turnaround matters for understanding Hy4. Hy3 proved Tencent could build a competitive language model. Hy4 extends the bet in a different direction: from text generation to task completion. The shift mirrors what happened across the industry in 2026, as the gap between "models that can write" and "models that can do" became the industry's central preoccupation.

| Release | Date | Key Feature | Market Position |
|---|---|---|---|
| Hunyuan initial | 2024 | Chinese-language foundation model | Mid-tier; strong domestically |
| Hy3 | Early 2026 | Competitive open-weight LLM | Top tier on OpenRouter usage |
| Hy4 | Nov 4, 2026 | Vision + computer use + professional software | Claimed top tier; second-place claim unconfirmed |

The speed of the Hy3-to-Hy4 cycle is itself notable. Tencent shipped a meaningful capability upgrade in roughly eight months, during the same period when DeepSeek released V4.1, Moonshot shipped Kimi K3.1 Pro, and Zhipu pushed GLM-5.3. Chinese labs are now operating on release cycles measured in weeks, not quarters — a tempo that would have been unrecognizable even eighteen months ago.

## The Numbers That Hold Up

The strongest evidence in Hy4's launch comes from WorkBuddy, Tencent's office-task evaluation. Hy4 posted an average performance score of 83.18 with a 96.15% pass rate, ranking first in 9 of 12 scenarios in mainland China. These are Tencent-reported figures, and no independent lab has reproduced them, so caution is warranted. But the arithmetic is worth examining.

Winning 9 of 12 scenarios means 75% coverage — which also means 3 scenarios where another model ranked higher. Tencent's summary does not name which three, and that omission is significant. If the misses cluster in a category like spreadsheet manipulation or cross-application workflows, enterprise buyers would want to know. A 96.15% pass rate sounds exceptional, but pass rates depend heavily on grader strictness. Without the rubric, the number works best as a relative signal across models graded identically, not as an absolute quality measure.

| WorkBuddy Metric | Hy4 Result | Caveat |
|---|---|---|
| Average performance score | 83.18 | Tencent-reported; no independent reproduction |
| Pass rate | 96.15% | Grading rubric not published |
| Scenario wins (mainland China) | 9 of 12 | Which 3 scenarios lost is undisclosed |
| Evaluation scope | Office-style tasks | May not transfer to English-language workflows |

The choice of WorkBuddy as the primary benchmark is itself a product signal. Tencent did not lead with coding scores or math Olympiad results — the standard leaderboard currency of Chinese AI launches. Instead, it led with office work, the domain where an agent that can operate software has the most obvious commercial value. Whether intentional or not, that framing tells enterprise buyers: this model is built for your workflows, not for benchmark screenshots.

## The Finance Blind Test: 3.04 and What It Means

The most methodologically interesting data from the launch is the finance evaluation. Tencent organized a blind study in which 213 finance professionals graded model outputs on 579 real tasks. The professionals did not know which model produced which output, removing the brand-recognition bias that plagues most launch-day benchmarks.

Hy4 scored 3.04. DeepSeek-V4.1-Flash scored 2.97. Kimi K3.1 Pro and GLM-5.3 each scored 2.68.

| Model | Finance Score | Gap to Hy4 | Gap as % of Rival Score |
|---|---|---|---|
| Hy4 (Tencent) | 3.04 | — | — |
| DeepSeek-V4.1-Flash | 2.97 | 0.07 | 2.4% |
| Kimi K3.1 Pro | 2.68 | 0.36 | 13.4% |
| GLM-5.3 | 2.68 | 0.36 | 13.4% |

Two observations matter here. First, the 0.07 gap over DeepSeek-V4.1-Flash is statistically fragile. Without confidence intervals or task-level variance data, a margin that small could sit inside normal noise. No bank should switch vendors on that difference. Second, the 0.36 gap over Kimi K3.1 Pro and GLM-5.3 is more substantive — and it comes from a model with 770 billion parameters competing against Kimi's 2.8 trillion. Parameter count alone does not determine task quality, and this table is a clean illustration of that principle.

The blind design deserves genuine credit. With 579 tasks and 213 professional graders, the study is larger and more rigorous than most launch-day evaluations, which often rest on a few dozen prompts graded by automated scripts. Tencent chose a design in which domain experts, not benchmarks, judged the outputs. That is the kind of evaluation that persuades buyers.

That said, the study was Tencent-organized, and no outside lab has replicated it. Independent reproduction would substantially raise confidence. Until then, the result is best held as directionally credible but imprecise on the exact size of the lead.

## The Second-Place Claim: Claim, Not Fact

The Decoder's launch-day headline reported that Tencent claims second place among Chinese AI models. Silicon UK ran a similar framing. Both outlets were careful — they reported what Tencent says about itself, not what independent testing confirms.

Our own assessment aligns with that caution. A universal second-place ranking requires three things: a shared test suite, a defined competitive set, and a neutral scorer. The launch materials contain none of these. What they contain are specific results on specific benchmarks — WorkBuddy for office tasks, the blind study for finance — that show strong performance in those domains against particular rivals. That is meaningful evidence. It is not a universal ranking.

Rankings also shift by task. A model can lead in office automation, trail in coding, and sit mid-pack in mathematical reasoning. Any single ordinal position hides that spread. When a company says "second place," the correct response is: second on what, measured by whom, against which models? Tencent's published results answer the first question partially (office and finance) and leave the second and third unanswered.

| Claim | Evidence | Status |
|---|---|---|
| 770B parameters, open weights | Tencent announcement | Confirmed |
| Vision + computer-use capabilities | Tencent announcement and demos | Confirmed |
| WorkBuddy 83.18 avg, 96.15% pass | Tencent-reported | Strong but unreplicated |
| Finance blind test 3.04 | Tencent-organized, 213 professionals | Methodologically sound, unreplicated |
| Beats DeepSeek, Kimi, GLM in finance | Scores published | Domain-specific, not general |
| Second-best Chinese AI model overall | No neutral ranking exists | Unconfirmed claim |

What is notably absent from the comparison set is equally instructive. The launch coverage contains no Hy4 results against Alibaba's Qwen line — currently the most deployed open-weight family in the world — and no results against Western frontier models. You cannot claim second place without scores for the models that might occupy first.

![A finance professional at work — the domain where Hy4 posted its strongest results in blind testing](https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80)
*Finance was Hy4's proving ground: 213 professionals graded 579 real tasks without knowing which model produced which output. (Image: Unsplash)*

## Pricing and the Self-Hosting Equation

Hy4's pricing remains unconfirmed. Secondary coverage reports $0.834 per million input tokens and $2.501 per million output tokens, but the cited Tencent announcement does not verify those figures. Currency-conversion drift and reseller margins make secondary pricing reports unreliable, so any budget planning should wait for Tencent's official pricing page.

The more interesting economic question is self-hosting. Because Hy4's weights are fully open, any organization with sufficient GPU capacity can run it internally, bypassing per-token pricing entirely. For a 770-billion-parameter model, the hardware requirements are substantial — this is not a model that runs on a single workstation. But for financial institutions, government agencies, and large enterprises with existing GPU infrastructure and strict data-residency requirements, self-hosting transforms the cost equation from price-per-token to hardware amortization plus operations staff.

| Cost Route | Best For | Key Constraint |
|---|---|---|
| Hosted API | Teams without GPU infrastructure; fast iteration | Per-token pricing; data leaves your environment |
| Self-hosted | Banks, government, regulated industries | Large GPU cluster required; MLOps expertise |
| Fine-tuned self-hosted | Domain-specific deployments (finance, legal) | Training infrastructure + data pipeline |

This dynamic has precedent. Revolut's decision to self-host Chinese open-weight models for internal coding tasks was driven by the same math: at sufficient scale, the hardware cost drops below the cumulative API bill, and the data never leaves the building. Hy4's strong finance scores make it a natural candidate for similar evaluations by banks and brokerages — the exact buyers who care most about both cost and data sovereignty.

## Security: The Defensive-Only Pledge and Its Limits

A model that can read screens and execute shell commands is, in the wrong hands, an intrusion tool. Tencent recognized this explicitly. Rappler and BusinessDay both reported that Hy4's cybersecurity training was limited to defensive applications — identifying and fixing software vulnerabilities — with explicit exclusion of material on building hacking tools or breaching systems.

This is a meaningful commitment, and the timing is deliberate. Releasing a computer-use model with open weights without addressing its offensive potential would have drawn immediate regulatory scrutiny in both China and abroad. The defensive-only pledge is Tencent's attempt to preempt that conversation.

It is also, by necessity, incomplete. An open-weight model can be fine-tuned by anyone who downloads it. A determined user can add back what the original trainers removed, and no training-data filter is perfect. This caveat applies to every open-weight release with dual-use potential, not just Hy4, but it matters more here because the model's core capability — operating a computer — is the same capability that makes it dangerous.

| Security Measure | What It Does | What It Cannot Do |
|---|---|---|
| Defensive-only training filter | Removes offensive security content from base training | Prevent fine-tuning by downstream users |
| Open-weight transparency | Allows inspection of model behavior and biases | Guarantee safe behavior in all deployment contexts |
| Tencent's deployment guidance | Recommends guardrails and access controls | Enforce those guardrails at user sites |

The practical implication for deployers is straightforward: regardless of what Tencent filtered from training, any team giving Hy4 shell access or screen-control permissions needs its own guardrails — input validation, output filtering, permission boundaries, and audit logging. The model's defensive training lowers the baseline risk. It does not eliminate it.

## The Competitive Landscape: A Narrow but Real Advantage

Hy4 enters a Chinese open-weight market that has become genuinely crowded. DeepSeek's V4 line dominates developer mindshare. Moonshot's Kimi K3.1 Pro holds the parameter crown at 2.8 trillion. Zhipu's GLM-5.3 has carved out a niche in coding and agent tasks. Alibaba's Qwen family remains the most widely deployed open-weight series globally.

Against this field, Hy4's differentiation is not raw capability but capability shape. It is the only major Chinese open-weight model that combines vision, computer use, and professional-software training in a single release. That combination matters most for the enterprise segment — the buyers who want an AI that can navigate their existing software stack, not one that requires them to build new interfaces.

| Model | Parameters | Key Strength | Hy4 Comparison |
|---|---|---|---|
| Hy4 | 770B | Vision + computer use + office tasks | The subject of this analysis |
| DeepSeek-V4.1-Flash | Not disclosed | Coding, general reasoning, developer adoption | Trails Hy4 by 0.07 on finance |
| Kimi K3.1 Pro | 2.8T | Largest open-weight model; strong reasoning | Trails Hy4 by 0.36 on finance |
| GLM-5.3 | Not disclosed | Agent tasks, coding, enterprise deployment | Trails Hy4 by 0.36 on finance |
| Qwen (Alibaba) | Varies by version | Widest deployment; ecosystem maturity | No comparable scores published |

The parameter comparison with Kimi K3.1 Pro is worth pausing on. Kimi's model is more than three times the size of Hy4, yet it trails on the finance evaluation. This is not an argument that smaller models are better — parameter count correlates with capability across the broad field. It is an argument that training focus, data quality, and evaluation design can outweigh raw scale in specific domains. Tencent chose to optimize for office and finance workflows, and the blind-test results suggest the bet paid off in that narrow arena.

## What Comes Next

Five predictions for Hy4 and the broader Chinese open-weight landscape, offered as analysis rather than reported fact:

**Independent finance tests will narrow the gap.** A 0.07 margin over DeepSeek-V4.1-Flash is thin, and third-party evaluations will likely report near-ties on several task types. The 0.36 gap over Kimi and GLM will prove more durable.

**Computer-use benchmarks will become the next competitive battleground.** Vision plus interface control invites direct head-to-head testing, and rival labs will publish their own numbers within months. Expect the first independent comparisons before year-end.

**Security scrutiny will intensify.** Researchers will probe whether Hy4's defensive-only training holds up under fine-tuning, and regulators in both China and the West will examine the implications of open-weight models with computer-use capabilities. The debate will be substantive.

**Rivals will respond with agent features.** Alibaba, DeepSeek, Moonshot, and Zhipu all ship on fast cycles. Computer-use training will appear in their next flagships. Hy4's window of differentiation, while real, is measured in months, not years.

**The "second place" claim will dissolve under independent evaluation.** Neutral indexes like Artificial Analysis will eventually score Hy4 across multiple dimensions, and the result will almost certainly be a top-tier placement with variation by task — not a clean ordinal rank. That is how it should be. The model's value lies in what it can do, not where it sits on a synthetic leaderboard.

Tencent has shipped something genuinely useful: an open-weight model that can see, click, and reason about the software environments where real work happens. The claims around it deserve scrutiny, and some of them will not survive independent testing. But the capability itself — a 770-billion-parameter model that can drive a computer through both terminal and GUI — represents a concrete step toward the agentic AI that the industry has been promising. In a year of inflated claims and benchmark theatrics, a model that quietly reorganizes your files and reads your charts is its own kind of statement.

## Social Voices

**@量子位观察员 on Zhihu**
> "770B参数，开源，能操作电脑——腾讯这次的方向比参数竞赛聪明多了。企业要的不是聊天机器人，是能干活的工具。"
>
> "770B parameters, open source, can operate a computer — Tencent's direction this time is much smarter than the parameter race. Enterprises don't want chatbots. They want tools that get work done."

**@Momo on Douban**
> "金融盲测3.04 vs DeepSeek 2.97，差距0.07。统计学上这叫'没有显著差异'。但传播的时候只会说'超越DeepSeek'。"
>
> "Finance blind test: 3.04 vs DeepSeek's 2.97, a gap of 0.07. Statistically, that's called 'no significant difference.' But in the headlines, it'll just say 'beats DeepSeek.'"

**@fintech_dev_alex on X**
> "The most important detail in Tencent's Hy4 launch isn't the model — it's the evaluation design. 213 finance professionals, blind grading, 579 real tasks. That's how you benchmark for enterprise adoption. Every other lab should copy this methodology."

**@科技小辛 on Weibo**
> "一个能操作Blender和CAD的AI模型，开源权重，这意味着什么？意味着中小设计工作室也能用AI自动化渲染流程了。腾讯这次做了一件好事。"
>
> "An AI model that can operate Blender and CAD, with open weights — what does this mean? It means small and mid-size design studios can also automate their rendering pipelines with AI. Tencent did a good thing this time."

**@OpenSourceGuru on GitHub discussion**
> "770B open weights is great. But let's talk about the hardware: you need roughly 8 A100s just to run inference at reasonable speed. The 'open' in open-weight means very different things to a startup in Lagos versus a bank in Shanghai. Accessibility is more than a license."

**@金融民工小李 on Xiaohongshu**
> "作为银行从业者，最关注的是数据安全问题。Hy4可以私有化部署，这比性能分数更吸引我们。毕竟监管不允许客户数据出境。"
>
> "As a banking professional, what I care most about is data security. Hy4 can be deployed on-premises, which attracts us more than performance scores. Regulations don't allow customer data to leave the country anyway."

---

*Related reading: [Tencent Hy3: The AI Turnaround on OpenRouter](/blog/tencent-hy3-ai-turnaround-openrouter-china-2026/) · [Kimi K3.1 Pro and the Open-Weights Frontier Gap](/blog/kimi-k3-1-pro-open-weights-frontier-gap-2026/) · [DeepSeek V5 and Huawei Ascend 950: The Sovereignty Test](/blog/deepseek-v5-huawei-ascend-950-training-sovereignty-test-2026/) · [Wuzhen 2026: China's Open-Source AI Gamble](/blog/wuzhen-summit-open-source-ai-global-tech-rules-2026/)*
