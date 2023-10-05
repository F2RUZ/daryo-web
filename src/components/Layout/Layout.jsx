import React from "react";
import TopNav from "../topNav/TopNav";
import Navbar from "../Navbar/Navbar";
import Intro from "../UI/Intro/Intro";
import LastNews from "../UI/LastNews/LastNews";
import WorldNews from "../UI/WorldNews/WorldNews";
import Recommend from "../UI/Recommend/Recommend";
import LocalNews from "../UI/LocalNews/LocalNews";
import Finance from "../UI/Finance/Finance";
import LifeStyles from "../UI/LifeStyles/LifeStyles";
import WidelyRead from "../UI/WidelyRead/WidelyRead";
import Reclam from "../UI/Reclam/Reclam";
import Footer from "../Footer/Footer";
import FooterBottom from "../FooterBottom/FooterBottom";

const Layout = () => {
  return (
    <>
      <div className="wrapper">
        <div className="topNavbar">
          <TopNav />
        </div>
        <nav className="NAVBAR">
          <Navbar />
        </nav>
        <main className="main">
          <div className="main__left">
            <Intro />
            <WorldNews />
            <LocalNews />
            <LifeStyles />
            <Reclam />
          </div>
          <div className="main__right">
            <LastNews />
            <Recommend />
            <Finance />
            <WidelyRead />
          </div>
        </main>
      </div>
      <footer>
        <Footer />
        <div className="footer__bottom">
          <FooterBottom />
        </div>
      </footer>
    </>
  );
};

export default Layout;
