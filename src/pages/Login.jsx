import React, { useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ setToken }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setErrorMsg('');

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      setToken(data.session.access_token); // assuming `data` contains the session token
      setMessage('Login successful!');
      navigate('/home');
    } catch (err) {
      setErrorMsg('Failed to login. Check your credentials.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black flex items-center justify-center">
      <div className="bg-gray-900 p-8 md:p-12 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-white text-2xl font-bold mb-8 text-center">Login to creatAflip</h2>
        
        {message && <p className="text-green-500 text-center mb-4">{message}</p>}
        {errorMsg && <p className="text-red-500 text-center mb-4">{errorMsg}</p>}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="karthik@lotusrealtors.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-400">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="********"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-500 transition duration-200"
            >
              LOGIN
            </button>
          </div>

          <div className="text-center text-gray-400">
            Don't have an account?{' '}
            <Link to="/signup" className="text-green-500 hover:text-green-400">
              SIGN UP
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;




// import React, { useState } from 'react';
// import { supabase } from '../utils/supabaseClient';
// import { Link, useNavigate } from 'react-router-dom';

// const Login = ({ setToken }) => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const [errorMsg, setErrorMsg] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');
//     setErrorMsg('');

//     try {
//       const { data, error } = await supabase.auth.signInWithPassword({
//         email,
//         password,
//       });

//       if (error) {
//         throw error;
//       }

//       setToken(data.session.access_token); // assuming `data` contains the session token
//       setMessage('Login successful!');
//       navigate('/home');
//     } catch (err) {
//       setErrorMsg('Failed to login. Check your credentials.');
//     }
//   };

//   return (
//     <div>
     
//       <h2>Login</h2>
//       {message && <p style={{ color: 'green' }}>{message}</p>}
//       {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
//       <form onSubmit={handleSubmit}>
//         <label>
//           Email:
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </label>
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </label>
//         <button type="submit">Login</button>
//       </form>
//       <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
//     </div>
//   );
// };

// export default Login;
