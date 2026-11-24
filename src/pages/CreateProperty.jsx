import React from "react";
import { Link } from "react-router-dom";

const CreateProperty = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F3E9F8] p-6">
      <div className="grid w-full max-w-6xl overflow-hidden rounded-2xl border border-purple-200 bg-white shadow-xl md:grid-cols-2">
        <div className="relative min-h-162.5 overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdZ0U3mC8nCNml1T79VkmZHp9jslz03lR8hEJdiVe66A&s=10"
            alt="RoomSync living space"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#32163F]/70 via-transparent to-[#32163F]/40" />

          <Link to="/" className="absolute left-10 top-10 z-10">
            <div className="flex items-center gap-3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhXcmah9tqwj2bTzvO2QBP8rvdJZ1oqxJQbkFW26YcRQ&s=10"
                alt="RoomSync icon"
                className="h-12 w-12 rounded-2xl object-contain"
              />
              <span className="text-3xl font-extrabold tracking-tight text-white">
                RoomSync
              </span>
            </div>

            <p className="mt-10 text-lg leading-8 text-white">
              One space.
              <br />
              Everything in sync.
            </p>
          </Link>

          <div className="absolute bottom-10 left-10 z-10">
            <h2 className="text-3xl font-extrabold text-white">
              Your property,
              <br />
              your way.
            </h2>

            <p className="mt-3 max-w-xs text-sm leading-6 text-purple-100">
              Bring your residents, rooms and everyday management together in
              one organised space.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center bg-[#FFFAFF] px-8 py-12 sm:px-14">
          <div className="w-full max-w-sm">
            <h1 className="text-3xl font-extrabold text-[#32164F]">
              Create Property
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Let's set up your property on RoomSync
            </p>

            <form className="mt-7 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-semibold text-purple-950">
                  Property Name
                </label>

                <input
                  type="text"
                  placeholder="e.g. Sunshine Residency"
                  className="w-full rounded-lg border border-purple-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-purple-950">
                  Property Type
                </label>

                <select
                  defaultValue=""
                  className="w-full rounded-lg border border-purple-200 bg-white px-4 py-3 text-sm text-gray-600 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                >
                  <option value="" disabled>
                    Select Property Type
                  </option>
                  <option value="pg">PG Accommodation</option>
                  <option value="hostel">Hostel</option>
                  <option value="apartment">Shared Apartment</option>
                  <option value="coliving">Co-living Space</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-purple-950">
                  Full Address
                </label>

                <textarea
                  rows="2"
                  placeholder="Enter property address"
                  className="w-full resize-none rounded-lg border border-purple-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-purple-950">
                    City
                  </label>

                  <input
                    type="text"
                    placeholder="City"
                    className="w-full rounded-lg border border-purple-200 bg-white px-3 py-3 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-purple-950">
                    State
                  </label>

                  <input
                    type="text"
                    placeholder="State"
                    className="w-full rounded-lg border border-purple-200 bg-white px-3 py-3 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-purple-950">
                    Total Rooms
                  </label>

                  <input
                    type="number"
                    min="1"
                    placeholder="e.g. 20"
                    className="w-full rounded-lg border border-purple-200 bg-white px-3 py-3 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-purple-950">
                    Contact Number
                  </label>

                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="w-full rounded-lg border border-purple-200 bg-white px-3 py-3 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                  />
                </div>
              </div>

              <Link
                to="/manager/dashboard"
                className="block w-full rounded-lg bg-[#713A91] py-3.5 text-center text-sm font-bold text-white shadow-md shadow-purple-200 transition hover:bg-[#582B75]"
              >
                Create Property
              </Link>
            </form>

            <p className="mt-5 text-center text-xs text-gray-500">
              Already have a property?{" "}
              <Link
                to="/manager/dashboard"
                className="font-semibold text-purple-700 hover:text-pink-600"
              >
                Go to Dashboard
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProperty;
