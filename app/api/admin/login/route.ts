import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

// Admin credentials (in production, store these securely in a database)
const ADMIN_USERS = [
  {
    id: 'admin-1',
    email: process.env.ADMIN_EMAIL || 'mohammaddkaif@egcworld.in',
    password: process.env.ADMIN_PASSWORD || 'Admin@1307', // In production, this should be hashed
    name: 'System Administrator',
    role: 'super_admin',
    permissions: ['all']
  },
  {
    id: 'admin-2', 
    email: 'hr@egc.com',
    password: 'hr123', // In production, this should be hashed
    name: 'HR Administrator',
    role: 'hr_admin',
    permissions: ['employee_management', 'invite_codes']
  }
]

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()
    console.log('Admin login attempt:', { email, password: '***' })

    // Validate input
    if (!email || !password) {
      console.log('Missing email or password')
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Find admin user
    const admin = ADMIN_USERS.find(user => user.email.toLowerCase() === email.toLowerCase())
    console.log('Admin found:', admin ? 'Yes' : 'No')
    
    if (!admin) {
      console.log('Admin not found for email:', email)
      return NextResponse.json(
        { message: 'Invalid admin credentials' },
        { status: 401 }
      )
    }

    // In production, use bcrypt to compare hashed passwords
    if (admin.password !== password) {
      console.log('Password mismatch for admin:', admin.email)
      return NextResponse.json(
        { message: 'Invalid admin credentials' },
        { status: 401 }
      )
    }

    console.log('Admin login successful:', admin.email)

    // Create JWT token with admin-specific claims
    const token = jwt.sign(
      {
        id: admin.id,
        email: admin.email,
        name: admin.name,
        role: admin.role,
        permissions: admin.permissions,
        type: 'admin' // Important: distinguish from employee tokens
      },
      JWT_SECRET,
      { expiresIn: '8h' } // Shorter expiry for admin tokens
    )

    // Set secure HTTP-only cookie for admin session
    const response = NextResponse.json({
      message: 'Admin login successful',
      token,
      admin: {
        id: admin.id,
        email: admin.email,
        name: admin.name,
        role: admin.role,
        permissions: admin.permissions
      }
    })

    // Set HTTP-only cookie for additional security
    response.cookies.set('adminToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax', // Changed from 'strict' to 'lax' for better compatibility
      maxAge: 8 * 60 * 60, // 8 hours
      path: '/' // Ensure cookie is available for all paths
    })

    return response

  } catch (error) {
    console.error('Admin login error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

// GET endpoint to verify admin session
export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization')
    const cookieToken = request.cookies.get('adminToken')?.value
    
    const token = authHeader?.replace('Bearer ', '') || cookieToken

    if (!token) {
      return NextResponse.json(
        { message: 'No admin token provided' },
        { status: 401 }
      )
    }

    try {
      const payload = jwt.verify(token, JWT_SECRET) as any
      
      // Verify it's an admin token
      if (payload.type !== 'admin') {
        return NextResponse.json(
          { message: 'Invalid token type' },
          { status: 401 }
        )
      }

      return NextResponse.json({
        admin: {
          id: payload.id,
          email: payload.email,
          name: payload.name,
          role: payload.role,
          permissions: payload.permissions
        }
      })

    } catch (jwtError) {
      return NextResponse.json(
        { message: 'Invalid or expired admin token' },
        { status: 401 }
      )
    }

  } catch (error) {
    console.error('Admin session verification error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

// DELETE endpoint for admin logout
export async function DELETE(request: NextRequest) {
  try {
    const response = NextResponse.json({
      message: 'Admin logout successful'
    })

    // Clear the admin cookie
    response.cookies.set('adminToken', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax', // Match the login cookie settings
      maxAge: 0, // Expire immediately
      path: '/' // Ensure cookie is cleared for all paths
    })

    return response

  } catch (error) {
    console.error('Admin logout error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
