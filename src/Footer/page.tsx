export default function Footer() {
  return (
    <footer>
     <div className="border-t border-gray-300"></div>

    
      {/* Features Section */}
      <div className="bg-pink-500"> {/* Light pink background */}
        <div className="container mx-auto px-4 py-12"> {/* Increased vertical padding */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold">Free Delivery</h3>
              <p className="text-gray-600 text-sm">
                For all orders over $50, consectetur adipiscing elit.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold">90 Days Return</h3>
              <p className="text-gray-600 text-sm">
                If goods have problems, consectetur adipiscing elit.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold">Secure Payment</h3>
              <p className="text-gray-600 text-sm">
                100% secure payment, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Address Section */}
            <div>
              <h4 className="text-sm font-semibold">Address</h4>
              <p className="text-gray-600 text-sm">
                400 University Drive Suite 200 <br />
                Coral Gables, FL 33134 USA
              </p>
            </div>

            {/* Links Section */}
            <div>
              <h4 className="text-sm font-semibold">Links</h4>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>
                  <a href="Home" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="Shop" className="hover:underline">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="Blog" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="Contact" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Help Section */}
            <div>
              <h4 className="text-sm font-semibold">Help</h4>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Payment Options
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policies
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div>
              <h4 className="text-sm font-semibold">Newsletter</h4>
              <div className="mt-4">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <button className="w-full mt-2 px-4 py-2 bg-black text-white text-sm font-semibold rounded-md hover:bg-gray-800">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="mt-8 border-t border-gray-200 pt-4 text-center text-sm text-gray-500">
            2022 Meubel House. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

  