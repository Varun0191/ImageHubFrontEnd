import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Home = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('username');
    navigate('/index'); // Redirect to login page
  };

  return (
    <div>
      <h1>Welcome, {username ? username : 'Guest'}!</h1>
      <NavLink to="/openPhotos">My Photos</NavLink>
      <NavLink to="/openCommunity">Community Photos</NavLink>
      <NavLink to="/openUploadPhoto">Upload Your Ideas here</NavLink>
      {username && (
        <button onClick={handleLogout}>Logout</button>
      )}
    </div>
  );
};

export default Home;
