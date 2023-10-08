import React from "react";
import MehridaryoData from "../assets/fetch-data/mehridaryo-data";
import Other from "../components/UI/Othersui/Other";

const Mehridaryo = () => {
  return (
    <div>
      <h2 className="lastnews__title worldnews__title others__title">
        Mehridaryo
      </h2>
      <div className="lastnews__span"></div>
      <div className="mehridayro OthersPage">
        {MehridaryoData.map((item, index) => (
          <Other key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Mehridaryo;
