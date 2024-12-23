import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


import { auth } from './Firebase';
import Navbar from '../Navbar/Navbar';


const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields!");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("Login successful!", user);
      alert("Login successful!");
      navigate("/Admin"); // Navigate to the admin cart page
    } catch (error) {
      console.error("Error during login:", error.message);
      alert(error.message);
    }
  };

  return (
    <>
      <Navbar/>
    <div className='flex items-center justify-center min-h-screen bg-gray-700'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
         <h2 className='text-2xl font-bold text-gray-800 mb-6 text-center '>Admin Login</h2>
     
      <form onSubmit={handleLogin} className="book-container">
       
        <div className="mb-4">
          <label className='block text-sm font-medium text-gray-700'>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className='w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400'
          />
        </div>
        <div className="mb-4">
          <label  className='block text-sm font-medium text-gray-700'>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            className='w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400'
          />
        </div>
        <button type="submit" className="w-full bg-green-400 text-white py-2 px-2 rounded-lg ">Login</button>

        <div className='mt-4 text-center'>
          <p className='text-sm text-gray-600'>
            Don't have an account?{" "}
            <Link to="/Signup">
              <span className='text-sm text-blue-500 font-bold'>Signup</span>
            </Link>
          </p>
        </div>
      </form>
      </div>
    </div>
    </>
  );
};

export default UserLogin;
