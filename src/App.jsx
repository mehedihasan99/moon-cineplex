import { useReducer, useState } from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import MovieList from './components/cineplex/MovieList'
import ErrorPage from './components/ErrorPage'
import ForgotPassword from './components/ForgetPassword'
import Login from './components/Form/Login'
import Registration from './components/Form/Registration'
import Page from './components/Page'
import { AuthContext, CardDataContext, ThemeContext } from './context'
import { cardReducer, initialState } from './reducers/cardReducer'
import PrivateRoute from './routes/PrivateRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Page />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: (
          <PrivateRoute>
            <MovieList />
          </PrivateRoute>
        ),
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Registration />,
      },
      {
        path: 'forgetPassword',
        element: <ForgotPassword />,
      },
    ],
  },
])

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [state, dispatch] = useReducer(cardReducer, initialState)
  const [auth, setAuth] = useState({})
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <CardDataContext.Provider value={{ state, dispatch }}>
        <AuthContext.Provider
          value={{
            auth,
            setAuth,
          }}
        >
          <RouterProvider router={router} />
          <ToastContainer />
        </AuthContext.Provider>
      </CardDataContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
