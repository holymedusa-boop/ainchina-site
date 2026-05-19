// Contact page - AI in China
export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with AI in China. Contact us for inquiries, partnerships, feedback, corrections, or media requests.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.ainchina.com/contact/',
  },
}

export default function ContactPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#e5e5e5' }}>
      {/* Navigation */}
      <nav style={{ borderBottom: '1px solid #1a1a1a', padding: '16px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '32px' }}>
          <a href="/" style={{ fontSize: '24px', fontWeight: 700, background: 'linear-gradient(135deg, #22d3ee, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textDecoration: 'none' }}>
            AI in China
          </a>
          <a href="/blog/" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '15px' }}>Blog</a>
          <a href="/about/" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '15px' }}>About</a>
          <a href="/contact/" style={{ color: '#e5e5e5', textDecoration: 'none', fontSize: '15px' }}>Contact</a>
        </div>
      </nav>

      {/* Content */}
      <article style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 24px' }}>
        <header style={{ marginBottom: '48px' }}>
          <h1 style={{ fontSize: '36px', fontWeight: 700, margin: '0 0 24px', color: '#f5f5f5' }}>Contact Us</h1>
          <p style={{ color: '#a3a3a3', fontSize: '18px', lineHeight: 1.6 }}>
            Have a question, partnership idea, media inquiry, or found an error in our reporting? We'd love to hear from you.
          </p>
        </header>

        <div style={{ display: 'grid', gap: '32px' }}>
          {/* Email - Primary Contact */}
          <div style={{ backgroundColor: '#111', border: '1px solid #1a1a1a', borderRadius: '12px', padding: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, margin: '0 0 16px', color: '#f5f5f5' }}>Email</h2>
            <p style={{ color: '#a3a3a3', marginBottom: '20px', lineHeight: 1.6 }}>
              For general inquiries, feedback, partnership opportunities, or corrections:
            </p>
            <a 
              href="mailto:contact@ainchina.com" 
              style={{ 
                display: 'inline-block',
                padding: '12px 24px',
                backgroundColor: '#22d3ee',
                color: '#0a0a0a',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: 600,
                borderRadius: '8px',
                transition: 'all 0.2s'
              }}
            >
              contact@ainchina.com
            </a>
            <p style={{ color: '#737373', fontSize: '14px', marginTop: '16px' }}>
              We aim to respond within <strong style={{ color: '#a3a3a3' }}>48–72 hours</strong>. For time-sensitive media requests, please include "MEDIA" in your subject line.
            </p>
          </div>

          {/* Social Media */}
          <div style={{ backgroundColor: '#111', border: '1px solid #1a1a1a', borderRadius: '12px', padding: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, margin: '0 0 16px', color: '#f5f5f5' }}>Follow Us</h2>
            <p style={{ color: '#a3a3a3', marginBottom: '20px', lineHeight: 1.6 }}>
              Stay updated with the latest analysis on Chinese AI companies, funding rounds, and market trends.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a 
                href="https://twitter.com/ainchina" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  padding: '12px 24px', 
                  backgroundColor: '#1a1a1a', 
                  border: '1px solid #2a2a2a', 
                  borderRadius: '8px', 
                  color: '#e5e5e5', 
                  textDecoration: 'none', 
                  fontSize: '14px',
                  fontWeight: 500
                }}
              >
                X / Twitter
              </a>
            </div>
          </div>

          {/* About the Site */}
          <div style={{ backgroundColor: '#111', border: '1px solid #1a1a1a', borderRadius: '12px', padding: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, margin: '0 0 16px', color: '#f5f5f5' }}>About AI in China</h2>
            <p style={{ color: '#a3a3a3', lineHeight: 1.8 }}>
              AI in China is an independent publication tracking the rise of Chinese artificial intelligence companies, products, and market intelligence. We provide comprehensive analysis for global investors, builders, and policymakers who want to understand China's AI ecosystem.
            </p>
            <p style={{ color: '#a3a3a3', lineHeight: 1.8, marginTop: '12px' }}>
              Founded in 2024, we track <strong style={{ color: '#f5f5f5' }}>103+ Chinese AI companies</strong>, analyze funding rounds and valuations, and publish deep-dive reports on the technologies reshaping global AI.
            </p>
            <p style={{ color: '#a3a3a3', lineHeight: 1.8, marginTop: '12px' }}>
              Operated from <strong style={{ color: '#f5f5f5' }}>Shanghai, China</strong>.
            </p>
          </div>

          {/* Corrections & Editorial Policy */}
          <div style={{ backgroundColor: '#111', border: '1px solid #1a1a1a', borderRadius: '12px', padding: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, margin: '0 0 16px', color: '#f5f5f5' }}>Corrections & Editorial Policy</h2>
            <p style={{ color: '#a3a3a3', lineHeight: 1.6 }}>
              We strive for accuracy in all our reporting. If you spot an error or have a correction, please email us with the subject line <strong style={{ color: '#f5f5f5' }}>"CORRECTION"</strong> and we'll investigate promptly. Major factual errors are corrected in the article with a note explaining what changed.
            </p>
            <p style={{ color: '#a3a3a3', lineHeight: 1.6, marginTop: '12px' }}>
              Read our full <a href="/about/" style={{ color: '#22d3ee', textDecoration: 'none' }}>Editorial Policy</a>.
            </p>
          </div>

          {/* Legal Notices */}
          <div style={{ backgroundColor: '#111', border: '1px solid #1a1a1a', borderRadius: '12px', padding: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, margin: '0 0 16px', color: '#f5f5f5' }}>Legal Notices</h2>
            <p style={{ color: '#a3a3a3', lineHeight: 1.6 }}>
              For privacy-related requests, data access requests, or GDPR/CCPA inquiries, please include <strong style={{ color: '#f5f5f5' }}>"Privacy Request"</strong> in your email subject line.
            </p>
            <p style={{ color: '#a3a3a3', lineHeight: 1.6, marginTop: '12px' }}>
              See our <a href="/privacy/" style={{ color: '#22d3ee', textDecoration: 'none' }}>Privacy Policy</a> and <a href="/terms/" style={{ color: '#22d3ee', textDecoration: 'none' }}>Terms of Service</a> for more information about how we handle your data.
            </p>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer style={{ padding: '40px 24px', borderTop: '1px solid #1a1a1a', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <a href="/" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '14px' }}>Home</a>
          <a href="/blog/" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '14px' }}>Blog</a>
          <a href="/about/" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '14px' }}>About</a>
          <a href="/privacy/" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '14px' }}>Privacy</a>
          <a href="/terms/" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '14px' }}>Terms</a>
        </div>
        <p style={{ color: '#737373', fontSize: '14px', marginTop: '24px' }}>© 2026 AI in China. All rights reserved.</p>
      </footer>
    </div>
  )
}
