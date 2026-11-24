import React from "react";
import DashboardLayout from "../../components/DashboardLayout";

const Dashboard = () => {
  const recentProperties = [
    {
      name: "Lavender Heights",
      location: "Kazhakkoottam, Trivandrum",
      manager: "Rahul Kumar",
      residents: 24,
      status: "Active",
    },
    {
      name: "Green Valley PG",
      location: "Technopark, Trivandrum",
      manager: "Anjali Menon",
      residents: 18,
      status: "Active",
    },
    {
      name: "Sunrise Residency",
      location: "Kochi, Kerala",
      manager: "Arjun Nair",
      residents: 0,
      status: "Pending",
    },
    {
      name: "Comfort Nest",
      location: "Kollam, Kerala",
      manager: "Meera S",
      residents: 32,
      status: "Active",
    },
  ];

  const activities = [
    {
      title: "New property registered",
      description: "Sunrise Residency was added to RoomSync.",
      time: "10 minutes ago",
      icon: "🏢",
    },
    {
      title: "New manager registered",
      description: "Anjali Menon joined as a property manager.",
      time: "1 hour ago",
      icon: "👤",
    },
    {
      title: "New residents joined",
      description: "4 residents joined Lavender Heights.",
      time: "3 hours ago",
      icon: "👥",
    },
    {
      title: "Property activated",
      description: "Comfort Nest is now active on the platform.",
      time: "Yesterday",
      icon: "✓",
    },
  ];

  return (
    <DashboardLayout role="admin">
      <div className="space-y-7 mx-10">
        <div>
          <p className="text-sm font-medium text-[#A477B5]">
            Platform Administration
          </p>

          <h1 className="text-3xl font-extrabold text-[#493951]">
            Admin Dashboard
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Monitor RoomSync platform activity and manage registered properties.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-[#493951] to-[#79558A] p-7 text-white shadow-sm">
          <div className="relative z-10">
            <p className="text-sm text-purple-100">Platform Overview</p>

            <h2 className="mt-2 text-2xl font-bold">
              Welcome to RoomSync Admin
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-purple-100">
              Manage the platform, monitor property registrations and keep track
              of the RoomSync community from one place.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-medium">
                Platform Status: Active
              </span>

              <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-medium">
                November 2026
              </span>
            </div>
          </div>

          <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full border-35 border-white/10" />
          <div className="absolute -bottom-24 right-32 h-48 w-48 rounded-full bg-white/5" />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-[#F0E7F3] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4EAF7] text-xl">
                🏢
              </div>
              <span className="text-xs font-medium text-green-600">+12%</span>
            </div>

            <p className="mt-5 text-sm text-gray-500">Total Properties</p>

            <h2 className="mt-1 text-3xl font-bold text-[#34243D]">48</h2>

            <p className="mt-2 text-xs text-gray-400">Registered properties</p>
          </div>

          <div className="rounded-2xl border border-[#F0E7F3] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl">
                👥
              </div>
              <span className="text-xs font-medium text-green-600">+18%</span>
            </div>

            <p className="mt-5 text-sm text-gray-500">Total Residents</p>

            <h2 className="mt-1 text-3xl font-bold text-[#34243D]">856</h2>

            <p className="mt-2 text-xs text-gray-400">Registered residents</p>
          </div>

          <div className="rounded-2xl border border-[#F0E7F3] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-xl">
                👤
              </div>
              <span className="text-xs font-medium text-green-600">+8%</span>
            </div>

            <p className="mt-5 text-sm text-gray-500">Property Managers</p>

            <h2 className="mt-1 text-3xl font-bold text-[#34243D]">64</h2>

            <p className="mt-2 text-xs text-gray-400">Active managers</p>
          </div>

          <div className="rounded-2xl border border-[#F0E7F3] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-xl">
                🛏️
              </div>
              <span className="text-xs font-medium text-green-600">+15%</span>
            </div>

            <p className="mt-5 text-sm text-gray-500">Total Rooms</p>

            <h2 className="mt-1 text-3xl font-bold text-[#34243D]">1,240</h2>

            <p className="mt-2 text-xs text-gray-400">Across all properties</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div className="rounded-2xl border border-[#F0E7F3] bg-white p-6 shadow-sm lg:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-bold text-[#34243D]">Property Overview</h2>
                <p className="mt-1 text-xs text-gray-400">
                  Current registration status
                </p>
              </div>

              <span className="rounded-full bg-[#F4EAF7] px-3 py-1 text-xs font-semibold text-[#79558A]">
                48 Properties
              </span>
            </div>

            <div className="mt-7 space-y-6">
              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-medium text-gray-600">
                    Active Properties
                  </span>
                  <span className="font-semibold text-green-600">38</span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full w-[79%] rounded-full bg-green-500" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-medium text-gray-600">
                    Pending Approval
                  </span>
                  <span className="font-semibold text-orange-500">07</span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full w-[15%] rounded-full bg-orange-400" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-medium text-gray-600">
                    Inactive Properties
                  </span>
                  <span className="font-semibold text-gray-500">03</span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full w-[6%] rounded-full bg-gray-400" />
                </div>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-3 gap-3 border-t border-[#F0E7F3] pt-5 text-center">
              <div>
                <h3 className="text-xl font-bold text-green-600">38</h3>
                <p className="mt-1 text-xs text-gray-400">Active</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-500">07</h3>
                <p className="mt-1 text-xs text-gray-400">Pending</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-500">03</h3>
                <p className="mt-1 text-xs text-gray-400">Inactive</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#F0E7F3] bg-white p-6 shadow-sm">
            <h2 className="font-bold text-[#34243D]">User Overview</h2>

            <p className="mt-1 text-xs text-gray-400">
              Registered platform users
            </p>

            <div className="mt-7 flex items-center justify-center">
              <div className="relative flex h-44 w-44 items-center justify-center rounded-full border-18 border-[#EADCF0]">
                <div className="absolute -inset-4.5 rounded-full border-18 border-transparent border-t-[#79558A] border-r-[#79558A] border-b-[#79558A] rotate-[-30deg]" />

                <div className="text-center">
                  <h3 className="text-3xl font-bold text-[#34243D]">920</h3>
                  <p className="text-xs text-gray-400">Total Users</p>
                </div>
              </div>
            </div>

            <div className="mt-7 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#79558A]" />
                  <span className="text-sm text-gray-600">Residents</span>
                </div>
                <span className="text-sm font-semibold text-[#34243D]">
                  856
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#D9877F]" />
                  <span className="text-sm text-gray-600">Managers</span>
                </div>
                <span className="text-sm font-semibold text-[#34243D]">64</span>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#F0E7F3] bg-white shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#F0E7F3] p-6">
            <div>
              <h2 className="font-bold text-[#34243D]">
                Recently Registered Properties
              </h2>
              <p className="mt-1 text-xs text-gray-400">
                Latest properties added to the platform.
              </p>
            </div>

            <button className="rounded-xl border border-[#DCC9E5] px-4 py-2.5 text-xs font-semibold text-[#79558A] transition hover:bg-[#F8F1FA]">
              View All Properties
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-187.5 text-left">
              <thead className="bg-[#FAF6FC] text-xs uppercase tracking-wide text-gray-500">
                <tr>
                  <th className="px-6 py-4 font-semibold">Property</th>
                  <th className="px-6 py-4 font-semibold">Manager</th>
                  <th className="px-6 py-4 font-semibold">Residents</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-[#F0E7F3]">
                {recentProperties.map((property) => (
                  <tr
                    key={property.name}
                    className="transition hover:bg-[#FCF9FD]"
                  >
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-[#493951]">
                        {property.name}
                      </p>
                      <p className="mt-1 text-xs text-gray-400">
                        {property.location}
                      </p>
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600">
                      {property.manager}
                    </td>

                    <td className="px-6 py-4 text-sm font-medium text-[#493951]">
                      {property.residents}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          property.status === "Active"
                            ? "bg-green-50 text-green-600"
                            : "bg-orange-50 text-orange-600"
                        }`}
                      >
                        {property.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-2xl border border-[#F0E7F3] bg-white p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="font-bold text-[#34243D]">
              Recent Platform Activity
            </h2>
            <p className="mt-1 text-xs text-gray-400">
              Latest activities across RoomSync.
            </p>
          </div>

          <div className="space-y-5">
            {activities.map((activity, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F4EAF7] text-lg">
                  {activity.icon}
                </div>

                <div className="min-w-0 flex-1 border-b border-[#F0E7F3] pb-5">
                  <h3 className="text-sm font-semibold text-[#493951]">
                    {activity.title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {activity.description}
                  </p>

                  <p className="mt-2 text-xs text-gray-400">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
