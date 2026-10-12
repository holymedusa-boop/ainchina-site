---
title: "857 Models, 31 Safety Reports: China's AI Safety Paradox"
date: "2026-10-12"
excerpt: "A SemiAnalysis investigation reviewed every model release from China's nine leading AI labs between 2021 and September 2026 — 857 in total. Only 31 carried a published safety evaluation. Nine had one at launch. The country's regulatory apparatus is strictest in the world on AI content and loosest on frontier capability. The gap is not an oversight. It is a decision."
author: "AI in China Editorial"
readTime: 16
tags: ["AI Safety", "SemiAnalysis", "China AI Regulation", "DeepSeek", "Zhipu", "Moonshot AI", "CAC", "Frontier AI", "AI Governance", "China Tech"]
image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=600&fit=crop"
keywords: ["China AI safety disclosure", "SemiAnalysis 857 models", "Chinese AI labs safety evaluation", "CAC AI regulation 2026", "AI Safety Governance Framework 3.0", "frontier AI China", "DeepSeek safety", "Zhipu AI safety", "China AI law shelved", "AI safety paradox China"]
---

![A padlock on a circuit board — the symbol of a safety regime that governs what AI says, not what AI can do](https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=600&fit=crop)
*China's AI safety apparatus is the strictest in the world on content and applications — and nearly silent on frontier-model capability. A new dataset of 857 model releases shows the gap is structural, not accidental. (Image: Unsplash)*

## The Loudest Silence in AI

On September 12, 2026, Dario Amodei published an essay calling on the frontier AI industry to slow down. Sam Altman and Elon Musk endorsed it within hours. President Trump dismissed AI extinction risk as a "HOAX" two days later, adding that "the only one that is happy about it is China." Beijing's state-run Global Times called Amodei's essay a "Cold War playbook."

The diplomatic machinery engaged almost immediately. Treasury Secretary Scott Bessent and Vice Premier He Lifeng opened the first U.S.-China AI dialogue on September 20. President Xi Jinping arrived for a state visit three days later. The Trump-Xi summit formalized the channel as the "U.S.-China Super Intelligence Dialogue" and promised an AI incident hotline. On September 29, Trump and six executives signed the one-page White House Accord on Super Intelligence, a voluntary pledge the President called "morally binding."

Both sides of the American debate invoke China constantly. Trump says competition with Beijing means America cannot slow down. Amodei says preserving America's lead is precisely what creates the room to pause. Yet neither side has examined what China is actually doing. The answer, assembled release by release in an original SemiAnalysis investigation, is more surprising than either camp assumes: China's frontier labs publish safety evaluations for fewer than one in twenty-five models they ship, and the country's regulatory apparatus — strictest in the world on AI content — imposes no frontier-risk duties of any kind.

This is not a story about a country ignoring safety. It is about a country that has redefined what safety means, built a regulatory machine around that definition, and quietly decided the frontier is not where the battle should be fought.

## The Census: 857 Releases, 31 Disclosures

To understand what Chinese labs actually do at the frontier, SemiAnalysis built an original dataset covering every identifiable model release by the nine leading Chinese developers from 2021 through September 15, 2026: four hyperscalers — ByteDance, Alibaba, Tencent, Baidu — and five startups — DeepSeek, Moonshot AI, Zhipu Z.ai, MiniMax, and StepFun. The dataset counts 857 releases: 741 product models and 116 research models, each with a first-public date, weight status, license, and source.

Each release was checked against the developer's model cards, release notes, and technical reports for a published safety-evaluation result matched to that specific model. The standard was strict by design. A qualifying result means a quantitative or substantive finding on harmful output, jailbreaks, toxicity, privacy, refusal, or dangerous capability, tied to the named model. Statements that a model was "safety-trained" or "evaluated" did not count. A flagship model's result was not extrapolated to other sizes or snapshots.

The results are stark.

| Safety Disclosure Across 857 Chinese Model Releases | Count | Share |
|---|---|---|
| Total releases (2021–Sept 2026) | 857 | 100% |
| Any published safety result tied to named model | 31 | 3.6% |
| Result available at or before launch | 9 | 1.1% |
| Documented only after launch (median lag: 42 days) | 16 | 1.9% |
| Timing or model match unverifiable | 6 | 0.7% |
| Claim of evaluation with no figures | 10 | 1.2% |
| Known only from press or investor accounts | 3 | 0.3% |
| No safety disclosure at all | 813 | 94.9% |

Of the 31 qualifying disclosures, only 18 reported harmful-output or refusal results. Seven covered jailbreak resistance. Nine addressed code or cybersecurity — but seven of those nine were secure-code-generation benchmarks for coding models, not adversarial evaluations. Only three documents touched cyber-offense or biological risk: Zhipu's GLM-5.2 responsibility note, Zhipu's GLM-5.3 cyber-capability note, and Moonshot's Kimi K2 technical report. Not one came from the four hyperscalers.

The release cadence itself tells the second half of the story. Quarterly releases climbed from 3 in Q1 2023 to 90 in Q3 2024 and 101 in Q3 2025 — a thirty-fold rise in which open-weight releases made up more than half of every quarter since mid-2023. Safety disclosures did not climb with them. Releases with any safety result never exceeded 7 in a single quarter. Releases with a result at launch never exceeded 3, and sat at zero in 9 of the 15 quarters. No policy milestone — not the 2023 Interim Measures, not Safety Governance Frameworks 1.0 and 2.0, not the mandatory content-labeling rules — left a visible mark on either line.

![Circuit-board detail — the hardware underneath China's model-release boom, where capability scales faster than the documentation of what those systems can do](https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop)
*Open-weight releases have made up more than half of every quarter's model launches since mid-2023. Safety documentation has not kept pace with the release velocity. (Image: Unsplash)*

## A Regime That Governs the Application, Not the Frontier

The asymmetry is not an accident of bureaucratic drift. It is the predictable output of a regulatory architecture designed for a specific purpose.

On paper, China's stated position is among the most safety-forward of any major AI power. Xi Jinping told the Politburo in April 2025 that AI brings "unprecedented risks and challenges" and ordered technical monitoring, risk early-warning, and emergency response systems. At the 2026 World AI Conference in Shanghai, he said the world must "ensure AI always remains under human control." China signed the Bletchley Declaration, co-sponsored UN resolutions, founded a World AI Cooperation Organization, and publishes bilingual AI Safety Governance Frameworks.

The newest text — AI Safety Governance Framework 3.0, released by TC260 under the Cyberspace Administration of China on September 14, 2026 — warns of AI's "self-accelerating trend of autonomous learning and recursive self-improvement" and introduces a category for models that "deviate from expectations": systems that acquire privileges without authorization, bypass safety protections, deceive evaluators, hide capabilities, or refuse user instructions. The vocabulary overlaps almost word-for-word with the Amodei essay Beijing was denouncing that same week.

But Framework 3.0 opens with "promoting AI innovation and development as the first priority." And the machinery beneath the framework reveals the actual priorities with precision.

| What Beijing Regulates — and What It Doesn't | Representative Instruments (2025–2026) | Layer |
|---|---|---|
| Mandatory AI content labeling | Sept 2025 | Application |
| Cybersecurity Law Article 20 | Jan 2026 | Application |
| Minors' information classification rules | Mar 2026 | Application |
| MIIT AI ethics-review regime | Mar 2026 | Application |
| Policy-level agent rules | May 2026 | Application |
| World's first AI-companion rules | Jul 2026 | Application |
| Network-data risk assessment rules | Aug 2026 | Application |
| Ministry of Public Security inspection powers | Oct 2026 | Application |
| Frontier-risk duties triggered by compute or capability | **None** | — |
| Mandatory training-run registration | **None** | — |
| Pre-release dangerous-capability evaluation | **None** | — |

The week Framework 3.0 arrived, the pattern repeated in real time. TC260 issued four application security guides on September 15, opened comments on a draft Agent System Development Security Guide on September 18, and CAC published a draft regulation on minors' internet use the same day — barring "virtual companions and other virtual intimate-relationship services" for minors. Seven texts in five days. Every one governs how an application is built, deployed, and to whom it is offered. The gap at the frontier did not move.

The comparison with Western regimes is instructive. The European Union's AI Act attaches systemic-risk duties at 10²⁵ FLOP of training compute. California's SB 53 requires frontier frameworks and 15-day incident reporting from 10²⁶ operations. China, which regulates AI content more strictly than either, has nothing equivalent. The comprehensive AI Law promised in 2023 and 2024 legislative plans was shelved in 2025 — four months after the DeepSeek moment demonstrated what Chinese models could do. In its place, the State Council's AI+ Action Plan targets 70% penetration of agents and intelligent terminals by 2027 and 90% by 2030.

Compliance with this regime tells a lab nothing about frontier safety. A Chinese developer can satisfy every rule on the books without ever running a dangerous-capability evaluation.

## What Leaders Say — and What They Don't

If the regulatory layer is silent on frontier risk, perhaps the labs themselves fill the gap. SemiAnalysis tested that hypothesis by compiling every public statement on AI safety by founders, CEOs, chief scientists, and senior figures of the nine labs between January 2023 and September 21, 2026: speeches, interviews, internal letters, posts, signatures on collective statements, and company documents. Two independent sweeps — one of Chinese primary sources, one of English and institutional sources — were reconciled and verified. The total: 65 items.

The picture is sparse and lopsided.

| Public Frontier-Safety Engagement by Lab Leadership | Statements Engaging Frontier Safety | Notable Examples |
|---|---|---|
| Zhipu (Z.ai) | 6 | Zhang Peng signed IDAIS red lines, Seoul commitments; Tang Jie: "safety is no longer an accessory but the fundamental precondition" |
| Baidu | 1 | Robin Li (May 2023): AI "could develop in directions unfavorable to humanity" |
| Moonshot AI | 2 | Yang Zhilin floated AI "constitution" (2024); chose acceleration (2026) |
| DeepSeek | 0 | Liang Wenfeng: no public safety statement in four years |
| Alibaba | 0 | Eddie Wu's 6,000-word superintelligence keynote contains neither "safety" nor "risk" |
| Tencent | 0 | Pony Ma, Dowson Tong discuss safety only as data protection |
| ByteDance | 0 | CEO silent; head of research signed one IDAIS statement |
| MiniMax | 0 | — |
| StepFun | 0 | CEO silent; co-founder signed one IDAIS statement |

Across nine labs and nearly four years, only 15 statements by founders, CEOs, or chief scientists engage frontier safety at all. Nine of the fifteen express concerns and propose something. Six of those nine come from Zhipu alone — the only lab where safety is a named strategic commitment. Zhipu CEO Zhang Peng signed the IDAIS Beijing red lines in March 2024 and the Seoul Frontier AI Safety Commitments in May 2024, the only Chinese company to do so at the time. Founder Tang Jie's July 2026 internal letter made "ultimate safety governance" one of four strategic engines, stating that "the stronger the capability, the more robust the safety constraints must be."

At the other extreme: Liang Wenfeng of DeepSeek has no public statement on safety or regulation in four years of operation. Alibaba's Eddie Wu gave a 6,000-word keynote on the road to superintelligence in September 2025 that does not contain the word "safety" or "risk" once, and closes with "we are full of optimism." Moonshot's Yang Zhilin acknowledged in June 2024 that AI safety "is something we must prepare for in advance" — then chose acceleration in January 2026: "the risks of AGI/ASI may be considerable, but we should not give up its development, because giving up development means giving up the pursuit of the ceiling of human civilization."

Where safety literacy exists inside these companies, it sits with the lieutenants. Alibaba's security vice-president Xue Hui conceded in September 2025 that AI safety capability "currently lags the development of model capability." These are career professionals making careful observations. The founders — the people who decide what ships and when — are largely silent.

## Two Camps, One Decision

Who does shape China's AI-safety discourse? SemiAnalysis coded 102 expert and official texts from 2023 through September 2026 — 51 from official, Party-theory, and legal venues, 51 from technical and scientific venues — and mapped the 32 most influential individuals by background and policy-influence channels.

The short answer: China's technical scientists and its legal-policy scholars are answering two entirely different questions. And the state had answered one of them before either group spoke.

| Frontier-Risk Theme by Author Background | Texts Citing Frontier/Loss-of-Control Risk | Primary Theme |
|---|---|---|
| Technical scientists (42 texts) | 86% (36 of 42) | Frontier risk is the primary theme in 25 of 42 |
| Law scholars (23 texts) | 22% | 1 text |
| Public-policy scholars (9 texts) | 44% | 1 text |
| Serving officials (28 texts) | 23% | 1 text |

The scientists — senior, internationally embedded, at technical parity with Western peers — ask what a frontier model can do. Their answer: loss of control and misuse. Their prescriptions reach the model before it ships: registration of training runs above compute thresholds, safety cases before release, independent third-party audits, shutdown authority. Fifty-two percent of their texts argue that safety must precede or gate development. Only five are development-first.

The lawyers and policy scholars — concentrated at the Chinese Academy of Social Sciences, China University of Political Science and Law, Tsinghua's School of Public Policy, and ministries' expert pools — ask how the state should govern an industry. Their answer: order, rights, and growth. Their prescriptions attach where the industry meets the public. Not a single text by a legal or public-policy scholar or official takes the safety-first position. The rest use the balanced official formula: "coordinating development and safety."

The legal scholars are following the top leadership. Their signature phrase — "failing to develop is the greatest insecurity" — descends from Xi Jinping's 2014 statement that "development is the greatest security." Premier Li Qiang used the negative form verbatim in Berlin in June 2023. The People's Daily made it a headline days later. On the very day the Generative AI Measures were published, law professor Xu Ke carried it into the AI debate in a CAC-published expert reading. By 2025, CASS scholar Zhi Zhenfeng was calling it "a basic consensus."

Every demand for binding frontier duties — thirteen of the 102 texts — went nowhere. The five IDAIS consensus statements co-signed by Chinese scientists demanded training-run registration, pre-release safety cases, third-party audits, shutdown authority, and legal enforcement. None has been adopted in any binding Chinese instrument. Of the 32 most influential voices, ten demand binding frontier rules and hold no seat where rules are written. Eight hold a seat and make no such demand. Only four hold a seat and demand — and the seat did not help them. Zeng Yi sits on the national AI governance committee; his April 2026 call for legal enforcement went nowhere. Zhou Bowen chairs TC260's AI safety working group — the one body that could turn loss-of-control language into a mandatory standard — and writes voluntary frameworks.

The scientists are not heeded because they contradict a decision already made. China's AI-safety debate was settled by the top leadership's preference for development over safety, not by anything the experts said.

## An Ecosystem Without Teeth

It would be wrong to conclude that China has no frontier-safety capacity. The Shanghai AI Lab published a Frontier AI Risk Management Framework in July 2025 and revised it twice, most recently as version 2.0 at WAIC in July 2026. The framework draws red and yellow lines across five risk domains — 13 red lines in total — calls for deployment suspension in the red zone, suggests evaluation triggers at 4× and 10× jumps in effective compute, and treats open-weight release as the highest-risk deployment setting. SAIL has also run roughly twenty Chinese and Western models through UK AISI's Inspect evaluation tools.

The China Academy of Information and Communications Technology (CAICT), MIIT's in-house research institute, released its AI Safety Benchmark 2.0 in February 2026, adding deception, loss-of-control, dangerous-domain misuse, and agent risk to its test suite. CnAISDA — the China AI Safety and Development Association, launched in Paris in February 2025 — represents China abroad as the counterpart to the government AI safety institutes established after Bletchley.

None of these institutions has real power.

| Frontier-Safety Institutions and Their Limits | Capability | Binding Authority |
|---|---|---|
| Shanghai AI Lab (SAIL) | Framework v2.0, 13 red lines, runs Inspect evals on ~20 models | No right to demand access to rivals' models |
| CAICT | AI Safety Benchmark 2.0 with deception, loss-of-control tests | Voluntary; publishes results with model names removed |
| CnAISDA | Represents China at international safety forums | No staff, no budget, no mandate to test |
| TC260 (CAC standards body) | Publishes safety governance frameworks | Standards are recommended unless state makes them mandatory — and on frontier risk, it has not |

The ecosystem produces frameworks no one is obliged to follow and evaluations no developer is obliged to submit to. As the technical scientists themselves wrote in April 2026, "the progress of AI governance is alarmingly slow," and relying on "the self-control of AI developers is an illusion." The state's answer, so far, is to rely on exactly that.

## When Geopolitics Rewrites the Meaning of Safety

The intensified U.S.-China AI race has done more than speed up development. It has changed what AI 安全 — "AI safety" — means in Chinese official texts. The term has shifted from safety to security.

Framework 3.0 lists export controls as a supply-chain security risk, warning that "certain countries use technological monopoly and unilateral coercive measures such as export controls to erect development barriers." Its appendix places respect for national sovereignty second only to human control among trustworthy-AI principles and forbids coercing countries to "pick sides." The race has pushed China's own experts to doubt America's intentions for emphasizing safety at all. Zhu Songchun, Director of the Beijing Institute for General AI, told WAIC 2026 that the "human-extinction narrative" was a technical misjudgment "packaged for capital," calling Anthropic's decision to withhold its Mythos model while raising at a trillion-dollar valuation "Oppenheimer-style marketing." CASS scholar Zhi Zhenfeng argued in December 2025 that the American debate over comprehensive AI legislation constituted "cognitive-domain shaping" — a military term — designed to "induce other countries to strengthen regulation and slow their own innovation."

Geopolitics has also shaped the engineers building China's most capable systems. Liu Shengyu, who wrote the main attention kernel for DeepSeek V4.1, posted on September 13 that he has "no choice but to join the cruel arms race" because he "especially" does not want Anthropic controlling AGI — a scenario he likened to "letting Hitler get the atomic bomb before the Allies." He joined DeepSeek because it researches "strong, fast, and universal AI, and opens it," hoping it "can pull the world back a little."

The irony is sharpest in the American mirror. Four days after Amodei's essay asked the industry to slow down, Anthropic shipped Claude Opus 5.5 — which the company itself described as "our first release since we called for pacing the frontier," framing pacing as a way of "remaining competitive with China." Nobody paces alone. Not even the man who wrote the essay.

![Abstract data flows — the frontier of capability is moving faster than the frameworks meant to describe it, in every country](https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=400&fit=crop)
*The paradox is global: Anthropic shipped Opus 5.5 four days after its founder asked the industry to slow down, framing the release as necessary to "remain competitive with China." (Image: Unsplash)*

## Five Tests That Would Change the Picture

The Trump-Xi summit formalized dialogue but did not alter China's domestic calculus. Beijing's regime will continue targeting the application layer while the frontier moves ungoverned. Chinese labs will keep releasing at accelerating cadence with minimal safety disclosure. There are five concrete signals that would falsify this reading. None has occurred.

| Tests to Watch (Next 6 Months) | Current Status |
|---|---|
| Mandatory training-run registration above compute threshold | Not proposed in any binding instrument |
| Pre-release dangerous-capability evaluation for a frontier model | GLM-5.3's cyber note is the only near-miss; not standard |
| TC260 frontier-risk standards become mandatory | Standards remain recommended |
| CnAISDA gains mandate, budget, or staff | No movement |
| Comprehensive AI Law reappears with frontier compute triggers | Shelved in 2025; not on 2026 legislative plan |

Absent those signals, the evidence points one way: Beijing will not pace the frontier. The country's AI safety apparatus is real, well-funded, and operationally serious — about everything except the frontier. What the 857-model census reveals is not negligence but design. China has built a regulatory state for the AI it has already deployed, and left the AI it is about to build in the hands of the labs building it — labs whose founders, with one or two exceptions, have never publicly said the word.

## What Chinese AI Circles Are Saying

**Zhihu — @AI治理观察 (AI governance researcher, 23K followers):**
> "SemiAnalysis这个统计方法其实偏保守——他们把'安全训练'这种模糊表述都算进去了还是只有3.6%。真正的问题是94.9%的模型连模糊的声明都没有。不是做的少，是说的更少。"
>
> *"SemiAnalysis's methodology is actually conservative — they counted vague statements like 'safety-trained' and still only got 3.6%. The real problem is that 94.9% of models have no statement at all. It's not that they're doing less; they're saying even less."*

**X (Twitter) — @chinafirstai:**
> "The West asks: why doesn't China regulate frontier AI? The better question: why does the West assume its own regulatory categories are universal? China regulates deployment. Deployment is where harm actually happens. The US regulates training runs that haven't hurt anyone."
>
> *Direct post; account tracks Chinese AI policy for international audiences.*

**Weibo — @量子位老粉 (AI industry commentator, 890K followers):**
> "智谱是唯一每个年份都发布安全结果的，也是唯一签了首尔承诺的中国公司。这不奇怪——智谱的背景是清华，学术基因决定了它在意paper trail。其他家要么不评，要么评了也不发。但说到底，这是中国AI的'自主创新'叙事在安全领域的翻版：做了不一定说，说了不一定真。"
>
> *"Zhipu is the only company with safety results every year and the only one that signed the Seoul commitments. Not surprising — Zhipu's Tsinghua DNA means it cares about the paper trail. The others either don't evaluate or don't publish. Ultimately, this is the 'independent innovation' narrative replayed in safety: doing it doesn't mean saying it, and saying it doesn't mean it's true."*

**Xiaohongshu — @科技评论喵：**
> "看完SemiAnalysis的报告，最大的感受不是中国AI公司不做安全，而是整个行业把安全当成了公关话题而不是工程问题。PR-driven safety在硅谷也一样存在，区别是OpenAI至少会被逼着发system card。中国连这个压力都没有。"
>
> *"Reading the SemiAnalysis report, my biggest takeaway isn't that Chinese AI companies skip safety — it's that the whole industry treats safety as a PR topic, not an engineering problem. PR-driven safety exists in Silicon Valley too; the difference is OpenAI at least gets pressured into publishing system cards. China doesn't even have that pressure."*

**Douban — @代码与问 (software engineer, 15K followers):**
> "刘晟宇说'不得不加入残酷军备竞赛'，这话在DeepSeek内部大概不是一个人的感受。当行业第一梯队的工程师都把自己当成战争参与者而不是技术建设者的时候，你跟他们说'慢一点'，他们听到的只能是'认输'。"
>
> *"When Liu Shengyu says he has 'no choice but to join the cruel arms race,' that's probably not one person's feeling inside DeepSeek. When first-tier engineers see themselves as war participants rather than technology builders, telling them 'slow down' sounds like 'surrender.'"*

**Hacker News — @throwaway_cn (comment on SemiAnalysis summary thread):**
> "The most damning finding isn't the 3.6% figure — it's that the 2026 frontier releases (Kimi K3, DeepSeek V4, Qwen3.7-Max, Doubao Seed 2.1) shipped with zero documentation. The labs know exactly what they're not saying. This is strategic opacity, not oversight capacity."
>
> *Top-voted comment in the HN discussion of the SemiAnalysis safety census; representative of international developer reaction.*

---

**Related Coverage:**

- [The $120 Billion Dual IPO Race: DeepSeek vs Moonshot](https://www.ainchina.com/blog/deepseek-moonshot-dual-ipo-race-china-ai-2026/)
- [DeepSeek's Silence Before V4-Pro: What China's Quietest AI Lab Is Really Doing](https://www.ainchina.com/blog/deepseek-silence-v4-pro-china-ai-strategy-2026/)
- [China's AI Security Doctrine: The Crackdown on National Secrets](https://www.ainchina.com/blog/china-ai-security-doctrine-crackdown-national-secrets-2026/)
- [The 3% Gap: Bloomberg's October Reckoning on US-China AI](https://www.ainchina.com/blog/china-us-ai-gap-3-percent-bloomberg-october-2026/)
