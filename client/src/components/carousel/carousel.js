import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from "./carouselstyle.module.css";
import SurfboardsImage from "../../utilities/images/surfboard-icon.png";
import Egypt from "../../utilities/images/egypt.png";
import MusicIcon from "../../utilities/images/vinyl-icon.png";
import Vacation from "../../utilities/images/vacation.png";

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

const Slider = () => {
  return (
    <Carousel responsive={responsive}>
      <div className={style.mainGrid1}>
        <img
          className={style.gridImage}
          src={SurfboardsImage}
          alt="surfboards"
        />
        <p className={style.projectGridTitle}>Pegasus Bay Surf</p>
        <p className={style.gridText}>
          I have a great passion for surfing and being a part of life near the
          ocean. This project is aimed at new surfers looking to go out in the
          breaks around Christchurch. <br /> <br /> The project is called
          'Pegasus Bay Surf' and offers information about our different beaches,
          surfboards, conditions and has the template for a forum that surfers
          can use to keep each other posted on the surf. <br /> <br />
          Click
          <a
            className={style.anchorTag}
            target="_blank"
            rel="noreferrer"
            href="https://lsp-client.onrender.com/"
          >
            {" "}
            here{" "}
          </a>
          to view the site.
        </p>
      </div>
      <div className={style.mainGrid2}>
        {" "}
        <img className={style.gridImage} src={MusicIcon} alt="egypt" />
        <p className={style.projectGridTitle}>Groovy Tunes Music Player</p>
        <p className={style.gridText}>
          This is a project I am looking to start soon will be a music player
          with some additional functionality added. I am still thinking about
          what features I will add, but it should be built with the same
          technologies (Javascript, Node, CSS, HTML). <br /> <br />
          It is possible I will be able to add some of my own music in an SQL
          database that can be played using the music player.
          <br />
          <br /> Click
          <a
            className={style.anchorTag}
            target="_blank"
            rel="noreferrer"
            href="https://lsp-client.onrender.com/"
          >
            {" "}
            here{" "}
          </a>
          to view the site.
        </p>
      </div>
      <div className={style.mainGrid3}>
        <img className={style.gridImage} src={Vacation} alt="tree" />
        <p className={style.projectGridTitle}>Display Gallery</p>
        <p className={style.gridText}>
          In my younger years I backpacked quite a lot and had a chance to
          experience some really incredible countries. It has been a goal of
          mine to try and capture some of these memories in a way I can uniquely
          display to people. <br /> <br /> This project will be an image viewer
          / library with some additional features that make it appealing for a
          user to navigate. <br /> <br />
          Click
          <a
            className={style.anchorTag}
            target="_blank"
            rel="noreferrer"
            href="https://lsp-client.onrender.com/"
          >
            {" "}
            here{" "}
          </a>
          to view the site.
        </p>
      </div>
      <div className={style.mainGrid3}>
        <img className={style.gridImage} src={Egypt} alt="tree" />
        <h4 className={style.projectGridTitle}>Sinai Sun Tourism</h4>
        <p className={style.gridText}>
          This project is a tourism inspired website for a place called Dahab in
          Egypt.
          <br /> <br />
          Dahab is an beautiful small fishing town on the south-east coast of
          the Sinai Peninsula where life is cruisy and slow. <br /> <br />{" "}
          Formerly a fishing village, it is now well known for having one of the
          best diving locations in the world, the incredible 'Blue Hole'. <br />{" "}
          <br /> Click{" "}
          <a
            className={style.anchorTag}
            target="_blank"
            rel="noreferrer"
            href="https://lsp-client.onrender.com/"
          >
            {" "}
            here{" "}
          </a>{" "}
          to view the project.
        </p>
      </div>
    </Carousel>
  );
};

export default Slider;
