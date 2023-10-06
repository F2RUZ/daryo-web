import React from "react";

const Other = (props) => {
  const { date, ImgUrl, title, text } = props.item;
  return (
    <div className="other__card">
      <div className="worldnews__left">
        <img src={ImgUrl} alt="" className="worldnews__left-img other__imgg" />
        <h3 className="worldnews__left-title">{title}</h3>
        <span className="worldnews__left-span">{date}</span>
        <p className="worldnews__left-text">{text}</p>
      </div>
    </div>
  );
};

export default Other;
