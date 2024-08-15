import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaRegBell, FaRegEnvelope, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="w-full bg-gray-800 p-4 flex items-center justify-between shadow-md">
      {/* Logo */}
      <Link to="/" className="text-white text-xl font-bold">
        Logo
      </Link>
      
      {/* Centered Search Input */}
      <div className="flex flex-1 justify-center mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-1/2 p-2 bg-gray-700 border border-gray-600 rounded-l-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-gray-600 p-2 rounded-r-md border border-gray-600 flex items-center justify-center">
          <FaSearch className="text-white" />
        </button>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <FaRegEnvelope className="text-white text-xl cursor-pointer hover:text-gray-400" />
        <FaRegBell className="text-white text-xl cursor-pointer hover:text-gray-400" />
        <FaUserCircle className="text-white text-xl cursor-pointer hover:text-gray-400" />
      </div>
    </div>
  );
};

export default Navbar;
