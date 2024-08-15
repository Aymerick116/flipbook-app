// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Home = ({ token }) => {
//   let navigate = useNavigate();

//   const handleLogout = () => {
//     sessionStorage.removeItem('token');
//     navigate('/login');
//   };

//   return (
//     <div>
//       <h1>Home Page</h1>
//       {/* Check if token and user exist before accessing user id */}
//       <div>Welcome, {token?.user?.id || 'Guest'}</div>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../utils/supabaseClient'; // Ensure this is your correct import for Supabase

const Home = ({ token, setToken }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login if token is missing
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut(); // Log out from Supabase session
      sessionStorage.removeItem('token'); // Remove token from session storage
      setToken(null); // Clear token from state
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div>
      <h1>Home Page</h1>
      {/* Check if token and user exist before accessing user id */}
      <div>Welcome, {token?.user?.id || 'Guest'}</div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;

