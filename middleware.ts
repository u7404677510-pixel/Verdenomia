import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { locales, defaultLocale } from './src/i18n/config'

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
})

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request)
  
  // Pass the pathname to the layout via a custom header
  response.headers.set('x-pathname', request.nextUrl.pathname)
  
  return response
}

export const config = {
  matcher: ['/', '/(es|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)'],
}
