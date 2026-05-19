/** @type {import('next').NextConfig} */
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
    ];
  },
};

module.exports = nextConfig;
