import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

export default function Login() {
  return (
    <div className="min-h-screen bg-[#131722] text-white">
      <Nav />
      <div className="flex min-h-screen items-center justify-center px-4 sm:px-6 py-12">
        <div className="w-full max-w-md space-y-8 rounded-3xl bg-[#1c222e] p-6 sm:p-10 shadow-2xl border border-white/5">
          <div className="text-center">
            <h2 className="text-3xl font-black uppercase tracking-widest">
              Welcome <span className="text-blue-600">Back</span>
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Please enter your details to sign in
            </p>
          </div>
          <form className="mt-8 space-y-6">
            <div className="space-y-4">
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

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-800 bg-gray-900" />
                <span className="text-gray-400">Remember me</span>
              </label>
              <a href="#" className="font-bold text-blue-500 hover:text-blue-400">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 py-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            >
              Sign In
            </button>

            <p className="text-center text-sm text-gray-400">
              Don't have an account?{" "}
              <Link to="/register" className="font-bold text-blue-500 hover:text-blue-400">
                Create one now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
