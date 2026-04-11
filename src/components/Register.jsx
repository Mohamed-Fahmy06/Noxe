import React from "react";

export default function Register() {
  return (
    <div className="login-container box-border bg-[#25343F] min-h-screen p-5 h-full w-full flex justify-center items-center">
      <div className="Register-form-container w-full h-fit max-w-md bg-[#BFC9D1] rounded-2xl flex flex-col items-center justify-evenly p-5">
        <h1 className="text-2xl font-bold mb-8">Register</h1>
        <div className="flex">
          <form action="">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email "
              required
              className="w-full p-3 rounded-lg mb-4 bg-white"
            />
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              required
              className="w-full p-3 rounded-lg mb-4 bg-white"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
              className="w-full p-3 rounded-lg mb-4 bg-white"
            />
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              placeholder="Confirm Password"
              required
              className="w-full p-3 rounded-lg mb-4 bg-white"
            />
            <input
              type="submit"
              value="Register"
              className="w-full p-3 rounded-lg bg-blue-500 text-white font-bold cursor-pointer hover:bg-blue-600"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
