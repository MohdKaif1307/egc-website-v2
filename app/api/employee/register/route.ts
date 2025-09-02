import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

// Function to get valid invite codes from the admin system
function getValidInviteCodes() {
  if (!global.inviteCodes) {
    return []
  }
  
  // Filter for active codes (not used up, not expired)
  return global.inviteCodes.filter((code: any) => {
    const now = new Date()
    const expiresAt = new Date(code.expiresAt)
    return code.currentUses < code.maxUses && expiresAt > now
  })
}

// Function to use an invite code
function useInviteCode(inviteCode: string, employeeEmail: string) {
  if (!global.inviteCodes) {
    return null
  }
  
  const code = global.inviteCodes.find((code: any) => code.code === inviteCode)
  if (!code) {
    return null
  }
  
  // Check if code is still valid
  const now = new Date()
  const expiresAt = new Date(code.expiresAt)
  if (code.currentUses >= code.maxUses || expiresAt < now) {
    return null
  }
  
  // Use the code
  code.currentUses += 1
  if (code.currentUses >= code.maxUses) {
    code.isUsed = true
    code.usedBy = employeeEmail
    code.usedAt = new Date().toISOString()
  }
  
  return code
}

// Temporary storage for registered employees (in production, use a database)
// Using global variable to share between API routes
if (!global.registeredEmployees) {
  global.registeredEmployees = []
}

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function POST(request: NextRequest) {
  try {
    const { name, email, password, employeeId, department, inviteCode } = await request.json()

    // Validate required fields
    if (!name || !email || !password || !employeeId || !department || !inviteCode) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate invite code
    const validCodes = getValidInviteCodes()
    const codeExists = validCodes.some((code: any) => code.code === inviteCode)
    
    if (!codeExists) {
      return NextResponse.json(
        { message: 'Invalid or expired invite code. Please contact your administrator.' },
        { status: 400 }
      )
    }

    // Check if email already exists
    const existingEmployee = global.registeredEmployees.find((emp: any) => emp.email === email)
    if (existingEmployee) {
      return NextResponse.json(
        { message: 'An account with this email already exists' },
        { status: 400 }
      )
    }

    // Check if employee ID already exists
    const existingEmployeeId = global.registeredEmployees.find((emp: any) => emp.employeeId === employeeId)
    if (existingEmployeeId) {
      return NextResponse.json(
        { message: 'This employee ID is already registered' },
        { status: 400 }
      )
    }

    // Validate email domain (optional - ensure it's from company domain)
    if (!email.endsWith('@egc.com') && !email.includes('egc')) {
      // Allow some flexibility for demo purposes
      console.warn('Non-company email registered:', email)
    }

    // Validate password strength
    if (password.length < 8) {
      return NextResponse.json(
        { message: 'Password must be at least 8 characters long' },
        { status: 400 }
      )
    }

    // Create new employee record
    const newEmployee = {
      id: global.registeredEmployees.length + 100, // Start from 100 to avoid conflicts with existing employees
      name,
      email,
      password, // In production, hash this with bcrypt
      employeeId,
      department,
      role: 'employee', // Default role
      isFirstLogin: true,
      registeredAt: new Date().toISOString(),
      status: 'active'
    }

    // Use the invite code
    const usedCode = useInviteCode(inviteCode, email)
    if (!usedCode) {
      return NextResponse.json(
        { message: 'Invite code is no longer valid or has been used up.' },
        { status: 400 }
      )
    }

    // Inherit role and department from invite code if specified
    if (usedCode.role) {
      newEmployee.role = usedCode.role
    }
    if (usedCode.department) {
      newEmployee.department = usedCode.department
    }

    // Add to registered employees
    global.registeredEmployees.push(newEmployee)

    // Create JWT token for immediate login
    const token = jwt.sign(
      {
        id: newEmployee.id,
        email: newEmployee.email,
        name: newEmployee.name,
        role: newEmployee.role,
        isFirstLogin: true
      },
      JWT_SECRET,
      { expiresIn: '24h' }
    )

    // Return success response with token
    return NextResponse.json({
      message: 'Registration successful! Welcome to EGC.',
      token,
      employee: {
        id: newEmployee.id,
        email: newEmployee.email,
        name: newEmployee.name,
        role: newEmployee.role,
        department: newEmployee.department,
        employeeId: newEmployee.employeeId,
        isFirstLogin: true
      }
    })

  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

// GET endpoint to retrieve registered employees (for admin purposes)
export async function GET(request: NextRequest) {
  try {
    // In production, add proper authentication check for admin access
    const authHeader = request.headers.get('authorization')
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Return list of registered employees (without passwords)
    const employeeList = global.registeredEmployees.map((emp: any) => ({
      id: emp.id,
      name: emp.name,
      email: emp.email,
      employeeId: emp.employeeId,
      department: emp.department,
      role: emp.role,
      registeredAt: emp.registeredAt,
      status: emp.status
    }))

    return NextResponse.json({
      employees: employeeList,
      total: employeeList.length
    })

  } catch (error) {
    console.error('Get employees error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
