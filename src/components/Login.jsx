import React from "react";

export default function Login() {
  return (
    <div className="login-container box-border bg-[#25343F] min-h-screen p-5 h-full w-full flex justify-center items-center">
      <div className="login-form-container w-full h-fit max-w-md bg-[#BFC9D1] rounded-2xl flex flex-col items-center justify-evenly p-5">
        <h1 className="text-2xl font-bold mb-8">Login</h1>
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
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
              className="w-full p-3 rounded-lg mb-4 bg-white"
            />
            <input
              type="submit"
              value="Login"
              className="w-full p-3 rounded-lg bg-blue-500 text-white font-bold cursor-pointer hover:bg-blue-600 text-decoration-none"
            />
            <p>
              Do you not have an account?{" "}
              <a href="Register" className="text-blue-500 hover:underline">
                Register
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
