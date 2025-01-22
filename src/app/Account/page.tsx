// app/page.tsx

"use client";

import Link from "next/link";

export default function MyAccountPage() {
  return (
    <div className="font-sans">
      {/* Section 1: My Account Banner */}
    <div className="relative bg-yellow-100 bg-center h-[200px] flex items-center justify-center" style={{ backgroundImage: 'url("/path-to-banner-image.jpg")' }}>
        <div className="text-center text-black">
          <h1 className="text-3xl font-bold">My Account</h1>
          <p className="text-sm mt-2">Home &gt; My account</p>
        </div>
      </div>  

      {/* Section 2: Login and Register Forms */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 p-6 md:px-20 md:py-12">
        {/* Log In Form */}
        <div className="w-full md:w-1/2 border p-6 rounded-md shadow-lg">
          <h2 className="text-xl font-bold mb-4">Log In</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Username or email address</label>
              <input type="text" id="email" className="w-full p-2 mt-1 border rounded-md" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium">Password</label>
              <input type="password" id="password" className="w-full p-2 mt-1 border rounded-md" />
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm">Remember me</label>
            </div>
            <Link href="/Home">
  <button className="w-full py-2 bg-black text-white rounded-md mt-4">
    Log In
  </button>
</Link>
            <a href="#" className="text-sm text-blue-500 mt-2 inline-block">Lost Your Password?</a>
          </form>
        </div>

        {/* Register Form */}
        <div className="w-full md:w-1/2 border p-6 rounded-md shadow-lg">
          <h2 className="text-xl font-bold mb-4">Register</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="register-email" className="block text-sm font-medium">Email address</label>
              <input type="email" id="register-email" className="w-full p-2 mt-1 border rounded-md" />
            </div>
            <p className="text-sm mt-2">
              A link to set a new password will be sent to your email address. <br />
              Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#" className="text-blue-500">privacy policy</a>.
            </p>
            <Link href="/Home">
  <button className="w-full py-2 bg-black text-white rounded-md mt-4">
    Register
  </button>
</Link>

          </form>
        </div>
      </div>
    </div>
  );
}
