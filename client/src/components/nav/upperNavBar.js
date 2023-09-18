import "./upperNavBar.css";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";
import { Link } from "react-scroll";

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
          <h3 className="upperOpenMenuTitle">
            <IoIosArrowDropdown className="dropdownDown" />
            <IoIosArrowDropleft className="dropdownLeft" /> &nbsp; Projects
          </h3>
        </div>

        <div className={`upperDropdownMenu ${open ? "active" : "inactive"}`}>
          <ul className="upperDropdownUl">
            <DropdownItem text={"Pegasus Bay Surf"} href="https://github.com/AyrtonCR/lsp" />

            <DropdownItem text={"Groovy Tunes"} href="https://github.com/AyrtonCR/groovy-tunes-mp" />
            <DropdownItem text={"Sinai Sun Tourism"} href="https://github.com/AyrtonCR/sinai-travel" />
            <DropdownItem text={"Portfolio Project"} href="https://github.com/AyrtonCR/portfolio" />
            <DropdownItem text={"Display Gallery"} href="https://github.com/AyrtonCR/image-gallery" />
          </ul>
        </div>
      </div>

      <div className="upperNavSingleLink">
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ayrton-campbell/" className="upperNavSingleLinkText">
          LinkedIn
        </a>
      </div>
      <div className="upperNavSingleLink">
        <a target="_blank" rel="noreferrer" href="https://www.google.com" className="upperNavSingleLinkText">
          CV
        </a>
      </div>
      <div className="upperNavSingleLink">
        <Link to="scrollIntro" spy={true} smooth={true} offset={-145} duration={1000} className="upperNavSingleLinkText">
          About
        </Link>
      </div>
    </motion.div>
  );
};

function DropdownItem(props) {
  return (
    <li className="upperDropdownItem">
      <img src={props.img}></img>
      <a href={props.href} className="upperDropdownText" target="_blank" rel="noreferrer">
        {" "}
        {props.text}
      </a>
    </li>
  );
}
export default UpperNavBar;
