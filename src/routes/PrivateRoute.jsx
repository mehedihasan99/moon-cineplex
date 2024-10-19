import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../hook/useAuth'

export default function PrivateRoute({ children }) {
  const { auth } = useAuth()

  if (Object?.keys(auth)?.length !== 0) return children

  return <Navigate to="/login" />
}
