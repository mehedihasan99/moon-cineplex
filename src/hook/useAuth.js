import { useContext } from 'react'
import { AuthContext } from '../context'

const useAuth = () => {
  const { auth, setAuth } = useContext(AuthContext)
  return { auth, setAuth }
}

export default useAuth
