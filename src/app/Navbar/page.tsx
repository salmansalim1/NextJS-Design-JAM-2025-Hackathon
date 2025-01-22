// components/Navbar.js

import Link from "next/link";

export default function Navbar() {
    return (
      <header className="bg-yellow-200">
        <nav className=" mx-auto flex justify-between items-center py-4 px-15">
          {/* Left Section - Navigation Links */}
          <div className=" flex items-center justify-center flex">
          <li className=" text-black font-bold mr-7 ml-8 mt-2 mb-2 "><Link href="/Home">Home</Link></li>
          <li className=" text-black font-bold  mr-7 ml-4 mt-2 mb-2 "><Link href="/Shop">Shop</Link></li>
          <li className=" text-black font-bold  mr-7 ml-4 mt-2 mb-2 "><Link href="/Blog">About</Link></li>
          <li className=" text-black font-bold  mr-7 ml-4 mt-2 mb-2 "><Link href="/Contact">Contact</Link></li>
          </div>
  
          {/* Right Section - Icons */}
          <div className=" ml-auto flex space-x-8">
            <a href="/Account" aria-label="Profile" className="text-black text-xl">
              👤
            </a>
            <a href="/Shop" aria-label="Search" className="text-black text-xl">
              🔍
            </a>
            <a href="/SinglePro" aria-label="Wishlist" className="text-black text-xl">
              ❤️
            </a>
            <a href="/Cart" aria-label="Cart" className="text-black text-xl">
              🛒
            </a>
          </div>
        </nav>
      </header>
    );
  }
  