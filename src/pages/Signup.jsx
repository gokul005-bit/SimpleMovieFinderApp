import React, { useContext, useState } from 'react';
import { Link } from 'react-router';
import AuthContext from '../context/AuthContext';

const Signup = () => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here (e.g., API call)
    // ...existing code...
    register(email, password);

  };

  return (
    <div className="signup-container flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-[#1a1a2e] to-black relative overflow-hidden">
      {/* Cinematic background overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1500&q=80"
          alt="cinematic background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90"></div>
      </div>
      {/* Glassmorphism effect for the form */}
      <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-8 border border-white/20">
      <Link to='/home'> <h1 className='text-[cyan]'> 🡰 </h1></Link>
        <h2 className="text-3xl font-extrabold mb-6 text-center text-cyan-400 drop-shadow-lg tracking-wide font-mono">
           Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="signup-form space-y-5">
          
          <div>
            <label htmlFor="email" className="block text-cyan-200 font-semibold mb-1 tracking-wide">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 bg-black/60 text-cyan-100 border border-cyan-700 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-cyan-400"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-cyan-200 font-semibold mb-1 tracking-wide">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 bg-black/60 text-cyan-100 border border-cyan-700 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-cyan-400"
              placeholder="Create a password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 text-white font-bold py-2 rounded shadow-lg hover:scale-105 hover:from-cyan-400 hover:to-purple-600 transition-all duration-200 tracking-wider"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center text-cyan-300 text-sm font-mono">
          <span>Already have an account? </span>
          <Link to="/signin" className="underline hover:text-cyan-400 transition-colors">sign-in</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;