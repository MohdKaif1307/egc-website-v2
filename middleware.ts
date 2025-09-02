import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

// Protected employee routes that require authentication
const protectedEmployeeRoutes = ['/employee/dashboard']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the current path is a protected employee route
  if (protectedEmployeeRoutes.some(route => pathname.startsWith(route))) {
    const token = request.cookies.get('employeeToken')?.value || 
                  request.headers.get('authorization')?.replace('Bearer ', '')

    if (!token) {
      // Redirect to login if no token
      return NextResponse.redirect(new URL('/employee/login', request.url))
    }

    try {
      // Verify the JWT token
      jwt.verify(token, JWT_SECRET)
      // Token is valid, continue to the requested page
      return NextResponse.next()
    } catch (error) {
      // Invalid token, redirect to login
      console.error('Invalid token:', error)
      return NextResponse.redirect(new URL('/employee/login', request.url))
    }
  }

  // For non-protected routes, continue normally
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
