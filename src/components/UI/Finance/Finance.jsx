import React from "react";
import "./finance.scss";
import japan from "../../../assets/images/tayvandaTufon.jpg";
import financeDataNews from "../../../assets/fetch-data/finance-data-news";
import FinanceCard from "../FinanceCard/FinanceCard";
const Finance = () => {
  return (
    <div className="finance">
      <h2 className="lastnews__title worldnews__title">Moliya</h2>
      <div className="lastnews__span"></div>
      <hr className="lastnews__hr worldnews__hr" />
      <div className="worldnews__left">
        <img src={japan} alt="" className="worldnews__left-img" />
        <h3 className="worldnews__left-title ">
          O‘zbekistonda elektr energiyasi narxi meʼyordan ortiq ishlatganlar
          uchun to‘rt baravargacha oshiriladi
        </h3>
        <span className="worldnews__left-span">14:00 / 05.10.2023</span>
      </div>
      {financeDataNews.map((item) => (
        <FinanceCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Finance;
