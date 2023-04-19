import style from "./home.module.css";
import Header from "../components/headFoot/header";
import UpperNavBar from "../components/nav/upperNavBar";
import Footer from "../components/headFoot/footer";
import Blurb from "../components/content/blurb";
import HomeContent from "../components/content/homeContent";

import BlackPoly from ".././utilities/images/black-bg.jpeg";

// import React, { useState, useEffect } from "react";

const Home = () => {
  return (
    <div className={style.container}>
      <BlackGeoWallpapers />
      <Header />
      <UpperNavBar />
      <Blurb />
      <HomeContent />
      <Footer />
    </div>
  );
};

const BlackGeoWallpapers = () => {
  return (
    <div className={style.backgroundContainer}>
      <img className={style.blackPoly} src={BlackPoly} alt="blackpoly"></img>
    </div>
  );
};
export default Home;
