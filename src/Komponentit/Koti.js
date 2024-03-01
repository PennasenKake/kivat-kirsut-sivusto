// Koti.js
import React from 'react';

const Koti = () => {
  const containerStyle = {
    background: "linear-gradient(rgba(109,109,109), rgba(255,255,255))",
  };

  return (
    <div style={containerStyle}>
      <div className="container ">
        <br />
        <h2>Nilsiän Kivat Kirsut ry</h2>
        <p>
          Nilsiän Kivat Kirsut ry on nilsiäläinen hyvänmielen koiraharrastusseura,
          jonka tarkoituksena on järjestää toimintaa koiraharrastajille ja järjestää
          tai olla mukana erilaisissa koiraharrastamiseen liittyvissä tapahtumissa.
          Seura on Suomen kennelliiton ja Pohjois-Savon kennelpiirin jäsenyhdistys.
        </p>
        <p>
          Seuran jäsenmaksu 2024 on varsinaisilta jäseniltä 35 € ja perhejäseniltä 10 €.
        </p>
        <p>
          Yhdistyksellä on käytössään koiraharrastuskenttä osoitteessa Haukilammentie 200
          (ent. Vuotjärventie 200). Jäsenillä on ohjattujen ryhmien ulkopuolella mahdollisuus
          omatoimiharjoitteluun koirakentällä 25 € vuosimaksulla.
          Jos olet kiinnostunut omatoimiharjoittelusta, niin laita sähköpostia osoitteeseen kivatkirsut@gmail.com.
          Kivat Kirsut ry ylläpitää talkoovoimin Tassusatama-koirapuistoa Nilsiän taajamassa.
        </p>
      </div>
    </div>
  );
}

export default Koti;
