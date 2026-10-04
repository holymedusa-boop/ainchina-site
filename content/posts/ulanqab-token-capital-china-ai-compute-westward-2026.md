---
title: "The Token Capital: How a Potato Town in Inner Mongolia Out-Committed OpenAI's Stargate"
date: "2026-10-05"
excerpt: "Goldman Sachs says Ulanqab, a city of 1.7 million best known for potatoes, now holds 12.5GW of committed data center capacity — more than OpenAI's entire Stargate program. We went deep on the geography, the players, and the physics behind China's strangest AI story."
keywords: ["Ulanqab", "China AI data centers", "12.5GW compute cluster", "Goldman Sachs China data centers", "East Data West Computing", "green AI infrastructure", "Envision Galaxy Base", "DeepSeek data center", "China compute buildout", "Token Capital"]
coverUrl: "https://images.unsplash.com/photo-1594915440248-1e419eba6611?w=1200"
---

A QbitAI reporter traveled home to Ulanqab during the National Day holiday expecting to find the future. She found sheep. The new data center projects that Wall Street has been obsessing over — the ones behind a Goldman Sachs research note that put this Inner Mongolian city on the cover of the global AI infrastructure debate — are still plots of grassland, most of them stuck in permitting paperwork. Construction, if everything goes right, begins after the spring thaw. The earliest machines hum in late 2027.

And yet the numbers on paper are staggering enough that none of that seems to matter. As of June 2026, Ulanqab — a prefecture-level city of roughly 1.7 million people, historically known as China's "Potato Capital" and, more poetically, the place where "wind blows twice a year, half a year each time" — has accumulated approximately **12.5 gigawatts of committed data center capacity**. That is more than the initial 10GW commitment that OpenAI announced for its entire Stargate program in 2025. More than seventy percent of those commitments were signed in the last twelve months.

This is a deep dive into the single strangest story in the global AI infrastructure race: how a wind-scoured plateau 240 kilometers from Beijing became the place where China's model labs, cloud giants, and renewable energy companies are collectively betting more than half a trillion yuan that the token economy will keep growing for the rest of the decade.


---

## Table of Contents

1. [The Number That Made Goldman Look Twice](#number)
2. [Why Ulanqab: The Geography of Cheap Tokens](#geography)
3. [The Player Map: Who Is Building What](#players)
4. [From Storage Barns to Token Factories](#evolution)
5. [The Utilization Gap: Paper GW vs. Running MW](#utilization)
6. [The Power Economics](#power)
7. [The Risks Nobody Puts in Press Releases](#risks)
8. [The Global Context: A Tale of Two Energy Maps](#global)
9. [What Comes Next for the Token Capital](#outlook)


---

## The Number That Made Goldman Look Twice {#number}

In August 2026, Goldman Sachs published a China data center industry report that devoted unusual attention to a city most of its readers had never heard of. The bank's analysts concluded that Ulanqab had become "one of the largest and fastest-growing AI compute clusters in China and the Asia-Pacific," citing the 12.5GW figure. WIRED followed with a feature asking, in essence, how an unexpected place became the center of China's AI boom.

To understand what 12.5GW means, you need two reference points. The first is American: OpenAI's Stargate — the largest AI infrastructure commitment ever announced in the United States — targets 10GW at full buildout across multiple states, backed by a headline investment figure of $500 billion. The second is Chinese: all of China's data centers together consumed approximately 170 billion kilowatt-hours of electricity in 2025. If Ulanqab's 12.5GW ran at full load around the clock, it alone would draw roughly 109.5 billion kWh per year — more than sixty percent of the entire country's 2025 data center consumption.

| Metric | Ulanqab Cluster | OpenAI Stargate (US) |
|---|---|---|
| Committed Capacity (as of mid-2026) | 12.5GW | 10GW (initial) |
| Announced Investment | >¥500B (~$69B) across 89+ signed projects | ~$500B headline figure |
| Share Committed in Last 12 Months | >70% | Stargate announced Jan 2025 |
| Operational Today | ~1.2GW (2025), ~800MW utilized | Phases 1–2 under construction |
| Operational Compute Power | 172,000 PFLOPS (95%+ AI/intelligent) | Not disclosed |
| Core Customers | DeepSeek, Huawei, Alibaba, ByteDance, Kuaishou, Apple, Baidu, Xiaohongshu | OpenAI, Oracle, SoftBank |
| Power Source Profile | ~67% green (wind + solar) | Mixed; gas-heavy grid in Texas |
| Time to Full Utilization | Earliest new capacity: late 2027 | Multi-year, multi-phase |

Sources: Goldman Sachs China Data Center Industry Report (Aug 2026), WIRED, 21st Century Business Herald, Caixin, QbitAI field reporting.

The comparison is imperfect, and the caveats matter. Ulanqab's 12.5GW is committed capacity — a mix of operational, under-construction, and planned projects — not racks you could lease today. Stargate's 10GW is a deliberately conservative initial framing for a program with an explicitly longer runway. But as a signal of where capital is flowing and how fast, the Goldman number reframes the global compute race: the largest single-site AI infrastructure bet on Earth is not in Abilene, Texas. It is on a basalt plateau in Inner Mongolia where the streets are named after tech companies.


---

## Why Ulanqab: The Geography of Cheap Tokens {#geography}

Ulanqab's origin story as a data center hub begins with an accident of geology and weather that made it a poor place to farm and a superb place to park servers.

The city sits at 1,300 meters on the Inner Mongolian plateau, on stable basalt bedrock, in a national Class I wind resource zone. Its average annual temperature is 4.3°C; summer averages 18.8°C. For roughly ten months a year, outside air can do most of the cooling work that forces Texas data centers to run power-hungry chillers through the night. The local joke — "two winds a year, half a year each" — used to be a complaint. Now it is an asset: the region's grid-connected wind and solar capacity exceeds 21GW, about the equivalent of the Three Gorges Dam, giving Ulanqab a green electricity share of roughly 67%.

Then there is Beijing. The capital is 240 kilometers away as the fiber flies, and Ulanqab runs a dedicated 144-core point-to-point dual-loop optical cable into it, holding end-to-end latency under 4.2 milliseconds. Beijing staff can reach the cluster in about 100 minutes by high-speed rail. For a training cluster, latency to users barely matters; for the inference workloads that increasingly dominate, 4.2ms is nothing.

| Geographic Advantage | Ulanqab Specification | Impact on AI Workloads |
|---|---|---|
| Electricity Price | ~¥0.32–0.35/kWh (vs. ~¥0.7 in Beijing) | ~¥800M+/GW/year saved per ¥0.1/kWh delta |
| Climate | 4.3°C annual average, ~10 months free cooling | Cuts cooling energy overhead substantially |
| Green Power | 21GW+ wind/solar installed; 67% green share | ESG compliance, carbon accounting for export |
| Latency to Beijing | <4.2ms via dedicated dual-loop fiber | Viable for latency-sensitive inference serving |
| Seismic & Flood Risk | Stable basalt plateau, low hazard | Multi-decade asset reliability |
| Land & Approvals | Vast land bank, coordinated district-level permitting | Phased multi-GW campus buildouts feasible |
| Grid Access | West Inner Mongolia main grid + on-site generation | Redundant supply paths for GW-scale campuses |

Sources: Goldman Sachs, WIRED, 21st Century Business Herald, QbitAI field reporting, tmtpost synthesis.

The result is a cost structure that western operators can only envy: total cost of operations in Ulanqab runs 30–50% below China's eastern tier-one cities, before accounting for the green-power premium that enterprise customers increasingly demand. In an industry where a one-cent-per-kilowatt-hour difference compounds into hundreds of millions of dollars across a gigawatt-scale campus, geography is destiny.


---

## The Player Map: Who Is Building What {#players}

The cluster's tenant list reads like a cross-section of the Chinese technology industry, and its arrival waves map neatly onto the country's cloud and AI history.

The first wave began around 2013, when Huawei — later joined by Alibaba, Apple (for iCloud China), and UCloud — built the storage-and-backup campuses that established the region's fiber, grid, and permitting infrastructure. Locals still drive past Huawei Avenue, Apple Avenue, and Alibaba Avenue in the Yiwutang industrial park.

The second wave arrived with short-video and consumer internet growth: Kuaishou, ByteDance, Baidu, and Xiaohongshu expanded capacity as their inference loads exploded. The third wave — the one that produced the 12.5GW headline — is the AI wave: dedicated intelligent-computing campuses designed for GPU-dense training and inference at 80kW-plus per rack.

| Player | Campus / Project | Scale | Status (Oct 2026) |
|---|---|---|---|
| Envision Energy | "Galaxy Base" (星河基地) super-monolith | 120,000 m² building; 2GW campus plan | Phase 1 commissioned Aug 6, 2026 |
| GDS International (万国数据) | GW-tier colocation campuses | Multi-GW pipeline | First-camp operator per Goldman |
| VNET (世纪互联) | Zero-carbon intelligent computing base | ~1,100 mu (~73 ha) planned | Under construction |
| Chindata (秦淮数据) | Hyper-scale campuses | GW-tier | Operating / expanding |
| DeepSeek | New GW-scale AI data center | ~1GW planned; reported 160,000 Ascend 950DT for inference | Post-¥50B financing; reportedly in planning |
| Huawei Cloud | Existing campus + Phase 3 | All-liquid-cooling, 80kW/rack capability | Operating, expanding |
| Alibaba Cloud | Existing campus | Cloud + AI training capacity | Operating |
| Kuaishou | Second campus (Bayin park) | Expansion | Under construction |
| Apple / UCloud / Baidu / ByteDance / Xiaohongshu | Existing campuses | Storage, cloud, inference | Operating |

Sources: Goldman Sachs, company announcements, Caixin, QbitAI, 21st Century Business Herald.

The most revealing entrant is Envision Energy. A wind-turbine manufacturer turned energy-technology group, Envision did not come to Ulanqab to rent racks. It commissioned what it calls the world's largest AI compute super-monolith in August — a single 120,000-square-meter building, roughly twenty soccer fields, on a campus master-planned for 2GW — powered by self-built wind farms through dedicated lines, with compute density targeting ten times that of conventional centers. Envision is the only renewable-energy company in Goldman's GW-tier first camp, and it is explicitly betting that the next decade's scarce asset is not chips but electrons. The company has already announced a follow-on "Gobi Mission" in France targeting 5GW of green AI capacity by 2030.

DeepSeek's move is the other tell. Fresh from a ¥50 billion financing round, the lab reportedly plans a ~1GW campus in Ulanqab and — per Phoenix Tech reporting — intends to deploy at least 160,000 Huawei Ascend 950DT accelerators there, oriented toward inference serving rather than training. If accurate, that makes Ulanqab the physical home of the world's most aggressive open-weights inference operation.


![Ulanqab's dedicated fiber and grid infrastructure](https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800)

---

## From Storage Barns to Token Factories {#evolution}

Walking the Yiwutang and Bayin parks today, the generational shift is visible in the buildings themselves. The first-generation halls were designed for hard drives: broad floors, modest power density, cooling dominated by airflow. The new halls are engineered like power plants.

Huawei Cloud has disclosed fully liquid-cooled AI data centers in the region with single-cabinet heat dissipation up to 80 kilowatts — an order of magnitude beyond legacy air-cooled designs. When a campus is planned at 2GW, the questions invert: you do not start with servers and add power; you start with grid interconnection, substations, on-site generation, thermal storage, and water, then design the IT load around the electrons. Goldman observed that operators are increasingly acting as green-power asset managers, optimizing procurement, managing on-site generation, and hedging power-market volatility alongside their day job of keeping GPUs alive.

| Design Dimension | Gen 1 (2013–2020) | Gen 3 AI Campus (2025–) |
|---|---|---|
| Primary Workload | Storage, backup, offline compute | LLM training + high-volume inference |
| Rack Density | 5–15 kW/rack | 60–130+ kW/rack (liquid-cooled) |
| Cooling | Air-side economization | Direct-to-chip liquid + free cooling hybrid |
| Unit of Planning | Server count, floor area | GW, substations, heat rejection |
| Network | Standard DC Ethernet | High-radix AI fabric, in-network collective ops |
| Power Strategy | Grid purchase | Grid + on-site wind/solar + storage + direct lines |
| Customer Metric | Cabinets leased | Tokens/s at target power draw |

Sources: Huawei Cloud disclosures, Goldman Sachs, QbitAI field reporting.

This physical transformation is why the "Token Capital" nickname has stuck locally. Ulanqab's 2026–2028 action plan explicitly lists compute services, token trading, and intelligent applications as development directions. The city that once exported potatoes and wind now intends to export compute by the token.


---

## The Utilization Gap: Paper GW vs. Running MW {#utilization}

Here is where the story gets honest. Goldman itself flagged the central tension: committed capacity is not the same as productive capacity, and the gap in Ulanqab is wide.

In 2025, the city had about 1.2GW of operational data center capacity, of which roughly 800MW was actually drawing load — a utilization rate of about 66%. The 12.5GW commitment is more than ten times the operational base, signed in a landscape where new supply is visibly outrunning customer migration. QbitAI's field visit confirmed the texture of that gap: signed plots still in permitting, construction sites where the loudest sound is lunch-hour chatter around boxed-rice stalls, and rack halls whose interior racks fill in waves rather than all at once.

| Milestone | Capacity | Utilization Signal |
|---|---|---|
| 2025 Operational | ~1.2GW | ~800MW loaded (~66%) |
| Committed (Jun 2026) | ~12.5GW | >70% signed in trailing 12 months |
| Regional Compute (H1 2026) | Inner Mongolia 315,000 PFLOPS total | 297,000 PFLOPS intelligent — national #1 |
| Earliest New Capacity Online | Late 2027 (optimistic) | Permitting → civil works → power-on → rack-in |
| Theoretical Full-Load Draw | ~109.5B kWh/year | >60% of China's 2025 DC power consumption |

Sources: Goldman Sachs, QbitAI (Oct 2, 2026), Caixin, regional government releases.

None of this is necessarily irrational. AI demand curves have been defying skeptics for three years, and the economics of data centers reward those who secure land, grid connections, and permits years before they are needed. The cluster's bet is that inference demand — agents running for hours, video generation, AI search, coding copilots — will compound fast enough to absorb capacity that comes online in 2027–2028. If token prices keep falling, usage expands; if usage expands, the GW-scale campuses fill. The risk is symmetrical: if model efficiency outruns demand growth, Ulanqab becomes a very windy monument to over-extrapolation.


---

## The Power Economics {#power}

Strip away the branding and Ulanqab's pitch is a spreadsheet. A gigawatt-scale AI campus at ¥0.35/kWh versus ¥0.70 in Beijing saves on the order of ¥3 billion per year in energy alone — before cooling advantages, before carbon accounting. Over a fifteen-year asset life, power geography is worth tens of billions of yuan per campus, which is precisely why operators now lead with electrons rather than rack counts.

| Cost Driver | Ulanqab | Eastern Tier-1 (Beijing/Shanghai) | Delta |
|---|---|---|---|
| Electricity (¥/kWh) | 0.32–0.35 | ~0.60–0.70 | ~50% cheaper |
| Annual Energy Cost per 1GW | ~¥2.8–3.1B | ~¥5.3–6.1B | ~¥2.5–3B saved |
| Cooling Overhead | ~10 months free cooling | Chiller-dominated | Materially lower PUE |
| Land & Construction | Low density, cheap land | Constrained, expensive | 30–50% total-cost edge |
| Green Power Share | ~67% | Grid-mixed | Compliance & tariff advantages |
| Latency to Northern Demand | 4.2ms to Beijing | In-city | Acceptable for inference |

Sources: Goldman Sachs, WIRED, tmtpost, regional government data.

There is a subtler economic shift embedded here: compute is becoming a commodity tied to energy markets. As Goldman notes, operators that master green-power procurement, storage dispatch, and power hedging will out-earn pure colocation landlords. Ulanqab is where that thesis is being tested at the largest scale on Earth.


![Power economics of gigawatt-scale AI campuses](https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800)

---

## The Risks Nobody Puts in Press Releases {#risks}

Goldman's report is bullish on the cluster but includes a quiet list of stress tests. They deserve amplification.

The first is the utilization path already discussed: supply is being committed years ahead of demonstrated demand, and regional utilization has already slipped to ~66%. Second is delivery risk — the pipeline from a signed MOU to energized racks runs through land, grid interconnection, equipment supply chains, and customer migration, any of which can stall. Third is water: liquid cooling and humidification consume water in a dry region, and the 12.5GW full-load scenario implies meaningful draw. Fourth is price: simultaneous multi-GW deliveries could compress rack rates and turn a land-grab into a margin squeeze. Fifth is technological: if model architectures shift toward radically more efficient inference, the capacity absorbed per unit of useful intelligence could disappoint.

| Risk | Mechanism | Early Warning Indicator |
|---|---|---|
| Overcapacity | Commitments outrun customer migration | Utilization <60% into 2027 |
| Delivery Slippage | Permitting, grid queues, construction cycles | Project timelines slipping past 2027 |
| Water Stress | Cooling draw in arid region | Local water-use quotas tightening |
| Rack Rate Compression | Synchronized GW deliveries | Colocation price declines >20% |
| Demand Shifts | Efficiency gains reduce tokens/J needed | Token price deflation outpacing volume growth |
| Value Localization | Taxes/jobs leak out of region | Share of model-service revenue retained locally |

Sources: Goldman Sachs risk disclosures, QbitAI field reporting, Caixin.

The deepest question is the last one. A data center cluster generates construction booms and electricity demand, but its long-run value to Ulanqab depends on whether model training, AI application companies, and operations talent actually settle there — or whether the city remains a landlord to machines whose intelligence is sold elsewhere. The local government's "Token Capital" plan is, at its core, an attempt to keep more of the value chain on the plateau.


---

## The Global Context: A Tale of Two Energy Maps {#global}

Zoom out and Ulanqab becomes legible as one node in a global repricing of compute around electricity. America's AI buildout is concentrating in gas-rich Texas and nuclear-adjacent campuses; China's is migrating west toward wind, solar, and coal backbone provinces under the "East Data, West Computing" national project, of which Inner Mongolia is the anchor hub. The 2026 global cloud capex run-rate — roughly $880 billion, up ~90% year over year — is, at the margin, a power procurement program.

| Dimension | US Compute Corridor | China Westward Shift |
|---|---|---|
| Anchor Locations | Abilene TX, New Mexico, Ohio | Ulanqab, Hohhot, Ningxia, Gansu |
| Power Strategy | Gas turbines + grid + nuclear deals | Wind/solar + coal backbone + direct lines |
| Price Environment | Rising industrial tariffs on data centers | Subsidized green power, cheap land |
| Lead Customers | OpenAI, Anthropic, Meta, xAI | DeepSeek, Huawei, Alibaba, ByteDance |
| Policy Frame | Private-led, state-subsidized loans | National project with provincial targets |
| Headline Metric | Stargate 10GW | Ulanqab 12.5GW committed |
| Constraint | Grid interconnection queues | Utilization + water |

Sources: WIRED, Goldman Sachs, IEA commentary, company disclosures.

The comparison that matters is not megawatts but momentum. America's buildout is anchored by a handful of ultra-large private commitments; China's is diffused across dozens of provincial-level clusters competing under a national framework. Ulanqab is the extreme example of the latter model: move fast, secure power, fill later.


---

## What Comes Next for the Token Capital {#outlook}

Three developments will determine whether Ulanqab's bet looks prophetic or premature.

**First, the 2027 delivery wave.** The projects stuck in paperwork this autumn begin civil works after the spring thaw. Watch commissioning announcements through late 2027: if the first tranche lands with named anchor tenants, the utilization math starts to close; if halls light up empty, the overcapacity narrative takes hold.

**Second, DeepSeek's campus.** A ~1GW site running a six-figure fleet of Ascend chips for inference would instantly become the world's largest single-purpose AI inference installation — and would pull Ulanqab from "storage hinterland" to "frontline serving infrastructure" in one move. Confirmation (or denial) of the 160,000-chip plan is the single most valuable datapoint on the horizon.

**Third, the token-economy policy experiment.** Ulanqab's 2026–2028 plan contemplates token trading and compute-service marketplaces. If even a thin local market emerges for token-denominated compute contracts, it would give the rest of China's western clusters a template — and give the world a preview of what compute looks like when it is traded like a commodity rather than rented like real estate.

The wind that used to be a punchline now powers the largest committed AI infrastructure footprint on the planet. Whether the tokens justify the gigawatts will be decided not in press releases, but in rack-by-rack utilization reports that begin arriving in about eighteen months. Until then, the sheep graze next to the substations, and the cranes stand ready.


---

## What People Are Saying

> **@量子位 (QbitAI)**
> 回乌兰察布老家转了一圈，签约的地块还在跑手续，塔吊比服务器多。12.5GW是纸面数字，但从纸面到机房，中间隔着整个中国经济。
> *Went home to Ulanqab and looked around: the signed plots are still doing paperwork, and there are more cranes than servers. 12.5GW is a paper number — but from paper to server hall lies the entire Chinese economy.*
>
> **@华尔街见闻 (Wallstreetcn)**
> 高盛点名乌兰察布，本质是点名一件事：AI竞争的下半场是电力竞争。谁家电便宜，谁家就有下一个十年。
> *Goldman naming Ulanqab is really naming one thing: the second half of the AI competition is a power competition. Whoever has cheap electrons owns the next decade.*
>
> **@远景能源 (Envision Energy)**
> 星河基地投产，全球最大AI算力超级单体。自建风场+专线直供，算力密度做到传统机房10倍。戈壁上的Token工厂，刚刚开始。
> *Galaxy Base is live — the world's largest AI compute super-monolith. Self-built wind + dedicated lines, 10x the compute density of legacy halls. The Token factory on the Gobi has only just begun.*
>
> **@算力研究员老赵**
> 大家都在欢呼12.5GW，我盯着的是66%利用率。供给跑得比需求快的时候，先签地的人不一定笑到最后，能装满机柜的人才笑。
> *Everyone's cheering 12.5GW; I'm staring at the 66% utilization. When supply outruns demand, the first to sign land doesn't necessarily laugh last — the one who fills the racks does.*
>
> **@EnergyTechDigest**
> The Ulanqab story is really about the industrialization of intelligence: AI's marginal cost is converging on the marginal cost of a wind turbine in Inner Mongolia. Compute is becoming an energy derivative. That should terrify and excite everyone in equal measure.
>
> **@乌兰察布发布 (Ulanqab Official)**
> 从"中国马铃薯之都"到"Token之都"，乌兰察布2026-2028行动计划已经把算力服务、Token交易、智能应用写进方向。草原上的下一个丰收季，收获的是算力。
> *From China's Potato Capital to the Token Capital — Ulanqab's 2026–2028 action plan has written in compute services, token trading, and intelligent applications. The plateau's next harvest will be harvested in compute.*

---

*Daily AI in China — October 5, 2026. Reporting and analysis by Meeeeed. Data compiled from the Goldman Sachs China Data Center Industry Report (Aug 2026), WIRED, QbitAI field reporting (Oct 2, 2026), Caixin, 21st Century Business Herald, tmtpost, company announcements, and regional government releases.*
