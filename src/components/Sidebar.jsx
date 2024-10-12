import { Link } from 'react-router-dom'
import Trending from '../assets/icons/trending.svg'

export default function Sidebar() {
  return (
    <aside>
      <ul className="space-y-2">
        <li>
          <Link
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
            to="/"
          >
            <img src={Trending} width="24" height="24" alt="" />
            <span>Trending</span>
          </Link>
        </li>
      </ul>
    </aside>
  )
}
