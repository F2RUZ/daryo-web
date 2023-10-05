import React from "react";
import "./footerbottom.scss";
const FooterBottom = () => {
  return (
    <div className="footerbottom">
      <p>© «Simple Networking Solutions» MChJ, 2013–2023</p>
      <div className="footer__circle">
        <i class="ri-megaphone-line"></i>
      </div>
      <p>Yosh bo‘yicha cheklov</p>
      <div className="footer__circle">
        <i class="ri-smartphone-line"></i>
      </div>
      <p>Xato topdingizmi? Ctrl+Enter’ni bosing</p>
      <p> Foydalanish shartlari</p>
      <hr className="footer__hr" />
      <p>Maxfiylik siyosati</p>
      <hr className="footer__hr" />

      <p>Reklama</p>
    </div>
  );
};

export default FooterBottom;
