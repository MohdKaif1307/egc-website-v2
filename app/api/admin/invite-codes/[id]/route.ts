import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

// Verify admin token
function verifyAdminToken(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null
  }

  try {
    const token = authHeader.substring(7)
    const payload = jwt.verify(token, JWT_SECRET) as any
    
    // Check if it's an admin token (new system)
    if (payload.type !== 'admin') {
      return null
    }
    
    // Additional check for role (backward compatibility)
    if (!payload.role || (!payload.role.includes('admin') && payload.role !== 'admin')) {
      return null
    }
    
    return payload
  } catch (error) {
    return null
  }
}

// DELETE - Deactivate/remove an invite code
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  try {
    const admin = verifyAdminToken(request)
    if (!admin) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    const codeId = id

    if (!global.inviteCodes) {
      return NextResponse.json(
        { message: 'No invite codes found' },
        { status: 404 }
      )
    }

    const codeIndex = global.inviteCodes.findIndex((code: any) => code.id === codeId)
    
    if (codeIndex === -1) {
      return NextResponse.json(
        { message: 'Invite code not found' },
        { status: 404 }
      )
    }

    // Remove the code from the array
    const removedCode = global.inviteCodes.splice(codeIndex, 1)[0]

    return NextResponse.json({
      message: 'Invite code deactivated successfully',
      code: removedCode
    })

  } catch (error) {
    console.error('Delete invite code error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

// GET - Get specific invite code details
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  try {
    const admin = verifyAdminToken(request)
    if (!admin) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    const codeId = id

    if (!global.inviteCodes) {
      return NextResponse.json(
        { message: 'No invite codes found' },
        { status: 404 }
      )
    }

    const code = global.inviteCodes.find((code: any) => code.id === codeId)
    
    if (!code) {
      return NextResponse.json(
        { message: 'Invite code not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      code
    })

  } catch (error) {
    console.error('Get invite code error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
