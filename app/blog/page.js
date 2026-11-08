import Link from 'next/link'
import BlogSearch from './BlogSearch'

// Force rebuild: 2026-06-03-v2

export const metadata = {
  metadataBase: new URL('https://www.ainchina.com'),
  title: 'AI in China Blog',
  description: 'Deep insights into China\'s AI revolution — trends, companies, and market intelligence',
  openGraph: {
    title: 'AI in China Blog',
    description: 'Deep insights into China\'s AI revolution — trends, companies, and market intelligence',
    url: 'https://www.ainchina.com/blog/',
    siteName: 'AI in China',
    type: 'website',
    images: [{
      url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
      width: 1200,
      height: 600,
      alt: 'AI in China Blog',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI in China Blog',
    description: 'Deep insights into China\'s AI revolution — trends, companies, and market intelligence',
    images: ['https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop'],
  },
  alternates: {
    canonical: '/blog/',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const { allPosts } = require('../../lib/posts-meta')

function formatDate(isoDate) {
  const d = new Date(isoDate + 'T00:00:00')
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

// Fallback excerpts for posts missing them
const fallbackExcerpts = {
  'china-ai-agent-era-140-trillion-tokens-2026': 'On June 1, 2026, three Chinese ministries jointly issued the most comprehensive national policy framework for AI agent governance to date. With 140 trillion daily tokens and DeepSeek\'s 75% price cut, the global AI landscape is being reshaped.',
  'deepseek-7b-mega-round-china-ai-capital-shift-2026': 'DeepSeek has raised $7.4B in what may be the largest private AI funding round in history. The secretive Chinese lab is going all-in on capital, building a 100,000-GPU cluster and expanding globally at unprecedented scale.',
  'china-humanoid-robot-tsunami-2026-50k-units-global-dominance': 'China\'s humanoid robot industry is experiencing explosive growth with 50,000 units produced and 700% year-over-year expansion. 2026 marks the year humanoid robots transition from laboratory curiosity to industrial reality.'
}

const posts = allPosts.map(post => ({
  ...post,
  excerpt: post.excerpt || fallbackExcerpts[post.slug] || '',
  date: formatDate(post.date)
}))

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      <div className="border-b" style={{ borderColor: 'var(--line)' }}>
        <div className="wrap" style={{ paddingTop: '48px', paddingBottom: '32px' }}>
          <div className="kicker" style={{ marginBottom: '16px' }}>
            Analysis
          </div>
          <h1 className="font-display" style={{
            fontSize: 'clamp(36px, 5vw, 60px)',
            fontWeight: 900,
            lineHeight: 1.02,
            letterSpacing: '-0.04em',
            margin: '0 0 16px'
          }}>
            Latest Insights
          </h1>
          <p className="lede" style={{ maxWidth: '620px' }}>
            Deep, data-driven reporting on China's AI revolution — companies, capital, chips, and the policies reshaping the global technology order.
          </p>
          <BlogSearch posts={posts} />
        </div>
      </div>

      <footer style={{
        padding: '48px 24px',
        borderTop: '1px solid var(--line)',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto 24px',
          display: 'flex',
          justifyContent: 'center',
          gap: '24px',
          flexWrap: 'wrap'
        }}>
          <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '14px' }}>Home</Link>
          <Link href="/blog/" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '14px' }}>Blog</Link>
          <Link href="/about/" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '14px' }}>About</Link>
          <Link href="/contact/" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '14px' }}>Contact</Link>
          <Link href="/privacy/" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '14px' }}>Privacy</Link>
          <Link href="/terms/" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '14px' }}>Terms</Link>
        </div>
        <p style={{ color: 'var(--muted-2)', fontSize: '14px' }}>© 2026 AI in China. All rights reserved.</p>
      </footer>
    </main>
  )
}
