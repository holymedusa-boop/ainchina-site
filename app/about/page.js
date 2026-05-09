import Link from 'next/link'

export const metadata = {
  metadataBase: new URL('https://www.ainchina.com'),
  title: 'About',
  description: 'Learn about AI in China, the editorial team, and how we track the Chinese AI ecosystem.',
  alternates: {
    canonical: '/about/',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#e5e5e5' }}>
      {/* Header */}
      <header style={{ 
        borderBottom: '1px solid #1a1a1a',
        position: 'sticky',
        top: 0,
        backgroundColor: 'rgba(10, 10, 10, 0.9)',
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
              <Link href="/blog/" style={{ 
                color: '#a3a3a3', 
                textDecoration: 'none',
                fontSize: '15px'
              }}>
                Blog
              </Link>
              <Link href="/about/" style={{ 
                color: '#e5e5e5', 
                textDecoration: 'none',
                fontSize: '15px'
              }}>
                About
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Content */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '32px' }}>About AI in China</h1>
          
          <p style={{ fontSize: '18px', color: '#a3a3a3', lineHeight: 1.7, marginBottom: '24px' }}>
            AI in China tracks the most significant artificial intelligence companies, products, 
            and trends emerging from China. The goal is straightforward: give global investors, builders, 
            and researchers useful, timely intelligence on an ecosystem that changes faster than most people realize.
          </p>
          
          <p style={{ fontSize: '18px', color: '#a3a3a3', lineHeight: 1.7, marginBottom: '24px' }}>
            From foundational models like DeepSeek and Kimi to application-layer innovations 
            in video generation, education, and productivity tools, the coverage spans the full spectrum 
            of what is actually shipping and generating revenue in China right now.
          </p>

          <h2 style={{ fontSize: '28px', fontWeight: 600, marginTop: '48px', marginBottom: '20px' }}>Editor</h2>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '32px' }}>
            <div style={{ 
              width: '64px', 
              height: '64px', 
              borderRadius: '50%', 
              backgroundColor: '#22d3ee',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              fontWeight: 700,
              color: '#0a0a0a',
              flexShrink: 0
            }}>M</div>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, margin: '0 0 8px', color: '#f5f5f5' }}>Meeeeed</h3>
              <p style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.6, margin: 0 }}>
                Meeeeed is the editor and primary writer behind AI in China. Before launching this site, 
                he spent years tracking Chinese tech companies as a private investor and analyst, 
                gradually realizing that most Western coverage of China's AI scene was either outdated, 
                oversimplified, or simply wrong.
              </p>
              <p style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.6, marginTop: '12px' }}>
                He writes every article on this site. The opinions are his own, and he stands by them.
              </p>
            </div>
          </div>

          <h2 style={{ fontSize: '28px', fontWeight: 600, marginTop: '48px', marginBottom: '20px' }}>What We Track</h2>
          
          <ul style={{ fontSize: '17px', color: '#a3a3a3', lineHeight: 1.8, paddingLeft: '24px' }}>
            <li>Foundation model companies and their real technical capabilities, not just press releases</li>
            <li>Application-layer AI products and hard user metrics</li>
            <li>Funding rounds, valuations, and who is actually writing the checks</li>
            <li>Regulatory shifts and how they change the competitive landscape</li>
            <li>How Chinese models stack up against global alternatives in production environments</li>
          </ul>

          <h2 style={{ fontSize: '28px', fontWeight: 600, marginTop: '48px', marginBottom: '20px' }}>Editorial Policy</h2>
          
          <p style={{ fontSize: '18px', color: '#a3a3a3', lineHeight: 1.7, marginBottom: '16px' }}>
            <strong style={{ color: '#f5f5f5' }}>Independence.</strong> This site accepts no sponsored content, 
            no pay-for-placement deals, and no undisclosed affiliate relationships. If we mention a product, 
            it is because we think it is worth discussing, not because someone paid us to mention it.
          </p>

          <p style={{ fontSize: '18px', color: '#a3a3a3', lineHeight: 1.7, marginBottom: '16px' }}>
            <strong style={{ color: '#f5f5f5' }}>Sources.</strong> We rely on primary sources: 
            company filings, GitHub repositories, API documentation, direct product testing, 
            and interviews with founders and engineers. When we cite a secondary source, we link to it.
          </p>

          <p style={{ fontSize: '18px', color: '#a3a3a3', lineHeight: 1.7, marginBottom: '16px' }}>
            <strong style={{ color: '#f5f5f5' }}>Corrections.</strong> If we get something wrong, 
            we fix it. Major factual errors are corrected in the article with a note explaining what changed. 
            Email corrections to <a href="mailto:contact@ainchina.com" style={{ color: '#22d3ee', textDecoration: 'none' }}>contact@ainchina.com</a>.
          </p>

          <p style={{ fontSize: '18px', color: '#a3a3a3', lineHeight: 1.7, marginBottom: '24px' }}>
            <strong style={{ color: '#f5f5f5' }}>Update cadence.</strong> New articles are published daily. 
            Existing articles are updated when significant new information emerges.
          </p>

          <h2 style={{ fontSize: '28px', fontWeight: 600, marginTop: '48px', marginBottom: '20px' }}>Contact</h2>
          
          <p style={{ fontSize: '18px', color: '#a3a3a3', lineHeight: 1.7 }}>
            For inquiries, corrections, or just to argue about whether DeepSeek V4 is actually any good, 
            reach out at{' '}
            <a href="mailto:contact@ainchina.com" style={{ color: '#22d3ee', textDecoration: 'none' }}>
              contact@ainchina.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        padding: '40px 24px', 
        borderTop: '1px solid #1a1a1a',
        textAlign: 'center'
      }}>
        <div style={{ 
          maxWidth: '800px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          gap: '24px',
          flexWrap: 'wrap',
          marginBottom: '24px'
        }}>
          <Link href="/" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '14px' }}>Home</Link>
          <Link href="/blog/" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '14px' }}>Blog</Link>
          <Link href="/contact/" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '14px' }}>Contact</Link>
          <Link href="/privacy-policy/" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '14px' }}>Privacy</Link>
          <Link href="/terms/" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '14px' }}>Terms</Link>
        </div>
        <p style={{ color: '#737373', fontSize: '14px' }}>© 2026 AI in China. All rights reserved.</p>
      </footer>
    </div>
  )
}