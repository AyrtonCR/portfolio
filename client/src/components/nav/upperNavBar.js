import style from "./upperNavBar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState, useEffect, useRef } from "react";
import User from "../../utilities/images/celtic1.webp";
import Portrait from "../../utilities/images/goat.png";

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
    <div className="upperNavContainer" ref={menuRef}>
      <div
        className="menuTrigger"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <h4>OPEN</h4>
      </div>
      <div className="upperNavLinksContainer">
        <div className={`dropdownMenu ${open ? "active" : "inactive"}`}>
          <h3>
            Look at this
            <br />
            <span>Stuff</span>
          </h3>
          <ul>
            <DropdownItem img={User} text={"Local Surf Project"} />
            <DropdownItem img={User} text={"Portfolio Project"} />
            <DropdownItem img={User} text={"Other Project"} />
            <DropdownItem img={User} text={"Another one"} />
          </ul>
        </div>
        <div>
          <h3>LinkedIn</h3>
        </div>
        <div>
          <h3>LinkedIn</h3>
        </div>
      </div>
    </div>
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

{
  /* <nav className={styles.MobileNavigation}>
  {open ? closeIcon : hamburgerIcon}
  {open && <NavLinks isMobile={true} closeMobileMenu />}
  <Link to="/" className={styles.headerTitle} element={<Main />}>
    <img src={Logo} alt="surfboard_logo" className={styles.mobileLogo}></img>
  </Link>
</nav>; */
}

// <a className={style.upperNavLink} href="www.google.com">
// LinkedIn{" "}
// </a>
// <a className={style.upperNavLink} href="www.google.com">
// CV{" "}
// </a>
