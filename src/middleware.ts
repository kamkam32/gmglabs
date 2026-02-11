import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the path starts with /en/
  if (pathname.startsWith('/en')) {
    // Strip /en prefix for internal rewrite
    const strippedPath = pathname.replace(/^\/en/, '') || '/'

    const url = request.nextUrl.clone()
    url.pathname = strippedPath

    const response = NextResponse.rewrite(url)
    response.headers.set('x-locale', 'en')
    response.headers.set('x-pathname', pathname)
    return response
  }

  // Default: FR locale
  const response = NextResponse.next()
  response.headers.set('x-locale', 'fr')
  response.headers.set('x-pathname', pathname)
  return response
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - _next (Next.js internals)
     * - api routes
     * - static files (images, fonts, etc.)
     */
    '/((?!_next|api|favicon\\.ico|favicon\\.png|og-image\\.png|logo-gmg\\.png|manifest\\.json|robots\\.txt|sitemap\\.xml|images/).*)',
  ],
}
