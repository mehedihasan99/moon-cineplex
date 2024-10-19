import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  let error = useRouteError()
  console.log(error)
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-[#12141D]">
      <div className="bg-white dark:bg-[#2A2A34] p-6 rounded-lg shadow-md text-center max-w-md">
        <h1 className="text-4xl font-bold text-red-600 dark:text-red-400">
          Oops!
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          Something went wrong. Please try again later.
        </p>
        <div className="mt-4">
          <Link
            to="/login"
            className="inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition duration-150 ease-in-out"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  )
}
