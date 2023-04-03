import style from "./homeContent.module.css";
import TreeImage from "../../utilities/images/tree.png";
import GoatImage from "../../utilities/images/goat.png";
import BeachImage from "../../utilities/images/beach.png";
import Celtic from "../../utilities/images/celtic1.webp";
import SurfboardsImage from "../../utilities/images/surfboards.png";
import EgyptImage from "../../utilities/images/egypt.png";

const HomeContent = () => {
  return (
    <div className={style.mainGrid}>
      <div className={style.mainGrid1}>
        <img
          className={style.gridImage}
          src={SurfboardsImage}
          alt="surfboards"
        />
        <p className={style.gridText}>
          I have a great passion for surfing and being a part of life near the
          ocean. Even being near the ocean when in different conditions is
          grounding part of my life. I have created a Site that is aimed at new
          surfers looking to go out in the breaks around Christchurch. The
          project was called 'Pegasus Bay Surf' and offers information about our
          different beaches, surfboards, conditions and has the template for a
          forum that surfers can use to keep each other posted on the surf.
        </p>
      </div>
      <div className={style.mainGrid2}>
        {" "}
        <p className={style.gridText}>
          I have a great passion for surfing and being a part of life near the
          ocean. Even being near the ocean when in different conditions is
          grounding part of my life. I have created a Site that is aimed at new
          surfers looking to go out in the breaks around Christchurch. The
          project was called 'Pegasus Bay Surf' and offers information about our
          different beaches, surfboards, conditions and has the template for a
          forum that surfers can use to keep each other posted on the surf.
        </p>
        <img className={style.gridImage} src={EgyptImage} alt="egypt" />
      </div>
      <div className={style.mainGrid3}>
        <img className={style.gridImage} src={TreeImage} alt="tree" />
        <p className={style.gridText}>
          I have a great passion for surfing and being a part of life near the
          ocean. Even being near the ocean when in different conditions is
          grounding part of my life. I have created a Site that is aimed at new
          surfers looking to go out in the breaks around Christchurch. The
          project was called 'Pegasus Bay Surf' and offers information about our
          different beaches, surfboards, conditions and has the template for a
          forum that surfers can use to keep each other posted on the surf.
        </p>
      </div>
      <div className={style.mainGrid4}>
        <p className={style.gridText}>
          I have a great passion for surfing and being a part of life near the
          ocean. Even being near the ocean when in different conditions is
          grounding part of my life. I have created a Site that is aimed at new
          surfers looking to go out in the breaks around Christchurch. The
          project was called 'Pegasus Bay Surf' and offers information about our
          different beaches, surfboards, conditions and has the template for a
          forum that surfers can use to keep each other posted on the surf.
        </p>
        <img className={style.gridImage} src={GoatImage} alt="egypt" />
      </div>
      <div className={style.mainGrid5}>
        <img className={style.gridImage} src={BeachImage} alt="surfboards" />
        <p className={style.gridText}>
          I have a great passion for surfing and being a part of life near the
          ocean. Even being near the ocean when in different conditions is
          grounding part of my life. I have created a Site that is aimed at new
          surfers looking to go out in the breaks around Christchurch. The
          project was called 'Pegasus Bay Surf' and offers information about our
          different beaches, surfboards, conditions and has the template for a
          forum that surfers can use to keep each other posted on the surf.
        </p>
      </div>
      <div className={style.mainGrid6}>
        <p className={style.gridText}>
          I have a great passion for surfing and being a part of life near the
          ocean. Even being near the ocean when in different conditions is
          grounding part of my life. I have created a Site that is aimed at new
          surfers looking to go out in the breaks around Christchurch. The
          project was called 'Pegasus Bay Surf' and offers information about our
          different beaches, surfboards, conditions and has the template for a
          forum that surfers can use to keep each other posted on the surf.
        </p>
        <img className={style.gridImageCeltic} src={Celtic} alt="egypt" />
      </div>
    </div>
  );
};

export default HomeContent;
