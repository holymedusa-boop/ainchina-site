---
title: "The Phone That Gets Things Done: Inside China's First AI Agent Smartphone"
slug: "doubao-ai-agent-phone-nubia-navix-ultra-china-2026"
date: "2026-09-18"
excerpt: "On September 16, ByteDance and ZTE's Nubia shipped the world's first mass-produced AI agent phone — a device where the assistant doesn't just answer, it acts. With 370,000 pre-orders before launch and a compliance trail no rival can match, the NaviX Ultra is China's boldest bet on the post-app era."
author: "AI in China Editorial"
readTime: "16 min"
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200"
category: "Consumer AI & Platforms"
tags:
  - ByteDance
  - Doubao
  - Nubia
  - AI Phone
  - AI Agent
  - On-Device AI
  - ZTE
  - Agent OS
  - Consumer AI
  - China AI
keywords:
  - Doubao AI phone Nubia NaviX Ultra
  - AI agent phone China 2026
  - ByteDance smartphone agent
  - first AI agent phone launch
  - on-device AI agent smartphone
  - China AI phone shipments 2026
  - MCP A2A protocol phone
  - Nubia NaviX Ultra price specs
  - agent OS smartphone China
  - AI phone vs AI agent phone
related:
  - /blog/wechat-xiaowei-a2a-agents-talk-agents-china-2026/
  - /blog/china-ai-terminals-overtake-humanoid-robot-factory-2026/
  - /blog/apple-intelligence-china-qwen-baidu-ai-sovereignty-2026/
  - /blog/bytedance-fullstack-ai-seedance-audio-doubao-ecosystem-2026/
---

![A smartphone held in hand — for two decades the portal to apps, now being rebuilt around the agent that runs them](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200)
*The smartphone's third era: after the app grid and the voice assistant, the agent that operates the phone on your behalf. (Image: Unsplash)*

At 2:00 PM on September 16, 2026, the glass doors of Nubia's flagship store in Shenzhen opened to a queue that had formed before sunrise. By 2:20 PM, the company's servers were buckling. By the end of the day, the Nubia NaviX Ultra — the phone the Chinese internet simply calls "the Doubao phone" — had burned through a substantial share of the roughly 200,000 units ZTE and ByteDance had prepared for the first wave.

None of this was surprising to anyone who had watched the pre-order counter. Two days before launch, reservations on JD.com alone had passed 370,000 — more than twelve times the entire production run of the phone's predecessor. What was surprising was the reason for the frenzy. This was not a camera phone with a smarter filter, nor a folding screen with an AI sticker on the box. The NaviX Ultra is the first smartphone ever sold at scale whose defining feature is something subtler and more radical: an agent that operates the phone for you — across apps, across services, across the entire thicket of modern mobile life — under a regulatory license no competitor yet holds.

Fourteen months of false starts, platform wars, and quiet engineering later, the agent phone has left the lab.

## The First Version Broke the Rules. The Second One Wrote Them.

To understand why the NaviX Ultra matters, you have to go back to December 2025, when Nubia and ByteDance shipped a strange little device called the M153. Priced at ¥3,499 and capped at roughly 30,000 units, the M153 was explicitly an "engineering preview" — a proof of concept that a phone assistant could do real work: compare shampoo prices across e-commerce apps in three minutes and twelve seconds, file a leave request on Feishu, pop the frunk of a Tesla, book a restaurant table on Dianping.

People went berserk. The 30,000-unit batch sold out almost instantly, and scalpers pushed second-hand prices as high as ¥7,999 — more than double the sticker. Tech media declared the "AI phone" era open.

But inside the industry, the M153 was a parable about power. The phone's agent worked by *simulating human taps* — screen-reading, button-pressing, scrolling — which meant it behaved exactly like a bot. Super-apps with risk-control systems treated it as one. Social and payment features were throttled or blocked outright. The assistant that was supposed to dissolve app walls instead hit them at full speed. The lesson ByteDance and Nubia drew was not that agents on phones were impossible. It was that **screen-simulation agents would always lose to the platforms that own the screens.**

So for the second generation, they changed the physics of the thing.

| Dimension | M153 (Dec 2025) | NaviX Ultra (Sept 2026) |
|-----------|-----------------|--------------------------|
| Positioning | Engineering preview / tech demo | Mass-production flagship |
| First-batch volume | ~30,000 units, sold out, not restocked | ~200,000 units planned across configs |
| Price | ¥3,499 | ¥5,999 / ¥6,499 / ¥7,499 |
| Cross-app method | GUI simulation (emulated taps) | MCP / A2A protocol API integration |
| Model compliance | None (preview status) | First device with CAC-registered agent LLM |
| Regulatory status | No network-access filing | MIIT network-access license granted Sept 1, 2026 |
| Super-app compatibility | Throttled by risk controls | SAEP disclosure mechanism; negotiated coverage |
| Core compute | Cloud-dependent | On-device execution, data not uploaded |

The NaviX Ultra does not pretend to be a fast pair of thumbs. It is built on a system-level GUI-agent architecture that connects to third-party apps through the same protocol family — MCP and A2A — that the rest of the agent industry has spent 2026 standardizing around. Where an app hasn't opened an interface, the phone can fall back to controlled automation, but the preferred path is a declared, permissioned API. The assistant stopped being a guest inside other companies' apps and started being a client.

That architectural shift is the entire story.

## Four Verbs: Understands, Acts, Remembers, Stays Safe

Nubia president Ni Fei has spent the year reducing the product to four verbs — *ting de dong, neng gan huo, ji de zhu, gou an quan*: understands, gets things done, remembers, stays safe. Marketing slogans usually curdle on contact with reality, so it is worth examining each claim against what reviewers and early buyers actually found in the first 48 hours.

**Understands.** The assistant handles full-scene natural language — you can point it at messy, multi-step requests ("find me a cheaper flight that still gets me to the client's city before 10 AM, and if it's under ¥1,200, hold it"). Speech recognition and planning run on the device, which matters for latency and for the next claim.

**Acts.** This is the headline capability: cross-app task completion. In demos and early reviews, the phone compared prices across shopping platforms, applied coupons automatically, ordered the lowest-priced option, extracted an address from a chat and summoned a ride, and reserved a restaurant seat. Coverage is currently strongest across ByteDance's own family — Douyin, Toutiao, Xigua, Feishu, Doubao — plus a small set of third parties like Caocao Mobility. That limitation is not a footnote; we'll return to it.

**Remembers.** The phone can persist user-approved memories: hold three fingers on the screen, or press the dedicated orange AI key with the volume rocker, and the current screen content is saved into a personal memory store that the agent can recall later by voice or in the Doubao app. For the first time on a mass-market device, memory is a hardware gesture.

**Stays safe.** Payment-sensitive steps hand control back to the human — the agent will prepare a checkout and then ask you to confirm with your own fingerprint. Core model inference runs locally; Nubia's materials state screen data is not uploaded to the cloud. And the whole stack sits on top of a model that has been through the regulator's filing process, which brings us to the moat.

![An AI assistant moving through the physical world of human tools — the metaphor the agent phone is trying to literalize](https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800)
*The agent phone promises to turn intent into completed errands — the long-promised jump from assistant to actor. (Image: Unsplash)*

## The Compliance Moat Nobody Wanted to Build

The single most consequential thing about the NaviX Ultra is invisible in product photos. On September 1, 2026, the phone received its network-access license from the Ministry of Industry and Information Technology — completing a chain that runs from the Cyberspace Administration of China's filing of the Nubia-Doubao agent model all the way down to the physical handset. It is, per the company's filing documents and widespread industry reporting, the first consumer device ever shipped with a fully registered on-device *agent* large language model in China.

Why does that matter so much? Because China's generative AI rules treat a model as a regulated service, and an agent model — one that can act, not just chat — sits at the sharp end of what regulators care about. Getting one registered required disclosing training data provenance, safety evaluations, and the operational boundaries of the agent's autonomy. The NaviX Ultra also operates under a newly introduced mechanism the industry calls SAEP — a 30-day rule-publication protocol for screen automation, under which an agent's automated behaviors are disclosed and reviewable.

The practical effect is that the phone arrives on the market with something its international rivals conspicuously lack in China: a *license to act*.

| On-Device Generative AI Service (CAC-registered) | Vendor | Device Ecosystem |
|----------------------------------------------------|--------|------------------|
| Nubia Doubao Phone LLM | ByteDance + ZTE/Nubia | NaviX Ultra |
| Apple Intelligence | Apple | iPhone (China rollout) |
| Huawei Xiaoyi AI LLM | Huawei | Mate / P series |
| OPPO AndesGPT LLM | OPPO | ColorOS devices |
| vivo Blue Heart on-device LLM | vivo | OriginOS devices |
| Xiaomi Hyper AI | Xiaomi | HyperOS devices |
| Samsung Galaxy AI | Samsung | Galaxy S/Z series |

Seven models are registered. Only one is an *agent* model cleared to operate apps autonomously, and only one device entered 2026's fourth quarter actually shipping with that agent switched on. Meanwhile, Alibaba's Qwen is slated to power China-market iPhones in Apple's partnership — which means the world's most valuable consumer hardware company will soon be running a Chinese model on Chinese rules on Chinese devices, but without an agent cleared to operate third-party apps the way the NaviX Ultra's can.

Compliance, in other words, turned out to be a feature. It is a strange inversion of the usual tech playbook — where first movers ship fast and lawyers trail behind — and it is very Chinese: the company that walked through the regulator's door first now owns the only legal on-ramp to the agent-phone category.

## The Numbers Behind the Category

The NaviX Ultra did not appear in a vacuum. It arrives at the exact moment the Chinese smartphone market tips from "AI as feature" to "AI as the product," and the market projections have been racing to catch up.

IDC's current forecast has China shipping roughly 147 million AI-capable phones in 2026 — about 53% of total smartphone volume, and the first year AI phones overtake conventional ones. CICC's 2026 outlook argues the "on-device AI era" has properly begun, with this year as the inflection for mass adoption of AI consumer terminals. Against that backdrop, ZTE's decision to commit roughly 200,000 units to a first wave (down from an internal plan of 300,000, trimmed as component costs rose) looks less like caution and more like a controlled burn: enough to dominate the news cycle, scarce enough to keep the premium positioning.

| Metric | Value | Context |
|--------|-------|---------|
| JD.com pre-orders before launch | 370,000+ | Single channel, by Sept 15 |
| First-wave production plan | ~200,000 units | Cut from ~300,000 on component costs |
| Entry price (512GB) | ¥5,999 | Two 512GB configs: ¥5,999 / ¥6,499 |
| Top price (1TB) | ¥7,499 | Positions against flagship tiers |
| First-gen M153 price | ¥3,499 | Scalped to ¥7,999 on second-hand markets |
| IDC 2026 China AI phone forecast | 147 million units | ~53% of all smartphone shipments |
| Registered on-device agent models | 1 | Nubia Doubao LLM (as of Sept 2026) |
| Registered on-device gen-AI services | 7 | Including Apple, Huawei, OPPO, vivo, Xiaomi, Samsung |

The pricing deserves a note. At ¥5,999 to ¥7,499, the NaviX Ultra is not a niche gadget for developers; it is squarely a flagship device asking flagship money — and getting it. Pre-order volumes at that price point suggest the buyer is not a hobbyist but a mainstream premium consumer who has decided the agent is the reason to upgrade in a year when ordinary flagship upgrades feel incremental.

## The Arena: Everyone Wants the Same Door

ByteDance and Nubia got there first, but the rest of the industry has been circling the same idea from every angle. The competition is best understood not as a list of phones but as a contest over *who owns the agent layer* — the new slot between the user and everything else.

| Player | Agent Approach | Status (Sept 2026) | Key Constraint |
|--------|---------------|--------------------|----------------|
| **ByteDance × Nubia** | System-level agent via MCP/A2A, CAC-registered model | Shipping at scale | Coverage beyond ByteDance apps still thin |
| **Huawei** | Xiaoyi LLM deep in HarmonyOS, full stack ownership | Shipping, premium tier | Agent autonomy under its own ecosystem logic |
| **Apple** | Apple Intelligence + Qwen for China market | Rolling out | No China agent model registration for autonomous app control |
| **Samsung × Google** | Gemini agent, long-press power key | Galaxy S26 generation | Google services footprint limited in China |
| **OPPO / vivo / Xiaomi** | AndesGPT / Blue Heart / Hyper AI | Shipping as assistants | Assistant-first, agent-second roadmaps |
| **StepFun** | Step AOS agent-native OS, STEPX Neo | Demoed at WAIC, not on sale | No shipping hardware, no registered device model |
| **Tencent** | Yuanqi agents via WeChat/Xiaowei channels | Platform play, no own phone | Depends on partners' hardware |

Two patterns stand out. First, the phone OEMs — Huawei aside — are mostly shipping *assistants*: things that answer, summarize, and suggest. The autonomous, cross-app *agent* is exactly the category where a regulator's filing matters most, and it is where the NaviX Ultra sits alone. Second, the two most dangerous challengers don't make phones at all. Tencent has spent 2026 wiring agent capability into WeChat itself, with Xiaowei gaining agent-to-agent communication; if the agent layer can live inside a super-app, the operating system becomes a detail. And Apple's Qwen deal means the highest-spending consumer cohort in China will soon have a deeply integrated AI — one that, for now, still can't operate their apps.

The counterargument — that agents belong in super-apps, not in handsets — is serious, and it is the reason the NaviX Ultra's first-year trajectory matters so much. If tens of millions of users learn to delegate to an OS-level agent, the super-app becomes one more service the agent calls. If they don't, the phone becomes the super-app's prettiest accessory.

## ByteDance's Calculus: The Hand Without the Body

ByteDance's role in this product is easy to misread. The company has repeatedly and explicitly denied building its own phone — "this is fake news," it told media in May when rumors resurfaced — and the NaviX Ultra is formally ZTE/Nubia hardware. What ByteDance supplies is the layer that matters: the model, the assistant, the interaction design, and the gravitational pull of its app empire, which happens to be where Chinese users already spend their hours.

This is a textbook play in the Chinese platform tradition: **own the interface, rent the hardware.** ByteDance avoids the thin margins and inventory risk of the handset business while ensuring that if the agent era truly arrives, the default agent — the one with the orange button — speaks Doubao. ZTE gets a halo product that pulls Nubia from the periphery of the flagship conversation into its center. Each side gets what it most wants, and neither has to become the other.

There is also a defensive logic. Doubao's ~226 million monthly users make it China's most-used standalone AI assistant, but standalone AI apps are a precarious throne: the OS vendors can absorb the assistant into the system, and the super-apps can absorb it into the chat. Embedding Doubao at the OS level, underneath every app, is ByteDance's bid to make its model infrastructural rather than optional — the same logic, incidentally, that has driven Google's Gemini agent into Samsung's hardware and Apple's quiet re-architecture of Siri around large models.

![The infrastructure layer beneath the agent era — on-device compute, protocol connections, and the cloud services they selectively replace](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800)
*On-device inference keeps the agent's routine work local; protocols, not screen-scraping, connect it to services. (Image: Unsplash)*

## What Could Go Wrong

Honesty requires a cold-water section, because the gap between the NaviX Ultra's promise and its current reality is real.

**Coverage.** Today the agent works best inside ByteDance's own family of apps plus a handful of third parties. The phone that books your dinner and orders your shampoo is also the phone that most efficiently funnels your intentions into ByteDance's commercial ecosystem. Users will notice. The SAEP disclosure mechanism creates pressure for broader coverage, but negotiations with super-apps that have their own agent ambitions will be slow and zero-sum.

**Trust handoffs.** The security model — agent prepares, human fingerprint confirms — is sound, but every handoff is also a seam. A user who must personally confirm every payment is a user who may start mindlessly confirming, which recreates the phishing surface the design was meant to close.

**The ecosystem war.** Tencent's Xiaowei agents now talk to each other inside WeChat; Huawei controls its whole stack and can move agent capability into the OS without asking anyone's permission. If either decides the OS-level agent is a threat rather than a partner, the NaviX Ultra's protocol bridges can be throttled at the app level — the exact fate that befell the M153's screen-tapping.

**Supply and price.** Component-cost inflation already trimmed the first wave from ~300,000 to ~200,000 units. A premium phone whose differentiator is software must keep proving itself against cheaper devices that will inevitably absorb the same features.

None of these are fatal. All of them are the ordinary friction of a genuinely new category. But they explain why the sensible reading of September 16 is not "the agent phone has won" — it is "the agent phone has finally entered the arena, with one legal license, one shipping product, and a year of brutal competition ahead."

## The First Year of the Post-App Experiment

What comes next is already partly legible. More models will clear the agent registration pathway — Huawei's is the obvious candidate — which will collapse the NaviX Ultra's regulatory moat within quarters, not years. Apple and Alibaba will decide how agentic Qwen-on-iPhone is allowed to become. StepFun's Step AOS and its STEPX Neo hardware will reach consumers or won't. And somewhere in that scrum, the first killer use case — the thing people buy an agent phone *for*, the way they bought smartphones for WeChat and maps — will crystallize.

The stakes reach well beyond one phone. The smartphone has been the dominant computing platform for eighteen years, and for eighteen years its fundamental bargain has been: *you drive, we entertain.* Every major platform company on Earth spent 2025 and 2026 concluding that the next interface is the one where you state intent and software negotiates the rest. Whoever owns that negotiation layer — OS vendor, super-app, model company, or some coalition of the three — owns the most valuable real estate in consumer technology since the app store itself.

On September 16, in a Shenzhen store, two companies that had no business winning this particular race put the first licensed version of that future into strangers' pockets. The queue outside suggests a great many people wanted to hold it.

## Voices From the Launch

Reactions across Chinese tech communities ranged from euphoric to sharply skeptical, with a running debate about whether the "agent phone" is a platform shift or a very well-executed feature drop.

> **Zhihu — @星尘观察者 (Stargazer):**
> "三百七十万人预约的不是一台手机，是第一次有设备真的替你干活。M153的时候大家抢的是新鲜感，这次抢的是确定性。"
> *"370,000 people pre-ordered not a phone, but the first device that genuinely works on your behalf. With the M153 they were buying novelty; this time they're buying certainty."*

> **Weibo — @数码老周:**
> "别激动。Agent覆盖的基本是字节全家桶，你让它去携程订个票试试？协议没谈好的应用，该点不动还是点不动。这本质上是字节生态的遥控器。"
> *"Don't get too excited. Agent coverage is basically ByteDance's whole family of apps. Try having it book a trip on Ctrip — apps without negotiated protocols still won't budge. This is essentially a remote control for ByteDance's ecosystem."*

> **小红书 — @小鹿不迷路:**
> "三指上滑存记忆这个设计我真的会谢，看到租房信息、菜谱、快递单，存一下以后直接问豆包就行。以前要截图转文字再搜索，现在一步。"
> *"The three-finger swipe to save memories is genuinely great — rental listings, recipes, delivery slips, save them all and just ask Doubao later. Used to be screenshot, OCR, search. Now it's one step."*

> **X (Twitter) — @china_tech_brief:**
> "Everyone's framing this as ByteDance making a phone. Wrong frame. ByteDance made an *operating system for errands* and rented Nubia's body. Watch what happens when Huawei's registered agent model ships."

> **豆瓣 — @灰度思考:**
> "合规备案成了卖点，这很赛博。别的国家是先有产品再补监管，我们是监管本身就是产品的一部分。好不好另说，至少隐私这块是真有背书。"
> *"Compliance registration as a selling point — very cyberpunk. Other countries build the product then patch regulation on; here regulation is literally part of the product. Whether that's good or bad is another question, but at least on privacy there's real backing."*

> **GitHub — @open-agent-dev (issue discussion, MCP community):**
> "NaviX's MCP/A2A integration is the first time a shipping consumer device treats agent protocols as first-class plumbing instead of demoware. The SAEP 30-day disclosure mechanism is worth stealing for every agent platform."
