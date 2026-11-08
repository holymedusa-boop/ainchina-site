'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

const CAT_HUES = {
  'AI Hardware': 'var(--cat-chips)',
  'AI Infrastructure': 'var(--cat-compute)',
  'AI Robotics': 'var(--cat-robotics)',
  'AI Policy': 'var(--fg)',
  'AI Business': 'var(--cat-models)',
  'AI Industry': 'var(--cat-models)',
}

function catColor(cat) {
  return CAT_HUES[cat] || 'var(--cat-models)'
}

export default function TopicGrid({ posts }) {
  const [topic, setTopic] = useState('All')

  const counts = useMemo(() => {
    const c = {}
    for (const p of posts) c[p.category] = (c[p.category] || 0) + 1
    return c
  }, [posts])

  const topics = useMemo(() => {
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1])
    return ['All', ...sorted.slice(0, 7).map(([name]) => name)]
  }, [counts])

  const visible = useMemo(
    () => (topic === 'All' ? posts.slice(0, 9) : posts.filter(p => p.category === topic).slice(0, 9)),
    [topic, posts]
  )

  return (
    <div>
      {/* Chips */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        marginBottom: '40px'
      }}>
        {topics.map(t => (
          <button
            key={t}
            className={`chip ${topic === t ? 'active' : ''}`}
            onClick={() => setTopic(t)}
          >
            {t === 'All' ? 'All' : t.replace(/^AI\s*/, '')}
            <sup>{t === 'All' ? posts.length : counts[t] || 0}</sup>
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '24px'
      }}>
        {visible.map(post => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}/`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <article className="topic-card" style={{ borderTopColor: catColor(post.category) }}>
              {post.image && (
                <img src={post.image} alt={post.title} loading="lazy" />
              )}
              <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div className="mono" style={{
                  color: 'var(--muted)',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  marginBottom: '10px'
                }}>
                  {post.category}
                </div>
                <h3 className="hl" style={{
                  fontSize: '20px',
                  fontWeight: 800,
                  lineHeight: 1.18,
                  margin: '0 0 10px',
                  letterSpacing: '-0.02em'
                }}>
                  {post.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: 'var(--muted)',
                  lineHeight: 1.55,
                  margin: '0 0 16px',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {post.excerpt}
                </p>
                <div className="mono" style={{
                  marginTop: 'auto',
                  color: 'var(--muted-2)',
                  display: 'flex',
                  gap: '12px'
                }}>
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}
