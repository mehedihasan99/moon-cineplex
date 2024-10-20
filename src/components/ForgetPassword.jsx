import { useState } from 'react'
import { Link } from 'react-router-dom'
import { forgetPassword } from '../utils/firebase'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) {
      setMessage('Please enter your email')
      return
    }
    try {
      await forgetPassword(email)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex items-center justify-center mt-7 sm:-mt-24 sm:min-h-screen bg-gray-100 dark:bg-[#12141D]">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              placeholder="Enter your email"
              required
            />
          </div>

          {message && (
            <p className="text-sm text-center text-red-600">{message}</p>
          )}

          <div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Send Reset Link
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <Link to="/login" className="text-sm text-primary hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  )
}
