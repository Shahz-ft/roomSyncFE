import React from "react";
import DashboardLayout from "../../components/DashboardLayout";

const ManagerComplaints = () => {
  return (
    <DashboardLayout role="manager">
      <div className="space-y-7 mx-10">
        <div>
          <p className="text-sm font-medium text-[#A477B5]">REQUESTS</p>
          <h1 className="mt-1 text-2xl font-bold text-[#34243D]">
            Resident Complaints
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Review and manage maintenance requests from your residents.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#E9DCEF] bg-white shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr]">
            <div className="relative overflow-hidden bg-[#493951] p-7 text-white">
              <div className="absolute -right-10 -top-12 h-40 w-40 rounded-full bg-white/5"></div>
              <div className="absolute -bottom-16 right-20 h-36 w-36 rounded-full bg-white/5"></div>

              <p className="relative text-sm font-medium text-white/70">
                Complaint Overview
              </p>

              <div className="relative mt-5 flex items-end gap-3">
                <h2 className="text-6xl font-extrabold tracking-tight">24</h2>
                <span className="mb-2 text-sm text-white/60">
                  Total reports
                </span>
              </div>

              <p className="relative mt-3 max-w-xs text-sm leading-6 text-white/70">
                Resident concerns and maintenance requests reported for your
                property.
              </p>

              <div className="relative mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-[#A9D8B9]"></span>
                <span className="text-xs font-medium text-white/85">
                  Complaint tracking overview
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center p-7">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-[#493951]">
                  Status Breakdown
                </h3>
                <span className="text-xs text-gray-400">24 complaints</span>
              </div>

              <div className="mt-5 flex h-3 w-full gap-1 overflow-hidden rounded-full">
                <div className="w-1/3 rounded-full bg-[#bf0f0f]"></div>
                <div className="w-[21%] rounded-full bg-[#4c84cd]"></div>
                <div className="flex-1 rounded-full bg-[#0da152]"></div>
              </div>

              <div className="mt-7 grid grid-cols-3 gap-3">
                <div className="rounded-xl bg-[#fbc4c4] p-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#b21212]"></span>
                    <p className="text-xs font-semibold text-[#ac1111]">
                      Pending
                    </p>
                  </div>
                  <p className="mt-3 text-2xl font-extrabold text-[#493951]">
                    08
                  </p>
                  <p className="mt-1 text-[11px] text-gray-500">
                    Awaiting attention
                  </p>
                </div>

                <div className="rounded-xl bg-[#dce8f9] p-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#83A3CE]"></span>
                    <p className="text-xs font-semibold text-[#6688B8]">
                      In Progress
                    </p>
                  </div>
                  <p className="mt-3 text-2xl font-extrabold text-[#493951]">
                    05
                  </p>
                  <p className="mt-1 text-[11px] text-gray-500">
                    Being handled
                  </p>
                </div>

                <div className="rounded-xl bg-[#8fffb5] p-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#027a3a]"></span>
                    <p className="text-xs font-semibold text-[#009150]">
                      Resolved
                    </p>
                  </div>
                  <p className="mt-3 text-2xl font-extrabold text-[#493951]">
                    11
                  </p>
                  <p className="mt-1 text-[11px] text-gray-500">Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#F0E7F3] bg-white shadow-sm">
          <div className="flex flex-col gap-4 border-b border-[#F0E7F3] p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-bold text-[#34243D]">All Complaints</h2>
              <p className="mt-1 text-xs text-gray-400">
                View complaints submitted by your residents.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                placeholder="Search complaints..."
                className="rounded-xl border border-[#E9DFED] px-4 py-2.5 text-sm outline-none focus:border-[#A477B5]"
              />

              <select className="rounded-xl border border-[#E9DFED] bg-white px-4 py-2.5 text-sm text-gray-600 outline-none focus:border-[#A477B5]">
                <option>All Status</option>
                <option>Pending</option>
                <option>In Progress</option>
                <option>Resolved</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-175 text-left">
              <thead className="bg-[#FAF6FC] text-xs uppercase tracking-wide text-gray-500">
                <tr>
                  <th className="px-6 py-4 font-semibold">Complaint</th>
                  <th className="px-6 py-4 font-semibold">Resident</th>
                  <th className="px-6 py-4 font-semibold">Category</th>
                  <th className="px-6 py-4 font-semibold">Date</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-[#F0E7F3]">
                <tr className="transition hover:bg-[#FCF9FD]">
                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold text-[#493951]">
                      Bathroom tap leakage
                    </p>
                    <p className="mt-1 text-xs text-gray-400">
                      CMP001 · Room 102
                    </p>
                  </td>

                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-gray-700">
                      Ananya S
                    </p>
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-600">Plumbing</td>

                  <td className="px-6 py-4 text-sm text-gray-500">
                    22 Nov 2026
                  </td>

                  <td className="px-6 py-4">
                    <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
                      Pending
                    </span>
                  </td>
                </tr>

                <tr className="transition hover:bg-[#FCF9FD]">
                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold text-[#493951]">
                      Fan not working
                    </p>
                    <p className="mt-1 text-xs text-gray-400">
                      CMP002 · Room 105
                    </p>
                  </td>

                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-gray-700">Meera K</p>
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-600">
                    Electrical
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-500">
                    21 Nov 2026
                  </td>

                  <td className="px-6 py-4">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                      In Progress
                    </span>
                  </td>
                </tr>

                <tr className="transition hover:bg-[#FCF9FD]">
                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold text-[#493951]">
                      Common area needs cleaning
                    </p>
                    <p className="mt-1 text-xs text-gray-400">
                      CMP003 · Room 201
                    </p>
                  </td>

                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-gray-700">Diya R</p>
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-600">Cleaning</td>

                  <td className="px-6 py-4 text-sm text-gray-500">
                    20 Nov 2026
                  </td>

                  <td className="px-6 py-4">
                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                      Resolved
                    </span>
                  </td>
                </tr>

                <tr className="transition hover:bg-[#FCF9FD]">
                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold text-[#493951]">
                      Window lock is damaged
                    </p>
                    <p className="mt-1 text-xs text-gray-400">
                      CMP004 · Room 108
                    </p>
                  </td>

                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-gray-700">Neha P</p>
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-600">
                    Maintenance
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-500">
                    19 Nov 2026
                  </td>

                  <td className="px-6 py-4">
                    <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
                      Pending
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="border-t border-[#F0E7F3] px-6 py-4 text-xs text-gray-400">
            Showing 4 sample complaints
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ManagerComplaints;
