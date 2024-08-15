import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../utils/supabaseClient';
import Sidebar from '../components/Sidebar';
import Feed from './Feed';
import RightSidebar from '../components/RightSideBar'; // Ensure this import path is correct
import Navbar from '../components/Navbar'; // Import the Navbar component

const Home = ({ token, setToken }) => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Redirect to login if token is not available
    if (!token) {
      navigate('/');
    }

    // Check screen width to determine if the device is mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Consider mobile if width is less than 768px
    };

    // Add event listener to handle screen resizing
    window.addEventListener('resize', handleResize);

    // Call the function initially to set the correct state on page load
    handleResize();

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [token, navigate]);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      sessionStorage.removeItem('token');
      setToken(null);
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black flex flex-col">
      <Navbar /> {/* Add Navbar here */}
      <div className="flex flex-col md:flex-row flex-1 w-full h-full mt-4 rounded-sm">
        {!isMobile && <Sidebar className="w-1/4" />} {/* Render Sidebar only on larger screens */}
        <main className="flex-1 flex flex-col items-center p-4 overflow-auto">
          <div className="bg-gray-900 p-8 md:p-12 rounded-lg shadow-lg w-full max-w-4xl text-center mb-8">
            <h1 className="text-white text-2xl font-bold mb-8">Home Page</h1>
            <div className="text-gray-400 mb-8">
              Welcome, <span className="text-white font-semibold">{token ? token.user?.id : 'Guest'}</span>
            </div>
            <button
              onClick={handleLogout}
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-500 transition duration-200"
            >
              Logout
            </button>
          </div>
          <Feed />
        </main>
        {!isMobile && <RightSidebar className="w-1/4" />} {/* Render RightSidebar only on larger screens */}
      </div>
    </div>
  );
};

export default Home;
