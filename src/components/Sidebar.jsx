import { Link } from 'react-router-dom'
import Trending from '../assets/icons/trending.svg'
import useAuth from '../hook/useAuth'

export default function Sidebar() {
  const { auth } = useAuth()
  const isDisabled = Object.keys(auth).length === 0

  return (
    <aside>
      <ul className="space-y-2">
        <li className={isDisabled ? 'opacity-50 pointer-events-none' : ''}>
          <Link
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
            to={isDisabled ? '#' : '/'} // prevent link navigation if disabled
          >
            <img src={Trending} width="24" height="24" alt="" />
            <span>Trending</span>
          </Link>
        </li>
      </ul>
    </aside>
  )
}
