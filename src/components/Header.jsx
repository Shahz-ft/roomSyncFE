
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="relative z-50 rounded-t-2xl border border-purple-100 bg-white/60 px-30 py-5 backdrop-blur-md">
      <nav className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">

          <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhXcmah9tqwj2bTzvO2QBP8rvdJZ1oqxJQbkFW26YcRQ&s=10"
                alt="RoomSync"
                className="h-8 w-8 object-contain"
            />

          <span className="text-xl font-bold tracking-tight text-purple-950">
            Room<span className='hover:text-pink-500'>Sync</span>
          </span>

        </Link>

        
        <div className="flex items-center gap-9">

          <a href="#home" className="text-sm font-semibold text-purple-950 transition hover:text-pink-500">
            Home
          </a>

          <a href="#features" className="text-sm font-semibold text-purple-950 transition hover:text-pink-500">
            Features
          </a>

          <a href="#about" className="text-sm font-semibold text-purple-950 transition hover:text-pink-500">
            About
          </a>

          <a href="#howitworks" className="text-sm font-semibold text-purple-950 transition hover:text-pink-500">
            How it Works
          </a>

        </div>

        
        <div className="flex items-center gap-3">

          <Link
            to="/login"
            className="rounded-full border border-purple-400 bg-white/70 px-5 py-2 text-sm font-semibold text-purple-900 transition hover:bg-purple-100"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-full bg-purple-800 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-purple-200 transition hover:bg-purple-900"
          >
            Sign Up
          </Link>

        </div>
      </nav>
    </header>
  )
}

export default Header
