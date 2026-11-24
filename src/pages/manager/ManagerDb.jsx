
import React from 'react'
import { Link } from 'react-router-dom'
import DashboardLayout from '../../components/DashboardLayout'

const ManagerDb = () => {
  return (
    <DashboardLayout role="manager">
      <div className="space-y-7 mx-10">

     
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold text-[#A477B5]">PROPERTY OVERVIEW</p>
            <h1 className="mt-2 text-3xl font-extrabold text-[#34243D]">
              Welcome! 👋
            </h1>
            <p className="mt-2 text-sm text-[#897A90]">
              Here's what's happening at your property today.
            </p>
          </div>

          <Link
            to="/manager/property"
            className="w-fit rounded-xl bg-[#79558A] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#63416F]"
          >
            Manage Property →
          </Link>
        </div>


        <div className="overflow-hidden  rounded-2xl bg-linear-to-r from-[#755080] to-[#A477B5] p-6 text-white shadow-md md:p-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-semibold text-purple-100">YOUR PROPERTY</p>
              <h2 className="mt-2 text-2xl font-extrabold">Green Valley Residency</h2>
              <p className="mt-2 text-sm text-purple-100">
                📍 Kazhakkoottam, Thiruvananthapuram
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <span className="rounded-lg bg-white/15 px-3 py-2">PG Accommodation</span>
                <span className="rounded-lg bg-white/15 px-3 py-2">20 Total Rooms</span>
                <span className="rounded-lg bg-white/15 px-3 py-2">32 Residents</span>
              </div>
            </div>

            <div className="rounded-2xl bg-white/15 p-5 md:min-w-44">
              <p className="text-sm text-purple-100">Property Status</p>
              <p className="mt-2 text-xl font-extrabold">Active</p>
              <div className="mt-3 flex items-center gap-2 text-xs text-purple-100">
                <span className="h-2 w-2 rounded-full bg-green-300"></span>
                Your property is live
              </div>
            </div>
          </div>
        </div>

      
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-2xl border border-[#F0E7F3] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-[#8D7E94]">Total Residents</p>
              <span className="rounded-xl bg-[#F3EAF7] p-3 text-xl">👥</span>
            </div>
            <h3 className="mt-4 text-3xl font-extrabold text-[#34243D]">32</h3>
            <p className="mt-2 text-xs text-[#A092A5]">Currently staying</p>
          </div>

          <div className="rounded-2xl border border-[#F0E7F3] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-[#8D7E94]">Occupied Rooms</p>
              <span className="rounded-xl bg-[#EAF3FA] p-3 text-xl">🏠</span>
            </div>
            <h3 className="mt-4 text-3xl font-extrabold text-[#979200]">16/20</h3>
            <p className="mt-2 text-xs text-[#A092A5]">80% occupancy</p>
          </div>

          <div className="rounded-2xl border border-[#F0E7F3] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-[#8D7E94]">Rent Collected</p>
              <span className="rounded-xl bg-[#EAF7F0] p-3 text-xl">💰</span>
            </div>
            <h3 className="mt-4 text-3xl font-extrabold text-[#004b39]">₹1.82L</h3>
            <p className="mt-2 text-xs text-[#62A581]">November 2026</p>
          </div>

          <div className="rounded-2xl border border-[#F0E7F3] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-[#8D7E94]">Pending Complaints</p>
              <span className="rounded-xl bg-[#FFF0EC] p-3 text-xl">🛠️</span>
            </div>
            <h3 className="mt-4 text-3xl font-extrabold text-[#d50606]">4</h3>
            <p className="mt-2 text-xs text-[#D9877F]">Need your attention</p>
          </div>

        </div>

        
        <div className="grid gap-6 xl:grid-cols-3 ">

     
          <div className="space-y-6 xl:col-span-2 mt-8">

    
            <div className="rounded-2xl border border-[#F0E7F3] bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#34243D]">Room Occupancy</h3>
                  <p className="mt-1 text-sm text-[#A092A5]">Current room availability</p>
                </div>
                <Link to="/manager/property" className="text-sm font-bold text-[#966AA7] hover:text-[#755080]">
                  View rooms →
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                <div className="rounded-xl bg-[#EAF7F0] p-4 text-center">
                  <h4 className="text-2xl font-extrabold text-[#4D9871]">16</h4>
                  <p className="mt-1 text-xs font-semibold text-[#6D9D82]">Occupied</p>
                </div>
                <div className="rounded-xl bg-[#F3EAF7] p-4 text-center">
                  <h4 className="text-2xl font-extrabold text-[#79558A]">4</h4>
                  <p className="mt-1 text-xs font-semibold text-[#987BA4]">Available</p>
                </div>
                <div className="rounded-xl bg-[#FFF2E7] p-4 text-center">
                  <h4 className="text-2xl font-extrabold text-[#D58A50]">0</h4>
                  <p className="mt-1 text-xs font-semibold text-[#C89568]">Maintenance</p>
                </div>
                <div className="col-span-3 rounded-xl bg-[#FAF6FC] p-4 text-center sm:col-span-1">
                  <h4 className="text-2xl font-extrabold text-[#574460]">80%</h4>
                  <p className="mt-1 text-xs font-semibold text-[#A092A5]">Occupancy</p>
                </div>
              </div>

              <div className="mt-6">
                <div className="mb-2 flex justify-between text-xs font-semibold">
                  <span className="text-[#897A90]">Room utilization</span>
                  <span className="text-[#79558A]">80%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-[#F1EAF3]">
                  <div className="h-full w-[80%] rounded-full bg-[#A477B5]"></div>
                </div>
              </div>
            </div>

            {/* Rent Collection */}
            <div className="rounded-2xl border border-[#F0E7F3] bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#34243D]">Rent Collection</h3>
                  <p className="mt-1 text-sm text-[#A092A5]">November 2026 overview</p>
                </div>
                <Link to="/manager/bills" className="text-sm font-bold text-[#966AA7] hover:text-[#755080]">
                  View details →
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-[#FAF6FC] p-5">
                  <p className="text-sm text-[#95869B]">Total Expected</p>
                  <h3 className="mt-2 text-2xl font-extrabold text-[#34243D]">₹2,08,000</h3>
                </div>
                <div className="rounded-xl bg-[#EFF8F2] p-5">
                  <p className="text-sm text-[#779B85]">Collected Amount</p>
                  <h3 className="mt-2 text-2xl font-extrabold text-[#4D9871]">₹1,82,000</h3>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-[#F1EAF3] pt-4">
                <div>
                  <p className="text-sm text-[#95869B]">Pending collection</p>
                  <p className="mt-1 text-lg font-extrabold text-[#D9877F]">₹26,000</p>
                </div>
                <Link to="/manager/bills" className="rounded-xl bg-[#79558A] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#63416F]">
                  Manage Bills
                </Link>
              </div>
            </div>

           
            <div className="rounded-2xl border border-[#F0E7F3] bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#34243D]">Recent Complaints</h3>
                  <p className="mt-1 text-sm text-[#A092A5]">Requests from your residents</p>
                </div>
                <Link to="/manager/complaints" className="text-sm font-bold text-[#966AA7] hover:text-[#755080]">
                  View all →
                </Link>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#F3EDF5] pb-4">
                  <div>
                    <p className="font-bold text-[#493951]">Bathroom Tap Leakage</p>
                    <p className="mt-1 text-xs text-[#A092A5]">Shahana · Room 204 · Nov 21</p>
                  </div>
                  <span className="rounded-full bg-[#FFF2E7] px-3 py-2 text-xs font-bold text-[#D58A50]">
                    In Progress
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#F3EDF5] pb-4">
                  <div>
                    <p className="font-bold text-[#493951]">Room Light Not Working</p>
                    <p className="mt-1 text-xs text-[#A092A5]">Anjali · Room 105 · Nov 22</p>
                  </div>
                  <span className="rounded-full bg-[#FFF0EC] px-3 py-2 text-xs font-bold text-[#D9877F]">
                    Pending
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="font-bold text-[#493951]">Water Supply Issue</p>
                    <p className="mt-1 text-xs text-[#A092A5]">Meera · Room 302 · Nov 23</p>
                  </div>
                  <span className="rounded-full bg-[#EAF3FA] px-3 py-2 text-xs font-bold text-[#6793B4]">
                    Under Review
                  </span>
                </div>
              </div>
            </div>

          </div>

          <div className="space-y-6 mt-8">
            <div className="rounded-2xl border border-[#F0E7F3] bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#34243D]">Recent Activity</h3>
              <p className="mt-1 text-sm text-[#A092A5]">Latest property updates</p>

              <div className="mt-5 space-y-5">
                <div className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EAF7F0]">✓</span>
                  <div>
                    <p className="text-sm font-semibold text-[#574460]">Rent payment received</p>
                    <p className="mt-1 text-xs text-[#A092A5]">Room 102 · ₹6,500</p>
                    <p className="mt-1 text-[11px] text-[#B0A3B5]">Today, 10:30 AM</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFF0EC]">⚒</span>
                  <div>
                    <p className="text-sm font-semibold text-[#574460]">New complaint submitted</p>
                    <p className="mt-1 text-xs text-[#A092A5]">Room 105 · Electrical issue</p>
                    <p className="mt-1 text-[11px] text-[#B0A3B5]">Yesterday</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F3EAF7]">👤</span>
                  <div>
                    <p className="text-sm font-semibold text-[#574460]">New resident joined</p>
                    <p className="mt-1 text-xs text-[#A092A5]">Room 204 · Shahana</p>
                    <p className="mt-1 text-[11px] text-[#B0A3B5]">November 20</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-[#F1E8F5] p-6">
              <div className="text-2xl">📢</div>
              <h3 className="mt-3 font-bold text-[#493951]">Keep residents updated</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#897A90]">
                Share important announcements and property updates with everyone.
              </p>
              <Link to="/manager/notices" className="mt-4 inline-block text-sm font-extrabold text-[#79558A] hover:text-[#63416F]">
                Create a notice →
              </Link>
            </div>

          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default ManagerDb
