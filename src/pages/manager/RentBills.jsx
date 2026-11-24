
import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { Link } from 'react-router-dom'

const RentBills = () => {

  const payments = [
    { name: 'Anjali Menon', room: '101', type: 'Monthly Rent', amount: '₹6,500', status: 'Paid' },
    { name: 'Meera S', room: '101', type: 'Monthly Rent', amount: '₹6,500', status: 'Paid' },
    { name: 'Akhila R', room: '102', type: 'Monthly Rent', amount: '₹6,500', status: 'Pending' },
    { name: 'Sneha K', room: '103', type: 'Electricity Contribution', amount: '₹500', status: 'Pending' },
    { name: 'Nila Thomas', room: '105', type: 'Monthly Rent', amount: '₹6,500', status: 'Overdue' },
    { name: 'Devika P', room: '105', type: 'Water Bill Contribution', amount: '₹200', status: 'Paid' },
  ]

  return (
    <DashboardLayout role="manager">
      <div className="space-y-7 mx-10">

        <div>
          <p className="text-sm font-semibold text-[#A477B5]">
            FINANCIAL MANAGEMENT
          </p>

          <h1 className="mt-2 text-3xl font-extrabold text-[#34243D]">
            Rent & Bills
          </h1>

          <p className="mt-2 text-sm text-[#897A90]">
            Track rent payments and other dues from residents.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

          
          <div className="rounded-2xl border border-[#F0E7F3] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#8D7E94]">Expected Rent</p>
              <span className="rounded-xl bg-[#F3EAF7] p-3 text-xl">
                💰
              </span>
            </div>

            <h3 className="mt-4 text-2xl font-extrabold text-[#34243D]">
              ₹2,08,000
            </h3>

            <p className="mt-2 text-xs text-[#A092A5]">
              32 residents
            </p>
          </div>

      
          <div className="rounded-2xl border border-[#F0E7F3] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#8D7E94]">Collected</p>
              <span className="rounded-xl bg-[#EAF7F0] p-3 text-xl">
                ✓
              </span>
            </div>

            <h3 className="mt-4 text-2xl font-extrabold text-[#4D9871]">
              ₹1,82,000
            </h3>

            <p className="mt-2 text-xs text-[#62A581]">
              87.5% collected
            </p>
          </div>

        
          <div className="rounded-2xl border border-[#F0E7F3] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#8D7E94]">Pending Rent</p>
              <span className="rounded-xl bg-[#FFF2E7] p-3 text-xl">
                ⏳
              </span>
            </div>

            <h3 className="mt-4 text-2xl font-extrabold text-[#D58A50]">
              ₹26,000
            </h3>

            <p className="mt-2 text-xs text-[#A092A5]">
              4 payments pending
            </p>
          </div>

       
          <div className="rounded-2xl border border-[#F0E7F3] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#8D7E94]">Property Bills</p>
              <span className="rounded-xl bg-[#FFF0EC] p-3 text-xl">
                🧾
              </span>
            </div>

            <h3 className="mt-4 text-2xl font-extrabold text-[#1b3188]">
              ₹14,000
            </h3>

            <p className="mt-2 text-xs text-[#A092A5]">
              3 bills recorded
            </p>
          </div>

        </div>

        <div className="overflow-hidden rounded-2xl border border-[#F0E7F3] bg-white shadow-sm">

          <div className="flex flex-col justify-between gap-4 border-b border-[#F1EAF3] p-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-lg font-bold text-[#34243D]">
                Resident Payments
              </h3>

              <p className="mt-1 text-sm text-[#A092A5]">
                View rent and other payment dues from residents.
              </p>
            </div>

            <input
              type="text"
              placeholder="Search resident..."
              className="w-full rounded-xl border border-[#E9DCEB] bg-[#FAF7FB] px-4 py-3 text-sm outline-none placeholder:text-[#B4A7B9] focus:border-[#A477B5] sm:w-64"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-150 text-left">

              <thead className="bg-[#FAF7FB] text-xs uppercase tracking-wider text-[#A092A5]">
                <tr>
                  <th className="px-6 py-4 font-bold">Resident</th>
                  <th className="px-6 py-4 font-bold">Room</th>
                  <th className="px-6 py-4 font-bold">Type</th>
                  <th className="px-6 py-4 font-bold">Amount</th>
                  <th className="px-6 py-4 font-bold">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-[#F3EDF5]">
                {payments.map((payment, index) => (
                  <tr
                    key={index}
                    className="transition hover:bg-[#FCFAFD]"
                  >
                    <td className="px-6 py-4 font-semibold text-[#493951]">
                      {payment.name}
                    </td>

                    <td className="px-6 py-4 text-sm text-[#897A90]">
                      {payment.room}
                    </td>

                    <td className="px-6 py-4 text-sm text-[#897A90]">
                      {payment.type}
                    </td>

                    <td className="px-6 py-4 text-sm font-bold text-[#574460]">
                      {payment.amount}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1.5 text-xs font-bold ${
                          payment.status === 'Paid'
                            ? 'bg-[#EAF7F0] text-[#4D9871]'
                            : payment.status === 'Overdue'
                              ? 'bg-[#FFF0EC] text-[#D9877F]'
                              : 'bg-[#FFF2E7] text-[#D58A50]'
                        }`}
                      >
                        {payment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

          <div className="border-t border-[#F1EAF3] px-6 py-4 text-xs text-[#A092A5]">
            Showing 6 sample payment records
          </div>

        </div>



<div className="relative overflow-hidden rounded-2xl border border-[#F3D8CF] bg-linear-to-r from-[#FFF5F0] via-[#FFF1EC] to-[#FCE8E3] p-6 sm:p-7">


  <div className="absolute -right-10 -top-16 h-40 w-40 rounded-full bg-[#F4C7B8]/30 blur-2xl"></div>
  <div className="absolute -bottom-16 right-40 h-36 w-36 rounded-full bg-[#F8D7C9]/40 blur-2xl"></div>

  <div className="relative flex flex-col justify-between gap-6 md:flex-row md:items-center">

  
    <div className="flex items-start gap-4">

      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-[#D77C68] shadow-sm ring-1 ring-[#F2D8D0]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.7"
          stroke="currentColor"
          className="h-7 w-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9a6 6 0 0 0-12 0v.75a8.967 8.967 0 0 1-2.312 6.022 23.848 23.848 0 0 0 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
          />
        </svg>
      </div>

      <div className="max-w-xl">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-extrabold text-[#583C42]">
            Payment Reminders
          </h3>

          <span className="rounded-full bg-[#40323e] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#ffffff]">
            Stay Updated
          </span>
        </div>

        <p className="text-sm leading-6 text-[#8F6F70]">
          Have residents with pending rent or unpaid bills?
          Send a friendly reminder or announce upcoming dues
          to keep everyone on track.
        </p>
      </div>
    </div>

 
    <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center">
      <Link
        to="/manager/notices"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#472c4d] px-5 py-3.5 text-sm font-bold text-white shadow-md shadow-[#C87565]/20 transition duration-200 hover:-translate-y-0.5 hover:bg-[#B76556] hover:shadow-lg"
      >
        Send a Reminder

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 17 17 7M7 7h10v10"
          />
        </svg>
      </Link>

      
    </div>

  </div>
</div>



      </div>
    </DashboardLayout>
  )
}

export default RentBills
