// Client-side admin authentication utilities

export interface Admin {
  id: string
  email: string
  name: string
  role: string
  permissions: string[]
}

// Check if admin is authenticated
export function isAdminAuthenticated(): boolean {
  if (typeof window === 'undefined') return false
  
  const token = localStorage.getItem('adminToken')
  if (!token) return false

  try {
    const payload = JSON.parse(atob(token.split('.')[1]))
    const currentTime = Date.now() / 1000
    
    // Check if token is expired
    if (payload.exp && payload.exp < currentTime) {
      localStorage.removeItem('adminToken')
      return false
    }
    
    // Check if it's an admin token
    if (payload.type !== 'admin') {
      localStorage.removeItem('adminToken')
      return false
    }
    
    return true
  } catch (error) {
    localStorage.removeItem('adminToken')
    return false
  }
}

// Get current admin data from token
export function getCurrentAdmin(): Admin | null {
  if (typeof window === 'undefined') return null
  
  const token = localStorage.getItem('adminToken')
  if (!token) {
    console.log('getCurrentAdmin: No token found in localStorage')
    return null
  }

  try {
    // Validate token structure
    const parts = token.split('.')
    if (parts.length !== 3) {
      console.log('getCurrentAdmin: Invalid token structure')
      localStorage.removeItem('adminToken')
      return null
    }

    const payload = JSON.parse(atob(parts[1]))
    console.log('getCurrentAdmin: Token payload:', payload)
    
    // Check expiration
    const currentTime = Date.now() / 1000
    if (payload.exp && payload.exp < currentTime) {
      console.log('getCurrentAdmin: Token expired')
      localStorage.removeItem('adminToken')
      return null
    }
    
    // Verify it's an admin token
    if (payload.type !== 'admin') {
      console.log('getCurrentAdmin: Invalid token type:', payload.type)
      localStorage.removeItem('adminToken')
      return null
    }
    
    const admin = {
      id: payload.id,
      email: payload.email,
      name: payload.name,
      role: payload.role,
      permissions: payload.permissions || []
    }
    
    console.log('getCurrentAdmin: Returning admin:', admin)
    return admin
  } catch (error) {
    console.log('getCurrentAdmin: Error parsing token:', error)
    localStorage.removeItem('adminToken')
    return null
  }
}

// Admin logout function
export function adminLogout(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('adminToken')
    
    // Also call the logout API to clear HTTP-only cookies
    fetch('/api/admin/login', {
      method: 'DELETE',
      credentials: 'include' // Ensure cookies are sent
    }).catch(console.error)
    
    window.location.href = '/login'
  }
}

// Set admin authentication token
export function setAdminAuthToken(token: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('adminToken', token)
  }
}

// Check if admin has specific permission
export function hasPermission(permission: string): boolean {
  const admin = getCurrentAdmin()
  if (!admin) return false
  
  // Super admin has all permissions
  if (admin.permissions.includes('all')) return true
  
  return admin.permissions.includes(permission)
}

// Get admin token for API calls
export function getAdminToken(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('adminToken')
}
