import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Lajiesittely = () => {

// State-tila näppäimestä ylös-scrollaamisen näyttämiseksi
const [showScrollButton, setShowScrollButton] = useState(false);

// Käsittelijäfunktio scroll-tapahtumalle
const handleScroll = () => {
  // Näytä tai piilota "Ylös"-näppäin sen mukaan, kuinka paljon on scrollattu
  if (window.scrollY > 100) {
    setShowScrollButton(true);
  } else {
    setShowScrollButton(false);
  }
};

// Lisätään scroll-kuuntelija kun komponentti mountataan
useEffect(() => {
  window.addEventListener("scroll", handleScroll);
  // Poistetaan kuuntelija kun komponentti purkautuu
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);  
  

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2 className="mb-4">Lajiesittely</h2>

          <p className="lead">
            Seuraavassa Kivojen Kirsujen eri harrastemuotoja esiteltynä.
            Ota yhteyttä, jos löysit kiinnostavan harrastemuodon,
            mikä sopii tavoitteisiinne ja tarpeisiin.
          </p>

          <h3 className="mt-4 mb-3">Käytöskoulutus</h3>
          <p className="text-left">
            Käytöskoulutus on avain vahvaan koiran ja omistajan väliseen suhteeseen
            sekä harmoniseen yhteiseloon.
            Se auttaa ymmärtämään koirasi tarpeita, vahvistaa tottelevaisuutta
            ja lisää molempien osapuolten iloa arjen yhteisistä hetkistä.
            <br />
            <br />
            Tarjoamme monipuolisia koulutusohjelmia ja kursseja,
            jotka auttavat koiran omistajia ymmärtämään paremmin
            lemmikkinsä käyttäytymistä ja kommunikaatiota.
            Koulutuksemme painottuvat positiiviseen vahvistamiseen ja palkitsemiseen,
            mikä vahvistaa koiran ja omistajan välistä suhdetta. Kannustamme kärsivällisyyteen
            ja johdonmukaisuuteen koulutuksen aikana, jotta koirat oppivat haluttuja käytöstapoja turvallisessa
            ja kannustavassa ympäristössä. Koulutusohjelmiimme sisältyy erilaisia kurssitasoja,
            jotka vastaavat koiran iän, kokemuksen ja tarpeiden mukaan.
            <br />
            <br />
            Kouluttajamme ovat kokeneita ja omistautuneita auttamaan koiran omistajia
            saavuttamaan yhteiset tavoitteet ja luomaan harmonisen suhteen lemmikkinsä kanssa.
          </p>

          {/* Kuvat */}
          <Row className="mb-4">
            <Col xs={12} md={6} className="mb-3 mb-md-0">
              <img
                src={`${process.env.PUBLIC_URL}/Media/Kaksi_labratorinnoutajaa.jpg`}
                alt="Kaksi labradorinnoutajaa"
                className="img-fluid"
                style={{ border: '1px solid #ddd', borderRadius: '4px' }}
              />
            </Col>

            <Col xs={12} md={6}>
              <img
                src={`${process.env.PUBLIC_URL}/Media/Pieni_nautseri.jpg`}
                alt="Kaksi suurnautseria"
                className="img-fluid"
                style={{ border: '1px solid #ddd', borderRadius: '4px' }}
              />
            </Col>
          </Row>


          <h3 className="mt-4 mb-3">Rally-toko</h3>
          <p className="text-left">
            Rally-toko-lajiharjoitteluun Kivat Kirsut Ry:ssä,
            missä sinä ja koirasi muodostatte voimakkaan tiimin radalla,
            joka on täynnä iloa ja mielenkiintoisia haasteita! Rally-toko on ainutlaatuinen koiraharrastus,
            joka yhdistelee tokoa, agilityä ja koiratanssia luoden monipuolisen harjoittelukokemuksen.
            Lajissa korostuvat koiran ja ohjaajan väliset yhteistyötaidot,
            kontaktin merkitys sekä kannustava ilmapiiri.
            <br />
            <br />
            Rally-toko on avoin kaikenkokoisille ja -ikäisille koirille,
            tarjoten mukavan tavan syventää yhteyttäsi koirasi kanssa.
            Laajalla radalla, jossa on 10–20 kylttiä, suoritatte yhdessä monipuolisia tehtäviä,
            kuten suunnanmuutoksia, pujottelua, pyörähdyksiä, peruuttamista ja monenlaisia asentoja.
            Radalla voitte kohdata myös haasteita, kuten hyppyjä, putkia ja hajutehtäviä,
            jotka innostavat ja viihdyttävät koirasi.
            <br />
            <br />
            Rally-tokossa on neljä tasoluokkaa, joten löydätte varmasti juuri sopivan tason taitoihinne.
            Aloittelevalle koirakolle tarjoamme hihnakävelyä, kun taas kokeneemmat voivat suorittaa radan vapaana.
            Lajin monipuolisuus tekee siitä innostavan kaikille osapuolille.
            <br />
            <br />
            Liittymällä mukaan Kivat Kirsut Ry:n Rally-toko-perheeseen pääset nauttimaan ilosta,
            oppimisesta ja yhdessä tekemisen riemusta.
          </p>

          <h3 className="mt-4 mb-3">Etsintä</h3>
          <p className="text-left">
            Etsintäkoiraharrastus on innostava ja palkitseva aktiviteetti,
            joka keskittyy koirien käyttöön kadonneiden tai piiloutuneiden henkilöiden,
            esineiden tai hajujen etsimisessä. Kiehtova ja monipuolinen harrastus yhdistää koirien luontaiset vaistot
            ja ihmisten ohjauksen, antaen koirille mahdollisuuden käyttää hajuaistiaan löytääkseen piilossa olevia kohteita.
            <br/>
            <br/>
            Tarjoamme jäsenillemme mahdollisuuden osallistua etsintäkoiraharrastukseen tarjoamalla koulutusta, varusteita
            ja tilaisuuksia kilpailuihin ja tapahtumiin. Koulutuksissa painotetaan jälkihakua, raunioiden etsintää
            ja hajuaineiden tunnistamista, ja laji tarjoaa henkistä stimulaatiota sekä fyysistä aktiivisuutta.
            Etsintäkoiraharrastus luo vahvan siteen omistajan ja koiran välille
            ja on loistava tapa viettää aikaa yhdessä nelijalkaisen ystävän kanssa.
            <br/>
            <br/>
            Seuramme, Kivat Kirsut Ry, kannustaa jäseniään osallistumaan tähän hauskaan
            ja yhteisölliseen harrastukseen. Etsintäkoiraharrastus tarjoaa mahdollisuuden oppia uutta,
            rakentaa ystävyyssuhteita muiden koiraharrastajien kanssa
            ja nauttia yhdessäolon ilosta nelijalkaisten ystävien seurassa.
          </p>

          <h3 className="mt-4 mb-3">Vesipelastus (VePe)</h3>
          <p className="text-left">
            Vesipelastusharrastus tarjoaa ainutlaatuisen mahdollisuuden viettää kesäpäiviä koirasi kanssa veden äärellä
            ja samalla oppia turvallisia vesipelastustaitoja. Vesipelastus on innostava ja turvallinen harrastus,
            joka kutsuu kaikenkokoisia ja -rotuisia koiria mukaan vesiseikkailuihin.
            <br/>
            <br/>
            Kesäisin vesipelastusharrastus avaa mahdollisuuden nauttia raikkaasta vedestä
            ja luoda ikimuistoisia hetkiä koiran kanssa. Se kehittää koiran uinti- ja liikuntataitoja samalla,
            kun se tarjoaa turvallisia pelastusmahdollisuuksia erilaisissa vesiolosuhteissa.
            <br/>
            <br/>
            Vesipelastusharrastus Kivat Kirsut Ry:ssä korostaa turvallisuutta, iloa
            ja yhteistyötä veden äärellä. Koulutetut ohjaajat opastavat vesipelastusharjoituksissa ja varmistavat,
            että jokainen koirakko voi nauttia vesiseikkailuista turvallisesti.
            <br/>
            <br/>
            Tule mukaan Kivat Kirsut Ry:n vesipelastusharrastukseen
            ja koe kesän riemu vedessä yhdessä karvaisen ystäväsi kanssa
          </p>

          <Row className="justify-content-center">
            <Col xs={12} md={6}>
              <img
                src={`${process.env.PUBLIC_URL}/Media/Koirat_yhdessä_metsässä.jpeg`}
                alt="Kaksi suurnautseria"
                className="img-fluid"
                style={{ border: '1px solid #ddd', borderRadius: '4px' }}
              />
            </Col>
          </Row>


          <h3 className="mt-4 mb-3">Agility</h3>
          <p className="text-left">
            Tervetuloa Kivat Kirsut Ry:n agilityharrastuksen pariin, missä koirasi
            ja sinä voitte nauttia hauskoista ja energisistä hetkistä yhdessä! Agility on vauhdikas koiraharrastus,
            joka tarjoaa mahdollisuuden purkaa koirien energiaa ja samalla vahvistaa koiran ja ohjaajan välistä yhteyttä.
            <br />
            <br />
            Agilityn radalla koirat pääsevät ylittämään erilaisia esteitä,
            kuten hyppyjä, putkia, keinuja ja siltoja, ohjaajan antaessa suuntaviittoja
            ja tsemppausta matkan varrella. Tavoitteena on suorittaa rata mahdollisimman nopeasti
            ja virheettömästi, luoden jännittäviä ja hauskoja hetkiä sekä koiralle että ohjaajalle.
            <br />
            <br />
            Agilityssa korostuu ilo ja yhteistyö koiran ja ohjaajan välillä.
            Koulutetut ohjaajat opastavat harjoituksissa ja varmistavat,
            että jokainen koirakko voi nauttia agilityn tuomasta vauhdin hurmasta turvallisesti
            ja positiivisessa ilmapiirissä.
            <br />
            <br />
            Agility tarjoaa koiralle monipuolista liikuntaa
            ja älyllistä virikettä, mikä tekee siitä erinomaisen harrastuksen kaikenkokoisille
            ja -rotuisille koirille. Liity mukaan Kivat Kirsut Ry:n agilitytiimiin
            ja luo yhdessä karvaisen ystäväsi kanssa unohtumattomia hetkiä ja kokemuksia agilityradalla!
          </p>

          <h3 className="mt-4 mb-3">Näyttelyharjoittelu</h3>
          <p className="text-left">
            koiranäyttelyharrastukseen, missä karvaiset ystävämme pääsevät loistamaan lavalla omalla ainutlaatuisella tyylillään!
            Koiranäyttelyt ovat arvostettuja tapahtumia, joissa koirat esittelevät ylpeydellä kauneuttaan ja rotuominaisuuksiaan.
            Tämä hienostunut koiraharrastus tarjoaa omistajille mahdollisuuden tuoda esiin koiriensa ainutlaatuisia piirteitä
            ja persoonallisuutta.
          </p>
          <br />
        </Col>
      </Row>

       {/* Ylös -palkki */}
       {showScrollButton && (
        <div
          className="scroll-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Ylös
        </div>
      )}
      
    </Container>
  );
}

export default Lajiesittely;
