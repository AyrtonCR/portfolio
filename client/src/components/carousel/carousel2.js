import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from "./carousel2.module.css";
import SurfboardsImage from "../../utilities/images/surfboard-icon.png";
import MusicIcon from "../../utilities/images/vinyl-icon.png";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 2524, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 1250, min: 0 },
    items: 1,
  },
};

const SliderTwo = () => {
  return (
    <Carousel responsive={responsive}>
      <div className={style.mainGrid1}>
        <img
          className={style.gridImage}
          src={SurfboardsImage}
          alt="surfboards"
        />
        <p className={style.projectGridTitle}>Title</p>
        <p className={style.gridText}>text</p>
      </div>
      <div className={style.mainGrid2}>
        {" "}
        <img className={style.gridImage} src={MusicIcon} alt="egypt" />
        <p className={style.projectGridTitle}>Title</p>
        <p className={style.gridText}>Text</p>
      </div>
    </Carousel>
  );
};

export default SliderTwo;
