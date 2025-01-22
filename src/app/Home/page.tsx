// pages/index.js

import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="bg-yellow-100 text-gray-900">
      {/* Section 1: Rocket single seater */}
      <section className="flex flex-col md:flex-row items-center justify-center p-6 md:p-16">
        <div className="text-left md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Rocket single seater</h1>
          <button className="text-lg font-semibold underline hover:text-gray-700" > 
          <Link href="/Shop">Shop Now</Link>
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src= "/rocket-single-seater-removebg-preview.png"
            alt="Rocket Single Seater"
            className="w-full max-w-md mx-auto "
          />
        </div>
      </section>

      {/* Section 2: Side tables */}
      <section className="flex flex-wrap justify-center bg-gray-50 p-6 md:p-16">
        <div className="w-full md:w-1/2 lg:w-1/3 p-4 text-center">
          <img
            src="/Screenshot__4_2__enhanced-removebg-preview.png"
            alt="Side Table"
            className="w-full max-w-xs mx-auto height: 500px width={1000} "
          />
          <h2 className="text-xl font-bold mt-4 mb-4 md:text-3xl">Side Table</h2>
          <button className="text-lg font-semibold underline hover:text-gray-700">
          <Link href="/Shop">View More</Link>
          </button>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4 text-center">
          <img
            src="/Screenshot__4_1__enhanced-removebg-preview.png"
            alt="Side Table"
            className="w-full max-w-xs mx-auto"
          />
          <h2 className="text-xl font-bold mt-4 mb-4 ml-5 md:text-3xl">Side Table</h2>
          <button className="text-lg font-semibold underline hover:text-gray-700">
          <Link href="/Shop">View More</Link>
          </button>
        </div>
      </section>

      {/* Section 3: Top picks */}
      <section className="p-6 md:p-16 text-center bg-white">
        <h2 className="text-3xl font-bold">Top Picks For You</h2>
        <p className="text-lg text-gray-700 mb-8">
          Find a bright idea to suit your taste with our great selection.
        </p>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <img
              src="/Screenshot__11.1_-removebg-preview.png"
              alt="Top Pick"
              className="w-full max-w-sm mx-auto"
            />
            <h3 className="text-lg font-bold mt-4">Trenton modular sofa</h3>
            <p className="text-gray-700 mt-2">Rs. 25,000.00</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <img
              src="/Screenshot__12.1_-removebg-preview.png"
              alt="Top Pick"
              className="w-full max-w-sm mx-auto"
            />
            <h3 className="text-lg font-bold mt-4">Granite Dining Table with Dining Chair</h3>
            <p className="text-gray-700 mt-2">Rs. 25,000.00</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <img
              src="/Screenshot__13.1_-removebg-preview.png"
              alt="Top Pick"
              className="w-full max-w-sm mx-auto"
            />
            <h3 className="text-lg font-bold mt-4">Outdoor Bartable and Stool</h3>
            <p className="text-gray-700 mt-2">Rs. 25,000.00</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <img
              src="/Screenshot__14.1_-removebg-preview.png"
              alt="Top Pick"
              className="w-full max-w-sm mx-auto"
            />
            <h3 className="text-lg font-bold mt-4">Plain console with Teak Mirror</h3>
            <p className="text-gray-700 mt-2">Rs. 25,000.00</p>
          </div>
          {/* Repeat for other picks */}
        </div>
        <button className="text-lg font-semibold underline hover:text-gray-700">
        <Link href="/Shop">View More</Link>
        </button>
      </section>

      {/* Section 4: New Arrivals */}
      <section className="flex flex-col md:flex-row items-center bg-yellow-100 p-6 md:p-16">
        <div className="md:w-1/2">
          <img
            src="/Screenshot__15.1_-removebg-preview.png"
            alt="Asgaard Sofa"
            className="w-full max-w-lg mx-auto"
          />
        </div>
        <div className="text-left md:w-1/2">
          <h2 className="text-5xl md:text-5xl font-bold mb-5 ml-20">Asgaard Sofa</h2>
          <button className="text-lg font-semibold underline hover:text-gray-700 mb-20 ml-20 ">
            <Link href="/SinglePro">Order Now</Link>
          </button>
        </div>
      </section>

            {/* Section 6: Blogs */}
            <section className="p-6 md:p-16 text-center bg-white">
        <h2 className="text-3xl font-bold">Our Blogs</h2>
        <p className="text-lg text-gray-700 mb-8">
          Find a bright idea to suit your taste with our great selection.
        </p>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <img
              src="/Screenshot (18.1).png"
              alt="Blog Post"
              className="w-full max-w-xs mx-auto"
            />
            <h3 className="text-lg mt-4">Going all-in with millennial design</h3>
            <button className="text-lg font-semibold underline hover:text-gray-700 mt-4">
            <Link href="/Blog">Read More</Link>
            </button>
            
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <img
              src="/Screenshot (19.1).png"
              alt="Blog Post"
              className="w-full max-w-xs mx-auto"
            />
            <h3 className="text-lg mt-4">Going all-in with millennial design</h3>
            <button className="text-lg font-semibold underline hover:text-gray-700 mt-4">
            <Link href="/Blog">Read More</Link>
            </button>
            
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <img
              src="/Screenshot (21.1).png"
              alt="Blog Post"
              className="w-full max-w-xs mx-auto"
            />
            <h3 className="text-lg  mt-4">Going all-in with millennial design</h3>
            <button className="text-lg font-semibold underline hover:text-gray-700 mt-4">
            <Link href="/Blog">Read More</Link>
            </button>
            
          </div>
          {/* Repeat for other blog posts */}
        </div>
      </section>

      {/* Section 5: Instagram */}
      <section className="bg-gray-100 text-center p-6 md:p-16">
        <h2 className="text-3xl font-bold">Our Instagram</h2>
        <p className="text-lg text-gray-700 mb-4">Follow our store on Instagram</p>
        <button className="text-lg font-semibold bg-black text-white py-2 px-6 rounded-full">
          Follow Us
        </button>
      </section>
    </div>
  );
};

export default HomePage;
