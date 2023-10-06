import React from "react";

const WorldNewsCard = (props) => {
  const { title, date, ImgUrl } = props.item;
  return (
    <div className="lastnews__card worldnews__card-box">
      <div className="lastnews__card-left">
        <h4 className="lastnews__card-title worldnews__card-title">{title}</h4>
        <p className="lastnews__card-text worldnews__card-date ">{date}</p>
      </div>
      <div className="lastnews__card-right">
        <img
          src={ImgUrl}
          alt=""
          className="lastnews__card-img worldnews__card-img"
        />
      </div>
    </div>
  );
};

export default WorldNewsCard;
