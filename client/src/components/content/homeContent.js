import style from "./homeContent.module.css";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Slider from "../carousel/carousel";
import SurfboardsImage from "../../utilities/images/surfboard-icon.png";
import Dahab1 from "../../utilities/images/nuewiba-xl.jpeg";
import MusicIcon from "../../utilities/images/vinyl-icon.png";
import Vacation from "../../utilities/images/vacation.png";
import Port from "../../utilities/images/mt.jpeg";
import LakeWP from "../../utilities/images/lake-22.jpeg";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

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
    <>
      <Slider />
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
            src={LakeWP}
          ></motion.img>
          <motion.img
            style={{
              transform: isInView2 && !isInView ? "scale(1.05)" : "none",
              transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1)",
            }}
            className={style.topLayerWallpaper2}
            src={Port}
          ></motion.img>

          <motion.img
            style={{
              transform: isInView3 && !isInView2 ? "scale(1.05)" : "none",
              transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1)",
            }}
            className={style.topLayerWallpaper3}
            src={Dahab1}
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
            <motion.img
              className={style.gridImage}
              src={SurfboardsImage}
              alt="surfboards"
              whileHover={{
                scale: 1.08,
              }}
              transition={{
                rotate: { duration: 0.3 },
                type: "spring",
                stiffness: 400,
                damping: 9,
              }}
            />
            <p className={style.projectGridTitle}>Pegasus Bay Surf</p>
            <p className={style.gridText}>
              I have a great passion for surfing and being a part of life near
              the ocean. This project is aimed at new surfers looking to go out
              in the breaks around Christchurch. <br /> <br /> The project is
              called 'Pegasus Bay Surf' and offers information about our
              different beaches, surfboards, conditions and has the template for
              a forum that surfers can use to keep each other posted on the
              surf. <br /> <br />
              Click
              <a
                className={style.anchorTag}
                target="_blank"
                rel="noreferrer"
                href="https://lsp-client.onrender.com/"
              >
                {" "}
                here{" "}
              </a>
              to view the site.
            </p>
          </motion.div>
          <motion.div
            className={style.mainGrid2}
            style={{
              opacity: isInView2 ? 1 : 0,
              transition: "all 1.4s cubic-bezier(0.17, 0.1, 0.55, 1) 0.5s",
            }}
          >
            {" "}
            <motion.img
              className={style.gridImage}
              src={MusicIcon}
              alt="egypt"
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{ rotate: [0, 360] }}
              transition={{
                rotate: { duration: 0.8 },
                type: "spring",
                stiffness: 400,
                damping: 9,
              }}
            />
            <p className={style.projectGridTitle}>Groovy Tunes Music Player</p>
            <p className={style.gridText}>
              This is a project I am looking to start soon will be a music
              player with some additional functionality added. I am still
              thinking about what features I will add, but it should be built
              with the same technologies (Javascript, Node, CSS, HTML). <br />{" "}
              <br />
              It is possible I will be able to add some of my own music in an
              SQL database that can be played using the music player.
              <br />
              <br /> Click
              <a
                className={style.anchorTag}
                target="_blank"
                rel="noreferrer"
                href="https://lsp-client.onrender.com/"
              >
                {" "}
                here{" "}
              </a>
              to view the site.
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
            <motion.img
              className={style.gridImage}
              src={Vacation}
              alt="tree"
              whileHover={{
                scale: 1.08,
              }}
              transition={{
                rotate: { duration: 0.3 },
                type: "spring",
                stiffness: 400,
                damping: 9,
              }}
            />
            <p className={style.projectGridTitle}>Display Gallery</p>
            <p className={style.gridText}>
              In my younger years I backpacked quite a lot and had a chance to
              experience some really incredible countries. It has been a goal of
              mine to try and capture some of these memories in a way I can
              uniquely display to people. <br /> <br /> This project will be an
              image viewer / library with some additional features that make it
              appealing for a user to navigate. <br /> <br />
              Click
              <a
                className={style.anchorTag}
                target="_blank"
                rel="noreferrer"
                href="https://lsp-client.onrender.com/"
              >
                {" "}
                here{" "}
              </a>
              to view the site.
            </p>
          </motion.div>
        </div>
        <div className={style.AboutMeGrid}>
          <motion.div
            className={style.mainGrid4}
            style={{
              opacity: isInView3 ? 1 : 0,
              transition: "all 2.3s 0.3s",
            }}
          >
            <motion.h4
              className={style.mainGrid4Heading}
              style={{
                transform: isInView3 ? "none" : "translateX(-750px)",
                opacity: isInView3 ? 1 : 0,
                transition: "all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
              }}
            >
              Sinai Sun Tourism
            </motion.h4>
            <motion.p
              className={style.gridTextEgypt}
              style={{
                transform: isInView3 ? "none" : "translateX(-1150px)",
                opacity: isInView3 ? 1 : 0,
                transition: "all 1.9s cubic-bezier(0.17, 0.2, 0.3, 1) 0.3s",
              }}
            >
              This project is a tourism inspired website for a place called
              Dahab in Egypt.
              <br /> <br />
              Dahab is an beautiful small fishing town on the south-east coast
              of the Sinai Peninsula where life is cruisy and slow. <br />{" "}
              <br /> Formerly a fishing village, it is now well known for having
              one of the best diving locations in the world, the incredible
              'Blue Hole'. <br /> <br /> Click{" "}
              <a
                className={style.anchorTag}
                target="_blank"
                rel="noreferrer"
                href="https://lsp-client.onrender.com/"
              >
                {" "}
                here{" "}
              </a>{" "}
              to view the project.
            </motion.p>
          </motion.div>
          {/* </motion.div> */}
        </div>
      </div>
    </>
  );
};

// EXPORT BELOW FUNCTION //
const TopLayerWallpaper = (props) => {
  return (
    <img className={props.className} src={props.img} alt="top-layer"></img>
  );
};

export default HomeContent;
