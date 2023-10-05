import React from "react";
import "./worldnews.scss";
import worldNewsData from "../../../assets/fetch-data/world-data-news";
import WorldNewsCard from "../WorldNewsCard/WorldNewsCard";
import japan from "../../../assets/images/tayvandaTufon.jpg";

const WorldNews = () => {
  return (
    <>
      <h2 className="lastnews__title worldnews__title">Dunyo</h2>
      <div className="lastnews__span"></div>
      <hr className="lastnews__hr worldnews__hr" />
      <div className="worldnews">
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
          {worldNewsData.map((item) => (
            <WorldNewsCard key={item.key} item={item} />
          ))}
        </div>
      </div>

      <h2 className="worldnews__subtitle">
        <span>DUNYO</span> – ENG SO‘NGGI XABARLARI
      </h2>
    </>
  );
};

export default WorldNews;
