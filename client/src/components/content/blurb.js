import style from "./blurb.module.css";

const Blurb = () => {
  return (
    <div className={style.blurbContainer}>
      <h3 className={style.blurbTitle}>Welcome</h3>
      <p className={style.blurbText}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi quae
        enim optio amet, eveniet ipsa ullam iure ab, neque eius praesentium cum
        harum facere minus, atque et quis accusamus minima?
      </p>
    </div>
  );
};

export default Blurb;
