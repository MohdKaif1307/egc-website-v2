export default function SimpleAdmin() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Simple Admin Page</h1>
      <p>This is a test admin page without authentication.</p>
      <a href="/login" className="text-blue-600 hover:underline">Go to Login</a>
    </div>
  )
}
