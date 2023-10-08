import React from "react";
import "./lastnews.scss";
import LastnewsCard from "../LastNewsCard/LastnewsCard";
import LastData from "../../../assets/fetch-data/last-data-news";

const LastNews = () => {
  return (
    <div>
      <h2 className="lastnews__title">So‘nggi yangiliklarga o‘tish</h2>
      <div className="lastnews__span"></div>
      <hr className="lastnews__hr" />
      <div className="lastnews">
        <div className="lastnews__bottom">
          {LastData.map((item, index) => (
            <LastnewsCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LastNews;
