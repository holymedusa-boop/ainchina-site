'use client'

import { useState } from 'react'
import Link from 'next/link'

const categories = {
  'AI Trends': 'bg-blue-900/30 text-blue-400 border border-blue-800/50',
  'AI Infrastructure': 'bg-purple-900/30 text-purple-400 border border-purple-800/50',
  'AI Applications': 'bg-green-900/30 text-green-400 border border-green-800/50',
  'AI Chatbots': 'bg-orange-900/30 text-orange-400 border border-orange-800/50',
  'Market Intelligence': 'bg-pink-900/30 text-pink-400 border border-pink-800/50',
  'Technical Analysis': 'bg-indigo-900/30 text-indigo-400 border border-indigo-800/50',
  'AI Video': 'bg-red-900/30 text-red-400 border border-red-800/50'
}

export default function BlogSearch({ posts }) {
  const [query, setQuery] = useState('')

  const filtered = query.trim()
    ? posts.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      )
    : posts

  return (
    <>
      <div className="mt-6 max-w-lg">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search articles..."
          className="w-full px-4 py-3 bg-[#111] border border-[#2a2a2a] rounded-lg text-[#e5e5e5] placeholder-[#525252] focus:outline-none focus:border-[#22d3ee] transition-colors"
          style={{ fontSize: '15px' }}
        />
        {query.trim() && (
          <p className="mt-2 text-sm text-[#525252]">
            {filtered.length} result{filtered.length !== 1 ? 's' : ''} for "{query}"
          </p>
        )}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg text-[#737373]">No articles match your search.</p>
            <button
              onClick={() => setQuery('')}
              className="mt-4 px-4 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-[#a3a3a3] hover:text-[#e5e5e5] transition-colors"
            >
              Clear search
            </button>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="group bg-[#111] border border-[#1a1a1a] rounded-lg hover:border-[#333] hover:shadow-xl hover:shadow-black/50 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="p-6 flex-1 flex flex-col">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 w-fit ${categories[post.category]}`}>
                    {post.category}
                  </span>
                  <h2 className="text-xl font-bold text-[#e5e5e5] mb-3 group-hover:text-blue-400 transition-colors" style={{display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden'}}>
                    {post.title}
                  </h2>
                  <p className="text-[#737373] mb-4 flex-1" style={{display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden'}}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-[#525252] mt-auto pt-4 border-t border-[#1a1a1a]">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
