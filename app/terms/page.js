// Terms of Service & Disclaimer - AI in China
export const metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service, Disclaimer, and legal information for AI in China (ainchina.com).',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.ainchina.com/terms/',
  },
}

export default function TermsPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg)', color: 'var(--fg)' }}>
      {/* Navigation */}
      <nav style={{ borderBottom: '1px solid var(--surface)', padding: '16px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '32px' }}>
          <a href="/" style={{ fontSize: '24px', fontWeight: 700, background: 'linear-gradient(135deg, var(--accent), #ff8a5c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textDecoration: 'none' }}>
            AI in China
          </a>
          <a href="/blog/" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '15px' }}>Blog</a>
          <a href="/about/" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '15px' }}>About</a>
        </div>
      </nav>

      {/* Content */}
      <article style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 24px' }}>
        <header style={{ marginBottom: '48px' }}>
          <h1 style={{ fontSize: '36px', fontWeight: 700, margin: '0 0 24px', color: 'var(--fg)' }}>Terms of Service & Disclaimer</h1>
          <p style={{ color: 'var(--muted-2)', fontSize: '14px' }}>Last updated: May 9, 2026</p>
        </header>

        <div style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--fg)' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 600, margin: '32px 0 16px', color: 'var(--fg)' }}>1. Disclaimer</h2>
          <p style={{ marginBottom: '24px' }}>
            The content provided on <a href="https://www.ainchina.com" style={{ color: 'var(--accent)', textDecoration: 'none' }}>ainchina.com</a> (the "Site") is for <strong style={{ color: 'var(--fg)' }}>informational and educational purposes only</strong>. Nothing on this Site constitutes professional financial, investment, legal, or business advice.
          </p>
          <p style={{ marginBottom: '24px' }}>
            <strong style={{ color: 'var(--fg)' }}>Investment Risk Warning:</strong> Any discussion of funding rounds, valuations, stock performance, or market trends on this Site should not be interpreted as a recommendation to buy, sell, or hold any security, cryptocurrency, or financial instrument. Past performance and market analysis do not guarantee future results. Always consult a qualified financial advisor before making investment decisions.
          </p>
          <p style={{ marginBottom: '24px' }}>
            <strong style={{ color: 'var(--fg)' }}>Accuracy:</strong> While we make every effort to ensure the accuracy of our analysis, data, and reporting, we cannot guarantee that all information is complete, accurate, or current. Industry data, funding figures, and company metrics are sourced from public disclosures, press releases, and third-party research, and may be subject to revision or correction.
          </p>

          <h2 style={{ fontSize: '22px', fontWeight: 600, margin: '32px 0 16px', color: 'var(--fg)' }}>2. Use of the Site</h2>
          <p style={{ marginBottom: '16px' }}>
            By accessing and using the Site, you agree to:
          </p>
          <ul style={{ marginBottom: '24px', paddingLeft: '24px', color: 'var(--muted)' }}>
            <li style={{ marginBottom: '8px' }}>Use the Site only for lawful purposes</li>
            <li style={{ marginBottom: '8px' }}>Not attempt to disrupt, damage, or interfere with the Site's operation</li>
            <li style={{ marginBottom: '8px' }}>Not scrape, copy, or redistribute our content without written permission</li>
            <li style={{ marginBottom: '8px' }}>Accept that the Site and its content are provided "as is" without warranties of any kind</li>
          </ul>

          <h2 style={{ fontSize: '22px', fontWeight: 600, margin: '32px 0 16px', color: 'var(--fg)' }}>3. Intellectual Property</h2>
          <p style={{ marginBottom: '24px' }}>
            All content on the Site—including articles, analysis, data tables, images, and branding—is the property of AI in China unless otherwise stated. You may share links to our content and quote brief excerpts with proper attribution. Republication of full articles requires written permission.
          </p>

          <h2 style={{ fontSize: '22px', fontWeight: 600, margin: '32px 0 16px', color: 'var(--fg)' }}>4. Third-Party Content & Links</h2>
          <p style={{ marginBottom: '24px' }}>
            The Site may contain links to third-party websites, services, or content. We do not control, endorse, or assume responsibility for any third-party content, privacy policies, or practices. Your use of third-party services is at your own risk and subject to their respective terms.
          </p>

          <h2 style={{ fontSize: '22px', fontWeight: 600, margin: '32px 0 16px', color: 'var(--fg)' }}>5. Limitation of Liability</h2>
          <p style={{ marginBottom: '24px' }}>
            To the fullest extent permitted by law, AI in China and its operators shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of your access to, use of, or inability to use the Site or its content.
          </p>

          <h2 style={{ fontSize: '22px', fontWeight: 600, margin: '32px 0 16px', color: 'var(--fg)' }}>6. Changes to These Terms</h2>
          <p style={{ marginBottom: '24px' }}>
            We may update these Terms from time to time. Changes will be posted on this page with an updated "Last updated" date. Your continued use of the Site after any changes constitutes acceptance of the revised Terms.
          </p>

          <h2 style={{ fontSize: '22px', fontWeight: 600, margin: '32px 0 16px', color: 'var(--fg)' }}>7. Governing Law</h2>
          <p style={{ marginBottom: '24px' }}>
            These Terms shall be governed by and construed in accordance with applicable international law, without regard to conflict of law principles.
          </p>

          <h2 style={{ fontSize: '22px', fontWeight: 600, margin: '32px 0 16px', color: 'var(--fg)' }}>8. Contact</h2>
          <p style={{ marginBottom: '24px' }}>
            If you have any questions about these Terms, please contact us at:<br /><br />
            <strong style={{ color: 'var(--fg)' }}>Email:</strong> <a href="mailto:contact@ainchina.com" style={{ color: 'var(--accent)', textDecoration: 'none' }}>contact@ainchina.com</a><br />
            <strong style={{ color: 'var(--fg)' }}>Website:</strong> <a href="https://www.ainchina.com" style={{ color: 'var(--accent)', textDecoration: 'none' }}>ainchina.com</a>
          </p>
        </div>
      </article>

      {/* Footer */}
      <footer style={{ padding: '40px 24px', borderTop: '1px solid var(--surface)', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <a href="/" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '14px' }}>Home</a>
          <a href="/blog/" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '14px' }}>Blog</a>
          <a href="/about/" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '14px' }}>About</a>
          <a href="/contact/" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '14px' }}>Contact</a>
          <a href="/privacy/" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '14px' }}>Privacy</a>
        </div>
        <p style={{ color: 'var(--muted-2)', fontSize: '14px', marginTop: '24px' }}>© 2026 AI in China. All rights reserved.</p>
      </footer>
    </div>
  )
}
