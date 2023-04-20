import style from "./footer.module.css";
import { motion } from "framer-motion";
import LowerNavBar from "../nav/lowerNavBar";
const Footer = () => {
  return (
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
  );
};

export default Footer;
