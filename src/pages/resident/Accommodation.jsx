import React from "react";
import DashboardLayout from "../../components/DashboardLayout";

const Accommodation = () => {
  return (
    <DashboardLayout role="resident">
      <div className="mx-10 space-y-7">
        <div>
          <p className="text-sm font-medium text-[#A477B5]">RESIDENT PORTAL</p>
          <h1 className="mt-1 text-2xl font-bold text-[#34243D]">
            My Accommodation
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Your living space, roommates and property facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative flex min-h-65 flex-col justify-between overflow-hidden rounded-2xl bg-linear-to-br from-[#493951] via-[#62466F] to-[#896A99] p-7 text-white shadow-sm">
            <div className="absolute -right-12 -top-12 h-52 w-52 rounded-full border-30 border-white/10"></div>
            <div className="absolute -bottom-20 right-28 h-48 w-48 rounded-full bg-white/5"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90">
                  Active Accommodation
                </span>

                <span className="flex items-center gap-2 text-xs text-white/80">
                  <span className="h-2 w-2 rounded-full bg-[#A9D8B9]"></span>
                  Currently Staying
                </span>
              </div>

              <div className="mt-8">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">
                  Your Property
                </p>

                <h2 className="mt-2 text-3xl font-bold">Lavender Heights</h2>

                <div className="mt-3 flex items-start gap-2 text-sm leading-6 text-white/75">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M12 21s7-5.5 7-12a7 7 0 1 0-14 0c0 6.5 7 12 7 12Z"
                    />
                    <circle cx="12" cy="9" r="2.5" strokeWidth="1.8" />
                  </svg>
                  Kazhakkoottam, Thiruvananthapuram, Kerala
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-8 border-t border-white/15 pt-4">
              <p className="text-xs text-white/60">
                Your registered accommodation
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-[#E9DCEF] bg-[#FAF6FC] p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-[#34243D]">
                  Your Roommates
                </h2>
                <p className="mt-1 text-xs text-gray-500">
                  People sharing your room.
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#79558A]">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M16 20v-1.5a4.5 4.5 0 0 0-4.5-4.5h-3A4.5 4.5 0 0 0 4 18.5V20m14-6a4 4 0 0 1 2 3.5V20M13 4.5a4 4 0 0 1 0 7.5M10 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-3 rounded-xl border border-[#EFE5F2] bg-white p-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EDE1F2] text-sm font-bold text-[#79558A]">
                  AS
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold text-[#493951]">Ananya S</h3>
                  <p className="mt-0.5 text-xs text-gray-400">Roommate</p>
                </div>
                <span className="h-2 w-2 rounded-full bg-[#79B495]"></span>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-[#EFE5F2] bg-white p-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FBEAE5] text-sm font-bold text-[#C77D68]">
                  MK
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold text-[#493951]">Meera K</h3>
                  <p className="mt-0.5 text-xs text-gray-400">Roommate</p>
                </div>
                <span className="h-2 w-2 rounded-full bg-[#79B495]"></span>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-[#EFE5F2] bg-white p-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E7EFF9] text-sm font-bold text-[#6688B8]">
                  DR
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold text-[#493951]">Diya R</h3>
                  <p className="mt-0.5 text-xs text-gray-400">Roommate</p>
                </div>
                <span className="h-2 w-2 rounded-full bg-[#79B495]"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#F0E7F3] bg-white shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#F0E7F3] px-6 py-5">
            <div>
              <h2 className="text-lg font-bold text-[#34243D]">Room Details</h2>
              <p className="mt-1 text-xs text-gray-400">
                Information about your assigned room.
              </p>
            </div>

            <span className="rounded-full bg-[#EFF8F2] px-3 py-1.5 text-xs font-semibold text-[#57977A]">
              Occupied
            </span>
          </div>

          <div className="grid grid-cols-2 divide-x divide-y divide-[#F0E7F3] sm:grid-cols-4 sm:divide-y-0">
            <div className="p-6">
              <p className="text-xs font-medium text-gray-400">ROOM NUMBER</p>
              <h3 className="mt-2 text-2xl font-extrabold text-[#493951]">
                102
              </h3>
            </div>

            <div className="p-6">
              <p className="text-xs font-medium text-gray-400">ROOM TYPE</p>
              <h3 className="mt-2 text-lg font-bold text-[#493951]">Shared</h3>
              <p className="mt-1 text-xs text-gray-400">
                Double / Triple sharing
              </p>
            </div>

            <div className="p-6">
              <p className="text-xs font-medium text-gray-400">ROOM CAPACITY</p>
              <h3 className="mt-2 text-2xl font-extrabold text-[#493951]">3</h3>
              <p className="mt-1 text-xs text-gray-400">Residents</p>
            </div>

            <div className="p-6">
              <p className="text-xs font-medium text-gray-400">MOVE-IN DATE</p>
              <h3 className="mt-2 text-lg font-bold text-[#493951]">
                01 Aug 2026
              </h3>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#F0E7F3] bg-[#FCFAFD] px-6 py-4">
            <p className="text-xs text-gray-500">Monthly accommodation rent</p>
            <p className="text-lg font-extrabold text-[#79558A]">
              ₹6,500{" "}
              <span className="text-xs font-normal text-gray-400">/ month</span>
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-[#F0E7F3] bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-[#34243D]">
                Available Facilities
              </h2>
              <p className="mt-1 text-xs text-gray-400">
                Amenities and services provided by your property.
              </p>
            </div>

            <span className="rounded-full bg-[#F4EAF7] px-3 py-1.5 text-xs font-semibold text-[#79558A]">
              6 Facilities
            </span>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-xl bg-[#F8F5FA] p-4">
              <span className="text-2xl">📶</span>
              <div>
                <h3 className="text-sm font-bold text-[#493951]">Wi-Fi</h3>
                <p className="mt-1 text-xs text-green-600">Available</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-[#F8F5FA] p-4">
              <span className="text-2xl">🧺</span>
              <div>
                <h3 className="text-sm font-bold text-[#493951]">Laundry</h3>
                <p className="mt-1 text-xs text-green-600">Available</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-[#F8F5FA] p-4">
              <span className="text-2xl">🍽️</span>
              <div>
                <h3 className="text-sm font-bold text-[#493951]">
                  Dining Area
                </h3>
                <p className="mt-1 text-xs text-green-600">Available</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-[#F8F5FA] p-4">
              <span className="text-2xl">🚿</span>
              <div>
                <h3 className="text-sm font-bold text-[#493951]">Hot Water</h3>
                <p className="mt-1 text-xs text-green-600">Available</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-[#F8F5FA] p-4">
              <span className="text-2xl">🛡️</span>
              <div>
                <h3 className="text-sm font-bold text-[#493951]">Security</h3>
                <p className="mt-1 text-xs text-green-600">24/7 Security</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-[#F8F5FA] p-4">
              <span className="text-2xl">🧹</span>
              <div>
                <h3 className="text-sm font-bold text-[#493951]">
                  Housekeeping
                </h3>
                <p className="mt-1 text-xs text-green-600">Weekly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Accommodation;
