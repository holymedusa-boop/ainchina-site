import Link from 'next/link'

const posts = [
  {
    slug: 'china-embodied-intelligence-robot-marathon-2026',
    title: "China's Embodied Intelligence Revolution: When Robots Outrun Humans — April 2026",
    category: 'AI Trends',
    excerpt: "Honor's 'Lightning' robot breaks human half-marathon world record in 50:26. TARS raises $455M. 102 teams compete as China's embodied intelligence sector hits an inflection point.",
    date: 'April 21, 2026',
    readTime: '18 min read'
  },
  {
    slug: 'china-ai-april-infrastructure-2026',
    title: "China's AI Revolution: Education Reform, National Standards, and Ecosystem Breakthroughs in April 2026",
    category: 'AI Trends',
    excerpt: "Shanghai Jiao Tong University launches 'AI Ten Initiatives,' China establishes first humanoid robot national standards, and domestic AI models achieve parity with DeepSeek-R1.",
    date: 'April 20, 2026',
    readTime: '16 min read'
  },
  {
    slug: 'china-ai-april-revolution-2026',
    title: "China's AI April Revolution: Humanoid Robots Race, Multimodal Models Explode, and 2 Billion AI Videos Reshape Global Content",
    category: 'AI Trends',
    excerpt: "April 2025 marks a watershed moment for China's AI industry. From the world's first humanoid robot half-marathon to DeepSeek's rumored V4 launch and ByteDance's Doubao 2.0 release.",
    date: 'April 19, 2026',
    readTime: '17 min read'
  },
  {
    slug: 'china-ai-avatar-revolution-2026',
    title: "China's AI Avatar Revolution: How 410 Million Views Signal a Global Content Creation Shift",
    category: 'AI Applications',
    excerpt: "Chinese AI avatar tools are experiencing explosive growth with 410 million topic views and 200% weekly growth. From HeyGen to domestic platforms like Silicon Intelligence and ShanJian.",
    date: 'April 18, 2026',
    readTime: '16 min read'
  },
  {
    slug: 'stanford-ai-index-2026-china-rise',
    title: "Stanford AI Index 2026: China's 'Parallel Run' Era Has Arrived",
    category: 'AI Trends',
    excerpt: "Stanford HAI's 423-page AI Index Report 2026 reveals a historic turning point: the China-US AI gap has 'effectively closed' to just 2.7%. Alibaba ranks #3 globally.",
    date: 'April 17, 2026',
    readTime: '16 min read'
  },
  {
    slug: 'alibaba-token-hub-100b-gambit',
    title: "Alibaba's $100B Token Gambit: Inside the Alibaba Token Hub Revolution Reshaping China's AI Economy",
    category: 'AI Trends',
    excerpt: "Deep dive into Alibaba's strategic pivot with ATH: How the tech giant is betting its future on Token economics, targeting $100B annual revenue from cloud and AI by 2031.",
    date: 'April 16, 2026',
    readTime: '17 min read'
  }
]

const stats = [
  { value: '103+', label: 'Companies Tracked' },
  { value: '$15.2B', label: 'Total Funding' },
  { value: '500M+', label: 'Global Users' },
  { value: '24/7', label: 'Market Updates' }
]

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#e5e5e5' }}>
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

      {/* Hero */}
      <section style={{ padding: '100px 24px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            backgroundColor: 'rgba(34, 211, 238, 0.1)',
            border: '1px solid rgba(34, 211, 238, 0.3)',
            borderRadius: '9999px',
            color: '#22d3ee',
            fontSize: '14px',
            marginBottom: '32px'
          }}>
            <span style={{ 
              width: '8px', 
              height: '8px', 
              backgroundColor: '#22d3ee', 
              borderRadius: '50%',
              display: 'inline-block'
            }}></span>
            Tracking 103+ Chinese AI Companies
          </div>
          
          <h1 style={{ 
            fontSize: 'clamp(40px, 8vw, 64px)', 
            fontWeight: 700, 
            marginBottom: '24px',
            lineHeight: 1.1
          }}>
            The Rise of{' '}
            <span style={{
              background: 'linear-gradient(135deg, #22d3ee, #3b82f6, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Chinese AI
            </span>
          </h1>
          
          <p style={{ 
            fontSize: '20px', 
            color: '#a3a3a3', 
            marginBottom: '40px',
            lineHeight: 1.6
          }}>
            Comprehensive analysis of Chinese AI companies, products, and market intelligence 
            for global investors and builders. Technical deep dives, funding data, and competitive intelligence.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '64px',
        flexWrap: 'wrap',
        padding: '40px 24px',
        borderTop: '1px solid #1a1a1a',
        borderBottom: '1px solid #1a1a1a'
      }}>
        {stats.map((stat, i) => (
          <div key={i} style={{ textAlign: 'center', minWidth: '140px' }}>
            <div style={{ fontSize: '40px', fontWeight: 700, color: '#22d3ee' }}>
              {stat.value}
            </div>
            <div style={{ fontSize: '14px', color: '#737373', marginTop: '4px' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </section>

      {/* Latest Posts */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '48px'
          }}>
            <h2 style={{ fontSize: '28px', fontWeight: 600 }}>Latest Deep Dives</h2>
            
            <Link 
              href="/blog" 
              style={{ 
                color: '#22d3ee', 
                textDecoration: 'none',
                fontSize: '14px'
              }}
            >
              View all →
            </Link>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '28px'
          }}>
            {posts.map((post) => (
              <article key={post.slug} style={{ 
                backgroundColor: '#111', 
                border: '1px solid #1a1a1a',
                borderRadius: '12px',
                padding: '28px',
                transition: 'all 0.2s',
                cursor: 'pointer',
                ':hover': {
                  borderColor: '#22d3ee'
                }
              }}
              >
                <div style={{ 
                  fontSize: '11px', 
                  fontWeight: 600, 
                  color: '#22d3ee', 
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  {post.category}
                </div>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <h3 style={{ 
                    fontSize: '20px', 
                    fontWeight: 600, 
                    marginBottom: '12px',
                    lineHeight: 1.4
                  }}>
                    {post.title}
                  </h3>
                </Link>
                
                <p style={{ fontSize: '15px', color: '#a3a3a3', lineHeight: 1.6, marginBottom: '16px' }}>
                  {post.excerpt}
                </p>
                
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  fontSize: '13px',
                  color: '#737373'
                }}>
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ padding: '60px 24px', borderTop: '1px solid #1a1a1a' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '12px' }}>Stay Updated</h3>
          <p style={{ fontSize: '16px', color: '#a3a3a3', marginBottom: '24px' }}>
            Get weekly analysis on Chinese AI companies, funding rounds, and market trends.
          </p>
          
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <a 
              href="https://twitter.com/ainchina" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '12px 24px',
                backgroundColor: '#1a1a1a',
                border: '1px solid #2a2a2a',
                borderRadius: '8px',
                color: '#e5e5e5',
                textDecoration: 'none',
                fontSize: '14px'
              }}
            >
              Follow on X/Twitter
            </a>
          </div>
        </div>
      </section>

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