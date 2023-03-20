import style from "./upperNavBar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";
import NavLinks from "./navLinks";

const UpperNavBar = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <GiHamburgerMenu
      className={style.Hamburger}
      size="1.8rem"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <AiFillCloseCircle
      className={style.Hamburger}
      size="1.8rem"
      onClick={() => setOpen(!open)}
    />
  );
  const closeMobileMenu = () => setOpen(false);

  return (
    <div className={style.upperNavContainer}>
      <div className={style.upperNavItem}>
        <a className={style.upperNavLink} href="www.google.com">
          LinkedIn{" "}
        </a>
        <a className={style.upperNavLink} href="www.google.com">
          CV{" "}
        </a>
        <nav className={style.MobileNavigation} href="www.google.com">
          {" "}
          {open ? closeIcon : hamburgerIcon}
          {open && <NavLinks isMobile={true} closeMobileMenu />}
        </nav>
      </div>
    </div>
  );
};

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
