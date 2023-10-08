import "./navbar.scss";
import DarkMode from "../DarkMode/DarkMode";
import { NavLink } from "react-router-dom";

import Logo from "../../assets/images/logo.svg";

const Navbar = ({ toggleNav }) => {
  return (
    <div className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <div className="dropdown">
            <NavLink className="navbar__link" to="/">
              Profile
              <i className="ri-arrow-down-line arrow"></i>
            </NavLink>
            <div className="dropdown-options">
              <NavLink to="/mehridaryo">Mehridaryo</NavLink>
              <NavLink to="/otherspage">Boshqalar</NavLink>
            </div>
          </div>
        </li>
        <li className="navbar__item">
          <div className="dropdown">
            <NavLink className="navbar__link" to="/otherspage">
              Markaziy Osiyo
              <i className="ri-arrow-down-line arrow"></i>
            </NavLink>
            <div className="dropdown-options">
              <NavLink to="/kirgiz">Qirg'iziston</NavLink>
              <NavLink to="/kirgiz">Qozog'istosn</NavLink>
              <NavLink to="/kirgiz">Tojikiston</NavLink>
              <NavLink to="/kirgiz">Turkmaniston</NavLink>
              <NavLink to="/kirgiz">Afg'oniston</NavLink>
            </div>
          </div>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__link" to="/otherspage">
            Dunyo
          </NavLink>
        </li>
        <li className="navbar__item">
          <div className="dropdown">
            <NavLink className="navbar__link" to="/kirgiz">
              Pul
              <i className="ri-arrow-down-line arrow"></i>
            </NavLink>
            <div className="dropdown-options">
              <NavLink to="/otherspage">Iqtisodiyot</NavLink>
              <NavLink to="/otherspage">Moliya</NavLink>
              <NavLink to="/otherspage">Kripto</NavLink>
              <NavLink to="/otherspage">Biznes</NavLink>
            </div>
          </div>
        </li>
        <li className="navbar__item">
          <div className="dropdown">
            <NavLink className="navbar__link" to="/">
              Madaniyat
              <i className="ri-arrow-down-line arrow"></i>
            </NavLink>
            <div className="dropdown-options">
              <NavLink to="/otherspage">Kino</NavLink>
              <NavLink to="/otherspage">Kitob</NavLink>
              <NavLink to="/otherspage">Musiqa</NavLink>
              <NavLink to="/otherspage">Shou-biznes</NavLink>
            </div>
          </div>
        </li>
        <li className="navbar__item">
          <div className="dropdown">
            <NavLink className="navbar__link" to="/profile">
              Lifistyle
              <i className="ri-arrow-down-line arrow"></i>
            </NavLink>
            <div className="dropdown-options">
              <NavLink to="/otherspage">Ayollar</NavLink>
              <NavLink to="/otherspage">Texnologiyalar</NavLink>
              <NavLink to="/otherspage">Avto</NavLink>
              <NavLink to="/otherspage">Talim</NavLink>
            </div>
          </div>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__link" to="/otherspage">
            Sport
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__link" to="/kirgiz">
            Koluministlar
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__link" to="/mehridaryo">
            Multimedia
          </NavLink>
        </li>
      </ul>

      <ul className="navbar__media__list">
        {/* <li>
          <i className="ri-moon-line navbar__moon "></i>
        </li> */}
        <li>
          <DarkMode />
        </li>
        <li>
          <i className="ri-search-line"></i>
        </li>

        <li className="navbar__language">
          <div className="dropdown">
            <NavLink className="navbar__link" to="/profile">
              O'ZB
              <i className="ri-arrow-down-line arrow"></i>
            </NavLink>

            <div className="dropdown-options navbar__language">
              <NavLink to="/otherspage">Uzbek</NavLink>
              <NavLink to="/otherspage">Rus</NavLink>
              <NavLink to="/otherspage">Eng</NavLink>
            </div>
          </div>
        </li>
      </ul>

      <div className="navbar__logo">
        <NavLink to="/">
          <img className="navbar__logo-img" src={Logo} alt="" />
        </NavLink>
      </div>

      <div onClick={toggleNav} className="navbar__burger">
        <div className="navbar__burger-item"></div>
        <div className="navbar__burger-item"></div>
        <div className="navbar__burger-item"></div>
      </div>
    </div>
  );
};

export default Navbar;
