---
title: "The Complaint That Flipped: Twelve Days After Calling the Accusations 'Unfounded,' Beijing Opened Its Own Case Against DeepSeek and Moonshot"
metaTitle: "China Probes DeepSeek and Moonshot: How Anthropic's Report Became Beijing's Case"
slug: "china-cac-probe-deepseek-moonshot-data-leak-2026"
date: "2026-09-26"
excerpt: "On September 9, Beijing publicly dismissed American accusations of industrial-scale AI distillation as groundless. Twelve days later, its own internet regulator had summoned every company named in Anthropic's report — and opened a formal investigation into DeepSeek and Moonshot AI. The complaint had flipped direction: Washington's grievance was that Chinese labs took Claude's capabilities. Beijing's grievance is what traveled the other way. Inside the probe that turned a US-China AI dispute into a domestic Chinese reckoning."
author: "AI in China Editorial"
readTime: "15 min"
heroImage: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1200"
category: "AI Policy"
tags:
  - CAC
  - DeepSeek
  - Moonshot AI
  - Anthropic
  - Data Security
  - China AI Regulation
  - AI Distillation
  - Cross-Border Data
  - Kimi
  - Trump-Xi Summit
  - China AI
---

On the morning of September 22, 2026, officials from the Cyberspace Administration of China arrived at two of the country's most valuable AI companies and began asking questions. At DeepSeek's Hangzhou offices and at Moonshot AI's Beijing headquarters, regulators sat down with executives and staff and wanted to know one thing: had sensitive Chinese data — police records, surveillance footage, material touching the military — ended up on an American company's servers without anyone's knowledge?

Twelve days earlier, on September 10, Anthropic had published a 154-page threat intelligence report accusing seven Chinese AI labs of running large-scale campaigns to extract Claude's capabilities. The report named Alibaba, Moonshot AI, DeepSeek, Zhipu, MiniMax, Xiaomi, and SenseTime, and it documented roughly 190 million exchanges in total. Washington's reading of that document was an intellectual property story: Chinese labs were "distilling" American frontier models, harvesting their reasoning to train their own systems, and passing the outputs off as their own.

Beijing read the same document and saw something different. Not a theft of American capability — a leak of Chinese data.

According to reporting by The Information, the CAC first summoned representatives of all seven named companies. Then it narrowed its focus to the two whose documented cases involved the most sensitive material: DeepSeek and Moonshot. Officials have questioned staff at both firms. The probe is open. No timetable has been set, and no penalties have been decided.

The move landed like a thunderclap in exactly the places you would expect. Zhipu AI's Hong Kong-listed shares fell as much as 12% on the news. MiniMax slid 4%. Alibaba's Hong Kong shares dropped more than 4%. And it landed in the most delicate diplomatic week of the year for AI: Xi Jinping was preparing to sit down with Donald Trump in Washington, with an AI incident-reporting mechanism on the agenda, while DeepSeek was preparing to brief the United Nations Security Council on AI risks during the General Assembly.

This is the story of how one American report became two national cases — and why the Chinese one may ultimately matter more.

## The Contrarian Reading: Beijing Did Not Circle the Wagons

The obvious script was available to Beijing, and it had been used before. When the NSA, FBI, and CISA issued their joint advisory on September 8 naming six Chinese AI companies for "industrial-scale distillation," China's foreign ministry dismissed the accusations the next day as groundless. The framing was familiar: American protectionism dressed up as security, an attempt to kneecap Chinese competitors who had simply gotten good.

That script survived exactly twelve days.

What changed was not the politics — it was the evidence. Anthropic's September 10 report was different from a government advisory in one crucial respect: it was specific. It named volumes, dates, methods, and accounts. It described how Moonshot had relayed nearly 300,000 customer requests through 5,380 fraudulent accounts over a ten-day stretch, displaying Claude's answers to users as though they had come from Kimi. It described DeepSeek routing more than 12.1 million exchanges through Claude across fourteen days in July. And it described, in granular detail, what some of those relayed requests contained.

That granular detail is what flipped the complaint. Because once you accept the report's account of how the routing worked, an inescapable conclusion follows: Chinese users' data — including data touching policing, surveillance, and military facilities — was flowing to an American AI company's infrastructure, without those users' knowledge, and potentially in violation of Chinese law.

Anthropic's grievance was about what left Claude: extracted capabilities. Beijing's grievance is about what went the other way: Chinese data. Same alleged conduct, read from opposite ends. China has not endorsed Anthropic's accusation of distillation — it found its own complaint inside the same evidence.

This is the contrarian outcome almost nobody predicted: the American lab's threat report did not rally Beijing to defend its champions. It gave Beijing a case file against them.

## Subject Profile: What Anthropic Actually Documented

To understand why the CAC acted, it helps to be precise about what the September 10 report contains. The report covers activity Anthropic says it observed between December 2025 and August 2026, logged under separate campaign codes, and attributes to five coordinated campaigns across seven companies.

The volumes are not evenly distributed, and the distribution itself is politically interesting:

| Company | Documented Exchanges | Window | Note |
|---|---|---|---|
| Alibaba | 151M+ | May–July 2026 | Largest campaign by an order of magnitude |
| Moonshot AI | ~23M | May–July 2026 | ~300K customer requests in 10 days via 5,380 accounts |
| DeepSeek | 12.1M+ | 14 days in July 2026 | Densest campaign; ~50K+ requests/day at peak |
| Zhipu AI | 3.4M | Reported window | Smaller volume |
| Xiaomi | ~400K | Reported window | Smallest named campaign |
| **Total** | **~190M** | Dec 2025–Aug 2026 | Five campaigns, seven companies |

Two features of this table explain the shape of the Chinese probe. First, the biggest number belongs to Alibaba — and Alibaba is not the focus of the investigation. Second, the probe settled on the second- and third-largest campaigns. Volume, in other words, was not the selection criterion. Content was.

The report's methodology sections describe how the campaigns evaded detection: rotating fraudulent accounts, distributing requests across thousands of identities, targeting Claude's most valuable capabilities — agentic tool use, coding, data analysis, logical reasoning — and, in the relay cases, silently passing end-user queries through Claude and returning the outputs under the labs' own branding.

It is worth pausing on how unusual that last behavior is. Routing a user's query to a third-party model and presenting the answer as your own is not distillation in the classic sense. It is, at minimum, a misrepresentation to the user. And under Chinese data law, it is potentially something worse: a cross-border data transfer the user never consented to and the regulator never approved.

## Case Study One: The Chengdu Cameras

The example that appears to have alarmed Beijing most involves Moonshot and a municipal surveillance network.

According to the report, a user Anthropic assessed as likely affiliated with the People's Liberation Army submitted a request to Kimi, Moonshot's chatbot, asking it to analyze surveillance footage tracking a single individual across hundreds of police cameras in Chengdu. Some of those cameras were positioned outside facilities associated with the PLA and defense-linked research institutes. The request, and the footage it referenced, were passed along to Claude — with the user operating under the assumption they were interacting with a Chinese model.

Strip away the geopolitics and the compliance problem is stark. Police camera footage is among the most tightly controlled categories of data in China. Footage near military facilities sits in the categories the country's cross-border data rules treat most carefully. A Chinese AI company relaying that material to an American infrastructure provider — even unknowingly, even as part of a capability-extraction scheme — has created a national-secrets exposure on its own soil.

This is why the CAC, not the Ministry of Commerce or a trade body, is running the investigation. The Cyberspace Administration is the agency that licenses AI services for the domestic market, polices what data leaves the country, and holds the power to order products withdrawn. A summons from it is not a court proceeding, and it does not need one to act.

Moonshot, notably, has said nothing publicly about the probe. That silence is itself informative: with a confidentially filed Hong Kong IPO targeting roughly $3 billion in the works, an open regulatory investigation is the kind of material fact that must appear in any prospectus. The company is now navigating the worst possible pre-IPO scenario — not a business setback, but a governance question about how its product actually worked.

## Case Study Two: The Police Database and the Russian Credentials

The DeepSeek example runs through a different doorway but arrives at the same destination.

Anthropic's report describes DeepSeek relaying requests from engineers who were building a case-management system for a municipal Public Security Bureau — China's local police authorities. The relayed material included data used to compare an individual's movements against police records and national identification numbers. In a separate relayed query, the report says, live credentials tied to a Russian government database were exposed.

Think about what that means for a regulator in Beijing. A Chinese AI champion, celebrated at home as proof that the country can build world-class models despite chip restrictions, was — according to this account — operating its consumer product in part as a pass-through to an American model. Users believed they were talking to DeepSeek. Their queries were being processed by Claude. Some of those queries contained police system data and national ID numbers.

For Washington, this was evidence of distillation at industrial scale. For Beijing, it was evidence of something it treats as equally serious: its champion labs had architected their products in ways that made them vectors for data they are legally responsible for protecting. The Data Security Law and the Personal Information Protection Law both carry real penalties, and the CAC has spent the past three years building the enforcement machinery to apply them.

## The Legal Machinery Beijing Can Bring to Bear

The probe is not happening in a legal vacuum. China has constructed one of the world's most comprehensive data-sovereignty regimes over the past five years, and this case touches nearly every part of it.

The **Data Security Law** (2021) establishes a graded classification system for data and gives regulators authority over anything deemed "important" — a category that plainly includes police surveillance infrastructure. The **Personal Information Protection Law** (2021) requires consent for personal data processing and imposes strict conditions on cross-border transfers. The **cross-border data transfer rules** require security assessments for large-scale or sensitive transfers. And the **algorithm and AI regulations** give the CAC direct licensing authority over AI services operating in the domestic market.

There is a deeper irony here that Chinese legal scholars have surely noticed. Just this month, Beijing rolled out an expanded campaign against AI-related leakage of state secrets — warning that model training data and prompts could inadvertently carry classified information, and tightening rules on what data Chinese AI companies may handle. The official posture has been that the threat runs from foreign models inward. The Anthropic report describes the opposite flow: Chinese users' most sensitive queries running outward, through Chinese products, to foreign infrastructure.

Both things can be true at once, and Beijing's regulatory system is built to treat both as emergencies. That is what makes this probe dangerous for the companies in a way the American accusations never were. Washington can add a company to an entity list or restrict its chip supply. The CAC can revoke the license that lets a company operate at all.

## The Collateral Stakes: IPO, UN Podium, and the Summit

The timing of the probe compresses three separate clocks into the same week.

**Moonshot's IPO clock.** The company filed confidentially for a Hong Kong listing targeting around $3 billion, with reported valuation discussions in the $14 billion range. An open CAC investigation must be disclosed. How the regulator characterizes the violation — administrative irregularity versus systemic data-governance failure — will shape investor appetite and possibly the timeline. Hong Kong's market has been forgiving of Chinese AI losses; it is less forgiving of regulatory opacity.

**DeepSeek's diplomatic clock.** The company was scheduled to brief the UN Security Council this week on AI risks to international security — a remarkable platform for a Chinese lab, and one that sits awkwardly next to a domestic data-security probe. DeepSeek has spent 2026 converting technical credibility into institutional legitimacy: a $1 billion annualized revenue run rate, a high-stakes API repricing that worked, and now a UN podium. The CAC probe complicates every one of those storylines.

**The US-China dialogue clock.** The probe opened in the run-up to the September 24 Trump-Xi meeting in Washington, where AI featured prominently — including discussion of a mechanism for notifying each other about AI incidents with national-security implications. Beijing investigating its own labs for data leaks to an American company is, in that context, more than enforcement. It is a negotiating asset: proof that China takes AI data governance seriously on its own terms, not just when pressured.

The market read the combination nervously. Zhipu fell as much as 12% on the Hong Kong exchange, MiniMax dropped 4%, and Alibaba's Hong Kong shares slid more than 4% — even though Alibaba, the owner of the single largest campaign in Anthropic's report, is not currently a subject of the inquiry. When regulators start reading American threat reports as Chinese case files, the market treats every named company as exposed.

## What Comes Next

The most likely near-term outcome is administrative rather than existential. The CAC has not announced penalties, and China's regulators have historically preferred correction orders, fines, and mandatory compliance over destroying strategic companies — particularly companies they have spent years nurturing as national champions.

But the probe sets precedents that will outlast this case. Three things to watch:

**First, the compliance architecture.** If the relay behavior is confirmed, the fix is not cosmetic. Any Chinese AI product that routes user queries to foreign models — for redundancy, for quality fallback, for capability — will need disclosure, consent, and regulatory clearance. That is a product-architecture constraint, not a policy paper.

**Second, the distillation equilibrium.** The probe raises the domestic cost of the very practice Washington has been policing from outside. If extracting frontier-model outputs now risks a data-sovereignty investigation at home, Chinese labs face pressure from both directions. The labs that invested in clean-room training — ByteDance's explicit no-distillation mandate is the most prominent example — suddenly look prescient rather than puritanical.

**Third, the precedent of enforcement-by-foreign-report.** The CAC's case file here was substantially assembled by an American company's published research. That is an awkward dependency for a sovereignty-minded regulator, and it suggests Beijing will accelerate building its own technical audit capacity — domestic red teams, model-output forensics, and cross-border data monitoring that do not require waiting for Anthropic to publish.

For the seven named companies, the calculation has changed permanently. They are no longer managing a geopolitical narrative about American protectionism. They are managing a domestic compliance case with national-secrets overtones. Those are very different problems, and the second one does not respond to press statements about open-source innovation.

## Social Media Voices

**@量子位老读者 (Quantum Bit long-time reader):** "看了CAC进驻两家公司的消息，第一反应不是惊讶，是'终于'。用国外模型给用户提供服务还不告知，这在任何国家的数据保护法里都是红线，不只是中美问题。" / "Seeing the CAC move into both companies, my first reaction wasn't surprise — it was 'finally.' Serving users with a foreign model without telling them is a red line under any country's data protection law, not just a China-US issue."

**@AI泡沫观察员 (AI bubble watcher):** "Anthropic的报告本意是打中国模型，结果帮中国监管找到了执法线索。这大概是2026年最魔幻的剧情反转。" / "Anthropic's report was meant to hurt Chinese models — instead it handed Chinese regulators their case file. Probably the most surreal plot twist of 2026."

**@Kimi重度用户 (Heavy Kimi user):** "所以我之前问的很多问题其实是Claude回答的？感觉被背叛了，但不是被美国公司，是被自己信任的产品。" / "So a lot of the questions I asked were actually answered by Claude? I feel betrayed — not by the American company, but by a product I trusted."

**@硅谷随想 (Silicon Valley musings):** "Washington accused them of stealing intelligence. Beijing accused them of leaking data. The two superpowers have finally found something they agree on: these companies were doing something they shouldn't have." (Posted in English.)

**@港股打新人 (HK IPO retail investor):** "月之暗面这个时候被查，港股IPO怎么办？招股书要不要披露？悬了。" / "Moonshot gets investigated right now — what happens to the Hong Kong IPO? Does it have to go in the prospectus? This is looking shaky."

**@合规老司机 (Compliance veteran):** "别只盯着罚款。真正的代价是跨境数据传输安全评估要落地了，所有中国AI产品的出海和回流传输都会被重新审一遍。" / "Don't just watch for fines. The real cost is that cross-border data transfer security assessments are about to land hard — every Chinese AI product's outbound and return data flows will be re-audited."

## The Last Word

The story of September 2026 is not that America accused China of stealing AI. That story is old. The new story is that Beijing, reading the same evidence, accused its own champions of leaking China.

For two years, the US-China AI conflict ran along a single axis: chips out, models in doubt, accusations traded across the Pacific. The CAC probe adds a second axis that runs in the opposite direction — not what China takes from American technology, but what Chinese data gives to it. And on that axis, Beijing's enforcement powers are far greater than Washington's.

DeepSeek and Moonshot will likely survive this. They are too strategically important to dismantle, and China's regulators have shown they prefer leverage over destruction. But the era of the unexamined architecture is over. Every Chinese AI company now knows that its data plumbing — who processes what, where, under whose disclosure — is a regulatory surface, not just an engineering detail.

Anthropic set out to document who was extracting its model. It ended up documenting who was quietly carrying its users' data. Washington and Beijing looked at the same 154 pages and reached the same conclusion about the plumbing, if not the crime: something here should never have been built this way.

---

*What do you think — is the CAC probe genuine data-sovereignty enforcement, or regulatory leverage over China's AI champions ahead of the US-China dialogue? Leave a comment below, and subscribe to the AI in China newsletter for weekly deep dives into the people, labs, and capital reshaping the world's most consequential AI race.*
