import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

// Protected employee routes that require employee authentication
const protectedEmployeeRoutes = ['/employee/dashboard', '/employee/welcome']

// Protected admin routes that require admin authentication
const protectedAdminRoutes = ['/admin']

export function middleware(request: NextRequest) {
  // Temporarily disable all middleware for debugging
  console.log('Middleware accessed for:', request.nextUrl.pathname)
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
