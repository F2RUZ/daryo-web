import React, { useState } from "react";
import TopNav from "../topNav/TopNav";
import Navbar from "../Navbar/Navbar";
import LastNews from "../UI/LastNews/LastNews";
import Recommend from "../UI/Recommend/Recommend";
import Finance from "../UI/Finance/Finance";
import WidelyRead from "../UI/WidelyRead/WidelyRead";
import Footer from "../Footer/Footer";
import FooterBottom from "../FooterBottom/FooterBottom";
import Router from "../../Routes/Router";
import NavBurger from "../NavBurger/NavBurger";

const Layout = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <div className="wrapper">
        <div className="topNavbar">
          <TopNav />
        </div>

        <div className="container">
          <nav className="NAVBAR">
            <Navbar toggleNav={toggleNav} />
          </nav>
          <main className="main">
            <div className="main__left">
              {showNav ? <NavBurger toggleNav={toggleNav} /> : null}
              <Router />
            </div>
            <div className="main__right">
              <LastNews />
              <Recommend />
              <Finance />
              <WidelyRead />
            </div>
          </main>
        </div>
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
