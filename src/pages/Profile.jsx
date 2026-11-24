import React from "react";
import DashboardLayout from "../components/DashboardLayout";

const Profile = ({ role }) => {
  const roleName =
    role === "admin"
      ? "Admin"
      : role === "manager"
        ? "Property Manager"
        : "Resident";

  return (
    <DashboardLayout role={role}>
      <div className="space-y-7 mx-10">
        <div>
          <p className="text-sm font-medium text-[#A477B5]">Account Settings</p>

          <h1 className="mt-1 text-2xl font-bold text-[#34243D]">My Profile</h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage your personal information and account settings.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#F0E7F3] bg-white shadow-sm">
          <div className="h-25 bg-linear-to-r from-[#493951] to-[#79558A]" />

          <div className="px-6 pb-6">
            <div className="-mt-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex items-end gap-4">
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-white bg-[#F1E6F5] text-3xl font-bold text-[#79558A] shadow-sm">
                  SB
                </div>

                <div className="pb-1 mt-15">
                  <h2 className="text-xl  font-bold text-[#34243D]">
                    Shahana Beevi
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    {roleName} Account
                  </p>
                </div>
              </div>

              <span className="mb-1 w-fit rounded-full bg-green-50 px-4 py-2 text-xs font-semibold text-green-600">
                ● Active Account
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-[#F0E7F3] bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="font-bold text-[#34243D]">Personal Information</h2>

              <p className="mt-1 text-xs text-gray-400">
                Your basic personal details.
              </p>
            </div>

            <button className="rounded-xl border border-[#DCC9E5] px-4 py-2 text-xs font-semibold text-[#79558A] transition hover:bg-[#F8F1FA]">
              Edit Profile
            </button>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-600">
                Full Name
              </label>

              <input
                type="text"
                defaultValue="Shahana Beevi"
                className="w-full rounded-xl border border-[#E9DFED] bg-[#FAF6FC] px-4 py-3 text-sm text-gray-600 outline-none"
                readOnly
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-600">
                Email Address
              </label>

              <input
                type="email"
                defaultValue="shahana@example.com"
                className="w-full rounded-xl border border-[#E9DFED] bg-[#FAF6FC] px-4 py-3 text-sm text-gray-600 outline-none"
                readOnly
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-600">
                Phone Number
              </label>

              <input
                type="tel"
                defaultValue="+91 98765 43210"
                className="w-full rounded-xl border border-[#E9DFED] bg-[#FAF6FC] px-4 py-3 text-sm text-gray-600 outline-none"
                readOnly
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-600">
                Account Role
              </label>

              <input
                type="text"
                defaultValue={roleName}
                className="w-full rounded-xl border border-[#E9DFED] bg-[#FAF6FC] px-4 py-3 text-sm text-gray-600 outline-none"
                readOnly
              />
            </div>
          </div>
        </div>

        {role === "resident" && (
          <div className="rounded-2xl border border-[#F0E7F3] bg-white p-6 shadow-sm">
            <div className="mb-6">
              <h2 className="font-bold text-[#34243D]">
                Accommodation Information
              </h2>

              <p className="mt-1 text-xs text-gray-400">
                Your currently registered property details.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="rounded-xl bg-[#FAF6FC] p-4">
                <p className="text-xs text-gray-400">Property Name</p>
                <h3 className="mt-2 font-semibold text-[#493951]">
                  Lavender Heights
                </h3>
              </div>

              <div className="rounded-xl bg-[#FAF6FC] p-4">
                <p className="text-xs text-gray-400">Room Number</p>
                <h3 className="mt-2 font-semibold text-[#493951]">Room 102</h3>
              </div>

              <div className="rounded-xl bg-[#FAF6FC] p-4">
                <p className="text-xs text-gray-400">Property Manager</p>
                <h3 className="mt-2 font-semibold text-[#493951]">
                  Rahul Kumar
                </h3>
              </div>

              <div className="rounded-xl bg-[#FAF6FC] p-4">
                <p className="text-xs text-gray-400">Member Since</p>
                <h3 className="mt-2 font-semibold text-[#493951]">
                  August 2026
                </h3>
              </div>
            </div>
          </div>
        )}

        <div className="rounded-2xl border border-[#F0E7F3] bg-white p-6 shadow-sm">
          <div className="mb-5">
            <h2 className="font-bold text-[#34243D]">Account Security</h2>

            <p className="mt-1 text-xs text-gray-400">
              Manage your password and account security.
            </p>
          </div>

          <div className="flex flex-col gap-4 rounded-xl bg-[#FAF6FC] p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-sm font-semibold text-[#493951]">Password</h3>

              <p className="mt-1 text-xs text-gray-400">
                Keep your account secure with a strong password.
              </p>
            </div>

            <button className="w-fit rounded-xl border border-[#DCC9E5] px-5 py-2.5 text-xs font-semibold text-[#79558A] transition hover:bg-white">
              Change Password
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3 rounded-2xl border border-red-100 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-bold text-red-600">Delete Account</h2>

            <p className="mt-1 text-xs text-gray-400">
              Permanently remove your account and associated information.
            </p>
          </div>

          <button className="w-fit rounded-xl border border-red-200 px-5 py-2.5 text-xs font-semibold text-red-500 transition hover:bg-red-50">
            Delete Account
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
