import { useState } from 'react'
import { IoIosLogOut } from 'react-icons/io'
import { Link } from 'react-router-dom'
import moon from '../assets/icons/moon.svg'
import sun from '../assets/icons/sun.svg'
import logo from '../assets/logo.svg'
import ring from '../assets/ring.svg'
import shoppingCart from '../assets/shopping-cart.svg'
import useAuth from '../hook/useAuth'
import useCardData from '../hook/useCardData'
import useTheme from '../hook/useTheme'
import { signOutUser } from '../utils/firebase'
import CardDetailsModal from './cineplex/CardDetailsModal'
export default function Header() {
  const [showCard, setShowCard] = useState(false)
  const { state } = useCardData()
  const { darkMode, setDarkMode } = useTheme()
  const { auth, setAuth } = useAuth()
  return (
    <header>
      {showCard && (
        <CardDetailsModal
          onCardDetailsClose={() => {
            setShowCard(false)
          }}
        />
      )}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <Link to="/">
          <img src={logo} width="139" height="26" alt="" />
        </Link>

        <ul className="flex items-center space-x-5">
          <li>
            <button
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              onClick={() => setDarkMode((darkMode) => !darkMode)}
            >
              <img src={darkMode ? sun : moon} width="24" height="24" alt="" />
            </button>
          </li>
          <li className="relative">
            <button
              onClick={() => setShowCard(true)}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
            >
              <img src={shoppingCart} width="24" height="24" alt="" />
            </button>

            {state.cardData.length > 0 && (
              <span className="bg-green-400 text-white text-sm absolute -top-4 left-7 w-6 h-6 flex  justify-center items-center rounded-full">
                {state.cardData.length}
              </span>
            )}
          </li>
          {auth.email && (
            <li>
              <Link
                to="/profile"
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 h-8  text-green-500 flex justify-center items-center font-medium"
              >
                {auth.displayName.split(' ')[0]}
              </Link>
            </li>
          )}
          {Object.keys(auth).length !== 0 ? (
            <li className="relative">
              <button
                onClick={() => {
                  signOutUser()
                  setAuth({})
                }}
                to="/login"
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 h-8 text-green-500 flex justify-center items-center font-medium "
              >
                <IoIosLogOut size={26} />
              </button>
            </li>
          ) : (
            <li className="relative">
              <Link
                to="/login"
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 h-8 text-green-500 flex justify-center items-center font-medium mb-1"
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}
