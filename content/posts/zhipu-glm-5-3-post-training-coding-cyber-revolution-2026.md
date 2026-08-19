---
title: "Zhipu GLM-5.3: How 30 Days of Post-Training Turned a 743B Model Into China's Coding King"
description: "Zhipu shipped GLM-5.3 on August 14, 2026 with no new base model—just extended post-training on the same 743B-parameter architecture. The result: a 515% leap on Terminal-Bench 3.0, emergent cybersecurity capabilities that found 2,436 real vulnerabilities, and a philosophical shift that challenges the 'bigger is better' orthodoxy."
keywords: ["Zhipu GLM-5.3", "Z.ai", "China AI coding model", "post-training AI", "open weight model", "Terminal-Bench", "cybersecurity AI", "GLM-5.2", "DeepSeek V4-Pro", "Chinese LLM benchmark", "AI vulnerability discovery", "MSCI China Index", "Zhipu AI stock", "coding AI model 2026", "mixture of experts"]
author: "AI in China Editorial"
date: "2026-08-20"
excerpt: "On August 14, 2026, Zhipu AI released GLM-5.3 with a radical claim: every capability gain came from post-training, not a new pretraining run. The 743B-parameter model leaped 515% on Terminal-Bench 3.0, discovered 2,436 vulnerabilities in open-source code, and forced a conversation about whether the AI frontier has shifted from scale to training strategy."
image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80"
slug: "zhipu-glm-5-3-post-training-coding-cyber-revolution-2026"
related: [
  "/blog/alibaba-qwen-3-8-max-2-4-trillion-china-ai-race-2026/",
  "/blog/deepseek-v4-million-token-china-ai-sovereignty/",
  "/blog/kimi-k3-moonshot-2-8-trillion-open-weight-model-2026/",
  "/blog/china-ai-models-dominate-global-api-traffic-token-export-2026/"
]
category: "AI Business"
---
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200"

*Photo: Lines of code on a developer's screen. Zhipu's GLM-5.3 represents a fundamental shift in how Chinese AI labs think about capability gains—post-training, not pretraining, may be the new frontier. Image: Unsplash*

---

On August 14, 2026, Zhipu AI published a sentence that reset industry assumptions: **"Scaling post-training is all we did for GLM-5.3."** No new base model. No bigger architecture. The same roughly 743-billion-parameter Mixture-of-Experts brain that powered GLM-5.2 was put through another month of post-training—and emerged with capabilities challenging the orthodoxy that bigger models are always better.

The results were striking. On Terminal-Bench 3.0, GLM-5.3 scored **28.3**—up from GLM-5.2's **4.6**, a 515% improvement. On DeepSWE v1.1, it jumped from 46.2 to 66.9. On ExploitGym, it solved 105 tasks in two hours versus GLM-5.2's 29. And in a real-world audit, the model identified **2,436 vulnerabilities across 269 open-source projects**—capabilities that emerged without any explicit security-focused training.

The release also carried institutional weight. On August 13, MSCI announced Zhipu AI would be added to the MSCI China Index—one of the three largest additions by market capitalization to the MSCI Emerging Markets Index. The juxtaposition was unmistakable: a company once on the U.S. Entity List was now being embraced by global index funds.

But GLM-5.3 arrived with gaps. Its open weights would not be released for approximately two weeks pending safety evaluation. No per-token API pricing was published. And standalone API access remained "coming soon," with the model available only through the GLM Coding Plan starting at $18 per month. For an open-weight champion, it was an unusually closed launch.

| Attribute | GLM-5.3 | GLM-5.2 | Change |
|-----------|---------|---------|--------|
| **Release Date** | Aug 14, 2026 | Jun 13, 2026 | +62 days |
| **Base Model** | Same as GLM-5.2 | 743B MoE | Unchanged |
| **Context Window** | 1M tokens | 1M tokens | Same |
| **Max Output** | 128K | 128K | Same |
| **Terminal-Bench 3.0** | **28.3** | 4.6 | **+515%** |
| **Terminal-Bench 2.1** | **88.2** | 81.0 | +8.9% |
| **DeepSWE v1.1** | **66.9** | 46.2 | +44.8% |
| **CyberGym** | **84.5%** | 77.2% | +9.5% |
| **ExploitGym (2h)** | **105 tasks** | 29 tasks | +262% |
| **ExploitGym (6h)** | **130 tasks** | 39 tasks | +233% |
| **Open Weights** | Delayed (~2 weeks) | Released (MIT) | Pending safety review |
| **Pricing Model** | Subscription only | Per-token + subscription | No token pricing published |

*Table 1: GLM-5.3 versus GLM-5.2 key specifications and benchmark deltas. All figures are vendor-reported by Zhipu AI. The Terminal-Bench 3.0 leap from 4.6 to 28.3 is the single largest benchmark jump attributed to post-training alone in the open-weight era. Data: Z.ai official release, August 14, 2026.*

---

## The Post-Training Gamble: Same Brain, New Mind

### Why Zhipu Bet on Post-Training

The AI industry has spent three years in a pretraining arms race. Each new frontier model arrived with larger architecture, more training data, and more pretraining compute. The implicit assumption: capability scales with model size.

Zhipu's GLM-5.3 launch challenges that directly. By keeping the same 743B-parameter MoE base and directing all improvement into post-training—more executable environments, more diverse long-horizon tasks, more reinforcement-learning compute—the company bets that **the marginal return on post-training dollars now exceeds the marginal return on pretraining dollars** for certain capability classes.

If Zhipu is correct, the competitive moat shifts from "who has the most GPUs for pretraining" to "who has the best post-training pipeline and the most sophisticated reinforcement-learning infrastructure." That favors labs with strong research cultures over labs with pure capital advantages.

Zhipu presents GLM-5.3 as a test of how far a model can move after pretraining ends. If a single month of post-training can produce a 515% leap on Terminal-Bench 3.0, the implication is that many existing frontier models are dramatically undertrained on the post-training side—and that the next generation of AI gains may come from smarter training, not bigger models.

| Dimension | Pretraining Scaling | Post-Training Scaling |
|-----------|--------------------|-----------------------|
| **Primary input** | Raw text corpus | Executable environments, tasks, tools |
| **Compute type** | Massive parallel forward/backward passes | RL, search, multi-turn interaction |
| **Capability focus** | Broad knowledge, language fluency | Reasoning, tool use, long-horizon tasks |
| **Cost structure** | Large upfront CAPEX | Ongoing, iteration-friendly |
| **Competitive moat** | Cluster size, data scale | Environment design, RL algorithms |
| **Verification** | Benchmarks on static tasks | Real-world task completion rates |
| **Risk** | Diminishing returns at frontier | Safety, alignment, emergent behaviors |

*Table 2: Pretraining versus post-training scaling paradigms. GLM-5.3 represents the most visible bet on post-training as the primary capability driver among Chinese frontier labs. Data: AI in China editorial analysis.*

---

## The Numbers: A 515% Leap on Terminal-Bench 3.0

### Coding Benchmarks That Demand Explanation

The headline figure from GLM-5.3's launch is almost impossible to ignore: Terminal-Bench 3.0 jumped from 4.6 to 28.3. Terminal-Bench 3.0 evaluates models on agentic coding tasks—navigating file systems, running commands, debugging code, and completing multi-step software engineering workflows. A score of 4.6 means the model succeeded on fewer than one in twenty tasks. A score of 28.3 means it succeeds on more than one in four.

The improvement is not limited to one benchmark. On DeepSWE v1.1, GLM-5.3 improved from 46.2 to 66.9. On SWE-Marathon v1.1, it jumped from 19.4 to 42.5—a 119% gain. On AutomationBench, it roughly doubled from 26.2 to 48.2.

Critically, these gains are concentrated in **agent-shaped tasks**—workflows involving terminals, tools, changing environments, and multi-step reasoning. This is where post-training pays off most visibly: the model has been trained to interact with computational environments, not just to predict the next token in static text.

| Benchmark | GLM-5.3 | GLM-5.2 | Kimi K3 | DeepSeek V4-Pro | Opus 4.8 | Fable 5 | GPT-5.6 Sol |
|-----------|---------|---------|---------|-----------------|----------|---------|-------------|
| Terminal-Bench 3.0 | **28.3** | 4.6 | 17.4 | — | 21.1 | 33.7 | 34.6 |
| Terminal-Bench 2.1 | 88.2 | 81.0 | **88.3** | 87.9 | 85.0 | 88.0 | **88.8** |
| DeepSWE v1.1 | 66.9 | 46.2 | **67.5** | 62.7 | 58.0 | 69.7 | **72.7** |
| FrontierSWE | **78.1** | 67.5 | — | — | 66.5 | **88.2** | — |
| SWE-Marathon v1.1 | 42.5 | 19.4 | **48.1** | — | **48.8** | 33.1 | 42.5 |
| Agents' Last Exam (CLI) | **28.5** | 23.8 | 27.6 | 25.7 | 25.7 | 23.8 | **28.6** |
| AutomationBench v1.0.6 | **48.2** | 26.2 | 46.7 | 43.2 | 41.0 | 46.2 | 45.8 |
| HLE w/ Tools | **62.5** | 54.7 | 59.8 | 60.0 | 57.9 | **63.9** | **64.5** |

*Table 3: GLM-5.3 coding and agentic benchmark comparison against Chinese and international competitors. Bold indicates best score in each row among models with reported figures. All GLM-5.3 figures are vendor-reported. Data: Z.ai official release, August 14, 2026. Dash indicates no reported score.*

The honest reading of these numbers is narrower than Zhipu's marketing suggests. GLM-5.3 does not beat Fable 5 or GPT-5.6 Sol on Terminal-Bench 3.0 or DeepSWE. It trails Kimi K3 on SWE-Marathon. Its strength is not universal dominance but **concentrated excellence in terminal-based and tool-using workflows**—the tasks that matter most for developer productivity.

---

## The Cyber Surprise: When Coding Models Learn to Hack

### 2,436 Vulnerabilities in 269 Projects

The most unexpected capability in GLM-5.3 is not its coding performance. It is its cybersecurity acumen. Zhipu reports that the model identified **2,436 vulnerabilities across 269 open-source projects** during security testing—a claim that transforms GLM-5.3 from a coding assistant into a potential security research tool.

The benchmark evidence supports this narrative. On CyberGym, a vulnerability-discovery benchmark, GLM-5.3 scored **84.5%**—up from GLM-5.2's 77.2%, and edging past Mythos 5 (83.8%) and GPT-5.6 Sol (83.6%). On ExploitGym, which measures the model's ability to construct working exploits within time budgets, the gains were even more dramatic: from 29 tasks to 105 tasks in a two-hour window, and from 39 to 130 tasks in six hours. On ExploitBench, it jumped from 24.4 to 54.4—a 123% improvement.

| Benchmark | GLM-5.3 | GLM-5.2 | Kimi K3 | DeepSeek V4-Pro | Opus 4.8 | Fable 5 | GPT-5.6 Sol |
|-----------|---------|---------|---------|-----------------|----------|---------|-------------|
| CyberGym | **84.5** | 77.2 | 80.0 | 83.3 | 78.1 | 83.8 | 83.6 |
| ExploitGym (2h) | **105 tasks** | 29 | 36 | — | 80 | **181** | **216** |
| ExploitGym (6h) | **130 tasks** | 39 | 70 | — | 120 | **247** | **293** |
| ExploitBench | **54.4** | 24.4 | 32.2 | — | 40.0 | **78.0** | **76.5** |

*Table 4: Cybersecurity benchmark comparison. GLM-5.3 shows the largest relative improvements in its own historical comparison, though it trails closed frontier models on offensive-security tasks. Data: Z.ai official release, August 14, 2026.*

The emergence of these capabilities is notable because Zhipu did not set out to build a cybersecurity model. The "emergent cyber capability" appeared during post-training on general coding and agentic tasks. This raises questions about the dual-use nature of frontier coding models: the same capabilities that help developers write secure code can help attackers find and exploit vulnerabilities.

For enterprise security teams, the practical response is proactive: point the same class of tool at your own codebase first. For policymakers, GLM-5.3 adds urgency to debates about AI safety, model access controls, and the responsibilities of labs whose models can autonomously discover security flaws.

---

## The Open-Weights Delay: Safety First in the Open-Weight Era

### A Departure from Zhipu's Brand

Zhipu AI built its reputation on open weights. GLM-4.5 shipped with an MIT license. GLM-5.2's weights were public within days. The company's CEO, Zhang Peng, has stated that "frontier intelligence should not belong to only a few people."

GLM-5.3 breaks that pattern. The weights are promised but delayed—approximately two weeks after launch, pending safety evaluation. The standalone API is "coming soon." Access is currently limited to the GLM Coding Plan and ZCode harness.

This delay is not arbitrary. A model that can autonomously discover 2,436 vulnerabilities is not a neutral tool. Zhipu's decision to stage the release reflects a growing recognition that **capability and safety are no longer separable concerns**.

The delay also has commercial implications. GLM-5.3 cannot currently be independently verified. No researcher outside Zhipu can download the weights or run their own benchmarks. This means all performance claims exist in a verification gap that will persist until the weights are released.

| Release Stage | GLM-5.2 (Jun 2026) | GLM-5.3 (Aug 2026) |
|---------------|--------------------|--------------------|
| Launch day API | Yes | Subscription-only |
| Standalone API | Available | "Coming soon" |
| Open weights | Released within days | ~2 weeks delayed |
| License | MIT | Not announced |
| Safety review | Minimal | Explicit staging |
| Per-token pricing | Published ($0.80/$2.56) | Not published |

*Table 5: Release pattern comparison between GLM-5.2 and GLM-5.3. The shift toward staged release with safety evaluation represents a meaningful departure from Zhipu's previously open-by-default approach. Data: Z.ai documentation, AI in China editorial analysis.*

---

## The Pricing Vacuum: Why Zhipu Won't Quote Per-Token Rates

### Subscription-Only Access and the Missing Price List

One of the strangest aspects of GLM-5.3's launch is the absence of per-token API pricing. Zhipu's published price list contains no GLM-5.3 row at all.

What exists is the GLM Coding Plan—a subscription starting at **$18 per month** that includes GLM-5.3 access across all tiers. Existing subscribers get the new model automatically. But for developers who want pay-per-use pricing, or enterprises that need predictable per-token budgeting, the missing rate card creates friction.

This may be temporary—Zhipu may be gathering usage data before setting token rates. Or it may reflect a shift toward SaaS-style recurring revenue, valuable for a public company managing investor expectations.

The contrast with DeepSeek is instructive. DeepSeek's V4-Pro, launched 24 hours before GLM-5.3, published clear per-token pricing immediately: $0.435 input / $0.87 output per million tokens, with peak-hour rates rising to $1.32 and $3.96. DeepSeek's transparency has been core to its brand; Zhipu's opacity is a notable divergence.

| Pricing Model | GLM-5.3 | GLM-5.2 | DeepSeek V4-Pro | Kimi K3 | Qwen 3.8-Max |
|---------------|---------|---------|-----------------|---------|--------------|
| **Input ($/M tokens)** | Not published | $0.80 | $0.435 (off-peak) / $1.32 (peak) | $3.00 | $2.00 |
| **Output ($/M tokens)** | Not published | $2.56 | $0.87 (off-peak) / $3.96 (peak) | $15.00 | $6.00 |
| **Subscription** | GLM Coding Plan from $18/mo | Available | Not primary | Available | Token Plan |
| **Standalone API** | Coming soon | Live | Live | Live | Live |
| **Open weights** | Delayed | MIT license | MIT license | Promised | Promised |

*Table 6: Pricing and access model comparison for Chinese frontier coding models, August 2026. GLM-5.3's lack of published per-token pricing is an outlier among its competitors. Data: Official vendor documentation.*

---

## The 24-Hour Showdown: GLM-5.3 vs. DeepSeek V4-Pro

### Two Philosophies, One Crown

The most dramatic subplot is timing. DeepSeek released V4-Pro-0813 on **August 13, 2026**. Zhipu released GLM-5.3 on **August 14, 2026**. Two Chinese open-weight champions shipped competing models within 24 hours, both claiming the coding crown—and using entirely different philosophies.

DeepSeek V4-Pro is a **new architecture**: a 1.6-trillion-parameter MoE model with 49 billion active parameters, built from scratch and MIT-licensed. Its headline: **96.40% on SWE-bench Verified**—the highest open-weight result.

GLM-5.3 is the **opposite approach**: the same 743B-parameter base as GLM-5.2, with all gains from post-training. It does not lead on SWE-bench Verified (Zhipu has not published a comparable figure). Its strength is in terminal-based and agentic workflows where post-training on executable environments pays the highest dividends.

| Attribute | DeepSeek V4-Pro | Zhipu GLM-5.3 |
|-----------|-----------------|---------------|
| **Release Date** | Aug 13, 2026 | Aug 14, 2026 |
| **Architecture** | 1.6T MoE (new) | 743B MoE (same as 5.2) |
| **Active Params** | ~49B per token | ~40B per token |
| **Capability Driver** | New pretraining + post-training | Post-training only |
| **SWE-bench Verified** | **96.40%** (claimed) | Not published |
| **Terminal-Bench 3.0** | Not published | **28.3** |
| **CyberGym** | 83.3% | **84.5%** |
| **Open Weights** | **Released (MIT)** | Delayed (~2 weeks) |
| **Per-Token Pricing** | Published ($0.435-$3.96) | Not published |
| **Philosophy** | Scale + architecture innovation | Post-training optimization |

*Table 7: Head-to-head comparison of the two models that defined China's coding AI frontier across 24 hours in mid-August 2026. Data: Official vendor releases, August 13-14, 2026.*

The divergence is healthy for the ecosystem. Rather than converging on a single optimal approach, Chinese labs are exploring different paths to capability. DeepSeek tests whether new architectures can push the frontier. Zhipu tests whether smarter training on existing architectures can close the gap. Both cannot be fully right—or fully wrong. The most likely outcome is that frontier progress requires both: bigger, better architectures AND more sophisticated post-training regimes.

---

## MSCI Validation: From Entity List to Index Inclusion

### The Geopolitical Irony

The institutional context adds layers of irony. On **January 16, 2025**, the U.S. Commerce Department added Zhipu AI to the Entity List, alleging aid to China's military AI modernization. Zhipu's response: "We do not rely on U.S. technology."

Nineteen months later, on **August 13, 2026**, MSCI announced Zhipu would be added to the MSCI China Index—one of the three largest additions by market capitalization to the MSCI Emerging Markets Index. The inclusion takes effect August 31, prompting global passive funds to buy Zhipu shares during quarterly rebalancing.

The juxtaposition is stark: a company blacklisted by the U.S. government is now being bought by global institutional investors. The MSCI inclusion reflects market reality—Zhipu's market capitalization had grown to a size where inclusion became inevitable, regardless of geopolitics.

| Milestone | Date | Significance |
|-----------|------|------------|
| **Founded** | 2019 | Spun out from Tsinghua University |
| **Saudi-led round** | May 2024 | $400M at ~$3B valuation (Prosperity7 Ventures) |
| **Entity List addition** | Jan 16, 2025 | U.S. Commerce Department blacklists Zhipu |
| **GLM-4.5 open release** | Jul 28, 2025 | 355B MoE, MIT license, #1 open model at launch |
| **Hong Kong IPO** | Jan 8, 2026 | Ticker 2513, raised ~$555M |
| **Rebrand to Z.AI** | Jul 17, 2026 | Listed name changed to Z.AI Co., Ltd. |
| **Share placement** | Jul 13, 2026 | ~$4B H-share placement completed |
| **MSCI inclusion** | Aug 13, 2026 | Added to MSCI China Index, effective Aug 31 |
| **GLM-5.3 launch** | Aug 14, 2026 | Post-training-only coding model |

*Table 8: Zhipu AI key milestones through August 2026. The trajectory from university spinout to MSCI index constituent in seven years represents one of the fastest ascents in Chinese AI. Data: Public filings, MSCI announcements, Zhipu disclosures.*

The market context is also relevant. Zhipu's Hong Kong-listed stock had fallen approximately **67% from its post-listing peak** as of early August 2026, as investors weighed competition from Kimi K3, Qwen 3.8-Max, and DeepSeek's aggressive pricing. The GLM-5.3 launch and MSCI inclusion represent a potential narrative reset—if the model's capabilities are independently verified.

---

## What Post-Training Proves About the Future of AI

### The End of the Scale-First Era?

GLM-5.3's most lasting contribution may not be its benchmark scores but its philosophical implications. If a month of post-training on an existing 743B-parameter model can produce a 515% leap on Terminal-Bench 3.0 and emergent cybersecurity capabilities, the industry must ask: **How much capability is currently locked inside models that are simply undertrained on the post-training side?**

The implications extend across the stack. For model developers, post-training may offer higher marginal returns than pretraining for agentic and tool-using tasks. Labs should invest in environment design and RL infrastructure—not just bigger clusters. For enterprises, the model you deployed six months ago may be significantly more capable if the vendor has invested in post-training updates. For investors, the competitive moat may be shifting from capital to research culture. And for policymakers, models with emergent cybersecurity capabilities require updated regulatory frameworks designed for a post-training-centric world.

| Scenario | Independent Verification | Market Impact | Probability |
|----------|-------------------------|---------------|-------------|
| **Bull**: 85%+ claims verified | Establishes post-training as primary frontier strategy | Zhipu +20%, sector reprices toward training-quality plays | 25% |
| **Base**: 65-85% claims verified | Solid but not revolutionary; post-training gains are real but bounded | Zhipu +5-10%, validates current narrative | 55% |
| **Bear**: <65% claims verified | Significant credibility damage; questions about vendor benchmarks | Zhipu -10%, benefits DeepSeek and Kimi | 20% |

*Table 9: GLM-5.3 verification scenarios. The base case assumes solid but not transformative performance, consistent with the pattern of post-training gains observed across the industry. Data: AI in China editorial modeling.*

---

## Social Comments: What Chinese Developers Are Saying

> "GLM-5.3的Terminal-Bench从4.6跳到28.3，这不是升级，这是换了个模型。post-training能做到这个程度，说明之前所有的pretraining都是在浪费算力。" ("GLM-5.3 jumping from 4.6 to 28.3 on Terminal-Bench isn't an upgrade—it's a different model. If post-training can do this, it means all that pretraining was a waste of compute.")
> — **Zhihu user @AI架构师老李**, 22,000 upvotes

> "Zhipu说weights要延迟两周发布，因为安全评估。一个能找出2436个漏洞的模型，确实得小心点。但问题是，API已经开放了，有API就能做坏事，延迟weights有意义吗？" ("Zhipu says weights delayed two weeks for safety review. A model that can find 2,436 vulnerabilities definitely needs caution. But the API is already open—if you can do harm through API, what's the point of delaying weights?")
> — **V2EX user @安全研究员**, 4,800 upvotes

> "DeepSeek V4-Pro和GLM-5.3同一天发布，一个靠新架构，一个靠post-training。这是两条路线的对决，我赌post-training赢，因为算力越来越贵，pretraining成本太高。" ("DeepSeek V4-Pro and GLM-5.3 released within 24 hours—one via new architecture, one via post-training. This is a showdown of two paths. I bet on post-training winning, because compute is getting more expensive and pretraining costs too much.")
> — **GitHub user @training-paradigm**, 3,200 stars

> "GLM-5.3没有公布token价格，只有$18一个月的订阅。这对小开发者不友好，我不想订阅一整年才发现模型不适合我的场景。Zhipu在搞什么？" ("GLM-5.3 didn't publish token prices, only an $18/month subscription. This is unfriendly to small developers. I don't want to subscribe for a year only to find the model doesn't fit my use case. What is Zhipu thinking?")
> — **Twitter/X user @独立开发者小陈**, 6,500 retweets

> "MSCI把Zhipu纳入指数，这意味着全球被动基金必须买Zhipu股票。一个被美国政府列入实体清单的公司，被MSCI强制全球基金买入，这就是资本市场的黑色幽默。" ("MSCI adding Zhipu to the index means global passive funds must buy Zhipu stock. A company on the U.S. Entity List being forced into global fund portfolios by MSCI—this is capital markets' dark humor.")
> — **Weibo user @港股观察员**, 38,000 retweets

> "作为用GLM-5.2跑了半年CI/CD的工程师，GLM-5.3的Agent能力确实肉眼可见提升。AutomationBench翻倍不是吹的，我的自动化测试脚本现在能处理更复杂的边缘情况了。" ("As an engineer who's run GLM-5.2 in CI/CD for six months, GLM-5.3's agent capabilities are visibly better. The AutomationBench doubling isn't hype—my automated test scripts now handle much more complex edge cases.")
> — **Reddit r/LocalLLaMA user @beijing-devops**, 2,400 upvotes

---

## Related Articles

- [Alibaba's Qwen 3.8-Max: The 2.4 Trillion-Parameter Gamble That Just Reset China's AI Race](/blog/alibaba-qwen-3-8-max-2-4-trillion-china-ai-race-2026/)
- [DeepSeek V4: The Million-Token Model and China's AI Sovereignty Push](/blog/deepseek-v4-million-token-china-ai-sovereignty/)
- [Kimi K3 and the 2.8 Trillion-Parameter Question: Moonshot's Open-Weight Gambit](/blog/kimi-k3-moonshot-2-8-trillion-open-weight-model-2026/)
- [China's AI Models Dominate Global API Traffic: The Token Export Revolution](/blog/china-ai-models-dominate-global-api-traffic-token-export-2026/)

---

*Published August 20, 2026. Data current as of August 19, 2026. All GLM-5.3 benchmark figures are vendor-reported by Zhipu AI and are marked as such; independent verification is pending pending weight release. Financial figures are editorial estimates unless sourced from official company disclosures. MSCI index changes take effect August 31, 2026.*
