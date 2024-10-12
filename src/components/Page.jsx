import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import useTheme from '../hook/useTheme'
export default function Page() {
  const { darkMode } = useTheme()
  return (
    <div className={`h-full w-full ${darkMode ? 'dark' : ''}`}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}
