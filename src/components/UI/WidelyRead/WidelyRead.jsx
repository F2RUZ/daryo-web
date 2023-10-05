import React from "react";
import "./widelyread.scss";
import WidelyData from "../../../assets/fetch-data/widelyread-data-news";
import WidelyReadCard from "../WidelyReadCard/WidelyReadCard";
const WidelyRead = () => {
  return (
    <div className="widelyread">
      <h2 className="lastnews__title worldnews__title">Ko'p o'qiladigan</h2>
      <div className="lastnews__span"></div>
      <hr className="lastnews__hr worldnews__hr" />
      <div className="widelyread__cards">
        {WidelyData.map((item) => (
          <WidelyReadCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default WidelyRead;
