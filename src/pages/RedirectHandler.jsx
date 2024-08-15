import React, { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const RedirectHandler = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      navigate('/home'); // Redirect to your desired page
    }
  }, [loading, user, navigate]);

  return <div>Loading...</div>;
};

export default RedirectHandler;
