import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navlayout from './Navlayout';
import Footer from '../pages/Footer';

const Displaymovie = () => {
  const location = useLocation();
  const { movieName } = location.state || {};
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch movie data
  useEffect(() => {
    const fetchMovieData = async () => {
      if (!movieName) return;
      try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=b80a4cc3&t=${encodeURIComponent(movieName)}`);
        const data = await response.json();
        setMovieData(data);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieData();
  }, [movieName]);

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white flex flex-col items-center">
      <Navlayout />
      <div className="max-w-4xl w-full mt-16 p-8 rounded-3xl shadow-2xl bg-black/70 backdrop-blur-xl flex flex-col sm:flex-row items-center gap-10 border-2 border-cyan-400/60 transition-all duration-300 hover:shadow-cyan-500/30">
        <div className="absolute left-8 top-8">
          <Link to='/moviesearch'>
            <button className="flex items-center gap-2 px-4   rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-md hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 animate-pulse">
              <span className="text-2xl">🡰</span>
              <span className="hidden sm:inline ">Back</span>
            </button>
          </Link>
        </div>
        {loading ? (
          <div className="flex flex-col items-center justify-center w-full h-80">
            {/* Spinner */}
            <div className="mb-6">
              <span className="relative flex h-16 w-16">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-16 w-16 bg-cyan-600"></span>
                <span className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-10 h-10 text-yellow-300 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                  </svg>
                </span>
              </span>
            </div>
            <p className="text-yellow-300 text-2xl font-bold animate-pulse tracking-wider drop-shadow-lg">
              Fetching Movie Magic...
            </p>
          </div>
        ) : movieData && movieData.Response === 'True' ? (
          <div className="flex flex-col sm:flex-row items-center gap-10 w-full">
            {/* Poster */}
            <div className="flex-shrink-0">
              <img
                src={movieData.Poster}
                alt={movieData.Title}
                className="w-60 h-80 object-cover rounded-2xl shadow-xl border-4 border-cyan-300 hover:scale-105 transition-transform duration-300 bg-gray-900"
              />
            </div>
            {/* Details */}
            <div className="flex flex-col gap-5 w-full">
              <h1 className="text-4xl font-extrabold text-yellow-300 drop-shadow-lg tracking-tight">{movieData.Title}</h1>
              <p className="text-lg italic text-cyan-200">{movieData.Year} &bull; {movieData.Genre}</p>
              <p className="text-base text-gray-100 leading-relaxed">{movieData.Plot}</p>
              <div className="flex flex-wrap gap-4 mt-2">
                <span className="bg-cyan-800/60 px-3 py-1 rounded-lg text-sm font-semibold">
                  <span className="text-yellow-300">Director:</span> <span className="text-cyan-100">{movieData.Director}</span>
                </span>
                <span className="bg-cyan-800/60 px-3 py-1 rounded-lg text-sm font-semibold">
                  <span className="text-yellow-300">Actors:</span> <span className="text-cyan-100">{movieData.Actors}</span>
                </span>
                <span className="bg-cyan-800/60 px-3 py-1 rounded-lg text-sm font-semibold">
                  <span className="text-yellow-300">IMDB Rating:</span> <span className="text-cyan-100">{movieData.imdbRating}</span>
                </span>
              </div>
              <a
                href={`https://www.imdb.com/title/${movieData.imdbID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[14rem] mt-6 inline-block bg-gradient-to-r from-yellow-400 to-cyan-400 hover:from-yellow-500 hover:to-cyan-500 text-black font-bold px-8 py-3 rounded-xl shadow-lg transition-all duration-300 text-center border-2 border-yellow-300/60 hover:scale-105"
              >
                View on IMDB
              </a>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center w-full h-80 justify-center">
            <p className="text-red-500 font-bold text-2xl drop-shadow-lg mb-2">Movie not found.</p>
            <p className="text-gray-300">Please try searching for another title.</p>
          </div>
        )}
      </div>
      
    </div>
    <Footer/>
    </>
    
  );
};

export default Displaymovie;
