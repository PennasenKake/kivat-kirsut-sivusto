// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Komponentit/Header';
import NavBar from './Komponentit/Navbar';
import Jumbotron from './Komponentit/Jumbotron';
import Footer from './Komponentit/Footer';
import Koti from './Komponentit/Koti'; // 
import Lajiesittely from './Komponentit/Lajiesittely';
import Tapahtumat from './Komponentit/Tapahtumat';
import Yhteystiedot from './Komponentit/Yhteystiedot';
import Kayttoehdot from './Komponentit/kayttoehdot';
import './App.css'; // Tuodaan tyylitiedosto

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Jumbotron />
      <Routes>
        <Route path="/" element={<Koti />} /> 
        <Route path="/Lajiesittely" element={<Lajiesittely />} />
        <Route path="/Tapahtumat" element={<Tapahtumat />} />
        <Route path="/Yhteystiedot" element={<Yhteystiedot />} />
        <Route path="/kayttoehdot" element={<Kayttoehdot />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;