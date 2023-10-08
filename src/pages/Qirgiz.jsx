import React from "react";
import kirgizData from "../assets/fetch-data/kirgiz-data";
import Other from "../components/UI/Othersui/Other";
const Qirgiz = () => {
  return (
    <div>
      <h2 className="lastnews__title worldnews__title others__title">
        Qirg'ziston
      </h2>
      <div className="lastnews__span"></div>
      <div className="kirgiz OthersPage">
        {kirgizData.map((item, index) => (
          <Other key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Qirgiz;
