import React, { useState } from 'react';
import { supabase } from '../utils/supabaseClient'; // Adjust the import according to your setup
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // For navigation after successful signup

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    try {
      // Sign up user using Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (authError) {
        throw authError;
      }

      const userId = authData.user.id; // Get the user ID from the auth response

      // Insert additional user data into your custom Users table
      const { error: insertError } = await supabase
        .from('users')
        .insert({
          id: userId,  // Use the UID as the primary key
          email: email,
          name: username,
          username: username,
          profile_picture: '',  // Optionally, you can allow users to upload a profile picture
        });

      if (insertError) {
        throw insertError;
      }

      console.log('Signup successful:', authData);
      navigate('/'); // Redirect user to login or home page after successful signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black flex items-center justify-center">
      <div className="bg-gray-900 p-8 md:p-12 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-white text-2xl font-bold mb-8 text-center">Signup</h2>
        
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        
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
              placeholder="example@domain.com"
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
            <label htmlFor="username" className="block text-sm font-medium text-gray-400">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="Your Username"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-500 transition duration-200"
            >
              SIGN UP
            </button>
          </div>

          <div className="text-center text-gray-400">
            Already have an account?{' '}
            <Link to="/" className="text-green-500 hover:text-green-400">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;














// import React, { useState } from 'react';
// import { supabase } from '../utils/supabaseClient'; // Adjust the import according to your setup
// import { Link, useNavigate } from 'react-router-dom';

// const Signup = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [username, setUsername] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate(); // For navigation after successful signup

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(''); // Clear previous errors

//     try {
//       // Sign up user using Supabase Auth
//       const { data: authData, error: authError } = await supabase.auth.signUp({
//         email,
//         password,
//       });

//       if (authError) {
//         throw authError;
//       }

//       const userId = authData.user.id; // Get the user ID from the auth response

//       // Insert additional user data into your custom Users table
//       const { error: insertError } = await supabase
//         .from('users')
//         .insert({
//           id: userId,  // Use the UID as the primary key
//           email: email,
//           name: username,
//           username: username,
//           profile_picture: '',  // Optionally, you can allow users to upload a profile picture
//         });

//       if (insertError) {
//         throw insertError;
//       }

//       console.log('Signup successful:', authData);
//       navigate('/'); // Redirect user to login or home page after successful signup
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
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
//         <label>
//           Username:
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </label>
//         <button type="submit">Signup</button>
//       </form>
//       Already have an account? <Link to="/">Login</Link>
//     </div>
//   );
// };

// export default Signup;
