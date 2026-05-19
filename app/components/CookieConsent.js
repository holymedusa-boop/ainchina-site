'use client'

import { useState, useEffect } from 'react'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('cookie-consent')
    if (!saved) {
      setVisible(true)
    } else {
      const consent = JSON.parse(saved)
      if (consent.ads) {
        loadAdSense()
      }
      updateGA4Consent(consent)
    }
  }, [])

  const loadAdSense = () => {
    if (typeof window === 'undefined') return
    if (document.querySelector('script[data-adsense-loaded]')) return

    const script = document.createElement('script')
    script.async = true
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2386931187050793'
    script.crossOrigin = 'anonymous'
    script.setAttribute('data-adsense-loaded', 'true')
    document.head.appendChild(script)
  }

  const updateGA4Consent = (consent) => {
    if (typeof window === 'undefined' || !window.gtag) return
    window.gtag('consent', 'update', {
      analytics_storage: consent.analytics ? 'granted' : 'denied',
      ad_storage: consent.ads ? 'granted' : 'denied',
      ad_user_data: consent.ads ? 'granted' : 'denied',
      ad_personalization: consent.ads ? 'granted' : 'denied',
    })
  }

  const acceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      ads: true,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem('cookie-consent', JSON.stringify(consent))
    setVisible(false)
    loadAdSense()
    updateGA4Consent(consent)
  }

  const rejectNonEssential = () => {
    const consent = {
      necessary: true,
      analytics: false,
      ads: false,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem('cookie-consent', JSON.stringify(consent))
    setVisible(false)
    updateGA4Consent(consent)
  }

  if (!mounted || !visible) return null

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        backgroundColor: '#111',
        borderTop: '1px solid #2a2a2a',
        padding: '20px 24px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <div>
          <p
            style={{
              margin: '0 0 8px 0',
              color: '#f5f5f5',
              fontSize: '15px',
              fontWeight: 600,
              lineHeight: 1.4,
            }}
          >
            We Use Cookies
          </p>
          <p
            style={{
              margin: 0,
              color: '#a3a3a3',
              fontSize: '14px',
              lineHeight: 1.6,
            }}
          >
            This site uses cookies and similar technologies to enhance your experience,
            analyze traffic, and serve personalized ads through{' '}
            <strong style={{ color: '#e5e5e5' }}>Google AdSense</strong> and{' '}
            <strong style={{ color: '#e5e5e5' }}>Google Analytics</strong>.
            Essential cookies are always active. You can choose whether to allow
            analytics and advertising cookies.{' '}
            <a
              href="/privacy/"
              style={{ color: '#22d3ee', textDecoration: 'none' }}
            >
              Learn more in our Privacy Policy
            </a>
            .
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            justifyContent: 'flex-end',
          }}
        >
          <button
            onClick={rejectNonEssential}
            style={{
              padding: '10px 20px',
              backgroundColor: 'transparent',
              border: '1px solid #3a3a3a',
              borderRadius: '8px',
              color: '#a3a3a3',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = '#555'
              e.target.style.color = '#e5e5e5'
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = '#3a3a3a'
              e.target.style.color = '#a3a3a3'
            }}
          >
            Essential Only
          </button>
          <button
            onClick={acceptAll}
            style={{
              padding: '10px 20px',
              backgroundColor: '#22d3ee',
              border: 'none',
              borderRadius: '8px',
              color: '#0a0a0a',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#06b6d4'
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#22d3ee'
            }}
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}
