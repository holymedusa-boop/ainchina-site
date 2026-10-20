---
title: "Fengqing: How China Built an AI Weather Forecaster That Beat ECMWF at Its Own Game"
date: "2026-10-20"
excerpt: "On October 17, China's national weather service quietly switched on Fengqing V1.0 — the world's first fully sovereign AI ensemble forecasting system. Its 11-day effective forecast horizon now outperforms the ECMWF's flagship AI model on probabilistic metrics, and it runs on a 100,000-card domestic supercomputing cluster. Inside the project that ended Europe's four-decade monopoly on the world's best weather models."
author: "AI in China Editorial"
readTime: "16 min read"
tags: ["Fengqing", "AI Weather Forecasting", "ECMWF", "China Meteorological Administration", "AI4S", "National Supercomputing Internet", "Sovereign AI", "Pangu-Weather", "GraphCast", "China AI 2026"]
image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&h=600&fit=crop"
keywords: ["Fengqing AI weather model", "China AI weather forecasting 2026", "ECMWF AIFS comparison", "AI ensemble weather prediction", "China Meteorological Administration AI", "National Supercomputing Internet weather", "sovereign AI weather model China", "Fengqing vs ECMWF", "AI4S supercomputing China", "physics-informed AI weather"]
---

![The national compute backbone behind Fengqing — a 100,000-card AI4S cluster trained China's first fully sovereign operational weather model](https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&h=600&fit=crop)

On the morning of October 17, 2026, in a conference hall at the China National Convention Center in Beijing, a review panel from the Chinese Academy of Sciences' Institute of Atmospheric Physics and the China Meteorological Administration's Earth System Numerical Forecasting Center did something no scientific committee had done before: they signed off on an artificial intelligence as the official engine of a national weather service.

The system is called **Fengqing (风清, "Clear Wind")** — a global short- and medium-range ensemble forecasting model that had just passed its operational qualification review. By the afternoon, the National Supercomputing Internet announced that Fengqing V1.0 was live in national operational service.

The numbers behind that announcement deserve a pause. Fengqing delivers a **11-day effective forecast horizon** — measured by the standard anomaly correlation coefficient (ACC) exceeding 0.6 on 500 hPa geopotential height — and beats the European Centre for Medium-Range Weather Forecasts' own AI ensemble system on the continuous ranked probability score (CRPS), the dispersion-error ratio, and several other key probabilistic metrics. For the first time in the history of numerical weather prediction, the operational gold standard for global forecasting no longer comes from Reading, England.

And it does this while running entirely on Chinese data, Chinese models, and Chinese compute.

## The Road to October 17

Fengqing did not appear from nowhere. Its operational debut is the culmination of a three-year national sprint that began when deep learning first cracked open a field that had been dominated by physics-based supercomputing for seventy years.

The story starts in 2022–2023, when a wave of landmark results rewrote the field's assumptions. NVIDIA's FourCastNet demonstrated that neural networks could produce global forecasts at a fraction of the cost of traditional numerical weather prediction (NWP). Huawei's Pangu-Weather, published in *Nature* in July 2023, delivered 10-day forecasts **10,000 times faster** than conventional ensemble models. Three months later, Google DeepMind's GraphCast outperformed ECMWF's flagship HRES deterministic model on 90% of 1,380 verification targets in a *Science* paper.

For China's meteorological establishment, these results were both a warning and an opening. The warning: ECMWF moved its own AI model — the Artificial Intelligence/Integrated Forecasting System (AIFS) — to operational status in 2024, becoming the first major forecasting agency to run AI in production. The opening: AI weather models were new enough that no permanent pecking order existed. A late entrant with enough compute and the right physics-aware architecture could still leapfrog the incumbent.

In June 2024, the China Meteorological Administration (CMA) answered with a three-system family built with Tsinghua University:

| System | Scope | Function |
|---|---|---|
| **Fengqing (风清)** | Global, short-to-medium range (0–15 days) | Deterministic + ensemble forecasting |
| **Fenglei (风雷)** | Nowcasting (0–2 hours) | Real-time severe weather monitoring |
| **Fengshun (风顺)** | Subseasonal-to-seasonal (2 weeks–months) | Extended-range climate outlook |

The original Fengqing model achieved a 10.5-day effective forecast — already edging past the leading Western AI systems of its generation. But the June 2024 release was a research demonstrator. What went operational on October 17, 2026 is a different animal: an ensemble system, trained on a scale that would have been unthinkable two years ago, embedded in the formal national forecasting pipeline under the *Earth System Forecast Development Strategy (2025–2035)*.

## What Makes Fengqing Different

Most AI weather models are pure data-driven systems. They ingest decades of reanalysis data — typically ECMWF's ERA5 archive — learn atmospheric dynamics as statistical patterns, and generate forecasts by rolling the model forward in time. The approach is fast and, on many headline metrics, more accurate than physics simulation. But it has two well-known failure modes: **autoregressive drift**, where errors compound over long forecast horizons until the output becomes meteorological noise, and **physical inconsistency**, where the model violates conservation laws that the real atmosphere obeys.

Fengqing's engineering team attacked both problems at the architecture level. The system uses a **Swin Transformer** backbone — a hierarchical vision transformer whose shifted-window attention handles the multi-scale structure of atmospheric data efficiently — but wraps it in what the developers call a "data + physics" dual-driver design.

Three design choices do the heavy lifting:

1. **Physics-conservation constraints** are embedded directly in the training loss, so the network learns to respect atmospheric energy and mass budgets rather than merely fitting historical correlations.
2. **A perturbation generation module** produces ensemble members from perturbed initial conditions, letting the system quantify forecast uncertainty the way a 50-member traditional ensemble does — but at a tiny fraction of the compute cost.
3. **Autoregressive-drift suppression** — techniques refined during two years of operational trials — keeps long-range forecasts physically plausible deep into the 10–15 day window where most AI models degrade.

![Inside the training pipeline — physics constraints embedded in the loss function keep Fengqing's long-range forecasts from drifting into meteorological nonsense](https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop)

The practical payoff shows up exactly where operational forecasters need it. According to the CMA's evaluation, Fengqing performs particularly well on the high-impact scenarios that matter for disaster preparedness: **typhoon tracks, heavy-rainfall circulation patterns, and cold-surge cooling events**.

| Capability | Traditional NWP (ECMWF ENS) | Pure AI Models (typical) | Fengqing V1.0 |
|---|---|---|---|
| Global 10-day ensemble run time | Hours (51 members) | Minutes | Minutes |
| Physics consistency | Exact by construction | Often violated | Constrained via loss |
| Extreme-weather skill (typhoon track) | Good | Mixed | Strong |
| Data sovereignty | Any ECMWF member state | Depends on training data | Fully domestic |

## The Numbers Against ECMWF

The October 17 announcement made a specific, checkable claim: Fengqing V1.0's ensemble output beats ECMWF's AIFS ensemble (AIFS-CRPS) on the metrics that operational meteorologists actually use to rank probabilistic systems.

The evaluation used an independent sample period from January 2025 through August 2026 — nearly twenty months of held-out global weather, spanning multiple typhoon seasons, cold surges, and heavy-rain events. Key results:

| Metric | Fengqing V1.0 | ECMWF AIFS-CRPS | What it measures |
|---|---|---|---|
| Effective forecast horizon (500 hPa ACC > 0.6) | **11.0 days** | ~10.5 days | How far ahead the model stays useful |
| CRPS (ensemble probability score) | **Lower (better)** | Baseline | Probabilistic forecast accuracy |
| Dispersion–error ratio | Balanced | Slightly over-dispersive | Whether ensemble spread matches error |
| Typhoon-track error (medium range) | Reduced | Baseline | Disaster-relevant track precision |
| Heavy-rain TS score (days 3–7) | Up ~43% vs. IFS-era models | — | Extreme precipitation detection |

Two things stand out in this table. First, the margin is not a blowout — AIFS remains an exceptionally strong system, and ECMWF's decades of data-assimilation expertise show. Second, the categories where Fengqing pulls ahead — probabilistic scoring, extreme-event handling, long-horizon stability — are precisely the categories that determine whether a forecasting agency can issue early warnings for typhoons and cloudbursts. That is not a coincidence. The CMA trained Fengqing against China's specific disaster profile: western Pacific typhoons, East Asian monsoon bursts, and rapid continental cold-air outbreaks.

## The Sovereignty Stack

Strip away the meteorology and Fengqing is also a statement about infrastructure. The system was trained end-to-end on the **National Supercomputing Internet's core AI4S cluster — more than 100,000 accelerator cards at the Tianjin National Supercomputing Center** — making it the first operational weather AI in the world whose data, model weights, and training compute are all domestically controlled.

This matters for reasons that go beyond weather. China's intelligent computing capacity reached **2,185 EFLOPS in June 2026, up 177% year on year**, according to the CNNIC's *Generative AI Application Development Report (2026)*. The supercomputing internet that trained Fengqing is the same substrate now being aimed at drug discovery, materials science, and fusion research — the "AI for Science" (AI4S) push that Beijing treats as a first-class national priority.

| Layer | Fengqing Stack | Foreign Alternative | Sovereignty Status |
|---|---|---|---|
| Training data | CMA national observation + reanalysis archive | ECMWF ERA5 | Fully domestic |
| Model architecture | Swin Transformer + physics constraints (in-house) | GraphCast, AIFS (foreign IP) | Fully domestic |
| Training compute | 100k-card AI4S cluster (Tianjin) | NVIDIA/TPU fleets | Fully domestic |
| Operational runtime | National Supercomputing Internet | ECMWF member-state infrastructure | Fully domestic |
| Update cadence | Continuous operational cycling | — | Controlled by CMA |

![The operational review that made history — panel members from the Chinese Academy of Sciences and CMA signed off on AI as the nation's official forecasting engine](https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=400&fit=crop)

## The Global AI Weather Race

Fengqing's debut does not happen in a vacuum. It lands in the middle of the most contested technology race most consumers have never heard of — the contest to replace or augment century-old physics simulations with learned models.

The competitive field as of October 2026:

| Model | Organization | Status | Signature result |
|---|---|---|---|
| FourCastNet | NVIDIA | Research (2022) | First fast neural global forecast |
| FengWu | Shanghai AI Lab | Research→applied | 10-day skill, 0.09° regional resolution |
| Pangu-Weather | Huawei | Operational (China) | 10,000× faster than NWP; regional 3 km |
| GraphCast | Google DeepMind | Research benchmark | Beat HRES on 90% of targets |
| AIFS / AIFS-CRPS | ECMWF | Operational (2024) | First major agency AI in production |
| GenCast | Google DeepMind | Research (2024) | Diffusion-based ensemble |
| Aurora | Microsoft | Research | Multi-modal Earth system foundation model |
| **Fengqing V1.0** | **CMA + Tsinghua + NSI** | **Operational (Oct 2026)** | **11-day sovereign ensemble, beats AIFS-CRPS** |

Three observations follow from this table. **First**, China now has *two* independent operational AI weather stacks — Huawei's commercial Pangu line and the state-owned Fengqing family — a redundancy no other country matches. **Second**, ECMWF's first-mover advantage in operational AI has been neutralized within thirty months; the center's response, a deeper hybrid of AIFS with its physics core, is now a defensive play rather than a lead. **Third**, the moat in this field is shifting from model architecture — which diffuses quickly through papers and open-source releases — to data-assimilation pipelines and sovereign supercomputing capacity. On both of those, China has spent the last three years building deliberately.

## What It Means on the Ground

An 11-day ensemble with reliable probabilistic output changes what a national weather service can do. For China's disaster-management system, the operational implications are concrete:

| Sector | Fengqing-Driven Change | Scale of Impact |
|---|---|---|
| Typhoon response | 50-member probability cones hours earlier | 18,000+ km of eastern seaboard under warning coverage |
| Agriculture | Sharper medium-range planting/irrigation windows | Hundreds of millions of hectares in the North China Plain |
| Energy grid | Probabilistic wind/solar dispatch for storage scheduling | Renewables >33% of national generation mix |
| Aviation/shipping | Route-level turbulence and severe-weather avoidance | Fuel and delay-cost savings across the world's busiest cargo corridors |

- **Typhoon response**: Fengqing's track forecasts feed directly into evacuation and port-closure decisions along the densely populated eastern seaboard. Minutes-to-ensemble means emergency managers get 50-member probability cones hours earlier than the physics-based pipeline could deliver them.
- **Agriculture**: Subseasonal signals from the Fengshun sibling system, sharpened by Fengqing's medium-range output, inform planting and irrigation decisions across the North China Plain.
- **Energy**: Grid operators balancing surging solar and wind capacity use probabilistic wind and irradiance forecasts to schedule storage dispatch — an increasingly valuable capability as renewables pass a third of the national generation mix.
- **Aviation and shipping**: Route-level turbulence and severe-weather avoidance draws on the same ensemble, cutting fuel burn and delay costs.

The economic stakes are large enough to show up in national statistics. China's National Natural Science Foundation ranked Pangu-Weather the country's top scientific advance of 2023 — an unusual honor for a field that rarely captures bureaucratic attention — and the CMA's AI-for-weather budget has grown every year since.

## The Honest Caveats

Fengqing's launch numbers are strong, but the system shares the known weaknesses of every AI forecaster in 2026. Extreme localized precipitation — the cloudburst that drops a month's rain on one county in six hours — remains harder for learned models than for physics-based systems, because training data is statistically thin exactly where events are rarest. Typhoon *intensity* forecasts, as opposed to tracks, still show systematic underestimation in the medium range. And all AI weather models inherit the climate-distribution problem: a model trained on the atmosphere of 1940–2024 is being asked to forecast a 2026 atmosphere that is measurably different, a challenge the research community has not fully solved.

ECMWF, for its part, is not standing still. Its hybrid strategy — coupling neural networks to its trusted physics core — is widely viewed as the most robust long-term architecture, and its data-assimilation pipeline remains the deepest in the world. The honest reading of October 17 is not that China has "won" weather forecasting. It is that the center of competitive gravity has moved: for the first time since the ECMWF was founded in 1975, the organization that sets the global standard for medium-range forecasting now has a peer.

## What Comes Next

The CMA's roadmap, per the *Earth System Forecast Development Strategy (2025–2035)*, points toward tighter coupling of the three-model family — Fengqing for the deterministic backbone, Fenglei for nowcasting refreshes, Fengshun for seasonal outlooks — under a unified data-assimilation umbrella, with resolution pushed from the current global grid toward convective-permitting scales.

Two milestones to watch. First, **regional refinement**: extending Fengqing's domestic-edge advantage to kilometer-scale forecasting for the western Pacific typhoon basin, where it would compete directly with Pangu's 3 km regional products. Second, **international signaling**: whether Beijing offers Fengqing-derived forecast products to Belt and Road meteorological partners — the same soft-power play that made ECMWF's open data a pillar of European scientific diplomacy for decades.

The deeper significance, though, is structural. Fengqing is the clearest demonstration yet that China's AI-for-Science stack — compute, data, models, and operational deployment — can now take on a field with seventy years of entrenched physics-based methodology, and win the operational crown within a single planning cycle. The atmosphere was the testbed. Materials, biology, and fusion are the syllabus.

---

## Social Media Reactions

**@大气物理所小透明** (Zhihu):
"11天有效预报时效，ACC>0.6，独立样本检验从2025年1月到2026年8月——这个评审标准比大多数论文严谨多了。但真正值得注意的是扰动生成模块，纯数据驱动模型的集合离散度一直是个坑，能把这个做好说明团队里有懂业务的人。"
*"11-day effective forecast, ACC > 0.6, independent-sample testing from January 2025 to August 2026 — the review standard is more rigorous than most papers. But the real standout is the perturbation generation module. Ensemble spread has always been a pitfall for pure data-driven models; getting this right means there are people on the team who actually understand operational forecasting."*

**@EuropeanWeatherWatcher** (Twitter/X):
"ECMWF losing the operational AI ensemble crown to a Chinese system that didn't exist three years ago should be a wake-up call for Reading. The hybrid physics-AI roadmap is right, but the execution pace needs to double."
*"ECMWF losing the operational AI ensemble crown to a Chinese system that didn't exist three years ago should be a wake-up call for Reading. The hybrid physics-AI roadmap is right, but the execution pace needs to double."*

**@超算搬砖工** (Weibo):
"十万卡AI4S集群全程训练，数据、模型、算力全自主——这句话翻译成工程语言就是：每一层卡脖子的地方都被焊死了。风清的意义不只是天气预报，是证明这条路走得通。"
*"Trained end-to-end on a 100,000-card AI4S cluster, fully autonomous data, model, and compute — translated into engineering language, that means every potential chokepoint has been welded shut. Fengqing's significance isn't just weather forecasting; it's proof that this path works."*

**@climate_dataguy** (GitHub Discussion):
"Skeptical of the headline until I see the verification against ERA5-independent observations. CRPS wins on reanalysis-adjacent data can overstate real-world skill. That said, the physics-constrained loss and drift suppression are genuinely interesting contributions — worth reproducing."
*"Skeptical of the headline until I see the verification against ERA5-independent observations. CRPS wins on reanalysis-adjacent data can overstate real-world skill. That said, the physics-constrained loss and drift suppression are genuinely interesting contributions — worth reproducing."*

**@气象人生** (Douban):
"作为一个在气象台工作了十五年的人，说两句。AI不会取代预报员，但不懂AI的预报员会被懂AI的取代。风清上线第一天我们站里就组织了培训，领导的原话是'学会用新工具，不然下次机构改革第一个裁你'。话糙理不糙。"
*"As someone who's worked at a weather station for fifteen years, let me say this: AI won't replace forecasters, but forecasters who don't understand AI will be replaced by those who do. On Fengqing's first day online our station organized training. My boss's exact words: 'Learn the new tool, or you'll be the first cut in the next restructuring.' Crude, but true."*

**@AI4S研究员** (Xiaohongshu):
"风清、风雷、风顺三兄弟凑齐了，国家队出手就是全家桶。有人注意到吗，训练用的超算互联网和之前药物发现、材料科学公布的是同一个底座——这意味着什么？意味着AI for Science在中国已经从项目制变成平台制了。"
*"The three siblings — Fengqing, Fenglei, Fengshun — are complete. When the national team moves, it ships the whole suite. Did anyone notice the supercomputing internet used for training is the same base announced earlier for drug discovery and materials science? Know what that means? AI for Science in China has gone from project-based to platform-based."*

---

**Related reading:**

- [China's Compute Empire: How Sanctions Built a Domestic AI Infrastructure Stack](/blog/china-ai-compute-empire-sanctions-boomerang-deepseek-huawei-2026/)
- [The Outage Era: How China's AI Boom Outran Its Own Grid](/blog/china-ai-outage-era-compute-reckoning-2026/)
- [DeepSeek Open-Sources Its Huawei Ascend Toolchain](/blog/deepseek-open-sources-huawei-ascend-ai-toolchain-2026/)
- [Ulanqab: The Token Capital Powering China's Westward Compute Shift](/blog/ulanqab-token-capital-china-ai-compute-westward-2026/)
