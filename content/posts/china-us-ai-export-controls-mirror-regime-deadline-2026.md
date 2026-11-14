---
title: "Two Walls: How US Chip Controls and China's AI Export Controls Became Mirror Images"
date: "2026-11-14"
excerpt: "On November 15, 2026, the comment period closes on China's first-ever outbound AI export controls. Announcement No. 48 did not appear in a vacuum. It is the mirror image of four years of American restrictions — and together, the two regimes are quietly building the architecture of a bifurcated AI world."
metaTitle: "Two Walls: US-China AI Export Controls Mirror Regime"
metaDescription: "China's AI export control comment period closes Nov 15. Comparing MOFCOM Announcement 48 with US chip rules reveals a mirror regime that will shape AI for years."
tags: ["China AI", "Export Controls", "MOFCOM", "AI Policy", "Geopolitics", "DeepSeek", "Semiconductors", "AI Agents", "Tech Regulation", "US-China Relations"]
keywords: "China AI export controls, MOFCOM Announcement 48, US chip export controls, AI technology export, model weights regulation, AI agent controls, tech bifurcation, DeepSeek federal ban, APEC summit AI, open source licensing"
image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80"
heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200"
readingTime: 16
---

On November 15, 2026 — tomorrow, as this article is published — the public comment period closes on the most consequential piece of Chinese AI regulation ever drafted. Announcement No. 48, issued jointly by the Ministry of Commerce and the Ministry of Science and Technology on October 16, proposes to place 40 technologies under export prohibition or restriction. Twenty-three of them are AI technologies. For the first time anywhere, the weights, checkpoints, source code, and training methods of frontier-scale models are treated as controlled strategic goods, subject to licensing before they can leave the country.

Four time zones away, a different kind of deadline has already passed. On November 4, the US Department of Homeland Security ordered the removal of all DeepSeek technology from federal civilian IT systems, making DeepSeek the first AI model ever exiled from a national government infrastructure under supply-chain security powers. Congress is moving the RASA Act to close cloud-access loopholes. Speaker Johnson has promised tighter chip restrictions. Jensen Huang has resigned. The two walls are going up at the same time, each built in the other's image, and almost nobody is looking at both of them together.

That is the mistake. Read separately, each regime looks like an isolated act of techno-nationalism. Read together, they reveal something larger: the United States and China have independently converged on the same architecture for controlling artificial intelligence, and the two systems are now interlocking like gears. What comes out of that interlock is not a Cold War metaphor. It is an operating manual for a bifurcated AI world — and the final shape of it gets decided this weekend.

## Wall One: The American Regime, Four Years in the Making

The American wall started with silicon. In October 2022, the Bureau of Industry and Security published the first round of export controls aimed squarely at cutting Chinese AI companies off from advanced computing. The logic was physical: frontier AI training requires frontier chips, frontier chips are made with American technology, and therefore the flow of chips could be throttled at the chokepoint.

Each iteration widened the net. The October 2023 update closed the subsidiary loophole and expanded licensing requirements for chipmaking equipment. The December 2024 rules attacked H20-class chips designed specifically to comply with earlier thresholds — the regulatory equivalent of moving the goalposts after the kick. Through 2025, the controls extended into the cloud: the AI Diffusion Rule, though later rescinded in part, established the principle that model weights above 10^26 FLOPs of training compute could themselves be controlled articles, and that renting controlled compute to foreign customers required due diligence.

| Date | US Measure | Target | Mechanism |
|------|-----------|--------|-----------|
| Oct 2022 | BIS Interim Final Rule | Advanced AI chips to China | Performance-density licensing thresholds |
| Oct 2023 | Expanded controls | Chipmaking equipment, subsidiaries | License requirements, end-use checks |
| Dec 2024 | H20/H200 rules | Compliance-engineered chips | Closed performance workarounds |
| Jan 2025 | AI Diffusion Rule (partly rescinded) | Frontier model weights, compute-as-a-service | 10^26 FLOPs weight controls, KYC for cloud |
| Nov 2025 | FASCSA action vs DeepSeek | Chinese AI software in federal systems | Binding operational directive removal |
| Nov 2026 | RASA Act (House passed) | Remote access to US AI chips | Cloud compute restrictions pending Senate |
| Nov 2026 | Section 232 tariff probe | Nvidia export licenses preserved | Congressional inquiry, tightened oversight |

The throughline of the American regime is chokepoint logic: identify the scarce physical inputs — EUV lithography, HBM memory, leading-edge GPUs — and control them at the point of export. Software came late to this framework. The FASCSA action against DeepSeek in November 2025 was the first time a model itself, rather than the hardware beneath it, was treated as a supply-chain risk. The Department of Homeland Security ban in November 2026 extended that principle across the entire federal civilian estate.

## Wall Two: Announcement 48, China's Answer

China's wall went up with far less warning. On October 16, 2026, at 4:00 PM Beijing time, MOFCOM and MOST published the draft revision to the Catalogue of Technologies Prohibited and Restricted from Export. The catalogue has existed since 2001 and has been revised periodically — but never before has it reached so directly into the core of a frontier technology.

The 23 AI control parameters span four clusters: large models, AI agents, computing clusters, and information processing technologies. Five biopharmaceutical technologies — cell and gene therapies, small nucleic acid drugs, pathogenic microorganisms — and twelve photovoltaic technologies covering polysilicon manufacturing, wafer production, and solar cell manufacturing round out the list.

| Cluster | Items | Control Posture |
|---------|-------|-----------------|
| Frontier model weights, checkpoints, source code, training methods | Restricted above thresholds | License required for export |
| AI agent planning, coordination, tool-use technologies | Restricted above capability benchmarks; prohibited for defense/critical infrastructure | License or ban |
| Computing cluster design and optimization know-how | Restricted | License required |
| Biopharma (cell/gene therapy, nucleic acid drugs, pathogens) | Mixed prohibited/restricted | License or ban |
| Photovoltaics (polysilicon, wafers, cells, key equipment) | Mostly restricted | License required |

The model threshold is the headline: any model with at least 2 trillion parameters, at least 10^26 FLOPs of training compute, or a global top-10 position on public evaluation rankings, global call volume, or comparable measures at the time of export. Meeting any one of three tests triggers control. For scale, Microsoft's MAI-Base-2 sits at roughly 2.8 trillion parameters. Meituan's LongCat-2.5 has been reported at 1.6 trillion — under the parameter line but potentially over it on the compute or ranking tests.

What makes Announcement 48 genuinely novel is the third column of the catalogue: agents are regulated as a distinct object, independent of the models that power them.

## The Agent Line: Regulation by Capability, Not Identity

Item 266505X restricts agents that split instructions into 20-step task chains, coordinate 60 concurrent agents, or use 200 tools with 90% accuracy and success. High-performance agents built for critical infrastructure, defense, or core government use are prohibited outright — no license path at all.

This is a philosophically different move from anything in the American framework. US controls regulate things: chips, weights, compute time. Announcement 48 regulates capabilities: planning depth, concurrency, tool count, success rate. A Chinese export-control officer evaluating a license application is not asking "what is this artifact?" but "what can this system do?"

| Capability Test | Threshold | Practical Meaning |
|-----------------|-----------|-------------------|
| Task decomposition depth | 20+ sequential steps | Autonomous long-horizon workflows |
| Multi-agent concurrency | 60+ coordinated agents | Orchestrated agent fleets |
| Tool integration | 200+ tools at 90%+ success | Deep environment manipulation |
| Critical infrastructure / defense targeting | Any | Prohibited — no license path |
| Source models | 2T params / 10^26 FLOPs / global top-10 | Weights and training know-how controlled |

The thresholds map remarkably well onto the systems Chinese labs actually shipped in 2026. Agent frameworks that orchestrate dozens of sub-agents moved from research demos to production deployments inside enterprises this year. DeepSeek's open-source Super-agent, released on October 31, watches team chat, identifies coding problems, and opens pull requests without being asked — behavior that sits deliberately inside the observe-and-assist envelope rather than the prohibited autonomous-deployment envelope. Whether that positioning was made with Announcement 48 in mind is unknowable from outside, but the timing invites the question.

## What Escapes Both Walls

The most important part of Announcement 48 may be what it deliberately leaves out. MOFCOM was explicit on three exemptions, and each one reshapes the strategic picture.

First, technology already in the public domain through open-source releases, academic publications, or other means is not covered. Second, using a restricted model through an API, an app, a SaaS product, or on-device deployment sits outside the controls. Third — and this is the sleeper provision — future open-sourcing by a Chinese lab that crosses a threshold is handled through automatic licensing, not prohibition.

| Pathway | Covered? | Practical Effect |
|---------|----------|------------------|
| API/SaaS access to a restricted model | No | Qwen, DeepSeek, Kimi API usage unaffected |
| Already-published open weights | No | Existing Hugging Face releases stay legal |
| Future open-source above thresholds | Automatic license | Labs can still release; export is licensed, not banned |
| Licensing weights to a foreign entity | Yes | Registration now, license after catalogue final |
| Transfer of ownership abroad | Yes | Registration now, license after catalogue final |
| Foreign acquisition of Chinese AI company | Yes | Registration + potential OIS Review under Order 837 |

Read against the American regime, the symmetry is striking. The United States controls compute entering China; China controls weights and know-how leaving. The United States worries about what Chinese labs can train; China worries about what foreign actors can build on top of Chinese technology. The two controls are not antagonistic — they are complementary, each closing the escape hatch the other leaves open.

The open-source question is where the mirror regime gets tested. Chinese labs — DeepSeek, Qwen, GLM, Kimi, Tencent's Hy4 — have made open weights the centerpiece of their global strategy. Announcement 48 does not end that strategy; it licenses it. But a license regime, even an automatic one, creates friction, and friction compounds. Every future release above the thresholds will require a registration step, a review window, and a paper trail. The era of a Chinese lab publishing a 2-trillion-parameter model on a Friday afternoon with no government involvement is over.

## Head-to-Head: The Mirror Table

| Dimension | United States | China |
|-----------|--------------|-------|
| Control object | Chips, compute, model weights, software in federal systems | Model weights, training know-how, agents, biopharma, solar tech |
| Core threshold | Performance-density caps; 10^26 FLOPs weight rule (partly rescinded) | 2T params / 10^26 FLOPs / top-10 rank; agent capability benchmarks |
| Regulatory instrument | Export Administration Regulations, FASCSA, Section 232 | Catalogue of Technologies Prohibited and Restricted from Export; TIER |
| Temporal posture | Controls on inputs (what can enter China's supply chain) | Controls on outputs (what can leave China's technology base) |
| Software treatment | Late adopter; first model exile Nov 2025, federal removal Nov 2026 | First-mover on agent-specific capability controls |
| Open-source posture | Diffusion Rule reached weights; open weights largely uncontrolled | Public-domain exemption; automatic licensing for future releases |
| Deal review | CFIUS for inbound investment | Order 837 OIS Review for outbound investment; tech-export registration |
| Current flashpoint | RASA Act, Blackwell scandal fallout | Announcement 48 finalization after Nov 15 |

The table exposes the inversion. America's regime is extraterritorial in reach — it governs chips made in Taiwan and the Netherlands because they embody American technology. China's regime is territorial in scope but architectural in depth — it governs anything that originates in China's technology base, regardless of where the transaction is signed. One regime throttles inputs. The other licenses outputs. A company that wants to build frontier AI anywhere on earth now needs to satisfy both.

## The Deal-Making Earthquake

The least discussed provision of Announcement 48 is not in the catalogue at all. It is the interim registration requirement, which has applied since October 16 — before a single comment was filed, before the catalogue is final. Any export of a listed technology, including transactions already underway but not completed, must be registered through MOFCOM's Technology Trade Management Information System now.

Layered on top sits State Council Order No. 837, effective July 1, 2026, which created an Outbound Investment Security Review process with the power to prohibit or unwind completed deals. Order 837 covers not just corporate transfers but cross-border dispatch of technical personnel, provision of guidance and training, and follow-on offshore transactions.

For the global M&A market, this combination changes the math on every deal involving Chinese AI assets. A foreign company acquiring, investing in, or licensing from a Chinese business with catalogue-covered technology must now model Chinese regulatory approval into its timeline — alongside CFIUS review, EU FDI screening, and whatever the American regime adds next. Technology transfer agreements signed in October but not yet completed are already registrable. Law firm alerts from Jones Day, White & Case, and Akin Gump in the past three weeks have all carried the same warning: assess deal structures now, because the approval surface has doubled.

## What Happens After November 15

The comment window closing tomorrow does not mean the rules take effect tomorrow. It means MOFCOM begins finalizing the catalogue with the submitted feedback in hand — and several pressure points will shape the final text.

| Date | Event | What to Watch |
|------|-------|---------------|
| Nov 15, 2026 | Comment period closes | Whether thresholds move; scope of biopharma carve-outs |
| Late Nov 2026 | APEC leaders' meeting | Timing proximity noted by analysts; possible bilateral signaling |
| Post-finalization | Catalogue takes effect | Registration hardens into licensing; enforcement posture |
| Ongoing | US response | Whether Washington extends controls to Chinese model APIs |
| Ongoing | Open-weight releases above thresholds | First registration test case from a Chinese lab |

The APEC timing deserves attention. The comment window closes almost exactly as leaders gather, and while MOFCOM insists the revision targets no country, the symmetry with American measures will not be lost on any delegation. A final catalogue published before or during APEC would be a statement; one published after, with softened thresholds, would be a different statement.

The single most watched data point will be the first test case: when a Chinese lab next open-sources a model that crosses a threshold, does the automatic license process complete in days, weeks, or months? The answer will determine whether Announcement 48 is a procedural filter or a de facto moratorium on frontier open weights from China.

## Who Wins, Who Pays

The mirror regime has asymmetric costs. Frontier Chinese labs face new friction on their most powerful global distribution channel — open weights — right as their international developer mindshare peaks. DeepSeek's Super-agent, Tencent's Hy4, and Alibaba's Qwen have spent 2026 converting open-source credibility into enterprise contracts. A licensing step is not a ban, but it inserts a government checkpoint between a lab's research output and the world's developers.

Foreign enterprises consuming Chinese AI through APIs face a milder version of the same uncertainty. MOFCOM says API use is outside the draft. Legal teams at multinational corporations are nonetheless building model-swap architectures — the ability to replace a Chinese model with an American one without rebuilding agent workflows — as standing risk mitigation. The Cloud Security Alliance's recommendation to inventory every Chinese-origin model, agent framework, and AI security tool in use is now standard practice at regulated enterprises.

The clearest beneficiaries are the third-party orchestration platforms — OpenRouter, routing services, cloud marketplaces — that abstract model choice away from applications. A world where every model carries export-control baggage is a world that rewards indirection. Ironically, the mirror regime may accelerate the exact interoperability layer that makes individual national controls less meaningful.

And beneath it all, the bifurcation compounds. Hyperscaler capital expenditure guidance for 2026 crossed $800 billion in combined guidance across five American companies, even as two of them reported negative free cash flow. China's compute buildout continues on domestic silicon. Each wall makes the other's construction more rational. Neither side is building a fence; both are building foundations.

![Data flows and trade routes visualized — the infrastructure of a bifurcated AI world](https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&q=80)
*The new map of AI: controls on inputs from one side, licensing on outputs from the other.*

## The Question Nobody Is Asking

The debate in both capitals is framed as security: who can access whose technology, on what terms. But the mirror regime answers a question neither government has asked directly — what happens to the open, interoperable AI ecosystem that both countries' labs spent the past three years building?

The honest answer is that it fragments, slowly and then suddenly. Not into two isolated stacks — trade in APIs, publications, and talent continues — but into two stacks with border crossings. Every model release, every licensing deal, every acquisition above a threshold becomes a customs event. The developers in Bangalore, Lagos, and São Paulo who built products on whichever Chinese open-weight model performed best will now need to check the license status the way they already check the export status of the chips underneath.

November 15 does not settle any of this. It starts the clock on the final catalogue, on the first enforcement decisions, on the first lab that files for an automatic license, on the first American regulatory response to a licensed Chinese open-weight release. Two walls are up. The door between them is still open. What gets built in the doorway will define AI for the rest of the decade.

---

**What developers are saying:**

> **@securestack_mike (Twitter/X):** "Everyone's treating China's export controls as retaliation. Wrong frame. It's reciprocity with paperwork. The US controlled inputs for 4 years; China just claimed outputs. The symmetry is the message."
>
> **知乎用户 · 量子位观察者 (Zhihu):** "自动许可这个设计很微妙——不是禁止开源，而是把开源变成国家行为。以后每一个大模型发布，背后都有商务部的一枚章。"
> *"The automatic licensing design is subtle — it's not banning open source, it's turning open source into an act of state. Behind every future model release, there'll be a Commerce Ministry stamp."*
>
> **@lily_ai_dev (Xiaohongshu/小红书):** "我们做agent产品的已经在准备双栈方案了。Qwen和DeepSeek的API该用还用，但架构上必须能一键切到Llama或者Claude。不是不信中国模型，是不信地缘政治。"
> *"Those of us building agent products are already preparing dual-stack architectures. Keep using Qwen and DeepSeek APIs, but the architecture must switch to Llama or Claude in one click. It's not distrust of Chinese models — it's distrust of geopolitics."*
>
> **u/silicon_counsel (Douban):** "最被低估的条款是技术人员外派也要管。这意味着中国AI工程师去海外子公司做技术指导都算技术出口。跨国公司的人力资源部比法务部更先崩溃。"
> *"The most underrated provision covers dispatching technical personnel abroad. A Chinese AI engineer doing technical guidance at an overseas subsidiary counts as a technology export. Multinational HR departments will crack before legal departments do."*
>
> **@governance_wonk (Twitter/X):** "2T parameters OR 10^26 FLOPs OR top-10 ranking. Any one of three tests triggers control. That's not a threshold, that's a dragnet. LongCat-2.5 at 1.6T is under the parameter line but one strong benchmark away from the ranking line."*
>
> **github.com/open-agent-std (GitHub discussion):** "Agent controls defined by step-count and tool-count are going to be circumvented within a quarter. Capability benchmarks age like milk. The planning-depth metric that matters is the one nobody can measure yet — and that's the loophole everyone will walk through."

---

**Related reading:**

- [The Blackwell Fingerprints: Why Nvidia's Scandal Makes Chip Export Controls Unenforceable](/blog/china-ai-blackwell-fingerprints-nvidia-scandal-2026/)
- [China's AI Export Control Window Closes in Silence](/blog/china-ai-export-control-window-closes-silence-2026/)
- [DeepSeek Federal Ban: FASCSA and the First AI Model Exile](/blog/deepseek-federal-ban-fascsa-first-ai-model-exile-2026/)
- [China AI Chip Shortage and the End of the Cheap Model Era](/blog/china-ai-chip-shortage-end-cheap-model-era-2026/)
