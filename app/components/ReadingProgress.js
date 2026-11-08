'use client'

import { useEffect, useState } from 'react'

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf = null
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = null
        const doc = document.documentElement
        const total = doc.scrollHeight - window.innerHeight
        const p = total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0
        setProgress(p)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="progress-track" aria-hidden="true">
      <div
        className="progress-bar"
        style={{ transform: `scaleX(${progress})`, width: '100%' }}
      />
    </div>
  )
}
