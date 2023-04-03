import HeaderImage from "../../utilities/images/celtic-transparent-14.png";
import style from "./header.module.css";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import BlackPoly from "../../utilities/images/black-low-poly-geometric.png";
import Blue from "../../utilities/images/blue-turquoise.png";
import { useRef } from "react";

const Header = () => {
  return (
    <motion.header
      className={style.header}
      initial={{ x: 0, y: 0 }}
      animate={{
        scale: [1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1],
        rotate: [0, 0, 180, 180, 180, 180, 0, 0],
        y: [0, 0, 0, 0, 15, 0, 0, 0],
      }}
      transition={{
        x: 0,
        duration: 2,
        delay: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.7, 0.85, 1, 1.2, 1.5],
        repeat: Infinity,
        repeatDelay: 10,
      }}
    >
      <motion.div
        className={style.headerLink}
        to="/"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.3, rotate: [0, 90] }}
        transition={{
          rotate: { duration: 0.3 },
          type: "spring",
          stiffness: 400,
          damping: 9,
        }}
      >
        <motion.img
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5, delay: 0.5 }}
          className={style.headerImage}
          src={HeaderImage}
          alt="celtic-pattern"
        ></motion.img>
      </motion.div>
    </motion.header>
  );
};

export default Header;
