import React from "react";
import { Link } from "react-router-dom";

const JoinProperty = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F3E9F8] p-6">
      <div className="grid w-full max-w-6xl min-h-170 overflow-hidden rounded-2xl border border-purple-200 bg-white shadow-xl md:grid-cols-2">
        <div className="relative min-h-170 overflow-hidden">
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
              Find your space.
              <br />
              Feel at home.
            </h2>

            <p className="mt-3 max-w-xs text-sm leading-6 text-purple-100">
              Connect with your property and stay in sync with everything
              happening around you.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center bg-[#FFFAFF] px-8 py-12 sm:px-14">
          <div className="w-full max-w-sm">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-3xl">
              🏠
            </div>

            <h1 className="text-3xl font-extrabold text-[#32164F]">
              Join a Property
            </h1>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Have an invitation code from your property manager? Enter it below
              to get started.
            </p>

            <form className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-purple-950">
                  Invitation Code
                </label>

                <input
                  type="text"
                  placeholder="Enter your property code"
                  className="w-full rounded-lg border border-purple-200 bg-white px-4 py-3 text-sm uppercase tracking-widest outline-none transition placeholder:normal-case placeholder:tracking-normal focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                />

                <p className="mt-2 text-xs text-gray-400">
                  Ask your property manager for the invitation code.
                </p>
              </div>

              <Link
                to="/resident/dashboard"
                className="block w-full rounded-lg bg-[#713A91] py-3.5 text-center text-sm font-bold text-white shadow-md shadow-purple-200 transition hover:bg-[#582B75]"
              >
                Find Property →
              </Link>
            </form>

            <div className="mt-7 rounded-xl border border-purple-100 bg-[#F7F0FC] p-4">
              <div className="flex items-start gap-3">
                <span className="text-xl">ℹ️</span>

                <div>
                  <h3 className="text-sm font-bold text-purple-950">
                    What happens next?
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-gray-600">
                    Your request will be sent to the property manager. Once
                    approved and assigned a room, you can access your
                    accommodation details.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-7 text-center text-xs text-gray-600">
              Want to manage a property instead?{" "}
              <Link
                to="/create-property"
                className="font-bold text-purple-700 hover:text-pink-600"
              >
                Create Property
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinProperty;
