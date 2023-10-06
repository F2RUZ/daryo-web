import React from "react";

const RecommensCard = (props) => {
  const { date, ImgUrl, title } = props.item;
  return (
    <div className="lastnews__card worldnews__card-box recommend__card localnews__card lifestyles__card ">
      <div className="lastnews__card-left">
        <h4 className="lastnews__card-title worldnews__card-title recommend__card-title localnews__card-title lifestyles__card-title">
          {title}
        </h4>
        <p className=" recommend__card-text lastnews__card-text localnews__card-text">
          {date}
        </p>
      </div>
      <div className="lastnews__card-right">
        <img
          src={ImgUrl}
          alt=""
          className=" recommend__card-img lastnews__card-img localnews__card-img lifestyles__card-img"
        />
      </div>
    </div>
  );
};

export default RecommensCard;
