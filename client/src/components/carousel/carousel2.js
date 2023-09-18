import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from "./carousel2.module.css";
import SurfboardsImage from "../../utilities/images/surfboard-icon.png";
import MusicIcon from "../../utilities/images/vinyl-icon.png";
import MeFace from "../../utilities/images/di-photo-ayrton-blackandwhite.jpg";
import MeFace2 from "../../utilities/images/surfbaw.jpg";

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
    <Carousel className={style.carousel2Container} responsive={responsive}>
      <div className={style.mainGrid1}>
        <img className={style.gridImageMeFace2} src={MeFace} alt="surfboards" />
        <p className={style.projectGridTitle}>Who Am I?</p>
        <p className={style.introText1}>
          I am a Full-stack web developer from Christchurch, NZ. <br />
          <br /> My aim — to consistently create, deliver and maintain high-quality web applications using modern industry standard technologies. I really enjoy
          being a part of building solutions that last. <br />
          <br />I am highly motivated and skilled in working with Front-end, Back-end, Databases and UX Design. Currently I enjoy building with Javascript and
          React due to it's versatility.
          <br />
          <br />
          Look below to see a few of my current projects. &nbsp; &nbsp;
          {/* {removed link from here} */}
        </p>
      </div>
      <div className={style.mainGrid2}>
        {" "}
        <img className={style.gridImageMeFace} src={MeFace2} alt="egypt" />
        <p className={style.projectGridTitle}>About</p>
        <p className={style.introText2}>
          Previously, I worked as an electrician in the commercial construction industry.
          <br /> <br /> In search of a job that was easier on my body I branched out into IT completing a Diploma in Web Development and learning to build
          applications and websites.
          <br />
          <br />
          While I do enjoy web development there are many other things in life that keep me busy. <br /> <br />I am a very keen surfer and also really enjoy
          playing guitar, creating music, and spending time with my friends and family.
        </p>
      </div>
    </Carousel>
  );
};

export default SliderTwo;
