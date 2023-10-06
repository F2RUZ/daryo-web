import React from "react";
import "../styles/other.scss";
import OtherData from "../assets/fetch-data/boshqalar-data";
import Other from "../components/UI/Othersui/Other";
const OthersPage = () => {
  return (
    <div>
      <h2 className="lastnews__title worldnews__title others__title">
        Boshqalar
      </h2>
      <div className="lastnews__span"></div>
      <div className="OthersPage">
        {OtherData.map((item) => (
          <Other key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default OthersPage;
