import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 301 重定向映射表
const redirects = new Map([
  ['/blog/minimax-talkie-200m-users', '/blog/minimax-talkie/'],
  ['/blog/minimax-talkie-200m-users/', '/blog/minimax-talkie/'],
  ['/blog/deepseek-v3-5-million-model', '/blog/deepseek-v3-deep-dive/'],
  ['/blog/deepseek-v3-5-million-model/', '/blog/deepseek-v3-deep-dive/'],
  ['/blog/china-ai-april-revolution-2026', '/blog/china-ai-april-infrastructure-2026/'],
  ['/blog/china-ai-april-revolution-2026/', '/blog/china-ai-april-infrastructure-2026/'],
]);

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const redirectTo = redirects.get(url.pathname);
  
  if (redirectTo) {
    return NextResponse.redirect(new URL(redirectTo, request.url), 301);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/blog/:path*'],
};
