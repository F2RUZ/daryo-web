import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navburger.scss";
import Logo from "../../assets/images/logo.svg";
const NavBurger = ({ toggleNav }) => {
  return (
    <div className="navburger">
      <div className="navburger__top">
        <NavLink to="/">
          <img
            onClick={toggleNav}
            src={Logo}
            className="navburger__logo"
            alt=""
          />
        </NavLink>
        <div onClick={toggleNav}>
          <i className=" navburger__top-arrow ri-arrow-left-s-line"></i>
        </div>
      </div>
      <ul className="navburger__list">
        <li onClick={toggleNav} className="navburger__item">
          <Link to="/">So‘nggi yangiliklar</Link>
          <hr className="navburger__hr" />
        </li>
        <li onClick={toggleNav} className="navburger__item">
          <Link to="/">Asosiy yangiliklar</Link>
          <hr className="navburger__hr" />
        </li>
        <li onClick={toggleNav} className="navburger__item">
          <Link to="/otherspage">Eng ko‘p o‘qilgan</Link>
          <hr className="navburger__hr" />
        </li>
        <li onClick={toggleNav} className="navburger__item">
          <Link to="/mehridaryo">Mahalliy</Link>
          <hr className="navburger__hr" />
        </li>
        <li onClick={toggleNav} className="navburger__item">
          <Link to="/kirgiz">Markaziy Osiyo</Link>
          <hr className="navburger__hr" />
        </li>
        <li onClick={toggleNav} className="navburger__item">
          <Link to="/otherspage">Dunyo</Link>
          <hr className="navburger__hr" />
        </li>
        <li onClick={toggleNav} className="navburger__item">
          <Link to="/otherspage">Pul</Link>
          <hr className="navburger__hr" />
        </li>
        <li onClick={toggleNav} className="navburger__item">
          <Link to="/kirgiz">Madaniyat</Link>
          <hr className="navburger__hr" />
        </li>
        <li onClick={toggleNav} className="navburger__item">
          <Link to="/">Layfstayl</Link>
          <hr className="navburger__hr" />
        </li>
        <li onClick={toggleNav} className="navburger__item">
          <Link to="/mehridaryo">Sport</Link>
          <hr className="navburger__hr" />
        </li>
        <li onClick={toggleNav} className="navburger__item">
          <Link to="/">Kolumnistlar</Link>
          <hr className="navburger__hr" />
        </li>
        <li onClick={toggleNav} className="navburger__item">
          <Link to="/mehridaryo">Multimedia</Link>
          <hr className="navburger__hr" />
        </li>
      </ul>

      <div className="navburger__socials">
        <div className="navburger__social">
          <i className=" navburger__media ri-google-play-fill"></i>
          <p className="navburger__text"> Google Play</p>
        </div>
        <div className="navburger__social">
          <i className=" navburger__media ri-apple-fill"></i>
          <p className="navburger__text"> App Store</p>
        </div>
        <div className="navburger__social">
          <i className=" navburger__media ri-telegram-line"></i>
          <p className="navburger__text"> Telegram</p>
        </div>
      </div>

      <div className="footer__media navburger__footer">
        <div className="footer__social">
          <i className=" social ri-telegram-fill"></i>
        </div>
        <div className="footer__social">
          <i className=" social ri-youtube-fill"></i>
        </div>
        <div className="footer__social">
          <i className=" social ri-facebook-fill"></i>
        </div>
        <div className="footer__social">
          <i className=" social ri-instagram-line"></i>
        </div>
        <div className="footer__social">
          <i className=" social ri-twitter-fill"></i>
        </div>
      </div>
    </div>
  );
};

export default NavBurger;
