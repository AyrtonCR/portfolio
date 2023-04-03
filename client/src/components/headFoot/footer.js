import style from "./footer.module.css";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <motion.p
        className={style.footerText}
        initial={{ x: 0, scale: 1 }}
        whileInView={{ x: [0, 6, 0], scale: [1, 1, 1] }}
        transition={{
          delay: 2,
          duration: 0.8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 5,
        }}
      >
        Created by <em className={style.footerName}>Ayrton Campbell</em>
      </motion.p>
    </div>
  );
};

export default Footer;
