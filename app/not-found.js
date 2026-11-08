// Not Found (404) page - AI in China
export const metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist. Explore AI in China blog for the latest Chinese AI analysis.',
  robots: 'noindex, follow',
}

export default function NotFoundPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg)', color: 'var(--fg)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '48px 24px', textAlign: 'center' }}>
      <div style={{ fontSize: '80px', fontWeight: 700, color: 'var(--accent)', marginBottom: '16px' }}>404</div>
      <h1 style={{ fontSize: '28px', fontWeight: 600, margin: '0 0 16px', color: 'var(--fg)' }}>Page Not Found</h1>
      <p style={{ color: 'var(--muted)', fontSize: '16px', lineHeight: 1.6, maxWidth: '500px', marginBottom: '32px' }}>
        The page you are looking for does not exist or has been moved.
      </p>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="/" style={{ padding: '12px 24px', backgroundColor: 'var(--accent)', color: 'var(--bg)', textDecoration: 'none', borderRadius: '8px', fontWeight: '600', fontSize: '15px' }}>
          Go Home
        </a>
        <a href="/blog/" style={{ padding: '12px 24px', backgroundColor: 'var(--surface)', color: 'var(--fg)', textDecoration: 'none', borderRadius: '8px', fontWeight: '600', fontSize: '15px', border: '1px solid #2a2a2a' }}>
          Browse Blog
        </a>
      </div>
    </div>
  )
}
