import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router';

const Navlayout = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    }
    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <>
    <nav className='w-full h-auto min-h-[60px] bg-gradient-to-r from-[#1a1a2e] to-black flex flex-row items-center flex-wrap justify-between text-cyan-400 font-mono text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider shadow-lg border-b-[cyan] px-2 sm:px-4 py-2 gap-2 border-b-2'>
      <div className='w-auto p-3'>
        🎬CineBuzz
      </div>
      <div className="relative" ref={dropdownRef}>
        <img
          src="data:image/jpeg;base64,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"
          alt="Profile"
          className="w-10 h-10 mr-[1.5rem] rounded-full cursor-pointer"
          onClick={() => setShowDropdown((prev) => !prev)}
        />
        {showDropdown && (
          <div className="absolute right-0 mt-2 w-48 bg-[#1a1a2e] rounded-md shadow-lg z-10  text-[cyan] text-xl font-normal border-1">
          <Link to={'/yourprofile'}><div className="px-4 py-2 hover:bg-gray-200 hover:text-black cursor-pointer">Your Profile</div></Link>
            <Link to={'/home'}><div className="px-4 py-2 hover:bg-gray-200 hover:text-black cursor-pointer">Logout</div></Link>
          </div>
        )}
      </div>
    </nav>
    </>
  )
}

export default Navlayout