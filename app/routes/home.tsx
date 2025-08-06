// src/routes/home.tsx

import { Link } from "react-router";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6 px-4">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to Your App</h1>
      <p className="text-gray-600 max-w-md text-center">
        This is the home page. Use the navigation below to explore different sections.
      </p>
      <nav className="flex space-x-4">
        <Link
          to="/profile/posts/grid"
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          Posts
        </Link>
        <Link
          to="/profile/highlights"
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-green-700 transition"
        >
          Highlights
        </Link>
        <Link
          to="/profile/reels/grid"
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-pink-700 transition"
        >
          Reels
        </Link>
        <Link
          to="/profile/tagged/grid"
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-yellow-700 transition"
        >
          Tagged
        </Link>
      </nav>
    </div>
  );
}
