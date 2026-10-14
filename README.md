# 🐕 Kivat Kirsut ry – koiraharrastusseuran verkkosivusto

Responsiivinen React-verkkosivusto kuvitteelliselle nilsiäläiselle koiraharrastusseuralle. Sivusto esittelee seuran harrastuslajit ja tapahtumat ja kertoo, miten seuraan saa yhteyden.

**Kurssiprojekti:** Web- ja mobiilikäyttöliittymät, Savonia-ammattikorkeakoulu (kevät 2024)

![Etusivu](docs/etusivu.png)

---

## Tavoite

Kurssin tehtävänä oli toteuttaa monisivuinen verkkosivusto, jonka käyttökokemus säilyy hyvänä sekä tietokoneella että mobiililaitteella. Painopiste oli käyttöliittymässä, joten sivusto on toteutettu pelkkänä frontendinä.

## Ominaisuudet

- **Viisi näkymää** React Routerilla: Koti, Lajiesittely, Tapahtumat, Yhteystiedot ja Käyttöehdot
- **Responsiivinen asettelu** Bootstrapin ruudukolla. Kuvat, kartat ja taulukot mukautuvat näytön kokoon.
- **Yhteiset komponentit** (Header, Navbar, Jumbotron, Footer) kaikilla sivuilla
- **Lajiesittely:** kuusi harrastusmuotoa (käytöskoulutus, rally-toko, etsintä, vesipelastus, agility, näyttelyharjoittelu) kuvineen
- **Yhteystiedot:** upotetut Google Maps -kartat harjoituspaikoista, yhteydenottolomakkeen käyttöliittymä, video ja vastuuhenkilötaulukko
- **"Ylös"-painike**, joka ilmestyy sivua vieritettäessä (`useEffect` ja scroll-kuuntelija, joka siivotaan komponentin purkautuessa)

## Teknologiat

| Osa | Tekniikat |
|---|---|
| Käyttöliittymä | React 18, React Router 6 |
| Tyylit ja asettelu | Bootstrap 5, React-Bootstrap |
| Ikonit | React Icons |
| Projektipohja | Create React App |

## Rakenne

```
src/
├── App.js              # Reititys ja sivupohja
└── Komponentit/
    ├── Header.js
    ├── Navbar.js
    ├── Jumbotron.js
    ├── Footer.js
    ├── Koti.js
    ├── Lajiesittely.js
    ├── Tapahtumat.js
    ├── Yhteystiedot.js
    └── kayttoehdot.js
public/Media/           # Kuvat ja video
```

## Ajaminen

```bash
git clone https://github.com/PennasenKake/kivat-kirsut-sivusto.git
cd kivat-kirsut-sivusto
npm install
npm start               # http://localhost:3000
```

## Rajaukset

- Seura, henkilöt ja yhteystiedot ovat kuvitteellisia.
- Yhteydenottolomake on käyttöliittymätoteutus, eikä se lähetä viestejä, koska backend ei kuulunut kurssin laajuuteen.

## Mitä opin

- Komponenttipohjainen rakenne ja yhteisten osien uudelleenkäyttö
- Asiakaspuolen reititys React Routerilla
- Responsiivinen suunnittelu Bootstrapin ruudukolla
- Reactin elinkaari: tapahtumakuuntelijan lisääminen ja siivoaminen `useEffect`-hookilla

---

**Eero Korhonen** · [LinkedIn](https://www.linkedin.com/in/eero-korhonen-171115261) · [GitHub](https://github.com/PennasenKake)
