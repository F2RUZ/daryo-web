import React from "react";
import "./lifestyle.scss";
import bgImg from "../../../assets/images/namanganda-textil.jpg";
import Pentagon from "../../../assets/images/penta.jpg";
import lifeStyleNews from "../../../assets/fetch-data/lifeStyle-data-news";
import RecommensCard from "../../UI/RecommendCard/RecommensCard";
const LifeStyles = () => {
  return (
    <div className="lifestyles">
      <h2 className="lastnews__title worldnews__title">LAYFSTAYL</h2>
      <div className="lastnews__span"></div>
      <hr className="lastnews__hr worldnews__hr" />
      <div className="lifestyles__intro">
        <div className="lifestyles__intro-left">
          <img src={Pentagon} className="lifestyles__img" alt="" />

          <div className="lifestyles__box">
            <button className="lifestyles__btn intro__btn">LAYFSTAYL</button>
            <h2 className="lifestyles__title">
              Dunyodagi eng qimmat atir qancha turadi va qayerda saqlanadi?
            </h2>
            <p className="lifestyles__text">15:00 / 05.01.2023</p>
          </div>
        </div>
        <div className="lifestyles__intro-left">
          <img src={bgImg} className="lifestyles__img" alt="" />

          <div className="lifestyles__box">
            <button className="lifestyles__btn intro__btn">LAYFSTAYL</button>
            <h2 className="lifestyles__title">
              Dunyodagi eng qimmat atir qancha turadi va qayerda saqlanadi?
            </h2>
            <p className="lifestyles__text">15:00 / 05.01.2023</p>
          </div>
        </div>
      </div>

      <div className="lifestyles__cards">
        {lifeStyleNews.map((item) => (
          <RecommensCard key={item.id} item={item} />
        ))}
      </div>
      <h2 className="worldnews__subtitle lifestyles__subtitle">
        <span>Lifestyle</span> – ENG SO‘NGGI XABARLARI
      </h2>
    </div>
  );
};

export default LifeStyles;
