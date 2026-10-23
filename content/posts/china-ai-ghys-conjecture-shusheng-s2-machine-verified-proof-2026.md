---
title: "When Machines Prove: How a Chinese AI Model Helped Crack a 30-Year Math Mystery"
date: "2026-10-23"
excerpt: "On October 15, 2026, Shanghai AI Laboratory announced that a team of mathematicians, working with its Shusheng-S2 model, had proved the three-dimensional Ghys conjecture — a problem open since 1995. A Peking University team then verified every logical step in Lean. It is the first time a Chinese large language model has contributed to solving a world-class mathematical problem, and it may be the most detailed public record of what human-machine collaboration on frontier research actually looks like."
image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=600&fit=crop"
---

On a Tuesday morning in mid-October, a brief announcement from Shanghai AI Laboratory landed quietly on WeChat. No product launch. No benchmark leaderboard. Just a statement that a team of mathematicians, working with the lab's scientific large language model, had proved a conjecture that had resisted the world's best minds for over three decades.

Within hours, the story was everywhere in Chinese tech media. By evening, mathematicians on Zhihu were parsing the arXiv preprint. Within days, international outlets had picked it up — not because AI solving math problems is new, but because of how this one was solved, and who did it.

The three-dimensional Ghys conjecture, posed by French mathematician Étienne Ghys in 1995, concerns the deep relationship between chaotic dynamical systems and the geometry of the spaces they inhabit. For thirty years, it sat at the intersection of complex dynamics and geometry, marked as one of the field's most important open problems. Xu Disheng, a professor at Great Bay University and visiting scholar at Shanghai AI Lab, had spent years on it — including a stint working alongside Fields Medalist Artur Avila. The problem did not budge.

What changed was not a single flash of machine insight. It was something slower and, in many ways, more interesting: a mathematician and an AI system iterating together over months, the model generating candidate proofs at a scale no human could sustain, the human steering, filtering, and eventually assembling the argument. Then, a separate team at Peking University used a framework called SHEAF to translate the entire proof into Lean — a formal verification language — and machine-checked all four main theorems across roughly 550,000 lines of code.

The result is being called the first time Chinese scientists have used a Chinese large model to solve a world-class mathematical problem. But the bigger story is what it suggests about where AI-for-science is heading, and what it takes to get there.

## The Scale of What Happened

The numbers behind this proof are difficult to absorb without context. A single round of AI reasoning produced a 400-page derivation report. Over seven rounds of continued exploration, the "problem graph" — a structured map of interconnected sub-problems that the system tracked — expanded from 15 nodes to 389. The total working material ran to roughly a thousand pages.

Then came verification. The SHEAF framework, developed by Peking University's Dong Bin and Academician Liu Ruochuan, organized the proof into a directed acyclic graph of formal statements and dispatched up to 100 concurrent agents to prove them in Lean. The entire formalization took about five days and produced approximately 550,000 lines of code. No gaps. No "sorry" placeholders — the Lean equivalent of "assume this works."

| Metric | Value | Context |
|--------|-------|---------|
| Conjecture age at resolution | 31 years | Proposed 1995 by Étienne Ghys |
| AI reasoning rounds | 7 batches | Iterative, human-guided |
| Problem graph nodes | 15 → 389 | Growth across rounds |
| First-round output | ~400 pages | Single inference pass |
| Total derivation material | ~1,000 pages | Working documents |
| Lean formalization time | ~5 days | Up to 100 concurrent agents |
| Lean code produced | ~550,000 lines | Sorry-free, machine-checked |
| Main theorems verified | 4 | All checked in Lean 4 |

The formalization repository is public on GitHub. The mathematical paper is on arXiv. Anyone with the right technical background can verify the verification. That transparency matters more than it might seem — and we will return to it.

## The Mathematician Who Would Not Let Go

Disheng Xu's relationship with the Ghys conjecture predates the current AI boom by years. As a student and later as an independent researcher, he worked on the three-dimensional case alongside Artur Avila, the Brazilian Fields Medalist known for his work on dynamical systems. They made progress on related questions — Xu and his student Jiesong Zhang published partial results in the *Journal of the European Mathematical Society* — but the core conjecture remained out of reach.

Xu's first contact with Shanghai AI Lab's models came in November 2025, at the Chinese Mathematical Olympiad. The lab's Shusheng-S1 model topped an AI evaluation held alongside the competition, impressing Xu, who was there as an expert. But he was clear-eyed about the gap between competition math and research math. Olympiad problems have known solutions in training data. A thirty-year-old conjecture does not.

In early 2026, Xu became a visiting scholar at the lab and formally began collaborating on model training. He helped curate research-grade mathematical corpora for post-training and, critically, identified where the model's reasoning broke down on real research problems. This was not a cosmetic advisory role. Xu was stress-testing the system against the hardest problem he knew.

By July 2026, he noticed something had shifted. The model's ability to handle complex mathematical propositions had improved qualitatively — not incrementally. He fed it the Ghys conjecture.

## A Thousand Pages of Machine Dreams

What followed was not a single eureka moment but a grinding, iterative process that Zhang Jiesong — the KTH postdoc who served as the primary interlocutor with the model — later described in detail to Chinese science media.

The first round of reasoning produced 400 pages of derivations. Most of it was unusable. Some of it was wrong. But buried in the output were structural ideas — approaches to decomposing the problem, connections between seemingly unrelated sub-cases — that Zhang recognized as genuinely novel. He began a sustained dialogue with the model, probing its suggestions, redirecting when it wandered into dead ends, and gradually assembling a coherent proof strategy.

![Abstract visualization of recursive reasoning — hundreds of pages of machine-generated derivations had to be sifted, tested, and redirected by human judgment](https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&h=400&fit=crop)

The Harness system — a research-oriented infrastructure built by the joint team — was central to this. It enabled large-scale recursive reasoning, where the model could explore sub-problems independently and report back, while maintaining the flexibility for humans to inspect, prune, and redirect at any point. Over seven rounds, the problem graph grew from a skeletal 15 nodes to a dense 389-node web, with the model generating thousands of pages of candidate arguments and the humans serving as editors, critics, and architects.

The training approach behind Shusheng-S2 reflects a philosophy the lab calls "general-specialized fusion" — building on broad scientific pretraining, then layering in carefully constructed research-grade post-training data: difficult problems from mathematical papers, reliable verification schemes, and examples of rigorous proof construction. The model also employs asynchronous long-range reasoning reinforcement learning, allowing it to sustain coherent multi-step deductions across very long contexts.

| Capability Layer | What It Does | Ghys-Specific Role |
|-----------------|--------------|-------------------|
| Scientific pretraining | Broad knowledge foundation across math, physics, chemistry | General mathematical literacy |
| Research-grade post-training | Difficult problems from real papers, verification schemes | Handling research-level complexity |
| Asynchronous long-range RL | Sustained multi-step reasoning without losing thread | 400-page first-round derivations |
| Harness system | Recursive sub-problem exploration + human oversight | 7 rounds, 389-node problem graph |
| Human expert feedback | Direction-setting, dead-end pruning, idea validation | Xu and Zhang's continuous steering |

Zhang, who is listed as the sole author of the underlying mathematical paper, independently verified every AI-generated argument before incorporating it. He took full responsibility for the proof's correctness — a point the team has emphasized repeatedly, and one that distinguishes this work from AI-generated "proofs" that arrive without human mathematical accountability.

## The Verification Layer: Why SHEAF Matters

If the first half of this story is about a model that can explore mathematical possibility spaces at superhuman scale, the second half is about a framework that ensures the output is actually true.

Formal verification in mathematics is not new. The Lean proof assistant has been used to verify everything from theorems in algebraic geometry to a recent formalization of the Poincaré conjecture's proof. What SHEAF adds is orchestration at scale: it takes a mathematical paper, decomposes it into a dependency graph of formal statements, and coordinates multiple AI agents to prove them in parallel — sharing a common Lean library, pruning unused nodes, and ensuring that every step is checked by the compiler before moving on.

For the Ghys conjecture proof, SHEAF dispatched up to 100 concurrent agents. In approximately five days, they produced roughly 550,000 lines of Lean code — formally proving all four main theorems with no sorry placeholders. The framework even incorporated Hsiang-Wall (1969) as an explicit hypothesis, making the logical dependencies transparent.

| Verification Framework | Institution | Approach | Output |
|----------------------|-------------|----------|--------|
| SHEAF | Peking University (Dong Bin, Liu Ruochuan) | DAG decomposition, multi-agent Lean proving | ~550K lines, 4 theorems, sorry-free |
| GitHub repository | frenzymath/HolomorphicAnosov | Open-source formalization | Publicly inspectable |
| arXiv paper | Zhang Jiesong | Sole-author mathematical proof | Peer review pending |
| Lean comparator | Lean community toolchain | Independent compilation check | Accepted |

This is where the Ghys result diverges from earlier AI-math headlines. When OpenAI announced in 2026 that its models had solved multiple world-class math problems, the mathematics community pushed back — partly because the proofs were not public, and partly because the claims were hard to verify independently. The Ghys proof, by contrast, comes with open code and a formal machine check that anyone can run. The paper's AI-use statement says Zhang verified the arguments independently. The Lean code says the compiler did too.

That combination — research-grade conjecture, named Chinese science model, machine-checked formal proof, public artifacts — is rare enough that international mathematicians and AI researchers can treat the primary sources as exactly that: primary sources, not press-release fog.

## The Global Context

The Ghys conjecture result does not exist in isolation. It lands in the middle of an intensifying global race to apply AI to scientific discovery, with several distinct approaches competing for dominance.

DeepMind's AlphaProof demonstrated in 2024 that reinforcement learning combined with formal verification could solve IMO-level problems, and the system has since been extended to research-level mathematics. OpenAI has claimed frontier math capabilities for its o-series models and GPT-6, though with less transparency about specific results. Meta has invested heavily in AI-for-math through its FAIR lab. In China, the push is coordinated through national laboratories and top universities, with Shanghai AI Lab positioning itself as the hub for "AI for Science" research.

| Program | Institution | Approach | Notable Result | Transparency |
|---------|------------|----------|----------------|-------------|
| AlphaProof | DeepMind | RL + formal verification | IMO silver medal (2024), extended since | Medium — papers published |
| OpenAI Math | OpenAI | LLM reasoning chains | Claims of multiple world-class solutions | Low — no public proofs |
| SHEAF + Intern-S2 | Shanghai AI Lab / PKU | Multi-agent Lean orchestration + LLM exploration | 3D Ghys conjecture | High — arXiv + GitHub |
| Minerva / Gemini | Google | LLM math reasoning | Strong competition benchmarks | Medium — benchmarks only |

What distinguishes the Chinese approach in this case is the explicit emphasis on end-to-end verifiability. Shanghai AI Lab director Zhou Bowen has argued that "the older and more fundamental the problem, the more room there is for AI to accelerate" — citing monoclonal antibodies, protein folding, and the Navier-Stokes equations as examples. The lab's strategy is to build platforms, not just models. The Ghys proof is being packaged as a reusable mathematical verification module for the lab's Shusheng-Duanyan scientific discovery platform, designed to be called by researchers working on other problems.

There is also a strategic dimension. China's AI development has been heavily focused on applications — consumer products, enterprise software, autonomous systems. Pure research, especially in mathematics, has been an area where Western labs have claimed leadership. The Ghys result challenges that assumption, not by claiming superiority but by demonstrating that a Chinese lab, working with Chinese universities, can produce research-grade results that meet the highest standards of mathematical rigor.

The institutional design matters here. Shanghai AI Lab is a municipal-level laboratory, but it operates with national-level ambitions. Its "AI for Science" program connects the lab to universities across the country — Peking University for formal verification, Great Bay University for mathematical expertise, and a network of other institutions for domain-specific knowledge. This distributed model, where the lab builds platforms and tools while universities contribute deep domain expertise, is a deliberate alternative to the concentrated, vertically integrated approach of Western frontier labs.

Zhou Bowen, the lab's director and chief scientist, framed the philosophy in stark terms: "Scientific discovery is the ultimate test of intelligence." The lab's bet is that the problems where AI can contribute most are not the ones with the most commercial value, but the ones that are oldest and most fundamental — where the bottleneck is not data or compute but the sheer difficulty of generating promising hypotheses.

## What This Actually Means

Strip away the hype and the geopolitics, and the Ghys story is about a specific kind of division of labor that appears to work.

AI systems like Shusheng-S2 are extraordinarily good at generating candidate approaches — exploring a vast possibility space of mathematical arguments, testing connections, producing derivations at a pace and scale that no human can match. What they are not yet good at is knowing which of those approaches will lead somewhere. That requires mathematical intuition: the accumulated judgment that comes from years of working on a problem, understanding its history, sensing which structures are load-bearing and which are decorative.

Xu and Zhang provided that intuition. The model provided the brute-force exploration. SHEAF provided the verification. Each component was necessary. None was sufficient alone.

The implications extend beyond mathematics. If this pattern generalizes — if AI can serve as a tireless exploration engine while human experts provide direction and formal systems guarantee correctness — it could accelerate progress in any field where the bottleneck is generating and testing hypotheses. Drug discovery. Materials science. Theoretical physics. The lab's choice to package the proof as a reusable platform module suggests they believe it will.

But there are open questions. The benchmarks that Shanghai AI Lab cites for Shusheng-S2 — including comparisons to Gemini 3.1 Pro on formal mathematics tasks like IMO-Proof and AdvancedMathBench — come from the lab itself and have not been independently verified. One proof, however impressive, is not a pattern. And the human expertise required to steer the system — Xu's deep familiarity with the Ghys conjecture specifically — may be the hardest resource to scale.

Xu himself has been philosophical about the process. In interviews with Chinese science media, he drew a sharp line between competition mathematics and research mathematics — one that many AI enthusiasts blur. Competition problems, he noted, have known solutions buried in training data. Research problems require generating knowledge that does not yet exist. The fact that Shusheng-S1 topped a CMO AI evaluation in 2025 impressed him, but it did not convince him the model was ready for real research. What convinced him was watching the system improve over months of iteration — and specifically, the qualitative shift he observed in July 2026.

Zhang's account adds another layer. The most surprising moments, he said, came when the model proposed approaches that seemed unpromising but turned out to contain structural insights he had not considered. One such suggestion — trying to prove the conjecture under a complex-geometric assumption — opened a path that the team eventually developed into the full proof. Without the model's willingness to explore unpromising-looking territory at scale, that path might never have been found.

Still, something shifted in October 2026. A thirty-one-year-old problem fell, and the tool that helped bring it down was not a supercomputer running a narrow algorithm. It was a large language model, trained on human mathematical knowledge, exploring ideas in dialogue with a human expert, verified by another team of humans and their machines.

The age of AI-assisted discovery may not arrive with a single dramatic announcement. It may look more like this: a mathematician, a model, and a very stubborn problem — grinding away at each other until something gives.

## Voices from the Community

**@拓扑小生 on Zhihu:**
> 400页的推导报告，首轮就出了。但真正的功夫在人身上——许地生和张洁松要在那堆推导里找出活路和死胡同。AI是探路者，数学家才是领航员。
> 
> *(A 400-page derivation report from the very first round. But the real work was human — Xu and Zhang had to find the live paths and dead ends in that mountain of derivations. AI is the scout; the mathematician is the navigator.)*

**@DrQuantum on X:**
> The key detail everyone is missing: SHEAF produced 550K lines of sorry-free Lean code in 5 days. That's not just verification — that's an entirely new way of doing mathematics. The proof *is* the code now.
> 
> 

**@数学老油条 on Weibo:**
> 有人说AI要取代数学家，我看刚好相反。许地生跟这个猜想死磕了这么多年，AI来了才终于撬开。工具再强，也得有人知道往哪儿使劲。
> 
> *(People say AI will replace mathematicians. I think it's exactly the opposite. Xu had been grinding on this conjecture for years, and only when AI arrived did it finally crack. However powerful the tool, someone still needs to know where to push.)*

**@FormalVerified on Hacker News:**
> What makes this different from OpenAI's math claims is simple: I can clone the repo and run the Lean compiler myself. 550K lines, no sorries. That's not a press release. That's mathematics.

**@AI科研民工 on Zhihu:**
> 注意一个细节：SHEAF框架是北大团队自研的，形式化验证用了100个智能体并行。这说明中国的AI-for-Science不只是模型层在进步，配套的工具链也在成熟。这是生态级的进展。
> 
> *(Note the detail: the SHEAF framework was developed by the Peking University team, using 100 parallel agents for formalization. This shows that China's AI-for-Science is not just progressing at the model layer — the supporting toolchain is maturing too. This is ecosystem-level progress.)*

**@MathObserver on Reddit r/MachineLearning:**
> Sole-author paper by a 31-year-old postdoc who is 31 years younger than the problem. If this holds up to peer review, it's one of the cleanest demonstrations yet of what human-AI collaboration can actually produce at the research frontier.
