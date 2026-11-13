---
title: "The Weights Don't Lie: How a 23-Year-Old's Forensic Analysis Caught China's Top AI Labs on Banned NVIDIA Chips"
date: "2026-11-13"
excerpt: "On November 12, a former OpenAI researcher published forensic evidence that DeepSeek, Moonshot AI, MiniMax, and Ant Group trained their newest models on export-controlled NVIDIA Blackwell GPUs — proof hidden inside the model weights themselves. Within hours, the story collided with the Alice Huang supply-chain investigation and NVIDIA's CEO resignation."
metaTitle: "Blackwell Fingerprints Found in China's Frontier AI Models: Forensic Evidence Explained"
metaDescription: "Forensic analysis by Will DePue finds six Chinese AI models carry NVIDIA Blackwell GPU fingerprints in their weights. DeepSeek, Moonshot, MiniMax, Ant Group implicated. Method, evidence, and implications."
tags: ["China AI", "NVIDIA", "Blackwell", "Export Controls", "DeepSeek", "Moonshot AI", "Chip Forensics", "Geopolitics", "AI Governance", "Semiconductors"]
keywords: "China AI models Blackwell fingerprint, DeepSeek V4 Blackwell, Kimi K3 GB200, export control evasion, checkpoint forensics, Will DePue, NVIDIA export ban, AI chip smuggling"
image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80"
heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200"
readingTime: 16
---

On the afternoon of November 12, 2026, a 23-year-old researcher named Will DePue posted six words on X: "I have a major result to share." Within two hours the post had spread across AI research Twitter, hit the front page of Hacker News, and landed on the desks of export-control officials in Washington. By evening it was being cited as a factor in one of the year's biggest governance stories — the resignation of Jensen Huang as CEO of NVIDIA.

The claim was disarmingly simple. DePue, a former OpenAI researcher now running an independent lab, had found a way to read the hidden hardware signature embedded in published AI model weights. Applied to China's frontier open-weight models, he found that six models released since April 2026 by four top labs — DeepSeek, Moonshot AI, MiniMax, and Ant Group — carried numerical fingerprints matching NVIDIA's Blackwell GPUs, the most advanced chips NVIDIA makes and the ones most tightly restricted from sale to China. The evidence came not from leaks or intelligence agencies but from the models themselves, published openly, waiting for anyone with the right technique to look.

What makes the story bigger than one researcher's method is what happened next. On the same day, The Information revealed that companies linked to Chinese businesswoman Alice Huang — the figure at the center of the alleged intelligence scandal that has engulfed NVIDIA's leadership — had invested in DeepSeek and reportedly promised to supply it with exactly the kind of chips the fingerprints point to. Two stories, two sources, one conclusion landing the same day. The question of how China's AI labs got their compute has moved from suspicion to documented technical evidence.

![Server racks and circuit infrastructure in a data center](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80)

*The fingerprints were recovered not from data centers but from the published model weights themselves — numerical traces of the hardware that created them. (Photo: Unsplash)*

## The Discovery

Every AI model begins as a set of random numbers. Before training, before any data is processed, the model's weights are initialized to values drawn from a random distribution, using a random-number seed. Here is the part almost nobody outside GPU engineering knows: the way those random values are laid out in memory depends on the hardware doing the initialization. NVIDIA GPUs organize their parallel computation across units called streaming multiprocessors — 132 in the Hopper-generation H100, 148 in the Blackwell B200 and B300, 152 in the rack-scale GB200 and GB300. PyTorch, the dominant AI framework, arranges its random-number generation threads according to the GPU's multiprocessor layout. The result is that the initial random weights carry a faint, hardware-specific pattern — a fingerprint of the chip that made them.

Training mostly overwrites these initial values, but not entirely. In every large model, some rows of the weight matrix survive training essentially untouched — DePue calls them preserved rows. Recover enough of them and you can search backward for the seed-and-layout combination that produced them. It is, as one Hacker News commenter put it, the AI-equivalent of recovering a deleted file: the data looks gone, but the traces are still there.

The scale of the search is staggering. DePue's team examined roughly six trillion combinations of chip layout and seed number. Even the weakest reported result reaches twenty sigma — comfortably above the eight-sigma ceiling that chance could produce across the full search space. For DeepSeek-V4-Flash, the evidence is conclusive by any standard in experimental science.

| Confidence Metric | Value | Interpretation |
|-------------------|-------|----------------|
| Search space | ~6 trillion seed/layout combinations | Full sweep, not sampled |
| Strongest chance match possible | ~8 sigma | Statistical ceiling for coincidence |
| Weakest reported individual test | 20 sigma | Well above chance ceiling |
| Strongest result (Kimi K3) | 1,385 sigma | Effectively irrefutable |

Then came physical verification. DePue's team rented two GPUs — a Hopper-class H100 and a Blackwell-class B300 — and ran unmodified PyTorch on both. They had identified DeepSeek's seed as 953049583, reused across generations. On the H100, that seed reproduced every one of the 57,344 preserved values in DeepSeek-V3 bit for bit — and failed to reproduce a single row of DeepSeek-V4-Flash. On the B300, the result inverted: 461 of 469 selected rows in V4-Flash matched with correlations above 0.99, including 445 entire rows identical bit for bit. Changing the seed by one reproduced nothing on either machine. On a rented GB200, Moonshot's seed 20256586 reproduced all thirteen of Kimi K3's preserved rows exactly.

The method itself was validated against 24 cases where a developer has publicly stated which hardware trained a specific model. In all 24, the fingerprint agreed with the announcement. Meta's Llama 3.1 models, trained on H100s, read as 132 multiprocessors. Eleven of EleutherAI's Pythia models, trained on A100s, read as 108. NVIDIA's own Nemotron-3 Ultra, whose technical report names the GB200, reads as 152 — the same signature as Kimi K3.

| Validation Case | Publicly Disclosed Hardware | Fingerprint Reading | Match |
|-----------------|----------------------------|---------------------|-------|
| Meta Llama 3.1 family | NVIDIA H100 | 132 SMs (Hopper) | ✓ |
| EleutherAI Pythia (11 models) | NVIDIA A100 | 108 SMs (Ampere) | ✓ |
| NVIDIA Nemotron-3 Ultra | NVIDIA GB200 | 152 SMs (Grace Blackwell) | ✓ |
| DeepSeek-V3 / Kimi K2 / K2.5 | H800 (lab disclosed) | 132 SMs (Hopper) | ✓ |
| ZAYA1 | AMD MI300X | AMD pattern | ✓ |
| Step-3.5-Flash | H800 (lab disclosed) | 132 SMs (Hopper) | ✓ |
| **24 public disclosures tested** | — | — | **24/24 agree** |

## Six Models, Four Labs

The findings are consistent across the four labs. Each shows the same pattern: models released before mid-2026 read as Hopper-trained, and models released after read as Blackwell-trained. The crossover happened in a narrow window between April and October.

DeepSeek's trajectory is the cleanest. DeepSeek-V3, released December 2024 and the model that triggered global panic in January 2025, reads as 132 multiprocessors — Hopper hardware, consistent with the company's H800 disclosure. DeepSeek-V4-Flash and V4-Pro, released April 2026, read as Blackwell: V4-Flash at 148 SMs (B200/B300), V4-Pro at 152 SMs (GB200/GB300). Pause on what this means historically. The model that made DeepSeek famous was trained on the compliant H800 — the China-specific variant NVIDIA designed to stay within export rules. The models that came after the January 2025 shock are the ones that read as banned hardware.

Moonshot AI's trail shows a similar crossover with one intermediate step. Kimi K2 and K2.5 read as Hopper. Kimi K2.7-Code, posted six weeks before K3, is mostly Hopper — but about twenty percent of its preserved rows match the Blackwell layout, blended uniformly in every row. DePue reads this as a merged checkpoint: weights initialized on Blackwell spliced into the Hopper-era model. Then Kimi K3, released July 2026, reads cleanly as GB200/GB300 at 152 SMs — and its November successor K3.1-Pro carries the same signature, sharing K3's seed. At least 64 separately seeded initialization processes in K3 each left the identical layout, consistent with a large cluster of identical machines.

| Lab | Model | Released | Fingerprint | Chip Class |
|-----|-------|----------|-------------|------------|
| DeepSeek | DeepSeek-V3 | Dec 2024 | 132 SMs | Hopper (H800 disclosed) |
| DeepSeek | DeepSeek-V4-Flash | Apr 2026 | 148 SMs | Blackwell B200/B300 |
| DeepSeek | DeepSeek-V4-Pro | Apr 2026 | 152 SMs | Blackwell GB200/GB300 |
| Moonshot AI | Kimi K2 / K2.5 | Jul 2025 / Jan 2026 | 132 SMs | Hopper (H800 disclosed) |
| Moonshot AI | Kimi K2.7-Code | May 2026 | ~80% Hopper + ~20% 148 SMs | Mixed checkpoint merge |
| Moonshot AI | Kimi K3 / K3.1-Pro | Jul 2026 / Nov 2026 | 152 SMs | Blackwell GB200/GB300 |
| MiniMax | MiniMax-M2.7 | Apr 2026 | 132 SMs | Hopper |
| MiniMax | MiniMax-M3 | Jun 2026 | 148 SMs | Blackwell B200/B300 |
| Ant Group | Ling-3.0-flash | Aug 2026 | 132 SMs | Hopper |
| Ant Group | Ling-3.1-flash | Oct 2026 | 152 SMs | Blackwell GB200/GB300 |

## The Scale of the Operation

From each model's size, estimated training tokens, and the release timeline, DePue's team estimated the hardware behind each run. The numbers are data-center scale. Kimi K3, the largest, implies roughly 3,400 Blackwell GPUs running for about eighty days. DeepSeek-V4-Pro implies about 2,700 for seventy days. Across the five identifiable training runs, the estimate totals approximately 12,000 Blackwell GPUs, with a wide but bounded uncertainty range of 7,000 to 20,000.

At roughly $70,000 per GPU — the per-unit cost implied by a Wall Street Journal report that 36,000 Blackwell chips being installed in Malaysia for ByteDance's use would cost over $2.5 billion — the largest single cluster comes to about $200 million. The five training runs together imply more than half a billion dollars of export-controlled silicon, and that covers only the final training runs, not experiments, failed runs, or inference serving. The real total spend across these labs, DePue notes, is likely in the billions.

| Model | Best-Estimate GPUs | Plausible Range | Assumed Run Length |
|-------|-------------------|-----------------|-------------------|
| DeepSeek-V4-Flash | 1,700 | 250 – 5,000 | ~45 days |
| DeepSeek-V4-Pro | 2,700 | 750 – 6,500 | ~70 days |
| Kimi K3 | 3,400 | 1,000 – 9,500 | ~80 days |
| MiniMax-M3 | 1,400 | 200 – 5,000 | ~60 days |
| Ling-3.1-flash | 1,400 | 400 – 6,500 | ~100 days |
| **All five combined** | **~12,000** | **7,000 – 20,000** | — |

## The Same-Day Collapse of the Parallel Narrative

If the forensic story had arrived alone, it would have been a major news day. But on November 12, The Information published its own investigation into Alice Huang — the businesswoman at the center of the scandal that has consumed NVIDIA's leadership — and DeepSeek appeared in that story too. According to the report, companies associated with Huang participated in DeepSeek's second funding round, positioning her network as a supplier of NVIDIA's high-end processors.

Huang's network includes Singapore-based data center operator Megaspeed International and Shanghai-based Litong. The Information attributes to Litong a central role in moving restricted NVIDIA processors into China — around 240,000 chips valued at at least $7.5 billion since 2023. Megaspeed, listed in NVIDIA's own partner directory, has been under US investigation since October 2025. And in October 2026, The New York Times reported that US authorities had concluded Huang was a Chinese intelligence asset who cultivated a close relationship with Jensen Huang — no relation — while passing information to Beijing.

On November 12, NVIDIA announced Jensen Huang had resigned as CEO, with CFO Colette Kress named interim chief. The company did not attribute the resignation to any specific finding. But researcher Robert Scoble did not hedge, posting that DePue's forensic report was "why Jensen was fired" — a causal claim the evidence does not establish, but one that captured how quickly the two stories fused in public perception.

| Entity | Role in the Network | Key Allegation / Finding |
|--------|--------------------|--------------------------|
| Alice Huang (Huang Le) | Central figure | US authorities concluded she was a Chinese intelligence asset (NYT, Oct 2026) |
| Shanghai Century Litong (Litong) | China-based trading firm | Channel for ~240,000 NVIDIA chips worth $7.5B+ into China since 2023 |
| Megaspeed International | Singapore data center operator | NVIDIA official cloud partner; under US investigation since Oct 2025 |
| DeepSeek (funding round 2) | Recipient of investment | Huang-linked firms invested, reportedly promising Blackwell supply |
| NVIDIA leadership | Governance fallout | Jensen Huang resigned as CEO Nov 12; Colette Kress interim |

## The Geography Loophole

Here is where the story resists easy narrative. The fingerprints prove access to Blackwell hardware; they do not prove where the chips were or how they were obtained. DePue is explicit: the evidence concerns access, not legality.

The legal pathways are real. A Chinese lab can rent Blackwell GPUs from a data center in Malaysia, Thailand, or the Gulf and train there — within the letter of US export law, which regulates the movement of chips, not gradients. A foreign subsidiary can lease overseas compute under local ownership. The Wall Street Journal's March 2026 report on 36,000 Blackwell chips in Malaysia for ByteDance's use describes one version of this — and if the chips never enter China, no export violation occurs, whatever the weights reveal.

| Pathway | Legal Status | How It Works |
|---------|-------------|--------------|
| Overseas data center training | Legal gray zone | Chips stay in Malaysia/Thailand/Gulf; models trained remotely, weights shipped back |
| Foreign subsidiary leasing | Potentially legal | Local entity rents compute; structure obscures end use |
| Cloud rental from third-country providers | Legal if disclosed | Renting Blackwell cloud instances outside China violates no export rule |
| Direct export to China without license | Illegal | B200/B300/GB200/GB300 require US export licenses for China; none have been reported |
| Smuggling / diversion through intermediaries | Illegal | Chips physically entering China via front companies or mislabeled shipments |

This is the structural weakness the forensics expose. US export controls were designed for a world where the controlled item — the chip — was the unit of concern. In a world where weights can be trained anywhere and uploaded everywhere, the chip's location during training is almost decorative. The policy question is no longer "did the chips cross a border" but "did a controlled capability get built" — a question export law is not designed to answer.

## The Divide Inside China's AI Ecosystem

The most strategically interesting finding may be the negative space. Not every Chinese lab switched to Blackwell, and the ones that did not are telling a different story about where China's AI compute is heading.

Alibaba's newest Qwen models, Zhipu's GLM-5.3, Tencent's Hy4-preview, Xiaomi's MiMo-V2.5-Pro, and StepFun's Step-5-Preview all read as Hopper. Some smaller Qwen3 models were initialized on CPU, leaving no GPU fingerprint at all — a trick that may become standard now that the technique is public. Baidu's ERNIE-5.5 uses PaddlePaddle rather than PyTorch; its weights carried no recoverable hardware layout, though DePue's team did recover its random seed (2760). And Meituan's LongCat-2.0 showed no NVIDIA fingerprint whatsoever — trained, the company says, entirely on "AI ASIC superpods," with a since-deleted configuration file setting device options consistent with Huawei's Ascend 910.

| Camp | Labs | Hardware Signal | Strategic Reading |
|------|------|-----------------|-------------------|
| Blackwell access | DeepSeek, Moonshot, MiniMax, Ant Group | 148–152 SM fingerprints since Apr 2026 | Maintained overseas supply channels; highest-end frontier runs |
| Hopper-only | Alibaba (Qwen), Zhipu, Tencent, Xiaomi, StepFun | 132 SM fingerprints on newest models | Limited to compliant or legacy hardware; frontier training constrained |
| Fingerprint-free by design | Baidu (PaddlePaddle), some Qwen3 models | No GPU layout recoverable | Either domestic-stack training or deliberate evasion of forensics |
| Domestic silicon | Meituan (LongCat-2.0) | No NVIDIA signature; Huawei Ascend indicators | Fully committed to the domestic alternative path |

The picture that emerges is not a monolithic Chinese AI sector riding smuggled chips to parity. It is a split ecosystem: four labs with working access to the world's best hardware through channels they do not discuss, a larger group genuinely constrained to Hopper-class compute, and at least one major company all-in on Huawei's Ascend stack. Export controls bind some labs and not others — sorting the industry by access rather than talent.

| Countermeasure | How It Works | Likely Adoption |
|----------------|--------------|-----------------|
| CPU initialization | Weights created on processor with no GPU layout | High — trivial to implement |
| Non-PyTorch frameworks | PaddlePaddle-style generators carry no hardware pattern | Moderate — requires stack migration |
| Preserved-row scrubbing | Overwrite untrained rows before weight release | High — one-line change for labs that know where to look |
| Closed-weight releases | No published weights means no forensics possible | Already the trend among US labs |

## What Comes Next

Three things are now almost certain. First, the forensics arms race has begun. Every lab publishing open weights now knows its initialization hardware can be read, and the countermeasures are straightforward: initialize on CPU, use frameworks that leave no hardware layout, or overwrite preserved rows before release. DePue hints at additional findings from "other forms of checkpoint forensics" yet to come.

Second, export-control policy faces forced evolution. The current framework polices chip movement; the evidence shows capability transfer happens through weights regardless of where chips sit. Expect the next round of US rules to address compute provenance — possibly requiring disclosure of training hardware above a capability threshold, or treating weights trained on controlled hardware as themselves controlled.

Third, the China question splits in two. For labs with Blackwell access, the binding constraint is no longer hardware but talent and data. For those without it, the bet on domestic silicon becomes existential. Huawei's Ascend roadmap, covered when the [Atlas 950 SuperPod entered mass production](huawei-atlas-950-superpod-china-ai-chip-independence-2026), is no longer a patriotic alternative — for the Hopper-bound majority it is the only frontier-scale path that does not depend on channels Washington can shut at any moment. This week's fingerprints tell you which labs found a way around the wall. The ones that did not will be building on the other side of it.

![Abstract data visualization suggesting forensic analysis and pattern detection](https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80)

*Checkpoint forensics turns model weights into evidence: the initialization patterns of six Chinese frontier models point to hardware that requires a US export license none of them have reported holding. (Photo: Unsplash)*

## Social Voices

**Comment 1 — Hacker News, 6 hours after publication**
"The Hopper reading can't distinguish H800 from H100 from H200 — they all share the same 132-SM layout. So the 'compliant H800' narrative for the older models is based on the labs' own disclosure, not the forensics. The Blackwell finding is much stronger because B200/B300/GB200/GB300 were never legally exportable to China at all. Still, worth keeping the two evidentiary tiers straight."

*(中文：Hopper 读数无法区分 H800、H100 和 H200——它们都是 132 个 SM。所以旧模型"合规 H800"的说法基于实验室自己的披露，而非取证结果。Blackwell 的发现强得多，因为 B200/B300/GB200/GB300 从未被合法出口到中国。不过还是要把两个证据层级分清楚。)*

**Comment 2 — Zhihu, top answer under "如何看待中国大模型权重中检出 Blackwell 指纹？"**
"Everyone's asking 'where are the chips.' I think the more interesting question is 'where were the models trained.' If the training happened in Malaysia or the Gulf, then technically no export violation occurred, and the whole debate shifts from smuggling to jurisdiction. The US controls chips, not gradients. That gap is the real story."

*(中文：大家都在问"卡在哪"。我觉得更有意思的问题是"模型在哪训练的"。如果训练发生在马来西亚或海湾国家，那么严格来说没有发生出口违规，整个争论就从走私问题变成了管辖权问题。美国管的是芯片，不是梯度。这个缝隙才是真正的新闻。)*

**Comment 3 — Weibo, trending hashtag #英伟达指纹门#**
"This is basically the doping test of AI. Athletes who doped got caught by improved testing years later. Labs that trained on banned chips are now getting caught by improved forensics. The parallel is almost perfect — including the part where the cheaters were ahead of the testers for a long time."

*(中文：这 basically 就是 AI 界的兴奋剂检测。当年服药的运动员是几年后检测技术进步才被揪出来的。在禁运芯片上训练模型的大厂，现在被更先进的取证技术抓个正着。这个类比几乎完美——包括作弊者长期领先检测者这一段。)*

**Comment 4 — X, Chinese ML engineer**
"What's getting lost: Meituan trained LongCat-2.0 entirely on domestic ASICs. No NVIDIA fingerprint, nothing to recover. While everyone stares at the four labs with overseas channels, the actually consequential story is that one major Chinese company has already demonstrated a working all-domestic training pipeline at scale. That path doesn't need anyone's permission."

*(中文：被大家忽略的是：美团完全用国产 ASIC 训练了 LongCat-2.0。没有英伟达指纹，什么都恢复不出来。当所有人盯着那四家拥有海外渠道的实验室时，真正重要的故事是：一家中国大公司已经证明了规模化纯国产训练管线是可行的。这条路不需要任何人的许可。)*

**Comment 5 — X, AI policy researcher**
"Scoble saying this is 'why Jensen was fired' is exactly the kind of causal overreach that makes policy debates dumber. The forensics are technical evidence of hardware access. Whether they caused a CEO resignation is a business-governance question with its own timeline. Both can be true at once and neither proves the other."

*(中文：Scoble 说这就是"黄仁勋被解雇的原因"，正是这种因果推断过度让政策辩论变得更蠢。取证是关于硬件获取的技术证据。它是否导致 CEO 下台是另一个时间线上的公司治理问题。两件事可以各自独立为真，谁也证明不了谁。)*

**Comment 6 — 36Kr comment section**
"Twelve thousand Blackwell GPUs at $70K each is $840 million in hardware for five training runs, and that's the conservative estimate. Meanwhile the domestic labs on Hopper are doing frontier-class work with hardware that's two generations old. Whatever you think of export controls, they've created the strangest competitive experiment in the history of computing."

*(中文：一万两千张 Blackwell、每张七万美元，五轮训练就是八亿四千万美元的硬件，这还是个保守估计。与此同时，用 Hopper 的国产实验室在用落后两代的硬件做前沿级工作。不管你怎么看出口管制，它们已经制造了计算史上最奇怪的一场竞争实验。)*

---

**Sources:**
1. Will DePue, "Top Chinese Frontier AI Models Carry the Fingerprint of Export-Controlled NVIDIA Blackwell GPUs," Unemployment Labs, November 12, 2026 — [unemploymentlabs.com/checkpoint-forensics](https://unemploymentlabs.com/checkpoint-forensics)
2. The Information, "Alice Huang's Companies Invested in DeepSeek, Promising Nvidia Chips," November 12, 2026
3. Reuters, February 23, 2026 — "China's DeepSeek trained AI model on Nvidia's best chip despite US ban, official says"
4. The Wall Street Journal (via Reuters), March 2026 — Blackwell chips in Malaysia for ByteDance's use
5. The New York Times, October 2026 — US authorities concluded Alice Huang was a Chinese intelligence asset
6. Bloomberg, July 22, 2026 — White House OSTP director Michael Kratsios on Moonshot AI hardware
7. Hacker News discussion thread, November 13, 2026 — [news.ycombinator.com/item?id=50474883](https://news.ycombinator.com/item?id=50474883)
8. X/Twitter: @willdepue (DePue's announcement thread), @scobleizer (Scoble's comment), November 12, 2026
9. U.S. export licensing rule: 15 CFR 742.6
