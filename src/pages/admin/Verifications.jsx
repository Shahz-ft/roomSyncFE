
import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'

const Verifications = () => {
  return (
    <DashboardLayout role="admin">
      <div className="mx-10 space-y-7">

        <div>
          <h1 className="text-3xl font-extrabold text-[#493951]">
            Property Verifications
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Review property registration and verification requests.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">

          <div className="rounded-2xl border border-purple-100 bg-white p-5">
            <p className="text-sm text-gray-500">Total Requests</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#493951]">12</h2>
          </div>

          <div className="rounded-2xl border border-purple-100 bg-white p-5">
            <p className="text-sm text-gray-500">Pending Review</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#D28A42]">08</h2>
          </div>

          <div className="rounded-2xl border border-purple-100 bg-white p-5">
            <p className="text-sm text-gray-500">Verified</p>
            <h2 className="mt-2 text-3xl font-extrabold text-green-600">04</h2>
          </div>

        </div>

        <div className="space-y-5">

         
          <div className="rounded-2xl border border-purple-100 bg-white p-6 shadow-sm">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">

              <div>
                <span className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-bold text-orange-700">
                  Pending Review
                </span>

                <h2 className="mt-4 text-xl font-extrabold text-[#493951]">
                  Lavender Heights
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  📍 Kazhakkoottam, Thiruvananthapuram, Kerala
                </p>
              </div>

              <p className="text-xs text-gray-400">Submitted: 23 Nov 2026</p>

            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 rounded-xl bg-[#FAF7FC] p-5 sm:grid-cols-3">
              <div>
                <p className="text-xs text-gray-500">Property Manager</p>
                <p className="mt-1 text-sm font-bold text-[#493951]">Rahul Kumar</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Contact Email</p>
                <p className="mt-1 text-sm font-bold text-[#493951]">rahul@gmail.com</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Property Type</p>
                <p className="mt-1 text-sm font-bold text-[#493951]">Hostel / PG</p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-gray-400">
                Property information submitted for review
              </p>
              <div className="flex gap-3">
                <button type="button" className="rounded-xl border border-red-200 px-5 py-2.5 text-sm font-bold text-red-600">
                  Reject
                </button>
                <button type="button" className="rounded-xl bg-[#765184] px-5 py-2.5 text-sm font-bold text-white">
                  Approve
                </button>
              </div>
            </div>
          </div>

          {/* Request 2 */}
          <div className="rounded-2xl border border-purple-100 bg-white p-6 shadow-sm">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">

              <div>
                <span className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-bold text-orange-700">
                  Pending Review
                </span>

                <h2 className="mt-4 text-xl font-extrabold text-[#493951]">
                  Sunrise Apartments
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  📍 Thrissur, Kerala
                </p>
              </div>

              <p className="text-xs text-gray-400">Submitted: 21 Nov 2026</p>

            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 rounded-xl bg-[#FAF7FC] p-5 sm:grid-cols-3">
              <div>
                <p className="text-xs text-gray-500">Property Manager</p>
                <p className="mt-1 text-sm font-bold text-[#493951]">Nikhil Raj</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Contact Email</p>
                <p className="mt-1 text-sm font-bold text-[#493951]">nikhil@gmail.com</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Property Type</p>
                <p className="mt-1 text-sm font-bold text-[#493951]">Shared Apartment</p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-gray-400">
                Property information submitted for review
              </p>
              <div className="flex gap-3">
                <button type="button" className="rounded-xl border border-red-200 px-5 py-2.5 text-sm font-bold text-red-600">
                  Reject
                </button>
                <button type="button" className="rounded-xl bg-[#765184] px-5 py-2.5 text-sm font-bold text-white">
                  Approve
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </DashboardLayout>
  )
}

export default Verifications
