import React from "react";
import DashboardLayout from "../../components/DashboardLayout";

const PropertyManagement = () => {
  return (
    <DashboardLayout role="admin">
      <div className="mx-10 space-y-7">
        <div>
          <h1 className="text-3xl font-extrabold text-[#493951]">
            Property Management
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            View properties registered across RoomSync.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="rounded-2xl border border-purple-100 bg-white p-5">
            <p className="text-sm text-gray-500">Total Properties</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#493951]">36</h2>
          </div>

          <div className="rounded-2xl border border-purple-100 bg-white p-5">
            <p className="text-sm text-gray-500">Verified</p>
            <h2 className="mt-2 text-3xl font-extrabold text-green-600">28</h2>
          </div>

          <div className="rounded-2xl border border-purple-100 bg-white p-5">
            <p className="text-sm text-gray-500">Pending Verification</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#D28A42]">08</h2>
          </div>
        </div>

        <div className="rounded-2xl border border-purple-100 bg-white p-6 shadow-sm">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-lg font-extrabold text-[#493951]">
                Registered Properties
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Property details and verification status
              </p>
            </div>

            <input
              type="text"
              placeholder="Search properties..."
              className="rounded-xl border border-purple-100 bg-[#FCFAFD] px-4 py-2.5 text-sm outline-none focus:border-[#A77BB5]"
            />
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-187.5 text-left">
              <thead>
                <tr className="border-b border-purple-100 bg-[#FAF7FC] text-xs uppercase tracking-wide text-gray-500">
                  <th className="px-4 py-4">Property</th>
                  <th className="px-4 py-4">Location</th>
                  <th className="px-4 py-4">Manager</th>
                  <th className="px-4 py-4">Residents</th>
                  <th className="px-4 py-4">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-purple-50 text-sm">
                <tr>
                  <td className="px-4 py-5 font-bold text-[#493951]">
                    Green Valley Residency
                  </td>
                  <td className="px-4 py-5 text-gray-500">
                    Kazhakkoottam, TVM
                  </td>
                  <td className="px-4 py-5 text-gray-600">Rahul Kumar</td>
                  <td className="px-4 py-5 text-gray-600">16</td>
                  <td className="px-4 py-5">
                    <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-700">
                      Verified
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-5 font-bold text-[#493951]">
                    Lavender Heights
                  </td>
                  <td className="px-4 py-5 text-gray-500">Kochi, Kerala</td>
                  <td className="px-4 py-5 text-gray-600">Arjun Nair</td>
                  <td className="px-4 py-5 text-gray-600">12</td>
                  <td className="px-4 py-5">
                    <span className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-bold text-orange-700">
                      Pending
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-5 font-bold text-[#493951]">
                    Sunrise Apartments
                  </td>
                  <td className="px-4 py-5 text-gray-500">Thrissur, Kerala</td>
                  <td className="px-4 py-5 text-gray-600">Nikhil Raj</td>
                  <td className="px-4 py-5 text-gray-600">08</td>
                  <td className="px-4 py-5">
                    <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-700">
                      Verified
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PropertyManagement;
