import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Check session storage for token and set it
    const savedToken = sessionStorage.getItem('token');
    if (savedToken) {
      setToken(JSON.parse(savedToken));
    }
  }, []);

  useEffect(() => {
    // Store token in session storage whenever it changes
    if (token) {
      sessionStorage.setItem('token', JSON.stringify(token));
    } else {
      sessionStorage.removeItem('token'); // Clear token when null
    }
  }, [token]);

  // Protected route wrapper
  const ProtectedRoute = ({ children }) => {
    return token ? children : <Navigate to="/" />;
  };

  // Redirect logged-in users from login/signup to home
  const RedirectIfAuthenticated = ({ children }) => {
    return token ? <Navigate to="/home" /> : children;
  };

  return (
    <>
      <Routes>
      <Route 
          path="/" 
          element={
            <RedirectIfAuthenticated>
              <Login setToken={setToken} />
            </RedirectIfAuthenticated>
          } 
        />
        <Route 
          path="/signup" 
          element={
            <RedirectIfAuthenticated>
              <Signup />
            </RedirectIfAuthenticated>
          } 
        />
        
        <Route 
          path="/home" 
          element={
            <ProtectedRoute>
              <Home token={token} setToken={setToken} />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </>
  );
}

export default App;
