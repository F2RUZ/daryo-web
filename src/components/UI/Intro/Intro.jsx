import React from "react";
import "./intro.scss";
import IntroData from "../../../assets/fetch-data/intro-data";
import IntroBottomCard from "../Intro-bottom/IntroBottomCard";
import bgImg from "../../../assets/images/yomgir.jpg";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__top">
        <img className="intro__pic" src={bgImg} alt="" />
        <div className="box">
          <button className="intro__btn">Mahalliy</button>
          <h2 className="intro__title">
            O‘zbekistonda 6-oktyabr kuni yomg‘ir yog‘ib, chang-to‘zon
            kuzatilishi mumkin
          </h2>
        </div>
      </div>
      <div className="intro__bottom">
        {IntroData.map((item) => (
          <IntroBottomCard key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Intro;
