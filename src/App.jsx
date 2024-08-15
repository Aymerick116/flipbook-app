import React from 'react';
import {Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import RedirectHandler from './pages/RedirectHandler';
// import { AuthProvider } from './contexts/AuthContext';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <>
    <Routes>
      <Route path={'/signup'} element={<Signup/>} />
      <Route path={'/login'} element={<Login/>} />
      <Route path={'/home'} element={<Home/>} />
    </Routes>
   
    
    </>
  
  );
}

export default App;
