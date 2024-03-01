// Header.js
import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css'; // Tuodaan tyylitiedosto

// Header-komponentti
const Header = () => {
  
  // Funktio taustakuvan valitsemiseksi näytön koon perusteella
  const getBackgroundImage = () => {
    // Tarkistetaan näytön koko ja valitaan taustakuva sen mukaan
    const isSmallScreen = window.innerWidth <= 768 && window.innerHeight <= 831;
    return isSmallScreen
      ? `url(${process.env.PUBLIC_URL}/Media/mahdollinen_tausta1.jpg)`
      : `url(${process.env.PUBLIC_URL}/Media/mahdollinen_tausta2.jpg)`;
  };

  // JSX-rakenne
  return (
    <div className="header-section" 
      style={{ 
        background: getBackgroundImage(),
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      <Container>
        <Row className="align-items-center">
          {/* Logo-osio */}
          <Col lg={3} md={12} className="text-lg-end">
            <img src={`${process.env.PUBLIC_URL}/Media/kirsujen_logo2.svg`} 
            alt="Kivat Kirsut Logo" className="logo" />
          </Col>
          {/* Otsikon osio */}
          <Col lg={6} md={12} className="text-center">
            <h1 className="header-title"
            style={{ color: 'white', textShadow: '2px 2px 4px #000000',}}>
            NILSIÄN KIVAT KIRSUT RY</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
