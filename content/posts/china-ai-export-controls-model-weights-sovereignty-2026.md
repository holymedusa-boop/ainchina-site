---
title: "The Great Filter: How China's 23-Technology Export Catalog Is Rewriting the Rules of Global AI"
date: "2026-10-25"
excerpt: "On October 16, China's Ministry of Commerce quietly published a 40-technology export control catalog that includes model weights, source code, and AI chip design methodology. Four days later, DeepSeek and MiniMax became the first companies to register — and the global AI industry woke up to a new reality: the flow of AI technology across borders now has two gatekeepers, not one."
author: "AI in China Editorial"
readTime: "16 min read"
tags: ["China AI Export Controls", "MOFCOM", "AI Policy", "Model Weights", "DeepSeek", "MiniMax", "China AI 2026", "AI Governance", "Export Restrictions", "Geopolitics"]
image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop"
keywords: ["China AI export controls 2026", "MOFCOM Announcement 48", "model weights export restriction", "DeepSeek MiniMax registration", "China prohibited technologies catalog", "AI sovereignty", "China US AI trade war", "2 trillion parameter threshold", "AI chip design export", "China tech policy October 2026"]
---

![Circuit board macro photography — the physical substrate of AI now sits at the center of a new global trade regime, as China proposes export controls covering everything from model weights to chip design methodology](https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop)

At 3:47 PM Beijing time on Friday, October 16, 2026, a bureaucratic announcement appeared on the website of China's Ministry of Commerce. It carried the dry designation **Announcement No. 48 of 2026**, jointly issued with the Ministry of Science and Technology. The title was procedural: "Public Solicitation of Comments on the Revision of the Catalogue of Technologies Prohibited and Restricted from Export."

Inside, the substance was anything but procedural. Forty technologies across three sectors — 23 in artificial intelligence, 5 in biomedicine, 12 in photovoltaics — were proposed for export prohibition or restriction. For the first time, the catalog named not just physical technologies but the intangible essence of modern AI: **model weights, key checkpoints, underlying source code, architecture design, training optimization methods, and inference acceleration techniques**. Any large model exceeding 2 trillion parameters, requiring more than 10^26 floating-point operations to train, or achieving what the filing called "world-leading capability" would fall under the restricted category.

An interim registration requirement took effect immediately — including for exports already in progress but not yet completed. Companies had until November 15 to comment. And the global AI industry, which had spent three years navigating Washington's export restrictions on hardware flowing into China, suddenly had to confront the mirror image: Beijing's restrictions on software flowing out.

---

## Section 1: What the Catalog Actually Covers

The draft revision to China's Catalogue of Technologies Prohibited and Restricted from Export is structured in two tiers: **prohibited** technologies that cannot be exported under any circumstances, and **restricted** technologies that can be exported with a government license. Of the 40 newly listed technologies, 14 fall into the prohibited category and 26 into the restricted one.

The AI-specific entries span the entire modern AI stack — from the models themselves to the infrastructure that trains and deploys them.

| Category | Count | Treatment | Examples |
|---|---|---|---|
| **Total new technologies** | 40 | Mixed | AI, biomedicine, photovoltaics |
| AI-related technologies | 23 | Mixed | Large models, agents, chip design, compute clusters |
| Prohibited (禁止) | 14 | No export permitted | Malicious code generation/mutation, models trained on core Chinese data |
| Restricted (限制) | 26 | License required | AI-assisted vulnerability discovery, large model weights, chip design methodology |
| Public comment deadline | — | Nov 15, 2026 | Email: jinxianmulu@mofcom.gov.cn |
| Interim registration | — | Effective immediately | Applies to in-progress exports |

The prohibited AI items are narrowly targeted: technology for AI-driven malicious code generation and mutation, and — critically — **large models trained on what the filing calls "Chinese core data" (中国重要数据)** that would be used to provide services. This is a data sovereignty provision, not a technology ban. It says: if the model's capabilities were built on sensitive domestic data, the model itself cannot leave.

The restricted items are broader and more commercially consequential. They include AI-assisted vulnerability mining technology, agent technology designed for highly sensitive environments, and the core technical materials of any large model that meets one of three thresholds: training compute of at least 10^26 FLOPs, parameter count of 2 trillion or more, or "world-leading capability" — a deliberately elastic criterion that gives regulators significant discretion.

| Model Threshold | Criterion | Practical Impact |
|---|---|---|
| Training compute | ≥ 10^26 FLOPs | Captures most frontier-scale training runs |
| Parameter count | ≥ 2 trillion | Captures Kimi K3/K3.1 Pro (2.8T), Qwen 3.8-Max |
| Capability | "World-leading" | Elastic criterion, regulator discretion |
| Covered materials | Weights, checkpoints, source code, architecture, training methods | Full IP stack, not just the model artifact |

For context, Kimi K3 — released in July 2026 with 2.8 trillion parameters — and Alibaba's Qwen 3.8-Max both exceed the parameter threshold. DeepSeek's V4 series, depending on final architecture disclosures, likely sits at or near the boundary. These are not edge cases; they are China's most globally consequential AI models.

---

## Section 2: The Three Red Lines

To understand the logic of the 23 AI items, it helps to look at how Chinese state media framed them. On October 23, CCTV-affiliated commentator account **Yuyuantantian (玉渊谭天)** published an authoritative interpretation that organized the controls around three concerns. The framing matters because Yuyuantantian's commentaries are widely understood to reflect official thinking.

| Red Line | What It Covers | Treatment |
|---|---|---|
| **Data security** | Models trained on Chinese core data → prohibited; models trained on important data → restricted | Models trained on sensitive domestic data cannot be exported |
| **Sensitive use** | Agent technology for critical infrastructure, defense, core government | Restricted by default; prohibited if designed for high-sensitivity scenarios |
| **Compute foundation** | Chip design methodology, compute cluster architecture, information processing | Restricted; licensing required for export |

The data security line is the most absolute. A model trained on Chinese core data is simply prohibited from export — the model is a distillation of the data, and exporting the model effectively exports the data.

The sensitive use line introduces a two-tier system: agents for general commercial use fall under restricted export (license required); agents designed for national critical information infrastructure, defense industry, or core government functions are proposed for outright prohibition.

The compute foundation line extends controls to AI chip design techniques, compute cluster architectures, and information processing technologies — the design IP behind Chinese AI accelerators, the same class of technology Washington has been trying to keep *out* of China for three years.

---

## Section 3: The API Carve-Out — What Escapes the Net

Perhaps the most consequential design choice in the entire catalog is what it does *not* cover. According to both the official announcement and subsequent state media interpretation, **access through APIs, web interfaces, mobile applications, SaaS platforms, and lightweight on-device deployment is explicitly outside the scope of model technology export controls**.

| Access Method | Covered? | Rationale |
|---|---|---|
| API calls | No | Service delivery, not technology transfer |
| Web/app interaction | No | Consumer-facing access |
| SaaS platforms | No | Hosted service model |
| Edge/lightweight deployment | No | Simplified deployment, not core technology |
| Weight downloads | Yes | Direct technology transfer |
| Source code licensing | Yes | Core IP |
| Overseas local deployment | Yes | Technology leaves Chinese jurisdiction |
| Overseas subsidiary cloud | Simplified license | Chinese company retains control |
| Ownership transfer / M&A | Yes, registration required | Control changes hands |

This carve-out is deliberate. A developer in San Francisco or Berlin can continue calling DeepSeek's API, using Kimi's chatbot, or building on Zhipu's GLM models through hosted endpoints without any change. What changes is the *artifact* layer: downloading weights, licensing source code, or transferring model IP now requires registration and potentially a license.

![Earth's network of light trails seen from orbit — the global flow of AI technology now passes through a new regulatory checkpoint, as Beijing requires registration for model weight exports while leaving API access unrestricted](https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop)

---

## Section 4: The Registration Rush — DeepSeek and MiniMax Move First

The interim registration requirement took effect on October 16 — the same day the draft was published. It covers technology ownership transfers, overseas licensing agreements, foreign acquisitions of China-based technology entities, and exports already in progress but not yet completed.

Within a week, two of China's most prominent AI companies had moved.

On October 23, CCTV's Yuyuantantian reported that **DeepSeek and MiniMax had both completed the registration process**, clearing them to continue licensing their models for global use. The report was brief — a single paragraph in a broader analysis — but its implications were significant. These were the first movers in what will likely become a compliance wave across China's AI sector.

| Company | Registration Status | Models Affected | International Exposure |
|---|---|---|---|
| **DeepSeek** | Completed (Oct 23) | V4 series, R1 reasoning models | Global developer adoption, open weights |
| **MiniMax** | Completed (Oct 23) | M3.1 series, Talkie/Conch products | Consumer AI, international app stores |
| Moonshot AI (Kimi) | Not yet reported | K3 (2.8T), K3.1 Pro | API + open weights (K3.1 promised Nov 4) |
| Alibaba (Qwen) | Not yet reported | Qwen 3.8-Max (2T+) | Global cloud distribution, open weights |
| Zhipu AI (GLM) | Not yet reported | GLM-5 series | Enterprise licensing, open weights |

The speed is telling. Both DeepSeek and MiniMax have significant international business — DeepSeek through its open-weight releases that have been downloaded millions of times, and MiniMax through consumer AI products like Talkie that operate in overseas markets. For these companies, registration was not optional; it was a prerequisite for continuing their existing business models.

The registration also provides a measure of *legitimacy*. By completing the process, DeepSeek and MiniMax can now demonstrate to international partners that their model exports comply with Chinese law — a compliance signal that matters as Western governments increasingly scrutinize Chinese AI deployments within their borders.

---

## Section 5: Mirror Image — Comparing China's Catalog to US Export Controls

The October 16 announcement did not happen in a vacuum. It arrived four days before the US Department of Homeland Security issued its own order — the FASCSA directive banning DeepSeek from all federal civilian executive agency devices and systems — and exactly one week before Chinese Foreign Minister Wang Yi hosted former Google CEO Eric Schmidt and former Australian Prime Minister Kevin Rudd in Beijing for closed-door discussions on AI safety and global governance.

The symmetry is hard to miss. Washington restricts advanced AI chips, EDA software, and chipmaking equipment from *entering* China. Beijing now restricts advanced AI models, model weights, and chip design methodology from *leaving* it.

| Dimension | China's Oct 2026 Draft | US Export Control Regime (2022–2026) |
|---|---|---|
| **Primary target** | AI models, weights, source code, chip design IP | Advanced GPUs, EDA tools, chipmaking equipment |
| **Legal mechanism** | Export control catalogue (MOFCOM + MOST) | Entity List, Export Administration Regulations |
| **Open-source treatment** | Explicitly excluded | No blanket exemption; case-by-case |
| **API/SaaS treatment** | Explicitly excluded | Separate evolving compute-threshold rules |
| **Threshold approach** | Parameter count (2T+), compute (10^26+ FLOPs), capability | Performance density, total processing performance |
| **Current stage** | Draft, comment until Nov 15, 2026 | Multiple rounds in force since October 2022 |
| **Interim measures** | Registration effective immediately | Immediate entity list additions |

The comparison reveals important asymmetries. The US regime is more mature and has extraterritorial reach — it can penalize foreign companies that re-export controlled American technology. China's catalog, by contrast, is domestic in scope: it governs what Chinese companies and individuals can export from Chinese soil.

The US also lacks China's explicit API carve-out. American cloud compute restrictions, which apply processing-power thresholds to AI model deployments, create compliance obligations for hosted services in ways that China's draft catalog pointedly avoids. Beijing has effectively declared that *using* Chinese AI through the cloud is fine; *possessing* the underlying technology is not.

---

## Section 6: The Company Calculus — Who Wins, Who Pays

For Chinese AI labs, the new rules create a strategic fork. Companies can either keep their models below the performance thresholds and distribute weights freely — preserving the open-source strategy that has driven DeepSeek and Qwen's global adoption — or push past the thresholds and accept the compliance burden of registration and potential licensing requirements.

| Company | Estimated Parameter Scale | Above 2T Threshold? | Strategic Options |
|---|---|---|---|
| Moonshot AI (Kimi K3/K3.1) | ~2.8T | Yes | API-first or register for open weights |
| Alibaba (Qwen 3.8-Max) | 2T+ | Yes | Cloud distribution via API; weights need registration |
| DeepSeek (V4 series) | At/near threshold | Likely | Already registered; continue open-weight strategy |
| MiniMax (M3.1) | Below/near threshold | Borderline | Already registered; consumer AI focus |
| Zhipu AI (GLM-5) | Below threshold | No | Open weights unrestricted |
| Baidu (Ernie) | Below threshold | No | Enterprise licensing unaffected |

The open-source exemption is the pressure release valve. Technologies already in the public domain remain freely available worldwide. The controls apply to *future* transfers, not retroactively.

But the exemption also creates a perverse incentive. If a Chinese lab wants to release a frontier model as open weights — as Moonshot has promised for K3.1 Pro by November 4 — it must either stay below the undefined "world-leading capability" threshold or complete registration. The ambiguity could chill open-source releases at the frontier, not through an explicit ban but through regulatory uncertainty.

For Moonshot specifically, the timing is delicate. K3.1 Pro exceeds the 2-trillion-parameter threshold. Its open-weight release, promised for November 4, would fall squarely within the registration requirement. Whether Moonshot has already filed — or whether the release will proceed as planned — has not been publicly confirmed.

---

## Section 7: Beyond AI — The Solar and Biomedicine Dimension

The export catalog is not an AI-only document. The 12 photovoltaic technologies and 5 biomedicine entries reveal a broader strategic logic: protecting China's dominance in sectors where it holds a technological lead, while maintaining openness in areas where it still benefits from international collaboration.

The solar entries are the most specific. Polysilicon production technology for single-line capacity of 30,000 tons per year or more, silicon wafer manufacturing processes, perovskite and tandem solar cell production technology, and the key equipment carrying these processes are all proposed for restriction. China produces over 80% of the world's polysilicon and dominates every stage of the solar supply chain. These controls would make it harder for foreign competitors to replicate that capacity without Chinese technology transfer.

The biomedicine entries target a different vulnerability. Proprietary cell and gene therapy technology platforms, novel target discovery and validation platforms for universal cell and gene therapy, siRNA drug technology, and pathogenic microorganism-related technologies are listed. Notably, the biomedicine section includes a **convenience licensing provision (自动许可)** for licensing models that do not involve ownership transfer — a deliberate design choice to encourage international collaboration while controlling IP transfer.

| Sector | Technologies | Treatment | Strategic Logic |
|---|---|---|---|
| AI | 23 items | 14 prohibited, 9 restricted | Data sovereignty, sensitive use, compute foundation |
| Biomedicine | 5 items | Mostly restricted | Protect IP, enable licensing revenue |
| Photovoltaics | 12 items | Mostly restricted | Maintain supply chain dominance |

The trilateral structure — AI, biotech, solar — maps neatly onto China's three most globally competitive technology sectors. The message is consistent: China will participate in global technology trade, but on terms that protect its strategic assets.

![Data analytics dashboard with charts and metrics — the compliance and licensing landscape for AI technology trade between China and the rest of the world is about to get significantly more complex](https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=400&fit=crop)

---

## Section 8: The October 23 Meeting — Diplomacy in Parallel

While the export catalog was being digested by global markets, a quieter form of statecraft was unfolding in Beijing. On October 23, Foreign Minister Wang Yi met with **Eric Schmidt, former CEO and Executive Chairman of Google, and Kevin Rudd, former Prime Minister of Australia**, for discussions on AI safety and global AI governance.

The meeting, reported by Chinese state media, touched on establishing notification mechanisms between the US and China for AI incidents that could threaten national security — a confidence-building measure that has been under discussion since the Geneva AI safety dialogue in 2025.

The juxtaposition is revealing. On the same day that CCTV announced DeepSeek and MiniMax's export registration, China's top diplomat was sitting down with two prominent Western figures to discuss AI incident notification and governance cooperation. The dual-track approach — tightening unilateral controls while pursuing bilateral dialogue — mirrors Washington's own strategy of export restrictions paired with safety dialogues.

The notification mechanism, if finalized, would represent the first formal channel for the two superpowers to alert each other to AI developments that could pose national security risks. It would not resolve the underlying competition, but it would establish a floor beneath it — a shared understanding that some AI capabilities are too dangerous to develop or deploy without warning.

---

## Section 9: What Happens Next — The November 15 Deadline

The public comment period closes on November 15, 2026 — exactly one month after the draft was published. Between now and then, Chinese AI labs, multinational chip companies, foreign governments, and industry trade groups will all have the opportunity to submit feedback.

Several questions will dominate the comment process:

**The "world-leading capability" threshold.** This is the most ambiguous criterion in the entire catalog. What counts as world-leading? Who decides? A model ranked #1 on LMArena? A model exceeding benchmarks of a specific Western competitor? Without clearer definitions, Chinese labs face significant uncertainty about whether their next-generation models will require registration.

**The chip design scope.** The inclusion of "AI chip design methodology" in the restricted category could cover everything from high-level architecture documents to specific circuit layouts. Chinese AI chip companies — Huawei's HiSilicon, Cambricon, Biren — may push for narrower definitions that protect their ability to license design IP to overseas foundries and partners.

**The open-source boundary.** The exclusion for already-released open-source models is clear. But what about a model that is released open-source *after* crossing a performance threshold? Is the act of open-sourcing itself an export that requires registration? The MOFCOM has suggested it is — open-sourcing a restricted model would require registration, even though the resulting public release would then be excluded from ongoing controls.

**The overseas cloud deployment question.** The catalog treats deployment of restricted models on a company's own overseas cloud infrastructure as subject to "convenience licensing" (便利化许可) — a simplified approval process. But the criteria for what qualifies as "own cloud" versus third-party infrastructure remain undefined. For Chinese AI companies with global cloud operations — Alibaba Cloud, Tencent Cloud, Huawei Cloud — this distinction matters enormously.

| Timeline | Event |
|---|---|
| Oct 16, 2026 | Announcement No. 48 published; interim registration takes effect |
| Oct 20, 2026 | US FASCSA ban on DeepSeek (federal civilian agencies) |
| Oct 23, 2026 | CCTV reports DeepSeek/MiniMax registration; Wang Yi meets Schmidt/Rudd |
| Nov 4, 2026 | Moonshot's promised K3.1 Pro open-weight release date |
| Nov 15, 2026 | Public comment deadline for export catalog |
| Q1 2027 | Expected finalization of revised catalog |
| Q1 2027 | Moonshot AI Hong Kong IPO (reported target) |

The November 15 deadline compresses what is normally a months-long regulatory process into a single month. This suggests Beijing wants the rules finalized before the end of 2026 — in time to govern the next wave of model releases and the anticipated IPOs of Chinese AI companies in early 2027.

---

## What the Comments Are Saying

> **技术进出口观察** (Technology Trade Observer)
> "真是风水轮流转，以前都是美西方发达国家卡我们的脖子，现在我们竟然也有不愿意让他们接触的东西了，给钱也不卖。"
> *"How the tables have turned. It used to be the Western developed countries choking our supply chains. Now we have things we don't want them to touch — they can't buy it at any price."*
> — Weibo top comment on the announcement, October 16

> **@GlobalTechWire**
> "The API carve-out is the smartest part of this. China isn't walling off its AI — it's controlling who gets the crown jewels while keeping the service economy running. Washington still hasn't figured out this distinction."
> — X (Twitter), October 17

> **开源社区的老码农** (Old Coder from the Open Source Community)
> "关键是开源豁免条款。已经发布的不受影响，但未来超过阈值的模型开源前需要登记。这实际上给了监管部门一个'否决权'——虽然不太可能用，但存在的本身就足以改变行为。"
> *"The key is the open-source exemption. Already-released models are unaffected, but future models above the threshold need registration before open-sourcing. This effectively gives regulators a 'veto' — unlikely to be used, but its existence alone changes behavior."*
> — V2EX thread, October 18

> **@AIPolicyAnalyst**
> "Everyone's comparing this to US export controls but the structural difference is huge. The US restricts hardware entering China. China restricts *knowledge* leaving. One controls atoms, the other controls bits. The bits are harder to enforce."
> — X (Twitter), October 17

> **半导体产业纵横** (Semiconductor Industry Analyst)
> "芯片设计方法论被纳入限制出口，这对华为海思、寒武纪这些公司的海外授权业务影响最大。他们可能需要为每一次IP授权做登记。好消息是有便利化安排，坏消息是时间表完全不确定。"
> *"Including chip design methodology in restricted exports hits Huawei HiSilicon and Cambricon's overseas licensing hardest. They may need to register every IP license. The good news is there are convenience provisions; the bad news is the timeline is completely uncertain."*
> — WeChat public account, October 19

> **@CodedInSilicon**
> "As someone who builds on Qwen open weights daily: nothing has changed for me. Everything already on Hugging Face stays. But I'm watching the November 4 K3.1 release closely. If Moonshot open-sources a 2.8T model *after* these rules, that's the real test case."
> — Hacker News, October 22

---

## The Bottom Line

China's export control catalog is not a wall. It is a **filter** — designed to let commerce, APIs, and open-source collaboration flow freely while requiring state oversight of the highest-stakes technology transfers. The three red lines (data, sensitive use, compute foundation) define what Beijing considers non-negotiable. The API carve-out shows what it considers acceptable. And the registration process, already completed by DeepSeek and MiniMax, demonstrates that compliance is neither theoretical nor crippling.

For the global AI industry, the practical impact is a new compliance layer on any deal involving Chinese model weights, source code, or AI chip IP. Companies building on Chinese open-weight models should monitor the threshold definitions in the final catalog. Companies consuming Chinese AI through APIs need do nothing.

The deeper significance is structural. The era of unrestricted AI technology flow is ending — not because of any single policy but because both superpowers, independently and simultaneously, have decided that frontier AI is too strategically important to leave ungoverned. Washington reached this conclusion in 2022 and spent three years building hardware controls. Beijing reached it in 2026 and built software controls in response. The two systems are not symmetrical, but they are convergent: both treat the most advanced AI capabilities as instruments of national power, subject to state authority.

Between now and November 15, the world's AI companies have one month to shape the final rules. After that, the filter goes live — and the global AI supply chain will have a second gatekeeper.

---

*Image credits: Unsplash. Sources: China's Ministry of Commerce Announcement No. 48 (October 16, 2026); CCTV Yuyuantantian (October 23, 2026); Xinhua News Agency; Caixin; Fortune; Bloomberg; Reuters. Social media comments translated and edited for clarity.*
