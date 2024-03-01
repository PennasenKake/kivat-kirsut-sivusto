// Jumbotron.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';

const Jumbotron = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  if (!isHomePage) {
    return null;
  }

  const jumbotronStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/Media/kaksikoiraa.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '60vh', // Korkeus 60% näytön korkeudesta
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    padding: '2rem',
    textAlign: 'center',
    textShadow: '2px 2px 4px #000000',
  };

  return (
    <div style={jumbotronStyle}>
      <h1 className="jumbotron-title">Nilsiäläinen hyvänmielen koiraseura</h1>
    </div>
  );
}

export default Jumbotron;
