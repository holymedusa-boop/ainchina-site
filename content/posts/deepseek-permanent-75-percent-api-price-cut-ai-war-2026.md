---
title: "DeepSeek's Permanent 75% Price Cut: The API War That Just Changed Everything"
slug: "deepseek-permanent-75-percent-api-price-cut-ai-war-2026"
date: "2026-05-25"
category: "AI Infrastructure"
excerpt: "On May 22, DeepSeek made its 2.5 discount permanent. At $0.025 per million cached tokens, the company's API pricing isn't just cheap — it's a declaration that inference cost is heading toward zero, and every competitor must now adapt or die."
metaTitle: "DeepSeek Permanent 75% API Price Cut: AI Pricing War 2026"
metaDescription: "DeepSeek makes V4-Pro API pricing permanent at 25% of original. $0.025 per million cached tokens vs GPT-4o's $72. Inside the pricing war reshaping global AI economics."
keywords: "DeepSeek API price cut, DeepSeek V4 Pro pricing, AI API pricing war, China AI cost advantage, DeepSeek permanent discount, LLM inference cost, OpenAI pricing comparison, AI token economics"
author: "AIN China"
readTime: "16 min read"
heroImage: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1200"
---

![Financial pricing data](https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80)
*DeepSeek's permanent API price reduction signals a fundamental restructuring of AI economics. Photo: Unsplash*

## The Thesis Nobody Wants to Believe

Here's a counter-intuitive claim that will make Silicon Valley uncomfortable: **DeepSeek's API pricing isn't a promotional strategy. It's a terminal diagnosis for the entire "pay-per-token" business model.**

On May 22, 2026, DeepSeek quietly updated its API documentation with a single line that will reshape global AI economics:

> *"DeepSeek-V4-Pro API pricing will permanently adjust to 1/4 of original pricing after the 2.5 discount promotion ends on May 31, 2026."*

The numbers are almost absurd:
- **Cached input**: ¥0.025 per million tokens ($0.0035)
- **Uncached input**: ¥3 per million tokens ($0.42)
- **Output**: ¥6 per million tokens ($0.83)

For context, GPT-4o charges approximately $72 for the same output volume. Claude 3.5 Sonnet charges closer to $108. DeepSeek isn't undercutting competitors by 20% or 50%. It's undercutting them by **90-95%**.

And here's what makes this different from every previous "AI price war" headline: **DeepSeek has no intention of raising prices back up.** This is the new baseline. Forever.

## What Everyone Thinks Is Happening (And Why They're Wrong)

The conventional narrative goes like this: DeepSeek is engaging in predatory pricing to grab market share, burning venture capital to undercut competitors, and will eventually need to raise prices to become profitable. It's the Uber playbook — subsidize now, monetize later.

This analysis misses three critical realities:

**First**, DeepSeek is profitable at these prices. The company's proprietary training architecture and government-backed compute infrastructure mean its marginal inference cost is genuinely an order of magnitude lower than US competitors who rely on NVIDIA GPUs at market rates.

**Second**, DeepSeek doesn't make money primarily from API calls. Like Google giving away Android to sell Search, DeepSeek is using cheap API access to build an ecosystem that generates value elsewhere — enterprise deployments, cloud partnerships, and licensing fees from companies embedding its models.

**Third**, and most importantly: **this isn't a price war. It's a cost-structure war.** DeepSeek is demonstrating that when you control the full stack — from chip design (Ascend) to model architecture (MoE) to data centers (state-backed) — inference costs collapse to levels that make Western pricing models look like legacy enterprise software from the 1990s.

## The Four Weeks That Broke AI Pricing

To understand why this permanent cut matters, you need to see the velocity of DeepSeek's pricing strategy. In exactly 28 days, the company executed four separate pricing moves:

**Table 1: DeepSeek V4-Pro Pricing Timeline (April-May 2026)**

| Date | Action | Cached Input | Uncached Input | Output | Context |
|------|--------|-------------|----------------|--------|---------|
| Apr 24 | V4-Pro launch | ¥0.10/1M | ¥12/1M | ¥24/1M | Original pricing |
| Apr 25 | 2.5 discount launch | ¥0.025/1M | ¥3/1M | ¥6/1M | Limited-time promotion |
| Apr 26 | Cache hit price cut | ¥0.025/1M | ¥3/1M | ¥6/1M | All models cache hit = 1/10 original |
| Apr 28 | Extension announced | ¥0.025/1M | ¥3/1M | ¥6/1M | Extended to May 31 |
| **May 22** | **Permanent lock-in** | **¥0.025/1M** | **¥3/1M** | **¥6/1M** | **Promotion becomes permanent** |

*Source: DeepSeek official API documentation*

Most companies adjust pricing quarterly or annually. DeepSeek moved four times in four weeks. Each move was testing market elasticity. The May 22 announcement was the conclusion: **demand elasticity is infinite at these prices.**

## The Global Pricing Comparison Nobody Can Ignore

Let's put DeepSeek's permanent pricing in direct comparison with the global market:

**Table 2: Global LLM API Output Pricing Comparison (per 1M tokens)**

| Provider | Model | Output Price (USD) | Output Price (RMB) | DeepSeek Multiple |
|----------|-------|-------------------|-------------------|-------------------|
| **DeepSeek** | **V4-Pro** | **$0.83** | **¥6** | **1x (baseline)** |
| OpenAI | GPT-4o | $10.00 | ¥72 | 12x |
| Anthropic | Claude 3.5 Sonnet | $15.00 | ¥108 | 18x |
| Google | Gemini 1.5 Pro | $5.00 | ¥36 | 6x |
| Alibaba | Qwen-Max | ~$1.50 | ~¥11 | 1.8x |
| ByteDance | Doubao-Pro | ~$0.80 | ~¥6 | 1x |
| Moonshot | Kimi k1.5 | ~$1.40 | ~¥10 | 1.7x |

*Prices as of May 2026. Exchange rate: 1 USD = 7.2 RMB. Prices approximate for Chinese models.*

The table reveals a bifurcated market. Chinese models (DeepSeek, Doubao, Qwen, Kimi) cluster in the $0.80-1.50 output range. American models cluster at $5-15. The gap isn't 20% — it's **6x to 18x**.

For a startup running 1 billion output tokens monthly, the difference between DeepSeek and Claude is $14,170 per month vs $15,000. That's not a rounding error. That's a hiring decision.

**Table 3: Monthly API Cost at 1B Output Tokens (Estimated)**

| Provider | Cost/Month | Annual Cost | vs DeepSeek Delta |
|----------|-----------|-------------|-------------------|
| DeepSeek V4-Pro | $830 | $9,960 | Baseline |
| Gemini 1.5 Pro | $5,000 | $60,000 | +$50,040/year |
| GPT-4o | $10,000 | $120,000 | +$110,040/year |
| Claude 3.5 Sonnet | $15,000 | $180,000 | +$170,040/year |

*Assumes 1 billion output tokens/month. Does not include input costs or volume discounts.*

## Why DeepSeek Can Do This (And Others Can't)

The natural question: How is this economically possible? The answer lies in DeepSeek's unique cost structure, which breaks down into three advantages:

**1. Native chip economics.** While US labs pay NVIDIA list price for H100s (approximately $25,000-40,000 per GPU), DeepSeek trains and runs inference on Huawei Ascend clusters at government-negotiated rates. The company has also developed proprietary training optimizations that reduce compute requirements by 30-50% compared to standard transformer implementations.

**2. MoE architecture efficiency.** DeepSeek-V4 uses a Mixture-of-Experts design activating only 37 billion parameters per token from a 671B total pool. This means inference costs scale with active parameters, not total parameters — a massive efficiency gain over dense models like GPT-4.

**3. State-backed infrastructure.** DeepSeek's data centers operate on subsidized electricity and land, with construction costs borne partly through government technology initiatives. The company's marginal cost per inference token is estimated at $0.001-0.002 — leaving healthy margins even at $0.0083 output pricing.

**Table 4: DeepSeek Cost Structure Advantage**

| Cost Component | US Lab (Est.) | DeepSeek (Est.) | Advantage |
|---------------|--------------|-----------------|-----------|
| GPU/Compute | $0.003/1K tokens | $0.0005/1K | 6x |
| Electricity | $0.0008/1K | $0.0002/1K | 4x |
| Data center | $0.0005/1K | $0.0001/1K | 5x |
| **Total marginal** | **$0.0043/1K** | **$0.0008/1K** | **5.4x** |

*Estimates based on industry benchmarks and public disclosures. 1K tokens = 1,000 tokens.*

## The Ecosystem Play: APIs as Loss Leaders

Here's where the analysis gets interesting. DeepSeek's API business, even at these prices, likely generates positive gross margins. But it's not where the real money is.

The company's strategic model mirrors Google's Android strategy:
- **Give away the API** to maximize developer adoption and data feedback
- **Monetize through** enterprise licensing, private deployments, and cloud partnerships
- **Capture value** from the ecosystem built on top of the model layer

In April 2026 alone, DeepSeek's enterprise deployment pipeline reportedly added 200+ corporate clients, each paying 6-7 figure annual fees for private model instances. When a bank or hospital deploys DeepSeek-V4 in a private cloud environment, the pricing is negotiated separately — and bears no resemblance to the public API rate card.

The public API isn't the product. **The public API is the marketing funnel.**

## The Competitive Response (Or Lack Thereof)

Three weeks after DeepSeek's permanent pricing announcement, the competitive landscape shows a stark divergence:

**Chinese competitors** have largely matched or undercut DeepSeek's pricing:
- ByteDance Doubao: Maintained parallel pricing at ¥0.025/1M cached input
- Alibaba Qwen: Dropped output pricing to ¥4/1M (aggressive response)
- MiniMax: Bundled API access with its consumer app ecosystem

**American competitors** have remained silent on pricing:
- OpenAI: No price changes announced; GPT-4o maintains $10/1M output
- Anthropic: Claude pricing unchanged; focusing on capability marketing
- Google: Gemini pricing stable; emphasizing context window advantages
n
This divergence suggests two different strategic calculations. Chinese labs believe inference is a commodity race to the bottom. American labs believe model capability and trust justify premium pricing.

One of these strategies will look foolish in 12 months.

## The $700B Question: Can DeepSeek Afford This?

Simultaneous with the pricing announcement, Bloomberg reported DeepSeek is negotiating a **¥700 billion ($97 billion)** funding round — which would be the largest single private financing in Chinese tech history, surpassing even Ant Group's 2014 record.

At first glance, a $97B raise and permanent price cuts seem contradictory. They aren't. The funding isn't to subsidize API losses. It's to:

1. **Build the next-generation training cluster** (reportedly 100,000+ Ascend 910C GPUs)
2. **Expand global data center footprint** (Singapore, Middle East, Europe)
3. **Fund research toward AGI** (the stated goal in recent investor presentations)
4. **Acquire strategic assets** in the AI supply chain

The pricing strategy and fundraising are complementary: cheap APIs maximize adoption and data generation, which feeds better models, which attracts more users and enterprise clients, which justifies the $97B valuation.

**Table 5: DeepSeek Funding Timeline**

| Date | Round | Amount | Valuation | Key Investors |
|------|-------|--------|-----------|---------------|
| 2023 | Seed | Undisclosed | ~$100M | High-Flyer Quant |
| 2024 | Series A | ~$200M | ~$1B | Chinese VCs |
| 2025 | Series B | ~$1B | ~$10B | State funds |
| 2026 (Feb) | Strategic | ~$3B | ~$50B | Liang Wenfeng + state |
| **2026 (May)** | **Mega-round** | **¥700B ($97B)** | **~$500B** | **National IC Fund + sovereign** |

*Sources: Bloomberg, public disclosures, industry estimates*

## What Happens When API Prices Approach Zero?

The long-term implication of DeepSeek's pricing strategy is a radical restructuring of how AI companies generate revenue. If inference becomes commoditized at near-zero marginal cost, the value capture shifts upstream and downstream:

**Upstream (model layer):** Revenue from training infrastructure, custom model development, and IP licensing
**Downstream (application layer):** Revenue from vertical-specific AI applications that leverage cheap base models
**Horizontal (platform layer):** Revenue from orchestration, agent frameworks, and multi-model management tools

This is exactly what happened in cloud computing. AWS didn't make money selling raw EC2 instances at commodity prices. It made money from the services, databases, and platform tools built on top.

**Table 6: AI Value Chain Migration (2024 → 2027E)**

| Layer | 2024 Revenue Share | 2027E Revenue Share | Shift |
|-------|-------------------|---------------------|-------|
| Model APIs | 45% | 15% | -30pp |
| Infrastructure | 20% | 25% | +5pp |
| Applications | 25% | 45% | +20pp |
| Tools/Platform | 10% | 15% | +5pp |

*Projection based on current pricing trends and cloud computing historical parallels*

## The Investor's Dilemma

For global investors, DeepSeek's permanent pricing creates a valuation paradox:

- **Bull case:** At $500B valuation with $97B in fresh capital, DeepSeek becomes the default AI infrastructure layer for 2+ billion users. API revenue is irrelevant; ecosystem licensing and enterprise deployments generate hundreds of billions in annual revenue by 2030.

- **Bear case:** Permanent price cuts signal desperation to maintain growth in a commoditizing market. The $97B raise is a last-ditch effort to outspend competitors before margins collapse entirely. Like the telecom infrastructure buildouts of the 1990s, massive capital investment precedes brutal consolidation.

The truth likely lies between these extremes. DeepSeek is both genuinely cost-advantaged and engaged in strategic ecosystem building. The question isn't whether the pricing model works — it's whether the company can capture enough value elsewhere before competitors close the cost gap.

## The Timeline Ahead

**May 31, 2026:** 2.5 discount promotion officially ends; permanent 1/4 pricing takes effect
**June 2026:** DeepSeek-V4 expected to surpass 100M daily API calls globally
**Q3 2026:** Mega-round funding expected to close; global data center expansion begins
**H2 2026:** HBM production line from Changxin Technology feeds next-gen training clusters
**2027:** DeepSeek-V5 rumored to target 10 trillion parameters with 1M token context

## Conclusion: The End of the API Gold Rush

DeepSeek's permanent price cut marks the end of the "API gold rush" phase of generative AI. The era where companies could charge $10-15 per million output tokens and generate 80% gross margins is over. Inference is becoming a utility — cheap, reliable, and invisible.

The winners in this new phase won't be the companies with the best models or the cheapest APIs. They'll be the companies that figure out how to build不可替代的价值 on top of commoditized intelligence.

DeepSeek's bet is that by owning the cheapest API layer, it becomes the default infrastructure for the entire ecosystem that gets built above it. It's the AWS playbook applied to AI.

Whether that bet pays off will define the next decade of the industry.

---

## Social Media Voices

> **知乎 (Zhihu)**: "DeepSeek这波永久降价直接把国内大模型API市场干到地板价了。豆包之前还能跟他拼一拼，现在0.025元/百万tokens，这谁顶得住？以后API调用成本基本趋近于零，真正的竞争在应用层。"
> *"DeepSeek's permanent price cut floors the domestic LLM API market. Doubao could barely compete before; at ¥0.025/1M tokens, who can withstand this? API costs are trending to zero. Real competition moves to the application layer."*

> **Twitter/X**: "DeepSeek making their 2.5 discount permanent is the most important AI business story of May. GPT-4o output costs 12x more. Claude costs 18x more. This isn't a promo. It's a statement that Western AI pricing is built on Nvidia monopoly rents."
> *"DeepSeek's permanent discount is May's most important AI business story. GPT-4o output costs 12x more; Claude 18x more. Not a promotion — it's a declaration that Western AI pricing rests on NVIDIA monopoly rents."*

> **小红书 (Xiaohongshu)**: "有没有程序员大神说说，DeepSeek这个API价格对我们做AI应用的到底是福是祸？便宜是好事，但会不会后面突然涨价或者服务不稳定？"
> *"Any developer experts — is DeepSeek's API pricing a blessing or curse for AI app builders? Cheap is good, but will they suddenly raise prices or become unstable later?"*

> **GitHub**: "The math is brutal. At $0.83/1M output tokens, DeepSeek is profitable. At $10/1M, OpenAI is wildly profitable. At $15/1M, Anthropic is profitable. The question isn't who survives at DeepSeek's prices. It's who survives when DeepSeek's competitors are forced to match them."
> *"The math is brutal. DeepSeek is profitable at $0.83/1M. OpenAI is wildly profitable at $10. Anthropic at $15. The question isn't survival at DeepSeek's prices — it's survival when competitors are forced to match."*

> **微博 (Weibo)**: "DeepSeek一边永久降价一边传700亿融资，这操作我看不懂。一边烧钱一边要钱，到底是真有钱还是真没钱？"
> *"DeepSeek permanently cuts prices while raising ¥700B. I don't get it. Burning money while asking for money — genuinely rich or genuinely broke?"*

> **Hacker News**: "Everyone focuses on the API pricing. The real story is the ¥700B raise. That's ~$100B — more than OpenAI's total raised to date. DeepSeek isn't pricing aggressively because it's desperate. It's pricing aggressively because it can afford to."
> *"Everyone obsesses over API pricing. The real story is the ¥700B raise — ~$100B, more than OpenAI's lifetime fundraising. DeepSeek prices aggressively not from desperation, but because it can afford to."*

---

*DeepSeek's Permanent 75% Price Cut: The API War That Just Changed Everything — May 25, 2026*

**Related Articles:**
- [Huawei Pangu Ultra MoE: 718B Parameters on Chinese Chips](/blog/huawei-pangu-ultra-moe-718b-chinese-silicon/)
- [China's Storage Twin Giants Race to IPO](/blog/china-storage-twin-giants-ipo-ai-compute-2026/)
- [DeepSeek V4 Pricing Strategy Analysis](/blog/deepseek-v4-pricing-strategy-analysis/)
- [China's AI Chip Renaissance: Q1 2026](/blog/china-ai-chip-renaissance-q1-2026/)
