import Link from "next/link";

export default function Contact() {
    return (
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold">Get In Touch With Us</h1>
          <p className="text-gray-500 mt-4">
            For More Information About Our Products & Services, Please Feel Free To Drop Us
            An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>
  
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="text-yellow-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.25 10 9 11 1.75-1 9-5.75 9-11 0-4.97-4.03-9-9-9zm0 11a2 2 0 110-4 2 2 0 010 4z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium">Address</h3>
                <p className="text-gray-500">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-yellow-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75l.644-1.924c.247-.739.925-1.326 1.726-1.326h12.71c.801 0 1.479.587 1.726 1.326L20.25 6.75M6.75 18h10.5M3.75 6.75h16.5M6.75 18V9h10.5v9M6.75 18H4.5m12 0h2.25"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium">Phone</h3>
                <p className="text-gray-500">Mobile: (+84) 546-6789</p>
                <p className="text-gray-500">Hotline: (+84) 456-6789</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-yellow-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12h3m-3 6h3m-3-12h3M3 6h3m-3 6h3m-3 6h3M9 6h3m-3 6h3m-3 6h3m3-6a6 6 0 110-12 6 6 0 010 12z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium">Working Time</h3>
                <p className="text-gray-500">Monday-Friday: 9:00 - 22:00</p>
                <p className="text-gray-500">Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
  
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="Abc"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="Abc@def.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="This is an optional"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4} 
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="Hi! I'd like to ask about"
                ></textarea>
              </div>
              <Link href="/Home">
  <button className="w-full bg-black text-white rounded-lg px-4 py-2">
    Submit
  </button>
</Link>

            </form>
          </div>
        </div>
      </div>
    );
  }

  // "w-full bg-black text-white rounded-lg px-4 py-2"
  
  