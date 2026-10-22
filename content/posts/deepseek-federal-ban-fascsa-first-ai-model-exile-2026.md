---
title: "The First AI Model Exile: DeepSeek and the 21-Month Road to a Federal Ban"
date: "2026-10-23"
excerpt: "On October 20, 2026, a supply-chain law built for Huawei routers and Chinese surveillance cameras produced America's first exile of an AI model company. The order against DeepSeek was signed on July 24, kept quiet for nearly three months, and published only after its own exception window had closed. Here is the escalation arc — and the mirror-image controls Beijing is building in response."
author: "AI in China Editorial"
readTime: "16 min read"
tags: ["China AI", "DeepSeek", "FASCSA", "Export Controls", "AI Policy", "US-China Tech War", "Open Source AI", "Federal Procurement", "AI Security", "Tech Regulation 2026"]
image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=600&fit=crop"
keywords: ["DeepSeek federal ban 2026", "FASCSA AI exclusion order", "DHS DeepSeek removal order", "US China AI restrictions October 2026", "DeepSeek federal civilian agencies", "AI supply chain security act", "China AI export controls response", "open weight models government ban", "DeepSeek V4.1 Flash", "US China AI talks November 2026"]
---

![An abstract lattice of light — the first time a supply-chain law built for hardware has been aimed at a neural network](https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=600&fit=crop)

On the morning of October 20, 2026, the U.S. Department of Homeland Security published a notice in the Federal Register that had been sitting in a drawer for 88 days. FASCSA Exclusion and Removal Order #2026-01 — signed by Secretary Markwayne Mullin on July 24, copied to OMB Director Russell Vought, docketed as DHS-2026-0628 — directs every federal civilian executive agency to strip DeepSeek's products from its IT systems, bars any future purchase, and reaches beyond the Chinese lab itself to any third-party product or service "developed using DeepSeek implementations."

The statute behind it is the Federal Acquisition Supply Chain Security Act of 2018. Congress wrote it to keep Huawei telecom gear and Chinese surveillance cameras out of government networks. For eight years, it was a hardware statute. Last week it became something else: the first formal exile of an AI model company from the world's largest government IT market.

The reaction was symmetrical. Within 24 hours, China's Ministry of Commerce issued "strong dissatisfaction and firm opposition," accused Washington of violating the understandings from President Xi Jinping's Washington visit last month, and warned Beijing "will take all necessary measures." DeepSeek, which had released an open-source inference engine and a new model checkpoint in the same week it was banned, said nothing at all.

This is the anatomy of that order — and of the 21 months that produced it.

## The Present Moment: Anatomy of a Quiet Order

The first thing to understand about Order #2026-01 is how little of it behaves like normal American regulatory process. There was no proposed rule, no comment period, no press conference. The Federal Acquisition Security Council — an interagency body most Americans have never heard of — reviewed evidence and recommended exclusion. The Secretary of Homeland Security signed. The order took effect on issuance.

By the time the public could read it, the 60-day window for agencies to request a written exception had already run. Agencies may still petition CISA for relief — but after the fact, against an exclusion already in force.

| Order Fact | Detail |
|---|---|
| Formal title | FASCSA Exclusion and Removal Order #2026-01 |
| Docket / register | DHS-2026-0628; Federal Register Doc. 2026-21447 |
| Signed | July 24, 2026 — by DHS Secretary Markwayne Mullin |
| Made public | October 19 (public inspection); published October 20, 2026 |
| Legal basis | Federal Acquisition Supply Chain Security Act of 2018, §1323 exclusion authority |
| Two operative limbs | (1) Exclude DeepSeek + affiliates from civilian procurement; (2) Remove DeepSeek products AND "third-party products and services developed using DeepSeek implementations" |
| Named entity | Hangzhou DeepSeek Artificial Intelligence Co., Ltd. and covered affiliates |
| Exception path | Written requests to CISA; the 60-day window closed before publication |
| Compliance deadline | None stated in the published notice |

The second thing to understand is the phrase doing the heaviest lifting: "developed using DeepSeek implementations." It appears nowhere in statute — it is the order's own coinage, undefined in the notice. Whether it covers a contractor's self-hosted copy of DeepSeek's MIT-licensed weights, an AI gateway reselling DeepSeek tokens, or an internal tool fine-tuned on a DeepSeek base model is a question the order declines to answer. Reporting by The Decoder noted it is unclear whether brokers like OpenRouter fall under the ban. A compliance memo at any federal contractor this month is essentially a Rorschach test.

## Phase 1: The Panic Months (January–March 2025)

The arc begins, as so much of this story does, with R1.

When DeepSeek released its reasoning model in late January 2025 — matching American frontier performance at a fraction of the training cost, on export-constrained hardware — the first U.S. government responses arrived within days and shared a common shape: they were device bans, improvised and narrow. The Defense Information Systems Agency blocked DeepSeek on military networks. The Navy told personnel not to use it. The Commerce Department banned it on government devices. The panic was not yet policy; it was IT departments unplugging things.

Then the states followed, and the pattern widened from the federal executive to the federated periphery.

| Date | Actor | Action |
|---|---|---|
| Jan 2025 | DISA (U.S. Defense networks) | Blocks access to DeepSeek models |
| Jan 2025 | U.S. Navy | Directs personnel not to use DeepSeek |
| Jan 2025 | U.S. Commerce Dept. | Bans DeepSeek on government devices |
| Jan–Feb 2025 | Texas, New York, Virginia, Iowa | Bar DeepSeek on state government devices/networks |
| Early 2025 | Taiwan, Australia | Government-level restrictions on DeepSeek use |
| Dec 2025 | U.S. Congress | Restricts DeepSeek in intelligence community systems |
| Jun 2025 | U.S. Congress (proposed) | No Adversarial AI Act — never enacted |

The security pretext arrived alongside the bans, and it was not nothing. In late January 2025, researchers at cloud security firm Wiz found a publicly exposed DeepSeek database — chat histories, API keys, internal metadata — sitting behind an open ClickHouse instance, downloadable by anyone who found it. DeepSeek fixed the exposure before Wiz went public, but the incident gave institutional weight to what had been a vague suspicion: this company's operational security was not yet commensurate with its adoption curve. The app, researchers noted at the time, transmitted more data than most chatbots and was slow to encrypt.

Phase 1 established the template that would persist for twenty months: restrictions that were real but narrow, aimed at devices and networks rather than the technology itself.

Here is the full escalation ledger, model releases against government moves:

| Date | DeepSeek Move | U.S. Government Move |
|---|---|---|
| Jan 2025 | R1 reasoning model ships | DISA, Navy, Commerce device bans within days |
| Jan 30, 2025 | — | Wiz publicly discloses exposed database (fixed before disclosure) |
| Feb 2025 | V3 open-weight release | Texas, New York, Virginia, Iowa state device bans |
| Jun 2025 | V3.1 + R1-0528 | No Adversarial AI Act proposed in Congress; stalls |
| Dec 2025 | V4 family expands | Congress restricts DeepSeek in intelligence systems |
| Summer 2026 | V4 Pro (1.6T params, MIT license) | Open-weight crackdown considered, shelved after industry split |
| Jul 24, 2026 | — | FASCSA Order #2026-01 signed |
| Sep 2026 | — | Xi-Trump Washington summit; AI dialogue channel agreed |
| Oct 16, 2026 | — | China proposes export controls on 23 AI technologies |
| Oct 17, 2026 | V4.1-Flash-1017 ships; Search/Fetch APIs open | — |
| Oct 19, 2026 | — | Order #2026-01 filed for public inspection |
| Oct 20, 2026 | DeepInfer inference engine open-sourced | Order published in Federal Register |

![A city skyline at dusk — Washington's rulemaking and Beijing's response now move in locked orbit](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop)

## Phase 2: From App Bans to Architecture (2025–Mid 2026)

Through 2025, the government's problem changed character. DeepSeek stopped being an app employees might download and became infrastructure developers might build on. Its open-weight releases were being downloaded and fine-tuned inside American companies precisely because they were cheap, capable, and free of licensing friction.

That shift forced a strategic question that device bans could not answer: what do you do about a foreign model whose *weights* are the product, and whose weights are downloadable?

Washington nearly answered it in the summer of 2026. According to New York Times reporting, the administration considered measures against Chinese open-weight models — sanctions, a trade blacklist, formal rules on federal model use. The push died in a lobbying split that mapped the industry's commercial interests: Nvidia, Microsoft, Google, and Meta objected; OpenAI and Anthropic lobbied in the opposite direction.

What emerged instead, in December 2025, was the intelligence-community restriction — significant, but confined to the IC. The civilian government remained exposed, and it was that gap that FASCSA was built to close: not by regulating what AI is, but by regulating what the government *buys*.

## Phase 3: The Kill Switch (July 24, 2026)

FASCSA is a procurement weapon, and understanding it explains both the order's power and its strange contours.

The 2018 act created the Federal Acquisition Security Council and gave three officials exclusion authority: the Secretary of Homeland Security for civilian agencies, the Secretary of Defense for the Pentagon, and the Director of National Intelligence for the intelligence community. The mechanism was designed for supply chains — the suspect router, the compromised camera, the vendor whose gear phones home. It is the authority that produced the federal government's treatment of Huawei and ZTE. Huxiu, a Chinese tech publication, noted the lineage explicitly this week: this is the tool America used on Huawei, now pointed at a model maker.

The choice of instrument matters, because each tool in the U.S. arsenal has a different blast radius and a different vulnerability to legal challenge.

| Instrument | What it does | Blast radius | Precedent for AI models |
|---|---|---|---|
| Device/network bans (Phase 1) | Blocks an app or site on government systems | Narrow: one agency's devices | DeepSeek, TikTok-era practice |
| FASCSA exclusion order | Bans vendor from federal procurement; reaches "developed using" derivatives | Wide: entire civilian enterprise + contractors | **First use against an AI company** |
| Entity List (Commerce) | Cuts off U.S. suppliers, tech, chips | Extraterritorial: foreign firms shunned | Used on SenseTime, Megvii — for surveillance, not models |
| Sanctions / asset freeze | Financial isolation | Total: banking, capital markets | Not yet used on a model lab |
| Model-weight download rules | Regulates open-weight distribution | Would hit U.S. developers and hosting | Floated summer 2026; shelved |

An Entity List placement would have punished DeepSeek by cutting its supply chain — but DeepSeek's threat is downstream distribution, not upstream dependence. Sanctions would have been theater; the lab barely touches U.S. financial markets. The summer's download-rule option would have constrained American developers, a political cost the administration would not pay.

FASCSA, by contrast, costs the government almost nothing and the targeted ecosystem a great deal. It does not regulate the model; it regulates the buyer. And the federal government is a large buyer, whose compliance rules cascade outward through every prime contractor and subcontractor touching a civilian agency system.

## The Threat Dossier: What DHS Says It Knows

The published notice is careful — and thin. It cites no specific breach, incident, or intercepted traffic. It cites *categories of risk*, which is how intelligence-derived justifications are usually laundered into procurement law.

DHS's case rests on five vectors:

| # | Threat Vector | DHS Claim |
|---|---|---|
| 1 | Server location | DeepSeek infrastructure sits in China; prompts and data transit PRC jurisdiction |
| 2 | PRC legal access | Chinese law gives state cyber and intelligence bodies broad authority to access private company infrastructure |
| 3 | Sign-up data collection | Personal information collected at registration, stored in China, per DeepSeek's own privacy policy |
| 4 | Prompt exfiltration | Sensitive data typed into prompts by government staff or vendors "may result in the transfer of sensitive data to the PRC" |
| 5 | Application security | Security weaknesses identified in DeepSeek's iOS app; possibility of malware or tracking embedded in model products |

A July 2026 DHS memo, released alongside the order, added an operational coda: agencies were told to monitor traffic to and from DeepSeek's services reaching government websites, increase logging, and tighten controls against data exfiltration.

Security professionals have noted the asymmetry. "Hosted frontier models already refuse to help mid-breach. The usual fallback is an open-weight model you run yourself," wrote one incident-response brief. "For federal civilian agencies, one of the popular ones just got thrown out." The self-hosting escape hatch is precisely what the "developed using DeepSeek implementations" clause appears designed to close.

Whether it *legally* closes it is another matter. The notice is silent on whether self-hosted copies of MIT-licensed weights count as covered products. Federal suppliers must check SAM.gov at least every three months for covered items and report what they find; what they are supposed to report is, at present, a matter of interpretation.

## The Blast Radius

The order's practical scope is best understood as three concentric rings — each with a different exposure profile. The boundary lines, as published:

| In Scope | Outside Scope |
|---|---|
| Federal civilian executive agencies (Treasury, State, Justice, HHS, etc.) | Department of Defense and military systems |
| DeepSeek and covered affiliates as vendors | National security systems; compartmented/SCI systems |
| Third-party products/services "developed using DeepSeek implementations" | Private companies and consumers (no direct restriction) |
| Federal contractors' systems touching civilian agency IT | State governments (free to adopt or ignore) |
| SAM.gov quarterly covered-item checks and reporting | No stated compliance deadline for removal |

**Ring one: the agencies.** The civilian executive branch — Treasury, State, Justice, HHS — must inventory and remove. Analysts like Ma Jihua, a veteran Chinese telecom observer quoted in state media, were quick to point out the self-inflicted cost: agencies and contractors "seeking cost-effective AI tools" will now "turn to more expensive alternatives."

**Ring two: the contractors.** This is where the order bites deepest. Any company selling software or services into civilian agency systems must now certify, in effect, that its stack contains no DeepSeek derivatives — or register what it finds. Vendors that quietly built customer-service agents, document classifiers, or code assistants on DeepSeek's open weights face an unpleasant choice: rebuild on another base model, or lose federal business. The undefined "implementations" language means many will over-comply, ripping out anything DeepSeek-adjacent to be safe.

**Ring three: the ecosystem — by example.** The order does not touch private companies, state governments, or consumers. But the first FASCSA order against an AI model company is a template, and everyone knows it. Qwen, GLM, Kimi — every Chinese lab whose weights circulate through American cloud marketplaces is now a candidate for Order #2026-02.

The timing, as policy theater, was almost impossibly on the nose. In the same week the order surfaced: DeepSeek shipped V4.1-Flash-1017, its fastest and cheapest model yet; Cloudflare listed the family on Workers AI; DeepSeek opened its Search and Fetch APIs to all developers; and — two days before the Federal Register notice — it open-sourced its DeepInfer inference engine. We covered that gambit separately: the company is betting that open infrastructure makes it too embedded to excise. The federal order is Washington's counter-bet — that procurement law can excise it anyway, one buyer at a time.

![Code and metrics on a screen — the compliance scramble now underway inside every federal contractor's AI stack](https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop)

## Phase 4: The Mirror

Beijing's response came from the Ministry of Commerce within a day, and it hit the notes its audience expected: the order is discriminatory, it ignores the consensus Xi and Trump reached in Washington in September, it abuses "national security" to suppress Chinese companies, and China "will closely monitor the situation and take all necessary measures."

The more interesting signal is what Beijing is doing rather than saying. On October 16 — three days before the DeepSeek order surfaced publicly — China's Ministry of Commerce and Ministry of Science and Technology proposed adding 40 technologies to the country's export-control catalogue. Twenty-three are AI-specific. The draft covers large language models, AI agents, chip-design methodologies, and computing-cluster architectures, and — in its most consequential line — treats model weights and source code above specified performance thresholds as controlled material. The Associated Press reported that models with at least two trillion parameters, or with "globally leading capabilities," could fall under restriction. Public comment runs through November 15; an interim registration requirement is already live.

Put the two regimes side by side and a single architecture emerges from opposite directions:

| Dimension | U.S. Regime (DeepSeek Order) | China Draft Catalogue (Oct 16) |
|---|---|---|
| Primary target | Foreign AI products entering U.S. government | Chinese AI technology leaving the country |
| Core mechanism | Procurement exclusion (FASCSA) | Export licensing + registration |
| Model weights | Excluded from federal systems if DeepSeek-derived | Controlled above performance thresholds (≥2T params reported) |
| Open-source treatment | Undefined — "implementations" clause may reach self-hosted weights | Published open-source releases explicitly excluded |
| API / SaaS access | Not directly restricted (order covers products/services used by agencies) | Explicitly outside scope of controls |
| Legal home | 2018 supply-chain statute; FASC recommendation | Commerce + Science & Technology ministries; comment to Nov 15 |
| Current stage | In force | Draft; interim registration already effective |

The symmetry is the story. Washington is walling Chinese models out of its public sector; Beijing is licensing its own models' escape. Both governments spent October 2026 constructing legal machinery to govern the cross-border movement of open-weight AI — the U.S. from the demand side, China from the supply side. As one policy tracker put it: both sides are now gating cross-border use of open models.

And there is a scheduled collision point. The first AI-specific dialogue under the new U.S.-China AI channel — agreed during Xi's Washington visit — is set for November, days after Beijing's export-control comment period closes. The two negotiating teams will sit down with the DeepSeek exclusion order on one side of the table and the 23-technology draft catalogue on the other.

## What Comes Next

Five things are worth watching, in rough order of probability:

| Horizon | Development | Signal |
|---|---|---|
| Nov 15, 2026 | China's export-control comment period closes | Whether the 2T threshold and weights language survive intact |
| November 2026 | First U.S.-China AI-channel dialogue | Whether DeepSeek is raised as a bargaining chip |
| Q1 2027 | Contractor compliance reports filter through SAM.gov reviews | The true depth of DeepSeek adoption inside federal IT |
| 2027 | State governments adopt FASCSA-style exclusions | The TX/NY/VA/IA device bans suggest appetite exists |
| Ongoing | Next FASCSA order targets another Chinese lab | Qwen and GLM are the obvious candidates; an order against a hosted-API ecosystem (no self-host option) would test the model |

The deeper question is whether Order #2026-01 remains an anomaly or becomes a genre. The FASC has demonstrated that the exclusion machinery works on a model company — legally, procedurally, politically. The precedent costs nothing to reuse. For Chinese labs, the strategic response is already visible in DeepSeek's own behavior: open the infrastructure, publish the weights, become plumbing. For American agencies, the cost is a slow, quiet tax — pricier models, narrower options, and a compliance regime whose central term nobody can define.

The first model exile is unlikely to be the last. Twenty-one months ago, this arc began with an IT department unplugging a chatbot; it now ends with two superpowers writing permanent customs procedures for trained matrices crossing their borders.

## What People Are Saying

**@texasiyo, Twitter/X (AI policy researcher):**
> "The detail everyone missed: the 60-day exception window closed BEFORE the order was published. This wasn't oversight. It's how FASCSA works — quiet by design. If you're waiting for the comment period, there isn't one."
>
> *(Translation: the procedural quietness is the point — exclusion orders are built to be uncontestable after the fact.)*

**知乎用户 · 然冉 (Zhihu, 4.2K upvotes):**
> "用对付华为的法律对付一个模型公司，说明美国真正害怕的不是DeepSeek的服务器，而是它的权重文件在全世界流动。服务器可以禁，权重已经复制了几百万份了，怎么禁？"
>
> *(They're using the law built for Huawei against a model company — it shows what Washington actually fears isn't DeepSeek's servers, it's the weight files circulating worldwide. Servers can be banned; the weights have already been copied millions of times. How do you ban that?)*

**hn_throwaway_42, Hacker News (top of thread, 312 points):**
> "The interesting test case: a federal contractor running Qwen fine-tunes. Qwen isn't named in the order. But 'developed using DeepSeek implementations' doesn't cover it either. So today Qwen is legal in federal IT and DeepSeek isn't — based on an undefined term in a law from 2018. That's not security policy, that's vibes with a docket number."
>
> *(The selective scope — DeepSeek named, other Chinese labs untouched — exposes the arbitrariness of the undefined "implementations" language.)*

**微博用户 · 科技侦察兵 (Weibo, 1.8K reposts):**
> "商务部表态很快，但真正的反制牌在稀土和光伏。DeepSeek自己反而最淡定，模型照样发，引擎照样开源。你禁你的，我开我的。"
>
> *(MOFCOM responded fast, but the real counter-cards are rare earths and photovoltaics. DeepSeek itself is the calmest — still shipping models, still open-sourcing engines. You ban yours; we open-source ours.)*

**豆瓣网友 · 玻璃群岛 (Douban):**
> "最讽刺的是，联邦机构里用DeepSeek最多的可能恰恰是那些预算最紧的小部门——他们才是最需要便宜模型的。现在他们要花三倍的价钱买更差的模型，这笔钱最后还不是纳税人出。"
>
> *(The most ironic part: the federal offices using DeepSeek most were probably the smallest, most budget-constrained ones — the ones who need cheap models most. Now they pay triple for worse models, and taxpayers foot the bill.)*

**git-dragon, GitHub (comment on DeepInfer release thread):**
> "As someone who evaluated DeepSeek for a state-agency-adjacent project last year: the compliance fog is the feature. We're ripping out a fine-tuned 27B this sprint. Not because it's unsafe — because no lawyer will sign off on an undefined term. Open weights lost to paperwork."
>
> *(An engineer's firsthand account: the legal ambiguity itself forces over-compliance, regardless of the technology's actual merits.)*

---

**Related coverage:**

- [DeepSeek Open-Sources DeepInfer: The Ban That Backfired](/blog/deepseek-deepinfer-open-source-us-ban-backfire-2026/) — the open-source counter-move, two days before the order surfaced
- [China's Export Controls: The Sovereignty Perimeter](/blog/china-ai-export-controls-sovereignty-perimeter-2026/) — Beijing's mirror-image licensing regime
- [Two Stacks, One Hotline: The US-China AI Parallel Buildout](/blog/two-stacks-one-hotline-us-china-ai-parallel-2026/) — the infrastructure story behind both regimes
- [The End of Cheap: China's AI Price Advantage Just Died](/blog/china-ai-chip-shortage-end-cheap-model-era-2026/) — why the cheapest model on the market is the one Washington just banned
