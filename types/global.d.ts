// Global type declarations

declare global {
  var registeredEmployees: Array<{
    id: number
    name: string
    email: string
    password: string
    employeeId: string
    department: string
    role: string
    isFirstLogin: boolean
    registeredAt: string
    status: string
  }>
  
  var inviteCodes: Array<{
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
  }>
}

export {}
