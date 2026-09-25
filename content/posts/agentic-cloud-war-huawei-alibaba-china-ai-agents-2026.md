---
title: "One Week, Two Manifestos: How Huawei and Alibaba Are Racing to Rebuild China's Cloud for the Agent Age"
metaTitle: "Huawei vs Alibaba: The Agentic Cloud War Reshaping China AI"
slug: "agentic-cloud-war-huawei-alibaba-china-ai-agents-2026"
date: "2026-09-25"
excerpt: "Between September 18 and September 24, 2026, Huawei and Alibaba each stood on a stage and declared that the cloud itself must be rebuilt around AI agents. Huawei Cloud opened an agentic stack spanning silicon, openEuler, and 6,000 MCP assets; Alibaba Cloud answered with AgentCore, a Context Engine, and storage that claims 100 terabytes per second. Two companies, one week, one question: who writes the operating system for China's agent economy?"
author: "AI in China Editorial"
readTime: "15 min"
heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200"
category: "AI Infrastructure"
tags:
  - Huawei
  - Alibaba
  - Agentic Cloud
  - AI Agents
  - openJiuwen
  - AgentCore
  - China AI
  - Cloud Computing
  - MCP
  - Enterprise AI
keywords:
  - huawei alibaba agentic cloud 2026
  - agentcore alibaba cloud apsara 2026
  - huawei agentarts openjiuwen
  - china ai agent platform enterprise
  - agent context engine token reduction
  - alibaba cloud agent native cloud
  - huawei cloud aics cms 2026
  - china agent economy mcp assets
  - agentic cloud vs aws agentcore
  - qwen intelligence phone agent
related:
  - /blog/huawei-ascend-960-supernode-npo-compute-sovereignty-2026/
  - /blog/alibaba-zhenwu-v900-chip-nvidia-china-ai-silicon-2026/
  - /blog/wechat-xiaowei-a2a-agents-talk-agents-china-2026/
  - /blog/china-ai-token-price-war-deepseek-zhipu-2026/
  - /blog/doubao-ai-agent-phone-nubia-navix-ultra-china-2026/
---

![Satellite view of Earth at night with illuminated network connections — China's two largest cloud providers are racing to rebuild the internet's infrastructure layer around autonomous AI agents](https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200)
*Between September 18 and September 24, 2026, Huawei and Alibaba each declared that the cloud must be rebuilt for the agent age. The announcements came 800 kilometers apart — Shanghai, then Hangzhou — but they describe the same wager. (Image: Unsplash)*

## Two Stages, One Week, One Question

On the morning of September 18, Dr. Peter Zhou — Huawei board member and CEO of Huawei Cloud — stepped up to the keynote stage at HUAWEI CONNECT 2026 in Shanghai and told an audience of enterprise CIOs that the future of cloud computing is not models, not chips, but *agents*. "The Agentic Cloud for the Agentic World," his keynote was titled, and over the following ninety minutes he laid out a stack that starts with AI clusters of more than 100,000 processors and ends with a catalog of over 5,000 tools that enterprise agents can call.

Four days later and 800 kilometers southwest, Alibaba Cloud took the stage at its Apsara Conference in Hangzhou and made essentially the same declaration with different vocabulary. The company unveiled an "Agentic Cloud" organized in three layers — an AI Native Cloud for training and inference, an Agent Native Cloud for deploying and governing agents, and a Context Engine to give agents memory — anchored by a new platform called AgentCore.

Two companies that have competed for two decades across telecom equipment, e-commerce infrastructure, and smartphones have now converged, within one week, on the same strategic thesis: **the unit of cloud consumption is about to change from compute and tokens to tasks completed by autonomous agents, and whoever owns the agent operations layer will own the next decade of enterprise IT spending.**

This is a comparative anatomy of that race. What exactly did each company ship? How do the stacks differ in architecture, business model, and openness? And what does the collision reveal about where China's — and arguably the world's — enterprise AI market is heading?

---

## Subject A: Huawei Cloud — The Open Infrastructure Play

### From Silicon to Agents: How Huawei Got Here

Huawei's agent strategy did not begin with software. It began with a hardware problem: US export controls cut the company off from Nvidia GPUs and Google's Android, forcing Huawei to build an alternative computing stack from the transistor up. The result was the Ascend NPU line, the HarmonyOS and openEuler operating systems, and a company culture that now treats full-stack self-sufficiency as a design principle rather than a fallback plan.

That history matters for understanding what Huawei shipped at HUAWEI CONNECT 2026. The company's agentic cloud is not a single product but a vertically integrated ladder, where each rung exists because Huawei was forced to build it:

| Layer | Product | What It Does | Availability |
|---|---|---|---|
| Silicon | Ascend 950 series (Lingqu clusters) | NPU hardware for training and inference clusters exceeding 100,000 cards via UnifiedBus interconnect | China commercial: Sept 30, 2026; overseas: Nov 30 |
| Compute service | AICS (AI Cluster Service) | Five-level fault recovery, full-chain observability, 20% higher token throughput than prior generation | China: Sept 30, 2026; overseas: Nov 30 |
| Memory | CMS (Context Memory Storage) | Petabyte-scale memory for long-horizon agent tasks; 2x the capacity of comparable products, 50% faster terabyte-scale reads | Announced Sept 18 |
| Agent runtime | ThinkPro + CANN agentic tooling | "Atomic unit" for agent execution, state, and evolution inside the openEuler ecosystem; open PTO ISA | Opened Sept 21 |
| Agent platform | AgentArts (commercial) + openJiuwen (open source) | Enterprise agent development, deployment, and management; 5,000+ general MCP assets, 1,000+ industry assets | AgentArts overseas: Dec 30 |
| Model access | Agentic MaaS | One-click invocation of state-of-the-art models from multiple providers without deployment | Demonstrated with MiniMax |

*Huawei's agentic stack, from Ascend silicon to the AgentArts platform. Every layer has a US-sanctions origin story. (Sources: Huawei, TechWire Asia, AI Agents News)*

The most revealing number in that table may be the MCP asset count. Model Context Protocol — the open standard originally popularized by Anthropic for connecting models to tools — has become, in Huawei's hands, a distribution weapon. An enterprise that builds agents on AgentArts inherits 5,000 pre-integrated tools: connectors to databases, ERP systems, government service interfaces, and industry-specific workflows. An IT department that would otherwise spend a year wiring agents to legacy systems gets a head start measured in thousands of integrations.

### The Open-Source Wedge

Huawei is running this platform on a dual commercial/open-source model that mirrors its historical playbook in telecom. The commercial edition, AgentArts, serves more than 100 enterprise customers including the Shenzhen Longgang District Government, China Southern Power Grid, Guangzhou Laboratory, Kingsoft Office, and KingMed Diagnostics. The open-source edition, openJiuwen, shares more than 90% of its kernel with the commercial product and has accumulated over 50,000 GitHub stars and 3.29 million downloads, according to Huawei's own figures. Partner commercial editions are being built by Chinasoft International, iSoftStone, and Beiming Software.

| Traction Metric | Huawei's Figure | Context |
|---|---|---|
| Enterprise customers on AgentArts | 100+ | Government, utilities, healthcare, software |
| General MCP assets | 5,000+ | Tool connectors for agents |
| Industry MCP assets | 1,000+ | Domain-specific agent assets |
| Industry AI Foundry zones | 5 (+2 new) | Healthcare, embodied AI, AI4S, manufacturing, finance, government, AI hardware |
| Deployed Foundry projects | 1,000+ | Reusable industry capabilities |
| openJiuwen community | 50,000+ stars / 3.29M downloads | Vendor-reported; methodology unspecified |
| Shared NPU access | ~10,000 NPU clusters + "100 NPU-Hour Program" | Free baseline compute for developers |

*Huawei Cloud's agentic cloud traction, as reported at HUAWEI CONNECT 2026. Community and performance figures are vendor-reported and have not been independently verified. (Sources: Huawei, TechWire Asia)*

Kingsoft Office's deployment illustrates the pitch. The company — China's answer to Microsoft Office, with hundreds of millions of users — has integrated AgentArts with its WPS 365 Document Center and WPS Comate coding assistant to build vertical office agents now running in finance and government deployments. That is the kind of anchor tenant that turns a platform into an ecosystem.

And then there is the developer on-ramp that no Western cloud currently matches: roughly 10,000 NPUs in shared clusters, plus a "100 NPU-Hour Program" that gives any developer baseline Ascend compute for training, inference, and experimentation. Whether this subsidized access converts to paying customers is an open question. But as a strategy for pulling developers onto a sanctioned-alternative hardware stack, it is aggressive and, so far, unique.

![Shanghai's skyline at dusk — HUAWEI CONNECT 2026, held in Shanghai on September 17-19, was the venue where Huawei Cloud declared its agentic cloud strategy](https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800)
*HUAWEI CONNECT 2026 in Shanghai was Huawei's declaration that agents — not raw models — are the cloud's next unit of value. (Image: Unsplash)*

---

## Subject B: Alibaba Cloud — The Full-Stack Consumption Play

### From Token Plans to AgentCore

Alibaba's path to the agentic cloud runs through pricing. In 2025 and 2026, Alibaba Cloud waged China's most aggressive AI price war, cutting token prices for Qwen models repeatedly and forcing DeepSeek, Baidu, and Zhipu to follow. By mid-2026, the company had reframed the fight: the June announcement of Agent Native Cloud components — AgentRun for lifecycle management, AgentLoop for observability, AgentTeams for multi-agent governance — at WAIC 2026 signaled that Alibaba wanted to move up the stack from selling tokens to selling agent operations.

Apsara 2026, held September 22-24 in Hangzhou, completed the architecture. Alibaba Cloud CTO-level executives detailed a three-layer "Agentic Cloud" with AgentCore at its center: a purpose-built platform for building, running, and managing AI agents across their full lifecycle, with human-agent collaboration controls and performance monitoring baked in. Alongside it, the Agent Security Center offers lifecycle security and compliance management with real-time threat detection — an acknowledgment that enterprise agents will fail in ways chatbots never did.

| Layer | Product | What It Does | Key Claim |
|---|---|---|---|
| AI Native Cloud | CPFS storage, HPN 8.0 Pro networking, Platform for AI | Training and inference infrastructure | ~100 TB/s storage throughput; HPN 8.0 Pro at 100 petabits bandwidth, 130,000+ 800G ports per cluster; Qwen post-training in 5 days |
| Agent Native Cloud | AgentCore + Agent Security Center | Agent build/run/manage platform; human-agent collaboration control; lifecycle security and compliance | Governance centralized for CIOs; real-time threat detection |
| Context Engine | Agent Context + OpenLake | Real-time context and long-term memory across documents, business systems, chat, multimodal data; single-copy data lakehouse | Up to 67% token reduction in knowledge-intensive scenarios; 38% lower cost, 40% faster queries |
| Device edge | Qwen Intelligence | Smartphone-focused agent platform for next-generation AI phones | Partner ecosystem play |
| Application layer | Zhenwu V900 chip + Qwen roadmap | Silicon and model foundation (covered in our separate analysis) | — |

*Alibaba's agentic cloud as unveiled at Apsara 2026, September 22-24, Hangzhou. All performance figures are Alibaba's own and vendor-reported. (Sources: Alibaba Cloud, Pandaily, CRN Asia, TechAfrica News)*

### The Context Engine as Cost Weapon

The single most consequential claim Alibaba made at Apsara was not about agents at all — it was about tokens. Agent Context, the memory component of the Context Engine, connects an enterprise's documents, business systems, chat records, and multimodal data so that agents remember past tasks and share knowledge across teams. Alibaba says this cuts token usage by up to 67% in knowledge-intensive scenarios like customer service and AI coding.

If that number holds under independent testing, it is a strategic weapon. Token consumption is the metered electricity of the AI economy; a two-thirds reduction in the dominant input cost rewrites unit economics for every agent deployment built on Alibaba Cloud. It also undercuts competitors who monetize raw token volume — including, notably, Alibaba itself a year ago. The company is deliberately cannibalizing its token business to own the agent layer above it.

Underneath the software, Alibaba also hardened the physical plant. Its Cloud Parallel File Storage claims throughput around 100 terabytes per second and up to 69% lower AI storage costs; HPN 8.0 Pro networking supports more than 130,000 ports at 800 gigabits in a single cluster at 100 petabits of aggregate bandwidth; OpenLake, upgraded to a lakehouse where one copy of data serves structured, unstructured, vector, and streaming engines, promises 38% lower total cost and 40% faster query responses.

The ecosystem signals around the edges matter too. Lenovo used Apsara to show Tianxi AI 4.3, an edge-side agent framework — pointedly also named "AgentCore" in Lenovo's Tianxi branding — that keeps data entirely on-device while partnering with Alibaba's Qoder coding tool. And a naming collision worth pausing on: Alibaba's AgentCore shares its name with AWS Bedrock AgentCore, Amazon's generally available agent runtime that passed one million downloads earlier this year. Whether deliberate provocation or convergent naming, the collision underlines that "agent core" has become contested vocabulary across three hyperscalers.

![Abstract render of flowing data and neural structures — Alibaba's Context Engine claims to cut agent token consumption by up to 67%, an attack on the cost structure of the entire agent economy](https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800)
*Alibaba's most consequential Apsara claim: context infrastructure that could cut agent token costs by two-thirds. (Image: Unsplash)*

---

## Head-to-Head: Two Philosophies of the Agentic Cloud

Set the two stacks side by side and the architectural philosophies come into focus. Huawei is building an open, vertically integrated *infrastructure republic* — every layer available as commercial product or open source, anchored to sanctioned-alternative silicon, priced to pull an ecosystem into existence. Alibaba is building a *consumption flywheel* — token economics deliberately sacrificed to make agent operations cheap, secure, and sticky, anchored to the Qwen model family and the largest cloud footprint in Asia.

| Dimension | Huawei Cloud | Alibaba Cloud | AWS (US reference point) |
|---|---|---|---|
| Core agent platform | AgentArts / openJiuwen | AgentCore + Agent Security Center | Bedrock AgentCore |
| Open strategy | Dual: commercial + Apache-2.0-core open source (50k stars claimed) | Primarily proprietary cloud services; Qwen models open-weight | Proprietary; agentgateway donated to Linux Foundation |
| Tool connectivity | 5,000+ general MCP + 1,000+ industry MCP assets | Agent Context connectors across enterprise data | AgentCore gateway; MCP support |
| Memory / context layer | CMS: petabyte-scale, 2x capacity, 50% faster reads | Agent Context: up to 67% token reduction claimed | AWS Context (announced, coming soon) |
| Hardware anchor | Ascend 950 / Lingqu, 100k-card clusters, shared 10k-NPU access | Zhenwu V900 (Q1 2027), 20 GW data center roadmap by 2032 | Nvidia partnership; Trainium |
| Enterprise traction | 100+ customers, 1,000+ Foundry projects, 100 NPU-Hour developer program | Apsara ecosystem (Lenovo, Kingsoft-class partners); scale via Qwen API volume | 1M+ AgentCore downloads; GA since 2026 |
| Security posture | Government and critical-infrastructure heritage; compliance-first | Agent Security Center: lifecycle compliance, real-time threat detection | Continuum: learn-mode to enforce-mode trust ladder |
| Pricing transparency | Undisclosed | Undisclosed (Token Plan historically public) | Partially disclosed (free harness, pay for compute) |
| Overseas timeline | AgentArts: Dec 30, 2026; AICS: Nov 30, 2026 | Global Alibaba Cloud regions; Qwen open-weight global reach | Global |

*The three-way agentic cloud race: Huawei's open infrastructure play, Alibaba's consumption flywheel, and AWS's first-mover agent runtime — each betting on a different moat. (Sources: company announcements, third-party coverage)*

The comparison yields three observations.

**First, China's giants are structurally more vertically integrated than their American rivals.** Huawei owns silicon, operating system (openEuler), runtime (ThinkPro), platform (AgentArts), and tool catalog. Alibaba owns chips (Zhenwu), models (Qwen), infrastructure (CPFS, HPN), platform (AgentCore), and edge devices (Qwen Intelligence). AWS, by contrast, assembles its agent stack on Nvidia and Anthropic partnerships. Vertical integration is partly a sanctions artifact — but it is also why both companies can make end-to-end claims, like Alibaba's chip-design self-improvement experiment (over 60 hours of automated cycles, a 42% chip-area reduction) or Huawei's 40-day uninterrupted training runs with 10-minute fault recovery, that no US hyperscaler can fully replicate internally.

**Second, both are selling trust, but with different currencies.** Huawei's trust currency is sovereignty: run agents on hardware and software no foreign government can switch off, with open-source kernels you can audit. Alibaba's trust currency is governance: the Agent Security Center and human-agent collaboration controls speak to CIOs who fear autonomous systems acting beyond policy. Both are correct diagnoses — Chinese state-owned enterprises worry about supply-chain coercion; global enterprises worry about agent misbehavior — and each company's pitch mirrors its home market's deepest anxiety.

**Third, the missing number in both keynotes was price.** Neither Huawei nor Alibaba disclosed pricing or detailed regional availability for the agent platforms at launch. AWS, notably, made its harness free and monetizes compute. The Chinese playbook appears to be land-grab first, monetize later — consistent with the token price war's logic of sacrificing near-term margin for platform lock-in.

---

## Synthesis: What the Collision Reveals

Step back from the two keynotes and the bigger pattern is a category shift. For three years, the Chinese AI industry's center of gravity was the model: parameter counts, benchmark tables, open-weight releases. What September 2026 demonstrated is that the model layer is commoditizing fast enough — Qwen's recursive self-improvement runs, DeepSeek's open releases, the summit-week open-source dominance — that durable advantage has migrated to the *operations layer*: memory, context, tool connectivity, security, and observability for agents that act rather than chat.

The speed of the pivot is the tell. Huawei went from unveiling AgentArts at WAIC in July to a full agentic cloud with an opened Ascend agent stack in September. Alibaba went from AgentRun/AgentLoop/AgentTeams in June to a three-layer Agentic Cloud in September. When both companies move that fast in the same direction, it is because they read the same demand signal: Chinese enterprises have stopped asking "which model should we use" and started asking "how do we deploy a thousand agents without losing control of our business."

For global observers, three milestones will mark whether the agentic cloud thesis converts to revenue. On September 30, Huawei's AICS and Ascend 950 Lingqu clusters go commercial in China — the first test of whether enterprises will pay agent-era prices for sanctioned-alternative silicon. On November 30, AICS goes overseas, testing international appetite. On December 30, AgentArts launches outside China, colliding directly with AWS Bedrock AgentCore on neutral ground. Alibaba's Qwen Intelligence phone platform, and the 67% token-reduction claim, will face their own reckoning when independent benchmarks arrive.

And the competitive irony deserves a final note: AWS named its agent runtime AgentCore; Alibaba then named its platform AgentCore; Lenovo named its edge framework AgentCore. When three companies independently converge on the same word, it ceases to be a brand and becomes a description. The "agent core" — the control plane between models and enterprises — is now the most contested piece of real estate in cloud computing. Two of the three claimants are Chinese. That is the story of September 2026 in a single sentence.

---

## Social Media Voices

The double announcement set off a lively debate on Chinese tech platforms about whether Huawei's open-source strategy or Alibaba's consumption flywheel will win the agent era — and a fair amount of amusement at the AgentCore naming pile-up.

> **@技术爬爬虾 (TechCrawler, 128k followers, Weibo):** 有意思，华为开5000个MCP工具，阿里砍67%的token成本。一个帮你建agent，一个帮你省agent的钱。我的判断：企业会先省后建，Context Engine这种降本的东西落地更快。("Interesting — Huawei opens 5,000 MCP tools, Alibaba cuts token costs 67%. One helps you build agents, one helps you save on agents. My call: enterprises save first, build second — cost-cutting like the Context Engine lands faster.") — 82k likes

> **DataDrivenCN (Hacker News):** Everyone mocking the AgentCore name collision is missing the point. Alibaba didn't copy AWS — both companies independently concluded that 'the control plane for agents' needs to exist as a distinct product category. Convergent nomenclature is evidence the category is real. — 447 points

> **@开源老胡 (OpenSourceLaoHu, Zhihu):** openJiuwen号称5万star，但阿里有通义千问的开源生态基本盘。华为的打法是复制它在电信设备上的成功：先开源圈地，再商业收割。问题是，agent平台的转换成本比电信设备低得多，圈地没那么容易。("openJiuwen claims 50k stars, but Alibaba has the Qwen open-source ecosystem base. Huawei is replaying its telecom playbook: open-source land grab, then commercial harvest. The problem — switching costs for agent platforms are far lower than for telecom gear, so the land grab won't be easy.") — 15k upvotes

> **cloudarch_east (X/Twitter):** Two things can be true: Huawei's 10,000-NPU shared cluster program is the most aggressive developer subsidization in cloud history, AND Alibaba's 67% token reduction claim, if verified, is the single most important enterprise AI cost announcement this year. Different weapons, same war. — 2.1k likes

> **@企业AI观察 (EnterpriseAIWatch, WeChat official account):** 别只盯着华为阿里。联想在天禧AI 4.3上也叫AgentCore，边缘侧agent数据全本地。中国的agent栈正在从云到手机全链路铺开，真正的问题是企业IT部门准备好接管几百个agent的运维了吗？("Don't just watch Huawei and Alibaba. Lenovo's Tianxi AI 4.3 is also called AgentCore, edge agents with fully local data. China's agent stack is spreading cloud-to-phone. The real question: are enterprise IT departments ready to operate hundreds of agents?") — 10k+ reads

> **MCP_Watcher (Reddit r/LocalLLaMA):** 5,000 'MCP assets' from Huawei sounds impressive until you ask how many are actually maintained vs. auto-generated connectors. The industry needs a quality metric for tool catalogs, not just quantity. Same criticism applies to everyone chasing MCP counts this year. — 1.2k upvotes

---

*Data notes: All performance and traction figures cited from Huawei and Alibaba announcements are vendor-reported and were not independently verified at publication. Community statistics (stars, downloads) reflect company statements whose methodology was not disclosed.*
