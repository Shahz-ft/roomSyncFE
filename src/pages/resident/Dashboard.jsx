
import React from 'react'
import { Link } from 'react-router-dom'
import DashboardLayout from '../../components/DashboardLayout'
const ResidentDB = () => {
  return (
      <DashboardLayout role="resident">
    <div className="min-h-screen bg-[#F8F5FA] p-6 md:p-8 ">

      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-semibold text-[#A477B5]">  WEDNESDAY, NOVEMBER 25, 2026</p>
          <h1 className="mt-2 text-3xl font-extrabold text-[#34243D]">
            Welcome back, Shahana! 👋
          </h1>
          <p className="mt-2 text-sm text-[#897A90]">
            Here's what's happening with your accommodation today.
          </p>
        </div>

        
      </div>

     
      <div className="mb-7 overflow-hidden rounded-2xl bg-linear-to-r from-[#755080] to-[#A477B5] p-6 text-white shadow-md md:p-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-medium text-purple-100">YOUR CURRENT HOME</p>
            <h2 className="mt-2 text-2xl font-extrabold">Green Valley Residency</h2>
            <p className="mt-2 text-sm text-purple-100">
              📍 Kazhakkoottam, Thiruvananthapuram
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <span className="rounded-lg bg-white/15 px-3 py-2">Room 204</span>
              <span className="rounded-lg bg-white/15 px-3 py-2">Shared Room</span>
              <span className="rounded-lg bg-white/15 px-3 py-2">Since August 2026</span>
            </div>
          </div>

          <Link
            to="/resident/accommodation"
            className="w-fit rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#755080] transition hover:bg-[#F7EFFA]"
          >
            View Accommodation →
          </Link>
        </div>
      </div>

    
      <div className="mb-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-2xl border border-[#F0E7F3] bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-[#8D7E94]">Monthly Rent</span>
            <span className="rounded-xl bg-[#F3EAF7] p-3 text-xl">🏠</span>
          </div>
          <h3 className="mt-4 text-2xl font-extrabold text-[#910505]">₹6,500</h3>
          <p className="mt-2 text-xs text-[#b98e8e]">Due on December 5, 2026</p>
        </div>

        <div className="rounded-2xl border border-[#F0E7F3] bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-[#836187]">Pending Expenses</span>
            <span className="rounded-xl bg-[#FFF0EC] p-3 text-xl">💸</span>
          </div>
          <h3 className="mt-4 text-2xl font-extrabold text-[#f8d50d]">₹850</h3>
          <p className="mt-2 text-xs text-[#b7aa4b]">2 payments awaiting your share</p>
        </div>

        <div className="rounded-2xl border border-[#F0E7F3] bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-[#8D7E94]">Active Complaints</span>
            <span className="rounded-xl bg-[#FFF5E6] p-3 text-xl">🛠️</span>
          </div>
          <h3 className="mt-4 text-2xl font-extrabold text-[#0d880d]">1</h3>
          <p className="mt-2 text-xs text-[#4e8741]">Currently being reviewed</p>
        </div>

        <div className="rounded-2xl border border-[#F0E7F3] bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-[#8D7E94]">New Notices</span>
            <span className="rounded-xl bg-[#EAF3FA] p-3 text-xl">📢</span>
          </div>
          <h3 className="mt-4 text-2xl font-extrabold text-[#01728b]">2</h3>
          <p className="mt-2 text-xs text-[#496570]">Updates from your manager</p>
        </div>

      </div>

   
      <div className="grid gap-6 xl:grid-cols-3 ">

    
        <div className="space-y-6 xl:col-span-2 mt-8">

          <div className="rounded-2xl border border-[#F0E7F3] bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#34243D]">Rent Overview</h3>
                <p className="mt-1 text-sm text-[#A092A5]">Your latest rent details</p>
              </div>
              <Link to="/resident/expenses" className="text-sm font-bold text-[#966AA7] hover:text-[#755080]">
                View all →
              </Link>
            </div>

            <div className="rounded-xl bg-[#FAF6FC] p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm text-[#95869B]">December 2026 Rent</p>
                  <h2 className="mt-2 text-3xl font-extrabold text-[#126c05]">₹6,500</h2>
                </div>
                <span className="rounded-full bg-[#FFF2E7] px-4 py-2 text-xs font-bold text-[#D58A50]">
                  Upcoming
                </span>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-[#EDE3F1] pt-4 text-sm">
                <span className="text-[#95869B]">Payment due date</span>
                <span className="font-bold text-[#574460]">December 5, 2026</span>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-[#95869B]">Last payment: ₹6,500 · November 4</p>
              <Link to="/resident/expenses" className="rounded-xl bg-[#79558A] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#63416F]">
                View Rent & Expenses
              </Link>
            </div>
          </div>

       
          <div className="rounded-2xl border border-[#F0E7F3] bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#34243D]">Shared Expenses</h3>
                <p className="mt-1 text-sm text-[#A092A5]">Your roommate expense contributions</p>
              </div>
              <Link to="/resident/expenses" className="text-sm font-bold text-[#966AA7] hover:text-[#755080]">
                See all →
              </Link>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3 border-b border-[#F3EDF5] pb-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-[#FFF0EC] p-3 text-xl">🛒</div>
                  <div>
                    <p className="font-bold text-[#493951]">Monthly Groceries</p>
                    <p className="mt-1 text-xs text-[#A092A5]">Added by Anjali · Nov 20</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-[#34243D]">₹500</p>
                  <p className="mt-1 text-xs font-semibold text-[#D9877F]">Pending</p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-[#F3EAF7] p-3 text-xl">💧</div>
                  <div>
                    <p className="font-bold text-[#493951]">Water Can</p>
                    <p className="mt-1 text-xs text-[#A092A5]">Added by Meera · Nov 18</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-[#34243D]">₹350</p>
                  <p className="mt-1 text-xs font-semibold text-[#D9877F]">Pending</p>
                </div>
              </div>
            </div>
          </div>

      
        </div>

   
        <div className="space-y-6 mt-8">

        

 
          <div className="rounded-2xl border border-[#F0E7F3] bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#34243D]">Latest Notices</h3>
                <p className="mt-1 text-sm text-[#A092A5]">Updates from your property</p>
              </div>
              <Link to="/resident/notices" className="text-sm font-bold text-[#966AA7] hover:text-[#755080]">
                All →
              </Link>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-[#A477B5] pl-4">
                <p className="text-sm font-bold text-[#493951]">Water Tank Cleaning</p>
                <p className="mt-1 text-xs leading-relaxed text-[#95869B]">
                  Water supply will be unavailable on November 27, 10 AM – 1 PM.
                </p>
                <p className="mt-2 text-xs text-[#B0A3B5]">November 23, 2026</p>
              </div>

              <div className="border-l-4 border-[#EF9B91] pl-4">
                <p className="text-sm font-bold text-[#493951]">Common Area Maintenance</p>
                <p className="mt-1 text-xs leading-relaxed text-[#95869B]">
                  Please keep the common areas clean and tidy.
                </p>
                <p className="mt-2 text-xs text-[#B0A3B5]">November 21, 2026</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-[#F1E8F5] p-6">
            <div className="text-2xl">💜</div>
            <h3 className="mt-3 font-bold text-[#493951]">Need some help?</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#897A90]">
              Have an issue with your accommodation? Let your property manager know.
            </p>
            <Link to="/resident/complaints" className="mt-4 inline-block text-sm font-extrabold text-[#79558A] hover:text-[#63416F]">
              Get support →
            </Link>
          </div>

        </div>
      </div>
    </div>
  </DashboardLayout>
    
    
  )
}

export default ResidentDB
