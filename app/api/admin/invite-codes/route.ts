import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

interface InviteCode {
  id: string
  code: string
  createdBy: string
  createdAt: string
  expiresAt: string
  isUsed: boolean
  usedBy?: string
  usedAt?: string
  maxUses: number
  currentUses: number
  department?: string
  role?: string
  notes?: string
}

// In-memory storage for invite codes (in production, use a database)
if (!global.inviteCodes) {
  global.inviteCodes = [
    {
      id: '1',
      code: 'EGC-WELCOME-2024',
      createdBy: 'Admin User',
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days
      isUsed: false,
      maxUses: 10,
      currentUses: 0,
      role: 'employee',
      notes: 'Default welcome code for new employees'
    },
    {
      id: '2',
      code: 'NEW-EMPLOYEE-2024',
      createdBy: 'Admin User',
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days
      isUsed: false,
      maxUses: 5,
      currentUses: 0,
      role: 'employee',
      notes: 'Code for new employee batch'
    },
    {
      id: '3',
      code: 'TEAM-JOIN-2024',
      createdBy: 'Admin User',
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(), // 14 days
      isUsed: false,
      maxUses: 1,
      currentUses: 0,
      department: 'Marketing',
      role: 'employee',
      notes: 'Marketing team expansion'
    }
  ]
}

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

// Verify admin token
function verifyAdminToken(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.log('No auth header or invalid format')
    return null
  }

  try {
    const token = authHeader.substring(7)
    const payload = jwt.verify(token, JWT_SECRET) as { id: string; email: string; name?: string; type: string; role?: string; iat?: number; exp?: number }
    
    // Check if it's an admin token (new system)
    if (payload.type !== 'admin') {
      console.log('Token type is not admin:', payload.type)
      return null
    }
    
    // Additional check for role (backward compatibility)
    if (!payload.role || (!payload.role.includes('admin') && payload.role !== 'admin')) {
      console.log('Invalid admin role:', payload.role)
      return null
    }
    
    return payload
  } catch (error) {
    console.error('Token verification error:', error)
    return null
  }
}

// Generate random invite code
function generateInviteCode(): string {
  const prefix = 'EGC'
  const timestamp = Date.now().toString(36).toUpperCase()
  const random = Math.random().toString(36).substring(2, 8).toUpperCase()
  return `${prefix}-${timestamp}-${random}`
}

// GET - Fetch all invite codes
export async function GET(request: NextRequest) {
  try {
    const admin = verifyAdminToken(request)
    if (!admin) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    return NextResponse.json({
      codes: global.inviteCodes,
      total: global.inviteCodes.length
    })

  } catch (error) {
    console.error('Get invite codes error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST - Create new invite code
export async function POST(request: NextRequest) {
  try {
    const admin = verifyAdminToken(request)
    if (!admin) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { department, role = 'employee', maxUses = 1, expiryDays = 7, notes } = await request.json()

    // Create new invite code
    const newCode: InviteCode = {
      id: Date.now().toString(),
      code: generateInviteCode(),
      createdBy: admin.name || admin.email,
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + expiryDays * 24 * 60 * 60 * 1000).toISOString(),
      isUsed: false,
      maxUses: Math.max(1, maxUses),
      currentUses: 0,
      department: department || undefined,
      role: role || 'employee',
      notes: notes || undefined
    }

    global.inviteCodes.unshift(newCode)

    return NextResponse.json({
      message: 'Invite code created successfully',
      code: newCode
    })

  } catch (error) {
    console.error('Create invite code error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
