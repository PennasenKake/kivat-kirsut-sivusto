import React, { useState, useEffect } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import '../App.css';

// Footer-komponentti
const Footer = () => {
  // State seuranta pientä näyttöä varten
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Effect-hook ikkunan koon muutoksen seuraamiseksi
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 425 && window.innerHeight <= 831);
    };

    // Lisätään tapahtumakuuntelija ikkunan kokoa varten
    window.addEventListener("resize", handleResize);

    // Tarkistetaan ensimmäisen renderoinnin yhteydessä
    handleResize();

    // Poistetaan tapahtumakuuntelija komponentin purkautuessa
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Renderöidään Footer-komponentti
  return (
    <div className="main-footer" style={{ background: "linear-gradient(#0A0094, #CACDC6)" }}>
      <div className="footer-middle">
        <div className="container">
          <div className="row align-items-center">
            {/* Logo-osa */}
            <div className="col-md-6 col-sm-6">
              {isSmallScreen ? null : (
                <img
                  src="/Media/kirsujen_logo1.svg"  
                  alt="Kivat Kirsut Logo"
                  style={{ padding: "2rem" }}
                />
              )}
            </div>
            {/* Teksti- ja linkki-osa */}
            <div className={`col-md-6 col-sm-6 text-center ${isSmallScreen ? 'small-screen-text' : ''}`}>
              <p style={{ color: isSmallScreen ? "#fc9700" : "#fc9700", marginBottom: isSmallScreen ? "2rem" : "" }}>
                {/* Käyttöehdot linkki */}
                <br />
                <a href="/kayttoehdot" style={{ color: "#fc9700" }}>
                  Käyttöehdot
                </a>{" "}
                |{" "}
                {/* Facebook-linkki */}
                <br />
                <a href="https://m.facebook.com/groups/248529640669/" style={{ color: "#fc9700" }}>
                  <FaFacebookSquare style={{ verticalAlign: "middle", marginRight: "0.5rem" }} />
                  Kivat Kirsut Facebook
                </a>
                <br />
                {/* Copyright-merkintä */}
                &copy; Nilsiän Kivat Kirsut Ry
              </p>
            </div>
            {/* Lisää logo pienellä näytöllä */}
            {isSmallScreen ? (
              <div className="col-12 text-center">
                <img
                  src="/Media/kirsujen_logo1.svg"  
                  alt="Kivat Kirsut Logo"
                  style={{ padding: "2rem" }}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

// Footer-komponentin vienti
export default Footer;
