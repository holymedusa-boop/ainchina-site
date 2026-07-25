---
title: "DeepSeek V4: The Million-Token API Update That Signals China's AI Sovereignty Shift"
slug: "deepseek-v4-million-token-china-ai-sovereignty"
date: "2026-04-22"
category: "AI Infrastructure"
readTime: "17 min read"
excerpt: "DeepSeek's quiet API update on April 22 signals something far bigger than a context window expansion—it's the prelude to China's most significant AI model..."
keywords: ["DeepSeek", "Huawei", "Ascend", "NVIDIA", "funding", "investment", "API", "inference", "training", "compute"]
related: [
  "/blog/china-ai-token-surge-gen-z/",
  "/blog/china-ai-model-war-april-2026-week-changed-everything/",
  "/blog/china-ai-avatar-revolution-2026/",
  "/blog/deepseek-permanent-75-percent-api-price-cut-ai-war-2026/"
]
---
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200"




![DeepSeek AI Data Center](https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=600&fit=crop)
*DeepSeek's quiet API update on April 22 signals something far bigger than a context window expansion—it's the prelude to China's most significant AI model launch yet*

## The Quiet Update That Spoke Volumes

On April 22, 2026, Chinese developers noticed something peculiar. DeepSeek's API—previously capped at 128K context tokens—suddenly accepted prompts up to **1 million tokens**. The knowledge cutoff shifted from 2024 to May 2025. And when queried, the model began describing itself with phrases previously reserved for DeepSeek's web and mobile apps: *"I can process an entire trilogy like The Three-Body Problem in a single prompt."*

DeepSeek issued no press release. No blog post. No tweet (they rarely do). But for those watching closely, this wasn't a routine patch. It was the **calm before the storm**.

Multiple sources confirm that DeepSeek founder Liang Wenfeng has internally communicated what the market has been anticipating for months: **DeepSeek V4 will launch in late April**. Some reports suggest "this week." After five months of silence—the longest gap between major releases in DeepSeek's history—the wait is nearly over.

But V4 isn't just another incremental upgrade. It represents something far more consequential: **the first trillion-parameter frontier AI model trained and deployed entirely on domestic Chinese silicon**, breaking free from NVIDIA's CUDA ecosystem. If successful, it will mark the most significant milestone in China's pursuit of AI sovereignty since DeepSeek-R1 shook global markets in January 2025.

---

## The Road to V4: DeepSeek's Evolution

DeepSeek's journey to V4 represents one of the most rapid ascents in AI history—from a quant-fund side project to a global AI contender in under three years.

### Development Timeline

| Date | Milestone | Significance |
|------|-----------|-------------|
| **May 2023** | DeepSeek founded by Liang Wenfeng | Quant hedge fund pivot to AI research |
| **Nov 2023** | DeepSeek 67B released | First open-source model, establishes MoE expertise |
| **May 2024** | DeepSeek-V2 released | "Price killer"—10x cheaper than GPT-4 API |
| **Dec 2024** | DeepSeek-V3 released | $5.6M training cost shocks industry |
| **Jan 2025** | DeepSeek-R1 released | Reasoning model rivals o1, causes $1T market rout |
| **Apr 2026** | V4 API quietly updated to 1M tokens | Prelude to full V4 launch |
| **Apr 2026** | V4 official launch (projected) | First trillion-param model on domestic chips |

Each release has followed a pattern: **technical paper first, weights released immediately, API pricing dramatically lower than competitors**. This "open-source + low-price" strategy has forced the entire Chinese AI industry into a margin-compression race that DeepSeek, with its quant-funded war chest, is uniquely positioned to win.

### The V3-to-V4 Gap: Five Months of Silence

The five-month gap between V3 (December 2024) and V4 (April 2026) was the longest in DeepSeek's history. Industry speculation ranged from training difficulties to strategic timing. The reality was likely more complex:

| Theory | Evidence | Likelihood |
|--------|----------|------------|
| **Hardware migration challenges** | CANN/CUDA porting required massive engineering | High |
| **Waiting for Ascend 910C availability** | Huawei's new chip needed for training scale | High |
| **Strategic timing vs competitors** | Tencent, Baidu also planning April releases | Moderate |
| **Regulatory clearance** | Government review of domestic chip claims | Moderate |
| **Research perfectionism** | Liang's quant background favors rigorous validation | High |

---

## The Architecture: Trillion Parameters, Surgical Precision

### Mega MoE: Redefining Efficiency at Scale

DeepSeek V4's technical specifications, pieced together from architecture papers and leaked benchmarks, paint a picture of radical efficiency engineering:

| Specification | DeepSeek V3 | DeepSeek V4 (Projected) | Change |
|---------------|-------------|------------------------|--------|
| **Total Parameters** | 671 billion | ~1.25-1.6 trillion | +87-138% |
| **Architecture** | MoE (256 experts) | Mega MoE (thousands of experts) | Redesigned |
| **Activated Parameters per Token** | ~37 billion | ~37 billion | Maintained |
| **Context Window** | 128K tokens | 1M tokens | +8x |
| **Inference Speed vs V3** | Baseline | 35x faster | +35x |
| **Energy Consumption** | Baseline | -40% | Improved |


---

## The Great Migration: From CUDA to CANN

### Why This Matters More Than the Parameters

If V4's parameter count is impressive, its **hardware strategy is revolutionary**. For the first time, a frontier-level AI model is abandoning NVIDIA's CUDA ecosystem entirely in favor of domestic alternatives.

| Component | Previous (V3) | V4 Migration |
|-----------|--------------|--------------|
| **Training Chips** | NVIDIA H800 | Huawei Ascend 910C (10,000+ card cluster) |
| **Inference Chips** | NVIDIA H800/H20 | Huawei Ascend 950PR |
| **Software Framework** | NVIDIA CUDA | Huawei CANN |
| **Communication Protocol** | NVIDIA NCCL | Huawei HCCL |

This migration required rewriting **hundreds of thousands of lines of core code**—not just kernel-level operators, but the entire distributed training framework. This is why the five-month gap between V3 and V4 was necessary.

### The CUDA Lock-In: How NVIDIA Built a Moat

NVIDIA's dominance in AI training wasn't just about better chips—it was about software ecosystem lock-in:

| Layer | NVIDIA CUDA Stack | Huawei CANN Stack | Migration Complexity |
|-------|-------------------|-------------------|---------------------|
| **Low-level kernels** | cuDNN, cuBLAS | CANN ACL, AOPP | High (rewrite required) |
| **Communication** | NCCL | HCCL | Medium (API-compatible) |
| **Framework** | PyTorch (CUDA backend) | PyTorch (CANN backend) | Low (PyTorch abstracts) |
| **Optimization tools** | NVIDIA Nsight, TensorRT | MindStudio, ATC | High (relearn toolchain) |
| **Model parallelism** | Megatron-LM, DeepSpeed | MindSpore parallel | High (architecture differs) |

DeepSeek's migration required rewriting **hundreds of thousands of lines of core code**—not just kernel-level operators, but the entire distributed training framework.

### What DeepSeek Had to Rebuild

| Component | CUDA Implementation | CANN Replacement | Engineering Effort |
|-----------|---------------------|-----------------|-------------------|
| **Custom attention kernels** | Triton/CUDA | CANN AICore | 3–4 months |
| **FP8 training stability** | NVIDIA Transformer Engine | Custom CANN plugin | 2–3 months |
| **Pipeline scheduling (DualPipe)** | NCCL all-reduce | HCCL all-reduce | 1–2 months |
| **Memory optimization** | CUDA unified memory | CANN heterogeneous memory | 2 months |
| **Fault tolerance** | NVIDIA checkpointing | Custom checkpoint/restart | 1 month |

**Total estimated engineering**: 12–18 months of work compressed into 5 months through aggressive parallelization and Huawei engineering support.

### The Performance Reality

| Metric | NVIDIA H800 (V3) | Huawei Ascend 910C (V4 Training) | Huawei Ascend 950PR (V4 Inference) |
|--------|------------------|----------------------------------|-----------------------------------|
| **FP8 compute** | 3.9 PFLOPS | ~2.5 PFLOPS | 1 PFLOPS |
| **Memory bandwidth** | 3.35 TB/s | ~2.0 TB/s | 1.4–1.6 TB/s |
| **Interconnect** | NVLink 4.0 (900 GB/s) | HCCS (400 GB/s) | HCCS (400 GB/s) |
| **Training efficiency** | Baseline | ~60–70% of H800 | N/A |
| **Inference efficiency** | Baseline | N/A | **2.87x vs H20** |

The training gap is real: Ascend 910C delivers roughly 60–70% of H800's raw training throughput. But DeepSeek compensated through:
1. **Algorithmic efficiency**: Mega MoE architecture maintains sparse activation
2. **Software optimization**: CANN-specific kernels for common operations
3. **Scale**: 10,000+ Ascend cards versus 2,048 H800s for V3

For inference, the picture is brighter. The Ascend 950PR's specialized inference optimizations (sparse attention acceleration, KV-cache compression) deliver **2.87x better performance than H20** on DeepSeek's architecture.

### Ascend 950PR vs NVIDIA H20: The Numbers

| Metric | Huawei Ascend 950PR | NVIDIA H20 | Advantage |
|--------|---------------------|------------|-----------|
| **FP8 Compute** | 1 PFLOPS | 0.36 PFLOPS | **2.78x** |
| **FP4 Compute** | 1.56-2 PFLOPS | Not natively supported | Native support |
| **HBM Capacity** | 112-128 GB | 96 GB | +17-33% |
| **Memory Bandwidth** | 1.4-1.6 TB/s | 0.9 TB/s | **1.56-1.78x** |
| **Inference Performance** | 2.87x vs H20 baseline | Baseline | **2.87x** |
| **Pricing** | -30% vs competitors | Standard | Cost advantage |

> "If top-tier AI models are optimized to run better on domestic chips, NVIDIA's years of ecosystem moat-building will no longer be unshakeable."
> — Jensen Huang, NVIDIA CEO

### The Strategic Signal: No Early Access for NVIDIA

Perhaps the most telling detail: DeepSeek **did not provide NVIDIA or AMD with early access** to V4 for performance optimization. This breaks industry convention. Early optimization windows were granted exclusively to domestic vendors: **Huawei** and **Cambricon**.

---

## The Funding Round: Why Now?

### From Self-Funded to Venture-Backed

For years, DeepSeek has been the exception to the AI funding frenzy. While competitors raised billions, DeepSeek operated on profits from its parent company High-Flyer Quant.

Stories circulate in Chinese tech circles:
- Former China首富 Chen Tianqiao spent four hours in conversation with Liang, only to be politely declined
- Lenovo Capital sought investment in early 2024, also rebuffed
- Liang reportedly worried that external investors would interfere with DeepSeek's research direction

So when The Information reported on April 18 that DeepSeek was seeking **at least $300 million at a $10+ billion valuation**, the industry took notice. This would be DeepSeek's first external funding round ever.

| Funding Detail | Reported Figure | Notes |
|----------------|----------------|-------|
| **Target Raise** | $300M+ minimum | First external round |
| **Valuation** | $10B+ (reported) | Some sources suggest $70B RMB (~$9.6B) |
| **Use of Funds** | Compute infrastructure, talent retention | Competing in increasingly expensive AI race |
| **Investor Types** | State-backed funds, strategic corporates | Likely avoiding pure financial VCs |

However, Caijing Magazine reports that **The Information's figures may be inaccurate**, citing sources close to capital institutions. DeepSeek itself has maintained its characteristic silence.

### Why the Change of Heart?

**1. Talent Retention Crisis**

DeepSeek has experienced significant brain drain. Core researchers who departed include Guo Daya, Wei Haoran, Wang Bingxuan, Ruan Chong, and Luo Fuli.

Without equity incentives tied to a market valuation, DeepSeek struggled to offer competitive retention packages against well-funded rivals like Moonshot AI and Zhipu AI.

**2. The Compute Arms Race Escalates**

Training a trillion-parameter model on domestic chips isn't just expensive—it's **unprecedented**. The Ascend 910C cluster required for V4 training represents hundreds of millions of dollars in hardware alone.

**3. Ecosystem Building Requires Capital**

V4's Apache 2.0 open-source license means DeepSeek won't directly monetize the model through API fees. Instead, the strategy appears to be **ecosystem leverage**: making V4 the default foundation model for Chinese AI applications, then monetizing through enterprise services and cloud partnerships.

---

## The Competitive Landscape: China's AI Model Wars

### The April Release Frenzy

V4 isn't arriving in a vacuum. April 2026 has become the most intense month for Chinese AI model releases in history:

| Company | Model | Release Date | Key Feature |
|---------|-------|-------------|-------------|
| **DeepSeek** | V4 | Late April (projected) | 1T params, domestic chips, 1M context |
| **Tencent** | Hunyuan 3.0 | April (projected) | Hybrid-Mamba-Transformer architecture |
| **Baidu** | Ernie X1 | April 15 | Multimodal reasoning, 100T tokens/day |
| **Alibaba** | Qwen3.5 | April 10 | Agentic capabilities, tool use |
| **ByteDance** | Seed-Thinking-v1.5 | April 9 | 200B params, video understanding |
| **01.AI** | Yi-Ultra | April 5 | 1T+ MoE, coding specialization |

### Tencent's Counter-Move

Tencent's planned release of **Hunyuan 3.0**, reportedly scheduled for the same week as DeepSeek V4, isn't coincidence—it's coordinated competitive positioning.

Hunyuan 3.0 adopts a **Hybrid-Mamba-Transformer architecture**, which Tencent claims is the first successful application of hybrid Mamba architecture at super-large scale. Mamba architectures promise linear-time sequence processing rather than quadratic, potentially enabling even longer context windows than V4's 1M tokens.

---

## The Industry Impact: From Chips to Clouds

### The Supply Chain Ripple Effect

V4's domestic chip strategy has already set off a procurement frenzy:

| Company | Reported Order | Purpose |
|---------|---------------|---------|
| **Alibaba** | 100,000+ next-gen AI chips | Cloud AI services, Qwen inference |
| **Tencent** | 100,000+ next-gen AI chips | Hunyuan deployment, WeChat integration |
| **ByteDance** | 100,000+ next-gen AI chips | Doubao scaling, recommendation systems |
| **Baidu** | 50,000+ next-gen AI chips | Ernie cloud services, autonomous driving |

These orders—collectively representing **350,000+ next-generation AI chips**—have driven domestic chip prices up approximately 20% in recent weeks.

### The Zhengzhou Supercomputer: Infrastructure at Scale

On April 14, 2026, **Sugon (中科曙光)** unveiled China's largest AI4S computing cluster in Zhengzhou.

| Specification | Zhengzhou Cluster |
|--------------|-------------------|
| **Total AI Accelerators** | 60,000 cards |
| **Total HBM Capacity** | 3.8 PB |
| **HBM Total Bandwidth** | 108 PB/s |
| **Autonomy Level** | Full stack: chips, interconnect, platform |

The cluster went from announcement to 30,000-card operation in two months, then doubled to 60,000 cards in another two months.

> "This 60,000-card scientific intelligence cluster will have enormous推动作用 on AI-plus-scientific-research industries."
> — Cao Zhennan, Deputy Director, National Engineering Research Center for High-Performance Computers

---

## Social Media Reactions: What Chinese Users Are Saying

> "DeepSeek V3 trained for $5.6M and shocked the world. If V4 is trained entirely on domestic chips at comparable quality... the US chip ban basically backfired completely." 
> — 科技爱好者小明 (@techxiaoming), Weibo, 12K likes

> "Five months without a new model. In AI that's an eternity. But if the result is a clean break from NVIDIA dependency, the wait was worth it."
> — AI researcher comment on Zhihu, 3.4K upvotes

> "My startup has been holding off on model selection for our RAG system. If V4 launches this week with 1M context, the decision makes itself."
> — Founder, Beijing AI startup, in developer WeChat group

> "The quiet API update yesterday felt like someone switching on the lights before a concert. Everyone knows the main show is coming."
> — Developer on V2EX forum, 890 upvotes

> "Liang Wenfeng rejecting Chen Tianqiao's investment, then raising $300M five years later... the irony is delicious."
> — Finance blogger on Xiaohongshu, 45K likes

> "NVIDIA's Jensen Huang worried about domestic hardware optimization? That's like a luxury car CEO worrying about electric vehicles. Too late, the shift is happening."
> — Comment on Hacker News China mirror, 2.1K points

---

## Global Implications: The US-China Tech Divergence

### Why Washington Should Pay Attention

DeepSeek V4's domestic chip strategy represents the most concrete evidence yet that **US export controls are accelerating rather than preventing Chinese technological independence**.

| Assumption | Reality |
|------------|---------|
| **No GPUs = no AI progress** | Chinese companies optimized for available hardware, then built better domestic alternatives |
| **CUDA lock-in is unbreakable** | DeepSeek proved full-stack migration is possible with sufficient engineering investment |
| **China can't match NVIDIA performance** | Ascend 950PR outperforms H20 by 2.87x on inference |
| **Open source helps the US** | Open-weight Chinese models are being adopted globally, reducing OpenAI/Anthropic market share |

### The Global Adoption Pattern

DeepSeek's models are already among the most-used AI systems worldwide:

| Platform | DeepSeek Ranking (March 2026) |
|----------|------------------------------|
| **OpenRouter (global API)** | #4 overall, highest-ranked Chinese model |
| **a16z Web Traffic Rankings** | #4 globally |
| **QuestMobile (China MAU)** | 145 million users |
| **China AI App Tier** | Tier 1 (with ByteDance Doubao) |

---

## Risks and Challenges

### What Could Go Wrong

**1. The Migration Risk**

Full-stack hardware migration is unprecedented at this scale. If V4 underperforms on Ascend chips compared to NVIDIA-trained equivalents, DeepSeek's credibility—and China's domestic chip narrative—suffers.

**2. The Service Stability Problem**

DeepSeek experienced at least **seven major service outages** in early 2026, including a 13-hour interruption on March 29-30. The March incident—widely speculated to involve V4 grayscale testing—suggests that deploying a trillion-parameter model at scale is non-trivial.

**3. The Commercialization Question**

| Company | Primary Revenue Model | Estimated Annual Revenue |
|---------|----------------------|-------------------------|
| **Moonshot AI** | Coding assistant (Kimi Code) | $100M+ |
| **Zhipu AI** | Enterprise API, government contracts | $80M+ |
| **MiniMax** | Consumer subscriptions, overseas API | $150M+ |
| **DeepSeek** | API fees (low-margin), research reputation | Undisclosed, likely modest |

**4. The Geopolitical Backlash**

A domestically-trained frontier model that matches or exceeds Western performance could trigger additional US restrictions—not just on chips, but on software, cloud services, or even data access.

---

## Conclusion: The Sovereignty Shift Is Here

DeepSeek V4 isn't just a model launch. It's a **declaration of independence**—from NVIDIA's CUDA ecosystem, from Western chip dependency, from the assumption that frontier AI requires Western hardware.

The quiet API update on April 22 was the first visible sign: 1 million tokens of context, knowledge updated to May 2025, capabilities aligned with the web app. It was DeepSeek turning on the lights before the concert.

What comes next—the official V4 release, the benchmark numbers, the enterprise deployments—will determine whether this independence declaration holds. But the direction is clear. China is no longer content to be a fast follower in AI infrastructure. It's building its own stack, top to bottom.

For global AI observers, the implications are profound. The era of a single dominant hardware-software ecosystem is ending. In its place, we're seeing the emergence of **parallel AI universes**—one built on NVIDIA/CUDA, another on Ascend/CANN, each with its own models, tools, and optimization paths.

DeepSeek V4 is the proof of concept that the alternative path works. The question now isn't whether China can build sovereign AI—it's how quickly the rest of the world will adapt to a multi-polar AI landscape.

**The answer, like V4's context window, just got a whole lot longer.**

---

*This article was published on April 23, 2026. For updates on DeepSeek V4's official release, follow AI in China.*

---

**Related Articles:**

- [DeepSeek V4's 75% Promo Ends May 31: What Happens Next and Why the AI Pricing War Is Just Beginning](/blog/deepseek-v4-promo-ending-analysis/)
- DeepSeek V4 Pricing Strategy: How $0.14/1M Tokens Is Reshaping the Economics of Frontier AI]
- [DeepSeek V4 Unleashed: How China's Open-Source AI Champion Is Winning the Agent Era with Million-Token Superpowers](/blog/deepseek-v4-million-token-china-ai-sovereignty/)
- DeepSeek Breaks Its Vow: Inside the $3 Billion Funding Round That Shook China's AI World]
