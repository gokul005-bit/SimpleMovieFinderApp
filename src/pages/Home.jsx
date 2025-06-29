import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import Footer from './Footer';

const Home = () => {
  return (
    <section className="bg-[#010133] min-h-screen w-full text-white font-sans flex flex-col overflow-hidden ">
      
      {/* Navbar */}
      <nav className="w-full h-[8rem] flex items-center justify-between  flex-wrap text-cyan-400 font-mono text-[1rem] font-bold tracking-wider border-b-2 px-8">
        <h1 className="text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold tracking-wide text-teal-400 select-none cursor-default">
          🎬 CineBuzz
        </h1>

        <div className="flex gap-5 mt-3 sm:mt-0">
          <Link to="/signin">
            <button
              className="px-5 py-2 rounded-md border-2 border-teal-400 text-teal-400 font-semibold tracking-wide transition
              hover:bg-teal-400 hover:text-[#0a1f44] focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2"
              aria-label="Sign in to CineBuzz"
            >
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button
              className="px-5 py-2 rounded-md bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold tracking-wide shadow-md transition
              hover:from-cyan-500 hover:to-teal-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
              aria-label="Sign up for CineBuzz"
            >
              Sign Up
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 sm:px-12 py-32 max-w-4xl mx-auto">
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-teal-400 drop-shadow-md mb-6 leading-tight select-none">
          Dive into the world of cinema 🎥
        </h2>

        {/* Typing Animation */}
        <p className="text-[clamp(1.125rem,2.5vw,1.375rem)] text-cyan-200 mb-12 max-w-xl min-h-[100px] font-light tracking-wide">
          <Typewriter
            words={[
              'Discover, search, and explore the most iconic movies and TV shows.',
              'Welcome to your cinematic journey.',
              'Find what to watch next — effortlessly.',
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2200}
          />
        </p>

        <Link to="/signin">
          <button
            className="px-5 py-2 rounded-md border-2 border-teal-400 text-teal-400 font-semibold tracking-wide transition
            hover:bg-teal-400 hover:text-[#0a1f44] focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2"
            aria-label="Get started and explore movies"
          >
            Get Started
          </button>
        </Link>
      </main>

      {/* Footer */}
      <Footer className="mt-auto" />
    </section>
  );
};

export default Home;
