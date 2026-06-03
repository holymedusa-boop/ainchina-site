// Privacy Policy page - AI in China
// Compliant with Google AdSense requirements
export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for AI in China (ainchina.com). Covers Google AdSense, cookies, GDPR, CCPA, and data collection practices.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.ainchina.com/privacy/',
  },
}

export default function PrivacyPage() {
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
          <a href="/contact/" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '15px' }}>Contact</a>
        </div>
      </nav>

      {/* Content */}
      <article style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 24px' }}>
        <header style={{ marginBottom: '48px' }}>
          <h1 style={{ fontSize: '36px', fontWeight: 700, margin: '0 0 24px', color: '#f5f5f5' }}>Privacy Policy</h1>
          <p style={{ color: '#737373', fontSize: '14px' }}>Last updated: May 19, 2026</p>
        </header>

        <div style={{ fontSize: '16px', lineHeight: 1.8, color: '#e5e5e5' }}>
          <p style={{ marginBottom: '24px' }}>
            AI in China ("we," "us," or "our") operates the website <a href="https://www.ainchina.com" style={{ color: '#22d3ee', textDecoration: 'none' }}>ainchina.com</a> (the "Site"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our Site. We are committed to protecting your privacy and ensuring transparency about our data practices.
          </p>

          <p style={{ marginBottom: '24px', padding: '16px', backgroundColor: '#111', border: '1px solid #1a1a1a', borderRadius: '8px', color: '#a3a3a3' }}>
            <strong style={{ color: '#f5f5f5' }}>Important:</strong> We participate in the Google AdSense program to serve advertisements on our Site. By using our Site, you consent to the data collection and processing practices described in this policy, including those related to personalized advertising.
          </p>

          <h2 style={{ fontSize: '22px', fontWeight: 600, margin: '32px 0 16px', color: '#f5f5f5' }}>1. Information We Collect</h2>
          <p style={{ marginBottom: '16px' }}>
            We may collect information about you in a variety of ways, including:
          </p>
          <ul style={{ marginBottom: '24px', paddingLeft: '24px', color: '#a3a3a3' }}>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#f5f5f5' }}>Usage Data:</strong> We automatically collect certain information when you visit our Site, including your IP address, browser type, operating system, device type, pages visited, time spent on pages, and the dates/times of your visits.</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#f5f5f5' }}>Cookies and Tracking Technologies:</strong> We use cookies, web beacons, and similar tracking technologies to track activity on our Site and hold certain information. This includes session cookies (temporary) and persistent cookies (stored on your device).</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#f5f5f5' }}>Device Information:</strong> We may collect information about the device you use to access our Site, including hardware model, operating system version, unique device identifiers, and mobile network information.</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#f5f5f5' }}>Analytics:</strong> We use Google Analytics to understand how visitors interact with our Site. Google Analytics collects information such as how often users visit, what pages they visit, and what other sites they used prior to coming to our Site.</li>
          </ul>

          <h2 style={{ fontSize: '22px', fontWeight: 600, margin: '32px 0 16px', color: '#f5f5f5' }}>2. Google AdSense and Advertising</h2>
          <p style={{ marginBottom: '16px' }}>
            We use <strong style={{ color: '#f5f5f5' }}>Google AdSense</strong> to display advertisements on our Site. Google, as a third-party vendor, uses cookies to serve ads based on your prior visits to our Site and other websites on the Internet.
          </p>
          <p style={{ marginBottom: '16px' }}>
            Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our Site and/or other sites on the Internet.
          </p>
          <ul style={{ marginBottom: '24px', paddingLeft: '24px', color: '#a3a3a3' }}>
            <li style={{ marginBottom: '8px' }}>Google may use cookies for personalized advertising and ad measurement</li>
            <li style={{ marginBottom: '8px' }}>Third-party vendors, including Google, may use cookies to serve ads based on a user's prior visits to our website</li>
            <li style={{ marginBottom: '8px' }}>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" style={{ color: '#22d3ee', textDecoration: 'none' }}>Google Ads Settings</a></li>
            <li style={{ marginBottom: '8px' }}>Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="https://optout.aboutads.info/" style={{ color: '#22d3ee', textDecoration: 'none' }}>www.aboutads.info</a></li>
          </ul>
          <p style={{ marginBottom: '24px' }}>
            For more information about how Google uses data when you use our Site, please visit <a href="https://policies.google.com/technologies/partner-sites" style={{ color: '#22d3ee', textDecoration: 'none' }}>Google's Partner Sites Policy</a>.
          </p>

          <h2 style={{ fontSize: '22px', fontWeight: 600, margin: '32px 0 16px', color: '#f5f5f5' }}>3. Cookies: Types and Purposes</h2>
          <p style={{ marginBottom: '16px' }}>
            We use the following types of cookies on our Site:
          </p>
          <ul style={{ marginBottom: '24px', paddingLeft: '24px', color: '#a3a3a3' }}>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#f5f5f5' }}>Essential Cookies:</strong> Required for the Site to function properly (e.g., maintaining session state, security features).</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#f5f5f5' }}>Analytics Cookies:</strong> Help us understand how visitors interact with our Site (Google Analytics).</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#f5f5f5' }}>Advertising Cookies:</strong> Used by Google AdSense and partners to deliver relevant advertisements and measure their effectiveness.</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#f5f5f5' }}>Preference Cookies:</strong> Remember your settings and preferences for a better experience.</li>
          </ul>

          <h2 style={{ fontSize: '22px', fontWeight: 600, margin: '32px 0 16px', color: '#f5f5f5' }}>4. How to Manage or Disable Cookies</h2>
          <p style={{ marginBottom: '16px' }}>
            You have the right to control how cookies are used on your device. Here are your options:
          </p>
          <ul style={{ marginBottom: '24px', paddingLeft: '24px', color: '#a3a3a3' }}>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#f5f5f5' }}>Browser Settings:</strong> Most web browsers allow you to control cookies through their settings. You can usually find these settings in the "Options" or "Preferences" menu of your browser. You can delete existing cookies and block new cookies, though this may affect Site functionality.</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#f5f5f5' }}>Google Ads Opt-Out:</strong> Opt out of personalized Google ads at <a href="https://www.google.com/settings/ads" style={{ color: '#22d3ee', textDecoration: 'none' }}>Google Ads Settings</a>.</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#f5f5f5' }}>Industry Opt-Out:</strong> Visit <a href="https://optout.aboutads.info/" style={{ color: '#22d3ee', textDecoration: 'none' }}>Digital Advertising Alliance</a> or <a href="https://optout.networkadvertising.org/" style={{ color: '#22d3ee', textDecoration: 'none' }}>Network Advertising Initiative</a> to opt out of interest-based advertising from participating companies.</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#f5f5f5' }}>Analytics Opt-Out:</strong> Install the <a href="https://tools.google.com/dlpage/gaoptout" style={{ color: '#22d3ee', textDecoration: 'none' }}>Google Analytics Opt-out Browser Add-on</a> to prevent Google Analytics from collecting your data.</li>
          </ul>

          <h2 style={{ fontSize: '22px', fontWeight: 600, margin: '32px 0 16px', color: '#f5f5f5' }}>5. GDPR Compliance (European Union Users)</h2>
          <p style={{ marginBottom: '16px' }}>
            If you are located in the European Economic Area (EEA), the following rights apply to you under the General Data Protection Regulation (GDPR):
          </p>
          <ul style={{ marginBottom: '24px', paddingLeft: '24px', color: '#a3a3a3' }}>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#f5f5f5' }}>Right to Access:</strong> You have the right to request copies of your personal data.</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#f5f5f5' }}>Right to Rectification:</strong> You have the right to request that we correct any information you believe is inaccurate or incomplete.</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#f5f5f5' }}>Right to Erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#f5f5f5' }}>Right to Restrict Processing:</strong> You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#f5f5f5' }}>Right to Object:</strong> You have the right to object to our processing of your personal data, including for direct marketing purposes.</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#f5f5f5' }}>Right to Data Portability:</strong> You have the right to request that we transfer the data we have collected to another organization, or directly to you, under certain conditions.</li>
          </ul>
          <p style={{ marginBottom: '24px' }}>
            <strong style={{ color: '#f5f5f5' }}>Legal Basis for Processing:</strong> We process your personal data based on your consent (which you can withdraw at any time) and our legitimate interests in operating and improving our Site.
          </p>
          <p style={{ marginBottom: '24px' }}>
            <strong style={{ color: '#f5f5f5' }}>Data Controller:</strong> AI in China is the data controller for personal data collected through this Site. To exercise your GDPR rights, contact us at <a href="mailto:contact@ainchina.com" style={{ color: '#22d3ee', textDecoration: 'none' }}>contact@ainchina.com</a>.
          </p>

          <h2 style={{ fontSize: '22px', fontWeight: 600, margin: '32px 0 16px', color: '#f5f5f5' }}>6. CCPA Compliance (California Users)</h2>
          <p style={{ marginBottom: '16px' }}>
            If you are a California resident, the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA) grant you the following rights:
          </p>
          <ul style={{ marginBottom: '24px', paddingLeft: '24px', color: '#a3a3a3' }}>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#f5f5f5' }}>Right to Know:</strong> You have the right to request that we disclose what personal information we collect, use, disclose, and sell.</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#f5f5f5' }}>Right to Delete:</strong> You have the right to request the deletion of your personal information, subject to certain exceptions.</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#f5f5f5' }}>Right to Opt-Out of Sale:</strong> We do not sell personal information. However, you have the right to opt out of any future sale if our practices change.</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#f5f5f5' }}>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising any of your CCPA rights.</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#f5f5f5' }}>Right to Correct:</strong> You have the right to request correction of inaccurate personal information.</li>
          </ul>
          <p style={{ marginBottom: '24px' }}>
            To exercise your CCPA rights, contact us at <a href="mailto:contact@ainchina.com" style={{ color: '#22d3ee', textDecoration: 'none' }}>contact@ainchina.com</a> or call us toll-free (if applicable). We will respond to verifiable consumer requests within 45 days.
          </p>
          <p style={{ marginBottom: '24px' }}>
            <strong style={{ color: '#f5f5f5' }}>Categories of Personal Information Collected:</strong> Identifiers (IP address), internet activity (browsing history, interactions with ads), and geolocation data (derived from IP).
          </p>
          <p style={{ marginBottom: '24px' }}>
            <strong style={{ color: '#f5f5f5' }}>Categories of Third Parties:</strong> We disclose personal information to Google (AdSense, Analytics) and Vercel (hosting provider) for business purposes.
          </p>

          <h2 style={{ fontSize: '22px', fontWeight: 600, margin: '32px 0 16px', color: '#f5f5f5' }}>7. Third-Party Services</h2>
          <p style={{ marginBottom: '16px' }}>
            We may use third-party service providers to help us operate our Site:
          </p>
          <ul style={{ marginBottom: '24px', paddingLeft: '24px', color: '#a3a3a3' }}>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#f5f5f5' }}>Google Analytics:</strong> For website traffic analysis. <a href="https://policies.google.com/privacy" style={{ color: '#22d3ee', textDecoration: 'none' }}>Google Privacy Policy</a></li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#f5f5f5' }}>Google AdSense:</strong> For displaying advertisements. <a href="https://policies.google.com/technologies/ads" style={{ color: '#22d3ee', textDecoration: 'none' }}>Google Advertising</a></li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#f5f5f5' }}>Vercel:</strong> Our site is hosted on Vercel. <a href="https://vercel.com/legal/privacy-policy" style={{ color: '#22d3ee', textDecoration: 'none' }}>Vercel Privacy Policy</a></li>
          </ul>

          <h2 style={{ fontSize: '22px', fontWeight: 600, margin: '32px 0 16px', color: '#f5f5f5' }}>8. Data Security</h2>
          <p style={{ marginBottom: '24px' }}>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure. We use HTTPS (SSL/TLS) encryption for all data transmission between your browser and our servers.
          </p>

          <h2 style={{ fontSize: '22px', fontWeight: 600, margin: '32px 0 16px', color: '#f5f5f5' }}>9. Children's Privacy</h2>
          <p style={{ marginBottom: '24px' }}>
            Our Site is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we learn we have collected personal information from a child under 13, we will delete that information as quickly as possible. If you believe we might have any information from or about a child under 13, please contact us at <a href="mailto:contact@ainchina.com" style={{ color: '#22d3ee', textDecoration: 'none' }}>contact@ainchina.com</a>.
          </p>

          <h2 style={{ fontSize: '22px', fontWeight: 600, margin: '32px 0 16px', color: '#f5f5f5' }}>10. International Data Transfers</h2>
          <p style={{ marginBottom: '24px' }}>
            Your information may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction. If you are located outside the United States and choose to provide information to us, please note that we transfer the data to the United States and process it there. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
          </p>

          <h2 style={{ fontSize: '22px', fontWeight: 600, margin: '32px 0 16px', color: '#f5f5f5' }}>11. Changes to This Privacy Policy</h2>
          <p style={{ marginBottom: '24px' }}>
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or for other operational reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
          </p>

          <h2 style={{ fontSize: '22px', fontWeight: 600, margin: '32px 0 16px', color: '#f5f5f5' }}>12. Contact Us</h2>
          <p style={{ marginBottom: '24px' }}>
            If you have any questions about this Privacy Policy, our data practices, or your rights, please contact us:
          </p>
          <div style={{ backgroundColor: '#111', border: '1px solid #1a1a1a', borderRadius: '8px', padding: '24px', marginBottom: '24px' }}>
            <p style={{ margin: '0 0 8px', color: '#a3a3a3' }}><strong style={{ color: '#f5f5f5' }}>Email:</strong> <a href="mailto:contact@ainchina.com" style={{ color: '#22d3ee', textDecoration: 'none' }}>contact@ainchina.com</a></p>
            <p style={{ margin: '0 0 8px', color: '#a3a3a3' }}><strong style={{ color: '#f5f5f5' }}>Website:</strong> <a href="https://www.ainchina.com" style={{ color: '#22d3ee', textDecoration: 'none' }}>ainchina.com</a></p>
            <p style={{ margin: 0, color: '#a3a3a3' }}><strong style={{ color: '#f5f5f5' }}>Response Time:</strong> We aim to respond within 48–72 hours.</p>
          </div>
          <p style={{ marginBottom: '24px', color: '#a3a3a3' }}>
            For privacy-related requests, please include "Privacy Request" in your email subject line to ensure prompt handling.
          </p>
        </div>
      </article>

      {/* Footer */}
      <footer style={{ padding: '40px 24px', borderTop: '1px solid #1a1a1a', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <a href="/" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '14px' }}>Home</a>
          <a href="/blog/" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '14px' }}>Blog</a>
          <a href="/about/" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '14px' }}>About</a>
          <a href="/contact/" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '14px' }}>Contact</a>
          <a href="/terms/" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '14px' }}>Terms</a>
        </div>
        <p style={{ color: '#737373', fontSize: '14px', marginTop: '24px' }}>© 2026 AI in China. All rights reserved.</p>
      </footer>
    </div>
  )
}
