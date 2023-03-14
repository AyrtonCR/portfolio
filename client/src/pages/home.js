import style from "./home.module.css";
import HeaderImage from "../utilities/images/celtic-transparent-14.png";
import SurfboardsImage from "../utilities/images/surfboards.png";
import EgyptImage from "../utilities/images/egypt.png";
// import React, { useState, useEffect } from "react";

const Home = () => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <img
          className={style.headerImage}
          src={HeaderImage}
          alt="celtic-pattern"
        ></img>
        <h1 className={style.heading1}>Portfolio Page</h1>
      </header>

      <div className={style.mainBlurb}>
        <h3>Welcome</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi quae
          enim optio amet, eveniet ipsa ullam iure ab, neque eius praesentium
          cum harum facere minus, atque et quis accusamus minima?
        </p>
      </div>
      <div className={style.mainGrid}>
        <div className={style.mainGrid1}>
          <img
            className={style.gridImage}
            src={SurfboardsImage}
            alt="surfboards"
          />
          <p>
            I have a great passion for surfing and being a part of life near the
            ocean. Even being near the ocean when in different conditions is
            grounding part of my life. I have created a Site that is aimed at
            new surfers looking to go out in the breaks around Christchurch. The
            project was called 'Pegasus Bay Surf' and offers information about
            our different beaches, surfboards, conditions and has the template
            for a forum that surfers can use to keep each other posted on the
            surf.
          </p>
        </div>
        <div className={style.mainGrid2}>
          {" "}
          <img className={style.gridImage} src={EgyptImage} alt="egypt" />
          <p>
            I have a great passion for surfing and being a part of life near the
            ocean. Even being near the ocean when in different conditions is
            grounding part of my life. I have created a Site that is aimed at
            new surfers looking to go out in the breaks around Christchurch. The
            project was called 'Pegasus Bay Surf' and offers information about
            our different beaches, surfboards, conditions and has the template
            for a forum that surfers can use to keep each other posted on the
            surf.
          </p>
        </div>
        <div className={style.mainGrid3}></div>
        <div className={style.mainGrid4}></div>
        <div className={style.mainGrid5}></div>
        <div className={style.mainGrid6}></div>
      </div>
    </div>
  );
};

export default Home;
