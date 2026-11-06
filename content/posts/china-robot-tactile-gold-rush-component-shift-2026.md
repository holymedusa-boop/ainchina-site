---
title: "The Tactile Gold Rush: How China's Robot Money Is Moving From Bodies to Senses"
date: "2026-11-07"
excerpt: "In the first half of 2026, China's embodied intelligence sector absorbed ¥93.5 billion across 322 deals. But by October, deal count had nearly halved. The easy money for full-robot startups is drying up — and a new wave of capital is flowing somewhere unexpected: into the components that let robots feel. Dexterous hands, tactile sensors, and electronic skins are attracting outsize funding while the broader sector cools. The logic is simple and ruthless — vision and language can be trained on the internet, but touch must be collected by hand."
tags: ["China AI", "Embodied AI", "Tactile Sensors", "Dexterous Hands", "Electronic Skin", "Robotics", "Ant Group", "PaXini", "Damo Robotics", "Jooch Industries", "Humanoid Robots", "IT Juzi", "Component Supply Chain", "Physical AI"]
image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=1200&q=80"
heroImage: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=1200"
readingTime: 16
---

On October 29, in a conference room in Weihai, a mid-sized city on China's Shandong coast, a startup most people outside the robotics industry have never heard of closed a 100-million-yuan Series A round. The company, Jooch Industries, makes flexible fabric embedded with conductive fibers that can sense pressure, texture, and shear. Its product is not a robot. It is the skin that robots will wear. The lead investor was Ant Group — the fintech giant that also led an investment in tactile-sensor startup Damo Robotics two months earlier.

That same week, overall funding for China's embodied intelligence sector was telling a very different story. After peaking at 60 deals worth ¥11 billion in September, October's tally had collapsed to 33 deals totaling ¥10.1 billion — a decline driven almost entirely by investors pulling back from full-robot startups and foundation-model plays. The robots that had danced at the World Humanoid Robot Games in Beijing, that had run the 100-meter dash faster than Usain Bolt, that had starred in Unitree's 460%-pop IPO — those robots were no longer where the smart money was going.

The money was going to what those robots cannot do: **feel**.

## The Funding Cliff Nobody Predicted

For two and a half years, China's embodied intelligence sector was the hottest investment category in the world's hottest technology market. The numbers from the first half of 2026 were staggering: **¥93.5 billion in disclosed funding across 322 deals**, according to IT Juzi — a five-fold increase in capital deployed and a 137% jump in deal count year-on-year. Early-stage rounds dominated: 190 of those 322 deals were seed, angel, or Pre-A, meaning investors were betting on founders and ideas more than products and revenue.

| Embodied AI Funding Trajectory | Period | Deals | Amount | YoY Change |
|---|---|---|---|---|
| Full-year 2024 | Jan–Dec 2024 | 103 | ¥9.4B | Baseline |
| Full-year 2025 | Jan–Dec 2025 | 325 | ¥39.8B | +216% deals, +326% capital |
| Q1 2026 | Jan–Mar 2026 | 50+ | ¥20B (~$2.9B) | +60% vs Q1 2025 |
| H1 2026 total | Jan–Jun 2026 | 322 | ¥93.5B | 5x capital vs H1 2025 |
| September 2026 | Single month | 60 | ¥11.0B | Peak monthly activity |
| October 2026 | Single month | 33 | ¥10.1B | Deals down 45% from Sept |

Sources: IT Juzi, CENTI, KPMG, 36Kr, April–November 2026.

Then the correction arrived. October's deal count fell by nearly half. The capital didn't disappear — ¥10.1 billion still flowed — but it concentrated. The broad, almost indiscriminate funding of anything with a humanoid silhouette gave way to something more precise. Investors were no longer writing checks for robot bodies or yet another foundation model promising to be "the brain of physical AI." They were writing checks for the parts that make those bodies useful.

| Where the Money Went (and Where It Stopped) | H1 2026 Funding | Oct 2026 Funding | Investor Sentiment |
|---|---|---|---|
| Full humanoid robot makers | ¥20B+ (23 deals in dexterous hands alone) | Slowing sharply | Saturated; Unitree, AGIBOT dominate |
| Embodied foundation models | ¥63.4B cumulative (2023–Aug 2026) | Selective | Consolidating around 3–4 leaders |
| Dexterous hands (suppliers) | ¥8.5B (51 supplier deals) | Still active | Preferred category |
| Tactile sensors / electronic skin | ¥3.1B+ (first 7 months) | Growing | The new frontier |
| Joint modules / actuators | Included in component deals | Steady | Infrastructure play |
| Data collection / teleoperation | Growing niche | Growing | Strategic value rising |

Sources: IT Juzi, 36Kr, Bit.fan industry analysis, August–November 2026.

The pattern is unmistakable. The capital that had flooded into China's embodied AI sector — inflating valuations to levels that made even 2021's SaaS boom look conservative — is now flowing upstream, into the component layer. And within components, one category is attracting disproportionate attention: the sensing systems that let robots perceive the physical world through touch.

## Why Touch Became the Bottleneck

The logic behind the component shift starts with a fundamental asymmetry in how robots learn. Vision can be trained on billions of internet videos — YouTube alone contains enough visual data to teach a model most of what it needs to know about the visual world. Language can be trained on the entire corpus of human text. These are abundant, essentially free training resources that scale to any size.

Touch is different. There is no internet-scale corpus of tactile data. No YouTube of grasping, sliding, pressing, and releasing. The physical quantities that matter most for manipulation — tangential force, material texture, slip detection, elastic response, surface temperature — cannot be generated with high fidelity by simulation engines. They must be collected frame by frame, through physical contact, in the real world. And that collection is slow and expensive.

| Data Type | Source | Cost per Hour | Scalability |
|---|---|---|---|
| Vision data | Internet videos, cameras | ¥200–500/hour | Effectively unlimited |
| Language data | Text corpora | Near zero | Unlimited |
| Tactile data | Physical robot manipulation | ¥1,000+/hour | Severely constrained |
| Force-torque data | Instrumented grippers | ¥800–1,200/hour | Hardware-limited |
| Multi-modal (V+T+L) | Synchronized capture rigs | ¥1,500–3,000/hour | Rarest and most valuable |

Sources: 36Kr, IT Juzi industry estimates, October 2026.

Tactile data costs roughly three times what visual data costs, per hour of useful training material. And unlike visual data, which can be scraped passively from the web, tactile data requires a robot — ideally one with good sensors and a capable hand — to physically interact with objects, recording every sensation. The party that controls the most efficient tactile data collection pipeline effectively controls the rate at which embodied AI improves.

This is why Ant Group, which has deployed its embodied AI subsidiary Lingbo to build world models and VLA systems, is investing in the sensor companies that generate the data those models need. It is also why the Chinese government has identified tactile sensing as a strategic priority. The Ministry of Industry and Information Technology's November 2023 guidelines on humanoid robots explicitly named core components — including dexterous hands and tactile perception systems — as national priorities. The 15th Five-Year Plan, which runs from 2026 to 2030, lists embodied intelligence among China's future industries.

## Three Routes to Robot Skin

China's tactile sensing ecosystem has crystallized around three distinct technical architectures, each optimized for different parts of the robot body and different task requirements. Understanding these routes is essential to understanding where the investment is going and which companies might emerge as the category-defining players.

**Route 1: Hall-Effect Magnetic Sensing (PaXini).** The Hall-effect approach uses magnetic field changes to detect force and deformation with extremely high precision. PaXini, the current leader in this category, has built a full-stack product line that spans tactile sensors, dexterous hands, and humanoid robots. Its PX-6AX-GEN3 sensor simultaneously measures 15 dimensions including six-axis force, material texture, and elastic response, with repeatability better than 0.5% full scale. The company's DexH13 hand packs 1,140 integrated tactile processing units. PaXini claims to ship nearly one million proprietary tactile chips per year to over 1,000 global customers, with sensor prices starting at just $49 — a price point that would have been unthinkable two years ago.

**Route 2: Visual-Tactile Fusion (Damo Robotics).** This approach embeds cameras beneath a compliant surface and reads deformation patterns as image data, achieving tactile resolution of tens of thousands of sensing points per square centimeter. Because the output is naturally formatted as images, it plugs directly into end-to-end neural network architectures that were designed for visual processing. Damo Robotics, backed by Ant Group, is the leading Chinese player in this category. The trade-off is bulk and cost — visual-tactile sensors require miniature cameras, lighting, and transparent elastomer layers, making them harder to miniaturize for fingertip deployment than Hall-effect alternatives.

**Route 3: Conductive Fabric (Jooch Industries).** The newest and potentially most scalable approach weaves conductive and piezoresistive fibers directly into fabric at the fiber level. When external force deforms the fibers, the conductive pathways change resistance, and the signal is read and converted into tactile data. This approach sacrifices some resolution but offers advantages that the other routes cannot match on large curved surfaces: bendability, breathability, and dramatically lower cost. A robot's torso, arms, and even soles can be covered in fabric-based electronic skin for a fraction of what dense sensor arrays would cost.

| Technical Route | Leader | Resolution | Best For | Cost Profile | Key Investor |
|---|---|---|---|---|---|
| Hall-effect magnetic | PaXini | 15 sensing dimensions, <0.5%FS | Fingertips, dexterous hands | $49+ per sensor (mass production) | Consumer electronics giant (unnamed), BOCI, Kunpeng Fund |
| Visual-tactile fusion | Damo Robotics | 10,000+ points/cm² | High-precision fingertips, grippers | Moderate-high (camera + elastomer) | Ant Group (lead) |
| Conductive fabric | Jooch Industries | Fiber-level, area coverage | Torso, arms, large surfaces, soles | Lowest at scale | Ant Group (lead), Zero One Venture Capital |
| Piezoresistive array | Ensuring Technology | Hexagonal tiling, full-body coverage | Full-body electronic skin | ~$100 for full-body coverage | Not disclosed |

Sources: Company announcements, 36Kr, CES 2026 coverage, Robotics Business Review, January–November 2026.

These three routes are not mutually exclusive — they solve different problems. The future robot will likely have Hall-effect or visual-tactile sensors at its fingertips (where resolution matters most), and fabric-based electronic skin on its arms and torso (where coverage and cost matter more). This is precisely the architectural bet that Ant Group is making by investing in both Damo (fingertips) and Jooch (body surface).

## The Cost Collapse

What makes the component shift economically significant is not just where the funding is going — it is what Chinese manufacturing is doing to component prices. The cost curves are bending in ways that resemble what happened to solar panels, lithium batteries, and EVs before them.

Dexterous hands illustrate the pattern vividly. In 2020, a research-grade dexterous hand cost approximately $16,500. By 2024, that had fallen to roughly $12,500. By late 2026, Unitree's Dex-series hands had broken below the $1,000 threshold at volume — a 16-fold reduction in six years. The primary drivers are domestic substitution of actuators and sensors: Chinese coreless motors now cost 30% to 40% of imported Maxon and Faulhaber equivalents, and domestic Hall-effect tactile sensors are priced at roughly ¥199 versus ¥1,000 or more for imported alternatives.

| Component Cost Evolution | 2020 | 2024 | 2026 | Projected 2030 |
|---|---|---|---|---|
| Dexterous hand (avg. selling price) | $16,500/unit | $12,500/unit | <$1,000 (Unitree Dex at volume) | $300–500 |
| High-res tactile sensor | $14,000/unit | $500–2,000/unit | $49–199/unit (domestic) | <$20 |
| Full-body electronic skin | Prototype only | Lab-grade, $10,000+ | ~$100 (HexSkin estimate) | <$50 |
| Coreless motor (domestic vs import) | 100% (imported) | 60–70% | 30–40% of import cost | 20–25% |
| Component localization rate | ~15% | ~40% | ~55% (est.) | 80% target |
| Dexterous hand BOM | $12,000+ | $8,000–10,000 | $3,000–5,000 | $1,200–1,800 |

Sources: QYResearch, Meticulous Research, 36Kr, industry estimates, August–November 2026.

The localization trajectory is the key variable. In 2025, roughly 40% of dexterous hand components were domestically sourced. Industry analysts project 80% localization by 2030, which would cut the bill of materials by 50% to 60%. The drive system and sensing together account for about 80% of a dexterous hand's BOM — precisely the components where Chinese suppliers are making the fastest progress.

This cost collapse has profound implications for the global robotics industry. If dexterous hands drop to $300–$500 per unit — which several analysts now project for 2030 — they become viable not just for humanoid robots but for every industrial robot arm, warehouse picker, and collaborative assembly station on earth. The market expands from research labs and flagship humanoid programs to the entire industrial automation installed base.

## The Money Trail: Who Is Investing and Why

The investor composition in China's tactile and component space reveals the strategic thinking behind the shift. This is not venture capital chasing a hot category. It is strategic capital positioning for control of the embodied AI supply chain.

**Ant Group** has been the most aggressive strategic investor. Its Lingbo embodied AI subsidiary is building world models and vision-language-action systems that need tactile training data. So Ant led Jooch Industries' Series A in late October — its second tactile investment in three months, following the Damo Robotics round in August. Lingbo is reportedly targeting ¥1.5 billion for its own first funding round, with a second planned by year-end. The strategy is clear: build the brain, and own the skin that feeds it.

**Government funds** are playing a direct role. State-backed funds participated in Inspire Robots' Series C1/C2 rounds in February 2026. Beijing, Shenzhen, and Shanghai have all established dedicated embodied intelligence funds and implementation plans. The 15th Five-Year Plan has made embodied intelligence an explicit national priority.

**Automotive and industrial capital** is entering through a different door. NIO Capital co-led Acorn Robot's round — a company building what it calls "embodied production islands," standardized bimanual flexible manufacturing cells. CMB Innovation also participated. These investors are not betting on humanoid robots as a consumer product; they are betting on manipulation capability as an industrial tool, and they want to be first in line to deploy it in their own factories.

**Corporate venture arms** of consumer electronics companies are circling PaXini, which closed a strategic round co-led by what sources describe as a "trillion-level consumer electronics and semiconductor giant" — the kind of description that in China's tech ecosystem almost invariably means Huawei, Xiaomi, or a similarly scaled player.

| Investor | Tactile/Component Bet | Strategic Logic |
|---|---|---|
| Ant Group | Jooch Industries (Series A lead), Damo Robotics (lead) | Lingbo world models need tactile training data |
| NIO Capital | Acorn Robot (co-lead) | Deploy manipulation in automotive manufacturing |
| CMB Innovation | Acorn Robot (co-lead) | Financial + industrial automation exposure |
| State-backed funds | Inspire Robots C1/C2, multiple component deals | National strategic priority (15th Five-Year Plan) |
| Trillion-level consumer electronics | PaXini strategic round | Integrate tactile sensing into consumer robotics |
| Zero One Venture Capital | Jooch Industries (follow-on) | Early-stage component specialist |
| DeepSeek | ¥140.8M strategic placement in Unitree IPO | AI model + robot body integration |

Sources: LatePost, 36Kr, IT Juzi, company announcements, February–November 2026.

## The Global Context: A Different Play Than America

The component shift in China contrasts sharply with the approach being taken in the United States. American embodied AI investment has concentrated on foundation models for robotics — Physical Intelligence, Skild AI, and the various GR00T initiatives that seek to build general-purpose robot brains. The bet is that intelligence, once sufficiently general, can be paired with any hardware.

China's bet is different: that the hardware layer — specifically the sensing and actuation components that determine what a robot can physically perceive and do — is the harder problem and the more defensible moat. The reasoning has merit. A brilliant robot brain mounted on a body with crude touch sensors is like a concert pianist wearing oven mitts. The intelligence is wasted if the interface with the physical world lacks fidelity.

The data supports China's positioning. China produces approximately 49% of the world's dexterous hands today, a share projected to exceed 60% by 2031. Chinese companies supplied more than 97% of global humanoid robot shipments in the first half of 2026. Unitree, AGIBOT, and UBTECH collectively hold roughly 80% of the global market. And China's cost advantages in manufacturing — the same forces that collapsed solar panel and battery prices — are now being applied to robotic components with similar effect.

| Dimension | China Approach | United States Approach |
|---|---|---|
| Primary bet | Hardware components + manufacturing scale | Foundation models + general intelligence |
| Key players | PaXini, Damo, Jooch, Inspire, Unitree, AGIBOT | Physical Intelligence, Skild AI, Tesla, Figure |
| Government role | Direct: MIIT guidelines, Five-Year Plan, state funds | Indirect: DARPA grants, NIH, defense contracts |
| Cost trajectory | Aggressive deflation through manufacturing scale | Premium pricing for research-grade components |
| Market share (humanoids) | ~97% of global shipments | <3% (Tesla pre-production) |
| Dexterous hand production share | ~49% (2024) → >60% projected (2031) | Minority share |
| Key advantage | Supply chain depth, cost engineering | AI model sophistication, capital abundance |
| Key risk | Component commoditization, price war | Hardware dependency on Asian supply chain |

Sources: QYResearch, Meticulous Research, Aju Press, Counterpoint Research, 2026.

South Korea's diagnosis of its own position is instructive. The Korea Institute of Machinery and Materials identified two critical weaknesses in its April 2026 policy report: a shortage of homegrown AI foundation models and, significantly, a fragile supply chain for humanoid-specific components — actuators, reducers, and robotic hands. Seoul responded with ₩2.3 trillion through 2030 and a ₩150 billion commitment to Wonik Robotics for a robot hand plant. The implication is clear: even advanced manufacturing economies see component supply as the binding constraint.

## What Could Go Wrong

The component gold rush is not without risks, and several bearish signals deserve attention.

**Consolidation will be brutal.** Of the 32 Chinese companies claiming to build complete dexterous hands, industry analysts expect the number of effective players to shrink sharply by the end of 2027. Nearly 20 of those 32 are competing in the same category with similar technology and overlapping customer bases. The same dynamics that collapsed prices — domestic manufacturing scale, localization, standardization — will also compress margins to the point where only the most efficient producers survive.

**OEM vertical integration is a sword of Damocles.** All 15 of China's funded humanoid robot OEMs have committed to developing dexterous hands in-house. They raised approximately ¥20 billion to do so. While most still buy sensors, motors, and precision screws from specialized vendors, the risk that a major OEM internalizes its entire component stack — Tesla-style — hangs over every supplier's valuation.

**Tactile data economics may not justify the investment.** The thesis that tactile data is a defensible moat assumes that current VLA architectures will remain the dominant paradigm for robot learning. If a new approach — simulation-to-reality transfer, or a breakthrough in synthetic tactile data generation — reduces the need for physical data collection, the companies that raised capital specifically to collect tactile data will find their core value proposition evaporating.

**The bubble question is unresolved.** ¥93.5 billion in half-year funding for a sector where the largest company (Unitree) generated approximately ¥1.1 billion in first-half revenue suggests that valuations are running far ahead of commercial reality. The 40% correction in the STAR50 — which has cut Unitree's market value roughly in half since its August IPO — is a reminder that capital markets can reprice embodied AI narratives quickly and violently.

| Risk Factor | Severity | Timeline | Mitigation |
|---|---|---|---|
| Supplier consolidation | High | 2027–2028 | Technical differentiation, patent moats |
| OEM vertical integration | Medium-high | 2027–2029 | Tier-1 module positioning, multi-OEM supply |
| Synthetic tactile data breakthrough | Medium | 2027–2030 | Diversify into hardware + data platform |
| Sector-wide valuation reset | High | Ongoing | Revenue diversification, export markets |
| Technology route obsolescence | Medium | 2028+ | Multi-route investment (Ant's approach) |
| Trade restrictions on component exports | Low-medium | 2027+ | Dual-shoring, non-US markets |

## What Comes Next

The component shift in China's embodied AI sector is not a retreat. It is a maturation — the transition from a market that rewarded narrative to one that rewards engineering. The full-robot startups that raised enormous rounds on the strength of a viral demo video now face a harder test: shipping products that work reliably in environments that are not conference stages. The component startups face a different test: proving that their specific piece of the robot body is good enough, cheap enough, and scalable enough to be designed into the next generation of machines from every OEM.

Three developments will determine how this plays out.

**First, the IPO pipeline.** With 51 embodied AI firms awaiting listing on the Hong Kong Stock Exchange — representing 12.7% of all applicants — the capital markets will soon force a public reckoning with embodied AI valuations. If the first few listings price well, the component category will attract renewed investment. If they stumble, the funding winter will deepen.

**Second, Unitree's model R&D allocation.** In its IPO, Unitree allocated ¥2.02 billion to model R&D — more than the ¥1.11 billion it allocated to robot body R&D for the first time. If China's most successful robot company is investing more in intelligence than in hardware, it validates the component shift as a durable structural trend rather than a temporary rotation.

**Third, the Ant Group playbook.** If Ant's strategy of pairing Lingbo's world models with proprietary tactile sensing through Damo and Jooch produces demonstrably better manipulation performance than competitors, every major Chinese tech company will replicate the model. Baidu, Tencent, Alibaba, and ByteDance all have embodied AI initiatives. None has yet made equivalent component investments. The first mover advantage in the "brain + skin" integrated stack could be decisive.

The robots of 2027 will be judged not by how well they dance, but by how carefully they handle a wine glass. The companies that make that possible — the ones weaving conductive fibers, embedding cameras in silicone, and manufacturing Hall-effect sensors by the million — are the ones attracting capital while the rest of the sector cools. The hands that build the future, it turns out, need skin first.

---

![Robotic hands with tactile sensors represent the new frontier in embodied AI investment](https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&q=80)
*The shift from robot bodies to robot senses: tactile sensors, dexterous hands, and electronic skin are attracting capital even as overall embodied AI funding cools.*

## Voices from the Ground

**@触觉研究员 · Zhihu**
"触觉数据比视觉数据贵三倍，这不是 bug 是 feature。贵意味着稀缺，稀缺意味着壁垒。谁先把触觉数据的采集成本打下来，谁就拿到了具身智能的入场券。"
*"Tactile data costs three times visual data — that's not a bug, it's a feature. Expensive means scarce, and scarce means a moat. Whoever drives down the cost of collecting tactile data first gets the ticket to embodied AI."*

**@hardtech_investor · X (Twitter)**
"Ant investing in both Damo (visual-tactile) and Jooch (fabric) is the tell. They're not picking a technology route — they're buying the entire stack and letting the market decide. Smart capital."
*(posted in English)*

**@机器人供应链老王 · Weibo**
"灵巧手32家声称能造整手的，最后能活下来的不超过5家。零部件赛道看起来热闹，但价格战已经开始。国产空心杯电机已经把Maxon的价格打到三分之一了，接下来 tactile sensor 也会一样。"
*"Of the 32 companies claiming to build complete dexterous hands, no more than five will survive. The component track looks hot, but the price war has already started. Domestic coreless motors have already beaten Maxon's price to a third. Tactile sensors will go the same way."*

**@embodied_ai_daily · X (Twitter)**
"China's robot strategy in one sentence: own the hands, own the skin, own the supply chain, and let America own the models. When the models commoditize — and they will — the components will be the last moat standing."
*(posted in English)*

**@触觉传感器从业者 · Xiaohongshu**
"入行三年，工资翻了三倍。以前触觉传感器是冷门中的冷门，现在猎头天天打电话。但说实话，技术路线还没定，大家都在赌。视觉触觉、霍尔、柔性电子皮肤，谁赢了不知道，但输了的那些公司就完了。"
*"Three years in the industry, salary has tripled. Tactile sensors used to be the coldest of the cold. Now recruiters call every day. But honestly, the technology route isn't settled — everyone's gambling. Visual-tactile, Hall-effect, flexible e-skin. Who wins? I don't know. But the companies that bet wrong are done."*

**@auto_robot_bridge · Zhihu**
"车企投机器人零部件的逻辑很简单：他们自己就是最大的客户。蔚来资本投Acorn Robot不是财务投资，是给自家工厂提前锁定产能。这和特斯拉自研Optimus手的逻辑一脉相承。"
*"The logic of automakers investing in robot components is simple: they are the biggest customers themselves. NIO Capital's investment in Acorn Robot isn't a financial investment — it's locking in capacity for their own factories in advance. This follows the same logic as Tesla developing the Optimus hand in-house."*

---

## Related reading:

- [Unitree's $61 Billion IPO: China's Robot Industry Gets Its First Pure-Play Stock](/blog/unitree-610-billion-ipo-china-robot-capital-markets-2026/)
- [China's AI Bubble Just Burst: $480 Billion Gone, and the Real Test Begins](/blog/china-ai-bubble-burst-480-billion-star50-2026/)
- [The World Humanoid Robot Games: Beijing's Physical AI Showcase](/blog/world-humanoid-robot-games-beijing-2026/)
- [Tiangong Breaks Human World Records: Embodied AI's China Moment](/blog/tiangong-robot-breaks-human-world-records-embodied-ai-china-2026/)
