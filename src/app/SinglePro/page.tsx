"use client";

import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [cartOpen, setCartOpen] = useState(false);

  const thumbnailImages = [
    "/Screenshot (47.1).png",
    "/Screenshot (48.1).png",
    "/Screenshot (49.1).png",
    "/Screenshot (50.1).png",
  ];

  return (
    <div className="font-sans">
      {/* Header */}
      <div className="px-6 py-4 bg-gray-100">
        <div className="text-sm text-gray-600">
          Home &gt; Shop &gt; Asgaard Sofa
        </div>
      </div>

      {/* Main Product Section */}
      <div className="grid lg:grid-cols-2 gap-8 p-6">
        {/* Images */}
        <div>
          <div className="border rounded-lg p-2">
          <img
  src="/Screenshot (37.2).png"
  alt="Asgaard Sofa"
  className="rounded-lg w-full h-auto"
/>

          </div>
          <div className="flex space-x-2 mt-4">
            {thumbnailImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Thumbnail ${index + 1}`}
                className="w-16 h-16 border rounded-lg object-cover"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-2xl font-bold">Asgaard Sofa</h1>
          <p className="text-xl text-gray-500 my-2">Rs. 250,000.00</p>
          <div className="flex items-center mb-4">
            <div className="flex space-x-1 text-yellow-500 text-lg">
              {Array(5).fill("⭐")}
            </div>
            <span className="text-sm text-gray-500 ml-2">5 Customer Reviews</span>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and attended highs for a sound.
          </p>
          {/* Sizes */}
          <div className="mb-4">
            <h3 className="text-sm font-medium mb-2">Size</h3>
            <div className="flex space-x-2">
              {["L", "XL", "XS"].map((size, index) => (
                <button
                  key={index}
                  className="px-4 py-2 border rounded-lg bg-gray-50 hover:bg-gray-100"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="mb-4">
            <h3 className="text-sm font-medium mb-2">Color</h3>
            <div className="flex space-x-2">
              {["bg-purple-500", "bg-black", "bg-yellow-400"].map((color, index) => (
                <div
                  key={index}
                  className={`w-8 h-8 rounded-full border ${color}`}
                ></div>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center border rounded-lg overflow-hidden">
              <button className="px-3 py-2 bg-gray-100">-</button>
              <span className="px-4">1</span>
              <button className="px-3 py-2 bg-gray-100">+</button>
            </div>
            <button
              className="px-6 py-3 bg-blue-600 text-white rounded-lg"
              onClick={() => setCartOpen(true)}
            >
              Add to Cart
            </button>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <p>SKU: S5001</p>
            <p>Category: Sofas</p>
            <p>Tags: Sofa, Chair, Home, Shop</p>
          </div>
        </div>
      </div>
<br></br>
<div className="border-t border-gray-300"></div>
      {/* Description Section */}
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-4 flex justify-center items-center">Description</h2>
        <p className="text-sm text-gray-400 mb-4">
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road
        </p>
        <p className="text-sm text-gray-400 mb-4">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio that boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio that boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio that boasts a clear midrange and extended highs for a sound that is both articulate and pronounced.
        </p>
        {/* Description Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img
            src="/Screenshot (51.1).png"
            alt="Sofa Description 1"
            className="rounded-lg"
          />
          <img
            src="/Screenshot (52.1).png"
            alt="Sofa Description 2"
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="border-t border-gray-300"></div>


{/* Related Products */}
<div>
  <h2 className="text-3xl font-bold flex justify-center items-center mb-8 mt-8">Related Products</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
    {[
      {
        name: "Trenton modular sofa, 3",
        price: "Rs. 25,000.00",
        image: "/Screenshot__11.1_-removebg-preview.png", 
      },
      {
        name: "Granite dining table with dining chair",
        price: "Rs. 25,000.00",
        image: "/Screenshot__12.1_-removebg-preview.png", 
      },
      {
        name: "Outdoor bar table and stool",
        price: "Rs. 25,000.00",
        image: "/Screenshot__13.1_-removebg-preview.png", 
      },
      {
        name: "Plain console with teak mirror",
        price: "Rs. 25,000.00",
        image: "/Screenshot__14.1_-removebg-preview.png", 
      },
    ].map((product, index) => (
      <div key={index} className="border p-4 rounded-lg bg-white">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-32 object-cover mb-2 rounded"
        />
        <h3 className="text-sm font-semibold">{product.name}</h3>
        <p className="text-gray-600">{product.price}</p>
      </div>
    ))}
  </div>
  <li className=" text-black bg-white font-bold px-4 py-4 mr-7 ml-4 mt-2 mb-2 flex justify-center items-center "><Link href="/Shop">View More</Link></li>
</div>


      {/* Cart Sidebar */}
      {cartOpen && (
        <div className="fixed top-0 right-0 w-72 h-full bg-white shadow-lg z-50">
          <div className="p-4 flex justify-between items-center border-b">
            <h3 className="text-lg font-bold">Shopping Cart</h3>
            <button onClick={() => setCartOpen(false)}>✕</button>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <img
                src="/Screenshot (37.2).png"
                alt="Asgaard Sofa"
                className="w-16 h-16 rounded-lg"
              />
              <div>
                <p className="text-sm font-medium">Asgaard Sofa</p>
                <p className="text-sm">1 x Rs. 250,000.00</p>
              </div>
            </div>
            <div className="border-t pt-4">
              <p className="flex justify-between">
                <span>Subtotal</span> <span>Rs. 250,000.00</span>
              </p>
              <Link href="/Cart">
      <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
        View Cart
      </button>
    </Link>
    <Link href="/Checkout">
      <button className="w-full mt-2 px-4 py-2 bg-black text-white rounded-lg hover:black transition duration-300">
        Checkout
      </button>
    </Link>
              {/* <button className="w-full mt-2 px-4 py-2 border rounded-lg">
                Checkout
              </button> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


             

