---
title: "ByteDance's 10-Trillion-Parameter Bet: How China's Biggest AI Model Is Rewriting the Scaling Race"
date: "2026-08-20"
excerpt: "ByteDance is reportedly pre-training a 10-trillion-parameter AI model — triple the size of any Chinese model shipped and rivaling Anthropic's Mythos 5. Behind the number lies a deeper shift: a no-distillation policy, a $5.6 billion Huawei chip order, and a founder mandate to chase world-class capability over short-term wins."
keywords: ["ByteDance AI model", "10 trillion parameters", "China AI scaling", "Huawei Ascend chips", "Doubao", "Zhang Yiming", "DeepSeek", "Moonshot Kimi K3", "AI model size", "China chip independence"]
author: "AI in China Editorial"
readingTime: 16
heroImage: "/images/bytedance-10t-model-hero.jpg"
category: "AI Business"
---

On August 7, 2026, the Financial Times dropped a report that rippled through every AI lab from Beijing to San Francisco: **ByteDance is pre-training an AI model with as many as 10 trillion parameters**. That is more than three times the size of Moonshot's Kimi K3 (2.8 trillion), larger than any Chinese model ever shipped, and within striking distance of industry estimates for Anthropic's Mythos 5 (~8 trillion). For a company that has spent the past year being dismissed as a "consumer AI app" rather than a frontier lab, the message is unmistakable: ByteDance is going all-in on scale.

The leak — citing three people with knowledge of the matter — arrives at a pivotal moment. China's AI ecosystem has spent 2026 in a state of relentless acceleration: DeepSeek released V4-Flash and V4-Pro, Alibaba shipped Qwen 3.8-2.4T-A95B, Zhipu dropped GLM-5.3 with a radical post-training-only upgrade, and Moonshot open-sourced Kimi K3. Chinese models now account for **63.5% of traffic on OpenRouter**, a proxy for global developer preference. Yet ByteDance, despite owning Doubao (324 million monthly users) and the leading video generator Seedance, has been seen as lagging on frontier intelligence.

The 10-trillion-parameter project, led by Seed Foundation head Xiang Liang (项亮) and pre-training data lead Shen Ke (沈科), is ByteDance's answer. And it is not just about parameters. The company has simultaneously told its teams **not to use distillation from other companies' models** — a policy that has slowed short-term progress while keeping training fully independent. It has ordered **$5.6 billion worth of Huawei Ascend chips** (350,000 units) for 2026 delivery. And founder Zhang Yiming has reportedly pushed the team to chase "world-class model capability" rather than product feature wins.

This article unpacks what the 10T model means for China's AI race, the infrastructure bets powering it, and why the "parameter wars" of 2026 may look naive by 2027.

---

## The Leak: What We Know About ByteDance's 10T Model

The Financial Times report, published August 7, is thin on technical detail but rich on strategic implication. Three sources confirmed that ByteDance is in the pre-training phase of a model targeting up to 10 trillion parameters. Pre-training of this scale typically runs **three to six months**, and the final size is not locked until late in the process. The model could end up smaller — or larger.

Chinese tech outlet LatePost (晚点) had already reported in July that ByteDance was discussing a model above 5 trillion parameters, with Xiang Liang and Shen Ke leading the effort. The FT leak pushes that number significantly higher, suggesting internal ambition has grown as training progressed.

What makes this notable is not just the parameter count. It is **who is doing it**. ByteDance is the one major Chinese AI lab that has stayed fully closed-weight. While DeepSeek, Qwen, and Moonshot have open-sourced flagship models and built global developer ecosystems, ByteDance has kept Doubao and Seedance behind API walls. A 10T closed-weight model would give ByteDance a moat no open-weight release can match — but only if it works.

| Attribute | ByteDance 10T (Reported) | Moonshot Kimi K3 | Anthropic Mythos 5 (Est.) | DeepSeek V4-Pro |
|-----------|--------------------------|------------------|---------------------------|-----------------|
| **Parameters** | Up to 10T | 2.8T total, 32B active | ~8T (industry est.) | ~1T (MoE, undisclosed) |
| **Architecture** | Unknown | MoE, 256 experts | Unknown | MoE, undisclosed |
| **Status** | Pre-training (Aug 2026) | Shipped (Aug 2026) | In development | Shipped (Aug 2026) |
| **Weight Availability** | Closed | Open weights | Closed | Closed API |
| **Training Hardware** | Huawei Ascend + NVIDIA | Mixed cluster | Google TPU | Huawei Ascend + NVIDIA |
| **Estimated Training Cost** | $500M–$1B+ | ~$200M | ~$1B+ | ~$100M |

*Sources: Financial Times, LatePost, industry estimates. ByteDance and Anthropic figures are speculative based on reported parameter targets and comparable training costs.*

The comparison table above reveals the strategic geography. ByteDance is aiming for a parameter class that no Chinese lab has touched and that only Anthropic is believed to be approaching. If successful, it would place ByteDance in a tier of two globally — alongside Anthropic — on raw model scale, leapfropping OpenAI's GPT-5.2 (estimated at ~2-4T) and Google's Gemini 3.5 Ultra.

But parameters are a weak proxy for capability. What matters is whether the model can reason, code, and follow complex instructions at a level that justifies the cost. On that front, ByteDance has work to do.

---

## The Context: Why ByteDance Needs This

At an all-hands meeting on August 6, ByteDance CEO Liang Rubo (梁汝波) made an unusual admission: **Doubao's AI coding capability is not a strength**, and the team should look to Anthropic's Claude Code as the benchmark. For a company that has historically projected confidence — sometimes aggressively — the candor was striking. It suggested that internal metrics had confirmed what external benchmarks hinted: ByteDance's models were good at consumer chat and video generation, but not at the hard reasoning tasks that define frontier AI.

Founder Zhang Yiming (张一鸣), who stepped back from day-to-day operations but remains deeply involved in AI strategy, has reportedly pushed the team to prioritize "world-class model capability" over short-term product wins. The 10T model is the embodiment of that directive.

The challenge is cultural as much as technical. ByteDance built its empire on rapid product iteration, A/B testing, and consumer psychology — the DNA of TikTok and Douyin. Frontier AI research requires a different rhythm: longer horizons, higher failure tolerance, and a willingness to bet hundreds of millions on uncertain outcomes. The 10T project is a test of whether ByteDance can operate like a DeepMind or an Anthropic, not just a supercharged product studio.

| ByteDance AI Asset | Scale / Metric | Competitive Position |
|-------------------|----------------|---------------------|
| **Doubao MAU** | 324 million | #1 Chinese AI chatbot by users |
| **Seedance** | Leading video generator | Competitive with Kling, ahead of Runway |
| **Volcano Engine** | 14.8% China AI cloud market | #2 behind Alibaba Cloud (35.8%) |
| **Doubao API pricing** | 90% cheaper than GPT-5.2 | Among cheapest globally |
| **Model frontier ranking** | Not top-5 on most benchmarks | Behind DeepSeek, Qwen, Kimi on reasoning |
| **Daily token calls** | 50+ trillion | Highest volume globally |

*Sources: Capital Flows Research, public filings, benchmark aggregators.*

The table tells a story of volume without frontier dominance. ByteDance processes more tokens than any AI company on Earth, but those tokens are not — yet — being handled by the smartest model. The 10T bet is an attempt to close that gap in a single leap rather than through incremental improvement.

---

## The Infrastructure: $5.6 Billion in Huawei Chips

A 10-trillion-parameter model cannot be trained on wishful thinking. It requires compute — and lots of it. ByteDance has reportedly placed an order for **350,000 Huawei Ascend 910C chips** for delivery in 2026, at a total cost of roughly **$5.6 billion** (¥40 billion). The order, first reported by Techovedas and ChinaBizInsider in early August, is the largest single commitment to domestic Chinese AI silicon to date.

The context is critical. U.S. export controls have effectively choked off NVIDIA H200 shipments to China — a Commerce Department official confirmed on August 8 that actual H200 shipments are "near zero" despite licenses being issued. NVIDIA's share of the Chinese AI chip market has collapsed from roughly 95% in 2023 to negligible for new high-end shipments by mid-2026. The "subsidiary loophole" — selling through overseas affiliates — was closed by the Bureau of Industry and Security in June 2026.

ByteDance's Huawei order is not just procurement. It is a **strategic declaration of independence** from the NVIDIA ecosystem. The Ascend 910C, built on SMIC's 7nm process, delivers roughly 80% of H100 performance on paper, though real-world training efficiency varies widely. For ByteDance to train a 10T model on Ascend hardware, it will need to co-design training frameworks with Huawei — a partnership that is already underway but unproven at this scale.

| China AI Chip Supplier | H1 2026 Revenue | YoY Growth | Key Product |
|------------------------|-----------------|------------|-------------|
| **Huawei (Ascend)** | ¥40B+ (est.) | N/A (private) | Ascend 910C, 910B |
| **Cambricon (寒武纪)** | ¥6B | +108% | MLU370-X8 |
| **Moore Threads** | ¥1.65–1.75B | +135–149% | MTT S4000 |
| **DaysiZhixin (天数智芯)** | ¥3.04B (est.) | ~3x | BI-V100 |
| **Baidu Kunlunxin** | ¥2.8B (est.) | +45% | KUNLUN-AI |

*Sources: Company filings, brokerage estimates, CNBC, 新浪财经. Huawei figure estimated from reported ByteDance order and other disclosed contracts.*

The domestic chip boom is real, but it is also subsidy-driven. Beijing is planning roughly **¥2 trillion over five years** for national data centers, with over 80% of core hardware required to come from domestic suppliers. Industry projections put China's AI chip self-sufficiency at **70% by 2029**, up from 42% in 2025. The risk for domestic vendors is whether they can maintain margins and performance once the low-hanging substitution demand is satisfied.

For ByteDance, the Huawei bet is existential. If Ascend chips cannot efficiently train a 10T model, the project could face delays or cost overruns that make the $5.6 billion look cheap. If they can, ByteDance will have proven that China's domestic silicon stack can power frontier AI — a political and commercial victory with implications far beyond one model.

---

## The No-Distillation Policy: Independence at a Cost

One of the most consequential details in the ByteDance story has received less attention than the parameter count: the company has **instructed its teams not to use distillation from other companies' models**. Distillation — training a smaller model on the outputs of a larger, more capable one — is a common shortcut in the AI industry. It allows teams to rapidly improve model quality without the cost of full pre-training.

ByteDance's ban on distillation is a speed bump. Analysts say the policy has **slowed the company's progress on smaller models** while keeping its training fully independent. The logic is strategic: if ByteDance wants to claim world-class capability, it cannot be seen as derivative of OpenAI, Anthropic, or even domestic rivals like DeepSeek. The 10T model must stand on its own.

This is a high-risk, high-reward choice. In the short term, it means Doubao will likely continue to trail competitors on reasoning benchmarks. In the long term, if the 10T model delivers, ByteDance can claim that every capability was earned through original research — a powerful narrative in an era where "DeepSeek moment" has become shorthand for Chinese AI independence.

The policy also reflects Zhang Yiming's personal philosophy. Multiple reports describe him as obsessed with "first principles" research and skeptical of shortcuts. The no-distillation rule aligns with that ethos, even if it frustrates product teams under pressure to ship.

---

## The Competitive Landscape: China's Model Race in August 2026

To understand what ByteDance is up against, consider the releases that hit the market in the two weeks before the FT leak:

| Model | Release Date | Parameters | Key Feature | Benchmark Standing |
|-------|-------------|------------|-------------|-------------------|
| **DeepSeek V4-Flash** | July 31, 2026 | MoE, undisclosed | 50 AA Intelligence Index | #2 domestic model |
| **DeepSeek V4-Pro-0813** | August 13, 2026 | MoE, undisclosed | API price hike up to 12x | Premium tier launch |
| **Qwen 3.8-2.4T-A95B** | August 12, 2026 | 2.4T total | Alibaba's largest model | Top-5 global on reasoning |
| **Zhipu GLM-5.3** | August 14, 2026 | 743B total | Post-training only upgrade | +515% on Terminal-Bench 3.0 |
| **Moonshot Kimi K3** | August 2026 | 2.8T total, 32B active | Open weights | Leading open-weight model |

*Sources: Model release announcements, Artificial Analysis, benchmark aggregators.*

The pace is relentless. DeepSeek's V4-Flash scored 50 on the Artificial Analysis Intelligence Index — second among domestic models — while pricing output at $0.28 per million tokens and topping OpenRouter's weekly token rankings. The Pro-0813 release on August 13 raised API prices up to 12-fold, signaling confidence in premium demand. Qwen 3.8-2.4T-A95B pushed Alibaba back into the top tier. Zhipu's GLM-5.3 proved that radical post-training upgrades can deliver massive capability jumps without new pre-training. And Moonshot's Kimi K3 became the largest open-weight model ever shipped, cementing its reputation as China's open-source champion.

Into this environment, ByteDance is placing a bet that **scale transcends iteration**. The 10T model, if successful, would not just match these models — it would dwarf them. A 10-trillion-parameter model trained with modern architectures could theoretically absorb more knowledge, maintain longer context, and exhibit emergent behaviors that smaller models cannot replicate. The question is whether ByteDance has the data, the algorithms, and the compute discipline to make those parameters count.

---

## DeepSeek's Shadow: The Valuation Arms Race

No discussion of China's AI race is complete without DeepSeek. On August 5, Caijing reported that DeepSeek had restarted its second external funding round, planning to raise **¥50 billion (~$7.4 billion)** at a pre-money valuation of roughly **¥500 billion (~$74 billion)** — about 43% above the post-money value of its first round two months prior.

The deal math is staggering. DeepSeek's first round, which closed in June, also raised ¥50 billion at a valuation above ¥350 billion — the largest first raise in Chinese AI history. Investors include the National AI Industry Investment Fund, Tencent, CATL, NetEase, JD.com, and IDG Capital. Interest reportedly exceeded ¥100 billion, leaving ¥50 billion of demand waiting at the door.

One deal participant quoted by Caijing put it bluntly: pricing an LLM company **"is essentially an options trade, not a cash-flow-based financial model."** The option is on frontier capability, not today's revenue. DeepSeek runs on an estimated $220 million in annual revenue but charges roughly one-sixth to one-quarter the API price of comparable U.S. models.

ByteDance, by contrast, is a cash-generating behemoth. It does not need external funding to train a 10T model. But DeepSeek's valuation trajectory creates a competitive pressure that money alone cannot relieve. If DeepSeek's V4 series continues to impress — and its $7.4 billion war chest gives it room to experiment — ByteDance's closed-weight 10T model must justify its existence through superior capability, not just superior scale.

---

## The Global Dimension: OpenRouter and the 63.5% Shift

One of the most important metrics for understanding China's AI rise is rarely discussed in the mainstream press: **traffic share on OpenRouter**, a routing platform used by developers to access multiple AI models through a single API. As of mid-August 2026, Chinese models account for **63.5% of all token traffic** on the platform — a figure that would have been unthinkable two years ago.

This matters because OpenRouter traffic is a proxy for **developer preference**, not consumer usage. Developers are the architects of AI application layers; their choices determine which models get embedded into products, workflows, and enterprise systems. The 63.5% share suggests that Chinese models have crossed a threshold from "cheap alternatives" to "default choices" for a significant portion of the global developer community.

ByteDance is notably absent from this story. Doubao is not available on OpenRouter — it is a closed ecosystem. The 10T model, if it remains closed, will not contribute to this share. But it will influence it indirectly: by pushing Chinese labs to compete on frontier capability rather than just price, ByteDance raises the floor for everyone. DeepSeek, Qwen, and Moonshot cannot afford to rest on their laurels if ByteDance is training something three times larger.

---

## The Robot Games: Physical AI Meets the World Stage

While the model race captures headlines, China's AI ambition extends into the physical world. The **2026 World Humanoid Robot Games** open in Beijing on August 22 — just two days after this article's publication — with **2,056 robots from 666 teams across 16 countries** competing in 51 events over five days. China accounts for 641 teams and 1,975 robots, drawn from 157 companies and 200 universities.

The Games are more than spectacle. They are a **competitive testbed for embodied intelligence** — the integration of AI models with physical hardware. A robot that can autonomously navigate a 21-kilometer urban course, as demonstrated in the April 2026 Beijing Half Marathon, is a robot that can eventually operate in factories, warehouses, and homes.

ByteDance is not a robotics company, but the connection is direct. The same models that power Doubao's chat interface will eventually power robot brains. If ByteDance's 10T model achieves breakthroughs in reasoning and world-modeling, those capabilities will cascade into physical AI applications. The Unitree IPO — priced at ¥61 billion with DeepSeek and Tencent as strategic investors — shows that capital is already lining up behind the "robots need frontier brains" thesis.

---

## What Happens Next

The 10T model is unlikely to ship before late 2026 or early 2027. Pre-training at this scale takes months, and post-training — the reinforcement learning, safety tuning, and capability alignment that turns a raw model into a product — adds more time. ByteDance has not commented on the FT report, and the company may never confirm the parameter target publicly.

But the strategic direction is clear. ByteDance is betting that **raw scale, trained independently on domestic hardware, is the path to AI leadership**. It is a bet that echoes the early days of the transformer era, when GPT-3's 175 billion parameters shocked the world. The difference is that 10 trillion parameters, trained on Huawei chips without NVIDIA's ecosystem, represents a scale of ambition and independence that no Western lab has attempted.

The risks are equally large. If the model underperforms relative to its cost, ByteDance will have spent half a billion dollars or more on a publicity failure. If Huawei's chips cannot deliver the training efficiency needed, the project could stall. If the no-distillation policy leaves ByteDance too far behind on intermediate models, Doubao could lose users to cheaper, smarter alternatives.

But if it works — if a 10-trillion-parameter model trained on Chinese silicon matches or exceeds Anthropic's best — the implications go far beyond one company. It would prove that the U.S. chip embargo, rather than slowing China's AI progress, **accelerated it by forcing domestic innovation**. It would validate Beijing's ¥2 trillion data center plan. And it would cement China's position as a co-leader in the race to artificial general intelligence, not just a fast follower.

The parameter wars are back. This time, the battlefield is Chinese.

---

## Social Reactions

> **@AIInsider_Beijing**: "10T parameters is insane. But remember — GPT-3 had 175B and people thought THAT was impossible to train. The question isn't whether ByteDance can train it. It's whether they can make it *good*."
> 
> *【10万亿参数太疯狂了。但别忘了——GPT-3只有1750亿参数，当时人们都觉得不可能训练出来。问题不是字节能不能训出来，而是能不能让它*好用*。——AIInsider_Beijing】*

> **@DrSarahChen_ML**: "The no-distillation policy is fascinating. ByteDance is basically saying 'we'd rather be slower and original than fast and derivative.' That's either brave or foolish — we won't know which for 6 months."
> 
> *【字节的不蒸馏政策很有意思。他们基本上在说：'我们宁愿慢点但原创，也不愿快但衍生。'这要么是勇敢，要么是愚蠢——六个月后才知道。——DrSarahChen_ML】*

> **@HuaweiDev_Robert**: "$5.6B for Ascend chips. That's not just an order — that's a vote of confidence in domestic silicon. If ByteDance trains a 10T model on Huawei, every Chinese CTO will be asking why they still need NVIDIA."
> 
> *【56亿美元买昇腾芯片。这不只是订单——这是对国产芯片的信任投票。如果字节能用华为训出10万亿模型，每个中国CTO都会问：我们为什么还需要英伟达？——HuaweiDev_Robert】*

> **@DeepSeekFan_Club**: "DeepSeek trained V3 for $5.5M. ByteDance is about to spend 1000x that. Different philosophies. Let's see which one wins."
> 
> *【DeepSeek训V3花了550万美元。字节准备花1000倍。不同的哲学。看看谁赢。——DeepSeekFan_Club】*

> **@ZhangYiming_Unofficial**: "People forget Zhang Yiming wrote the recommendation algorithm that powers TikTok. He understands scale better than almost any CEO alive. If he thinks 10T is the answer, I'm not betting against him."
> 
> *【人们忘了张一鸣写了驱动TikTok的推荐算法。他比几乎所有活着的CEO都更懂规模。如果他认为10万亿是答案，我不会赌他输。——ZhangYiming_Unofficial】*

> **@EU_TechPolicy**: "A 10T Chinese model on domestic chips is exactly what EU policymakers feared. Not just tech competition — tech independence. The sanctions may have backfired."
> 
> *【一个基于国产芯片的10万亿中国模型正是欧盟政策制定者担心的。不只是技术竞争——是技术独立。制裁可能适得其反。——EU_TechPolicy】*

---

*Published August 20, 2026. Data sourced from Financial Times, LatePost, Techovedas, ChinaBizInsider, Caijing, Artificial Analysis, OpenRouter, and public filings. Parameter counts and training costs for unreleased models are estimates based on industry benchmarks and comparable projects.*
