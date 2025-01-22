import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "Going all-in with millennial design",
    date: "14 Oct 2022",
    category: "Wood",
    image: "/Screenshot (67.1).png", 
  },
  {
    id: 2,
    title: "Exploring new ways of decorating",
    date: "14 Oct 2022",
    category: "Handmade",
    image: "/Screenshot (68.1).png", 
  },
  {
    id: 3,
    title: "Handmade pieces that took time to make",
    date: "14 Oct 2022",
    category: "Wood",
    image: "/Screenshot (69.1).png", 
  },
];

const categories = [
  { name: "Crafts", count: 2 },
  { name: "Design", count: 8 },
  { name: "Handmade", count: 7 },
  { name: "Interior", count: 1 },
  { name: "Wood", count: 6 },
];

const recentPosts = [
  {
    id: 1,
    title: "Going all-in with millennial design",
    date: "03 Aug 2022",
    image: "/Screenshot (18.1).png", 
  },
  {
    id: 2,
    title: "Exploring new ways of decorating",
    date: "03 Aug 2022",
    image: "/Screenshot (21.1).png", 
  },
  {
    id: 3,
    title: "Handmade pieces that took time to make",
    date: "03 Aug 2022",
    image: "/Screenshot (67.1).png", 
  },
  {
    id: 4,
    title: "Modern home in Milan",
    date: "03 Aug 2022",
    image: "/Screenshot (69.1).png", 
  },
  {
    id: 5,
    title: "Colorful office redesign",
    date: "03 Aug 2022",
    image: "/Screenshot (68.1).png", 
  },
];

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left/Main Content */}
        <div className="lg:col-span-3 grid gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white shadow rounded-lg">
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={450}
                className="rounded-t-lg"
              />
              <div className="p-4">
                <div className="text-sm text-gray-600 mb-2 flex items-center space-x-2">
                  <span>Admin</span>
                  <span>{post.date}</span>
                  <span>{post.category}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:underline mt-4 inline-block"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Right Sidebar */}
        <div>
          {/* Search Bar */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
            />
          </div>

          {/* Categories */}
          <div className="mb-8 bg-white shadow rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul>
              {categories.map((category, index) => (
                <li
                  key={index}
                  className="flex justify-between text-gray-700 py-2 border-b"
                >
                  <span>{category.name}</span>
                  <span>{category.count}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
            <ul>
              {recentPosts.map((post) => (
                <li
                  key={post.id}
                  className="mb-4 last:mb-0 flex items-start space-x-4"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={60}
                    height={60}
                    className="rounded"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">
                      {post.title}
                    </h4>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center space-x-2">
        <button className="bg-yellow-200 px-4 py-2 rounded">1</button>
        <button className="bg-yellow-200 px-4 py-2 rounded">2</button>
        <button className="bg-yellow-200 px-4 py-2 rounded">3</button>
        <button className="bg-yellow-200 px-4 py-2 rounded">Next</button>
      </div>
    </div>
  );
}


