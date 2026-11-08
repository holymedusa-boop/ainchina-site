'use client'

import { useState } from 'react'
import Link from 'next/link'
import { topicOf, TOPIC_COLORS } from '../../lib/topics'

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
      <div className="mt-8" style={{ maxWidth: '420px' }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="SEARCH ARTICLES…"
          className="mono"
          style={{
            width: '100%',
            padding: '12px 16px',
            background: 'transparent',
            border: '1px solid var(--line)',
            borderRadius: '10px',
            color: 'var(--fg)',
            fontSize: '12px',
            letterSpacing: '.08em',
            outline: 'none',
            transition: 'border-color .2s'
          }}
          onFocus={(e) => { e.target.style.borderColor = 'var(--accent)' }}
          onBlur={(e) => { e.target.style.borderColor = 'var(--line)' }}
        />
        {query.trim() && (
          <p className="mono" style={{ marginTop: '10px', fontSize: '11px', color: 'var(--muted-2)' }}>
            {filtered.length} RESULT{filtered.length !== 1 ? 'S' : ''} FOR “{query.toUpperCase()}”
          </p>
        )}
      </div>

      <div className="wrap" style={{ paddingTop: '48px', paddingBottom: '24px' }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <p style={{ fontSize: '17px', color: 'var(--muted-2)' }}>No articles match your search.</p>
            <button
              onClick={() => setQuery('')}
              className="mono"
              style={{
                marginTop: '16px',
                padding: '10px 20px',
                background: 'var(--accent)',
                border: 'none',
                borderRadius: '10px',
                color: '#fff',
                fontSize: '12px',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              CLEAR SEARCH
            </button>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="group"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'var(--card)',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--r-card)',
                  overflow: 'hidden',
                  transition: 'transform .25s ease, border-color .25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.borderColor = 'rgba(255,138,92,.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'var(--line)'
                }}
              >
                {post.image && (
                  <div style={{ width: '100%', height: '190px', overflow: 'hidden', borderBottom: '1px solid var(--line)' }}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="group-hover:scale-105 transition-transform duration-300"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      loading="lazy"
                    />
                  </div>
                )}
                <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span
                    className="mono"
                    style={{
                      display: 'inline-block',
                      color: TOPIC_COLORS[topicOf(post)],
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '.08em',
                      textTransform: 'uppercase',
                      marginBottom: '12px'
                    }}
                  >
                    {topicOf(post)}
                  </span>
                  <h2
                    className="group-hover:text-[var(--accent)] transition-colors"
                    style={{
                      fontSize: '19px',
                      fontWeight: 800,
                      lineHeight: 1.25,
                      letterSpacing: '-0.015em',
                      color: 'var(--fg)',
                      margin: '0 0 12px',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {post.title}
                  </h2>
                  <p
                    style={{
                      color: 'var(--muted-2)',
                      fontSize: '14px',
                      lineHeight: 1.6,
                      margin: '0 0 18px',
                      flex: 1,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {post.excerpt}
                  </p>
                  <div
                    className="mono"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: '11px',
                      color: 'var(--muted-2)',
                      marginTop: 'auto',
                      paddingTop: '14px',
                      borderTop: '1px solid var(--line)'
                    }}
                  >
                    <span>{post.date}</span>
                    <span style={{ margin: '0 10px', color: 'var(--accent)' }}>·</span>
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
