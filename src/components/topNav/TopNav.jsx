import React from "react";
import './topnav.scss'
import topNav from "../../assets/images/navTop-rek.jpg";
import navLogo from "../../assets/images/logo.svg";

const TopNav = () => {
  return (
    <div className="topNav">
      <img src={navLogo} alt="topNav__logo" className="topNav__img" />
      <img src={topNav} alt="reclama" className="topNav__rec" />
    </div>
  );
};

export default TopNav;
