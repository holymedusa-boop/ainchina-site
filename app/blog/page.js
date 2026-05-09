import Link from 'next/link'
import BlogSearch from './BlogSearch'

export const metadata = {
  metadataBase: new URL('https://www.ainchina.com'),
  title: 'AI in China Blog',
  description: 'Deep insights into China\'s AI revolution — trends, companies, and market intelligence',
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

const posts = allPosts.map(post => ({
  ...post,
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
          <Link href="/privacy-policy/" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '14px' }}>Privacy</Link>
          <Link href="/terms/" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '14px' }}>Terms</Link>
        </div>
        <p style={{ color: '#737373', fontSize: '14px' }}>© 2026 AI in China. All rights reserved.</p>
      </footer>
    </main>
  )
}
