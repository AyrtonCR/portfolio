import style from "./lowerNavBar.css";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import { Link } from "react-scroll";
import { HiArrowUp } from "react-icons/hi";

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
    <>
      <motion.div
        className="lowerNavContainer"
        ref={menuRef}
        id="scrollFooter"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: [0, 0.2, 1], y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 0.8,
          delay: 0.5,
        }}
      >
        <div className="lowerNavSingleLink">
          <Link
            className="lowerNavSingleLinkText"
            to="scrollHeader"
            spy={true}
            smooth={true}
            offset={-280}
            duration={1000}
          >
            Home
          </Link>
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

        <div className="lowerNavSingleLink">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/ayrton-campbell/"
            className="lowerNavSingleLinkText"
          >
            LinkedIn
          </a>
        </div>

        <div className="lowerNavSingleLink">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com"
            className="lowerNavSingleLinkText"
          >
            CV
          </a>
        </div>
        <div className="lowerNavSingleLink">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/AyrtonCR"
            className="lowerNavSingleLinkText"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </>
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
