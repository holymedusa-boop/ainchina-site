---
title: "ByteDance Trains 10 Trillion-Parameter AI Model: China's Biggest Bet on Frontier Scale"
description: "ByteDance is pretraining a 10 trillion-parameter AI model, tripling the size of China's current largest model. Founder Zhang Yiming ordered the Seed team to avoid distillation and build genuine capability from scratch."
date: "2026-08-28"
author: "AI in China Editorial"
readTime: 15
image: "/images/bytedance-10-trillion-model-hero.png"
category: "AI Industry"
keywords: ["ByteDance", "10 trillion parameters", "AI model", "Seed team", "Zhang Yiming", "China AI", "Kimi K3", "Anthropic Mythos", "AI distillation", "AI sovereignty"]
trending: true
---

## The Announcement That Reshuffled the Deck

On August 7, 2026, the Financial Times published a report that sent ripples through the global artificial intelligence community. **ByteDance, the parent company of TikTok and Douyin, is in the early stages of pretraining an AI model with as many as 10 trillion parameters.** Three people familiar with the project confirmed the figure, placing the Chinese tech giant on a collision course with the most ambitious frontier AI projects anywhere in the world.

At 10 trillion total parameters, the model would be more than **three times larger than Moonshot AI's Kimi K3** — currently the largest publicly disclosed Chinese model at 2.8 trillion parameters — and would put ByteDance in the same weight class as **Anthropic's Mythos 5**, which industry estimates place at roughly 8 trillion parameters. ByteDance's reported project would leapfrog all of them in a single training run.

The model is being developed by **Seed**, ByteDance's AI research team led by former Google DeepMind scientist **Wu Yonghui**. The team has grown to approximately **2,000 members** spread across China and overseas locations. Sources say the model is currently in pretraining — a process that typically takes three to six months.

What makes this more than a numbers exercise is the context: ByteDance founder **Zhang Yiming** made a rare internal appearance and ordered the Seed team to **stop distilling rival models** — build genuine capability from scratch, even if it means slower progress. For a company whose Doubao AI assistant already serves **382 million monthly active users** and processes **180 trillion tokens daily**, this is a declaration of strategic intent.

---

## By the Numbers: What 10 Trillion Parameters Actually Means

Parameter counts have become the most visible shorthand for model scale. The sheer magnitude of ByteDance's reported training run demands quantification.

| Metric | ByteDance (Reported) | Moonshot Kimi K3 | DeepSeek V4-Pro | Anthropic Mythos 5 (Est.) | OpenAI GPT-5.5 (Est.) |
|---|---|---|---|---|---|
| Total Parameters | **10 trillion** | 2.8 trillion | 1.6 trillion | ~8 trillion | Undisclosed |
| Architecture | MoE (reported) | MoE | MoE | Undisclosed | Undisclosed |
| Active Parameters (Est.) | Unknown subset | ~300 billion | ~200 billion | Unknown | Unknown |
| Pretraining Duration | 3-6 months (typical) | Released July 2026 | Released May 2026 | Undisclosed | Undisclosed |
| GPUs Required (Est.) | ~30,000 | ~10,000-15,000 | ~8,000-10,000 | Unknown | Unknown |
| Team Size | ~2,000 (Seed) | ~800-1,000 | ~600-800 | ~1,500+ | ~2,000+ |
| Current Status | Pretraining | Released | Released | Released | Released |

The parameter count alone does not establish capability. A mixture-of-experts (MoE) architecture can contain a very large number of total parameters while activating only a subset for each token. Without knowing the active-parameter count, training budget, data mix, and evaluation results, the 10-trillion figure offers limited evidence about real-world performance. What it does signal is **compute commitment** — the willingness to allocate massive resources to a single training run.

Industry analysts estimate that a 10-trillion-parameter pretraining run would require approximately **30,000 high-end GPUs** operating continuously for three to six months. At current cloud GPU pricing, that represents a compute investment in the **hundreds of millions of dollars** for the pretraining phase alone.

---

## The Seed Team: 2,000 Minds, One Mission

ByteDance's Seed team has been building quietly since its formal establishment in 2023, but 2026 marked a dramatic expansion. Under Wu Yonghui's leadership, the team spans foundation model research, multimodal systems, world models, coding agents, speech intelligence, and robotics.

According to 36Kr reporting from June 2026, Seed's 2026 priorities include four major propositions:

| Priority Area | Target | Investment Level |
|---|---|---|
| World Models | Match Google Genie 3 performance by year-end | Highest capital allocation |
| Video Generation (Seedance) | Maintain global SOTA position | High |
| Coding & Agent Capabilities | Build flywheel through internal dogfooding | Second-highest |
| Doubao Commercialization | Expand from consumer to enterprise (B-side) | Strategic priority |

The world model initiative is particularly notable. ByteDance established a dedicated world model research group in early 2026, led by Fan Haoqi, a former Meta FAIR researcher. The team merged two previous VLA research groups and reportedly allocated the highest data budget of any Seed project — **3-4 times the investment of competing manufacturers** in multimodal training data.

Seed's recruiting has been aggressive, with openings across San Jose, Seattle, Beijing, Shanghai, and Singapore. However, sources suggest the pace of hiring has begun to slow, with ByteDance HR signaling that "the era of extensive high-salary recruitment is over," shifting focus toward internal talent cultivation.

---

## Zhang Yiming's No-Distillation Doctrine

The most strategically significant element of ByteDance's reported training run is the **prohibition on model distillation**.

In early August 2026, Zhang Yiming told the Seed team: **avoid distilling models from competitors, even when the shortcut would buy quick benchmark wins.** "Building real capability requires long-termism and delayed gratification, rather than using others' achievements to obtain short-term rankings," he reportedly said. The company should be willing to "sacrifice some short-term gains for long-term goals."

This matters because distillation has become a central battleground in the US-China AI competition. Chinese frontier labs have faced accusations that their rapid gains came from distilling outputs from Western models rather than building genuine capability.

| Distillation Approach | Pros | Cons |
|---|---|---|
| Training on rival model outputs | Faster capability gains; lower compute cost; quick wins | Legal/regulatory risk; provenance questions; capability ceiling |
| Independent pretraining from scratch | Full provenance control; no legal exposure; genuine ceiling | Higher compute cost; slower visible progress; larger team required |
| Hybrid (limited distillation) | Balanced cost and speed | Still carries provenance risk; harder to audit |

Zhang's directive is a costly kind of restraint. Chinese labs are shipping fast and pricing aggressively. Giving up a proven accelerator while competitors keep using it means ByteDance may spend months looking slower on public benchmarks. But there is commercial logic: ByteDance sells into Western markets through TikTok and CapCut, and a clean provenance story reduces legal exposure.

The enforcement challenge remains. Neither Zhang nor ByteDance has explained how the rule gets verified. But as a signaling device, the message is unmistakable: ByteDance is playing for the long term.

---

## The Compute Dilemma: Chips, Sanctions, and Self-Reliance

A 10-trillion-parameter training run is not just a research challenge — it is an infrastructure challenge. And for ByteDance, infrastructure is inseparable from geopolitics.

In January 2026, the Trump administration revised licensing policy for Nvidia's H200 chip, capping China-bound shipments. ByteDance has responded with a multi-pronged chip strategy:

| Chip Strategy | Partner | Status |
|---|---|---|
| Nvidia H200 procurement | Nvidia | Conditional approval; supply constrained |
| Custom ASICs | TSMC | In development; mass production 2026 |
| Custom CPU design | Qualcomm + TSMC | Design completion early 2027 |
| Domestic GPU procurement | Iluvatar CoreX, Biren, Moore Threads | Active evaluation |
| Samsung foundry partnership | Samsung Electronics | In discussion |

The company reportedly plans to spend approximately **160 billion yuan ($22 billion)** on AI infrastructure in 2026. This includes a reported plan to purchase **$14 billion worth of Nvidia H200 GPUs** if export approvals hold. ByteDance is also in discussions with Shanghai-based **Iluvatar CoreX** to acquire at least **50,000 domestic AI chips** for inference workloads.

The Qualcomm partnership is particularly notable. In June 2026, news of ByteDance's custom ASIC deal triggered a selloff in semiconductor stocks — Qualcomm dropped 8% and Marvell fell 10%. The market interpreted this as a signal that hyperscalers were moving aggressively toward custom silicon.

For ByteDance's training run, the chip question remains the biggest unknown. The Financial Times report did not specify which accelerators are being used. What is clear is that the company is building redundancy into its supply chain at a scale few organizations can match.

---

## How ByteDance's Model Stacks Up Against Global Rivals

The competitive landscape for trillion-parameter models has intensified dramatically in 2026.

| Company | Model/Project | Reported Scale | Architecture | Status |
|---|---|---|---|---|
| **ByteDance** | Unnamed (Seed) | 10 trillion params (total) | MoE (reported) | Pretraining |
| **Moonshot AI** | Kimi K3 | 2.8 trillion params | MoE | Released July 2026 |
| **DeepSeek** | V4-Pro | 1.6 trillion params | MoE | Released May 2026 |
| **Meituan** | LongCat-2.0 | 1.6 trillion params | MoE | Released March 2026 |
| **Anthropic** | Mythos 5 | ~8 trillion params (est.) | Undisclosed | Released |
| **OpenAI** | GPT-5.5 / Fable 5 | Undisclosed | Undisclosed | Released |
| **xAI** | Grok (variants) | 6-10 trillion params | Undisclosed | In training |

The comparison is inherently imperfect. Anthropic and OpenAI do not publish parameter counts, leaving estimates based on indirect evidence. MoE architectures mean total parameters overstate active compute per token. And raw scale says nothing about data quality, training methodology, or alignment techniques.

What ByteDance has that its rivals lack is **distribution**. Doubao already serves 382 million monthly active users in China. TikTok and Douyin provide a global content distribution platform that no other AI lab can match. If ByteDance pairs a frontier model with this consumer surface, it creates a flywheel effect: more users generate more data, which improves the model, which attracts more users.

The ARR from ByteDance's large model business has reportedly reached **$4 billion** as of mid-2026, with more than 90% of Feishu's new customers purchasing AI products. The monetization challenge is shifting from consumer adoption to enterprise penetration.

---

## The MoE Architecture: Why Total Parameters Don't Tell the Full Story

One of the most important caveats is the **Mixture-of-Experts (MoE)** architecture. MoE models can contain a very large number of total parameters while activating only a small subset for any given token.

In a typical MoE setup, the model is divided into multiple "expert" networks, and a gating mechanism selects which experts to activate for each input. This means a model with 10 trillion total parameters might only activate 200-500 billion parameters per token — still enormous, but far below the headline number.

| Model | Total Parameters | Est. Active Parameters | Active Ratio |
|---|---|---|---|
| ByteDance (reported) | 10 trillion | Unknown | Unknown |
| Moonshot Kimi K3 | 2.8 trillion | ~300 billion | ~10.7% |
| DeepSeek V4-Pro | 1.6 trillion | ~200 billion | ~12.5% |
| Mixtral 8x22B (reference) | 141 billion | ~39 billion | ~27.7% |

The MoE design is what makes trillion-parameter models computationally feasible. Without it, serving a 10-trillion-parameter dense model would require memory and bandwidth far beyond current hardware capabilities. But the tradeoff is complexity: MoE models are harder to train stably and more difficult to optimize for inference.

ByteDance's decision to pursue MoE at this scale suggests confidence in its training infrastructure — specifically, its **MegaScale** system, designed for 10,000-plus GPU runs. The bottom line: **10 trillion total parameters is a ceiling, not a description of capability.**

---

## From Doubao to the World: ByteDance's AI Ecosystem

ByteDance's AI strategy extends far beyond a single foundation model. The company has built a comprehensive ecosystem spanning consumer apps, enterprise services, developer tools, and creative platforms.

| Product | Category | Scale (Mid-2026) |
|---|---|---|
| Doubao (AI Assistant) | Consumer AI | 382M MAU |
| Seedance 2.0 | Video Generation | Global SOTA |
| Trae (AI Coding) | Developer Tools | Growing adoption |
| Feishu AI | Enterprise SaaS | 90%+ new customers buy AI |
| Volcano Engine | Cloud / MaaS | Expanding |
| TikTok / CapCut AI | Creative Tools | Global |

The organizational restructuring announced in July 2026 integrated the Feishu product team into the Doubao product team under **Zhao Qi**. This signals that AI now takes priority over everything at ByteDance, including seniority.

The daily token call volume for Doubao exceeded **180 trillion** as of June 2026. ByteDance's AI business reportedly generates **$4 billion ARR**, with more than 90% of Feishu's new customers purchasing AI products. The monetization challenge is shifting from consumer adoption — where Doubao dominates — to enterprise penetration.

---

## What This Means for China's AI Sovereignty Ambitions

ByteDance's training run lands in the middle of a broader Chinese push for **AI sovereignty** — the ability to develop frontier AI without dependence on foreign technology.

China's AI regulatory framework now targets **70% adoption of intelligent agents in smart terminals by 2027** and establishes mandatory filing requirements for agents in sensitive sectors. ByteDance's no-distillation stance feeds directly into this narrative, positioning the company as building "genuine" Chinese AI capability.

| Sovereignty Metric | Target/Status |
|---|---|
| Domestic AI chip adoption | Accelerating (Huawei, Biren, Iluvatar) |
| Intelligent agent penetration | 70% in smart terminals by 2027 |
| Enterprise AI deployment | 40% of enterprise apps by end 2026 |
| Trillion-parameter Chinese models | 4+ released in 2026 |
| Frontier independence from distillation | ByteDance leading |

The counter-argument is that independent pretraining at this scale is astronomically expensive. If the model underperforms relative to smaller, distilled systems, ByteDance will face internal pressure to reconsider. The organizational restructuring suggests the company is betting that enterprise AI services will justify the investment.

---

## Social Reactions: What China's Tech Community Is Saying

The news triggered immediate discussion across Chinese social media platforms:

> **@AIFrontierWatcher (Zhihu):** "10 trillion parameters is a statement, not just a spec. Zhang Yiming is telling the industry: ByteDance plays for keeps. But the real question is whether they can solve the data bottleneck."

> **@CodeMaster_Li (Weibo):** "参数多不代表能力强，但参数多加上字节的分发能力就是另一回事了。Doubao 3.8亿月活，谁有这个入口？" ("More parameters don't mean more capability, but more parameters plus ByteDance's distribution power is a different story. Doubao has 382 million MAU — who else has that gateway?")

> **@StartupFounder_Chen (X/Twitter):** "The most interesting part isn't the 10T number. It's Zhang Yiming saying no to distillation. That takes guts when competitors are shipping faster by copying. But it's also the only way to build defensible moats."

> **@ChipEngineer_Wang (Zhihu):** "30,000 GPUs for 3-6 months... that's $300-500M just for compute. This is a $1B+ bet. ByteDance can afford it, but can they afford to get it wrong?"

> **@ProductManager_Zhou (WeChat Moments):** "字节跳动的AI战略终于清晰了：不做蒸馏、自建芯片、Doubao+B端双轮驱动。这比任何参数数字都重要。" ("ByteDance's AI strategy is finally clear: no distillation, self-built chips, Doubao + B-side dual-wheel drive. This matters more than any parameter number.")

> **@Researcher_Liu (Twitter/X):** "The MoE caveat is real. If ByteDance activates 500B params per token, the effective compute is comparable to a 500B dense model — still huge, but not the headline number. We need active-param counts, not total-param marketing."

---

## Conclusion: A Bet on Scale, Independence, and Time

ByteDance's reported 10-trillion-parameter training run is best understood as a **positioning move** as much as an engineering one. The company is placing a contrarian bet at a moment when much of the industry has concluded that scale has plateaued.

Several factors will determine whether this bet pays off:

**The chip question.** Can ByteDance secure sufficient compute to complete and serve a model of this scale? The company's multi-pronged chip strategy provides redundancy, but none of these paths are certain under export controls.

**The data question.** Frontier models are increasingly data-constrained. A 10-trillion-parameter model may be severely undertrained if ByteDance cannot solve the data bottleneck.

**The no-distillation commitment.** If competitors continue to ship faster and cheaper through distillation, internal pressure to reconsider will grow. Maintaining this stance over 12-18 months will require discipline.

**The monetization question.** ByteDance's AI business generates $4 billion ARR, but the path from frontier model to enterprise revenue is not automatic. The company must prove its models justify enterprise pricing in a market where DeepSeek has established rock-bottom API prices.

If ByteDance's scale bet pays off, expect the pendulum to swing back hard toward massive pretraining runs. If it does not, the industry will likely conclude that the post-DeepSeek era of efficient, small-model innovation was the correct path. Either way, the next 6-12 months will be decisive not just for ByteDance, but for the global AI industry's understanding of what frontier scale can still deliver.

The race is on. And ByteDance just raised the stakes to 10 trillion parameters.

---

**Related Articles:**
- [Meituan's LongCat-2: The 2 Trillion Parameter Model Powering China's Domestic Chip Revolution](/posts/meituan-longcat-2-trillion-domestic-chips-china-ai-independence-2026)
- [DeepSeek V4 and the Million-Token Context Window: How China Is Redefining AI Accessibility](/posts/deepseek-v4-million-token-china-ai-sovereignty)
- [Kimi K3: Moonshot AI's Open-Weight Giant Shakes Up the Global Model Market](/posts/kimi-k3-moonshot-ai-open-weight-model-china-2026)
- [The AI Thesis Writing Phenomenon: How Chinese Students Are Using AI to Graduate](/posts/ai-thesis-writing-phenomenon-china-2026)

---

**Sources:** Financial Times (August 7, 2026); 36Kr (June 3, 2026; August 10, 2026); South China Morning Post (June 30, 2026); The Information; Reuters; ByteDance Seed public materials; QuestMobile; Ars Technica; The Decoder; eWeek.
