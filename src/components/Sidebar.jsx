import React from "react";

function Sidebar() {
  return (
    <div className="w-1/4 bg-gray-800 p-6 shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-white">Friends.</h1>
      <ul className="space-y-4 text-gray-300">
        <li className="hover:text-green-500 cursor-pointer">Home</li>
        <li className="hover:text-green-500 cursor-pointer">Friends</li>
        <li className="hover:text-green-500 cursor-pointer">Groups</li>
        <li className="hover:text-green-500 cursor-pointer">Marketplace</li>
        <li className="hover:text-green-500 cursor-pointer">Saved</li>
        <li className="hover:text-green-500 cursor-pointer">Pages</li>
        <li className="hover:text-green-500 cursor-pointer">Favourites</li>
        <li className="hover:text-green-500 cursor-pointer">See More</li>
      </ul>
      <h2 className="mt-8 text-lg font-semibold text-white">My Group</h2>
      <ul className="space-y-4 mt-2 text-gray-300">
        <li className="hover:text-green-500 cursor-pointer">The Nerd Head</li>
        <li className="hover:text-green-500 cursor-pointer">Take a Trip</li>
        <li className="hover:text-green-500 cursor-pointer">Papa Ki Pari</li>
        <li className="hover:text-green-500 cursor-pointer">College Friends</li>
        <li className="hover:text-green-500 cursor-pointer">My Dream House</li>
      </ul>
    </div>
  );
}

export default Sidebar;
