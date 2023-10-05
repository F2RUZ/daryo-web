import React from "react";

const RecommensCard = (props) => {
  const { date, ImgUrl, title } = props.item;
  return (
    <div className="lastnews__card worldnews__card-box recommend__card">
      <div className="lastnews__card-left">
        <h4 className="lastnews__card-title worldnews__card-title recommend__card-title localnews__card-title">
          {title}
        </h4>
        <p className="lastnews__card-text">{date}</p>
      </div>
      <div className="lastnews__card-right">
        <img src={ImgUrl} alt="" className="lastnews__card-img" />
      </div>
    </div>
  );
};

export default RecommensCard;
