---
title: "Sand.ai: The Open-Source Video AI Startup That Bet Against Diffusion — and Just Raised $200 Million"
date: "2026-11-09"
excerpt: "While the world debated whether Google Veo or OpenAI Sora would own the future of AI video, a Beijing startup quietly built the largest open-source video generation model ever released. Sand.ai's MAGI-2 runs 114 billion parameters on a mixture-of-experts architecture, generates a 10-second 1080p video for 0.5 yuan, and just helped the company close a $200 million round at unicorn valuation. Here is how a former Microsoft Research Asia scientist's contrarian bet on autoregressive video is reshaping the economics of AI-generated media."
tags: ["China AI", "Sand.ai", "MAGI-2", "Video Generation", "Open Source", "Unicorn", "Autoregressive Models", "MoE", "Generative Media", "Cao Yue", "VidMuse", "AI Video", "Chinese AI", "Foundation Models"]
image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&q=80"
heroImage: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200"
readingTime: 16
---

A 10-second, 1080p AI-generated video costs about 5 yuan — roughly 70 US cents — on a mainstream commercial platform in 2026. On Sand.ai's distilled MAGI-2 model, the same clip costs **0.5 yuan**. That is not a promotional price. It is a structural cost advantage, baked into an architecture that uses roughly 6 billion active parameters per generation instead of the hundreds of billions that diffusion-based competitors deploy.

On November 5, that cost advantage helped the Beijing-based startup close a **$200 million Series A+ round**, co-led by Cornerstone Capital and Shenzhen-listed edge-cloud provider Wangsu Science & Technology. The round was Sand.ai's third in 2026, bringing its total fundraising to $300 million in ten months and pushing its valuation past the $1 billion unicorn threshold.

The number that matters more than the valuation, though, is this: **114 billion parameters**. When Sand.ai open-sourced MAGI-2 Preview in August 2026, it became the first team anywhere to scale a video generation model to hundred-billion-parameter size while releasing the weights publicly. That decision — to give the model away — is either a brilliant ecosystem play or a deliberate concession that Sand.ai cannot win on distribution. The evidence increasingly points to the former.

## The Founder Who Walked Away From a $281 Million Exit

To understand Sand.ai, you have to understand Cao Yue's unusual path.

Cao is a Tsinghua PhD graduate and former senior researcher at Microsoft Research Asia, where his work on computer vision earned him a Marr Prize — one of the most prestigious honors in the field. In February 2023, he co-founded an AI company called Light Year alongside Wang Huiwen, the billionaire co-founder of Meituan. Four months later, Meituan acquired Light Year for **$281 million**. Cao could have stayed, collected his earnout, and settled into a comfortable role inside one of China's largest tech companies.

Instead, he left. In early 2024, he founded Sand.ai in Beijing with a thesis that most AI researchers considered unfashionable at the time: that **autoregressive generation** — the same approach that powers large language models, predicting content sequentially token by token — could produce better video than the diffusion methods that OpenAI, Google, and virtually every other major lab had chosen.

The conventional wisdom was not unreasonable. Diffusion models, which generate content by iteratively refining noise into coherent images, had dominated image generation since Stable Diffusion and DALL-E demonstrated their power. Every major video model — Sora, Veo, Kling, Seedance — built on diffusion or hybrid diffusion-transformer architectures. Autoregressive approaches were considered slower, harder to scale, and less capable of producing the photorealistic quality that made diffusion demos go viral.

Cao's bet was that autoregressive video offered something diffusion could not: **natural temporal coherence and the ability to extend generation indefinitely**. A diffusion model generates a fixed clip. An autoregressive model, like an LLM generating text, can simply continue — predicting the next frame, then the next, then the next, maintaining narrative consistency across arbitrarily long sequences.

| Sand.ai: Company Profile | Details |
|---|---|
| Founded | Early 2024 |
| Headquarters | Beijing, China |
| Founder | Cao Yue (Tsinghua PhD, ex-Microsoft Research Asia, Marr Prize winner) |
| Focus | Video generation foundation models (autoregressive architecture) |
| Total funding (2026) | $300 million across three rounds |
| Latest round | $200 million Series A+ (November 5, 2026) |
| Valuation | $1 billion+ (unicorn) |
| Key investors | Cornerstone Capital, Wangsu Science & Technology, Matrix Partners China, CAS Star |
| Notable products | MAGI-1, MAGI-2 Preview, MagiHuman, GAGA-1, VidMuse |
| Open-source strategy | Model weights publicly released under permissive licenses |

![Film production has become one of the first industries transformed by AI video generation](https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80)

## The Architecture Dissent: Autoregressive vs. Diffusion

Sand.ai's core technical argument is not just that autoregressive video works — it is that autoregressive video is fundamentally better suited for the kind of long-form, interactive content that will define the next era of AI-generated media.

In April 2025, Sand.ai released MAGI-1 as a fully open-source project. The model generated video clips in chronological order, supporting continuous generation and long-form extension — capabilities that diffusion-based models struggled to replicate. MAGI-1 won the Physics-IQ video continuation benchmark, demonstrating that autoregressive approaches could maintain physical consistency across extended sequences.

The technical community noticed. Sand.ai developed **MagiAttention**, an infrastructure library for efficient large-scale video model training and inference. By mid-2026, the library had been adopted by Tencent's Hunyuan video team — one of China's largest and best-resourced AI labs — and received official support from NVIDIA's NeMo AutoModel framework. When your competitor's internal teams and your would-be rival's chip supplier both adopt your tooling, the architectural bet starts looking less contrarian and more prescient.

| MAGI Model Evolution | Release Date | Parameters | Architecture | Key Innovation |
|---|---|---|---|---|
| MAGI-1 | April 2025 | Not disclosed | Autoregressive transformer | First high-quality open-source autoregressive video model; continuous generation and long-form extension |
| MagiHuman | March 2026 | Not disclosed | Unified single-stream Transformer | Joint modeling of text, visuals, and audio in a single architecture |
| MAGI-2 Preview | August 2026 | 114B total, ~6B active | Ultra-fine-grained MoE | First hundred-billion-parameter open-weight video model; ranked #6 globally on Artificial Analysis image-to-video leaderboard |
| MAGI-2 (full) | Expected late 2026 | Larger than Preview | MoE | Full commercial release with expanded capabilities |

The March 2026 release of MagiHuman added another dimension. Using a unified single-stream Transformer architecture, it jointly modeled text, visuals, and audio — a technically difficult integration that most competitors handled with separate models stitched together in a pipeline. Alongside MagiHuman, Sand.ai released MagiAttention and MagiCompiler, infrastructure components designed to improve training and inference efficiency at scale.

Then came MAGI-2 Preview in August. The numbers were striking: **114 billion total parameters** on an ultra-fine-grained mixture-of-experts architecture, with approximately **6 billion parameters activated per forward pass**. This is the key to Sand.ai's cost economics. The model's capacity — its ability to understand complex prompts, maintain visual quality, and generate coherent motion — scales with the total parameter count. But the compute cost per generation scales with the active parameter count. The result is a model that punches far above its weight class on quality while consuming a fraction of the compute.

| MAGI-2 Preview: Technical Specifications | Value |
|---|---|
| Total parameters | ~114 billion |
| Active parameters per forward pass | ~6 billion |
| Architecture | Ultra-fine-grained mixture-of-experts (MoE) |
| Inference cost (distilled model) | ~CNY 0.5 per 10-second 1080p video |
| Cost vs. mainstream models | ~1/10th per second of output |
| Artificial Analysis image-to-video rank | #6 globally at launch |
| License | Open-source (weights publicly available) |
| Key infrastructure | MagiAttention, MagiCompiler, MagiHuman unified transformer |
| NVIDIA compatibility | Supported by NeMo AutoModel |

## The $300 Million Vote of Confidence

Sand.ai's fundraising trajectory in 2026 tells its own story about where Chinese venture capital sees value in the AI stack.

The company raised approximately $50 million in an undisclosed-stage round in April 2026. By June, it closed a $200 million round at a $1 billion valuation. And on November 5, it added another $200 million in Series A+, maintaining unicorn status.

The investor composition is equally telling. The November round was co-led by **Cornerstone Capital** (CoStone Venture Capital), one of China's established venture firms, and **Wangsu Science & Technology** — a Shenzhen-listed edge-cloud and content-delivery infrastructure provider. Wangsu's participation is strategic: the company disclosed in exchange filings that it invested 300 million yuan (~$44.5 million) through a convertible note and warrants, and would hold approximately 4.4% equity after other investors complete their subscriptions.

The presence of edge-cloud infrastructure capital matters. Video generation is enormously compute-intensive, and the economics of serving generated video at scale depend heavily on inference infrastructure. An edge-cloud partner can help Sand.ai deploy its models closer to end users, reducing latency and bandwidth costs — critical advantages for real-time or near-real-time video generation applications.

State-backed funds also participated, including Pudong Venture Capital and Shanghai state-capital entities. For a company developing open-source AI models that compete with American products, alignment with government-supported capital is both a validation and a signal of strategic importance.

| Sand.ai Funding History | Date | Amount | Round | Key Investors |
|---|---|---|---|---|
| April 2026 | Undisclosed stage | ~$50M | Seed-extension | Source Code Capital and others |
| June 2026 | Series A | ~$200M | Series A/B | Matrix Partners China, IDG Capital, Sinovation Ventures, CAS Star, and others |
| November 2026 | Series A+ | $200M | Series A+ | CoStone Capital, Wangsu Science & Technology (co-leads); Pudong VC, Shanghai Guofang, Matrix Partners China, CAS Star |

Source Code Capital, which led Sand.ai's seed round, has now participated in every subsequent round. In a market where Chinese VCs have become increasingly selective about AI investments — favoring companies with real revenue over pure research plays — that consistent backing suggests the financials are starting to work.

## VidMuse: The Revenue Engine

Sand.ai's open-source strategy generates developer mindshare and academic credibility. But the company's actual revenue comes from **VidMuse**, its consumer-facing AI video creation platform.

VidMuse launched in January 2026 as a paid service targeting content creators, with tools for music videos, product advertisements, and anime drama production. Within two months, it surpassed **$10 million in annual recurring revenue**. That is not a large number by the standards of ByteDance or Kuaishou. But for a startup barely two years old, selling a product in a market where most AI video companies are still burning cash on free tiers, $10 million ARR in 60 days is a signal that someone is willing to pay for what Sand.ai makes.

The product strategy is deliberate. Rather than competing head-on with general-purpose chatbots or broad creative suites, VidMuse targets **specific, high-value verticals** where video generation has immediate commercial utility. A music video that would cost thousands of dollars to produce traditionally can be generated for a few yuan. A product advertisement that would require a film crew, models, and a day of shooting can be created in minutes.

The economics are compelling enough that Sand.ai can simultaneously offer open-source model weights for developers and charge consumer prices for the polished product experience. The open-source releases build the developer ecosystem and establish technical credibility. VidMuse captures the commercial value.

| VidMuse: Business Metrics | Value |
|---|---|
| Launch date | January 2026 |
| ARR milestone | $10 million+ within 2 months |
| Target users | Content creators, advertisers, anime producers |
| Key use cases | Music videos, product ads, anime dramas |
| Pricing model | Freemium (paid tiers for commercial use) |
| Cost advantage | ~1/10th inference cost vs. mainstream competitors |
| Technical basis | MAGI-2 distilled models |

## The Competitive Landscape: David Among Giants

Sand.ai operates in what may be the most brutally competitive segment of China's AI industry: video generation.

**Kling AI**, backed by Kuaishou, has raised nearly **$3 billion** and benefits from its parent's massive short-video distribution platform and user base. **Seedance**, ByteDance's video model, integrates directly into Douyin (China's TikTok equivalent) and CapCut, giving it distribution reach that no startup can match. **Tencent's Hunyuan** video models leverage the company's gaming, social, and cloud infrastructure. And internationally, **Google's Veo 3.1** and **OpenAI's Sora 2** set the global quality benchmark and dominate Western market attention.

Sand.ai's position in this landscape is unusual. It is not the best-funded (Kling has 10x its capital). It does not have the deepest distribution (ByteDance and Tencent own the platforms where video is consumed). Its models do not top every benchmark (MAGI-2 Preview debuted at #6 on Artificial Analysis). But it has three advantages that none of its larger competitors can easily replicate.

**First, cost.** At roughly one-tenth the per-second inference cost of mainstream models, Sand.ai can offer video generation at price points that make its competitors' unit economics look uncomfortable. For developers building video generation into their applications at scale, cost is often the deciding factor.

**Second, openness.** While Kling, Seedance, Veo, and Sora are all proprietary platforms with API access only, Sand.ai releases model weights under permissive licenses. For enterprises and researchers who need to self-host — for data privacy, compliance, or customization reasons — Sand.ai is one of the few options at the frontier quality tier.

**Third, architectural differentiation.** As the only major player committed to autoregressive video generation, Sand.ai is positioned to exploit capabilities that diffusion models fundamentally cannot offer: indefinite extension, interactive generation, and narrative coherence across long-form content. If the future of AI video is a 30-minute film rather than a 10-second clip, autoregressive architectures have a natural advantage.

| Competitive Landscape: Chinese and Global Video AI | Company | Model | Total Funding | Distribution | Architecture | Open Source |
|---|---|---|---|---|---|---|
| Sand.ai | MAGI-2 | $300M | VidMuse + developer ecosystem | Autoregressive MoE | Yes (weights released) |
| Kuaishou | Kling AI | ~$3 billion (reported) | Kuaishou app, API | Diffusion-based | No |
| ByteDance | Seedance | Internal (ByteDance R&D) | Douyin, CapCut, Volcano Engine | Diffusion-based | No |
| Tencent | Hunyuan Video | Internal (Tencent R&D) | Tencent Cloud, WeChat ecosystem | Diffusion-based | Partial (some models open) |
| Google | Veo 3.1 | Internal (Alphabet) | Google Cloud, Gemini | Diffusion-based | No |
| OpenAI | Sora 2 | $11B+ (company total) | ChatGPT, API | Diffusion-based | No |

## The Open-Source Gambit

Sand.ai's decision to release model weights publicly is not merely idealistic. It is a calculated strategic move that reflects both the opportunities and constraints of the Chinese AI ecosystem.

On the opportunity side, open-source releases generate **developer adoption** that proprietary models cannot match. When MAGI-1 was released on Hugging Face, it attracted immediate attention from the global research community. Developers began building on it, fine-tuning it, and contributing improvements. That ecosystem activity compounds: more developers means more use cases discovered, more bugs reported, more optimizations contributed, and more commercial leads generated.

The MagiAttention library's adoption by Tencent's Hunyuan team and NVIDIA's NeMo framework demonstrates this flywheel in action. Sand.ai builds infrastructure → infrastructure gets adopted by larger players → adoption validates the approach → validation attracts more developers and customers.

On the constraint side, open-source is also a **differentiation strategy born of necessity**. Sand.ai cannot outspend Kling, cannot out-distribute ByteDance, and cannot out-brand Google. But it can out-open them. In a market where every major competitor keeps their models locked behind APIs, being the open alternative is a meaningful position — particularly for enterprise customers, government clients, and developers in markets where data sovereignty requirements make API-only access a non-starter.

The risk is that openness invites competition. Anyone can download MAGI-2's weights, fine-tune them, and deploy a competing service. Sand.ai's answer to this risk is speed: by the time competitors have optimized their deployments of the current model, Sand.ai intends to have released the next one.

![The cost economics of AI video generation are reshaping content creation industries globally](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80)

## What Comes Next: Three Milestones to Watch

Sand.ai's trajectory over the next six months will be determined by three key events.

**The full MAGI-2 release.** The Preview version, at 114 billion parameters, was explicitly positioned as a research release. The full version, expected before the end of 2026, will be larger and more capable. Its performance against Veo 3.1, Sora 2, and Kling on independent benchmarks will determine whether Sand.ai's architectural bet translates into quality parity, not just cost advantage. The company has set expectations high by describing MAGI-2 as its path to the frontier tier.

**VidMuse revenue sustainability.** $10 million ARR in two months is impressive, but the critical question is whether that growth continues without heavy subsidy-driven pricing. If Sand.ai can maintain growth while demonstrating positive unit economics on its inference costs, it will have a business model that most AI video companies — which are still primarily cash-burning — cannot match. If growth stalls or requires unsustainable pricing, the cost advantage becomes less meaningful.

**Long-form and interactive video.** The ultimate test of the autoregressive thesis is whether Sand.ai can ship a product that generates video content longer than a few seconds — minutes, not clips — with coherent narrative structure. This is the use case where autoregressive models should have a decisive architectural edge. If MAGI-2 or its successor can produce a coherent 5-minute video from a text prompt, it would open an entirely new product category that diffusion-based competitors cannot easily follow.

| Key Milestones and Risks | Timeline | Significance |
|---|---|---|
| MAGI-2 full release | Expected late 2026 | Determines whether cost advantage translates into quality parity |
| VidMuse revenue scaling | Ongoing | Validates business model; tests unit economics at scale |
| Long-form video capability | 2027 target | The autoregressive differentiator; could open new product category |
| Developer ecosystem growth | Ongoing | MagiAttention/MagiCompiler adoption by major labs signals architectural validation |
| Competitive response from Kling/ByteDance | 2026-2027 | Larger players could replicate cost advantages or release their own open models |
| Export control impact | Ongoing | US restrictions on chip access could affect training scale for next-generation models |

## Social Voices

**Zhihu** (Chinese Q&A platform):
> "Sand.ai 的开源策略很聪明。技术不如字节和快手有钱，那就把权重放出来让全世界开发者帮你验证。MagiAttention 被腾讯混元采用了，这比任何广告都有说服力。"
> 
> "Sand.ai's open-source strategy is smart. They can't outspend ByteDance and Kuaishou on technology, so they release the weights and let developers worldwide validate the approach. MagiAttention being adopted by Tencent Hunyuan is more convincing than any advertisement."

**Xiaohongshu (Little Red Book)**:
> "用 VidMuse 做了条产品推广视频，成本才几块钱。以前找外包做至少要几千。视频质量说实话还有提升空间，但对小商家来说够用了。"
> 
> "Made a product promo video with VidMuse for just a few yuan. Outsourcing the same thing would have cost thousands. The quality honestly has room for improvement, but for small businesses it's good enough."

**Twitter/X**:
> "The most interesting thing about Sand.ai isn't the $200M round. It's that they're the only serious video lab betting on autoregressive generation instead of diffusion. If long-form video turns out to need autoregressive architectures, they'll look like geniuses. If not, they raised $300M for a science project."
> 
> *(English original)*

**Weibo**:
> "曹越这个人真的很传奇，和王慧文一起创办光年之外，美团收购后又出来创业做视频生成。MAGI 系列能坚持下来走自回归路线，说明他对技术方向有很强的信念。"
> 
> "Cao Yue's story is remarkable. He co-founded Light Year with Wang Huiwen, and after Meituan acquired it, he went back out to build a video generation startup. Sticking with the autoregressive route for the MAGI series shows strong conviction in his technical direction."

**GitHub** (on the MAGI-2 repository):
> "MagiAttention is genuinely impressive. We've been using it internally and the inference speedups are real. The MoE activation pattern for video generation is clever — massive capacity without the compute cost. Kudos to the Sand.ai team for open-sourcing this."
> 
> *(English original)*

**Douban**:
> "$3亿融资听起来很多，但跟快手的可灵比还是差了一个数量级。Sand.ai 的优势是成本和开源，但如果快手把价格也压下来，Sand.ai 的护城河够不够深还是个问题。"
> 
> "$300 million sounds like a lot, but it's an order of magnitude less than Kuaishou's Kling. Sand.ai's advantages are cost and open source, but if Kuaishou cuts prices too, whether Sand.ai's moat is deep enough is still an open question."

---

Sand.ai's $200 million round is not the largest funding event in China's AI video sector this year. But it may be the most revealing. It signals that investors are starting to reward **architectural differentiation and unit economics** over raw scale and distribution advantage. In an industry where the largest players have locked up the capital, the platforms, and the attention, Sand.ai has carved out a position by being cheaper, more open, and architecturally distinct.

Whether that position proves durable depends on MAGI-2's full release, VidMuse's ability to sustain revenue growth, and the ultimate question of whether autoregressive video generation can deliver the long-form, interactive content that diffusion models cannot. Cao Yue has bet $300 million that it can. The next six months will start to reveal whether he is right.
