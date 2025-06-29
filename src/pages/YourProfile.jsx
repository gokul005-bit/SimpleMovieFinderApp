import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const YourProfile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let data = localStorage.getItem('db');

    if (!data) {
      // Initialize the db if it doesn't exist
      const defaultData = {
        users: [],
      };
      localStorage.setItem('db', JSON.stringify(defaultData));
    } else {
      const db = JSON.parse(data);
      // Example: Use the first user in the array (you can adjust this logic)
      if (db.users && db.users.length > 0) {
        setUser(db.users[0]);
      }
    }
  }, []);

  const handleLogout = () => {
    // Remove the signed-in user from localStorage
    let data = localStorage.getItem('db');
    if (data) {
      let db = JSON.parse(data);
      // Remove the first user (or adjust logic as needed)
      db.users = [];
      localStorage.setItem('db', JSON.stringify(db));
    }
    // Optionally, remove any other auth tokens here
    navigate('/home'); // Redirect to login page
  };

  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#595976] via-[#24243e] to-[#2c2727]">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl px-10 py-12 flex flex-col items-center w-full max-w-md border border-white/20">
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#6a82fb] to-[#fc5c7d] flex items-center justify-center mb-6 shadow-lg border-4 border-white/30">
          <span className="text-4xl font-bold text-white">
            {user.name ? user.name.charAt(0).toUpperCase() : "U"}
          </span>
        </div>
        <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Your Profile</h1>
        <h2 className="text-xl font-semibold text-white mb-1">{user.name}</h2>
        <p className="text-base text-gray-200 mb-6">{user.email}</p>
        <button className="px-6 py-2 bg-gradient-to-r from-[#6a82fb] to-[#fc5c7d] text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-200">
          Edit Profile
        </button>
        <button
          className="px-6 py-2 mt-[1rem] bg-[#4b1616] text-white font-semibold rounded-lg shadow-md hover:bg-[red] transition-transform duration-200"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default YourProfile;
