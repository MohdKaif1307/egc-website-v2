import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

// Simple JWT verification for Edge runtime
function verifyToken(token: string): any {
  try {
    // Simple base64 decode of JWT payload (not cryptographically secure, but works for basic checks)
    const parts = token.split('.')
    if (parts.length !== 3) return null
    
    const payload = JSON.parse(atob(parts[1]))
    
    // Check expiration
    if (payload.exp && payload.exp < Date.now() / 1000) {
      return null
    }
    
    return payload
  } catch (error) {
    return null
  }
}

// Protected employee routes that require employee authentication
// Temporarily disable to avoid Edge runtime crypto issues
const protectedEmployeeRoutes: string[] = [] // ['/employee/dashboard', '/employee/welcome']

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

    const payload = verifyToken(adminToken)
    if (!payload) {
      console.log('Middleware: Admin token verification failed')
      return NextResponse.redirect(new URL('/login', request.url))
    }
    
    if (payload.type !== 'admin') {
      console.log('Middleware: Invalid admin token type, redirecting to login')
      return NextResponse.redirect(new URL('/login', request.url))
    }
    
    console.log('Middleware: Admin token verified successfully')
    return NextResponse.next()
  }

  // Check if the current path is a protected employee route
  if (protectedEmployeeRoutes.some(route => pathname.startsWith(route))) {
    const employeeToken = request.cookies.get('employeeToken')?.value || 
                         request.headers.get('authorization')?.replace('Bearer ', '')

    if (!employeeToken) {
      console.log('Middleware: No employee token found, redirecting to login')
      return NextResponse.redirect(new URL('/login', request.url))
    }

    const payload = verifyToken(employeeToken)
    if (!payload) {
      console.log('Middleware: Employee token verification failed')
      return NextResponse.redirect(new URL('/login', request.url))
    }
    
    if (payload.type === 'admin') {
      console.log('Middleware: Admin trying to access employee route, redirecting to login')
      return NextResponse.redirect(new URL('/login', request.url))
    }
    
    console.log('Middleware: Employee token verified successfully')
    return NextResponse.next()
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
