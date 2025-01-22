import Link from "next/link";

export default function Cart() {
    return (
        
      <div className="container mx-auto px-4 py-8">
        <div className="relative bg-yellow-100 bg-center h-[200px] flex items-center justify-center mb-16" style={{ backgroundImage: 'url("/path-to-banner-image.jpg")' }}>
        <div className="text-center text-black">
          <h1 className="text-3xl font-bold">Cart</h1>
          <p className="text-sm mt-2">Home &gt; Cart</p>
        </div>
      </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Table */}
          <div className="lg:col-span-2">
            <table className="w-full  bg-white">
              <thead>
                <tr className="bg-yellow-100">
                  <th className="py-3 px-4 text-left text-sm font-medium">Product</th>
                  <th className="py-3 px-4 text-left text-sm font-medium">Price</th>
                  <th className="py-3 px-4 text-left text-sm font-medium">Quantity</th>
                  <th className="py-3 px-4 text-left text-sm font-medium">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-4 px-4 flex items-center space-x-4">
                    <div className="w-16 h-16 bg-yellow-100 rounded-lg flex-shrink-0">
                      <img
                        src="/Screenshot__37.2_-removebg-preview.png" 
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <span className="text-sm font-medium">Asgard sofa</span>
                  </td>
                  <td className="py-4 px-4 text-sm">Rs. 250,000.00</td>
                  <td className="py-4 px-4">
                    <input
                      type="number"
                      className="w-16 text-center border border-gray-300 rounded-md"
                      defaultValue="1"
                    />
                  </td>
                  <td className="py-4 px-4 text-sm">Rs. 250,000.00</td>
                  <td className="py-4 px-4">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-yellow-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
  
          {/* Cart Totals */}
          <div>
            <div className="p-6 bg-yellow-50 rounded-lg shadow-md">
              <h2 className="text-lg font-bold mb-4">Cart Totals</h2>
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm">Subtotal</p>
                <p className="text-sm">Rs. 250,000.00</p>
              </div>
              <div className="flex justify-between items-center font-bold text-lg mb-4">
                <p>Total</p>
                <p>Rs. 250,000.00</p>
              </div>
              <button className="w-full px-4 py-2 bg-white text-yellow-600 border border-yellow-600 rounded-lg hover:bg-yellow-100">
              <Link href="/Checkout">Checkout</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  