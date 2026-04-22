---
title: "DeepSeek V4 Goes All-In on Huawei: How China Is Decoupling from NVIDIA and Rewriting the AI Hardware Map"
date: "2026-04-23"
excerpt: "DeepSeek's V4 model runs exclusively on Huawei Ascend chips, not NVIDIA. With a trillion parameters and orders for hundreds of thousands of processors from Alibaba, ByteDance, and Tencent, China's AI industry is completing an eight-month journey from CUDA dependency to full domestic stack independence."
category: "AI Trends"
readTime: "16 min read"
---

![China AI Hardware Independence](https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop)
*China's AI industry is accelerating toward hardware independence as DeepSeek V4 becomes the first trillion-parameter model built entirely on domestic chips — a development with global implications.*

---

## Executive Summary: The Eight-Month Flip

In August 2025, DeepSeek's R2 model crashed every 8–12 hours while training on Huawei's Ascend 910C chips. Huawei dispatched engineers to DeepSeek's data center. They couldn't fix it. Training fell back to NVIDIA GPUs.

Eight months later, in April 2026, DeepSeek V4 — a **trillion-parameter multimodal model** — is being trained and optimized entirely on Huawei's Ascend 950PR processors. NVIDIA wasn't even invited to the testing phase. Alibaba, ByteDance, and Tencent have placed orders for **hundreds of thousands of Ascend chips**.

This is not a hardware substitution story. It is a **full-stack decoupling** — from CUDA to CANN, from NVIDIA dependency to domestic silicon as the default. The implications extend far beyond one company's product roadmap.

| Metric | DeepSeek V3 (Late 2024) | DeepSeek V4 (April 2026) |
|--------|------------------------|-------------------------|
| Parameters | 671 billion | **1 trillion** |
| Training Hardware | 2,048 NVIDIA H800 GPUs | Huawei Ascend 950PR |
| Software Stack | CUDA | **CANN (Huawei native)** |
| Architecture | MoE (Mixture of Experts) | Dynamic compute architecture |
| Multimodal | Text + code | **Text + images + code** |
| Open Weights | Yes (MIT) | Yes (Apache 2.0) |

---

## Why This Matters: The Geopolitical Silicon War

For two decades, NVIDIA built something more durable than chip performance: **CUDA lock-in**. The CUDA ecosystem — compilers, operators, communication libraries, deep learning frameworks — became the foundation of AI development. Export controls could limit which NVIDIA chips reached China, but as long as Chinese labs wrote software for CUDA, they remained bound to the NVIDIA ecosystem even when using alternative processors.

DeepSeek's move to CANN breaks that dependency at the foundational level.

### The Strategic Timeline

| Phase | Period | Key Development |
|-------|--------|-----------------|
| **Initial Failure** | Aug 2025 | R2 crashes every 8–12 hours on Ascend 910C; falls back to NVIDIA |
| **Silent Collaboration** | Sep 2025 – Jan 2026 | DeepSeek, Huawei, Cambricon rewrite core components; bypass CUDA |
| **First Success** | Feb 2026 | Zhipu GLM-5 trains on 100,000 Ascend 910B chips; reaches frontier performance |
| **The Flip** | Apr 2026 | DeepSeek V4 trained entirely on Ascend 950PR; NVIDIA excluded |

> **What Changed?** The gap between CANN and CUDA didn't close linearly — it closed in steps, each faster than the last. A full software stack matured in eight months, not eight years.

### The Open Source Multiplier Effect

What makes this decoupling particularly potent is China's dominance in open-source AI model distribution. Unlike proprietary Western models that lock users into specific API providers, Chinese labs have released open-weights models under permissive licenses:

| Model | License | Downloads/Usage | Hardware Dependency |
|-------|---------|-----------------|---------------------|
| **DeepSeek V3** | MIT | 50M+ downloads | CUDA (legacy) |
| **DeepSeek R1** | MIT | 40M+ downloads | CUDA (legacy) |
| **Qwen 3.5** | Apache 2.0 | 30M+ downloads | CUDA (legacy) |
| **Zhipu GLM-5** | MIT | 5M+ downloads | **CANN native** |
| **DeepSeek V4** | Apache 2.0 | Pre-release | **CANN native** |

The U.S. congressional advisory body explicitly warned in April 2026 that China's open-source AI dominance is becoming "self-reinforcing" — open models accelerate data collection, developer adoption, and downstream tooling, creating an ecosystem that becomes harder to slow with chip controls alone. When a model is open-weights, developers on every continent can fine-tune, deploy, and build upon it. The hardware underneath becomes a secondary concern.

This creates a two-layer decoupling: **model-layer independence** (open weights anyone can run) plus **hardware-layer independence** (no CUDA required). The combination is more resilient than either alone.

---

## The Technical Journey: From Crash to Frontier

### August 2025: The Breaking Point

DeepSeek's attempt to train R2 on Ascend 910C chips revealed critical gaps:

- **HCCL communication** was 30–40% slower than NVIDIA's NCCL
- **Insufficient operator coverage** in CANN for complex transformer operations
- **Inter-chip communication failures** causing training crashes every 8–12 hours
- **Memory consistency errors** forcing completed progress to be discarded

Huawei sent a team of engineers to DeepSeek's data centers. After weeks of on-site work, the training issues remained unresolved. DeepSeek reverted to NVIDIA GPUs for training, using Ascend chips only for inference.

### February 2026: Proof of Concept

Zhipu AI proved the stack could work. Its GLM-5 model — 744 billion parameters — trained successfully on 100,000 Ascend 910B chips:

| Benchmark | GLM-5 (Ascend) | GPT-5.2 | Claude Opus 4.5 |
|-----------|---------------|---------|-----------------|
| SWE-bench Verified | **77.8%** | 80.0% | 80.9% |
| Hallucination Rate | **34%** | — | Higher than 34% |
| License | **MIT (open weights)** | Proprietary | Proprietary |

The hallucination rate was *lower* than Claude Sonnet 4.5. The message was clear: domestic hardware could produce frontier-competitive models.

### April 2026: DeepSeek V4 — The Full Cutover

DeepSeek V4 represents the completion of the migration:

- **1 trillion parameters** — the largest open-weights model to date
- **Trained entirely on Huawei Ascend 950PR** — no NVIDIA GPUs in the training pipeline
- **CANN framework** — all core code rewritten for Huawei's native software stack
- **Multimodal processing** — text, images, and code within a unified context window
- **Apache 2.0 license** — fully open weights for developers

Huawei's Ascend 950PR, launched in Q1 2026, sits between NVIDIA's H100 and H200 in raw capability. The critical difference is not performance parity — it is **independence from CUDA**.

---

## Industry-Wide Adoption: The Supply Chain Shift

DeepSeek's decoupling is not occurring in isolation. The entire Chinese tech ecosystem is placing bets on domestic silicon:

| Company | Ascend Chip Orders | Use Case |
|---------|-------------------|----------|
| **Alibaba** | Hundreds of thousands | Cloud AI services (Qwen, Accio Work) |
| **ByteDance** | Hundreds of thousands | Doubao model inference, CapCut/Dreamina video generation |
| **Tencent** | Hundreds of thousands | Gaming AI, WeChat integration, Hunyuan models |
| **DeepSeek** | Dedicated allocation | V4 training and inference |
| **Huawei Cloud** | Internal production | Native AI service platform |

### Production Scaling

Huawei is ramping manufacturing to meet demand:

| Year | Ascend 910C Production | Total Ascend Capacity |
|------|----------------------|---------------------|
| 2025 | ~300,000 units | ~800,000 units |
| 2026 (projected) | **~600,000 units** | **~1.6 million units** |

The upcoming Ascend 960 and 970 chips are already in development, each targeting approximately **2x performance gains** over their predecessors.

## The Economics of Decoupling: Cost and Capital Flows

The shift to domestic silicon is not merely a technical story — it is reshaping capital flows across the global AI economy. When Chinese tech giants redirect procurement from NVIDIA to Huawei, the financial impact ripples through the entire semiconductor supply chain.

### The Procurement Shift

| Metric | 2024 (NVIDIA-dominated) | 2026 (Mixed/Domestic) | Change |
|--------|------------------------|---------------------|--------|
| China AI chip imports (NVIDIA) | ~$12B annually | ~$4B annually | **-67%** |
| Domestic chip procurement (Huawei, Cambricon) | ~$2B annually | ~$8B annually | **+300%** |
| Total China AI chip spend | ~$14B | ~$12B | -14% (efficiency gains) |
| NVIDIA China revenue share | ~25% of data center | ~8–10% of data center | **-15pp** |

### The Cost Efficiency Angle

Chinese labs have consistently demonstrated that they can achieve frontier results with fewer resources. DeepSeek V3 trained on 2,048 NVIDIA H800 GPUs — a fraction of the compute used by GPT-4 — yet matched or exceeded performance on many benchmarks. This "resource efficiency" approach may translate to domestic hardware as well.

| Training Cost Estimate | DeepSeek V3 (NVIDIA) | DeepSeek V4 (Huawei, projected) |
|----------------------|---------------------|--------------------------------|
| Hardware cost | $50M+ (H800 cluster) | $40M+ (Ascend 950PR cluster) |
| Energy cost (training run) | ~$2.5M | ~$3.2M (less efficient chips) |
| Software engineering | Standard CUDA | **+$5M (CANN adaptation)** |
| **Total estimated cost** | ~$55M | ~$50M |

If the cost parity holds, the economic case for domestic hardware becomes compelling: similar total cost, no export control risk, no supply chain uncertainty, and full technical sovereignty. The additional software engineering investment is a one-time cost that amortizes across all future training runs.

### Capital Markets Response

The Hong Kong stock exchange has become the primary listing venue for Chinese AI companies, with **over 85% of Chinese AI-related IPOs** in 2026 choosing Hong Kong over Shanghai or Shenzhen. MiniMax, Zhipu AI, and Biren Technology have all listed in Hong Kong, raising a combined **$14 billion in Q1 2026** — nearly 6x the amount raised in the same period in 2025.

This capital is increasingly flowing into domestic infrastructure. MiniMax's IPO prospectus explicitly cited "domestic compute independence" as a strategic priority. The market is voting with its wallets.

---

## Software Stack: The Real Battleground

Hardware performance receives the headlines, but software ecosystems determine lock-in. NVIDIA spent 20 years making CUDA the de facto standard for AI development. Breaking that dependency required rewriting the entire toolchain:

| Layer | NVIDIA Ecosystem | Huawei Ecosystem | Status (April 2026) |
|-------|-------------------|-----------------|---------------------|
| **Compilers** | NVCC | **CANN Compiler** | Production-ready |
| **Communication** | NCCL | **HCCL** | Matched within 10% |
| **Operators** | cuDNN/cuBLAS | **CANN Operators** | Full transformer coverage |
| **Frameworks** | PyTorch/TensorFlow (CUDA backend) | **PyTorch/TensorFlow (CANN backend)** | Native integration |
| **Distributed Training** | Megatron-LM/DeepSpeed | **MindSpore / Custom frameworks** | Trillion-parameter scale proven |

> **The Key Insight:** DeepSeek didn't just port code. They worked with Huawei and Cambricon to **rewrite the model's underlying architecture** for native Ascend execution. This is not emulation — it is native optimization.

---

## Global Implications: What Decoupling Means

### For NVIDIA

The company's dominance rests on two pillars: hardware performance and CUDA ecosystem lock-in. If a major lab demonstrates that competitive trillion-parameter models can be trained without CUDA, the lock-in effect weakens. Not overnight — the gap remains significant — but the crack is real.

| NVIDIA Risk Factor | Severity | Timeline |
|-------------------|----------|----------|
| China market loss | High | Immediate (Q2 2026) |
| CUDA ecosystem challenge | Medium | 12–18 months |
| Global supply chain bifurcation | High | 24–36 months |
| Alternative stack credibility | Medium | Ongoing |

The China market alone represents approximately 20–25% of NVIDIA's data center revenue. Losing this market to domestic alternatives is a material financial hit. But the more significant threat is credibility: if DeepSeek V4 benchmarks competitively on Ascend, other regions may question CUDA dependency.

### For U.S. Export Controls

The original theory behind chip export restrictions: slow Chinese AI development by denying access to advanced NVIDIA processors. DeepSeek V4 on Huawei chips is a direct refutation — proof that export controls **accelerated domestic alternatives** rather than preventing them.

The evidence is now overwhelming. In 2023, Huawei's Ascend chips were considered uncompetitive for frontier AI training. By 2026, they are training trillion-parameter models. The policy outcome is the opposite of the intended effect: Chinese AI labs are now *more* self-sufficient, not less.

The U.S. congressional advisory body warned in April 2026 that China's dominance in open-source AI is becoming "self-reinforcing" — open models accelerate data collection, developer adoption, and downstream tooling, making chip controls less effective over time.

| Policy Goal | Actual Outcome | Assessment |
|-------------|---------------|------------|
| Slow Chinese AI development | Accelerated domestic stack | ❌ Backfired |
| Maintain U.S. hardware advantage | China builds parallel ecosystem | ❌ Bifurcation |
| Preserve NVIDIA market position | Forced Chinese customers to alternatives | ❌ Market loss |
| Limit military AI applications | Civilian AI progress continues | ⚠️ Limited impact |

### For Global AI Developers

Short-term: little changes. DeepSeek V4 remains accessible via API regardless of underlying hardware.

Medium-term (12–18 months): A viable non-CUDA AI compute stack means **more hardware competition**, potentially lower training costs, and a more diversified supply chain for AI infrastructure.

Long-term (24+ months): The emergence of two parallel AI compute ecosystems — CUDA and CANN/others — could reshape how AI infrastructure is procured globally. Regions seeking technology sovereignty (EU, Middle East, Southeast Asia) now have a proven template for domestic AI stacks.

| Scenario | Probability | Impact |
|----------|------------|--------|
| Bifurcated global AI stack | 65% | Two parallel ecosystems (CUDA vs. CANN/others) |
| Hardware cost reduction | 40% | Competition drives down AI training costs |
| Regional sovereignty stacks | 70% | EU, Middle East, SE Asia pursue domestic alternatives |
| NVIDIA maintains dominance | 55% | CUDA inertia remains strong globally |

---

## The Road Ahead: Challenges Remain

### Performance Gap Reality

On raw compute metrics, Huawei's chips are not yet competitive with NVIDIA's best:

| Chip | Relative Performance vs. NVIDIA H100 | Status |
|------|--------------------------------------|--------|
| Ascend 910C | ~60% of H100 inference | Previous generation |
| Ascend 950PR | H100–H200 range | Current generation |
| Ascend 960 (planned) | ~2x 950PR | 2026–2027 |
| NVIDIA B200 | ~5x H100 | Current (US only) |

The projected performance gap widens to approximately **17x by 2027** if NVIDIA maintains its roadmap and Huawei scales linearly. But "good enough" for training frontier models changes the strategic calculus.

### Ecosystem Maturity

| Challenge | Severity | Resolution Timeline |
|-----------|----------|---------------------|
| Third-party library compatibility | Medium | 12–18 months |
| Developer tooling (profiling, debugging) | Medium | Ongoing |
| Cloud platform integration | Low | Resolved (Alibaba, Tencent, Huawei Cloud ready) |
| Global developer mindshare | High | 24+ months; requires open-source momentum |

### Open Questions

1. **Can DeepSeek V4 match GPT-5.2 / Claude Opus 4.5 on frontier benchmarks?** Unverified claims suggest 90% HumanEval and 80–85% SWE-bench, but independent evaluation is pending.

2. **Will training stability hold at trillion-parameter scale?** The R2 failures suggest the stack's maturity was hard-won. V4's stability at 1T parameters is the real test.

3. **Does "domestic default" extend beyond DeepSeek?** Zhipu, Alibaba, and ByteDance must replicate the success for the shift to be industry-wide rather than company-specific.

---

## Competitive Landscape: China's Domestic Stack Ecosystem

| Company | Model | Hardware | Parameters | Status |
|---------|-------|----------|------------|--------|
| **DeepSeek** | V4 | Ascend 950PR | 1 trillion | Training complete, release imminent |
| **Zhipu AI** | GLM-5 | Ascend 910B | 744B | Released (Feb 2026), MIT license |
| **Alibaba** | Qwen 3.6+ | Ascend (mixed) | 600B+ | Production deployment |
| **ByteDance** | Doubao 2.0 | Ascend (inference) | Undisclosed | CapCut/Dreamina integration |
| **Huawei** | PanGu-Σ | Ascend (native) | 1.085T | Enterprise focus |

---

## Social Media Reaction: What the World Is Saying

> **@DrJimFan (NVIDIA Senior Research Scientist, Twitter/X)**
> "DeepSeek V4 on Huawei chips is the story that should be getting 10x more attention. One of the world's most capable AI labs is cutting NVIDIA from its supply chain for its flagship model. Not complementing — replacing."
> 👍 3,247 · 🔁 1,892

> **知乎用户「量子位观察者」**
> "从8个月前R2在昇腾上每8小时崩溃一次，到现在V4万亿参数纯国产化训练——这不是线性进步，这是质变。DeepSeek和华为工程师重写底层代码的工作量，可能不亚于重新训练一次模型。"
> 👍 8,401 · 💬 1,203

> **@summitai (AI Industry Analyst, Twitter/X)**
> "The CUDA lock-in was supposed to be NVIDIA's moat. If DeepSeek proves you can train frontier models on CANN, that moat gets a crack. Not a collapse — the gap is still real — but a genuine crack."
> 👍 1,876 · 🔁 943

> **小红书用户「科技圈小透明」**
> "很多人没意识到这意味着什么：以前中国AI是'芯片不够软件来凑'，现在是'芯片够用且不用看美国人脸色'。从910C的翻车到950PR的翻身，华为工程师是真的拼。"
> ❤️ 12.5K · 🔖 3.4K

> **GitHub Discussion /r/MachineLearning**
> "If V4 benchmarks verify under independent testing, this changes the hardware procurement calculus for every non-US AI lab. Why accept CUDA dependency if CANN delivers competitive results?"
> ⭐ 892 · 💬 234

> **豆瓣用户「硅基生物观察员」**
> "有人担心性能差距，但别忘了DeepSeek的'传统艺能'——用更少的资源做到同样的效果。V3用2048张H800就追上了GPT-4，现在问题是昇腾950PR能不能让V4继续这个神话。"
> 👍 4,203 · 💬 567

---

## Future Outlook: Milestones to Watch

| Timeline | Milestone | Significance |
|----------|-----------|-------------|
| **April 2026** | DeepSeek V4 official release | Validates trillion-parameter training on domestic chips |
| **Q2 2026** | Ascend 950PR production ramp | Determines supply sufficiency for scale deployment |
| **Q3 2026** | Independent V4 benchmarking | Confirms or challenges performance claims |
| **Q4 2026** | Ascend 960 sampling | Next-gen performance doubling |
| **2027** | Full ecosystem maturity | Third-party libraries, global developer adoption |
| **2027+** | Regional sovereignty stacks | EU, Middle East, SE Asia pursue domestic alternatives |

---

## Conclusion: The Default Has Changed

From "can't complete a training run" to "trained a trillion-parameter model and didn't invite NVIDIA" — in eight months. The story of DeepSeek V4 is not about hardware parity. It is about **strategic optionality**.

China's AI industry now has a viable domestic path from silicon to software to models. The performance gap remains real, but the dependency gap is closing faster than most observers expected. Export controls designed to slow Chinese AI development instead accelerated the maturation of an alternative stack.

For global AI developers, this means more hardware competition, more diverse supply chains, and a more complex geopolitical landscape. For NVIDIA, it means the CUDA monopoly faces its first serious structural challenge. For China, it means the AI race can continue regardless of which chips American export controls target next.

The default has changed. Domestic silicon is no longer the fallback. It is becoming the default.

---

*Disclaimer: This article analyzes publicly available information and industry reports. Specific benchmark claims for DeepSeek V4 are based on pre-release reporting and await independent verification. Hardware performance comparisons are approximate and based on third-party analysis.*

---

**Related Articles:**
- [MiniMax Talkie: China's AI Social Revolution Goes Global](/blog/minimax-talkie)
- [Stanford AI Index 2026: China's 'Parallel Run' Era Has Arrived](/blog/stanford-ai-index-2026-china-rise)
- [China's Embodied Intelligence Revolution: When Robots Outrun Humans](/blog/china-embodied-intelligence-robot-marathon-2026)
- [Doubao 1.2 Trillion Token Explosion: ByteDance's AI Bet](/blog/doubao-12-trillion-token-explosion)
