import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

// Protected employee routes that require employee authentication
const protectedEmployeeRoutes = ['/employee/dashboard', '/employee/welcome']

// Protected admin routes that require admin authentication
// Temporarily disable middleware for admin routes - let client-side handle it
const protectedAdminRoutes: string[] = [] // ['/admin']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip middleware for login pages and API routes
  if (pathname === '/admin/login' || pathname === '/login' || pathname === '/employee/login') {
    return NextResponse.next()
  }

  // Check if the current path is a protected admin route
  if (protectedAdminRoutes.some(route => pathname.startsWith(route))) {
    const adminToken = request.cookies.get('adminToken')?.value || 
                      request.headers.get('authorization')?.replace('Bearer ', '')

    if (!adminToken) {
      console.log('Middleware: No admin token found in cookies or headers')
      // For client-side navigation, we'll let the page component handle the auth check
      // Only redirect if this is a direct page load (has a referer or is a GET request)
      const isDirectAccess = !request.headers.get('referer') || request.method === 'GET'
      if (isDirectAccess) {
        console.log('Middleware: Direct access without token, redirecting to login')
        return NextResponse.redirect(new URL('/login', request.url))
      } else {
        console.log('Middleware: Client navigation, allowing page to handle auth')
        return NextResponse.next()
      }
    }

    try {
      const payload = jwt.verify(adminToken, JWT_SECRET) as any
      if (payload.type !== 'admin') {
        console.log('Middleware: Invalid admin token type, redirecting to login')
        return NextResponse.redirect(new URL('/login', request.url))
      }
      console.log('Middleware: Admin token verified successfully')
      return NextResponse.next()
    } catch (error) {
      console.log('Middleware: Admin token verification failed:', error)
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  // Check if the current path is a protected employee route
  if (protectedEmployeeRoutes.some(route => pathname.startsWith(route))) {
    const employeeToken = request.cookies.get('employeeToken')?.value || 
                         request.headers.get('authorization')?.replace('Bearer ', '')

    if (!employeeToken) {
      console.log('Middleware: No employee token found, redirecting to login')
      return NextResponse.redirect(new URL('/login', request.url))
    }

    try {
      const payload = jwt.verify(employeeToken, JWT_SECRET) as any
      if (payload.type === 'admin') {
        console.log('Middleware: Admin trying to access employee route, redirecting to login')
        return NextResponse.redirect(new URL('/login', request.url))
      }
      console.log('Middleware: Employee token verified successfully')
      return NextResponse.next()
    } catch (error) {
      console.log('Middleware: Employee token verification failed:', error)
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

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
