export const metadata = {
  title: {
    template: '%s | AI in China',
    default: 'AI in China | Tracking Chinese AI Companies & Products',
  },
  description: 'Comprehensive analysis of Chinese AI companies, products, and market intelligence for global investors and builders.',
  keywords: 'Chinese AI, DeepSeek, Kimi, Moonshot, ByteDance, AI technology, artificial intelligence, MiniMax, Qwen, Tongyi',
  authors: [{ name: 'AI in China' }],
  creator: 'AI in China',
  publisher: 'AI in China',
  metadataBase: new URL('https://www.ainchina.com'),
  openGraph: {
    title: 'AI in China',
    description: 'Tracking 103+ Chinese AI companies reshaping global tech',
    url: 'https://www.ainchina.com',
    siteName: 'AI in China',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.ainchina.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI in China - Tracking Chinese AI Companies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI in China',
    description: 'Tracking 103+ Chinese AI companies reshaping global tech',
    creator: '@ainchina',
    images: ['https://www.ainchina.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.ainchina.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GK21PLH8V8"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GK21PLH8V8');
            `,
          }}
        />
      </head>
      <body style={{ 
        margin: 0, 
        padding: 0,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        {children}
      </body>
    </html>
  )
}