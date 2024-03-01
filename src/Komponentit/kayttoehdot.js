// kayttoehdot.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Kayttoehdot = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h2>Tervetuloa Käyttöehtosivulle</h2>
          <p>
            Tervetuloa sivuston käyttöehtosivulle. Lue nämä ehdot huolellisesti ennen kuin käytät sivustoa.
          </p>
          <p>
            Nämä käyttöehdot muodostavat oikeudellisen sopimuksen sinun ja sivuston välillä.
          </p>
          <h3>1. Käyttäjän velvollisuudet</h3>
          <p>
            Käyttäjän on sitouduttava noudattamaan kaikkia sovellettavia lakeja ja sääntöjä käyttäessään tätä sivustoa.
          </p>
          {/* Lisää muita käyttäjän velvollisuuksiin liittyviä kohtia tähän */}

          <h3>2. Sivuston omistusoikeus ja immateriaalioikeudet</h3>
          <p>
            Tämä sivusto ja kaikki sen sisältö kuuluvat sivuston omistajalle ja ovat suojattuja tekijänoikeuksilla.
          </p>
          {/* Lisää muita omistusoikeuksiin ja immateriaalioikeuksiin liittyviä kohtia tähän */}

          <h3>3. Käyttöehdot ja rajoitukset</h3>
          <p>
            Käyttäjät voivat käyttää tätä sivustoa ainoastaan siihen tarkoitukseen, jota varten se on tarjolla. 
          </p>
          {/* Lisää muita käyttöehtoihin ja rajoituksiin liittyviä kohtia tähän */}

          {/* Jatka samalla tavalla kaikkien mainittujen osioiden kohdalla */}

          <p>
            Sivuston käyttäminen merkitsee hyväksyntääsi näihin ehtoihin. Mikäli et hyväksy näitä ehtoja, älä käytä sivustoa.
          </p>

          <br/>
          <br/>

          <p>
            Tämä sivusto on toteutettu osana ammattikorkeakoulun tietotekniikan tutkintoa, Web- ja mobiilikäyttöliittymät -kurssin sisältöä yhden opiskelijan toimesta.
          </p>
          <br/>

        </Col>
      </Row>
    </Container>
  );
}

export default Kayttoehdot;
