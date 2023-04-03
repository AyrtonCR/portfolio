import style from "./home.module.css";
import Header from "../components/headFoot/header";
import UpperNavBar from "../components/nav/upperNavBar";
import LowerNavBar from "../components/nav/lowerNavBar";
import Footer from "../components/headFoot/footer";
import Blurb from "../components/content/blurb";
import HomeContent from "../components/content/homeContent";
import Blue from ".././utilities/images/blue-turquoise.png";
import Ring from ".././utilities/images/ring.png";
import BlackGeo from ".././utilities/images/black-geometric.jpg";
import BlueAb from ".././utilities/images/blue-abstract-texture.png";
import BlackPoly from ".././utilities/images/black-low-poly-geometric.png";
import BlackPoly2 from ".././utilities/images/black-low-poly-geometric.png";
import BlackPoly3 from ".././utilities/images/black-low-poly-geometric.png";
import BlackPoly4 from ".././utilities/images/black-low-poly-geometric.png";
import BlackPoly5 from ".././utilities/images/black-low-poly-geometric.png";
import AbFlower from ".././utilities/images/abstract-flower.png";
// import React, { useState, useEffect } from "react";

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.backgroundContainer}>
        <img className={style.blackPoly} src={BlackPoly} alt="blackpoly"></img>
        <img
          className={style.blackPoly2}
          src={BlackPoly2}
          alt="blackpoly"
        ></img>
        <img
          className={style.blackPoly3}
          src={BlackPoly3}
          alt="blackpoly"
        ></img>
        <img
          className={style.blackPoly4}
          src={BlackPoly4}
          alt="blackpoly"
        ></img>
        <img
          className={style.blackPoly5}
          src={BlackPoly5}
          alt="blackpoly"
        ></img>
      </div>
      <Header />
      <UpperNavBar />
      <Blurb />
      <HomeContent />
      <LowerNavBar />
      <Footer />
    </div>
  );
};

export default Home;
