import style from "./lowerNavBar.module.css";

const LowerNavBar = () => {
  return (
    <div className={style.lowerNavContainer}>
      <div className={style.lowerNavItem}>
        <a className={style.lowerNavLink} href="www.google.com">
          Link 1
        </a>
        <a className={style.lowerNavLink} href="www.google.com">
          Link 2
        </a>
        <a className={style.lowerNavLink} href="www.google.com">
          Link 3
        </a>
      </div>
    </div>
  );
};

export default LowerNavBar;
