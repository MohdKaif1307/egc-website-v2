import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

// In a real application, you would store these in a database
// This is just for demonstration purposes
const EMPLOYEES = [
  {
    id: 1,
    email: 'admin@egc.com',
    password: 'admin123', // In production, this should be hashed
    name: 'Admin User',
    role: 'admin'
  },
  {
    id: 2,
    email: 'employee@egc.com',
    password: 'emp123', // In production, this should be hashed
    name: 'Employee User',
    role: 'employee'
  }
]

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

    // Find employee
    const employee = EMPLOYEES.find(emp => emp.email === email)
    
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
        role: employee.role
      },
      JWT_SECRET,
      { expiresIn: '24h' }
    )

    // Return success response
    return NextResponse.json({
      message: 'Login successful',
      token,
      employee: {
        id: employee.id,
        email: employee.email,
        name: employee.name,
        role: employee.role
      }
    })

  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
