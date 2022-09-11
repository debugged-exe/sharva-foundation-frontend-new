import React, { useEffect } from "react";

import OwlCarousel from "react-owl-carousel";
import one from "./images/projectgreen/1.jpg";
import two from "./images/projectgreen/2.jpg";
import three from "./images/projectgreen/3.jpg";
import four from "./images/projectgreen/4.jpg";
import five from "./images/projectgreen/5.jpg";
import six from "./images/projectgreen/6.jpg";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const ProjectGreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const styles = {
    backgroundImage: `linear-gradient(to top, #0000006e, #00000077), url(${five})  `,
  };
  const options = {
    margin: 30,
    responsiveClass: true,

    dots: true,
    autoplay: false,

    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <div className="initiatives">
      <div style={styles} className="intiative_background_image">
        <h1 className="intiative-heading carousel-caption">
          Project Green <h4>Preserving environment for future generations!</h4>{" "}
        </h1>
      </div>
      <div className="container ">
        <div className="content1 m-5 text-justify px-4">
        Plant and donate trees to make your city green, gift livelihood to farmers and save the environment & wildlife. Our vision is to build a green future for our future generations, provide them with a hospitable environment, and to set them free to breathe in a clean air by saving Mother Nature and planting more trees. Not forgetting to give back to mother earth, we conduct a Plantation drive. An environment without trees is a threat to a healthy atmosphere. Through indiscriminate felling of trees, mankind has invited its own destruction.

To recover the lost balance in ecology, tree plantation has no alternative. In Amuratha Bindu organization increase in the, tree plantation drive is being organized and successfully implemented.  
        </div>
        <section className="section3">
          <div className="section-img">
            <img className=" rounded m-2" src={four} alt="" />
          </div>
          <div className="content3 m-2 p-5">
            Sharva Foundation’s Impact <br />
            ● 6 cities <br />
            ● 10+ plantation drives <br />
            ● 500+ trees planted <br />
          </div>
        </section>
        <div className="content2 text-yellow m-5 text-justify px-4">
          {" "}
          Project Green is a collective effort for planting trees, collecting
          and dumping waste, or even doing the slightest of things that will
          make our surroundings a little more pleasant. We constantly conduct
          awareness programs and drives for plantations and cleanliness across
          India.
        </div>

        <section className="intiative-carousel">
          <OwlCarousel
            className=" owl-theme"
            {...options}
            loop
            autoPlay="true"
            margin={65}
          >
            <img className=" rounded m-2" src={one} alt="" />{" "}
            <img className=" rounded m-2" src={three} alt="" />{" "}
            <img className=" rounded m-2" src={two} alt="" />{" "}
 
            <img className=" rounded m-2" src={six} alt="" />
          </OwlCarousel>
        </section>
      </div>
    </div>
  );
};

export default ProjectGreen;
