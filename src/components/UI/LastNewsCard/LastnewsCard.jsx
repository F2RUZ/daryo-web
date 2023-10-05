import React from "react";

const LastnewsCard = (props) => {
  const { title, date, ImgUrl } = props.item;
  return (
    <div className="lastnews__card">
      <div className="lastnews__card-left">
        <h4 className="lastnews__card-title">{title}</h4>
        <p className="lastnews__card-text">{date}</p>
      </div>
      <div className="lastnews__card-right">
        <img src={ImgUrl} alt="" className="lastnews__card-img" />
      </div>
    </div>
  );
};

export default LastnewsCard;
