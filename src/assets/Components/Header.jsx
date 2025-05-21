import React, { useEffect } from 'react';
import cclogo2 from '../Images/cc-logo 2.png';

const Header = () => {
  useEffect(() => {
    const M = window.M;
    const dropdowns = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(dropdowns, {
      coverTrigger: false,
      constrainWidth: false,
    });
  }, []);

  return (
    <>
      {/* Dropdowns */}
      <ul id="dropdown-Anniversary" className="dropdown-content">
        <li><a href="celebration.html"><i className="material-icons">celebration</i> Celebración</a></li>
        <li><a href="characters.html"><i className="material-icons">person</i> Personajes</a></li>
        <li><a href="events.html"><i className="material-icons">sports_kabaddi</i> Eventos</a></li>
        <li><a href="banners.html"><i className="material-icons">campaign</i> Banners</a></li>
      </ul>

      <ul id="dropdown-SaiyanDay" className="dropdown-content">
        <li><a href="celebration.html"><i className="material-icons">celebration</i> Celebración</a></li>
        <li><a href="characters.html"><i className="material-icons">person</i> Personajes</a></li>
        <li><a href="events.html"><i className="material-icons">sports_kabaddi</i> Eventos</a></li>
        <li><a href="banners.html"><i className="material-icons">campaign</i> Banners</a></li>
      </ul>

      <ul id="dropdown-goldenweek" className="dropdown-content">
        <li><a href="/Golden Week/celebration.html"><i className="material-icons">celebration</i> Celebración</a></li>
        <li><a href="/Golden Week/events.html"><i className="material-icons">sports_kabaddi</i> Eventos</a></li>
        <li><a href="/Golden Week/banners.html"><i className="material-icons">campaign</i> Banners</a></li>
      </ul>

      <ul id="dropdown-tannabata" className="dropdown-content">
        <li><a href="celebration.html"><i className="material-icons">celebration</i> Celebración</a></li>
        <li><a href="characters.html"><i className="material-icons">person</i> Personajes</a></li>
        <li><a href="events.html"><i className="material-icons">sports_kabaddi</i> Eventos</a></li>
        <li><a href="banners.html"><i className="material-icons">campaign</i> Banners</a></li>
      </ul>
      
      <ul id="dropdown-WWC" className="dropdown-content">
        <li><a href="celebration.html"><i className="material-icons">celebration</i> Celebración</a></li>
        <li><a href="characters.html"><i className="material-icons">person</i> Personajes</a></li>
        <li><a href="events.html"><i className="material-icons">sports_kabaddi</i> Eventos</a></li>
        <li><a href="banners.html"><i className="material-icons">campaign</i> Banners</a></li>
      </ul>

      {/* Navbar */}
      <nav>
        <div className="nav-wrapper container">
          <a href="/index.html" className="brand-logo">
            <img src={cclogo2} alt="Logo" width="100" height="70" />
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {/* Anniversary */}
            <li>
              <a className="dropdown-trigger" href="#!" data-target="dropdown-Anniversary">
                <i className="material-icons left">cake</i>Anniversary<i className="material-icons right">arrow_drop_down</i>
              </a>
            </li>
            {/* SD */}
            <li>
              <a class="dropdown-trigger" href="#!" data-target="dropdown-SaiyanDay">
                <i class="material-icons left">star</i>SD<i class="material-icons right">arrow_drop_down</i>
              </a>
            </li>
            {/* Tanabata */}
            <li>
              <a class="dropdown-trigger" href="#!" data-target="dropdown-goldenweek">
                <i class="material-icons left">emoji_events</i>GW<i class="material-icons right">arrow_drop_down</i>
              </a>
            </li>
            {/* Tanabata */}
            <li>
              <a class="dropdown-trigger" href="#!" data-target="dropdown-tannabata">
                <i class="material-icons left">star</i>Tannabata<i class="material-icons right">arrow_drop_down</i>
              </a>
            </li>
            {/* WWC */}
            <li>
              <a class="dropdown-trigger" href="#!" data-target="dropdown-WWC">
                <i class="material-icons left">public</i>WWC<i class="material-icons right">arrow_drop_down</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;