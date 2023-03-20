import HeaderImage from "../../utilities/images/celtic-transparent-14.png";
import style from "./header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <img
        className={style.headerImage}
        src={HeaderImage}
        alt="celtic-pattern"
      ></img>
      <h1 className={style.headerTitle}>Portfolio Page</h1>
    </header>
  );
};

export default Header;
