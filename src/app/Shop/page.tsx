"use client";

import React, { useState } from "react";

const products = [
  { id: 1, name: "Trenton modular sofa_3", price: "25,000.00", image: "/Screenshot__11.1_-removebg-preview.png" },
  { id: 2, name: "Granite dining table with dining chair", price: "25,000.00", image: "/Screenshot (29.1).png" },
  { id: 3, name: "Outdoor bar table and stool", price: "25,000.00", image: "/Screenshot__13.1_-removebg-preview.png" },
  { id: 4, name: "Plain console with teak mirror", price: "25,000.00", image: "/Screenshot__14.1_-removebg-preview.png" },
  { id: 5, name: "Grain coffee table", price: "15,000.00", image: "/Screenshot (32.1).png" },
  { id: 6, name: "Kent coffee table", price: "225,000.00", image: "/Screenshot (33.2).png" },
  { id: 7, name: "Round coffee table_color 2", price: "251,000.00", image: "/Screenshot (34.1).png" },
  { id: 8, name: "Reclaimed teak coffee table", price: "25,200.00", image: "/Screenshot (34.2).png" },
  { id: 9, name: "Plain console", price: "258,200.00", image: "/Screenshot (35.1).png" },
  { id: 10, name: "Reclaimed teak Sideboard", price: "20,000.00", image: "/Screenshot (35.2).png" },
  { id: 11, name: "SJP_0825", price: "200,000.00", image: "/Screenshot (36.1).png" },
  { id: 12, name: "Bella chair and table", price: "100,000.00", image: "/Screenshot (36.2).png" },
  { id: 13, name: "Granite square side table", price: "258,200.00", image: "/Screenshot (37.1).png" },
  { id: 14, name: "Asgard sofa", price: "250,000.00", image: "/Screenshot (37.2).png" },
  { id: 15, name: "Maya sofa three seater", price: "115,000.00", image: "/Screenshot (38.1).png" },
  { id: 16, name: "Outdoor sofa set", price: "244,000.00", image: "/Screenshot (38.2).png" },
];

export default function ShopPage() {
  const [sortBy, setSortBy] = useState("default");

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
    // Sorting logic can be implemented here
  };

  return (
    
    <div className="p-4">
      <div className="relative bg-yellow-100 bg-center h-[200px] flex items-center justify-center" style={{ backgroundImage: 'url("/path-to-banner-image.jpg")' }}>
        <div className="text-center text-black">
          <h1 className="text-3xl font-bold">Shop</h1>
          <p className="text-sm mt-2">Home &gt; Shop</p>
        </div>
      </div>
      {/* Filter and Sort Section */}
      <div className="flex flex-wrap items-center justify-between bg-gray-100 p-4 rounded-md shadow-sm">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 text-gray-700 hover:text-black">
            <i className="fas fa-sliders-h font-bold"></i> Filter                             
          </button>
          <span className="text-sm text-gray-600">Showing all 16 results</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700" htmlFor="sortBy">
              Sort by
            </label>
            <select
              id="sortBy"
              className="border rounded-md p-1"
              value={sortBy}
              onChange={handleSortChange}
            >
              <option value="default">Default</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
              <option value="nameAZ">Name: A to Z</option>
              <option value="nameZA">Name: Z to A</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-md p-2 shadow-sm">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
            <h2 className="text-sm font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600">Rs. {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}





