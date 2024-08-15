import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import RedirectHandler from './pages/RedirectHandler';
// import { AuthProvider } from './contexts/AuthContext';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {

  const [token, setToken] = useState(false)

  if (token) {
    sessionStorage.setItem('token', JSON.stringify(token))
  }

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }

  }, [])


  return (
    <>
      <Routes>
        <Route path={'/signup'} element={<Signup />} />
        <Route path={'/login'} element={<Login setToken={setToken} />} />
        {token ? <Route path={'/home'} element={<Home token = {token} />} /> : ''}
      </Routes>


    </>

  );
}

export default App;
