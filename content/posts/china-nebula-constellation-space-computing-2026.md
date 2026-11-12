---
title: "China's Nebula Constellation: The 16-Company Alliance Putting AI Data Centers in Orbit"
date: "2026-11-12"
excerpt: "On November 9 in Hefei, sixteen Chinese companies put ¥1.5 billion on the table and declared they would build the Nebula space computing network — a full-stack, fully domestic orbital compute grid. With two verification satellites already circling Earth and two more launching this month, the question is no longer whether data centers can go to space. It's who gets there first."
metaTitle: "China's Nebula Plan: AI Data Centers in Orbit"
metaDescription: "Sixteen Chinese firms formed Zhongke Xingyun to build the Nebula space network — Beijing's bold bid to move AI data centers off the grid and into orbit."
tags: ["China AI", "Space Computing", "Nebula Constellation", "Satellite AI", "Zhongke Xingyun", "Hygon", "Sugon", "Orbital Data Center", "SpaceX StarMind", "Compute Infrastructure"]
keywords: "China space computing, Nebula Constellation, Zhongke Xingyun, orbital data center, SpaceX StarMind, satellite AI, Hygon, Sugon, CAS space cloud, in-orbit computing"
image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=1200&q=80"
heroImage: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=1200"
readingTime: 16
---

The convention center in Hefei was packed by 9 AM on November 9, 2026. On stage, officials from the Chinese Academy of Sciences, executives from three listed chip and server companies, and representatives of sixteen separate corporate entities signed the same document at the same time. Then they announced something that, a decade ago, would have belonged on the science-fiction shelf: **the Nebula Constellation Plan** (星云星座计划) — a space-based computing network in which satellites do not merely photograph Earth and beam raw data home. They compute.

Not demos. Not one-off experiments. A production network, run by a newly formed company with ¥1.5 billion ($210 million) in registered capital, designed to route real workloads — natural-resource surveys, disaster response, low-altitude drone traffic — through processors orbiting the planet.

Two days later, the market rendered its verdict. Of the 24 A-share listed companies tied to the space-computing supply chain, the average gain on November 10 was 3.01%. Shanghai Harbour hit its daily limit. Zhongke Star Map, one of the sixteen founders, rose 4.54% to ¥33.41. China Satellite added 4.64%.

The Nebula plan is easy to dismiss as hype — the space industry runs on PowerPoint. But this one is different in a specific way: the sixteen signatories did not promise to cooperate. They merged their balance sheets. Understanding why they did that, and what the architecture says about China's answer to the global power crunch strangling AI data centers, is the subject of this deep dive.

![Earth viewed from orbit with sunrise over the horizon](https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=800&q=80)

*The Nebula Constellation Plan aims to put production AI compute infrastructure in low Earth orbit. (Photo: Unsplash)*

## What the Nebula Constellation Plan Actually Is

Strip away the ceremony and the Nebula plan is one specific thing: a **full-stack domestic space computing network**, jointly developed by the Aerospace Information Research Institute of the Chinese Academy of Sciences (CAS) and a consortium of Chinese technology companies. "Full-stack" is the operative phrase. Every layer — compute chips, server hardware, thermal management, satellite platforms, inter-satellite links, ground scheduling — is sourced inside China's industrial base.

The operating company is **Zhongke Xingyun Space Intelligence Technology (Hefei) Co., Ltd.** (中科星云太空智能科技), registered on November 2 and unveiled at the 2026 Space Cloud Industry Ecosystem Conference. Its structure is the most striking part of the announcement. Sixteen founding shareholders span the entire vertical:

| Shareholder | Type | Role in the Network |
|-------------|------|---------------------|
| Hygon Information (688041) | Industrial — chip designer | Domestic high-end compute chips |
| Sugon / Dawning (603019) | Industrial — server maker | Server hardware & AI computing infrastructure |
| Sugon Data Energy (曙光数创) | Industrial — thermal mgmt | Cooling & thermal management for compute infrastructure |
| Star Graph Measurement & Control (星图测控) | Industrial — satellite ops | Satellite tracking, telemetry & control (TT&C) |
| Zhongke Satellite (中科卫星) | Industrial — constellation ops | Sensing-computing constellation construction & operation |
| Geovis Technology (中科星图, 688568) | Industrial — data services | Space-air data fusion & information services |
| Guoke Development (国科发展) | Institutional — CAS platform | Chinese Academy of Sciences holding vehicle |
| Chengtong Sci-Tech Innovation (诚通科创) | Institutional — central SOE fund | Central state-owned enterprise capital |
| Wanneng Capital (皖能资本) | Institutional — provincial | Anhui provincial energy capital |
| Huaan Jiaye (华安嘉业) | Institutional — provincial | Anhui securities & industrial capital |
| Anhui provincial guidance fund | Institutional — provincial | Science & technology sector fund |
| Hefei municipal & district platforms | Institutional — municipal | Hefei Industrial Investment, High-Tech VC & district vehicles |

That is not a marketing alliance. It is a vertically integrated compute company whose "factory floor" happens to be at 500 kilometers altitude.

## How This Escaped the Laboratory

The Nebula plan did not appear from nowhere. Its intellectual parent is the **"Space Cloud" (太空云)** concept developed at CAS's Aerospace Information Research Institute, which asks a deceptively simple question: why should satellites spend their lives as cameras with a downlink?

The traditional remote-sensing model is absurdly inefficient when you write it out. A satellite photographs a wildfire, stores terabytes of raw imagery, squirts it to a ground station during a four-minute pass, where servers then spend hours processing it into something a fire chief can use. The satellite — with abundant solar power and a cold sky behind it — did none of the thinking.

The Space Cloud concept inverts this. Remote-sensing satellites, communication satellites, and computing satellites become **one unified, schedulable resource pool** — a cloud, except the servers orbit. Wu Yirong, academic president of the institute and a member of the Chinese Academy of Sciences, described the end state on state television: scheduling, planning, and management happen in space itself. A user states a need — "image this flood, and tell me which villages are cut off" — and the network returns an answer, without the user knowing or caring which satellite did the work.

The milestones that turned this from a paper into a company:

| Date | Milestone |
|------|-----------|
| May 2025 | ADA Space launches first 12 satellites of its separate Three-Body Computing Constellation — proof that in-orbit AI inference works |
| May 2026 | CAS institute + 100+ organizations publish the joint "Space Cloud Ecosystem" initiative, proposing shared standards for compute services, payload interfaces, and inter-satellite links |
| Aug 2026 | First two Space Cloud verification satellites enter orbit, operated by Zhongke Satellite |
| Oct 2026 | Second satellite pair — this time carrying dedicated onboard compute units — rolls off the production line |
| Nov 2, 2026 | Zhongke Xingyun completes industrial registration, ¥1.5B capital |
| Nov 9, 2026 | Nebula Constellation Plan formally released at the Hefei conference; Space Cloud IP licensing intents signed |
| Late Nov 2026 | Second satellite pair scheduled to launch from Taiyuan on a Long March rocket |

The last row matters more than it looks. This is not a program that ends at a ceremony. Hardware is already stacked on a launch pad.

## Three Steps to a Peer-to-Peer Network

The Nebula plan's technical path is explicitly staged — and the staging reveals what the engineers think is hard. The three phases, in the plan's own language, are **sensing-computing integration**, **communication-computing integration**, and **supercomputing collaboration**.

| Phase | Name (Chinese) | Capability Unlocked | Rough Window |
|-------|----------------|-------------------|--------------|
| 1 | 感算融合 — Sensing-computing fusion | Satellites process imagery in orbit: "collect while computing, compute upon capture" | Now → 2027 |
| 2 | 通算融合 — Communication-computing fusion | High-speed inter-satellite links let constellations share workloads like a cluster | ~2027–2030 |
| 3 | 超算协同 — Supercomputing collaboration | On-orbit compute aggregated into orbital data centers; space & ground resources scheduled as equals | 2030+ |

Phase 1 is mostly a software and integration problem — put accelerators on existing remote-sensing buses and train models that tolerate radiation. China has already demonstrated this repeatedly: the ADA Space constellation has run ten AI models in orbit, and Alibaba Cloud's Qwen3 was doing real work in space by January 2026.

Phase 2 is the hard engineering. Routing a training-like workload across dozens of moving nodes connected by laser links — while every node is buffeted by thermal cycling and radiation — is a genuinely unsolved problem at scale. Whoever cracks constellation-scale scheduling owns the real prize, which is why the China Academy of Information and Communications Technology (CAICT) calls the 2026–2028 window the "mid-stage technology leap" period for the entire industry.

Phase 3 is where the vocabulary shifts from "satellites that compute" to "data centers that orbit." Chairman Shao Zongyou of Zhongke Xingyun has taken to summarizing the service model with a slogan built for billboards: **"sky computes sky, sky and ground compute together"** (天数天算, 天地同算). The end state — 天地对等, "space-ground peer-to-peer" — is a network where an orbital node is scheduled with exactly the same status as a ground node in Ulanqab or Gui'an.

![Rocket launch carrying satellites toward orbit](https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&q=80)

*The second pair of Nebula verification satellites is scheduled to launch from Taiyuan in late November 2026. (Photo: Unsplash)*

## The Business Model: Equity Instead of Orders

Here is the detail most coverage missed. China's aerospace and compute industries have collaborated for decades — almost always through **procurement contracts**. A satellite maker buys chips from a supplier. A constellation operator rents ground-station time. Each link in the chain is negotiated, priced, renegotiated, and delayed.

Zhongke Xingyun threw that model out. Its sixteen founders are bound by **equity**, not purchase orders. When Hygon's chip division misses a radiation-hardening milestone, Sugon's share price suffers too. When the TT&C contractor falls behind, the constellation operator absorbs the loss as an owner, not a customer. It is the aerospace equivalent of Tesla building its own battery cells — vertical integration through the cap table rather than the org chart.

The choice of Hefei as headquarters is equally deliberate. Anhui's capital has spent five years building itself into China's quantum-and-AI hardware hub, and the municipal government put real money into this company through city and district investment vehicles. The pattern repeats what worked for [China's westward compute build-out](/blog/ulanqab-token-capital-china-ai-compute-westward-2026/): state capital absorbs the decade-long risk, private industrial partners bring the technology, and the Chinese Academy of Sciences supplies the research spine.

## The Global Field Is Crowded, and Nobody Is Winning Yet

Declaring a race is easy; counting who is actually running is harder. As of November 2026, the orbital compute landscape looks like this:

| Project | Backer | Status (Nov 2026) | Hardware | Scale Ambition |
|---------|--------|-------------------|----------|----------------|
| **Nebula Constellation** | CAS + Zhongke Xingyun (16 firms) | Industrialization launched; 2 sats in orbit, 2 launching | Full domestic stack: Hygon chips, Sugon servers, Chinese TT&C | Phased constellation; space-ground peer network |
| **Starmind** | SpaceX + NVIDIA | FCC filing for ~1M satellites (Jan 2026); first launches Q3 2027 | NVIDIA Rubin GPUs, Starship-deployed | Orbital AI supercomputing cloud; mass deployment 2028–2029 |
| **Project Suncatcher** | Google | Prototype satellite completed in-orbit AI inference Oct 30, 2026; 2 verification sats planned 2027 | TPU-based | Gigawatt-class compute constellation (long-term) |
| **Three-Body Computing Constellation** | ADA Space + Zhejiang Lab | 12 sats in orbit since May 2025 (2,800 planned); 10 AI models deployed in orbit | 100 Gbps laser links, 8B-parameter models | 1,000 POPS aggregate target |
| **Shanghai "Xingshu" Plan** | Shanghai municipal | Released July 2026; commercial phase underway | — | 50 compute + 100 edge satellites |
| **Beijing Space Computing Cloud** | Beijing innovation center | World's first space-ground integrated cloud platform, Nov 2026 | — | Cloud services layer above constellations |
| **Starcloud (US)** | Startup | Commercial operations targeted from 2026 | — | Satellite data-center demonstrations |

The striking fact in this table is how **early everyone is**. SpaceX's Starmind is a filing. Google's Suncatcher is a prototype plus two planned verification satellites. China's Nebula has two satellites in orbit and two on the pad. ADA Space has the most flight heritage in China — a year and a half.

CAICT's September 2026 assessment of the field remains the fairest summary: the United States has **commercial leadership**, China has **systematic layout**, and Europe is **strategically following**. Nobody has production orbital AI compute at scale. The race has barely left the starting line — which is precisely why a sixteen-company consortium staking ¥1.5 billion now is news.

## The Economics: Why Orbit Suddenly Looks Rational

The brute logic pushing everyone skyward is terrestrial: **the grid is full**. The International Energy Agency has warned that grid-connection constraints alone could delay roughly 20% of the data-center capacity planned worldwide before 2030. In China, [mobile data traffic driven by AI-generated content grew five-fold in a single year](/blog/china-mobile-100-billion-ai-compute-bet-2026/), and power-hungry clusters in the east are bumping into hard ceilings — a dynamic this site has covered from [compute-reckoning](/blog/china-ai-outage-era-compute-reckoning-2026/) to [domestic supernode design](/blog/huawei-ascend-960-supernode-npo-compute-sovereignty-2026/) angles.

Orbit offers three escapes. Solar irradiance is roughly 30% stronger and available ~99% of the time outside eclipse. Thermal rejection, while hard, uses a 3-kelvin sink. And critically, **orbital power never enters a grid interconnection queue.**

US startup Starcloud — the closest thing the West has to an orbital-data-center specialist — published the estimate that frames the whole debate: a like-for-like data center built in space carries a ten-year core cost of roughly **$8.2 million**, versus approximately **$167 million** on the ground. Five percent.

| Cost Item (10-year, like-for-like) | Space-Based | Ground-Based | Space as % of Ground |
|------------------------------------|-------------|--------------|----------------------|
| Core infrastructure cost | ~$8.2M | ~$167M | ~5% |
| Energy source | Orbital solar (no grid queue) | Grid + on-site generation | — |
| Exposure to electricity price volatility | None (no utility) | High | — |
| Exposure to grid-connection delays | None | ~20% of pre-2030 capacity at risk (IEA) | — |
| Cooling medium | Radiative (cold sky) | Water/air + chillers | — |

These numbers deserve skepticism — they come from a company selling the thesis, and they exclude launch, which remains the dominant real-world cost. But even with launch folded in, the direction of the comparison improves every time a reusable rocket cuts a dollar per kilogram.

The market sizing matches the enthusiasm. CCID Consulting projects the global space-computing market growing from roughly **$300 million in 2020 to $16 billion by 2030** — about fifty percent compound annual growth for a decade.

## What Could Go Wrong

A sober risk ledger, in descending order of severity:

| Risk | Severity | Notes |
|------|----------|-------|
| Launch capacity & cost | High | Starship-class reuse is unproven in Chinese service; Long March costs remain well above SpaceX marginal costs |
| Radiation-hardened compute | High | Hygon's server-class chips must survive orbits they were never designed for; shielding eats payload mass |
| Thermal management in vacuum | Medium-High | Sugon Data Energy's immersion expertise transfers imperfectly; vacuum is not air |
| Inter-satellite bandwidth at constellation scale | Medium | 100 Gbps links demonstrated by ADA Space; scheduling thousands of moving nodes is unproven anywhere |
| Orbital debris & spectrum coordination | Medium | Mega-constellation congestion is a diplomatic as much as engineering problem |
| Commercial demand uncertainty | Medium-High | Government anchor demand (emergency response, resource surveys) is real but may not fill a constellation |
| Export-control escalation | Low-Medium | Full domestic stack designed to be sanction-proof by construction |

The honest summary: this is a program with real flight hardware, real industrial backing, and an unsolved engineering core. That puts it ahead of most rivals and behind its own ambitions — a normal place for a Chinese megaproject to be in year one.

## What to Watch Next

The near-term milestones are concrete and dated:

- **Late November 2026** — the second satellite pair, carrying dedicated compute units, launches from Taiyuan. Watch for published in-orbit inference benchmarks.
- **First half of 2027** — whether Zhongke Xingyun signs anchor government contracts (emergency management, natural resources) that convert the constellation from demonstration to revenue.
- **Q3 2027** — SpaceX's first Starmind launches. The comparison will be brutal and instructive: one company's filing versus sixteen companies' hardware.
- **2026–2028** — the CAICT "technology leap window." The first constellation to demonstrate reliable inter-satellite workload migration — not just links, but live job scheduling across moving nodes — takes the technical lead.
- **2028–2030** — CCID expects the industry's center of gravity to shift from single-satellite compute to constellation-scale compute. Whose scheduling stack wins then matters more than whose chips fly first.

The deeper story is that China's AI infrastructure debate has quietly expanded its definition of "infrastructure." It used to mean chips and data centers. Then it meant power plants and transmission lines. As of November 9, 2026, it officially includes the sky — and [the sanction-hardened domestic compute stack](/blog/china-ai-compute-empire-sanctions-boomerang-deepseek-huawei-2026/) that Beijing has spent five years assembling is finally looking up.

---

## Social Media Reactions

**Zhihu (知乎) — top-voted analytical comment:**
> 这次最有意思的不是技术路线，是股权结构。芯片、服务器、测控、星座运营第一次用资本绑在一起，而不是合同。合同制协作催生出的是扯皮，股权制协作催生出的是死线。
>
> *"The most interesting part isn't the technical roadmap — it's the shareholding structure. Chips, servers, TT&C, and constellation operations are bound together by capital for the first time, not contracts. Contract-based collaboration breeds buck-passing; equity-based collaboration breeds deadlines."*

**Weibo (微博):**
> 地上卷完卷天上，中国人搞基建真是永无止境。不过说真的，灾区应急通信这个场景，轨道算力确实是刚需。
>
> *"Finished competing on the ground, now we compete in the sky — China's infrastructure obsession truly knows no limits. But honestly, for disaster-zone emergency communications, orbital compute really is a hard need."*

**X (Twitter) — Western AI analyst:**
> "SpaceX filed for a million satellites. Nebula launched two. The gap between filing and flying is where narratives go to die — but sixteen Chinese balance sheets just voted that it's real. That equity structure is the actual innovation."

**Xiaohongshu (小红书) — aerospace engineering student:**
> 导师说太空算力方向今年突然爆火，秋招岗位翻了三倍，看来选错专业的人只有我一个😭
>
> *"My advisor said the space-computing field suddenly exploded this year — autumn recruitment postings tripled. Looks like I'm the only one who picked the wrong major 😭"*

**GitHub discussion thread — systems engineer:**
> "Everyone quotes the 5% cost figure. Nobody quotes the radiation tolerance data, because it doesn't exist yet at this class of chip. Wake me when a Hygon accelerator survives two years in LEO without derating."

**Douban (豆瓣):**
> 看《流浪地球》的时候大家开玩笑说要把地球推走，其实计划一直是把数据中心送上去。
>
> *"Watching The Wandering Earth, everyone joked about pushing Earth itself out of the way. Turns out the plan was always to send the data center up instead."*
