import React from "react";

const FinanceCard = (props) => {
  const { title, date, ImgUrl } = props.item;

  return (
    <div className="lastnews__card finance__card">
      <div className="lastnews__card-left">
        <h4 className="lastnews__card-title finance__title">{title}</h4>
        <p className="lastnews__card-text finance__text">{date}</p>
      </div>
      <div className="lastnews__card-right">
        <img src={ImgUrl} alt="" className="lastnews__card-img finance__img" />
      </div>
    </div>
  );
};

export default FinanceCard;
