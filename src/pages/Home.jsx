import React from "react";
import "../App.scss";
import Intro from "../components/UI/Intro/Intro";
import WorldNews from "../components/UI/WorldNews/WorldNews";
import LocalNews from "../components/UI/LocalNews/LocalNews";
import LifeStyles from "../components/UI/LifeStyles/LifeStyles";
import Reclam from "../components/UI/Reclam/Reclam";

const Home = () => {
  return (
    <div className="home">
      <Intro />
      <WorldNews />
      <LocalNews />
      <LifeStyles />
      <Reclam />
    </div>
  );
};

export default Home;
