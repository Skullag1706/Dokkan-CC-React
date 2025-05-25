import React, { useEffect } from 'react';
import gokussj3 from '../Images/Goku SSJ3 Daima STR.png';
import panzy from '../Images/Panzy_Daima_2.png';
import majinkuu from '../Images/Majin_Kuu.png';
import buu from '../Images/Buu (Kid).png';
import lordgomah from '../Images/Lord Gomah TEQ.png';
import Personajes from './Personajes';

const Main = () => {
  useEffect(() => {
    const M = window.M;
    const elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems);
  }, []);

  return (
    <main className="white-text" style={{ backgroundColor: "#111", fontFamily: "'Bangers', cursive" }}>
      <h1 className="center-align">Personajes</h1>

      {/* Parte 1 */}
      <ul className="collapsible">
        <li>
          <div className="collapsible-header"><i className="material-icons">people</i>Parte 1</div>
          <div className="collapsible-body">
            <div className="container section center-align">
              <h2 className="titulos">Dokkan Fest</h2>
              <div className="row">
                <Personajes
                  imagen={gokussj3}
                  nombre="Super Saiyan 3 Goku (Mini) (DAIMA) STR"
                  claseColor="STR"
                />
                <Personajes
                  imagen={lordgomah}
                  nombre="Lord Gomah TEQ"
                  claseColor="TEQ"
                />
              </div>

              <h2 className="titulos">Secundarios</h2>
              <div className="row">
                <Personajes
                  imagen={panzy}
                  nombre="Panzy (DAIMA) AGL"
                  claseColor="AGL"
                />
                <Personajes
                  imagen={majinkuu}
                  nombre="Majin Kuu (DAIMA) PHY"
                  claseColor="PHY"
                />
              </div>
            </div>
          </div>
        </li>
      </ul>

      {/* Parte 2 */}
      <ul className="collapsible">
        <li>
          <div className="collapsible-header"><i className="material-icons">people</i>Parte 2</div>
          <div className="collapsible-body">
            <div className="container section center-align">
              <h2 className="titulos">Legendary</h2>
              <Personajes
                imagen={buu}
                nombre="Buu (Kid) (DAIMA) AGL"
                claseColor="AGL"
              />
            </div>
          </div>
        </li>
      </ul>
    </main>
  );
};

export default Main;
