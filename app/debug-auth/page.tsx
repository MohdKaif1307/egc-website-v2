'use client'

import { useState, useEffect } from 'react'
import { getCurrentAdmin, getAdminToken } from '@/app/lib/adminAuth'

export default function DebugAuth() {
  const [adminToken, setAdminToken] = useState<string | null>(null)
  const [admin, setAdmin] = useState<any>(null)
  const [cookies, setCookies] = useState<string>('')

  useEffect(() => {
    // Check localStorage token
    const token = getAdminToken()
    setAdminToken(token)
    
    // Check current admin
    const currentAdmin = getCurrentAdmin()
    setAdmin(currentAdmin)
    
    // Check cookies
    setCookies(document.cookie)
  }, [])

  const testAdminAPI = async () => {
    try {
      const response = await fetch('/api/admin/invite-codes', {
        headers: {
          'Authorization': `Bearer ${adminToken}`
        }
      })
      const data = await response.json()
      console.log('API Test Result:', data)
    } catch (error) {
      console.error('API Test Error:', error)
    }
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Authentication Debug</h1>
      
      <div className="space-y-6">
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">localStorage Token</h2>
          <p className="text-sm break-all">{adminToken || 'No token found'}</p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Current Admin</h2>
          <pre className="text-sm">{JSON.stringify(admin, null, 2)}</pre>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Cookies</h2>
          <p className="text-sm break-all">{cookies || 'No cookies found'}</p>
        </div>

        <button
          onClick={testAdminAPI}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Test Admin API
        </button>

        <div className="mt-4">
          <a href="/login" className="text-blue-600 hover:underline">Go to Login</a> | 
          <a href="/admin" className="text-blue-600 hover:underline ml-2">Go to Admin</a>
        </div>
      </div>
    </div>
  )
}
