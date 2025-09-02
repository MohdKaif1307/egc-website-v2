'use client'

import { useState, useEffect } from 'react'
import { getCurrentAdmin, getAdminToken } from '@/app/lib/adminAuth'

export default function AdminTest() {
  const [admin, setAdmin] = useState<any>(null)
  const [token, setToken] = useState<string | null>(null)
  const [apiTest, setApiTest] = useState<any>(null)

  useEffect(() => {
    const currentAdmin = getCurrentAdmin()
    const currentToken = getAdminToken()
    
    setAdmin(currentAdmin)
    setToken(currentToken)

    // Test API call
    if (currentToken) {
      fetch('/api/admin/invite-codes', {
        headers: {
          'Authorization': `Bearer ${currentToken}`
        }
      })
      .then(res => res.json())
      .then(data => setApiTest(data))
      .catch(err => setApiTest({ error: err.message }))
    }
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Authentication Test</h1>
      
      <div className="space-y-4">
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="font-bold">Current Admin:</h2>
          <pre>{JSON.stringify(admin, null, 2)}</pre>
        </div>

        <div className="bg-gray-100 p-4 rounded">
          <h2 className="font-bold">Token:</h2>
          <p className="break-all">{token || 'No token found'}</p>
        </div>

        <div className="bg-gray-100 p-4 rounded">
          <h2 className="font-bold">API Test:</h2>
          <pre>{JSON.stringify(apiTest, null, 2)}</pre>
        </div>
      </div>
    </div>
  )
}
