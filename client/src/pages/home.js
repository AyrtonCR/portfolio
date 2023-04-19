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
import BlackPoly from ".././utilities/images/black-bg.jpeg";
import BlackPoly2 from ".././utilities/images/black-low-poly-geometric.png";
import BlackPoly3 from ".././utilities/images/black-low-poly-geometric.png";
import BlackPoly4 from ".././utilities/images/black-low-poly-geometric.png";
import BlackPoly5 from ".././utilities/images/black-low-poly-geometric.png";
import AbFlower from ".././utilities/images/abstract-flower.png";
import SVGCut from "./svgCut";
import stylesheet from "./svgCut.css";
import Slider from "../components/carousel/carousel";
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
