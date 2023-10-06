import React from "react";

const WidelyReadCard = (props) => {
  const { title, date, id } = props.item;
  return (
    <div className="widelyread__card">
      <div className="widelyread__card-left">{id}</div>
      <div className="widelyread__card-right">
        <h3 className="widelyread__card-title">{title}</h3>
        <p className="widelyread__card-date">{date}</p>
      </div>
    </div>
  );
};

export default WidelyReadCard;
