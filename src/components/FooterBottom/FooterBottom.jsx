import React from "react";
import "./footerbottom.scss";
const FooterBottom = () => {
  return (
    <div className="footerbottom">
      <p className="footerbottom__text">
        © «Simple Networking Solutions» MChJ, 2013–2023
      </p>
      <div className="footerbottom__card">
        <div className="footer__circle">
          <i className="ri-megaphone-line"></i>
        </div>
        <p className="footerbottom__text">Yosh bo‘yicha cheklov</p>
      </div>

      <div className="footerbottom__card">
        <div className="footer__circle">
          <i className="ri-smartphone-line"></i>
        </div>
        <p className="footerbottom__text">
          Xato topdingizmi? Ctrl+Enter’ni bosing
        </p>
      </div>
      <div className="footerbottom__card">
        <p className="footerbottom__text"> Foydalanish shartlari</p>
        <hr className="footer__hr" />
        <p className="footerbottom__text">Maxfiylik siyosati</p>
        <hr className="footer__hr" />

        <p className="footerbottom__text">Reklama</p>
      </div>
    </div>
  );
};

export default FooterBottom;
