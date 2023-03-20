import style from "./footer.module.css";

const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <p className={style.footerText}>
        Created by <em className={style.footerName}>Ayrton Campbell</em>
      </p>
    </div>
  );
};

export default Footer;
