import Link from 'next/link'

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

// Auto-import posts from shared metadata
const { allPosts } = require('../../lib/posts-meta')

// Helper to format ISO date (2026-04-21) → "April 21, 2026"
function formatDate(isoDate) {
  const d = new Date(isoDate + 'T00:00:00')
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

const posts = allPosts.map(post => ({
  ...post,
  date: formatDate(post.date)
}))

// Categories with their colors for dark theme
const categories = {
  'AI Trends': 'bg-blue-900/30 text-blue-400 border border-blue-800/50',
  'AI Infrastructure': 'bg-purple-900/30 text-purple-400 border border-purple-800/50',
  'AI Applications': 'bg-green-900/30 text-green-400 border border-green-800/50',
  'AI Chatbots': 'bg-orange-900/30 text-orange-400 border border-orange-800/50',
  'Market Intelligence': 'bg-pink-900/30 text-pink-400 border border-pink-800/50',
  'Technical Analysis': 'bg-indigo-900/30 text-indigo-400 border border-indigo-800/50',
  'AI Video': 'bg-red-900/30 text-red-400 border border-red-800/50'
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5]">
      {/* Header */}
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
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}/`}
              className="group bg-[#111] border border-[#1a1a1a] rounded-lg hover:border-[#333] hover:shadow-xl hover:shadow-black/50 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="p-6 flex-1 flex flex-col">
                {/* Category Badge */}
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 w-fit ${categories[post.category]}`}>
                  {post.category}
                </span>
                
                {/* Title */}
                <h2 className="text-xl font-bold text-[#e5e5e5] mb-3 group-hover:text-blue-400 transition-colors" style={{display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden'}}>
                  {post.title}
                </h2>
                
                {/* Excerpt */}
                <p className="text-[#737373] mb-4 flex-1" style={{display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden'}}>
                  {post.excerpt}
                </p>
                
                {/* Meta */}
                <div className="flex items-center text-sm text-[#525252] mt-auto pt-4 border-t border-[#1a1a1a]">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
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