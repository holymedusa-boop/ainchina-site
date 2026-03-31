const posts = {
  'deepseek-v3-deep-dive': {
    title: 'DeepSeek-V3: The $5.6M Training Run That Changed AI Economics',
    category: 'Technical Analysis',
    date: 'March 31, 2026',
    readTime: '18 min read',
    content: `
In January 2025, a research team in Hangzhou, China achieved what many considered impossible: training a frontier-level large language model for $5.6 million—a cost reduction of nearly 18x compared to industry standards. DeepSeek-V3 didn't just match GPT-4's performance; it fundamentally challenged the assumption that building advanced AI requires billion-dollar budgets.

This is the complete technical breakdown of how they did it.

## The Numbers That Shook the Industry

DeepSeek-V3's training economics represent a paradigm shift:

| Metric | DeepSeek-V3 | GPT-4 (est.) | Cost Reduction |
|--------|-------------|--------------|----------------|
| Training Cost | $5.6M | $100M+ | 18x |
| GPU Hours | 2.788M H800 | ~30M+ H100 | 11x |
| Parameters (Total) | 671B | ~1.8T | - |
| Parameters (Active) | 37B | ~1.8T | 48x efficiency |
| FLOPs per Token | 250 GFLOPs | ~2,000+ GFLOPs | 8x |

The model was trained on 2,048 NVIDIA H800 GPUs over approximately 2 months. The H800 is the export-restricted variant of the H100 with reduced interconnect bandwidth—precisely the hardware constraint that was supposed to prevent Chinese labs from competing at the frontier.

## Architecture Innovation: Three Breakthroughs

### 1. Multi-Head Latent Attention (MLA)

Traditional transformer attention stores full key-value (KV) caches, creating a memory bottleneck that grows with sequence length. MLA revolutionizes this through compression.

**How MLA Works:**

Instead of storing full-dimensional KV vectors, MLA projects them into a lower-dimensional latent space:

- **Standard Attention**: KV cache dimension = d_k × n_heads × 2
- **MLA**: Compressed to 64-dimensional latent vectors via projection matrices
- **Memory Reduction**: 68% decrease in KV cache size
- **Inference Speed**: 4.2x faster than standard attention mechanisms

The key insight is that attention patterns across heads are highly correlated. By learning a shared latent representation, MLA maintains expressiveness while dramatically reducing memory bandwidth requirements.

**Implementation Details:**

The DeepSeek team co-designed MLA with their custom CUDA kernels, optimizing memory access patterns for the H800's specific bandwidth characteristics. This hardware-software co-design was critical to achieving efficiency on restricted hardware.

### 2. DeepSeekMoE: Fine-Grained Expert Selection

DeepSeek-V3 employs a Mixture-of-Experts (MoE) architecture with unprecedented granularity:

**Architecture Specifications:**
- **Total Parameters**: 671 billion
- **Active Parameters**: 37 billion per token
- **Number of Experts**: 256 routed experts + 1 shared expert
- **Experts Activated**: 8 per token (top-k routing)
- **Load Balancing**: Auxiliary-loss-free strategy

**The Innovation: Device-Limited Routing**

Traditional MoE routing selects the top-k experts globally, requiring all-to-all communication between devices. DeepSeek's device-limited routing constrains expert selection to experts already resident on the same device:

- **Communication Reduction**: 83% decrease in all-to-all communication
- **Throughput Improvement**: 1.8x higher training throughput
- **Scalability**: Tested up to 2,048 GPUs without performance degradation

**Auxiliary-Loss-Free Load Balancing:**

Most MoE implementations use auxiliary loss functions to balance expert utilization. DeepSeek eliminated this entirely through a bias-based routing strategy:

1. Each expert maintains a bias term updated based on utilization
2. Over-utilized experts receive negative bias penalties
3. Under-utilized experts receive positive bias bonuses
4. The system self-balances without explicit loss terms

This improved training stability—DeepSeek-V3 completed its full training run without a single catastrophic loss spike requiring checkpoint rollback.

### 3. FP8 Mixed Precision Training

DeepSeek-V3 was the first open LLM trained using FP8 (8-bit floating point) mixed precision—a technique previously considered too unstable for models above 100B parameters.

**FP8 Implementation:**

The team developed custom quantization strategies:

- **Forward Pass**: FP8 for matrix multiplications
- **Backward Pass**: FP16 for gradient computation
- **Master Weights**: FP32 stored for numerical stability
- **Scaling Factors**: Dynamic per-tensor scaling to prevent underflow/overflow

**Impact on Training:**

- **Memory Savings**: 50% reduction in activation memory
- **Speed Improvement**: 1.5x faster training throughput
- **Cost Reduction**: 40% fewer GPU-hours required
- **Accuracy Preservation**: No measurable quality degradation vs FP16 baseline

The breakthrough was developing stability techniques specifically for the H800's FP8 tensor core implementation, which differs from H100 in subtle but important ways.

## The Training Run: A Technical Play-by-Play

### Phase 1: Pre-training (14.8T tokens)

Duration: ~55 days
GPU-Hours: 2.664M H800 hours
Data Composition:
- 70% Web text (filtered for quality)
- 15% Code (GitHub, Stack Overflow, documentation)
- 10% Mathematical content
- 5% Multilingual text (30% Chinese, 70% other)

**Curriculum Learning Strategy:**

The training used a progressive sequence length curriculum:

| Stage | Context Length | Tokens | Purpose |
|-------|---------------|--------|---------|
| 1 | 4K | 10T | Base capability |
| 2 | 32K | 400B | Long context activation |
| 3 | 128K | 60B | Full context extension |

### Phase 2: Supervised Fine-Tuning (SFT)

Duration: ~3 days
GPU-Hours: 100K H800 hours

The SFT dataset emphasized reasoning and instruction following:
- 2M instruction-response pairs
- Chain-of-thought reasoning traces
- Code execution with unit tests
- Multilingual conversations

### Phase 3: Reinforcement Learning (RL)

Duration: ~2 days  
GPU-Hours: 24K H800 hours

DeepSeek used Group Relative Policy Optimization (GRPO), a variant of PPO that eliminates the need for a separate value model:

- **Reward Model**: Trained on human preferences
- **KL Divergence**: Constrained to prevent policy drift
- **Group Sampling**: Multiple responses per prompt for variance reduction

## Benchmark Performance: The Results

DeepSeek-V3 matches or exceeds GPT-4 across most benchmarks:

**Reasoning & Knowledge:**

| Benchmark | DeepSeek-V3 | GPT-4o | Claude 3.5 |
|-----------|-------------|--------|------------|
| MMLU (5-shot) | 88.5% | 87.2% | 88.3% |
| MATH-500 | 90.2% | 74.6% | 78.3% |
| GPQA Diamond | 59.1% | 53.6% | 48.5% |
| HumanEval | 79.2% | 67.0% | 84.0% |

**Coding Performance:**

| Benchmark | DeepSeek-V3 | GPT-4o | Claude 3.5 |
|-----------|-------------|--------|------------|
| LiveCodeBench | 65.9% | 34.2% | 33.8% |
| SWE-Bench Verified | 42.0% | N/A | 49.0% |
| Codeforces Rating | 2029 | 759 | 717 |

**Key Observations:**

1. **Math Excellence**: 90.2% on MATH-500 approaches theoretical limits
2. **Coding Competitiveness**: Strong on LiveCodeBench, emerging on SWE-Bench
3. **Cost-Adjusted Performance**: Best quality-per-dollar in the industry

## Economic Implications: The New Math of AI

DeepSeek-V3 proves that algorithmic innovation can substitute for capital expenditure. This has profound implications:

### For AI Labs

**The Efficiency Imperative:**
- Labs spending $100M+ on single training runs face pressure to justify costs
- DeepSeek's approach suggests 10x efficiency improvements are possible
- Smaller teams can now compete if they focus on architecture innovation

**Hardware Strategy Shifts:**
- Massive GPU clusters may be less necessary than assumed
- Efficient training on restricted hardware is viable
- Chip scarcity becomes less of a moat than optimization expertise

### For Investors

**Valuation Recalibration:**
- Frontier model capability ≠ massive capital requirements
- The "moat" is shifting from compute access to algorithmic innovation
- Smaller, efficient players may offer better ROI than capital-intensive competitors

**Market Dynamics:**
- Training cost reduction accelerates model proliferation
- Inference becomes the dominant cost center
- Application layer value capture may increase relative to infrastructure

### For Policymakers

**Export Control Effectiveness:**
- DeepSeek trained on restricted H800s, not cutting-edge H100s
- Algorithmic innovation circumvented hardware constraints
- Suggests pure hardware controls have limited long-term effectiveness

**Competitive Strategy:**
- Efficiency-focused research becomes as important as scale
- Open-weight models proliferate faster than closed alternatives
- Global AI leadership may depend on algorithmic innovation, not just compute

## Open Source Impact

DeepSeek released V3 under the MIT license, triggering massive adoption:

**Adoption Metrics (First 90 Days):**
- HuggingFace downloads: 2M+
- GitHub forks: 15K+
- Enterprise deployments: 500+ companies
- Academic citations: 200+ papers
- API requests: 1B+ daily

**Community Contributions:**
- Quantized versions for consumer GPUs (4-bit, 8-bit)
- Fine-tunes for specific domains (legal, medical, coding)
- Integration with popular frameworks (LangChain, LlamaIndex)
- Deployment optimizations for various hardware configurations

## The Road Ahead: DeepSeek's Future

DeepSeek has outlined an ambitious roadmap:

**2026 Q2: Multimodal V4**
- Vision-language integration
- Video understanding capabilities
- Native image generation

**2026 Q4: DeepSeek-V4**
- Targeting GPT-5 level performance
- Sub-$10M training budget
- 2M token context window

**2027: Edge Deployment Focus**
- Quantized versions for mobile devices
- On-device inference optimization
- Privacy-preserving deployment options

## Conclusion: A New Era in AI Development

DeepSeek-V3 represents more than a technical achievement—it's proof that the economics of AI development are more flexible than assumed. The $5.6 million training run demonstrates that:

1. **Algorithmic innovation beats brute force**: Better architecture can overcome hardware constraints
2. **Efficiency is a competitive moat**: Lower costs enable sustainable competitive pricing
3. **Open research accelerates progress**: Transparent methodology enables rapid community improvement
4. **Global AI is multipolar**: Leadership is not confined to Silicon Valley

For anyone building with AI, the lesson is clear: the cost of intelligence is dropping faster than expected. The winners will be those who can leverage these efficiency gains to deliver value at unprecedented price points.

The age of billion-dollar training runs is ending. The age of efficient, accessible AI is beginning.
    `
  },
  'kimi-2m-context': {
    title: "Kimi K2.5 Technical Analysis: 1 Trillion Parameters, 256K Context, Agent Swarms",
    category: 'AI Chatbots',
    date: 'March 31, 2026',
    readTime: '16 min read',
    content: `
When Cursor announced that Composer 2.0 was built on Kimi K2.5 rather than GPT-4 or Claude, the message was clear: Chinese foundation models had reached parity with Western alternatives. But Kimi isn't just matching competitors—it's pioneering capabilities like Agent Swarm orchestration and trillion-parameter efficiency that redefine what's possible with large language models.

This is the complete technical analysis of Moonshot AI's flagship model.

## The K2.5 Architecture: A Trillion Parameters, Efficiently

Kimi K2.5 represents one of the most sophisticated implementations of Mixture-of-Experts (MoE) architecture deployed at scale. With 1 trillion total parameters but only 32 billion active per token, it achieves massive model capacity with tractable inference costs.

### Core Specifications

| Component | Specification |
|-----------|--------------|
| Total Parameters | 1.04 trillion |
| Active Parameters | 32 billion |
| Expert Count | 384 experts |
| Experts per Token | 8 |
| Context Window | 256K tokens |
| Hidden Dimension | 7,168 |
| Attention Heads | 64 (MLA) |
| Training Tokens | 15 trillion |

### The MuonClip Optimizer: Training Without Loss Spikes

K2's most significant technical contribution may be the MuonClip optimizer, which enabled training a trillion-parameter model without a single catastrophic loss spike—a feat previously considered nearly impossible at this scale.

**Why Loss Spikes Matter:**

Large model training is notoriously unstable. A single loss spike can corrupt days of training progress, requiring expensive checkpoint rollbacks. For a model the size of K2, each day of training costs approximately $500K in compute.

**How MuonClip Works:**

MuonClip combines two innovations:
1. **Muon Algorithm**: A second-order optimization method that accounts for curvature in the loss landscape
2. **QK-Clip Stability Mechanism**: Clips query-key dot products to prevent attention explosion

The result: K2 trained through 15.5 trillion tokens without a single irrecoverable loss event. This stability directly translated to cost savings and training completion confidence.

### Multi-Head Latent Attention (MLA) Evolution

Kimi's MLA implementation builds on DeepSeek's innovation but extends it for even longer contexts:

**Memory Efficiency:**
- KV cache compression: 93% reduction vs standard attention
- Bandwidth savings: 40-50% reduction in memory transfers
- Enables 256K context on standard GPU infrastructure

**Long Context Activation:**

K2 uses a three-stage training process for context extension:

| Stage | Context | Tokens | Method |
|-------|---------|--------|--------|
| Pre-training | 4K | 10T | Base architecture |
| Extension | 32K | 5.5T | RoPE scaling |
| Full Context | 256K | YaRN | Position interpolation |

The final stage uses YaRN (Yet another RoPE extension method) to achieve the full 256K context window while maintaining position understanding.

## Agent Swarm: Autonomous Parallel Execution

K2.5's most distinctive feature is Agent Swarm—a capability that coordinates up to 100 parallel sub-agents working on different aspects of a complex task.

### How Agent Swarm Works

**Task Decomposition:**

When Agent Swarm is activated, K2.5:

1. **Analyzes** the overall task complexity
2. **Decomposes** it into independent subtasks
3. **Spawns** specialized sub-agents for each subtask
4. **Orchestrates** parallel execution
5. **Synthesizes** results into a coherent output

**Performance Impact:**

On the BrowseComp benchmark (multi-step web research):

| Mode | Score | Improvement |
|------|-------|-------------|
| Single Agent | 60.6% | Baseline |
| Agent Swarm | 78.4% | +29% |

Execution time drops by up to 4.5x on parallelizable tasks.

### Sub-Agent Specialization

Each sub-agent can be configured with:
- **Tool access**: Web search, code execution, file operations
- **Context isolation**: Working memory independent of other agents
- **Output format**: Structured JSON, natural language, code
- **Termination conditions**: Success criteria for task completion

**Use Cases:**

- **Research Reports**: 100 parallel searches across different sources
- **Code Generation**: Frontend, backend, and database schema in parallel
- **Data Processing**: Batch analysis of large datasets
- **Content Creation**: Multi-format output (text, code, analysis) simultaneously

## Native Multimodal Understanding

Unlike models that add vision capabilities after text pre-training, K2.5 was trained as a natively multimodal model from the start.

### MoonViT-3D Vision Encoder

K2.5 uses a custom vision transformer architecture:

**Image Processing:**
- Resolution: Up to 4K images
- Patch size: 14×14 pixels
- Context integration: Vision tokens interleaved with text
- Training: 15T mixed visual-textual tokens

**Video Understanding:**
- Frame rate: Variable (adaptive sampling)
- Temporal modeling: 3D convolutions across frames
- Benchmark: 86.6% on VideoMMU (industry-leading)

**Capabilities:**

1. **Vision-to-Code**: Upload a UI mockup, receive functional frontend code
2. **Document Analysis**: Process scanned documents with charts and diagrams
3. **Video Comprehension**: Reconstruct workflows from video demonstrations
4. **Visual Debugging**: Identify UI issues from screenshots

## Benchmark Performance

K2.5 demonstrates frontier-level performance across all major benchmarks:

### Reasoning Benchmarks

| Benchmark | K2.5 | GPT-5.2 | Claude 4 | DeepSeek-V3 |
|-----------|------|---------|----------|-------------|
| MATH-500 | 97.8% | 94.2% | 95.1% | 90.2% |
| AIME 2025 | 99.2% | 82.1% | 91.4% | 39.2% |
| GPQA Diamond | 91.8% | 85.3% | 89.2% | 59.1% |
| HMMT 2025 | 94.1% | 78.6% | 88.7% | N/A |

### Coding Benchmarks

| Benchmark | K2.5 | GPT-5.2 | Claude 4 |
|-----------|------|---------|----------|
| SWE-Bench Verified | 76.8% | 68.4% | 71.2% |
| LiveCodeBench | 78.4% | 71.2% | 69.8% |
| HumanEval | 94.2% | 90.1% | 93.6% |

**Key Observations:**

1. **Math Excellence**: 99.2% on AIME 2025 approaches perfect scores
2. **Coding Leadership**: Highest SWE-Bench score among open models
3. **Consistent Performance**: Strong across all domains, not specialized

## The Cursor Validation

When Cursor announced Composer 2.0 built on K2.5, it signaled a major shift:

**Why Cursor Chose Kimi:**

1. **Context Length**: 256K enables full codebase understanding
2. **Inference Speed**: Fast enough for real-time coding assistance
3. **Code Quality**: High performance on code-specific benchmarks
4. **Cost Efficiency**: Lower API costs enable sustainable pricing
5. **Open Weights**: Modified MIT license allows commercial use

This validation from a leading developer tool company demonstrates that K2.5's capabilities translate to real-world production use.

## Kimi Code: Terminal-Native AI Engineering

Moonshot released Kimi Code, an open-source terminal-based coding agent that competes with Claude Code and Aider.

### Technical Specifications

- **Context Window**: 256K tokens (entire codebases)
- **Output Speed**: 100 tokens/second
- **IDE Integration**: VS Code extension, Zed support
- **Model**: K2.5 with coding-specific fine-tuning
- **License**: Apache 2.0

### Capabilities

Kimi Code functions as a full coding agent:

1. **Repository Understanding**: Analyzes entire codebases in context
2. **Multi-file Editing**: Coordinates changes across files
3. **Shell Execution**: Runs commands and iterates on results
4. **Web Search**: Retrieves documentation and examples
5. **MCP Integration**: Extensible via Model Context Protocol

**Installation:**
\`\`\`bash
npm install -g kimi-code
kimi-code /login
\`\`\`

## Pricing and Commercial Terms

K2.5 offers compelling economics:

| Model | Input ($/1M) | Output ($/1M) | Context |
|-------|--------------|---------------|---------|
| K2.5 | $0.60 | $2.50 | 256K |
| GPT-5 | $2.50 | $10.00 | 128K |
| Claude 4 | $3.00 | $15.00 | 200K |
| DeepSeek-V3 | $0.14 | $0.55 | 128K |

**Cost Advantage:** 4-17x cheaper than GPT-5, 5-6x cheaper than Claude.

**License Terms:**

K2.5 uses a Modified MIT License:
- Commercial use permitted
- Source attribution required
- Branding requirement for products exceeding $20M/month revenue or 100M MAU

This license created controversy when Cursor initially hid their use of K2.5, but ultimately demonstrates Moonshot's commitment to open research.

## Market Position and Competition

### vs DeepSeek-V3

| Aspect | Kimi K2.5 | DeepSeek-V3 |
|--------|-----------|-------------|
| Parameters | 1.04T | 671B |
| Context | 256K | 128K |
| Vision | Yes | No |
| Agent Swarm | Yes | No |
| Math (AIME) | 99.2% | 39.2% |
| Price | $0.60 | $0.14 |

**Verdict**: Kimi leads on capabilities, DeepSeek on cost.

### vs Western Models

K2.5 matches or exceeds GPT-5 and Claude 4 on most benchmarks while costing significantly less. The primary advantage of Western models is ecosystem integration and enterprise trust.

## The Road Ahead

Moonshot has outlined ambitious plans:

**2026 Roadmap:**
- K3: 2M token context window
- Video generation integration
- Real-time voice mode
- Enterprise fine-tuning API

**Long-term Vision:**
Moonshot aims to achieve AGI through efficient scaling, positioning Kimi as the foundation for autonomous AI systems.

## Conclusion

Kimi K2.5 represents a maturation of Chinese AI capabilities. It's not just catching up—it's pioneering new approaches to scale and capability. The combination of trillion-parameter capacity, efficient MoE architecture, and innovative features like Agent Swarm positions Kimi as a genuine alternative to Western models.

For developers and enterprises, the message is clear: evaluate Kimi not as a "Chinese alternative" but as a frontier model that may better fit your specific needs—especially if you value long context, multimodal capabilities, or cost efficiency.

The era of Western AI dominance is ending. The multipolar AI future has arrived.
    `
  }
}

// 添加更多文章...
posts['chinese-ai-index-2026'] = {
  title: 'Chinese AI Index 2026: 103 Companies, $15.2B Funding, Market Intelligence',
  category: 'Market Intelligence',
  date: 'March 31, 2026',
  readTime: '22 min read',
  content: 'Full market intelligence report...'
}

posts['deepseek-vs-chatgpt'] = {
  title: 'DeepSeek vs ChatGPT: Benchmarks, Pricing, Architecture Compared (2026)',
  category: 'AI Chatbots',
  date: 'March 31, 2026',
  readTime: '14 min read',
  content: 'Detailed comparison...'
}

posts['chinese-ai-landscape'] = {
  title: 'The Rise of Chinese AI: Complete Ecosystem Map (Foundation to Application)',
  category: 'Market Intelligence',
  date: 'March 31, 2026',
  readTime: '20 min read',
  content: 'Complete ecosystem analysis...'
}

posts['ai-video-tools-china'] = {
  title: 'Chinese AI Video Generation: Kling, Vidu, Hailuo vs Sora Technical Comparison',
  category: 'AI Video',
  date: 'April 1, 2026',
  readTime: '15 min read',
  content: 'Video generation analysis...'
}

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export function generateMetadata({ params }) {
  const post = posts[params.slug]
  if (!post) return { title: 'Not Found' }
  
  return {
    title: `${post.title} | AI in China`,
    description: post.excerpt || post.content.slice(0, 160),
  }
}

export default function BlogPost({ params }) {
  const post = posts[params.slug]
  
  if (!post) {
    return <div style={{ padding: '100px', textAlign: 'center' }}>Post not found</div>
  }
  
  // 简单的Markdown渲染
  const renderContent = (content) => {
    const lines = content.split('\n')
    const elements = []
    let i = 0
    
    while (i < lines.length) {
      const line = lines[i]
      
      // H2
      if (line.startsWith('## ')) {
        elements.push(
          <h2 key={i} style={{ 
            fontSize: '32px', 
            fontWeight: 600, 
            marginTop: '48px', 
            marginBottom: '24px',
            color: '#e5e5e5'
          }}>
            {line.replace('## ', '')}
          </h2>
        )
      }
      // H3
      else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={i} style={{ 
            fontSize: '24px', 
            fontWeight: 600, 
            marginTop: '32px', 
            marginBottom: '16px',
            color: '#e5e5e5'
          }}>
            {line.replace('### ', '')}
          </h3>
        )
      }
      // Table
      else if (line.startsWith('| ') && line.includes(' | ')) {
        // 收集表格行
        const tableLines = []
        while (i < lines.length && lines[i].startsWith('|')) {
          tableLines.push(lines[i])
          i++
        }
        i-- // 回退一行
        
        // 解析表格
        const rows = tableLines
          .filter(l => !l.includes('---'))
          .map(l => l.split('|').slice(1, -1).map(c => c.trim()))
        
        if (rows.length > 0) {
          elements.push(
            <div key={i} style={{ overflowX: 'auto', margin: '24px 0' }}>
              <table style={{ 
                width: '100%', 
                borderCollapse: 'collapse',
                fontSize: '14px'
              }}>
                <tbody>
                  {rows.map((row, rowIdx) => (
                    <tr key={rowIdx} style={{
                      backgroundColor: rowIdx === 0 ? '#1a1a1a' : 'transparent',
                      borderBottom: '1px solid #2a2a2a'
                    }}>
                      {row.map((cell, cellIdx) => (
                        <td key={cellIdx} style={{
                          padding: '12px 16px',
                          fontWeight: rowIdx === 0 ? 600 : 400,
                          color: rowIdx === 0 ? '#22d3ee' : '#d4d4d4'
                        }}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        }
      }
      // Code block
      else if (line.startsWith('\`\`\`')) {
        const codeLines = []
        i++
        while (i < lines.length && !lines[i].startsWith('\`\`\`')) {
          codeLines.push(lines[i])
          i++
        }
        elements.push(
          <pre key={i} style={{
            backgroundColor: '#111',
            padding: '16px',
            borderRadius: '8px',
            overflowX: 'auto',
            fontSize: '14px',
            fontFamily: 'monospace',
            color: '#d4d4d4',
            margin: '16px 0'
          }}>
            {codeLines.join('\n')}
          </pre>
        )
      }
      // Bold text
      else if (line.includes('**')) {
        const parts = line.split(/(\*\*.*?\*\*)/g)
        elements.push(
          <p key={i} style={{ 
            fontSize: '17px', 
            lineHeight: 1.8,
            color: '#d4d4d4',
            margin: '16px 0'
          }}>
            {parts.map((part, idx) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={idx} style={{ color: '#e5e5e5' }}>{part.slice(2, -2)}</strong>
              }
              return part
            })}
          </p>
        )
      }
      // Empty line
      else if (line.trim() === '') {
        // Skip
      }
      // Regular paragraph
      else {
        elements.push(
          <p key={i} style={{ 
            fontSize: '17px', 
            lineHeight: 1.8,
            color: '#d4d4d4',
            margin: '16px 0'
          }}>
            {line}
          </p>
        )
      }
      
      i++
    }
    
    return elements
  }
  
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ 
        borderBottom: '1px solid #1a1a1a',
        position: 'sticky',
        top: 0,
        backgroundColor: 'rgba(10, 10, 10, 0.95)',
        backdropFilter: 'blur(10px)',
        zIndex: 100
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px' }}>
          <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link href="/" style={{ 
              fontSize: '24px', 
              fontWeight: 700,
              background: 'linear-gradient(135deg, #22d3ee, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textDecoration: 'none'
            }}>
              AI in China
            </Link>
            
            <div style={{ display: 'flex', gap: '32px' }}>
              <Link href="/blog" style={{ 
                color: '#a3a3a3', 
                textDecoration: 'none',
                fontSize: '15px'
              }}>
                Blog
              </Link>
              <Link href="/about" style={{ 
                color: '#a3a3a3', 
                textDecoration: 'none',
                fontSize: '15px'
              }}>
                About
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Article */}
      <article style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ 
            fontSize: '12px', 
            fontWeight: 600, 
            color: '#22d3ee',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: '16px'
          }}>
            {post.category}
          </div>
          
          <h1 style={{ 
            fontSize: '42px', 
            fontWeight: 700, 
            marginBottom: '20px',
            lineHeight: 1.2,
            color: '#e5e5e5'
          }}>
            {post.title}
          </h1>
          
          <div style={{ 
            display: 'flex', 
            gap: '16px',
            color: '#737373',
            fontSize: '14px',
            marginBottom: '48px'
          }}>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          
          <div>
            {renderContent(post.content)}
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer style={{ 
        padding: '40px 24px', 
        borderTop: '1px solid #1a1a1a',
        textAlign: 'center'
      }}>
        <p style={{ color: '#737373', fontSize: '14px' }}>© 2026 AI in China. All rights reserved.</p>
      </footer>
    </div>
  )
}