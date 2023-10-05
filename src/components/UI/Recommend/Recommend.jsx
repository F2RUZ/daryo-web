import React from "react";
import "./recommend.scss";
import recommendDataNews from "../../../assets/fetch-data/recommend-data-news";
import RecommensCard from "../RecommendCard/RecommensCard";
const Recommend = () => {
  return (
    <div className="recommend">
      <h2 className="lastnews__title recommend__title  ">Tavsiya etamiz</h2>
      <div className="lastnews__span"></div>
      <hr className="lastnews__hr " />
      {recommendDataNews.map((item) => (
        <RecommensCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Recommend;
