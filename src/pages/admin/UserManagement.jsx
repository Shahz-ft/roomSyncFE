import React from "react";
import DashboardLayout from "../../components/DashboardLayout";

const UserManagement = () => {
  return (
    <DashboardLayout role="admin">
      <div className="mx-10 space-y-7">
        <div>
          <h1 className="text-3xl font-extrabold text-[#493951]">
            User Management
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            View and manage registered RoomSync users.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="rounded-2xl border border-purple-100 bg-white p-5">
            <p className="text-sm text-gray-500">All Users</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#493951]">248</h2>
          </div>

          <div className="rounded-2xl border border-purple-100 bg-white p-5">
            <p className="text-sm text-gray-500">Residents</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#765184]">182</h2>
          </div>

          <div className="rounded-2xl border border-purple-100 bg-white p-5">
            <p className="text-sm text-gray-500">Property Managers</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#765184]">66</h2>
          </div>
        </div>

        <div className="rounded-2xl border border-purple-100 bg-white p-6 shadow-sm">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-lg font-extrabold text-[#493951]">
                Registered Users
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Sample list of platform accounts
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                placeholder="Search users..."
                className="rounded-xl border border-purple-100 bg-[#FCFAFD] px-4 py-2.5 text-sm outline-none focus:border-[#A77BB5]"
              />

              <select className="rounded-xl border border-purple-100 bg-[#FCFAFD] px-4 py-2.5 text-sm text-gray-600 outline-none">
                <option>All Roles</option>
                <option>Resident</option>
                <option>Property Manager</option>
              </select>
            </div>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-187.5 text-left">
              <thead>
                <tr className="border-b border-purple-100 bg-[#FAF7FC] text-xs uppercase tracking-wide text-gray-500">
                  <th className="px-4 py-4">User</th>
                  <th className="px-4 py-4">Email</th>
                  <th className="px-4 py-4">Role</th>
                  <th className="px-4 py-4">Joined</th>
                  <th className="px-4 py-4">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-purple-50 text-sm">
                <tr>
                  <td className="px-4 py-5 font-bold text-[#493951]">
                    Ananya S
                  </td>
                  <td className="px-4 py-5 text-gray-500">ananya@gmail.com</td>
                  <td className="px-4 py-5 text-gray-600">Resident</td>
                  <td className="px-4 py-5 text-gray-500">12 Nov 2026</td>
                  <td className="px-4 py-5">
                    <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-700">
                      Active
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-5 font-bold text-[#493951]">
                    Rahul Kumar
                  </td>
                  <td className="px-4 py-5 text-gray-500">rahul@gmail.com</td>
                  <td className="px-4 py-5 text-gray-600">Property Manager</td>
                  <td className="px-4 py-5 text-gray-500">08 Nov 2026</td>
                  <td className="px-4 py-5">
                    <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-700">
                      Active
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-5 font-bold text-[#493951]">
                    Meera K
                  </td>
                  <td className="px-4 py-5 text-gray-500">meera@gmail.com</td>
                  <td className="px-4 py-5 text-gray-600">Resident</td>
                  <td className="px-4 py-5 text-gray-500">05 Nov 2026</td>
                  <td className="px-4 py-5">
                    <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-700">
                      Active
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-5 font-bold text-[#493951]">
                    Arjun Nair
                  </td>
                  <td className="px-4 py-5 text-gray-500">arjun@gmail.com</td>
                  <td className="px-4 py-5 text-gray-600">Property Manager</td>
                  <td className="px-4 py-5 text-gray-500">02 Nov 2026</td>
                  <td className="px-4 py-5">
                    <span className="rounded-full bg-red-50 px-3 py-1.5 text-xs font-bold text-red-600">
                      Suspended
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

export default UserManagement;
