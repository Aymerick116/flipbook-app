import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../utils/supabaseClient';
import Sidebar from '../components/Sidebar';
import Feed from './Feed';
import RightSidebar from '../components/RightSideBar'; // Ensure this import path is correct
import Navbar from '../components/Navbar'; // Import the Navbar component

const Home = ({ token, setToken }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
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
      <div className="flex flex-1 w-full h-full mt-16"> {/* Add margin-top to avoid overlapping with Navbar */}
        <Sidebar className="w-1/4" />
        <main className="w-1/2 flex flex-col items-center p-4 overflow-auto">
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
        <RightSidebar className="w-1/4" />
        
      </div>
    </div>
  );
};

export default Home;
