import React from 'react';

const Tapahtumat = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Tapahtuman otsikko vasemmalle */}
        <div className="col-sm-12">
          <h2 className="text-center mb-4">Tapahtumat</h2>
        </div>

        {/* Tapahtuman tiedot oikealle */}
        <div className="col-sm-12">
          {/* Lead-tyylinen teksti */}
          <p className="lead">
            Osassa harjoituksia liittyy säävaraus. Ilmoittautuminen harjoituksiin päivää aikaisemmin sähköpostilla.
          </p>

          <br />
          <br />  

        {/* Video */}
        <div className="mt-4" style={{ maxWidth: "600px", margin: "0 auto", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}>
          <video className="w-100" controls autoPlay muted>
            <source src={`${process.env.PUBLIC_URL}/Media/Yhdessä_ulkoilua.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>


          <br />
          <br />

          {/* Kuukausittaiset tapahtumat */}
          {/* Maaliskuu */}
          <p className="col-sm-3"><strong>Maaliskuu</strong></p>
          <dl className="row">
            <dt className="col-sm-3">04.03.2024</dt>
            <dd className="col-sm-9">Käytöskoulutus harjoitukset klo 17</dd>
            <dt className="col-sm-3">07.03.2024</dt>
            <dd className="col-sm-9">Rally-toko harjoitukset klo 17</dd>
            <dt className="col-sm-3">10.03.2024</dt>
            <dd className="col-sm-9">Koiran ruokavalio-teams luento klo 14 (jäsenille)</dd>
            <dt className="col-sm-3">11.03.2024</dt>
            <dd className="col-sm-9">Käytöskoulutus harjoitukset klo 17</dd>
            <dt className="col-sm-3">14.03.2024</dt>
            <dd className="col-sm-9">Rally-toko harjoitukset klo 17</dd>
            <dt className="col-sm-3">18.03.2024</dt>
            <dd className="col-sm-9">Käytöskoulutus harjoitukset klo 17</dd>
            <dt className="col-sm-3">21.03.2024</dt>
            <dd className="col-sm-9">Rally-toko harjoitukset klo 17</dd>
            <dt className="col-sm-3">24.03.2024</dt>
            <dd className="col-sm-9">Suuretsintä harjoitukset klo 14 alkaen</dd>
            <dt className="col-sm-3">25.03.2024</dt>
            <dd className="col-sm-9">Käytöskoulutus harjoitukset klo 17</dd>
            <dt className="col-sm-3">28.03.2024</dt>
            <dd className="col-sm-9">Rally-toko harjoitukset klo 17</dd>
          </dl>

          {/* Huhtikuu */}
          <p className="col-sm-3"><strong>Huhtikuu</strong></p>
          <dl className="row">
            <dt className="col-sm-3">04.04.2024</dt>
            <dd className="col-sm-9">Rally-toko harjoitukset klo 17</dd>
            <dt className="col-sm-3">07.04.2024</dt>
            <dd className="col-sm-9">Koirahieroja (Max. 10 koiraa) klo 10</dd>
            <dt className="col-sm-3">11.04.2024</dt>
            <dd className="col-sm-9">Rally-toko harjoitukset klo 17</dd>
            <dt className="col-sm-3">18.04.2024</dt>
            <dd className="col-sm-9">Rally-toko harjoitukset klo 17</dd>
            <dt className="col-sm-3">25.04.2024</dt>
            <dd className="col-sm-9">Rally-toko harjoitukset klo 17</dd>
            <dt className="col-sm-3">28.04.2024</dt>
            <dd className="col-sm-9">Näyttely harjoitukset klo 14</dd>
          </dl>

          {/* Toukokuu */}
          <p className="col-sm-3"><strong>Toukokuu</strong></p>
          <dl className="row">
            <dt className="col-sm-3">01.05.2024</dt>
            <dd className="col-sm-9">Match-show klo 12 (alkaen)</dd>
            <dt className="col-sm-3">04.05.2024</dt>
            <dd className="col-sm-9">Rally-toko kilpailut klo 12 (alkaen)</dd>
            <dt className="col-sm-3">14.05.2024</dt>
            <dd className="col-sm-9">Agility harjoitukset klo 17</dd>
            <dt className="col-sm-3">21.05.2024</dt>
            <dd className="col-sm-9">Agility harjoitukset klo 17</dd>
            <dt className="col-sm-3">22.05.2024</dt>
            <dd className="col-sm-9">Näyttely harjoitukset klo 17</dd>
            <dt className="col-sm-3">28.05.2024</dt>
            <dd className="col-sm-9">Agility harjoitukset klo 17</dd>
            <dt className="col-sm-3">29.05.2024</dt>
            <dd className="col-sm-9">Näyttely harjoitukset klo 17</dd>
          </dl>
        </div>
      </div>
      
      {/* Lisää loppuun, että tapahtumat ovat kuvitteellisia */}
      <p className="mt-4 text-center"><em>Huom: Tapahtumat ovat kuvitteellisia ja voivat muuttua tilanteen mukaan.</em></p>
    </div>
  );
}

export default Tapahtumat;
