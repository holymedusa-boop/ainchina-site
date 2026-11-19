---
title: "DaisyRose-27B: How RadixArk Doubled Qwen3.8's Agent Skills With 1,200 Tasks and Pure RL"
date: "2026-11-19"
excerpt: "A Chinese lab spent 18 days and roughly 63,000 GPU-hours to answer a question the entire industry is asking: can pure reinforcement learning turn a small open-weight model into a capable autonomous agent? DaisyRose-27B's answer — 5.6% to 12% on Terminal-Bench 4.1 — doubles the baseline and halves the training cost of conventional approaches."
metaTitle: "DaisyRose-27B: RadixArk's RL Breakthrough on Qwen"
metaDescription: "RadixArk's DaisyRose-27B used 1,200 curated tasks and 144 H200 GPUs to lift Qwen3.8-27B from 5.6% to 12% on Terminal-Bench 4.1 — with a 57% training cost cut."
tags: ["China AI", "RadixArk", "DaisyRose-27B", "Qwen3.8", "Reinforcement Learning", "Agentic AI", "Terminal-Bench", "Miles Framework", "Open Weights", "AI Post-Training"]
keywords: "DaisyRose-27B, RadixArk, Qwen3.8-27B RL training, Terminal-Bench 4.1, Miles reinforcement learning framework, agentic RL post-training, China AI open weights, long-horizon agent tasks, SGLang slime ecosystem, AI training cost efficiency"
image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80"
heroImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200"
readingTime: 15
---

On the morning of November 18, 2026, a little-known Chinese AI lab called RadixArk published a blog post and three model checkpoints. The post described a reinforcement learning run: 1,200 curated tasks, 144 NVIDIA H200 GPUs, 18 days. The checkpoints were a 27-billion-parameter language model called DaisyRose-27B, built on Alibaba's Qwen3.8-27B and released under Apache 2.0 in three precisions — BF16, FP8, and NVFP4.

By the next morning, the post had cleared the front page of Hacker News, drawing 89 upvotes and a comment thread split between genuine admiration for the engineering and sharp questions about whether the results mean what they appear to mean. The number driving the attention: **12.0% pass@1 on Terminal-Bench 4.1**, up from the 5.6% baseline of the underlying Qwen model — a 2.1× improvement achieved without a single token of supervised fine-tuning, distillation, or new pretraining data.

Twelve percent sounds small until you understand what Terminal-Bench 4.1 actually measures. It is not a multiple-choice exam. It is a collection of long-horizon autonomous tasks — multi-step terminal operations, file system reasoning, tool orchestration, debugging sessions that can run for hours — designed by researchers at Stanford and the Laude Institute precisely because shorter benchmarks had stopped discriminating between models that can talk about work and models that can do work. On this benchmark, most frontier models score in single digits or low teens. Doubling a model's score in one training run, on a compute budget that would not cover a single day of frontier pretraining, is the kind of result that makes both researchers and CFOs pay attention.

What RadixArk actually demonstrated is bigger than one model's score. They showed that the infrastructure for agentic RL post-training — long sessions, asynchronous rollout, careful task curation — has matured enough that a mid-size lab can execute a frontier-class training run in under three weeks. And they did it on top of a Chinese open-weight base model, adding another data point to a pattern that has become impossible to ignore: Qwen has become the default research substrate for the world's post-training experiments.

## From Framework Lab to Model Lab

RadixArk did not appear from nowhere. The lab spent the past year building infrastructure, not models. Its flagship open-source project is **Miles**, an enterprise-grade reinforcement learning framework forked from the lightweight slime project and co-evolving with it. Miles pairs the SGLang inference engine for high-throughput rollout with Megatron-LM for scalable training, adds token-in-token-out correctness guarantees, MoE routing replay for training-inference alignment, and fault tolerance that lets a run survive the death of individual inference engines without restarting.

That infrastructure work quietly accumulated credibility across the ecosystem. By May 2026, more than 20 teams — including Silicon Valley-based NeoLabs — were using Miles for MoE model training. When DeepSeek-V4 launched on April 25, the SGLang-Miles stack provided same-day inference and RL support. When Moonshot AI shipped Kimi K3, Miles powered a Day-0 RL run on 64 GB300 GPUs that lifted the model's AIME-2024 score from 43.3% to 76.7% in twelve hours. The framework's contributors have been public about their SGLang and slime lineage, and the project was announced through the LMSYS org blog — a detail that places RadixArk squarely inside the most influential open-source inference ecosystem in AI, one that happens to be built and maintained largely by Chinese engineers.

DaisyRose-27B is RadixArk's first model release, and it functions as a proof of concept for both the training framework and the lab's consulting ambitions. The model is named, per the blog, after the founder's daughter — a naming convention that signals this is a personal project for the team, not a anonymous benchmark-chasing exercise. The training data was built in partnership with Eigent AI, a data-focused startup. The acknowledgements thank the Qwen team, the slime community, and the AgentENV and Harbor projects — the open-source agent environment infrastructure that made the training environments possible.

The choice of base model was both practical and strategic. Qwen3.8-27B is a dense 27-billion-parameter model released by Alibaba under Apache 2.0 in August 2026, with a 262,000-token native context window and multimodal input support. It is, by most accounts, the strongest openly licensed model in its size class — and more importantly, it is the model that the global research community has collectively chosen as its experimental platform. Building on Qwen meant RadixArk could focus entirely on the post-training problem rather than infrastructure for pretraining.

![Abstract visualization of reinforcement learning processes and neural network training](https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800)

*The shift from pretraining scale to post-training efficiency: labs like RadixArk are betting that the next frontier gains come from how models learn, not just how much data they ingest. (Image: Unsplash)*

## The Curation Thesis: 1,200 Tasks, Not 1 Million

The most counterintuitive decision in the DaisyRose run was the task count. RadixArk trained on just 1,200 curated long-horizon agent tasks. By comparison, frontier RL labs typically train on millions of synthetic problems. The bet was that **task quality and diversity matter more than raw volume** — that a thousand well-designed tasks covering the full breadth of autonomous operation could drive more learning than a million shallow variations of the same few patterns.

Each task was designed to require genuine multi-step agency: navigating complex file systems, writing and debugging code across multiple files, orchestrating command-line tools, recovering from errors, and maintaining coherent plans across very long sessions. The tasks were sourced and refined through RadixArk's partnership with Eigent AI, which specializes in building training environments.

The session length is where this run departed from conventional RL post-training. Standard RL for language models typically involves trajectories of a few thousand to tens of thousands of tokens. Agentic tasks — especially terminal-based ones — can require sessions of hundreds of thousands or even a million tokens. RadixArk's solution was to combine a harness that summarizes intermediate state with the mini-swe-agent framework, allowing training sessions of up to one million tokens without overwhelming the context window. This was essential for Terminal-Bench 4.1, where tasks are deliberately designed to be too long and too complex for naive approaches.

The training itself was pure reinforcement learning — no supervised fine-tuning phase, no distillation from a larger teacher. The model learned entirely through trial, error, and reward signals from the environment. This is a methodological statement as much as a practical one: RadixArk is arguing that for agentic capability, the bottleneck is not knowledge injection but interaction quality.

The configuration, in its entirety:

| Parameter | Value |
|-----------|-------|
| Base model | Qwen3.8-27B (dense, Apache 2.0) |
| Training method | Pure RL (no SFT, no distillation) |
| Task count | 1,200 curated long-horizon agent tasks |
| Training duration | 18 days |
| GPU count | 144 × NVIDIA H200 |
| Total GPU-hours | ~63,000 |
| Max session length | Up to 1M tokens (harness + summarization) |
| Rollout engine | SGLang (via Miles framework) |
| Training backend | Megatron-LM |
| Eval harness | Terminal-Bench 4.1 (8 runs per task) |
| RL framework | Miles (open-source, forked from slime) |
| Data partner | Eigent AI |
| Estimated training cost | ~$331,000 at market H200 rates |

## The Efficiency Story: 37% MFU and Why It Matters

Training cost is where RadixArk's infrastructure heritage shows most clearly. The RL training community has long accepted that reinforcement learning is inefficient — rollout generation stalls waiting for training, training stalls waiting for rollout, and GPUs sit idle in both directions. RadixArk's Miles framework attacks this with full asynchrony: rollout workers and training workers are decoupled, with configurable on- and off-policy schedules, so that generation and gradient updates proceed in parallel rather than in lockstep.

The results are striking. On identical hardware, Miles achieved 37% model FLOPs utilization (MFU) compared to 16% for an open-source Megatron-based trainer — more than double the computational efficiency. In end-to-end training speed, the Miles-powered run was twice as fast. Translated into dollars: the same training run that would have consumed the full budget on a conventional stack was completed with 57% less GPU time.

The efficiency gains scale with model size, which makes the framework relevant far beyond DaisyRose's 27 billion parameters:

| Model Architecture | Miles Speedup vs Megatron Baseline | Training Mode |
|-------------------|-----------------------------------|---------------|
| Qwen3.8-27B (dense) | 2.0× end-to-end | Full RL |
| Qwen3.6-35B-A3B (MoE) | 6.2× | Full RL |
| GLM-5.3-Flash (~300B MoE) | >10× | Full RL |
| Baseline throughput | 16.8k vs 8.3k tokens/sec | Rollout generation |

That third row deserves attention. GLM-5.3-Flash is Zhipu AI's large mixture-of-experts model, and the fact that RadixArk benchmarks its training stack against it confirms the framework's ambition: not just small-model experiments, but trillion-parameter-scale post-training. The R3 (Rollout Routing Replay) mechanism — which records expert routing decisions during rollout and replays them exactly during the training forward pass — addresses a MoE-specific instability that has plagued large-scale RL runs, where the training forward pass diverges from the rollout behavior because expert routing differs between the two.

The 57% cost reduction is not merely an engineering footnote. At a time when AI labs are spending hundreds of millions on compute, a framework that halves the cost of post-training changes the economics for every team that cannot afford frontier-scale budgets. It is, in effect, a democratization technology — and it is being open-sourced.

## What 12% Actually Means

Benchmark numbers without context are meaningless, so let us be precise about what DaisyRose-27B achieved and where the caveats lie.

On the primary target, Terminal-Bench 4.1 pass@1 measured across 8 independent runs per task, DaisyRose improved from 5.6% (Qwen3.8-27B baseline) to 12.0%. That is a 6.4 percentage point absolute gain, or 114% relative improvement. On Terminal-Bench 2.1, the model improved from 73.0% to 75.5%. The gains extended beyond terminal tasks:

| Benchmark | Qwen3.8-27B Baseline | DaisyRose-27B | Absolute Gain |
|-----------|---------------------|---------------|---------------|
| Terminal-Bench 4.1 (pass@1) | 5.6% | 12.0% | +6.4 pp |
| Terminal-Bench 2.1 | 73.0% | 75.5% | +2.5 pp |
| DeepSWE v1.1 | 42.2% | 46.2% | +4.0 pp |
| SWE-Bench Pro v2 | 91.3% | 94.7% | +3.4 pp |
| HLE (text) | 33.9% | 34.3% | +0.4 pp |
| IFBench | 79.5% | 82.4% | +2.9 pp |
| GPQA Diamond | 89.2% | 90.7% | +1.5 pp |

The pattern in these numbers tells its own story. The largest gains are on agentic and coding benchmarks — exactly the skills the training targeted. The smallest gains are on knowledge-intensive benchmarks like HLE and GPQA, which makes sense: pure RL on interaction tasks does not inject new factual knowledge. This selectivity is actually evidence that the training is doing something real rather than generically boosting all metrics — but it also defines the ceiling. RL post-training sharpens what a model already knows how to do; it does not make it smarter in the broad sense.

The cross-benchmark improvement — gains on IFBench (instruction following) and GPQA (reasoning) despite those not being training targets — partially answers the most common criticism of targeted RL: that it produces benchmark overfitting rather than genuine capability transfer. If DaisyRose had merely memorized Terminal-Bench task patterns, the IFBench and GPQA numbers would be flat or negative. They are not. The transfer is real, even if modest.

![Data and AI visualization showing neural network analytics and performance metrics](https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800)

*Benchmark results across seven evaluations show selective but genuine capability transfer: the largest gains appear on agentic tasks, with smaller but positive improvements on general reasoning. (Image: Unsplash)*

## The Open Weights Strategy and Business Model

RadixArk is not selling a product. It is selling a capability — and giving away the proof.

The three DaisyRose-27B checkpoints (BF16, FP8, NVFP4) are on Hugging Face under Apache 2.0, free for anyone to use, modify, or build on. The Miles framework is open-source on GitHub. The training methodology is documented in the blog post. By conventional startup logic, this is madness. By the logic of the AI infrastructure market, it is a customer acquisition strategy.

RadixArk's actual business is post-training as a service. The blog post makes the pitch explicitly: the lab offers to apply the same RL methodology to other teams' models and domains — legal, medical, financial, or any specialized vertical where a base model needs to become a reliable autonomous agent. The DaisyRose release is the portfolio piece. It demonstrates that RadixArk can take an off-the-shelf open-weight model and, in under three weeks, transform it into something measurably better at autonomous work — for a total compute cost under $350,000.

This business model only works because of the open-weights substrate. RadixArk does not need to spend a dollar on pretraining. Qwen3.8-27B already exists, already speaks dozens of languages, already codes, already reasons. The value-add is entirely in the post-training layer — the tasks, the environments, the RL infrastructure, and the expertise to run it all. In a world where the best base models are freely available, the competitive moat shifts from "who has the biggest GPU cluster" to "who can most efficiently teach a model to do useful work."

That is a profound shift in the AI value chain, and Chinese labs are positioned to exploit it. China produces the most open-weight models of any country. Qwen, DeepSeek, GLM, Kimi, Hunyuan, MiniMax — the global default for "I need a good base model I can legally modify" is increasingly a Chinese model. Every lab like RadixArk that builds a successful post-training service on top of that substrate strengthens the ecosystem and makes the underlying models more valuable.

## The Qwen Post-Training Wave

DaisyRose-27B is not an isolated event. It is the latest in a three-month cascade of post-training breakthroughs — all built on Qwen base models, all from different labs, all using different techniques. In September, Astra demonstrated that weight-space surgery could imbue a 4-billion-parameter Qwen variant with programming capabilities it was never explicitly trained for. In October, the GVS5H ensemble and Memdoor test-time learning work showed complementary approaches to squeezing more capability from Qwen models at inference time rather than training time.

| Project | Base Model | Technique | Headline Result | Lab Origin |
|---------|-----------|-----------|-----------------|------------|
| Astra | Qwen3-4B (variants) | Weight-space editing | Emergent programming ability without training | Research |
| GVS5H | Qwen3-8B | Model ensemble (test-time) | Comparable to 7× larger models | Research |
| Memdoor | Qwen3-8B | Test-time learning | Improved reasoning without retraining | Research |
| **DaisyRose-27B** | **Qwen3.8-27B** | **RL post-training (agentic)** | **2.1× Terminal-Bench 4.1 improvement** | **RadixArk (China)** |
| Kimi K3 Day-0 RL | Kimi K3 (MoE) | RL via Miles on GB300 | AIME-2024 43.3%→76.7% in 12h | Moonshot + Miles |

The pattern is structural, not coincidental. Open-weight models with permissive licenses attract the global research community. The community's experiments improve the models' perceived capability. The improved perception drives adoption. The adoption incentivizes further open-weight releases. It is a flywheel, and it is spinning fastest around Qwen.

For China, this represents a strategic advantage that has nothing to do with government policy and everything to do with engineering culture. Chinese labs ship open weights. They document their models. They build the tooling ecosystems — SGLang, slime, vLLM forks, Miles — that make those models practical to work with. The result is that when a RadixArk wants to build an agentic RL system, the path of least resistance runs through Hangzhou, not through Mountain View.

## Risks and Open Questions

The skepticism in the Hacker News thread is not baseless, and it deserves a fair hearing.

The most pointed criticism: Terminal-Bench 4.1 is one benchmark, and targeted RL on a narrow task distribution can produce results that do not generalize. The community sentiment tracker on the daily.dev discussion captured the split — 30% of commenters were openly skeptical, 45% mixed, and only 25% positive. The core question: is 12% on Terminal-Bench evidence of general agentic competence, or is it sophisticated benchmark optimization?

RadixArk's cross-benchmark results partially answer this, but the absolute numbers remain low. A 12% pass rate means the model fails nearly nine times out of ten on hard terminal tasks. For production deployment — the stated business goal — that is not yet viable without human oversight. The gap between "2.1× better than baseline" and "good enough to deploy" remains enormous.

There is also the reproducibility question. While the model weights and the Miles framework are open, the 1,200 curated tasks are not fully released. Without the exact training data, independent replication of the result is difficult. This is understandable from a business perspective — the task curation is arguably RadixArk's most valuable intellectual property — but it limits the scientific community's ability to verify and extend the work.

The compute concentration risk cuts both ways. RadixArk's efficiency gains are real, but 144 H200 GPUs is still a cluster that most university labs and small startups cannot access. The open-source framework lowers the cost curve, but the hardware floor remains high. Whether the 57% cost reduction is enough to make agentic RL post-training accessible to a genuinely broad range of teams is an empirical question that will be answered over the next six months.

Finally, there is the strategic question of whether post-training services are a defensible business at all. If the frontier labs — OpenAI, Anthropic, Google DeepMind — continue to absorb agentic capability into their base models through scale, the market for third-party post-training could shrink rather than grow. RadixArk is betting that the diversity of specialized domains (legal, medical, industrial) will sustain demand for custom RL runs that frontier labs will not bother to serve. It is a reasonable bet, but not a certain one.

## Social Voices

**知乎 (Zhihu) — AI researcher:**
"1,200 个任务做到这个提升，比堆 100 万个合成样本的路线有意思多了。Miles 的异步架构是真功夫，训推一致性和 R3 路由重放解决了 MoE RL 的老大难。Qwen 生态已经成为全球 RL 研究的默认基础设施，这个事实比什么都说明问题。"
*"Doing this with 1,200 tasks is far more interesting than the route of piling up a million synthetic samples. Miles' async architecture is genuine craft — training-inference alignment and R3 routing replay solve the chronic MoE RL instability. The fact that the Qwen ecosystem has become the default infrastructure for global RL research says more than anything else."*

**X (Twitter) — ML engineer:**
"12% on Terminal-Bench sounds impressive until you remember it's still an 88% failure rate. The efficiency story (57% cost cut, 37% MFU) is the real headline here. Anyone can overfit a benchmark; halving RL training cost is a contribution that compounds."
*"12% on Terminal-Bench sounds impressive until you remember it's still an 88% failure rate. The efficiency story (57% cost cut, 37% MFU) is the real headline here. Anyone can overfit a benchmark; halving RL training cost is a contribution that compounds."*

**微博 (Weibo) — tech blogger:**
"63,000 个 GPU 时，按市场价算 33 万美元。不到 250 万人民币，18 天，把一个开源模型的 agent 能力翻倍。这个性价比会让很多AI创业团队重新思考：我到底需要预训练什么？"
*"63,000 GPU-hours, roughly $331K at market rates. Under 2.5 million yuan, 18 days, doubled an open model's agent capability. This cost-performance ratio will make a lot of AI startup teams rethink: what do I actually need to pretrain?"*

**Hacker News — infrastructure engineer:**
"The skeptical take is that 1,200 tasks is a narrow distribution and Terminal-Bench 4.1 may be gameable. But the IFBench and GPQA gains — benchmarks that weren't training targets — suggest real transfer. Cautiously optimistic. Would love to see the task set released."
*"The skeptical take is that 1,200 tasks is a narrow distribution and Terminal-Bench 4.1 may be gameable. But the IFBench and GPQA gains — benchmarks that weren't training targets — suggest real transfer. Cautiously optimistic. Would love to see the task set released."*

**小红书 (Xiaohongshu) — AI practitioner:**
"看了 DaisyRose 的技术博客，最震撼的不是分数，是他们把 rollout 和 training 完全异步化的设计。GPU 利用率从 16% 拉到 37%，意味着同样预算可以多训一倍。做 agent 产品的团队真的可以研究一下 Miles 框架，开源的。"
*"Reading the DaisyRose technical blog, the most striking thing isn't the score — it's their fully asynchronous rollout-training design. Going from 16% to 37% GPU utilization means double the training for the same budget. Teams building agent products should really study the Miles framework. It's open source."*

**GitHub — open-source developer:**
"Miles has been my go-to RL framework since the slime days. Seeing it power a real model release (not just infra demos) is validating. The NVFP4 checkpoint is a nice touch for inference cost. One ask: please open-source the task curation pipeline, that's where the real moat is."
*"Miles has been my go-to RL framework since the slime days. Seeing it power a real model release (not just infra demos) is validating. The NVFP4 checkpoint is a nice touch for inference cost. One ask: please open-source the task curation pipeline, that's where the real moat is."*

---

DaisyRose-27B will not make headlines in mainstream tech press. It is a 27-billion-parameter model that scores 12% on a benchmark most people have never heard of, from a lab most people had never heard of before this week. But the measure of its significance is not the model — it is the methodology, the economics, and the ecosystem position it demonstrates.

A Chinese lab took an open-weight Chinese base model, applied open-source Chinese-built training infrastructure, spent less than the annual salary of a single San Francisco AI researcher, and produced a measurable doubling of autonomous agent capability in eighteen days. Then they published the weights, the framework, and the recipe for anyone to follow.

The next phase of AI is not about who can pretrain the largest model. It is about who can most efficiently teach models to work. RadixArk just demonstrated that this game is playable — and that the tools to play it are being built in the open, in Chinese codebases, on Chinese silicon, by Chinese engineers who are quietly rewriting the economics of intelligence.

---

**Related Articles:**

- [Qwen Weight-Space Programming: How Astra Turns a 4B Model into a Coding Engine](/blog/qwen-weight-space-programming-open-weight-laboratory-2026)
- [Tencent's Hy4-770B: Open Weights, Computer Use, and the New Battle for Enterprise AI](/blog/tencent-hy4-770b-open-weight-computer-use-finance-2026)
- [DeepSeek's Full-Stack API Play: When AI Infrastructure Becomes a Commodity](/blog/deepseek-full-stack-api-commoditization-ai-infrastructure-2026)
- [China's AI Inference Era: How 175 Trillion Tokens Reshaped the Compute Economy](/blog/china-ai-inference-era-crosses-threshold-175-trillion-tokens-2026)
