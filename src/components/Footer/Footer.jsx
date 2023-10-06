import React from "react";
import "./footer.scss";
import logo from "../../assets/images/footer-logo-white.png";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <NavLink to="/">
        <img className="footer__logo" src={logo} alt="" />
      </NavLink>
      <p className="footer__text">
        “Daryo” internet-nashrining (O‘zbekiston matbuot va axborot agentligi
        (O‘zMAA, hozirgi O‘zbekiston Respublikasi Prezidenti Administratsiyasi
        huzuridagi Axborot va ommaviy kommunikatsiyalar agentligi) tomonidan
        13.03.2015 yil sanasida 0944-sonli guvohnoma bilan ommaviy axborot
        vositasi sifatida ro‘yxatga olingan. Matnli materiallarni to‘liq
        ko‘chirish yoki qisman iqtibos keltirishga, shuningdek, fotografik,
        grafik, audio va/yoki videomateriallaridan foydalanishga “daryo.uz”
        saytiga giperhavola mavjud bo‘lgan va/yoki “Daryo” internet-nashrining
        muallifligini ko‘rsatuvchi yozuv ilova qilingan taqdirda yo‘l qo‘yiladi.
        Chop etiladigan ba’zi ma’lumotlar 18 yoshga to‘lmagan foydalanuvchilarga
        mo‘ljallanmagan bo‘lishi mumkin. Info@daryo.uz
      </p>
      <div className="footer__media">
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

export default Footer;
