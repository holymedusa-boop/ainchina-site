/** @type {import('next').NextConfig} */
// Cache bust: 2026-06-03T22:25:00+08:00
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/posts/ai-avatar-revolution-china-2026',
        destination: '/blog/china-ai-avatar-revolution-2026/',
        permanent: true,
      },
      {
        source: '/posts/ai-avatar-revolution-china-2026/:path*',
        destination: '/blog/china-ai-avatar-revolution-2026/',
        permanent: true,
      },
      {
        source: '/privacy-policy',
        destination: '/privacy/',
        permanent: true,
      },
      {
        source: '/privacy-policy/:path*',
        destination: '/privacy/',
        permanent: true,
      },
      {
        source: '/blog/china-embodied-ai-revolution-2026',
        destination: '/blog/china-embodied-ai-revolution-funding-world-models-2026/',
        permanent: true,
      },
      {
        source: '/blog/china-embodied-ai-revolution-2026/:path*',
        destination: '/blog/china-embodied-ai-revolution-funding-world-models-2026/',
        permanent: true,
      },
      {
        source: '/blog/deepseek-v4-agent-era-million-tokens-2026',
        destination: '/blog/deepseek-v4-million-token-china-ai-sovereignty/',
        permanent: true,
      },
      {
        source: '/blog/deepseek-v4-agent-era-million-tokens-2026/:path*',
        destination: '/blog/deepseek-v4-million-token-china-ai-sovereignty/',
        permanent: true,
      },
      {
        source: '/blog/china-ai-war-of-gods-deepseek-kimi-open-source-dominance',
        destination: '/blog/china-ai-capital-war-deepseek-kimi-funding-2026/',
        permanent: true,
      },
      {
        source: '/blog/china-ai-war-of-gods-deepseek-kimi-open-source-dominance/:path*',
        destination: '/blog/china-ai-capital-war-deepseek-kimi-funding-2026/',
        permanent: true,
      },
      {
        source: '/blog/china-ai-invisible-empire-consumer-apps-2026/:path*',
        destination: '/blog/china-ai-invisible-empire-consumer-apps-2026/',
        permanent: true,
      },
      {
        source: '/blog/minimax-talkie-200m-users',
        destination: '/blog/minimax-talkie/',
        permanent: true,
      },
      {
        source: '/blog/minimax-talkie-200m-users/:path*',
        destination: '/blog/minimax-talkie/',
        permanent: true,
      },
      {
        source: '/blog/deepseek-v3-5-million-model',
        destination: '/blog/deepseek-v3-deep-dive/',
        permanent: true,
      },
      {
        source: '/blog/deepseek-v3-5-million-model/:path*',
        destination: '/blog/deepseek-v3-deep-dive/',
        permanent: true,
      },
      {
        source: '/blog/china-ai-april-revolution-2026',
        destination: '/blog/china-ai-april-infrastructure-2026/',
        permanent: true,
      },
      {
        source: '/blog/china-ai-april-revolution-2026/:path*',
        destination: '/blog/china-ai-april-infrastructure-2026/',
        permanent: true,
      },
      {
        source: '/index.jsp',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.jsp/:path*',
        destination: '/',
        permanent: true,
      },
      // Deleted DeepSeek duplicate redirects
      {
        source: '/blog/deepseek-73b-megaround-china-ai-funding-frenzy',
        destination: '/blog/deepseek-v4-million-token-china-ai-sovereignty/',
        permanent: true,
      },
      {
        source: '/blog/deepseek-73b-megaround-china-ai-funding-frenzy/:path*',
        destination: '/blog/deepseek-v4-million-token-china-ai-sovereignty/',
        permanent: true,
      },
      {
        source: '/blog/deepseek-7-billion-fundraising-tencent-catl-api-price-war-2026',
        destination: '/blog/deepseek-v4-million-token-china-ai-sovereignty/',
        permanent: true,
      },
      {
        source: '/blog/deepseek-7-billion-fundraising-tencent-catl-api-price-war-2026/:path*',
        destination: '/blog/deepseek-v4-million-token-china-ai-sovereignty/',
        permanent: true,
      },
      {
        source: '/blog/deepseek-7b-mega-round-china-ai-capital-shift-2026',
        destination: '/blog/deepseek-v4-million-token-china-ai-sovereignty/',
        permanent: true,
      },
      {
        source: '/blog/deepseek-7b-mega-round-china-ai-capital-shift-2026/:path*',
        destination: '/blog/deepseek-v4-million-token-china-ai-sovereignty/',
        permanent: true,
      },
      {
        source: '/blog/deepseek-first-funding-20-billion-valuation',
        destination: '/blog/deepseek-v4-million-token-china-ai-sovereignty/',
        permanent: true,
      },
      {
        source: '/blog/deepseek-first-funding-20-billion-valuation/:path*',
        destination: '/blog/deepseek-v4-million-token-china-ai-sovereignty/',
        permanent: true,
      },
      {
        source: '/blog/deepseek-v4-pricing-strategy-analysis',
        destination: '/blog/deepseek-v4-promo-ending-analysis/',
        permanent: true,
      },
      {
        source: '/blog/deepseek-v4-pricing-strategy-analysis/:path*',
        destination: '/blog/deepseek-v4-promo-ending-analysis/',
        permanent: true,
      },
      {
        source: '/blog/deepseek-vs-chatgpt',
        destination: '/blog/deepseek-v3-deep-dive/',
        permanent: true,
      },
      {
        source: '/blog/deepseek-vs-chatgpt/:path*',
        destination: '/blog/deepseek-v3-deep-dive/',
        permanent: true,
      },
      {
        source: '/blog/china-ai-capital-war-deepseek-kimi-funding-2026',
        destination: '/blog/deepseek-v4-million-token-china-ai-sovereignty/',
        permanent: true,
      },
      {
        source: '/blog/china-ai-capital-war-deepseek-kimi-funding-2026/:path*',
        destination: '/blog/deepseek-v4-million-token-china-ai-sovereignty/',
        permanent: true,
      },
      {
        source: '/blog/china-ai-infrastructure-awakening-wuwenxinqiong-deepseek-multimodal-2026',
        destination: '/blog/deepseek-v4-million-token-china-ai-sovereignty/',
        permanent: true,
      },
      {
        source: '/blog/china-ai-infrastructure-awakening-wuwenxinqiong-deepseek-multimodal-2026/:path*',
        destination: '/blog/deepseek-v4-million-token-china-ai-sovereignty/',
        permanent: true,
      },
      {
        source: '/blog/china-ai-revolution-may-2026-tokens-deepseek-huawei',
        destination: '/blog/deepseek-v4-million-token-china-ai-sovereignty/',
        permanent: true,
      },
      {
        source: '/blog/china-ai-revolution-may-2026-tokens-deepseek-huawei/:path*',
        destination: '/blog/deepseek-v4-million-token-china-ai-sovereignty/',
        permanent: true,
      },
      {
        source: '/blog/china-ai-unicorn-stampede-kimi-deepseek-valuation-shakeout-2026-26',
        destination: '/blog/deepseek-v4-million-token-china-ai-sovereignty/',
        permanent: true,
      },
      {
        source: '/blog/china-ai-unicorn-stampede-kimi-deepseek-valuation-shakeout-2026-26/:path*',
        destination: '/blog/deepseek-v4-million-token-china-ai-sovereignty/',
        permanent: true,
      },
      {
        source: '/blog/china-ai-june-surge-deepseek-zhipu-agentic-ai-2026',
        destination: '/blog/deepseek-v4-million-token-china-ai-sovereignty/',
        permanent: true,
      },
      {
        source: '/blog/china-ai-june-surge-deepseek-zhipu-agentic-ai-2026/:path*',
        destination: '/blog/deepseek-v4-million-token-china-ai-sovereignty/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
