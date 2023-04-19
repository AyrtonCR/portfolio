import style from "./lowerNavBar.css";

import { useState, useEffect, useRef } from "react";
import User from "../../utilities/images/celtic1.webp";
import { motion } from "framer-motion";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";

const UpperNavBar = () => {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);
  });
  return (
    <motion.div
      className="lowerNavContainer"
      ref={menuRef}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: [0, 0.2, 1], scale: [1, 1, 1], y: [0, 5, 0] }}
      transition={{
        opacity: { duration: 1.7, delay: 0.7 },
        scale: { duration: 1.2, delay: 0.7 },
        duration: 0.5,
        delay: 3.5,
        times: [0, 0.7, 1.2],
        repeatDelay: 11.5,
        repeat: Infinity,
      }}
    >
      <div class="lowerNavSingleLink">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/ayrton-campbell/"
          class="lowerNavSingleLinkText"
        >
          Home
        </a>
      </div>
      <div className="lowerNavLinksContainer">
        <div
          className="menuTrigger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <h3 className="openMenuTitle">
            Projects &nbsp; <IoIosArrowDropup />
          </h3>
        </div>

        <div className={`dropdownMenu ${open ? "active" : "inactive"}`}>
          <ul className="upperDropdownUl">
            <DropdownItem
              text={"Pegasus Bay Surf"}
              href="https://github.com/AyrtonCR/lsp"
            />

            <DropdownItem text={"Groovy Tunes"} />
            <DropdownItem text={"Sinai Sun Tourism"} />
            <DropdownItem text={"Display Gallery"} />
            <DropdownItem
              text={"Portfolio Project"}
              href="https://github.com/AyrtonCR/portfolio"
            />
          </ul>
        </div>
      </div>

      <div class="lowerNavSingleLink">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/ayrton-campbell/"
          class="lowerNavSingleLinkText"
        >
          LinkedIn
        </a>
      </div>

      <div class="lowerNavSingleLink">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.google.com"
          class="lowerNavSingleLinkText"
        >
          CV
        </a>
      </div>
      <div class="lowerNavSingleLink">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/AyrtonCR"
          class="lowerNavSingleLinkText"
        >
          GitHub
        </a>
      </div>
    </motion.div>
  );
};
function DropdownItem(props) {
  return (
    <li className="upperDropdownItem">
      <img src={props.img}></img>
      <a
        href={props.href}
        className="upperDropdownText"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        {props.text}
      </a>
    </li>
  );
}
export default UpperNavBar;
