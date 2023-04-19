import style from "./footer.module.css";
import { motion } from "framer-motion";
import LowerNavBar from "../nav/lowerNavBar";
const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <motion.p
        className={style.footerText}
        initial={{ x: 0, scale: 1 }}
        whileInView={{ y: [0, -3, 0], scale: [1, 1, 1] }}
        transition={{
          delay: 2,
          duration: 0.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 5,
        }}
      >
        <em className={style.footerNameTitle}>Ayrton Campbell</em>
      </motion.p>
      <p className={style.footerTextEmail}>ayrtonfcr@gmail.com</p>
      <p className={style.footerTextCopyright}>
        Copyright © 2023 - Ayrton Campbell.
      </p>

      <LowerNavBar />
    </div>
  );
};

export default Footer;
