import style from "./upperNavBar.css";

import { useState, useEffect, useRef } from "react";
import User from "../../utilities/images/celtic1.webp";
import { motion } from "framer-motion";
import { IoIosArrowDropdown } from "react-icons/io";

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
      className="upperNavContainer"
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
      <div className="upperNavLinksContainer">
        <div
          className="menuTrigger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <h3 className="openMenuTitle">
            Projects <IoIosArrowDropdown />
          </h3>
        </div>

        <div className={`dropdownMenu ${open ? "active" : "inactive"}`}>
          <ul className="dropdownUl">
            <DropdownItem img={User} text={"Local Surf Project"} />
            <DropdownItem img={User} text={"Portfolio Project"} />
            <DropdownItem img={User} text={"Other Project"} />
            <DropdownItem img={User} text={"Another one"} />
          </ul>
        </div>
      </div>

      <div class="upperNavSingleLink">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/ayrton-campbell/"
          class="upperNavSingleLinkText"
        >
          LinkedIn
        </a>
      </div>
      <div class="upperNavSingleLink">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.google.com"
          class="upperNavSingleLinkText"
        >
          CV
        </a>
      </div>
    </motion.div>
  );
};
function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      <img src={props.img}></img>
      <a> {props.text}</a>
    </li>
  );
}
export default UpperNavBar;
