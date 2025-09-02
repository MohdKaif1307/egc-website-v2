// Client-side authentication utilities

export interface Employee {
  id: number
  email: string
  name: string
  role: string
}

// Check if user is authenticated
export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false
  
  const token = localStorage.getItem('employeeToken')
  if (!token) return false

  try {
    const payload = JSON.parse(atob(token.split('.')[1]))
    const currentTime = Date.now() / 1000
    
    // Check if token is expired
    if (payload.exp && payload.exp < currentTime) {
      localStorage.removeItem('employeeToken')
      return false
    }
    
    return true
  } catch (error) {
    localStorage.removeItem('employeeToken')
    return false
  }
}

// Get current employee data from token
export function getCurrentEmployee(): Employee | null {
  if (typeof window === 'undefined') return null
  
  const token = localStorage.getItem('employeeToken')
  if (!token) return null

  try {
    const payload = JSON.parse(atob(token.split('.')[1]))
    return {
      id: payload.id,
      email: payload.email,
      name: payload.name,
      role: payload.role
    }
  } catch (error) {
    return null
  }
}

// Logout function
export function logout(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('employeeToken')
    window.location.href = '/employee/login'
  }
}

// Set authentication token
export function setAuthToken(token: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('employeeToken', token)
  }
}
