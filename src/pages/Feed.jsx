import React from "react";
import Post from "../components/Post";

function Feed() {
  return (
    <div className="w-full bg-gray-800 p-6 shadow-md flex flex-col">
      <div className="mb-6 border-b border-gray-700 pb-4">
        <input
          type="text"
          placeholder="What’s on your mind?"
          className="w-full p-3 rounded-md border border-gray-700 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
        />
        <div className="flex justify-between mt-4 text-green-500">
          <button className="hover:text-green-400">Go Live</button>
          <button className="hover:text-green-400">Photo</button>
          <button className="hover:text-green-400">Video</button>
          <button className="hover:text-green-400">Feeling</button>
        </div>
      </div>

      <div className="flex-1">
        <Post />
        <Post />
        <Post />
        <Post />
        {/* Add more posts here if needed */}
      </div>
    </div>
  );
}

export default Feed;

