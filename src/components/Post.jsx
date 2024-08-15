import React from "react";

function Post() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <div className="flex items-center mb-4">
        <h3 className="font-bold text-gray-900 text-lg">John Carter</h3>
        <p className="text-gray-600 text-sm ml-2">4 hours ago</p>
      </div>
      <p className="text-gray-800 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <img src="image_url" alt="Post" className="w-full h-auto rounded-lg mb-4" />
      <div className="flex justify-between items-center mb-4 text-gray-600">
        <button className="hover:text-red-500">❤️ 1.2k</button>
        <button className="hover:text-blue-500">💬 200</button>
        <button className="hover:text-yellow-500">🔄 17</button>
      </div>
      <input
        type="text"
        placeholder="Write your comment"
        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default Post;
