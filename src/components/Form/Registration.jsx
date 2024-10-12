import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createUserWithEmail } from '../../utils/firebase'

export default function Registration() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm()
  const navigate = useNavigate()
  async function handleFormSubmit(formData) {
    try {
      await createUserWithEmail(
        formData.name,
        formData.email,
        formData.password,
        formData.confirmPassword
      )
      toast.success('Account created successfully')
    } catch (error) {
      // Handle error
      setError('root.random', {
        type: 'manual',
        message: error.message,
      })
    }
    navigate('/login')
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-[#12141D]">
      <div className="w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] p-4">
        <div className="bg-white shadow-md -mt-20 dark:bg-[#2A2A34] rounded-2xl p-5 md:p-9">
          <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Full Name
              </label>
              <input
                {...register('name', { required: 'Full name is required' })}
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-[#2A2A34] dark:text-white"
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name.message}</p>
              )}
            </div>
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
            <div className="space-y-2">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Confirm Password
              </label>
              <input
                {...register('confirmPassword', {
                  required: 'Please confirm your password',
                  validate: (value) => {
                    const { password } = watch() // get the value of password
                    return value === password || 'Passwords do not match'
                  },
                })}
                type="password"
                id="confirmPassword"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-[#2A2A34] dark:text-white"
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            <div className="space-y-4">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition duration-150 ease-in-out"
              >
                Register
              </button>
              <p className="text-red-500 text-xs">
                {errors.root?.random?.message}
              </p>
              <p className="text-center text-sm text-gray-600 dark:text-gray-300">
                Already have an account?{' '}
                <Link to="/login" className="text-primary hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
