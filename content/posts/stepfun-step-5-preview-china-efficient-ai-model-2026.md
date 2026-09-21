---
title: "600 Billion Parameters, One Giant Leap: How StepFun's Step 5 Preview Outruns Models 5x Its Size"
slug: "stepfun-step-5-preview-china-efficient-ai-model-2026"
date: "2026-09-22"
excerpt: "On September 20, Shanghai-based StepFun skipped an entire generation and released Step 5 Preview — a 600-billion-parameter model that ties the 2.8-trillion-parameter Kimi K3 on global benchmarks, matches it on coding at one-eighth the cost of American flagships, and open-sources its weights on October 15. Inside the quietest tiger's return to the front of China's AI race."
author: "AI in China Editorial"
readTime: "15 min"
heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80"
category: "AI Models & Technology"
tags:
  - StepFun
  - Step 5 Preview
  - China AI
  - MoE Architecture
  - AI Efficiency
  - Open Source AI
  - Coding Models
  - AI Pricing
  - Shanghai AI
  - Artificial Analysis
keywords:
  - stepfun step 5 preview
  - china ai efficiency model 2026
  - 600B parameter model kimi k3
  - artificial analysis intelligence index 44
  - terminal-bench 4.0 coding benchmark
  - cheapest ai model api pricing 2026
  - open source ai model october 2026
  - stepfun jiang daxin
  - moe sparse activation china
  - china ai six tigers
related:
  - /blog/china-ai-token-price-war-deepseek-zhipu-2026/
  - /blog/huawei-ascend-960-supernode-npo-3d-datacenter-china-compute-2026/
  - /blog/china-open-source-ai-empire-brics-frontier-gap-2026/
  - /blog/china-ai-efficiency-engineering-more-with-less-2026/
---

![Server racks glowing in the dark — Step 5 Preview extracts frontier-class performance from a fraction of the compute](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80)
*Step 5 Preview's trick is not more compute but smarter compute: 600 billion parameters, only 27 billion awake at any moment. (Image: Unsplash)*

On September 20, 2026, a Shanghai AI lab did something the industry had stopped expecting from anyone but DeepSeek. StepFun — the quietest of China's "AI Six Tigers" — released Step 5 Preview, a foundation model with 600 billion parameters that scored 44 points on the Artificial Analysis Intelligence Index, exactly tying Moonshot AI's Kimi K3, a model with 2.8 trillion parameters. Nearly five times the size. The same score.

The number that matters more is not on any benchmark leaderboard. Step 5 Preview's single-task cost on that evaluation ran about $0.71 — roughly one-eighth of what Claude Opus 5 costs to do the same work. And on September 17, three days before the official release, benchmark watchers had already noticed something unusual: StepFun had skipped an entire generation. There was no Step 4. The lab had jumped straight from its Step 3.X series to Step 5, betting that its new architecture could land in the same weight class as models several times its size.

The bet appears to have paid off. But the story of Step 5 Preview is really the story of a strategic question facing every Chinese AI lab in late 2026: when capital and compute are both constrained, is it smarter to build the biggest model or the most efficient one? StepFun just gave its answer, and the efficiency thesis is looking stronger every week.

## The Quietest Tiger in China's AI Jungle

To understand why Step 5 Preview matters, you have to understand how differently StepFun has played this game from the start.

The company was founded in April 2023 in Shanghai's Xuhui District by Jiang Daxin, a former Microsoft Corporate Vice President who had led a 400-plus-person team building Bing search. Around him, he assembled a roster that reads like a who's who of applied AI: Zhang Xiangyu, one of the co-authors of the ResNet paper that launched the modern deep learning era, as chief scientist; and Zhu Yibo, a former ByteDance director with rare experience running massive-scale clusters, as CTO. More than 80% of the company's headcount is research and development.

| Milestone | Date | Detail |
|---|---|---|
| Company founded | April 2023 | Shanghai Xuhui; Jiang Daxin (ex-Microsoft CVP) as CEO |
| Step-2 released | July 2024 | First trillion-parameter model from a Chinese startup |
| B round | December 2024 | Several hundred million USD; Shanghai state capital, Tencent, 5Yuan, Qiming |
| Step Audio R1.1 tops AA | January 2026 | #1 on Artificial Analysis speech leaderboard |
| B+ round | January 2026 | Over ¥5 billion — record single round for Chinese AI |
| Yin Qi joins as Chairman | January 2026 | Also chairs Qianli Technology; deepens auto AI ties |
| Step 5 Preview | September 20, 2026 | 600B MoE; ties 2.8T Kimi K3 on AA Index |
| Open-source weights | October 15, 2026 | BF16 full weights release planned |

*Table 1: StepFun's key milestones from founding to Step 5 Preview.*

While rivals chased headlines, StepFun cultivated a reputation for doing more with less attention. It was named one of the "AI Six Tigers" — the six leading Chinese LLM startups — and MIT Technology Review listed it among the four Chinese AI startups worth watching beyond DeepSeek. But its public profile remained subdued. The company's stated roadmap runs from single-modal to multimodal, then to unified understanding and generation, then to world models, and finally to AGI. In January 2026, it closed a B+ round exceeding ¥5 billion (roughly $700 million), the largest single financing in Chinese AI history at the time, with Shanghai state funds, China Life, and returning investors Tencent, Qiming, and 5Yuan all participating. The same month, Yin Qi — chairman of auto-tech company Qianli Technology — joined as chairman, signaling a deeper push into AI-powered vehicles and edge devices.

StepFun's strategy has two pillars: foundation models and "AI plus terminals" — putting intelligence into cars, phones, and embodied devices. It has partnerships with Geely Auto and Qianli on vehicles, and its multimodal models power features on OPPO phones. Step Audio R1.1, its speech model, hit #1 on Artificial Analysis's leaderboard in January 2026. In December 2025, it released what it called the industry's first truly deployable open-source GUI model.

Step 5 Preview is the moment that quiet accumulation became loud.

## Skipping a Generation

Version numbers carry meaning in the AI industry. They signal to customers, investors, and recruits where a lab believes it sits in the competitive hierarchy. When StepFun's engineers realized during development that their new architecture had leapfrogged the incremental improvement they had planned as Step 4, they made an unusual call: they canceled the incremental release and renamed the project Step 5.

It was a marketing decision as much as an engineering one, but it carried real information. A lab that skips a generation is a lab claiming that its current work makes the skipped work obsolete. In September 2026, with Chinese model releases arriving in a weekly drumbeat — DeepSeek's V4.1 Flash, Zhipu's GLM-5.3 family, Alibaba's Qwen3.8-Omni — the skip was StepFun's way of saying it intended to compete at the front of the pack, not in the middle.

The core claim is parameter efficiency. Step 5 Preview carries 600 billion parameters in total but activates only 27 billion per token through a sparse mixture-of-experts architecture across 92 layers. Only about 4.5% of the model "wakes up" for any given task. The rest stays asleep, conserving memory bandwidth and compute. Chinese media described the approach as dynamic sparse activation paired with instruction-aware cache compression — the model knows when to spend its full capacity and when to coast.

The result is a model that behaves, on benchmarks at least, like something several times larger.

## Anatomy of an Efficiency Machine

The mixture-of-experts design is not new — DeepSeek, Mixtral, and others have used variants of it for years. What distinguishes Step 5 Preview is the ratio it achieves between total capacity and activated compute, and the way that ratio translates into serving economics.

| Specification | Step 5 Preview |
|---|---|
| Architecture | Sparse MoE, 92 layers |
| Total parameters | 600B |
| Active parameters per token | 27B (~4.5%) |
| Context window | 1M tokens |
| Input modalities | Text, image, video |
| Output | Text |
| Generation speed | 100 tokens/second |
| Availability | API live now (model ID: step-5-preview) |
| Open weights | October 15, 2026 (BF16) |

*Table 2: Step 5 Preview core specifications.*

A one-million-token context window puts Step 5 Preview in rare company — most frontier models still cap out between 128K and 256K. Native vision input means it can accept images and video alongside text without a separate vision encoder bolted on, which matters for the agentic scenarios StepFun is targeting: AI coding, software engineering, professional knowledge work, and finance.

The 22-hour demonstration may be the most revealing detail of all. In an internal test, Step 5 Preview was set loose on GPU kernel optimization and worked autonomously for 22 straight hours, eventually reaching 508 TFLOPS of throughput — beating Claude Opus 5's 493 TFLOPS on the same task. A 600-billion-parameter model out-optimizing hardware code better than a flagship American model with an order of magnitude more parameters is the kind of result that makes infrastructure engineers pay attention.

![Developers pair-programming — Step 5 Preview's strongest showing came in software engineering benchmarks, where it outscored every Chinese open-source rival](https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80)
*Software engineering is Step 5 Preview's home turf: a 67.7 on the AA software engineering evaluation, second only to two American closed-source flagships. (Image: Unsplash)*

## The Numbers

Benchmarks are sampling instruments, not verdicts. But the pattern across Step 5 Preview's results is consistent enough to be meaningful.

| Model | AA Intelligence Index | Parameters |
|---|---|---|
| GLM-5.3 (Zhipu) | 45 | ~740B |
| Claude Opus 5 (Anthropic) | 45 | Undisclosed |
| **Step 5 Preview (StepFun)** | **44** | **600B** |
| Kimi K3 (Moonshot AI) | 44 | 2.8T |
| DeepSeek V4.1 Flash | 40 | ~552B |
| DeepSeek V4 Pro | 36 | Larger MoE |

*Table 3: Artificial Analysis Intelligence Index — Step 5 Preview ties a model 4.7x its size.*

The headline is Table 3: a 600B model matching a 2.8T model at 44 points, one point behind GLM-5.3 and Opus 5. For Chinese labs locked in a compute-constrained race, this is the efficiency frontier moving outward. Kimi K3 required state-of-the-art training infrastructure and enormous capital to reach its score. StepFun reached the same number with a fraction of the hardware.

Coding is where the gap becomes a chasm in the other direction:

| Model | Terminal-Bench 4.0 Score |
|---|---|
| GPT-5.6 Terra (OpenAI) | 34.1% |
| **Step 5 Preview** | **33.3%** |
| GLM-5.3 Flash (Zhipu) | 28.7% |
| DeepSeek V4.1 Flash | 26.8% |
| Kimi K3 (Moonshot AI) | 12.6% |

*Table 4: Terminal-Bench 4.0 heavy-load coding benchmark — Step 5 Preview sits one point behind OpenAI's flagship.*

On Terminal-Bench 4.0, the brutal terminal-based coding gauntlet, Step 5 Preview scored 33.3% — statistically adjacent to GPT-5.6 Terra and a generation ahead of Kimi K3's 12.6%. On AA's software engineering evaluation, it posted 67.7, ranking behind only two American closed-source flagships, GPT-6 Astra and Claude Opus 5, and ahead of every Chinese open-source model including GLM-5.3.

The broader benchmark picture reinforces the pattern:

| Benchmark | Step 5 Preview |
|---|---|
| GPQA Diamond (science reasoning) | 93.5% |
| Terminal-Bench v2.1 | 85.0% |
| BrowseComp (deep browsing) | 88.7% |
| MMMU-Pro (multimodal) | 76.0% |
| StepCodeBench (internal, 553 repos) | 49 |

*Table 5: Step 5 Preview across reasoning, browsing, multimodal, and internal coding evaluations.*

One caution: Terminal-Bench scores are known to be sensitive to evaluation harness configuration — Kimi K3's anomalously low 12.6% likely understates its real capability. But even discounting outliers, Step 5 Preview's clustering near the top of every coding-related table is not an artifact. Early developer feedback on Chinese social platforms echoed the same conclusion: this is not a benchmark-specialist model. It performs in real workflows.

## The Price of Intelligence

If the performance story is impressive, the pricing story is disruptive. Step 5 Preview launched at $1.00 per million input tokens and $2.70 per million output tokens — against global medians of $1.88 and $10.00 respectively.

| Metric | Step 5 Preview | Global Median | Step 5 Advantage |
|---|---|---|---|
| Input price (per 1M tokens) | $1.00 | $1.88 | 47% cheaper |
| Output price (per 1M tokens) | $2.70 | $10.00 | 73% cheaper |
| Generation speed | 100 tok/s | 65 tok/s | 54% faster |
| Single-task cost (AA eval) | ~$0.71 | — | ~1/8 of Claude Opus 5 |
| Total AA evaluation cost | $918.34 | — | — |

*Table 6: Step 5 Preview pricing and speed versus global medians.*

For Chinese developers, the on-ramp is even gentler. StepFun's Token Plan subscription starts at ¥49 (about $7) and converts to roughly ¥400 of usage credit, with no five-hour usage cap — a pointed contrast with competitors whose quota systems throttle heavy users during peak windows.

There is a familiar pattern worth noting here, one that has repeated across Chinese AI in 2026: a lab releases a dramatically underpriced model, developers pile in, compute demand explodes, and the generous terms quietly tighten. DeepSeek's journey followed this arc, as did several others. StepFun's ¥49 entry plan is genuinely generous today; whether it survives contact with viral adoption is an open question the company has not yet had to answer.

![Abstract visualization of data flowing through a neural network — Step 5 Preview's sparse MoE activates only 4.5% of its parameters for each token](https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80)
*Sparse activation in action: 600 billion parameters on the books, 27 billion on the clock — the architectural bet behind the pricing. (Image: Unsplash)*

What softens the concern is the open-source commitment. StepFun has pledged to release Step 5 Preview's full BF16 weights on October 15, 2026 — barely three weeks after launch. That puts the model in the open-weight camp alongside DeepSeek, Qwen, and GLM, where Chinese labs have collectively out-published every other nation in 2026. Even if API pricing tightens, the weights themselves will be free to download, fine-tune, and self-host.

## The Competitive Map

Step 5 Preview arrives in the middle of the densest model-release month in Chinese AI history. Positioning it requires looking at what each major lab is actually optimizing for.

| Lab | Flagship | Parameter Scale | Optimization Target | Open Weights |
|---|---|---|---|---|
| StepFun | Step 5 Preview | 600B (27B active) | Parameter efficiency, coding | Yes (Oct 15) |
| Moonshot AI | Kimi K3 | 2.8T | Raw capability ceiling | Yes |
| Zhipu AI | GLM-5.3 family | ~740B | Speed (FlashX: 200 tok/s) | Yes |
| DeepSeek | V4.1 Flash / V4 Pro | ~552B / larger | Extreme cost engineering | Yes |
| Alibaba | Qwen3.8-Omni-Flash | Undisclosed | Omnimodality, 1M context | Yes |

*Table 7: China's frontier model landscape in September 2026 — five labs, five different optimization targets.*

The striking thing about this table is that nobody is competing on the same axis. Moonshot is pushing the capability ceiling with brute scale. Zhipu is racing on inference speed — its GLM-5.3-FlashX outputs 200 tokens per second powered by 100,000 domestic chips. DeepSeek is grinding token costs toward zero. Alibaba is collapsing modalities into single omnimodal models. StepFun's bet is that a smaller, sharper model can deliver frontier-adjacent capability at a fraction of the serving cost — and that in a market where application developers actually pay the API bills, efficiency beats prestige.

It is also worth noting what Step 5 Preview is not: a general-purpose chatbot play. The launch materials emphasize agentic scenarios — long-horizon CLI tasks, financial analysis through its FinStepBench suite, deep research benchmarks like DRACO, and the ability, with user authorization, to control cameras, COM ports, screenshots, and simulated mouse input for device-side debugging. StepFun's "AI plus terminals" strategy runs underneath: a model designed to act, not just converse.

## Risks and Open Questions

Honesty requires noting what the launch cheerleading glosses over.

First, this is explicitly a Preview. StepFun itself labels the model "Step 5 Preview," and preview models in this industry occupy an ambiguous space between research artifact and production system. Long-tail failures, multi-turn reasoning stability, and behavior under sustained multi-task concurrency have not been stress-tested at scale. The gap between a spectacular benchmark week and a reliable production quarter has humbled better-funded labs.

Second, compute. StepFun is not Huawei-backed DeepSeek with its own cluster empire, nor Alibaba with cloud infrastructure. Its B+ round gives it capital, but capital converts to compute slowly in a market where every lab is racing to lock down GPU and Ascend supply. If Step 5 Preview adoption spikes the way early signals suggest, the ¥49 Token Plan economics will strain. The historical pattern — generous launch pricing followed by throttling, queueing, or quiet repricing — is well documented across the industry.

Third, the benchmark caveat applies in both directions. Terminal-Bench 4.0's sensitivity to harness configuration means scores across labs are not perfectly comparable. Step 5 Preview's numbers are strong, but the true test is developer retention at day 90, not leaderboard position at day 3.

## What Comes Next

The near-term calendar is clear. October 15 brings the open-weight release, which will trigger the standard sequence: Hugging Face downloads, fine-tunes, quantized variants for consumer GPUs, and independent evaluations that either confirm or complicate the launch-week narrative. If the weights hold up, StepFun earns a permanent seat at the frontier table and its efficiency story becomes a template other labs are forced to answer.

The medium-term questions are strategic. StepFun's chairman Yin Qi brings deep automotive connections through Qianli Technology, and the company's terminal-AI partnerships with Geely and OPPO suggest Step 5-class models will increasingly ship inside cars and phones rather than only through APIs. A 600B-parameter model with 27B active parameters is precisely the kind of architecture that can be distilled, quantized, and deployed at the edge. The lab that masters efficient small-activation models today owns the on-device story tomorrow.

For the broader Chinese AI industry, Step 5 Preview is one more data point in a trend that has defined 2026: the center of gravity in open-weight AI has moved east. Five Chinese labs now occupy the global open-source frontier. Each has chosen a different axis to compete on. StepFun just made the strongest case yet that the efficiency axis — doing more with less — may be the one that matters most when the invoices come due.

## Social Media Reactions

> **@量子位 (Twitter/X, AI media):** "跳过4.X直接上Step 5，阶跃这波是憋了个大招。6000亿打平2.8万亿，参数效率才是真正的护城河。" — *"Skipping 4.X to launch Step 5 — StepFun was holding back a trump card. 600B tying 2.8T: parameter efficiency is the real moat."*

> **@tech_insider_zh (Zhihu):** "Terminal-Bench 33.3% 接近 GPT-5.6 Terra，这个比总分44更有说服力。写代码的能力是硬通货。" — *"33.3% on Terminal-Bench, nearly matching GPT-5.6 Terra — that's far more convincing than the headline 44. Coding ability is hard currency."*

> **@小red书AI观察 (Xiaohongshu):** "49块起步还没有5小时限制，对学生党太友好了。先冲为敬，希望别过几天就缩水。" — *"¥49 with no 5-hour cap is so friendly to students. Subscribing immediately — just hope the terms don't quietly shrink in a few days."*

> **@skeptical_dev (GitHub discussion):** "Benchmarks are benchmarks. Wake me up when someone runs Step 5 Preview on a 50k-line Rust migration for a month and it doesn't hallucinate the borrow checker." — *A reminder that launch-week numbers and production reliability are different tests.*

> **@金融民工小王 (Weibo):** "FinStepBench那些金融测试如果真有那么强，券商研究所的实习生要慌了。" — *"If the FinStepBench financial evaluations are really that strong, intern analysts at brokerage research departments should start worrying."*

> **@modularmind (Douban):** "国产模型的节奏已经卷到每周都有新王了。上周DeepSeek，这周阶跃，下周是谁？利好开发者，但也让人怀疑到底有没有人在认真做长期的事。" — *"Chinese model releases now crown a new king every week. DeepSeek last week, StepFun this week, who next? Great for developers, but it makes you wonder if anyone is doing long-term work anymore."*
