import style from "./blurb.module.css";
import { motion } from "framer-motion";
import { useRef } from "react";

const Blurb = () => {
  const constraintsRef = useRef(null);
  const bgRef = useRef(null);

  return (
    <div ref={constraintsRef} className={style.blurbContainer}>
      <motion.h3
        drag
        dragConstraints={constraintsRef}
        whileInView={{ x: 0, y: 0, scale: 1 }}
        whileHover={{
          scale: 1.15,
          transition: { duration: 0.3 },
        }}
        className={style.blurbTitle}
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.2, 1],
          scale: [1, 1, 1],
          y: [0, 10, 0],
        }}
        transition={{
          opacity: { duration: 1.7, delay: 1 },
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
    </div>
  );
};

export default Blurb;
