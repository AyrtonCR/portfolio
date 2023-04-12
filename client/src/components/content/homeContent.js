import style from "./homeContent.module.css";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import TreeImage from "../../utilities/images/tree.png";
import GoatImage from "../../utilities/images/goat.png";
import BeachImage from "../../utilities/images/beach.png";
import Celtic from "../../utilities/images/celtic1.webp";
import SurfboardsImage from "../../utilities/images/surfboard-icon.png";
import SurfboardsTrans from "../../utilities/images/surfboard-tr-10.png";
import EgyptImage from "../../utilities/images/egypt.png";
import Guitar from "../../utilities/images/esp-guitar.png";
import MusicIcon from "../../utilities/images/vinyl-icon.png";
import Vacation from "../../utilities/images/vacation.png";
import ChchFog from "../../utilities/images/chch-fog-wp.avif";
import LakeWP from "../../utilities/images/lake-wp.webp";
import BeachCamp from "../../utilities/images/dahab-beach-camp.webp";
import Sunset from "../../utilities/images/sinai-sunset.jpeg";
const HomeContent = () => {
  let trigger = true;

  const ref = useRef(null);
  let isInView = useInView(ref);
  if (!isInView) {
    trigger = false;
  } else if (isInView) {
    trigger = true;
  }

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2);

  const ref3 = useRef(null);
  const isInView3 = useInView(ref3);

  const ref4 = useRef(null);
  const isInView4 = useInView(ref4);

  console.log(trigger);

  return (
    <div className={style.mainGrid}>
      <div className={style.refHanger1} ref={ref}></div>
      <div className={style.refHanger2} ref={ref2}></div>
      <div className={style.refHanger3} ref={ref3}></div>
      <div className={style.refHanger4} ref={ref4}></div>
      <div className={style.mainGridWpHolder}>
        <motion.img
          style={{
            transform: isInView ? "scale(1.05)" : "none",
            transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
          className={style.topLayerWallpaper}
          src={ChchFog}
        ></motion.img>
        <motion.img
          style={{
            transform: isInView2 && !isInView ? "scale(1.05)" : "none",
            transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
          className={style.topLayerWallpaper2}
          src={LakeWP}
        ></motion.img>

        <motion.img
          style={{
            transform:
              isInView3 && !isInView4 && !isInView2 ? "scale(1.05)" : "none",
            transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
          className={style.topLayerWallpaper3}
          src={BeachCamp}
        ></motion.img>
        <motion.img
          style={{
            transform: isInView4 ? "scale(1.15)" : "none",
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
          className={style.topLayerWallpaper4}
          src={Sunset}
        ></motion.img>
      </div>

      <div className={style.projectsGrid}>
        <motion.div
          className={style.mainGrid1}
          style={{
            transform: isInView2 ? "none" : "translateX(-700px)",
            opacity: isInView2 ? 1 : 0,
            transition: "all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
          // initial={{ x: -600, opacity: 0 }}
          // animate={{ x: 0, opacity: 1 }}
          // transition={{ duration: 1, delay: 0.2 }}
        >
          <img
            className={style.gridImage}
            src={SurfboardsImage}
            alt="surfboards"
          />
          <p className={style.gridText}>
            I have a great passion for surfing and being a part of life near the
            ocean. Even being near the ocean when in different conditions is
            grounding part of my life. I have created a Site that is aimed at
            new surfers looking to go out in the breaks around Christchurch. The
            project was called 'Pegasus Bay Surf' and offers information about
            our different beaches, surfboards, conditions and has the template
            for a forum that surfers can use to keep each other posted on the
            surf.
          </p>
        </motion.div>
        <motion.div
          className={style.mainGrid2}
          style={{
            opacity: isInView2 ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
        >
          {" "}
          <img className={style.gridImage} src={MusicIcon} alt="egypt" />
          <p className={style.gridText}>
            I have a great passion for surfing and being a part of life near the
            ocean. Even being near the ocean when in different conditions is
            grounding part of my life. I have created a Site that is aimed at
            new surfers looking to go out in the breaks around Christchurch. The
            project was called 'Pegasus Bay Surf' and offers information about
            our different beaches, surfboards, conditions and has the template
            for a forum that surfers can use to keep each other posted on the
            surf.
          </p>
        </motion.div>
        <motion.div
          className={style.mainGrid3}
          style={{
            transform: isInView2 ? "none" : "translateX(700px)",
            opacity: isInView2 ? 1 : 0,
            transition: "all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
        >
          <img className={style.gridImage} src={Vacation} alt="tree" />
          <p className={style.gridText}>
            I have a great passion for surfing and being a part of life near the
            ocean. Even being near the ocean when in different conditions is
            grounding part of my life. I have created a Site that is aimed at
            new surfers looking to go out in the breaks around Christchurch. The
            project was called 'Pegasus Bay Surf' and offers information about
            our different beaches, surfboards, conditions and has the template
            for a forum that surfers can use to keep each other posted on the
            surf.
          </p>
        </motion.div>
      </div>

      <div className={style.AboutMeGrid}>
        <motion.div
          className={style.mainGrid4Holder}
          style={{
            transform: isInView3 ? "none" : "translateY(150px)",
            opacity: isInView3 ? 1 : 0,
            transition: "all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
        >
          <div className={style.mainGrid4}>
            <img className={style.gridImageGoat} src={GoatImage} alt="egypt" />
            <p className={style.gridText}>
              I have a great passion for surfing and being a part of life near
              the ocean. Even being near the ocean when in different conditions
              is grounding part of my life. I have created a Site that is aimed
              at new surfers looking to go out in the breaks around
              Christchurch. The project was called 'Pegasus Bay Surf' and offers
              information about our different beaches, surfboards, conditions
              and has the template for a forum that surfers can use to keep each
              other posted on the surf.
            </p>
          </div>
        </motion.div>
      </div>
      <div className={style.FinalTwoGrid}>
        <motion.div
          className={style.mainGrid5}
          style={{
            transform: isInView4 ? "none" : "translateX(-700px)",
            opacity: isInView4 ? 1 : 0,
            transition: "all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
        >
          <img className={style.gridImage} src={Guitar} alt="surfboards" />
          <p className={style.gridText}>
            I have a great passion for surfing and being a part of life near the
            ocean. Even being near the ocean when in different conditions is
            grounding part of my life. I have created a Site that is aimed at
            new surfers looking to go out in the breaks around Christchurch. The
            project was called 'Pegasus Bay Surf' and offers information about
            our different beaches, surfboards, conditions and has the template
            for a forum that surfers can use to keep each other posted on the
            surf.
          </p>
        </motion.div>
        <motion.div
          className={style.mainGrid6}
          style={{
            transform: isInView4 ? "none" : "translateX(700px)",
            opacity: isInView4 ? 1 : 0,
            transition: "all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
        >
          <img
            className={style.gridImageCeltic}
            src={SurfboardsTrans}
            alt="egypt"
          />
          <p className={style.gridText}>
            I have a great passion for surfing and being a part of life near the
            ocean. Even being near the ocean when in different conditions is
            grounding part of my life. I have created a Site that is aimed at
            new surfers looking to go out in the breaks around Christchurch. The
            project was called 'Pegasus Bay Surf' and offers information about
            our different beaches, surfboards, conditions and has the template
            for a forum that surfers can use to keep each other posted on the
            surf.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

const TopLayerWallpaper = (props) => {
  return (
    <img className={props.className} src={props.img} alt="top-layer"></img>
  );
};

export default HomeContent;
