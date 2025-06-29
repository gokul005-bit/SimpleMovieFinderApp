import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle sign in logic here
    login(email, password);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#1a1a1a] to-[#2d0b00] relative overflow-hidden ">
      {/* Cinematic vignette effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1500&q=80"
          alt="cinematic background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90"></div>
      </div>
      <div className="relative z-10 w-full max-w-md p-8 rounded-2xl shadow-2xl border border-white/10 bg-white/10 backdrop-blur-md bg-clip-padding">
     <Link to='/home'> <h1 className='text-[cyan]'> 🡰 </h1></Link>
        <h2 className="text-4xl font-extrabold text-[cyan] mb-8 text-center tracking-widest drop-shadow-lg">
          Sign In
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-[#90e8e8] mb-2 font-semibold tracking-wide" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="w-full px-5 py-3 border border-white/20 rounded-lg bg-black/40 text-[cyan] placeholder-[cyan] focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-[#90e8e8] mb-2 font-semibold tracking-wide" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="w-full px-5 py-3 border border-white/20 rounded-lg bg-black/40 text-[cyan] placeholder-[cyan] focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
         <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 text-[cyan] font-bold py-2 rounded shadow-lg hover:scale-105 hover:from-cyan-400 hover:to-purple-600 transition-all duration-200 tracking-wider"
          >
            Sign in
          </button>
        </form>
        <div className="mt-6 text-center text-cyan-300 text-sm font-mono">
          <span>Already have an account? </span>
          <a href="/signup" className="underline hover:text-cyan-400 transition-colors">sign-up</a>
        </div>
        
      </div>
    </div>
  )
}

export default Signin