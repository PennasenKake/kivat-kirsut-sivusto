import React from "react";
import { Link } from 'react-router-dom'; // Lisätty Link
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';

const Header = () => {
  const getBackgroundImage = () => {
    const isSmallScreen = window.innerWidth <= 768 && window.innerHeight <= 831;
    return isSmallScreen
      ? `url(${process.env.PUBLIC_URL}/Media/mahdollinen_tausta1.jpg)`
      : `url(${process.env.PUBLIC_URL}/Media/mahdollinen_tausta2.jpg)`;
  };

  return (
    <div className="header-section" 
      style={{ 
        background: getBackgroundImage(),
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      <Container>
        <Row className="align-items-center">
          {/* Lisätty Link-komponentti ympärille */}
          <Col lg={3} md={12} className="text-lg-end">
            <Link to="/">
              <img src={`${process.env.PUBLIC_URL}/Media/kirsujen_logo2.svg`} 
                alt="Kivat Kirsut Logo" className="logo" />
            </Link>
          </Col>
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
