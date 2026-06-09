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
    <main className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5]">
      <div className="bg-[#111] border-b border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-[#a3a3a3] hover:text-[#e5e5e5] transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
          <h1 className="text-4xl font-bold mt-4 mb-2 bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            AI in China Blog
          </h1>
          <p className="text-lg text-[#737373]">
            Deep insights into China's AI revolution — trends, companies, and market intelligence
          </p>
          <BlogSearch posts={posts} />
        </div>
      </div>

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
          <Link href="/about/" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '14px' }}>About</Link>
          <Link href="/contact/" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '14px' }}>Contact</Link>
          <Link href="/privacy/" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '14px' }}>Privacy</Link>
          <Link href="/terms/" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '14px' }}>Terms</Link>
        </div>
        <p style={{ color: '#737373', fontSize: '14px' }}>© 2026 AI in China. All rights reserved.</p>
      </footer>
    </main>
  )
}
