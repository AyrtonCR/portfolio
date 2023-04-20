import style from "./blurb.module.css";
import { motion } from "framer-motion";
import { useRef } from "react";
import { HiArrowDown } from "react-icons/hi";
import { Link } from "react-scroll";
const Blurb = () => {
  const constraintsRef = useRef(null);
  const bgRef = useRef(null);

  return (
    <>
      <motion.div
        ref={constraintsRef}
        id="scrollHeader"
        className={style.blurbContainer}
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.015, 1] }}
        transition={{
          duration: 0.8,
          delay: 4,
          repeatDelay: 11.2,
          repeat: Infinity,
        }}
      >
        <motion.h3
          drag
          dragConstraints={constraintsRef}
          whileInView={{ x: 0, y: 0, scale: 1 }}
          whileHover={{
            scale: 1.15,
            transition: { duration: 0.3 },
          }}
          className={style.blurbTitle}
          initial={{ opacity: 0, scale: 1 }}
          animate={{
            opacity: [0, 0.2, 1],
          }}
          transition={{
            opacity: { duration: 1.7, delay: 1 },
          }}
        >
          Ayrton Campbell
        </motion.h3>
        <motion.h4
          drag
          dragConstraints={constraintsRef}
          whileInView={{ x: 0, y: 0, scale: 1 }}
          whileHover={{
            scale: 1.15,
            transition: { duration: 0.3 },
          }}
          className={style.blurbText}
          initial={{ opacity: 0, x: 0 }}
          animate={{
            opacity: [0, 0.2, 1],
            scale: [1, 1, 1],
            y: [0, 10, 0],
          }}
          transition={{
            opacity: { duration: 1.7, delay: 1.4 },
            scale: {
              times: [0, 0.6, 1.2],
              y: {
                times: [0, 0.7, 1.2],
                type: "spring",
                stiffness: 400,
                damping: 29,
                repeatDelay: 5,
                repeat: Infinity,
              },
            },
          }}
        >
          Web Developer{" "}
        </motion.h4>
      </motion.div>
      <motion.div className={style.arrowSectionHolder}>
        <Link
          to="scrollIntro"
          spy={true}
          smooth={true}
          offset={-150}
          duration={1000}
        >
          {" "}
          <HiArrowDown className={style.sectionArrow} />
        </Link>
      </motion.div>
    </>
  );
};

export default Blurb;
