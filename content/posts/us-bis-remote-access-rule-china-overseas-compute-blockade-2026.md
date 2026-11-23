---
title: "The Third Door Closes: How America's Remote Access Rule Cut Off China's Last Compute Workaround"
date: "2026-11-23"
metaTitle: "US BIS Remote Access Rule 2026: China's Overseas Compute Blockade | AI in China"
metaDescription: "On November 16, 2026, the US BIS issued its most aggressive export control yet — blocking Chinese AI companies from renting GPU compute overseas. Here's the full timeline of the cat-and-mouse game, and what happens next."
excerpt: "For three years, Chinese AI companies played an elaborate game: American chips couldn't enter China, so Chinese companies went to the chips — building data centers in Malaysia, Singapore, and Thailand, renting NVIDIA-powered compute from third parties, and training models remotely. On November 16, 2026, the United States ended the game with four paragraphs of regulatory text. The rule it issued may prove to be the most consequential — and most self-defeating — export control in the history of the AI race."
tags: ["China AI", "Export Controls", "BIS", "Remote Access Rule", "NVIDIA", "Alibaba Cloud", "Southeast Asia", "Compute Sovereignty", "Geopolitics", "Semiconductors"]
keywords: ["US BIS remote access rule 2026", "China overseas compute blockade", "NVIDIA export controls Southeast Asia", "Alibaba Cloud data centers Malaysia", "AI chip remote access restrictions", "Megaspeed NVIDIA investigation", "ByteDance Malaysia Blackwell", "China compute sovereignty", "remote access security act", "AI export controls timeline"]
heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"
---

# The Third Door Closes: How America's Remote Access Rule Cut Off China's Last Compute Workaround

At 9:47 AM on November 16, 2026, the US Bureau of Industry and Security published an Interim Final Rule with the bureaucratically anodyne title *"Control of Advanced Semiconductor Remote Access."* The document ran barely four pages. It did not mention any Chinese company by name. It did not need to. Within hours, the implications were cascading through data centers from Johor Bahru to São Paulo: the workaround Chinese AI companies had spent three years and billions of dollars constructing — renting American GPU compute through third-country data centers — was now subject to US licensing requirements. The rule took effect on November 19, giving affected companies exactly three days of legal operation before the door closed.

Alibaba's response came three days later. On its November 19 earnings call, CEO Wu Yongming told investors that new export controls would affect the company's 2027 plans and that Alibaba was trimming its cloud growth forecast. Then he said something more revealing: Alibaba's progress on domestic computing capability had already exceeded initial expectations, and starting in 2027, the majority of new AI chips deployed in Aliyun would come from the company's own T-Head semiconductor unit, not from NVIDIA.

The exchange captured the paradox at the heart of this story. The United States just closed the last door it could find. But the room it was trying to keep China out of has been quietly rebuilding its own exits — and some of them are already open.

## The Rule: Four Paragraphs That Rewrote the Map

The November 16 rule — formally designated RIN 0694-AK50 — was unusual before anyone read a word of it. It was drafted not by the Commerce Department's BIS, which normally writes export controls, but by the Treasury Department and the White House National Security Council. Commerce Secretary Howard Lutnick had reportedly resisted issuing new NVIDIA-focused restrictions in the wake of the Jensen Huang scandal that forced the CEO's resignation on November 12. The Treasury-NSC alliance effectively bypassed him, with Treasury Secretary Scott Bessent — who had publicly suggested investigating NVIDIA's leadership and picking an external successor for Huang — driving the rule forward.

![Satellite view of global network connections — the infrastructure of cross-border compute](https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80)

The rule has four components, each targeting a different layer of the workaround ecosystem:

| Component | What It Does | Immediate Impact |
|-----------|--------------|-----------------|
| **Remote compute restrictions** | Any global data center providing large-scale generative AI compute to companies in China (or other restricted countries) must obtain a BIS license to purchase US-controlled chips | Cloud providers worldwide must now screen customers for Chinese connections |
| **Country licensing** | Advanced AI chip and server exports to Malaysia, Singapore, Thailand, Indonesia, and Brazil now require individual licenses | Five countries designated as "high transshipment risk" destinations |
| **Foundry compliance** | Tighter compliance checks on chip manufacturing for entities in restricted categories | Makes it harder for Chinese chip designers to access TSMC and other foundries |
| **Regime cleanup** | Formally rescinds the Biden-era tiered AI export control framework | Eliminates remaining legal ambiguity from the previous administration's approach |

The rule includes a 90-day grace period for data centers already providing compute services to affected companies. After that window closes in mid-February 2027, continuing to serve Chinese customers without a license becomes an export violation. The penalties are not trivial — they include loss of access to American technology, criminal prosecution, and fines that can reach millions of dollars per violation.

What makes this rule different from everything that came before is its fundamental shift in regulatory logic. Previous export controls regulated the movement of physical objects — chips crossing borders, servers changing hands. This rule regulates something far more abstract: the act of *using* American technology, regardless of where that technology sits. A B200 GPU installed in a Malaysian data center has not been exported to China. But if a Chinese company uses that GPU's output over a network connection, the US government now considers that an export subject to its jurisdiction.

This is a profound expansion of American regulatory reach, and it did not happen overnight. To understand why it arrived now — and why it may not work the way its authors intend — you have to trace the full arc of the export control era.

## Phase One: The Wall Goes Up (October 2022–2023)

The first wave of US chip export controls arrived on October 7, 2022. The BIS rules published that day restricted the sale of advanced AI chips — initially the A100 and H100 — to China, and simultaneously cut Chinese companies off from the American semiconductor manufacturing equipment needed to produce advanced chips domestically. The logic was straightforward: AI supremacy requires compute, compute requires advanced semiconductors, and the United States (through NVIDIA and AMD) and its allies (through ASML and TSMC) controlled the supply of both.

The initial impact was severe. Chinese AI labs that had been scaling their training clusters with the latest NVIDIA hardware suddenly faced hard ceilings. Alibaba, Baidu, Tencent, and ByteDance had collectively ordered hundreds of thousands of A100s and H100s; many of those orders were cancelled or diverted. The rules created an instant bifurcation in the global AI landscape: American labs training on H100 clusters, Chinese labs scrambling to make do with stockpiled A100s and smuggled components.

But the wall had a gaping hole, and it was visible from the start. The October 2022 rules restricted chip *exports* — the physical movement of silicon across borders. They said nothing about *compute access*. A Chinese company could not buy an H100 and install it in a Beijing data center. But nothing prevented that same company from renting H100 compute from a cloud provider in Singapore, Tokyo, or Virginia. American cloud providers — Amazon, Microsoft, Google — all offered GPU instances, and none of them were required to verify whether the code running on those instances originated from a Chinese lab.

The first Chinese companies to exploit this loophole did so quietly, through VPNs and offshore subsidiaries. By mid-2023, the practice was widespread enough that US lawmakers began drafting legislation to close it. The Remote Access Security Act — introduced in April 2025 and passed by the House of Representatives in January 2026 by a 369-22 vote — would have explicitly brought cloud-based access to American compute under export control jurisdiction. But the Senate never acted on it, and for most of 2025 and 2026, the loophole remained technically legal.

## Phase Two: The Great Migration (2024–2025)

The second wave of export controls, issued in 2023 and tightened through 2024, attempted to close the subsidiary workaround. The US added more Chinese companies to the Entity List, restricted the sale of even downgraded chips (the A800 and H800 variants NVIDIA had created specifically for the Chinese market), and began pressuring allied governments to enforce similar restrictions. In December 2025, the Trump administration permitted H200 sales to China with a 25% tariff — a partial thaw — but kept the more advanced B200 and B300 completely blocked.

These restrictions produced an unintended consequence: instead of bringing Chinese compute demand back to the bargaining table, they pushed it offshore at industrial scale. Chinese companies began establishing data center operations in Southeast Asia at a pace that transformed the region's technology landscape.

The logic was compelling. Southeast Asia offered political stability, abundant land and power, fast construction timelines, and — critically — no restrictions on purchasing NVIDIA hardware. Malaysia, in particular, positioned itself as the region's AI infrastructure hub, with government incentives, dedicated data center zones, and a regulatory environment that welcomed Chinese investment. Singapore, already a financial and technology hub, became the corporate gateway. Thailand and Indonesia followed with their own incentive programs.

![Data center corridor — rows of server racks powering the AI economy](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80)

The scale of what happened next is only now becoming clear. Research by the Digital Society Institute identified at least four distinct deployment patterns:

| Deployment Model | Description | Example |
|-----------------|-------------|---------|
| **Shadow greenfield** | Chinese-funded data center built under a local corporate shell | Local subsidiaries with opaque ownership structures |
| **Joint venture** | Partnership between local and Chinese companies, with NVIDIA hardware deployed for Chinese customers | Malaysia-based partnerships serving Chinese AI firms |
| **Rack colocation** | Chinese companies rent server racks in existing data centers | Multiple tenants in Singapore and Malaysian facilities |
| **Hybrid cloud** | Chinese engineers physically travel overseas, run training jobs, and bring the results back | "Train abroad, infer at home" workflows |

The most prominent example was ByteDance. According to reporting from The Information and The Wall Street Journal, ByteDance partnered with Aolani Cloud — a Southeast Asian cloud services provider — to deploy approximately 500 NVIDIA Blackwell systems in Malaysia, comprising roughly 36,000 B200 chips with a hardware cost exceeding $2.5 billion. The server sales were handled by Aivres, a company that had previously been a subsidiary of Inspur, the Chinese server manufacturer that was placed on the US Entity List and subsequently rebranded.

But ByteDance was not the only player, and not even the most audacious. That distinction belongs to a Singapore company called Megaspeed International.

## Phase Three: The Megaspeed Wake-Up Call (2024–2026)

Megaspeed was founded in Singapore in 2023. Within a week of incorporation, it obtained NVIDIA Cloud Partner certification. The company then proceeded to build data centers in Malaysia and Indonesia, purchasing NVIDIA GPUs at scale and renting compute capacity to customers — many of whom, US investigators later alleged, were Chinese companies.

Between June 2024 and February 2026, Megaspeed's Malaysian affiliate purchased at least $4.8 billion in NVIDIA-chip-based equipment, according to trade records reviewed by congressional investigators. The chips never entered China. The servers never entered China. But the compute — the actual mathematical operations that those chips performed — was accessible from China via network connections. Model weights trained on Megaspeed's infrastructure could be transferred anywhere in the world in seconds.

The US Commerce Department had been investigating Megaspeed since 2024. In 2026, the case was referred to the Department of Justice. But the legal framework for prosecuting Megaspeed was murky. The Export Administration Regulations — the legal basis for all US export controls — are built on jurisdiction over physical *items*: chips, servers, components. When compute is delivered as a cloud service, the item stays in one place while its output crosses borders. The legal theory for regulating that output was untested.

The Megaspeed case exposed the fundamental vulnerability in America's export control architecture. Congress saw the problem and passed the Remote Access Security Act in the House, but the Senate stalled. The executive branch needed a different mechanism. That mechanism arrived in the form of the Interim Final Rule on November 16, 2026 — bypassing Congress entirely and using the Treasury-NSC alliance to push it through a Commerce Department whose secretary was politically compromised by the NVIDIA scandal.

| Timeline | Event | Significance |
|----------|-------|--------------|
| Oct 2022 | First BIS chip export controls | Physical chips blocked from entering China |
| 2023–2024 | Entity list expansions, A800/H800 bans | Subsidiary and intermediary workarounds targeted |
| Dec 2025 | H200 permitted to China with 25% tariff | Partial thaw under Trump; B200/B300 remain blocked |
| Jan 2026 | Remote Access Security Act passes House 369-22 | Congressional intent clear; Senate stalls |
| Mar 2026 | ByteDance/Aolani Malaysia deployment reported | 36,000 B200 chips deployed offshore |
| Nov 12, 2026 | Jensen Huang resigns as NVIDIA CEO | Political dynamics shift dramatically |
| Nov 16, 2026 | BIS Interim Final Rule RIN 0694-AK50 published | Remote compute access brought under export controls |
| Nov 17, 2026 | Alibaba Cloud announces global data center expansion | Counter-move: domestic and alternative-market buildout |
| Nov 19, 2026 | Rule takes effect; Alibaba earnings call | Wu Yongming confirms domestic chip acceleration |

## The Immediate Fallout: Three Days of Chaos

The rule's three-day gap between publication and enforcement created a compressed window of frantic activity. Cloud providers in affected countries scrambled to assess their Chinese customer exposure. Data center operators who had spent billions building facilities partly predicated on Chinese demand faced the prospect of those facilities running below capacity. And Chinese companies with ongoing training runs on overseas infrastructure had to decide whether to accelerate, migrate, or abandon their workloads.

The geographic overlap with Alibaba's recently announced expansion plans was not coincidental. On November 17 — one day after the rule was published and one day before Alibaba's Hong Kong Cloud Summit — Alibaba Cloud announced plans to build new data centers in multiple global locations, targeting 20 gigawatts of total capacity by 2032. The new locations include Malaysia and Brazil — both named in the BIS rule — as well as Singapore, Thailand, and Indonesia, all designated as high-risk transshipment destinations.

The timing created a striking tableau. On one day, the US government designated Malaysia as a country requiring export licenses for advanced AI chips. On the next, China's largest cloud provider announced it was building data centers there. The message was not subtle: Alibaba is not retreating from Southeast Asia. It is adapting its strategy — shifting from renting compute to owning infrastructure, from relying on NVIDIA hardware to deploying its own T-Head chips, and from serving Chinese customers overseas to serving *all* customers from a position of reduced dependency on American technology.

## China's Response: The Domestic Pivot Accelerates

The November 19 Alibaba earnings call was the first major corporate response to the new rule, and it revealed how far China's domestic chip program has come. Wu Yongming's statement that T-Head chips would supply the majority of new Aliyun AI capacity from 2027 was not a defensive reaction — it was a confirmation of a strategy already in motion.

The numbers behind Alibaba's domestic chip program tell a story of quiet, sustained investment:

| Metric | Detail |
|--------|--------|
| **T-Head AI chip lineage** | Hanguang 800 (inference, 2019) → Yitian 710 (ARM server, 2021) → PPU series (training, 2025–2026) |
| **Deployment target** | Majority of new Aliyun AI chips from T-Head starting 2027 |
| **Investment window** | Heavy domestic chip production investment in 2027–2028 |
| **Performance claim** | Progress "exceeding initial expectations" per Wu Yongming |
| **Cloud impact** | Short-term growth forecast trimmed; long-term domestic capacity to increase significantly |
| **Global capacity goal** | 20GW by 2032, spread across existing and new data center locations |

Alibaba is not alone. Huawei's Ascend chip line — which now powers DeepSeek's V4 models — has been scaling production capacity, with an estimated 800,000 to 1 million AI chip dies produced in 2025 and plans to double Ascend 910 series output in 2026. Cambricon's MLU architecture has found a niche in edge inference. And the China Telecom Xing4 supercomputer, built on a 285-billion-parameter model running entirely on domestic chips without CUDA dependencies, demonstrates that Chinese labs can achieve frontier-adjacent performance on fully domestic stacks.

At the World Computing Conference in Changsha on November 20 — four days after the BIS rule — Chinese officials laid out the ambition explicitly: 10,000 EFLOPS of intelligent computing capacity by 2030. For context, the current global total across all countries and providers is estimated at roughly 3,000 to 4,000 EFLOPS. China's target, if achieved, would represent a tripling of the world's current AI compute capacity within four years — built primarily on domestic chips.

## What the Rule Actually Achieves

The honest assessment of the November 16 rule requires separating its immediate effects from its long-term consequences.

In the immediate term, the rule is devastating for the specific workaround it targets. Chinese companies that had invested billions in Southeast Asian data center capacity — ByteDance's $2.5 billion Malaysian deployment, the various shadow operations identified by researchers, the Megaspeed-style rental schemes — now face a 90-day deadline to either obtain licenses (which the Treasury-dominated rulemaking process suggests will be rare) or shut down their Chinese customer operations. The compute they were renting overseas is effectively stranded.

But the longer-term picture is more ambiguous. The rule has already produced at least three unintended consequences that work against its stated purpose.

First, it has eliminated the last incentive for Chinese companies to maintain any dependency on American technology. When the overseas workaround existed, Chinese labs had a reason to keep one foot in the NVIDIA ecosystem — to maintain compatibility, to benchmark against American hardware, to hedge their domestic investments. That hedge is now worthless. Every yuan that might have been spent on NVIDIA-compatible infrastructure will go to domestic alternatives.

Second, it has accelerated the development of non-American compute ecosystems in exactly the countries the US is trying to keep aligned. Malaysia's response to being designated a high-risk transshipment destination was not to comply with American wishes — it was to begin drafting its own data center regulatory framework, announced by Investment, Trade and Industry Minister Johari Abdul Ghani on November 12. Malaysia wants to be an AI hub, not an American enforcement zone. The more aggressively the US asserts jurisdiction over Malaysian data centers, the more incentive Malaysia has to build infrastructure that operates independently of American rules.

Third, the rule's reliance on Treasury and NSC authority — bypassing a reluctant Commerce Department — sets a precedent that future administrations can use to expand export controls in ways that have nothing to do with national security. If the executive branch can regulate any use of American technology anywhere in the world by redefining it as an export, the concept of export jurisdiction becomes effectively unlimited. That is a power that will not always be wielded by people whose goals align with open scientific collaboration.

## The 90-Day Window

The most pressing question is what happens between now and mid-February 2027, when the grace period expires.

Chinese companies with active training runs on overseas infrastructure have three options. They can attempt to secure BIS licenses — an uncertain and politically fraught process. They can migrate their workloads to domestic chips, which requires significant engineering effort but is increasingly feasible given the maturity of Huawei's Ascend and Alibaba's T-Head ecosystems. Or they can accelerate their training runs to complete before the deadline, extracting as much value as possible from the remaining window.

The third option is already happening. Multiple sources in the Chinese AI community report that labs with overseas compute contracts are running their clusters at maximum utilization, 24 hours a day, in a final push to complete training runs and archive model weights before the February cutoff. It is, in effect, a compute fire sale — the last train out of the NVIDIA ecosystem, and everyone is trying to get on it.

After February, the picture changes fundamentally. Chinese AI companies will be operating in a world where every FLOP they use is either produced domestically or obtained through channels that carry significant legal and operational risk. That world will be harder in the short term — domestic chips are still less efficient, less available, and less supported by the global software ecosystem than their NVIDIA counterparts. But it will also be a world where Chinese labs have no choice but to invest fully in the domestic stack, and where the gap between American and Chinese compute efficiency closes not because American chips get better, but because Chinese engineers get better at extracting performance from constrained hardware.

DeepSeek's entire approach to AI development — achieving frontier performance with fewer resources through architectural innovation — was born from compute scarcity. The November 16 rule does not eliminate that scarcity. It guarantees it. And if the past three years are any guide, scarcity is precisely the condition under which Chinese AI engineering produces its most disruptive innovations.

## Who Wins and Who Loses

| Actor | Position | Assessment |
|-------|----------|------------|
| **NVIDIA** | Loses remaining China market access; faces further political scrutiny | Huang's departure already destabilized; remote-access rule removes last growth avenue |
| **Chinese AI labs** | Short-term pain, long-term forced self-sufficiency | Scarcity breeds innovation; domestic stack matures faster under pressure |
| **Alibaba Cloud** | Strategic pivot to T-Head chips; global infrastructure play | Short-term growth trimmed; long-term sovereignty strengthened |
| **Southeast Asian data centers** | Stranded capacity, regulatory uncertainty | Malaysia drafting independent rules; Chinese investment continues |
| **Huawei / T-Head** | Primary beneficiaries of compute bifurcation | Domestic chip demand guaranteed by US policy |
| **US cloud providers** | Compliance burden, customer screening requirements | Must now verify ultimate beneficial ownership of compute users |
| **Global AI ecosystem** | Accelerating bifurcation into two parallel technology stacks | Long-term fragmentation risk increases |

## What Comes Next

The 90-day window will be the most consequential period in the history of AI export controls. Several developments are worth watching closely.

**BIS license decisions.** The rule requires data centers serving Chinese customers to obtain licenses. Whether BIS grants any — and under what conditions — will determine whether the overseas compute ecosystem survives in any form. Early signals suggest the Treasury-influenced process will be restrictive, but individual country dynamics (particularly Malaysia's push for sovereign data center regulation) may create exceptions.

**Alibaba's T-Head performance.** If T-Head chips can match even 70-80% of NVIDIA's performance-per-watt for inference workloads, the commercial case for Chinese cloud providers to maintain NVIDIA infrastructure largely evaporates. Alibaba's 2027 deployment timeline will be the critical test.

**Malaysia's regulatory response.** If Malaysia enacts its own data center framework — one that requires compliance with Malaysian law but not American export controls — it creates a template for other countries caught between the two superpowers. Singapore, Thailand, and Indonesia are all watching.

**The next DeepSeek moment.** Chinese labs have a track record of responding to compute constraints with architectural breakthroughs that reduce the compute needed for equivalent performance. The V3 model that shocked the world in January 2025 was trained on a fraction of the GPUs that American labs were using. If the same pattern holds, the November 16 rule may produce not a slower Chinese AI industry, but a more efficient one — and the next surprise will come from a lab that learned to do more with less because it had no other choice.

**Congressional action.** The Remote Access Security Act passed the House 369-22 in January but stalled in the Senate. The BIS rule effectively accomplished by regulation what Congress could not accomplish by legislation. Whether the incoming Democratic Congress in January 2027 attempts to codify, expand, or restrain this authority will shape the durability of the remote-access framework.

The third door has closed. But the history of this conflict suggests that every door the United States closes becomes a wall that Chinese engineers learn to build around — and the walls they build tend to become foundations.

---

## Voices From the Community

*"My team spent six months setting up training infrastructure in Johor. Three days after the rule dropped, our cloud provider told us they're suspending all Chinese accounts. Six months of work, gone. We're moving everything to Ascend now — it's slower, but at least it won't disappear overnight."*
— **Li Wei (李伟)**, ML infrastructure engineer at a Beijing AI startup *(translation: "我们花了六个月在柔佛搭建训练基础设施。规定发布后三天，云服务商就通知暂停所有中国账户。六个月的工作没了。现在全部迁到昇腾——虽然慢，但至少不会一夜之间消失。")*

*"People keep saying this will slow China down. I think it does the opposite. Every Chinese AI researcher I know just got permission from their leadership to go all-in on domestic chips. The budget constraints disappeared. The 'let's wait and see if NVIDIA comes back' faction lost the argument overnight."*
— **Zhang Min (张敏)**, semiconductor analyst at a Shanghai investment fund *(translation: "大家总说这会拖慢中国。我觉得恰恰相反。我认识的每个中国AI研究员都刚刚得到领导的许可，全力投入国产芯片。预算限制消失了。'等等看英伟达会不会回来'那派一夜之间输了。")*

*"The Malaysia situation is fascinating. Johari Abdul Ghani didn't say 'we'll comply with US export controls.' He said 'we're writing our own rules.' That's the real story here — the US isn't just containing China, it's alienating the countries it needs to make containment work."*
— **David Chen**, Southeast Asia technology policy researcher, Singapore

*"I work for a US cloud provider. The compliance burden from this rule is enormous. We're now expected to trace the ultimate beneficial ownership of every customer using GPU instances above certain thresholds. It's technically possible but operationally nightmarish. Some customers are just going to get dropped not because they're Chinese, but because we can't verify they aren't."*
— **Anonymous**, compliance engineer at a major US cloud provider

*"The 90-day deadline is creating a gold rush. Everyone with overseas compute access is running their clusters flat-out, trying to finish training runs before February. It's the most intense compute utilization I've ever seen. After that, I genuinely don't know where the next frontier model gets trained."*
— **Wang Fang (王芳)**, AI researcher, formerly at a major Chinese lab *(translation: "90天期限造成了抢金潮。所有有海外算力的都在满负荷运转，想在二月前完成训练。这是我见过的最密集的算力利用。之后，下一个前沿模型在哪里训练，我真的不知道。")*

*"The Treasury running export controls through the NSC because the Commerce Secretary was compromised by an NVIDIA scandal. If you wrote this in a novel, no one would believe it. But here we are, and the global AI ecosystem has to operate in the world this creates."*
— **Sarah Kim**, AI governance fellow, Brookings Institution
