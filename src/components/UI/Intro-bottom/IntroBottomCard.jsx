import React from "react";

const IntroBottomCard = (props) => {
  const { title, ImgUrl } = props.item;
  return (
    <div className="intro__bottom-card">
      <img src={ImgUrl} alt="" className="intro__img lastnews__card-img" />
      <h4 className="intro__bottom-title">{title.slice(0 , 60)} ...</h4>
    </div>
  );
};

export default IntroBottomCard;
