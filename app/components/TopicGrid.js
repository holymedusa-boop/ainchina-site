'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { topicOf, TOPICS, TOPIC_COLORS } from '../../lib/topics'

export default function TopicGrid({ posts }) {
  const [topic, setTopic] = useState('All')

  const topics = useMemo(() => {
    const c = {}
    for (const p of posts) {
      const t = topicOf(p)
      c[t] = (c[t] || 0) + 1
    }
    // Canonical order, only topics that exist in the archive
    return TOPICS.filter(t => c[t] > 0).map(t => ({ name: t, count: c[t] }))
  }, [posts])

  const visible = useMemo(
    () => (topic === 'All' ? posts.slice(0, 9) : posts.filter(p => topicOf(p) === topic).slice(0, 9)),
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
        <button
          className={`chip ${topic === 'All' ? 'active' : ''}`}
          onClick={() => setTopic('All')}
        >
          All
          <sup>{posts.length}</sup>
        </button>
        {topics.map(t => (
          <button
            key={t.name}
            className={`chip ${topic === t.name ? 'active' : ''}`}
            onClick={() => setTopic(t.name)}
          >
            {t.name}
            <sup>{t.count}</sup>
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '24px'
      }}>
        {visible.map(post => {
          const t = topicOf(post)
          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}/`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <article className="topic-card" style={{ borderTopColor: TOPIC_COLORS[t] }}>
                {post.image && (
                  <img src={post.image} alt={post.title} loading="lazy" />
                )}
                <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div className="mono" style={{
                    color: TOPIC_COLORS[t],
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    marginBottom: '10px'
                  }}>
                    {t}
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
          )
        })}
      </div>

      {visible.length === 0 && (
        <p className="mono" style={{ color: 'var(--muted-2)', fontSize: '13px' }}>
          No stories in this topic yet.
        </p>
      )}
    </div>
  )
}
