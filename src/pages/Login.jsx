import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
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
        </div>

        <div className="flex items-center justify-center bg-[#FFFAFF] px-8 py-12 sm:px-14">
          <div className="w-full max-w-sm">
            <h1 className="text-3xl font-extrabold text-[#32164F]">
              Welcome Back!
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Sign in to your account
            </p>

            <form className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-purple-950">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-purple-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-purple-950">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-purple-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                />
              </div>

              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 text-gray-600">
                  <input type="checkbox" className="accent-purple-700" />
                  Remember me
                </label>

                <a
                  href="#"
                  className="font-semibold text-purple-700 hover:text-pink-600"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="button"
                className="w-full rounded-lg bg-[#713A91] py-3 text-sm font-bold text-white transition hover:bg-[#582B75]"
              >
                Sign In
              </button>
            </form>

            <div className="my-7 flex items-center gap-3">
              <div className="h-px flex-1 bg-purple-100" />
              <span className="text-xs text-gray-500">or continue with</span>
              <div className="h-px flex-1 bg-purple-100" />
            </div>

            <button
              type="button"
              className="flex w-full items-center justify-center gap-1 rounded-lg border border-purple-200 bg-white py-3 text-sm font-semibold text-gray-700 transition hover:bg-purple-50"
            >
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google"
                className="h-5 w-5"
              />
              Google
            </button>

            <p className="mt-8 text-center text-xs text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-bold text-purple-700 hover:text-pink-600"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
