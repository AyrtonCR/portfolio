import style from "./home.module.css";
import Header from "../components/headFoot/header";
import UpperNavBar from "../components/nav/upperNavBar";
import LowerNavBar from "../components/nav/lowerNavBar";
import Footer from "../components/headFoot/footer";
import Blurb from "../components/content/blurb";
import HomeContent from "../components/content/homeContent";

// import React, { useState, useEffect } from "react";

const Home = () => {
  return (
    <div className={style.container}>
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
