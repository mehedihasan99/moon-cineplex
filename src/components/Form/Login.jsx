import React from 'react'
import { useForm } from 'react-hook-form'
import { FaFacebookF, FaGoogle } from 'react-icons/fa' // Import social icons
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hook/useAuth'
import { signInWithEmail } from '../../utils/firebase'

export default function Login() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm()
  const navigate = useNavigate()
  const { setAuth } = useAuth()
  async function handleFormSubmit(formData) {
    try {
      const response = await signInWithEmail(formData.email, formData.password)
      console.log(response)
      setAuth(response.user)
    } catch (error) {
      setError('root.random', {
        type: 'manual',
        message: error.message,
      })
    }
    navigate('/')
  }

  // Placeholder for social login handling
  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-[#12141D]">
      <div className="w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] p-4">
        <div className="bg-white shadow-md -mt-20 dark:bg-[#2A2A34] rounded-2xl p-5 md:p-9">
          <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                {...register('email', { required: 'Enter Your Valid Email' })}
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-[#2A2A34] dark:text-white"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Password
              </label>
              <input
                {...register('password', {
                  required: 'Enter Your Password',
                  minLength: {
                    value: 8,
                    message: 'Password should be at least 8 characters',
                  },
                })}
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-[#2A2A34] dark:text-white"
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-red-500 text-xs">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-primary transition duration-150 ease-in-out"
                />
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                  Remember me
                </span>
              </label>
              <Link
                to="/forgot-password"
                className="text-sm text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Social Login Section */}
            <div className="space-y-4">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition duration-150 ease-in-out"
              >
                Login
              </button>
              <p className="text-red-500 text-xs">
                {errors.root?.random?.message}
              </p>
              <p className="text-center text-sm text-gray-600 dark:text-gray-300">
                Or login with
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  type="button"
                  onClick={() => handleSocialLogin('Google')}
                  className="flex items-center justify-center w-10 h-10 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
                >
                  <FaGoogle size={20} />
                </button>
                <button
                  type="button"
                  onClick={() => handleSocialLogin('Facebook')}
                  className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                >
                  <FaFacebookF size={20} />
                </button>
              </div>
              <p className="text-center text-sm text-gray-600 dark:text-gray-300">
                Don’t have an account?{' '}
                <Link to="/register" className="text-primary hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
