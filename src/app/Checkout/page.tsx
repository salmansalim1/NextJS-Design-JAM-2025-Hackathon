import Link from "next/link";

export default function Checkout() {
    return (
        
      <div className="container mx-auto px-4 py-8">
        <div className="relative bg-yellow-100 bg-center h-[200px] flex items-center justify-center mb-20" style={{ backgroundImage: 'url("/path-to-banner-image.jpg")' }}>
        <div className="text-center text-black">
          <h1 className="text-3xl font-bold">Checkout</h1>
          <p className="text-sm mt-2">Home &gt; Checkout</p>
        </div>
      </div>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Billing Details */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl font-bold mb-8 flex justify-center items-center">Billing details</h2>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="First Name"
                />
              </div>
  
              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="Last Name"
                />
              </div>
  
              {/* Company Name */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-2">Company Name (Optional)</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="Company Name"
                />
              </div>
  
              {/* Country/Region */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-2">Country / Region</label>
                <select
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                >
                  <option value="">Select Country / Region</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                </select>
              </div>
  
              {/* Street Address */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-2">Street Address</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-2"
                  placeholder="Street Address"
                />
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="Apartment, suite, unit, etc. (optional)"
                />
              </div>
  
              {/* Town/City */}
              <div>
                <label className="block text-sm font-medium mb-2">Town / City</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="Town / City"
                />
              </div>
  
              {/* Province */}
              <div>
                <label className="block text-sm font-medium mb-2">Province</label>
                <select
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                >
                  <option value="">Select Province</option>
                  <option value="Western Province">Western Province</option>
                </select>
              </div>
  
              {/* ZIP Code */}
              <div>
                <label className="block text-sm font-medium mb-2">ZIP Code</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="ZIP Code"
                />
              </div>
  
              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="Phone"
                />
              </div>
  
              {/* Email Address */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="Email address"
                />
              </div>
  
              {/* Additional Information */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-2">Additional Information</label>
                <textarea
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="Additional notes"
                ></textarea>
              </div>
            </form>
          </div>
  
          {/* Order Summary */}
          <div className="w-full lg:w-1/3 bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Product</h2>
            <div className="flex justify-between items-center mb-4">
              <p>Asgard Sofa × 1</p>
              <p>Rs. 250,000.00</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between items-center mb-4">
              <p>Subtotal</p>
              <p>Rs. 250,000.00</p>
            </div>
            <div className="flex justify-between items-center font-bold text-lg mb-4">
              <p>Total</p>
              <p>Rs. 250,000.00</p>
            </div>
  
            {/* Payment Methods */}
            <h2 className="text-lg font-bold mb-4">Payment Methods</h2>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" className="h-4 w-4" />
                Direct Bank Transfer
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" className="h-4 w-4" />
                Cash on Delivery
              </label>
            </div>
  
            <p className="text-sm text-gray-600 mt-4">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference.
            </p>
  
            {/* Place Order Button */}
            <button className="w-full mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg">
            <Link href="/Account">Place Order</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  
  
                  
                  
  