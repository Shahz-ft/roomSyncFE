import React from "react";
import DashboardLayout from "../../components/DashboardLayout";

const MyProperty = () => {
  return (
    <DashboardLayout role="manager">
      <div className="space-y-6 mx-10">
        <div>
          <p className="text-sm font-semibold text-[#A477B5]">
            PROPERTY MANAGEMENT
          </p>
          <h1 className="mt-2 text-3xl font-extrabold text-[#34243D]">
            My Property
          </h1>
          <p className="mt-2 text-sm text-[#897A90]">
            Manage your property, rooms and residents in one place.
          </p>
        </div>

        <div className="rounded-2xl mt-10 border border-[#F0E7F3] bg-white mx-30 p-6 shadow-sm">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-extrabold text-[#34243D]">
                  Green Valley Residency
                </h2>

                <span className="rounded-full bg-[#EAF7F0] px-3 py-1 text-xs font-bold text-[#4D9871]">
                  Active
                </span>
              </div>

              <p className="mt-2 text-sm text-[#95869B]">
                📍Kazhakkoottam, Thiruvananthapuram, Kerala
              </p>

              <p className="mt-3 text-sm text-[#897A90]">
                A comfortable shared living space with well-maintained rooms and
                common facilities.
              </p>
            </div>

            <button className="w-fit rounded-xl border border-[#DCC9E3] px-4 py-2.5 text-sm font-bold text-[#79558A] hover:bg-[#FAF6FC]">
              ✎ Edit Details
            </button>
          </div>

          <div className="mt-6 grid gap-4 border-t border-[#F1EAF3] pt-5 sm:grid-cols-3">
            <div>
              <p className="text-xs text-[#A092A5]">Property Type</p>
              <p className="mt-1 font-bold text-[#574460]">PG Accommodation</p>
            </div>

            <div>
              <p className="text-xs text-[#A092A5]">Contact Number</p>
              <p className="mt-1 font-bold text-[#574460]">+91 98765 43210</p>
            </div>

            <div>
              <p className="text-xs text-[#A092A5]">Total Rooms</p>
              <p className="mt-1 font-bold text-[#574460]">20 Rooms</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl  bg-linear-to-r from-[#755080] to-[#A477B5] p-6 text-white shadow-sm">
          <p className="text-sm font-semibold text-purple-100">
            RESIDENT INVITATION
          </p>

          <div className="mt-3 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xl font-extrabold">
                Invite residents to your property
              </h3>

              <p className="mt-2 text-sm text-purple-100">
                Share this code with residents who want to join your property.
              </p>
            </div>

            <div className="rounded-xl bg-white/15 p-4">
              <p className="text-xs text-purple-100">INVITATION CODE</p>

              <p className="mt-2 text-2xl font-extrabold tracking-[0.2em]">
                ROOM26X
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 mt-15  sm:grid-cols-4">
          <div className="rounded-2xl border border-[#F0E7F3] bg-white p-5 shadow-sm">
            <p className="text-sm text-[#8D7E94]">Total Rooms</p>

            <h3 className="mt-3 text-3xl font-extrabold text-[#34243D]">20</h3>
            <p className="mt-2 text-xs text-[#A092A5]">Across your property</p>
          </div>

          <div className="rounded-2xl border border-[#F0E7F3] bg-white p-5 shadow-sm">
            <p className="text-sm text-[#8D7E94]">Occupied Rooms</p>
            <h3 className="mt-3 text-3xl font-extrabold text-[#4D9871]">16</h3>
            <p className="mt-2 text-xs text-[#A092A5]">Currently occupied</p>
          </div>

          <div className="rounded-2xl border border-[#F0E7F3] bg-white p-5 shadow-sm">
            <p className="text-sm text-[#8D7E94]">Available Rooms</p>
            <h3 className="mt-3 text-3xl font-extrabold text-[#860ebd]">4</h3>
            <p className="mt-2 text-xs text-[#A092A5]">With available beds</p>
          </div>

          <div className="rounded-2xl border border-[#F0E7F3] bg-white p-5 shadow-sm">
            <p className="text-sm text-[#8D7E94]">Total Residents</p>
            <h3 className="mt-3 text-3xl font-extrabold text-[#e5a400]">11</h3>
            <p className="mt-2 text-xs text-[#A092A5]">
              Living in your property
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#F0E7F3] bg-white shadow-sm">
          <div className="border-b border-[#F1EAF3] p-6">
            <h3 className="text-lg font-bold text-[#34243D]">
              Rooms & Residents
            </h3>

            <p className="mt-1 text-sm text-[#A092A5]">
              View room availability and assigned residents.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-150 text-left">
              <thead className="bg-[#FAF7FB] text-xs uppercase tracking-wider text-[#A092A5]">
                <tr>
                  <th className="px-6 py-4">Room</th>
                  <th className="px-6 py-4">Room Type</th>
                  <th className="px-6 py-4">Residents</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-[#F3EDF5]">
                <tr>
                  <td className="px-6 py-4 font-bold text-[#493951]">
                    Room 101
                  </td>
                  <td className="px-6 py-4 text-sm text-[#897A90]">
                    Double Sharing
                  </td>
                  <td className="px-6 py-4 text-sm text-[#574460]">
                    Anjali, Meera
                  </td>
                  <td className="px-6 py-4">
                    <span className="rounded-full bg-[#EAF7F0] px-3 py-1.5 text-xs font-bold text-[#4D9871]">
                      Occupied
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 font-bold text-[#493951]">
                    Room 102
                  </td>
                  <td className="px-6 py-4 text-sm text-[#897A90]">
                    Double Sharing
                  </td>
                  <td className="px-6 py-4 text-sm text-[#574460]">
                    Akhila, Diya
                  </td>
                  <td className="px-6 py-4">
                    <span className="rounded-full bg-[#EAF7F0] px-3 py-1.5 text-xs font-bold text-[#4D9871]">
                      Occupied
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 font-bold text-[#493951]">
                    Room 103
                  </td>
                  <td className="px-6 py-4 text-sm text-[#897A90]">
                    Single Sharing
                  </td>
                  <td className="px-6 py-4 text-sm text-[#574460]">
                    Available
                  </td>
                  <td className="px-6 py-4">
                    <span className="rounded-full bg-[#F3EAF7] px-3 py-1.5 text-xs font-bold text-[#79558A]">
                      Available
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-2xl border mx-40 border-[#F0E7F3] bg-white p-6 shadow-sm">
          <h3 className="text-lg font-bold text-[#34243D]">
            Resident Join Requests
          </h3>

          <p className="mt-1 text-sm text-[#A092A5]">
            Review residents who want to join your property.
          </p>

          <div className="mt-5 space-y-3">
            <div className="flex flex-col justify-between gap-3 rounded-xl bg-[#FAF6FC] p-4 sm:flex-row sm:items-center">
              <div>
                <p className="font-bold text-[#493951]">Riya Nair</p>
                <p className="mt-1 text-xs text-[#A092A5]">
                  riya@example.com · Nov 23
                </p>
              </div>

              <div className="flex gap-2">
                <button className="rounded-lg bg-[#79558A] px-4 py-2 text-xs font-bold text-white hover:bg-[#63416F]">
                  Review
                </button>

                <button className="rounded-lg border border-[#E9DCEB] px-4 py-2 text-xs font-bold text-[#897A90] hover:bg-red-200">
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MyProperty;
