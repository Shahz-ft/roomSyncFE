
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="border-t border-purple-100 bg-[#F8F3FC]">

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-8 py-8">

        <div className="flex items-center gap-4">

          <Link to="/" className="flex shrink-0 items-center gap-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhXcmah9tqwj2bTzvO2QBP8rvdJZ1oqxJQbkFW26YcRQ&s=10"
              alt="RoomSync"
              className="h-9 w-9 rounded-full object-contain"
            />

            <span className="text-xl font-bold text-purple-950">
              RoomSync
            </span>
          </Link>

          <div className="h-9 w-px bg-purple-200"></div>

          <p className="max-w-sm text-sm leading-6 text-gray-600">
            Shared living, simplified. Manage accommodation, track payments,
            split expenses and stay connected.
          </p>

        </div>

       
        <div className="shrink-0 text-right">

          <p className="text-sm text-gray-500">
            © 2026 RoomSync. All rights reserved.
          </p>

          <p className="mt-1 text-sm font-semibold text-purple-800">
            One space. Everything in sync. 💜
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer
