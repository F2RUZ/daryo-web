import React from "react";
import "./localnews.scss";
import WorldNewsCard from "../../UI/RecommendCard/RecommensCard";
import japan from "../../../assets/images/tayvandaTufon.jpg";

import localDataNews from "../../../assets/fetch-data/local-data-news";
const LocalNews = () => {
  return (
    <>
      <h2 className="lastnews__title worldnews__title">Mahaliy</h2>
      <div className="lastnews__span"></div>
      <hr className="lastnews__hr worldnews__hr" />
      <div className="worldnews localnews">
        <div className="worldnews__left">
          <img src={japan} alt="" className="worldnews__left-img" />
          <h3 className="worldnews__left-title">
            Yaponiya Fukusima AESdagi suvning ikkinchi partiyasini okeanga
            chiqarishni boshladi
          </h3>
          <span className="worldnews__left-span">12:00 / 05.10.2023</span>
          <p className="worldnews__left-text">
            Bu safar 7,8 ming tonnaga yaqin tozalangan suvni okeanga to‘kish
            rejalashtirilmoqda
          </p>
        </div>
        <div className="worldnews__right">
          {localDataNews.map((item) => (
            <WorldNewsCard key={item.key} item={item} />
          ))}
        </div>
      </div>

      <h2 className="worldnews__subtitle localnews__subtitle">
        <span>Mahalliy</span> – ENG SO‘NGGI XABARLARI
      </h2>
    </>
  );
};

export default LocalNews;
