import { motion } from "framer-motion";
import style from "./upperNavBar.module.css";

const NavLinks = (props) => {
  const animateFrom = { opacity: 0, y: -20 };
  const animateTo = { opacity: 1, y: 0 };
  return (
    <div className={style.NavBar}>
      <nav className={style.header}>
        <div className={style.navbarContainer}>
          <ul className={style.nav}>
            <a
              className={style.navLink}
              href="https://www.google.com"
              onClick={() => props.isMobile && props.closeMobileMenu()}
            >
              <strong> Local Surf Project</strong>
            </a>
            <a
              className={style.navLink}
              href="https://www.google.com"
              onClick={() => props.isMobile && props.closeMobileMenu()}
            >
              <strong className={style.strongNav}>
                Machine Learning Project
              </strong>
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavLinks;
