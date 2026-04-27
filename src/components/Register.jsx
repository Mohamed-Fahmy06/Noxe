import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

export default function Register() {
  return (
    <div className="min-h-screen bg-[#131722] text-white">
      <Nav />
      <div className="flex min-h-screen items-center justify-center px-4 sm:px-6 py-12">
        <div className="w-full max-w-md space-y-8 rounded-3xl bg-[#1c222e] p-6 sm:p-10 shadow-2xl border border-white/5">
          <div className="text-center">
            <h2 className="text-3xl font-black uppercase tracking-widest">
              Join <span className="text-blue-600">Noxe</span>
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Create an account to start streaming
            </p>
          </div>
          <form className="mt-8 space-y-5">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1 ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-xl bg-[#0b0e14] border border-gray-800 p-4 text-sm outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1 ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full rounded-xl bg-[#0b0e14] border border-gray-800 p-4 text-sm outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  placeholder="name@example.com"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1 ml-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  className="w-full rounded-xl bg-[#0b0e14] border border-gray-800 p-4 text-sm outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 py-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            >
              Create Account
            </button>

            <p className="text-center text-sm text-gray-400">
              Already have an account?{" "}
              <Link to="/login" className="font-bold text-blue-500 hover:text-blue-400">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
