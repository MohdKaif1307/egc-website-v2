import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

// In a real application, you would store these in a database
// This is just for demonstration purposes
const EMPLOYEES = [
  {
    id: 1,
    email: 'Mohdkaif@egcworld.in',
    password: 'Admin@1307', // In production, this should be hashed
    name: 'Admin User',
    role: 'admin',
    isFirstLogin: false
  },
  {
    id: 2,
    email: 'Pranchal@egcworld.in',
    password: 'Pranchal@123', // In production, this should be hashed
    name: 'Pranchal User',
    role: 'employee',
    isFirstLogin: false
  },
  {
    id: 3,
    email: 'Sarika@egcworld.in',
    password: 'Sarika@123', // In production, this should be hashed
    name: 'Sarika User',
    role: 'employee',
    isFirstLogin: false
  }
]

// Import registered employees from registration endpoint
// In a real app, this would be a shared database
function getRegisteredEmployees() {
  try {
    // This is a simple way to share data between API routes
    // In production, use a proper database
    return global.registeredEmployees || []
  } catch {
    return []
  }
}

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Find employee in both default employees and registered employees
    const registeredEmployees = getRegisteredEmployees()
    const allEmployees = [...EMPLOYEES, ...registeredEmployees]
    const employee = allEmployees.find(emp => emp.email === email)
    
    if (!employee) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // In production, use bcrypt to compare hashed passwords
    if (employee.password !== password) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Create JWT token
    const token = jwt.sign(
      {
        id: employee.id,
        email: employee.email,
        name: employee.name,
        role: employee.role,
        isFirstLogin: employee.isFirstLogin || false
      },
      JWT_SECRET,
      { expiresIn: '24h' }
    )

    // Create response with HTTP-only cookie
    const response = NextResponse.json({
      message: 'Login successful',
      token,
      employee: {
        id: employee.id,
        email: employee.email,
        name: employee.name,
        role: employee.role,
        isFirstLogin: employee.isFirstLogin || false
      }
    })

    // Set HTTP-only cookie for middleware access
    response.cookies.set('employeeToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 // 24 hours
    })

    return response

  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
