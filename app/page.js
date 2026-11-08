import Link from 'next/link'
import TopicGrid from './components/TopicGrid'

// Auto-import posts from shared metadata
const { allPosts } = require('../lib/posts-meta')

// Helper to format ISO date (2026-04-21) → "April 21, 2026"
function formatDate(isoDate) {
  const [year, month, day] = isoDate.split('-').map(Number)
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December']
  return `${monthNames[month - 1]} ${day}, ${year}`
}

const fallbackExcerpts = {
  'china-ai-agent-era-140-trillion-tokens-2026': 'On June 1, 2026, three Chinese ministries jointly issued the most comprehensive national policy framework for AI agent governance to date. With 140 trillion daily tokens and DeepSeek\'s 75% price cut, the global AI landscape is being reshaped.',
  'deepseek-7b-mega-round-china-ai-capital-shift-2026': 'DeepSeek has raised $7.4B in what may be the largest private AI funding round in history. The secretive Chinese lab is going all-in on capital, building a 100,000-GPU cluster and expanding globally at unprecedented scale.',
  'china-humanoid-robot-tsunami-2026-50k-units-global-dominance': 'China\'s humanoid robot industry is experiencing explosive growth with 50,000 units produced and 700% year-over-year expansion. 2026 marks the year humanoid robots transition from laboratory curiosity to industrial reality.'
}

const posts = allPosts.slice(0, 9).map(post => ({
  ...post,
  excerpt: post.excerpt || fallbackExcerpts[post.slug] || '',
  date: formatDate(post.date)
}))

const [lead, ...rest] = posts
const secondaries = rest.slice(0, 2)
const railPosts = posts.slice(0, 8)
const gridPosts = allPosts.slice(0, 60).map(post => ({
  ...post,
  excerpt: post.excerpt || fallbackExcerpts[post.slug] || '',
  date: formatDate(post.date)
}))

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--fg)' }}>
      {/* Header */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(14,14,14,.92)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--line)'
      }}>
        <div className="wrap" style={{
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Link href="/" style={{
            fontSize: '24px',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            textDecoration: 'none',
            color: 'var(--fg)'
          }}>
            ain<span style={{ color: 'var(--accent)' }}>china</span>
          </Link>

          <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            <Link href="/blog/" className="nav-link" style={{
              color: 'var(--muted)',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 600
            }}>
              Analysis
            </Link>
            <Link href="/about/" style={{
              color: 'var(--muted)',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 600
            }}>
              About
            </Link>
            <Link href="/contact/" style={{
              color: 'var(--muted)',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 600
            }}>
              Contact
            </Link>
            <a href="#newsletter" className="btn-accent" style={{ fontSize: '13px', padding: '8px 18px' }}>
              Subscribe
            </a>
          </nav>
        </div>
      </header>

      {/* Masthead */}
      <section className="wrap" style={{ paddingTop: '72px', paddingBottom: '36px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 320px',
          gap: '40px',
          alignItems: 'end'
        }}
        className="masthead-grid"
        >
          <h1 style={{
            fontSize: 'clamp(44px, 9vw, 132px)',
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: '-0.055em',
            margin: 0
          }}>
            The Rise of<br />Chinese AI
          </h1>
          <p style={{
            fontSize: '16px',
            color: 'var(--muted)',
            lineHeight: 1.6,
            margin: 0,
            paddingBottom: '10px'
          }}>
            Independent analysis of Chinese AI companies, models, and market
            intelligence — for global investors and builders. Deep dives on
            DeepSeek, Alibaba, Huawei, ByteDance, and the stack reshaping
            global technology.
          </p>
        </div>
        <hr className="rule" style={{ marginTop: '32px' }} />
      </section>

      {/* Front page */}
      <section className="wrap" style={{ paddingBottom: '88px' }}>
        <div className="front-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.55fr 1fr 300px',
          gap: '31px'
        }}>
          {/* Lead story */}
          <Link href={`/blog/${lead.slug}/`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <article>
              <div style={{ position: 'relative', marginBottom: '18px' }}>
                {lead.image && (
                  <img
                    src={lead.image}
                    alt={lead.title}
                    style={{ width: '100%', aspectRatio: '3/2', objectFit: 'cover', borderRadius: 'var(--r-img)' }}
                  />
                )}
                <span style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  background: 'var(--accent)',
                  color: 'var(--on-accent)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '.08em',
                  padding: '6px 12px',
                  borderRadius: 'var(--r-pill)'
                }}>
                  TODAY&apos;S LEAD
                </span>
              </div>
              <div className="mono" style={{ color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '10px' }}>
                {lead.category} · {lead.date}
              </div>
              <h2 className="hl" style={{
                fontSize: 'clamp(26px, 3.2vw, 40px)',
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-0.035em',
                margin: '0 0 14px'
              }}>
                {lead.title}
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>
                {lead.excerpt}
              </p>
            </article>
          </Link>

          {/* Secondary stories */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {secondaries.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}/`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <article>
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.title}
                      style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', borderRadius: 'var(--r-img)', marginBottom: '12px' }}
                      loading="lazy"
                    />
                  )}
                  <div className="mono" style={{ color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '8px' }}>
                    {post.category} · {post.date}
                  </div>
                  <h3 className="hl" style={{
                    fontSize: '20px',
                    fontWeight: 800,
                    lineHeight: 1.18,
                    letterSpacing: '-0.02em',
                    margin: 0
                  }}>
                    {post.title}
                  </h3>
                </article>
              </Link>
            ))}
          </div>

          {/* Right rail */}
          <aside>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '4px' }}>
              <h3 className="mono" style={{
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '.08em',
                textTransform: 'uppercase',
                margin: 0
              }}>
                Latest Analysis
              </h3>
              <Link href="/blog/" className="mono" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '11px' }}>
                All →
              </Link>
            </div>
            <hr className="rule" style={{ marginBottom: '20px' }} />
            <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {railPosts.map((post, i) => (
                <li key={post.slug} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <span className="rail-num">{i + 1}</span>
                  <div>
                    <div className="mono" style={{ color: 'var(--muted-2)', textTransform: 'uppercase', fontSize: '10px', fontWeight: 700, marginBottom: '3px' }}>
                      {post.category}
                    </div>
                    <Link href={`/blog/${post.slug}/`} className="hl" style={{
                      fontSize: '14.5px',
                      fontWeight: 700,
                      lineHeight: 1.3,
                      textDecoration: 'none',
                      color: 'var(--fg)'
                    }}>
                      {post.title}
                    </Link>
                  </div>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </section>

      {/* By topic */}
      <section style={{ background: 'var(--surface)', padding: '88px 0' }}>
        <div className="wrap">
          <h2 style={{
            fontSize: 'clamp(32px, 4.6vw, 56px)',
            fontWeight: 900,
            letterSpacing: '-0.045em',
            lineHeight: 1,
            margin: '0 0 12px'
          }}>
            By topic
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '16px', margin: '0 0 36px' }}>
            Browse the archive across the beats we cover — from frontier models to
            chip sovereignty to the policy shaping it all.
          </p>
          <TopicGrid posts={gridPosts} />
        </div>
      </section>

      {/* Newsletter band */}
      <section id="newsletter" className="band" style={{ padding: '88px 0' }}>
        <div className="wrap" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          alignItems: 'center'
        }}
        className="band-grid"
        >
          <h2 style={{
            fontSize: 'clamp(36px, 6vw, 72px)',
            fontWeight: 900,
            letterSpacing: '-0.045em',
            lineHeight: .95,
            margin: 0
          }}>
            The weekly<br />briefing
          </h2>
          <div>
            <p style={{ fontSize: '17px', lineHeight: 1.6, margin: '0 0 24px', opacity: .95 }}>
              One email a week — the funding rounds, model releases, and policy
              moves that matter in Chinese AI. No noise.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '420px' }}>
              <a
                href="https://x.com/AInChina5"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-invert"
                style={{ textAlign: 'center' }}
              >
                Follow @AInChina5 on X →
              </a>
              <span className="mono" style={{ fontSize: '11px', opacity: .8 }}>
                Analysis drops daily · Briefing summaries weekly
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '48px 0', borderTop: '1px solid var(--line)' }}>
        <div className="wrap" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <span style={{ fontSize: '20px', fontWeight: 900, letterSpacing: '-0.04em' }}>
            ain<span style={{ color: 'var(--accent)' }}>china</span>
          </span>
          <nav style={{ display: 'flex', gap: '22px', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '13px' }}>Home</Link>
            <Link href="/blog/" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '13px' }}>Analysis</Link>
            <Link href="/about/" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '13px' }}>About</Link>
            <Link href="/contact/" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '13px' }}>Contact</Link>
            <Link href="/privacy/" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '13px' }}>Privacy</Link>
            <Link href="/terms/" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '13px' }}>Terms</Link>
          </nav>
          <p className="mono" style={{ color: 'var(--muted-2)', fontSize: '12px', margin: 0 }}>
            © 2026 · Independent research. Not investment advice.
          </p>
        </div>
      </footer>

      {/* Responsive tweaks (design-system media queries, kept inline-scoped) */}
      <style>{`
        @media (max-width: 1000px) {
          .front-grid { grid-template-columns: 1fr 1fr !important; }
          .front-grid aside { grid-column: 1 / -1; }
        }
        @media (max-width: 860px) {
          .masthead-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
          .band-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          header nav a:not(.btn-accent) { display: none; }
        }
        @media (max-width: 560px) {
          .front-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
