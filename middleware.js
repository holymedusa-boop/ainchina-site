import { NextResponse } from 'next/server'

export function middleware(request) {
  const hostname = request.headers.get('host') || ''

  // 非 www → www，返回 301
  if (hostname === 'ainchina.com' || hostname.startsWith('ainchina.com:')) {
    const url = request.nextUrl.clone()
    url.protocol = 'https'
    url.host = 'www.ainchina.com'
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/|favicon.ico|robots.txt|sitemap.xml).*)'],
}
