import React from "react";

function RightSidebar() {
  return (
    <div className="w-1/4 bg-white p-6 shadow-md flex flex-col h-screen">
      <h2 className="text-lg font-semibold text-gray-900">Birthdays 🎂</h2>
      <p className="text-gray-600 mb-6">Pola Foster and 3 other friends have birthdays today</p>

      <h2 className="text-lg font-semibold text-gray-900">Latest Activity</h2>
      <p className="text-gray-600 mb-4">Hally Harald Gomes added a photo in Talk.js</p>
      <p className="text-gray-600 mb-4">Alex Kai sent you a friend request</p>

      <h2 className="text-lg font-semibold text-gray-900 mt-6">Active Friends</h2>
      <ul className="space-y-3 mt-2 text-gray-800">
        <li className="hover:text-blue-600 cursor-pointer">Jaden Chance</li>
        <li className="hover:text-blue-600 cursor-pointer">Arezki Williams</li>
        <li className="hover:text-blue-600 cursor-pointer">Rose James</li>
        <li className="hover:text-blue-600 cursor-pointer">Tman Mats</li>
        <li className="hover:text-blue-600 cursor-pointer">Alex Andrew</li>
        <li className="hover:text-blue-600 cursor-pointer">Kaixi Cark</li>
        <li className="hover:text-blue-600 cursor-pointer">Hamid Oskip</li>
        <li className="hover:text-blue-600 cursor-pointer">Serena Lewis</li>
        <li className="hover:text-blue-600 cursor-pointer">April Sky</li>
      </ul>
    </div>
  );
}

export default RightSidebar;
