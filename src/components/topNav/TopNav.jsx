import React from "react";
import "./topnav.scss";
import topNav from "../../assets/images/navTop-rek.jpg";
import navLogo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="topNav">
      <Link to="/">
        <img src={navLogo} alt="" className="logo" />
      </Link>

      <img src={topNav} alt="reclama" className="topNav__rec" />
    </div>
  );
};

export default TopNav;
