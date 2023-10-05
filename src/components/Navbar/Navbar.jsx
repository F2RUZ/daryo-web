import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <div className="dropdown">
            <a className="navbar__link" href="/profile">
              Profile
            </a>
            <div className="dropdown-options">
              <a href="/mehridaryo">Mehridaryo</a>
              <a href="/boshqalar">Boshqalar</a>
            </div>
          </div>
          <i className="ri-arrow-down-line arrow"></i>
        </li>
        <li className="navbar__item">
          <div className="dropdown">
            <a className="navbar__link" href="/markaziy-osiyo">
              Markaziy Osiyo
            </a>
            <div className="dropdown-options">
              <a href="/qirgiz">Qirg'iziston</a>
              <a href="/kazak">Qozog'iston</a>
              <a href="/tajik">Tojikiston</a>
              <a href="/turkmen">Turkmaniston</a>
              <a href="/afgan">Afg'oniston</a>
            </div>
          </div>
          <i className="ri-arrow-down-line arrow"></i>
        </li>
        <li className="navbar__item">
          <a className="navbar__link" href="/dunyo">
            Dunyo
          </a>
        </li>
        <li className="navbar__item">
          <div className="dropdown">
            <a className="navbar__link" href="/profile">
              Pul
            </a>
            <div className="dropdown-options">
              <a href="/mehridaryo">Iqtisodiyot</a>
              <a href="/boshqalar">Moliya</a>
              <a href="/boshqalar">Kripto</a>
              <a href="/boshqalar">Biznes</a>
            </div>
          </div>
          <i className="ri-arrow-down-line arrow"></i>
        </li>
        <li className="navbar__item">
          <div className="dropdown">
            <a className="navbar__link" href="/profile">
              Madaniyat
            </a>
            <div className="dropdown-options">
              <a href="/mehridaryo">Kino</a>
              <a href="/boshqalar">Kitob</a>
              <a href="/boshqalar">Musiqa</a>
              <a href="/boshqalar">Shou-biznes</a>
            </div>
          </div>
          <i className="ri-arrow-down-line arrow"></i>
        </li>
        <li className="navbar__item">
          <div className="dropdown">
            <a className="navbar__link" href="/profile">
              Lifistyle
            </a>
            <div className="dropdown-options">
              <a href="/mehridaryo">Ayollar</a>
              <a href="/boshqalar">Texnologiyalar</a>
              <a href="/boshqalar">Avto</a>
              <a href="/boshqalar">Talim</a>
            </div>
          </div>
          <i className="ri-arrow-down-line arrow"></i>
        </li>
        <li className="navbar__item">
          <a className="navbar__link" href="/dunyo">
            Sport
          </a>
        </li>
        <li className="navbar__item">
          <a className="navbar__link" href="/dunyo">
            Koluministlar
          </a>
        </li>
        <li className="navbar__item">
          <a className="navbar__link" href="/dunyo">
            Multimedia
          </a>
        </li>
      </ul>
      <ul className="navbar__media__list">
        <li>
          <i className="ri-moon-line navbar__moon"></i>
        </li>
        <li>
          <i class="ri-search-line"></i>
        </li>

        <li className="navbar__language">
          <div className="dropdown">
            <a className="navbar__link" href="/profile">
              O'ZB
            </a>
            <i className="ri-arrow-down-line arrow"></i>

            <div className="dropdown-options">
              <a href="/mehridaryo">Uzbek</a>
              <a href="/boshqalar">Rus</a>
              <a href="/boshqalar">Eng</a>
            </div>
          </div>
        </li>
      </ul>

      <div className="navbar__burger">
        <div className="navbar__burger-item"></div>
        <div className="navbar__burger-item"></div>
        <div className="navbar__burger-item"></div>
      </div>
    </div>
  );
};

export default Navbar;
