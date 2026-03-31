export default function Qwen3Article() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#f8f9fa',
      padding: '40px 20px'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Header */}
        <header style={{ marginBottom: '40px' }}>
          <a href="/" style={{
            color: '#0066cc',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 'bold'
          }}>← Back to AIN China</a>
        </header>

        {/* Article Header */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '16px'
          }}>
            <span style={{
              background: '#0066cc',
              color: 'white',
              padding: '6px 16px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 'bold',
              textTransform: 'uppercase'
            }}>Technical Analysis</span>
            <span style={{ color: '#666', fontSize: '14px' }}>March 31, 2026</span>
            <span style={{ color: '#999', fontSize: '14px' }}>•</span>
            <span style={{ color: '#666', fontSize: '14px' }}>18 min read</span>
          </div>

          <h1 style={{
            fontSize: '42px',
            fontWeight: 'bold',
            color: '#1a1a1a',
            lineHeight: '1.2',
            marginBottom: '16px'
          }}>
            Qwen3 Technical Analysis: Alibaba's 235B MoE Model with Hybrid Reasoning Architecture
          </h1>

          <p style={{
            fontSize: '20px',
            color: '#555',
            lineHeight: '1.6',
            fontStyle: 'italic'
          }}>
            How Alibaba's latest model achieves GPT-4 level performance with dynamic fast/deep reasoning modes, 
            22B active parameters, and 70% cost reduction through revolutionary MoE architecture.
          </p>
        </div>

        {/* Featured Image Placeholder */}
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          height: '400px',
          borderRadius: '12px',
          marginBottom: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '24px',
          fontWeight: 'bold'
        }}>
          Qwen3 Architecture Diagram
        </div>

        {/* Article Content */}
        <article style={{
          background: 'white',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          fontSize: '18px',
          lineHeight: '1.8',
          color: '#333'
        }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', marginTop: '0' }}>Overview</h2>
          <p style={{ marginBottom: '24px' }}>
            Alibaba Cloud has released Qwen3, the latest iteration of its Qwen large language model series. 
            This 235B parameter Mixture-of-Experts (MoE) model introduces a novel hybrid reasoning architecture 
            that dynamically switches between fast thinking and deep reasoning modes, achieving competitive 
            performance with significantly reduced computational costs.
          </p>

          <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', marginTop: '40px' }}>Key Technical Specifications</h2>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginBottom: '32px',
            fontSize: '16px'
          }}>
            <tbody>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '12px 0', fontWeight: 'bold', width: '40%' }}>Total Parameters</td>
                <td style={{ padding: '12px 0' }}>235B</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '12px 0', fontWeight: 'bold' }}>Active Parameters</td>
                <td style={{ padding: '12px 0' }}>22B per token</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '12px 0', fontWeight: 'bold' }}>Architecture</td>
                <td style={{ padding: '12px 0' }}>Mixture-of-Experts (MoE)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '12px 0', fontWeight: 'bold' }}>Context Window</td>
                <td style={{ padding: '12px 0' }}>128K tokens</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '12px 0', fontWeight: 'bold' }}>Training Data</td>
                <td style={{ padding: '12px 0' }}>20+ trillion tokens</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '12px 0', fontWeight: 'bold' }}>Expert Count</td>
                <td style={{ padding: '12px 0' }}>128 routed experts + shared experts</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 0', fontWeight: 'bold' }}>Reasoning Modes</td>
                <td style={{ padding: '12px 0' }}>Fast thinking / Deep reasoning (hybrid)</td>
              </tr>
            </tbody>
          </table>

          <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', marginTop: '40px' }}>Architecture Deep Dive</h2>
          
          <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '16px', marginTop: '32px', color: '#0066cc' }}>Hybrid Reasoning System</h3>
          <p style={{ marginBottom: '20px' }}>
            Qwen3's most significant innovation is its <strong>hybrid reasoning architecture</strong>. 
            Unlike traditional models that use a single inference path, Qwen3 implements:
          </p>
          <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
            <li style={{ marginBottom: '12px' }}>
              <strong>Fast Thinking Mode</strong>: Direct token generation for straightforward queries, 
              using only 22B active parameters
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Deep Reasoning Mode</strong>: Extended chain-of-thought processing for complex problems, 
              activating additional computation paths
            </li>
            <li>
              <strong>Dynamic Switching</strong>: Model automatically selects appropriate mode based on query complexity
            </li>
          </ul>

          <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '16px', marginTop: '32px', color: '#0066cc' }}>MoE Implementation</h3>
          <p style={{ marginBottom: '20px' }}>
            Qwen3 uses a <strong>sparse MoE architecture</strong> with:
          </p>
          <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
            <li style={{ marginBottom: '12px' }}><strong>128 routed experts</strong> with top-8 routing per token</li>
            <li style={{ marginBottom: '12px' }}><strong>Shared experts</strong> activated for all tokens to maintain common knowledge</li>
            <li style={{ marginBottom: '12px' }}><strong>Load balancing</strong> mechanisms to prevent expert collapse</li>
            <li><strong>Expert specialization</strong> across different knowledge domains and reasoning patterns</li>
          </ul>

          <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', marginTop: '40px' }}>Benchmark Performance</h2>
          
          <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '16px', marginTop: '32px' }}>Standard Benchmarks</h3>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginBottom: '32px',
            fontSize: '15px'
          }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #333', background: '#f8f9fa' }}>
                <th style={{ padding: '12px', textAlign: 'left' }}>Benchmark</th>
                <th style={{ padding: '12px', textAlign: 'center' }}>Qwen3-235B</th>
                <th style={{ padding: '12px', textAlign: 'center' }}>GPT-4o</th>
                <th style={{ padding: '12px', textAlign: 'center' }}>DeepSeek-V3</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '12px', fontWeight: 'bold' }}>MMLU</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>87.2%</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>87.2%</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>87.1%</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '12px', fontWeight: 'bold' }}>MATH-500</td>
                <td style={{ padding: '12px', textAlign: 'center', background: '#e8f5e9' }}>85.1%</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>76.6%</td>
                <td style={{ padding: '12px', textAlign: 'center', background: '#e8f5e9' }}>90.2%</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '12px', fontWeight: 'bold' }}>HumanEval</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>92.1%</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>90.2%</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>92.0%</td>
              </tr>
              <tr>
                <td style={{ padding: '12px', fontWeight: 'bold' }}>C-Eval</td>
                <td style={{ padding: '12px', textAlign: 'center', background: '#e8f5e9' }}>91.8%</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>76.0%</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>86.1%</td>
              </tr>
            </tbody>
          </table>

          <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', marginTop: '40px' }}>Cost Efficiency Analysis</h2>
          <p style={{ marginBottom: '24px' }}>
            Qwen3 positions itself as a cost-effective alternative, priced at approximately <strong>30% of GPT-4o's cost</strong> while delivering comparable or superior performance on many benchmarks.
          </p>

          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginBottom: '32px',
            fontSize: '15px'
          }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #333', background: '#f8f9fa' }}>
                <th style={{ padding: '12px', textAlign: 'left' }}>Model</th>
                <th style={{ padding: '12px', textAlign: 'right' }}>Input (per 1M)</th>
                <th style={{ padding: '12px', textAlign: 'right' }}>Output (per 1M)</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #eee', background: '#e8f5e9' }}>
                <td style={{ padding: '12px', fontWeight: 'bold' }}>Qwen3-235B</td>
                <td style={{ padding: '12px', textAlign: 'right' }}>$0.80</td>
                <td style={{ padding: '12px', textAlign: 'right' }}>$2.40</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '12px' }}>GPT-4o</td>
                <td style={{ padding: '12px', textAlign: 'right' }}>$2.50</td>
                <td style={{ padding: '12px', textAlign: 'right' }}>$10.00</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '12px' }}>DeepSeek-V3</td>
                <td style={{ padding: '12px', textAlign: 'right' }}>$0.27</td>
                <td style={{ padding: '12px', textAlign: 'right' }}>$1.10</td>
              </tr>
            </tbody>
          </table>

          <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', marginTop: '40px' }}>Conclusion</h2>
          <p style={{ marginBottom: '24px' }}>
            Qwen3 represents a pragmatic evolution in large language model design, prioritizing <strong>deployment flexibility</strong> over raw benchmark performance. Its hybrid reasoning architecture addresses real-world production concerns around cost and latency while maintaining competitive capabilities.
          </p>
          <p style={{ marginBottom: '24px' }}>
            For teams building Chinese-English bilingual applications or seeking cost-effective alternatives to GPT-4o, Qwen3 offers a compelling value proposition. The automatic reasoning mode switching is particularly valuable for applications with mixed query complexity.
          </p>
          <div style={{
            background: '#f0f7ff',
            borderLeft: '4px solid #0066cc',
            padding: '20px',
            marginTop: '32px',
            borderRadius: '0 8px 8px 0'
          }}>
            <p style={{ margin: 0, fontWeight: 'bold', fontSize: '18px' }}>
              Bottom Line: Qwen3 doesn't win every benchmark, but it wins on <strong>practical deployment economics</strong>—an increasingly important factor as AI moves from experimentation to production at scale.
            </p>
          </div>
        </article>

        {/* Author & Share */}
        <div style={{
          marginTop: '40px',
          padding: '24px',
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>Written by</p>
              <p style={{ margin: '4px 0 0 0', fontWeight: 'bold', fontSize: '16px' }}>AIN China Research Team</p>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button style={{
                padding: '10px 20px',
                background: '#0066cc',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px'
              }}>Share on X</button>
              <button style={{
                padding: '10px 20px',
                background: '#0077b5',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px'
              }}>Share on LinkedIn</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
