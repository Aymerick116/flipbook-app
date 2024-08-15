import React, { useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({setToken}) => {

    let navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const { data ,error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        
        throw error;
      }
      console.log(data)
      setToken(data)
      navigate("/home")

      setMessage('Login successful!');
    } catch (err) {
      setError('Failed to login. Check your credentials.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
      Don't have an account? <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default Login;
