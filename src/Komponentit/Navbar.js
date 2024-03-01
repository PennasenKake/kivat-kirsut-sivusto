import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

// NavBar-komponentti
const NavBar = () => {
  // Käytetään react-router-dom-hookia sivun polun saamiseksi
  const location = useLocation();
  // State-tila navbarin laajentumisen seuraamiseksi
  const [expanded, setExpanded] = useState(false);

  // Funktio, joka palauttaa sivun nimen nykyisen polun perusteella
  const getPageName = () => {
    const path = location.pathname;
    switch (path) {
      case '/':
        return 'Koti';
      case '/Lajiesittely':
        return 'Lajiesittely';
      case '/Tapahtumat':
        return 'Tapahtumat';
      case '/Yhteystiedot':
        return 'Yhteystiedot';
      case '/kayttoehdot':
        return 'Käyttöehdot';
      default:
        return 'Koti';
    }
  };

  // Funktio navbarin sulkemiseksi
  const closeNavbar = () => setExpanded(false);

  return (
    // Bootstrap Navbar-komponentti, joka laajenee suuremmilla näytöillä
    <Navbar style={{ backgroundImage: 'linear-gradient(rgba(109,109,109), rgba(255,255,255))' }} expand="lg" expanded={expanded}>
      <Container>
        {/* Bootstrapin Link-komponentti, joka ohjaa kotisivulle ja sulkee navbarin klikatessa */}
        <Navbar.Brand as={Link} to="/" onClick={closeNavbar}>
          {getPageName()}
        </Navbar.Brand>
        {/* Hamburger-ikonin käsittelijä, joka laajentaa/pienentää navbarin */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : 'expanded')} />
        {/* Navbarin linkit, jotka ovat oikeassa reunassa */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Linkki Koti-sivulle, aktiivinen tyyli jos sivu on aktiivinen */}
            <Nav.Link as={Link} to="/" onClick={closeNavbar} className={location.pathname === '/' ? 'nav-link-hover active' : 'nav-link-hover'}>
              Koti
            </Nav.Link>
            {/* Linkki Lajiesittely-sivulle, aktiivinen tyyli jos sivu on aktiivinen */}
            <Nav.Link as={Link} to="/Lajiesittely" onClick={closeNavbar} className={location.pathname === '/Lajiesittely' ? 'nav-link-hover active' : 'nav-link-hover'}>
              Lajiesittely
            </Nav.Link>
            {/* Linkki Tapahtumat-sivulle, aktiivinen tyyli jos sivu on aktiivinen */}
            <Nav.Link as={Link} to="/Tapahtumat" onClick={closeNavbar} className={location.pathname === '/Tapahtumat' ? 'nav-link-hover active' : 'nav-link-hover'}>
              Tapahtumat
            </Nav.Link>
            {/* Linkki Yhteystiedot-sivulle, aktiivinen tyyli jos sivu on aktiivinen */}
            <Nav.Link as={Link} to="/Yhteystiedot" onClick={closeNavbar} className={location.pathname === '/Yhteystiedot' ? 'nav-link-hover active' : 'nav-link-hover'}>
              Yhteystiedot
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
