import style from "./footer.module.css";
import { motion, scroll, useInView } from "framer-motion";
import { Link } from "react-scroll";
import LowerNavBar from "../nav/lowerNavBar";
import { HiArrowUp } from "react-icons/hi";
import { useRef } from "react";

const Footer = () => {
  const footRef = useRef(null);
  const footInView = useInView(footRef);

  return (
    <>
      <div className={style.footerHanger} ref={footRef}></div>

      <motion.div
        className={style.arrowSectionHolder8}
        style={{
          transform: footInView ? "scale(1.1)" : "none",
          opacity: footInView ? 0.9 : 0,
          transition: "all 1.8s cubic-bezier(0.17, 0.35, 0.45, 1) 0.5s",
        }}
      >
        <Link to="scrollHeader" spy={true} smooth={true} offset={-217} duration={2000}>
          <HiArrowUp className={style.sectionArrow} />
        </Link>
      </motion.div>
      <motion.div className={style.footerContainer} id="scrollFooter">
        <motion.p
          className={style.footerText}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <em className={style.footerNameTitle}>Ayrton Campbell</em>
        </motion.p>
        <motion.p
          className={style.footerTextEmail}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          ayrtonfcr@gmail.com
        </motion.p>
        <motion.p
          className={style.footerTextCopyright}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          Copyright © 2023 - Ayrton Campbell
        </motion.p>

        <LowerNavBar />
      </motion.div>
    </>
  );
};

export default Footer;
