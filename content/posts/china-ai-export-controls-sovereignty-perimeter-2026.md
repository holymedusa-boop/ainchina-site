---
title: "China Just Published Its First AI Export Controls. Everyone Is Reading Them Wrong."
date: "2026-10-18"
excerpt: "On October 16, 2026, Beijing proposed export controls on 40 technologies — 23 of them in AI — and the world read it as retaliation for US chip sanctions. Read the thresholds in the actual document. The catalogue is not a weapon pointed at Washington. It is a perimeter drawn around China's own AI stack, with gates left deliberately open — and the most important sentence in it is the exemption for open source."
author: "AI in China Editorial"
readTime: 16
tags: ["China AI Export Controls", "MOFCOM", "AI Sovereignty", "Export Catalogue", "Open Source AI", "DeepSeek", "Qwen", "AI Regulation", "Geopolitics", "China Tech"]
image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop"
keywords: ["China AI export controls 2026", "MOFCOM Announcement 48", "China prohibited restricted export technology catalogue", "AI export registration China", "China open source exemption export controls", "DeepSeek Qwen export", "AI sovereignty China", "US China AI decoupling", "compute cluster export controls", "World AI Cooperation Organization"]
---

![Earth at night seen from space — the lights of cities trace the flow of technology across borders that Beijing now wants to register, not close](https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop)

Within hours of the announcement, the narrative was set. "China hits back at US chip sanctions." "Beijing escalates the tech war." "The silicon curtain falls." Headlines from Singapore to San Francisco framed the October 16 publication of Announcement No. 48 — China's first comprehensive proposal to control exports of artificial intelligence technology — as the latest move in a two-year tit-for-tat with Washington.

Here is the problem with that reading: it doesn't survive contact with the actual document.

Announcement No. 48, issued jointly by the Ministry of Commerce and the Ministry of Science and Technology, is a 40-item catalogue with precisely calibrated technical thresholds, a blanket exemption for open-source technology, automatic licensing for overseas compute construction, and a public comment period that runs through November 15. Products made with the controlled technology are explicitly outside the scope. API services built on restricted models are explicitly outside the scope. Technologies already published in papers or released as open weights are not managed at all.

That is not the anatomy of a sanctions package. It is the anatomy of a border — one with customs gates, express lanes, and a very specific list of goods that may not cross. Understanding where Beijing drew that border, and what it deliberately left outside the fence, tells you far more about China's AI strategy than the retaliation headline ever will.

## What October 16 Actually Announced

The mechanics matter, because several of them have never existed before in Chinese technology trade law.

The proposal amends the Catalogue of Technologies Prohibited and Restricted from Export — a document that dates to 2001 and has been revised multiple times since, most recently in 2023 when laser radar and certain rare-earth refining methods were added. This revision adds 40 technologies across three sectors: 23 in artificial intelligence, 5 in biomedicine, and 12 in photovoltaics. Of the 40, 14 are proposed as prohibited outright, and 26 as restricted — exportable only with a license.

Two features break with precedent. First, the registration requirement began *immediately*. From the moment of publication until the amended catalogue takes formal effect, any exporter transferring a listed technology overseas — by sale, license, or even a change of ownership or control to a foreign entity — must register the transaction on MOFCOM's unified platform. Already-ongoing transfers must be registered retroactively. Beijing has never before applied a real-time transaction registry to technology categories still under consultation.

Second, the thresholds are written in engineering units. This catalogue does not say "advanced AI chips." It says: chip design technology requiring 14-nanometer-or-below manufacturing processes, or 2.5D/3D advanced packaging integration, or memory manufacturing at 18 nanometers and below, or 3D NAND flash design at a storage density of 8 gigabits per square millimeter or higher. It does not say "AI supercomputing." It says: chip-to-chip or node-to-node interconnect for large-scale intelligent compute clusters with bidirectional bandwidth of 800 gigabytes per second or higher, and unified heterogeneous-cluster scheduling technology supporting two or more chip vendors with cross-chip communication bandwidth utilization of 90 percent or higher.

| Sector | Items Proposed | Prohibited | Restricted | Scope Notes |
|---|---|---|---|---|
| Artificial intelligence | 23 | 4 categories | 19 categories | Large models, agents, compute clusters, information processing |
| Biomedicine | 5 | 2 | 3 | Cell/gene therapy, siRNA drugs, pathogen microorganisms |
| Photovoltaics | 12 | 1 | 11 | Polysilicon, wafer, and cell manufacturing; listed key equipment included |
| **Total** | **40** | **14** | **26** | Products made with listed tech are NOT controlled |

The immediate registration window, running from October 16 until the catalogue's formal adoption, gives regulators a live map of who is exporting what — before a single license has been granted or denied. That is an information play as much as a control play, and it is a playbook Washington would recognize from its own Entity List end-user reporting regime.

## The Retaliation Theory — and Why It's So Seductive

The conventional wisdom did not emerge from nowhere. The timing genuinely looks pointed.

On the same October 16, the State Council's executive meeting — chaired by Premier Li Qiang — convened to deploy the next phase of the "AI Plus" action plan, demanding application-driven innovation, compute-power coordination, and higher-quality data supply. Two days earlier, the Philadelphia Semiconductor Index had closed its eighth consecutive daily decline, the longest losing streak since the 2008 financial crisis, wiping out roughly $2 trillion of market value over eight sessions as investors recoiled from AI capital-spending doubts and CoreWeave's credit-default-swap spreads blew past 1,190 basis points. Reports surfaced the same week that the Trump administration is assembling a "superintelligence" working group and proposing an AI incident-notification channel with Beijing — a channel Beijing has not publicly answered.

Seen through that lens, the catalogue looks like leverage: you choke our chip imports with the Entity List, we choke your access to Chinese AI know-how. And the mirror-image logic has real history. In July 2026, Reuters reported that Chinese officials had discussed restricting foreign access to top-tier models including Qwen, Doubao, and GLM — reporting that caused genuine alarm across the global developer community that builds on Chinese open weights. When the announcement finally landed in October, many assumed the July trial balloon had simply become policy.

But the document's own text keeps refusing to cooperate with that story — starting with the four AI categories Beijing chose to place entirely off-limits.

## Read the Prohibited List Carefully

The prohibited tier is the hardest edge of the catalogue, and its contents are revealing. Not frontier commercial models. Not training frameworks. Not open-weight releases.

| Prohibited AI Category | What It Covers | Stated Rationale |
|---|---|---|
| Autonomous malware generation and mutation | AI-driven systems that generate or mutate malicious code without human direction | Could attack critical information infrastructure, defense, and core government systems |
| Cross-border security deepfake detection | Detection systems used for China's cross-border data-transfer security risk prevention and response | Protects the state's own defensive and monitoring capabilities |
| "Core data" foundation models | Large models trained on data touching national security, economic lifelines, major public interests | Prevents state-critical data from being operationalized abroad |
| High-performance sensitive-scenario agents | Agents built for or mainly used in critical infrastructure, defense, and core government at high capability levels | Keeps state-capacity AI inside the state |

Look at what is on this list: offensive cyber capability, the state's own detection and surveillance stack, and models soaked in China's most sensitive data categories. These are not commercial assets. They are instruments of state power — the AI equivalents of what any country classifies. The United States does not export its most sensitive cyber tools either; it simply uses classification rather than an export catalogue to achieve the same end.

Now look at what is *not* on the prohibited list: no consumer model, no coding model, no open-weight release, no robotics stack, no commercial agent platform. DeepSeek's models are not here. Qwen is not here. The entire Chinese open-source ecosystem that has spent two years colonizing global developer workflows — six of OpenRouter's top ten tools are Chinese — survives this catalogue untouched.

## Read the Restricted List Even More Carefully

The restricted tier is where the engineering thresholds do their real work, and where the calibration becomes unmistakable.

| Restricted AI Category | Threshold Trigger | Why That Number Matters |
|---|---|---|
| High-performance deepfake detection | "High-performance" tier of synthetic audio/video detection | Protects detection edge while allowing commercial content tools |
| AI-assisted vulnerability mining | Systems reaching a defined capability level in exploit discovery | Dual-use cybersecurity at frontier capability |
| Voiceprint and speaker recognition | Systems at defined performance levels, including minority-language translation | Biometric and linguistic capability with clear security valence |
| Agent tool-integration scale | Agents supporting 200+ integrated third-party tools | Captures only the most capable general-purpose agents |
| Advanced AI chip design | 14nm-and-below process dependency, 2.5D/3D packaging, 18nm-and-below memory, 3D NAND ≥8 Gb/mm² | Frontier silicon only; mature-node commercial chips unaffected |
| Compute-cluster interconnect | Bidirectional bandwidth ≥800 GB/s chip-to-chip or node-to-node | Frontier training fabric, not enterprise inference deployments |
| Heterogeneous cluster scheduling | Unified scheduling across 2+ chip vendors with ≥90% cross-chip bandwidth utilization | Directly targets the mixed Huawei–Ascend/NVIDIA fleets built under sanctions |

That final row deserves a moment of attention. A restriction on heterogeneous scheduling technology — systems that can orchestrate two or more vendors' AI chips at 90 percent-plus cross-chip bandwidth efficiency — is not aimed at America. NVIDIA does not need China's heterogeneous-scheduling know-how. This row exists because of the peculiar architecture of China's own sanctioned compute ecosystem, where clusters stitch together Ascend, Cambricon, and smuggled or legacy NVIDIA parts. Beijing is asserting sovereignty over the *connective tissue* of its domestic compute stack — the technology that makes Chinese clusters function as one machine.

In other words, the threshold is drawn precisely where China's frontier ends and its state interests begin. Commercial AI below the thresholds flows freely. Frontier capability above them requires a license. And the licensing regime itself carries an unusual design.

![Policy documents and drafting notes on a conference table — the catalogue was built with specific engineering thresholds, not slogans](https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop)
*Announcement No. 48 was drafted with input from research institutions and industry associations, and its thresholds are written in engineering units — a first for the 25-year-old catalogue.*

## The Open-Source Escape Hatch

Here is the sentence that most coverage skipped past: technologies that have already entered the public domain through open source or academic publication are not subject to management at all.

Not licensed. Not registered. *Not managed.* Qwen's weights, DeepSeek's papers, GLM's repositories — all of it sits permanently outside the fence, by design and in writing. The accompanying MOFCOM Q&A goes further, specifying automatic licensing — effectively report-and-go — for five entire categories of outbound activity: open-source AI technology exports, Chinese companies building and operating their own overseas compute centers, tape-out manufacturing of chips abroad, joint R&D using foreign resources, and participation in international standards-setting.

The same Q&A draws a bright commercial line. If a company takes a restricted-tier model and deploys it in localized form overseas, that counts as a technology export — but deployment on a company's own overseas cloud, deemed lower-risk, gets the automatic license. And a long list of business models is explicitly *not* technology export at all: API calls, app and web interaction, SaaS delivery, and lightweight on-device deployments.

| Activity | Status Under the Proposal |
|---|---|
| Open-source releases and published research | Outside management entirely |
| Overseas compute centers built and operated by Chinese firms | Automatic license — "report and go" |
| Overseas chip tape-out manufacturing | Automatic license |
| Joint R&D conducted with foreign resources | Automatic license |
| International standards participation | Automatic license |
| Restricted-model API/SaaS/app service from China | Not a technology export |
| Restricted-model overseas localized deployment | Technology export — licensing required; own-cloud deployment gets automatic license |
| WAIC organization member capacity-building projects | Enhanced convenience measures |

The architecture is consistent: keep the commercial pipeline open, keep the open-source flywheel spinning, keep Chinese companies' globalization paths greased — while reserving veto power over the small set of capabilities that Beijing considers sovereign. MOFCOM's spokesperson called the controls "precise and limited," said they do not target any specific country, and pointed to dynamic adjustment as technologies age out of sensitivity. Critics will note that every trade ministry says such things. The difference is that this time the thresholds, exemptions, and licensing lanes are published in enough engineering detail to be testable against behavior.

## A Mirror Held Up to Washington

The more revealing comparison is not with China's past behavior but with America's current one. Washington controls the *inputs* of AI — the silicon, the lithography, the EDA tools — to keep China's frontier slow. Beijing's catalogue controls the *know-how* of AI — the model classes, the agent architectures, the cluster interconnect — to keep China's state-capability edge contained.

| Dimension | US Regime (2022–2026) | China's Proposal (Oct 2026) |
|---|---|---|
| Primary target | Foreign adversary's compute build-out | Own sovereign capability and state-stack |
| Mechanism | Entity List, FDPR, chip performance caps | Catalogue + licensing + transaction registry |
| Open-source treatment | Under repeated review; export feared as leakage | Explicitly exempt, permanently outside scope |
| Commercial AI services | Restricted from reaching Chinese hyperscalers | Explicitly outside scope (API/SaaS exempt) |
| Thresholds | Performance density, country of origin, end user | Engineering metrics: nm, GB/s, Gb/mm², tool counts |
| Exit ramps | None published | Dynamic adjustment; outdated tech removed |
| Information harvest | End-user and end-use reporting | Immediate registration of in-flight transfers |

Neither side will describe the symmetry. Washington insists its controls are national security, not containment; Beijing insists its catalogue is routine technical trade management, not retaliation. But the mirror is there: two capitals, two years apart, each building a licensing perimeter around the AI capabilities it considers sovereign, each claiming its fence is the reasonable one.

The global developer community should care about the asymmetry that survives the comparison. America's regime has no published exemption for open source — every few months, a new proposal surfaces to restrict open-weight model exports, and the community holds its breath. China's regime has now written the open-source exemption into its foundational text, in language broad enough to cover the Qwen and DeepSeek ecosystems that dominate global adoption. If the October text survives consultation unchanged, the world's open-weight AI capital will have *stronger* statutory protection from Beijing's export bureaucracy than from Washington's.

## Who Wins and Who Loses

Strip away the geopolitics and the catalogue's economics are surprisingly legible.

| Actor | Position | Why |
|---|---|---|
| DeepSeek, Alibaba, Zhipu, Moonshot | Winners | Open-weight strategies immunized; overseas expansion lanes kept open; rivals relying on closed US models gain no edge |
| Chinese chip and cluster builders | Mixed | Know-how protected domestically, but overseas licensing adds friction to foreign sales of scheduling/interconnect tech |
| Global South adopters | Winners | WAIC capacity-building gets dedicated convenience; cheap Chinese models stay cheap and available |
| US frontier labs | Neutral to losers | No barrier to buying Chinese commercial AI; but the open-source exemption cements Chinese model penetration of Western stacks |
| Cyber-espionage ecosystem | Losers | Malware-generation and frontier vuln-mining tech restricted at both tiers; sale now requires state approval |
| Western hardware incumbents | Watch closely | The ≥800 GB/s and heterogeneous-scheduling rows map to the sanctioned-cluster workaround economy |

The biggest structural winner may be the open-source model itself. For two years, Beijing has watched Chinese open weights capture American developers, European startups, and Global South governments — a soft-power windfall that no amount of diplomatic spending could buy. The July leak that Beijing might restrict those models triggered genuine panic in that ecosystem; the October text formalizes the opposite decision. China's AI globalization strategy now has a legal chassis: open weights as the export vehicle, API and SaaS as the service layer, licensing as the brake on only the most sensitive tiers.

## The Open Question

What remains genuinely uncertain is not the retaliation question — the text answers that — but the enforcement question. A catalogue with engineering thresholds is only as precise as the officials applying it. The registration regime that began October 16 will generate, for the first time, a real-time ledger of Chinese AI technology outflows: who is licensing what to whom, and where control changes hands. That ledger is administrative infrastructure, and infrastructure outlives intentions. Today's thresholds may be calibrated; a future revision — the catalogue is designed for dynamic adjustment — could move them.

The comment window closes November 15. Watch three things between now and then: whether the open-source exemption survives verbatim; whether the 200-tool agent threshold and the 800 GB/s interconnect line move up or down under industry pressure; and whether any major lab publicly files comments. The answers will reveal whether this perimeter functions as drafted — a sovereignty fence with open gates — or drifts, as trade law sometimes does, toward something with more wall in it.

![A lighthouse marking a perimeter at the water's edge — Beijing's catalogue draws a line around its most sensitive AI capabilities while leaving commercial channels lit and open](https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=800&h=400&fit=crop)
*The perimeter logic: protect the sovereign core, license the frontier, free the commercial — and exempt the open-source ecosystem that has made Chinese AI a global standard.*

## Social Media Reactions

**Zhihu — @量子位搬运工 (21k likes)**
> "仔细看指标：800GB/s互连带宽、90%跨芯片利用率、200个工具调用——这不是拍脑袋写的，这是照着国产算力集群的现状画的线。管的是'国家队能力'，放的是商业化。翻译过来就一句话：饭碗可以卖，锅不能给。"

"Look at the thresholds: 800 GB/s interconnect, 90% cross-chip utilization, 200 tool calls — these weren't pulled from thin air, they're drawn around the current state of domestic compute clusters. What they're managing is 'state-team capability,' what they're releasing is commercialization. Translated: you can buy the rice bowl, but not the pot."

**X (Twitter) — @aira_capital, AI infrastructure analyst (1,842 likes)**
> "Everyone calling this 'China's Entity List' didn't read it. The Entity List bans *buying chips*. This catalogue licenses *selling know-how* while exempting open source entirely. The closest US equivalent is... nothing. We never wrote the exemption down."

**Weibo — @科技侦查兵 (8.7k likes)**
> "早该管管了。我们的模型辛辛苦苦训练出来，凭什么让某些国家拿去搞网络攻击？支持商务部！开源的继续开源，做生意的继续做生意，敏感的就得握在自己手里。"

"About time. Our models were trained through hard work — why should certain countries get to use them for cyberattacks? Full support for MOFCOM! Open source stays open, business stays business, but the sensitive stuff must stay in our own hands."

**Hacker News — throwaway_hf (412 points)**
> "The 200 third-party tool integration line for agents is fascinating. That's a capability threshold that captures general-purpose agents while leaving vertical ones alone. Has any export regime anywhere ever been written with this level of technical specificity? Genuinely asking."

**Xiaohongshu — @跨境电商老周 (3.2k likes)**
> "做SaaS出海的朋友可以松口气了：API调用、网页交互、SaaS应用都不属于技术出口。但做模型本地化部署交付的要注意，限制类模型在海外落地属于技术出口，要走许可。已经在做的赶紧去登记。"

"Friends doing SaaS going overseas can breathe easy: API calls, web interaction, and SaaS apps are not technology exports. But those doing localized model deployment deliveries should note: restricted-tier models landing overseas count as technology export and need licensing. If you're already doing it, go register now."

**GitHub — openweights-keeper (maintainer, 6.9k stars project)**
> "The permanent open-source exemption is the headline, and it buried the lede in most Western coverage. Weights already released can't be recalled, but China just made it *policy* that future open releases stay uncontrolled. That's a bigger commitment to open weights than any Western government has made in writing."

---

*For more on the road to this announcement, read our coverage of [the September decision window that closed in silence](/blog/china-ai-export-control-window-closes-silence-2026/), the [US–China summit that exposed the open-source fault line](/blog/us-china-ai-summit-open-source-reckoning-2026/), China's [857-model safety disclosure gap](/blog/china-ai-safety-disclosure-gap-857-models-2026/), and how [sanctions built China's AI compute empire](/blog/china-ai-compute-empire-sanctions-boomerang-deepseek-huawei-2026/).*
