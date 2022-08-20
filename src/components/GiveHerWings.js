import React from "react";
import gallery_img_4 from "./images/gallery_img_4.jpg";
import OwlCarousel from "react-owl-carousel";
import one from "./images/giveherwings/1.jpg";
import two from "./images/giveherwings/2.jpg";
import three from "./images/giveherwings/3.jpg";
import four from "./images/giveherwings/4.jpg";
import five from "./images/giveherwings/5.jpg";
import six from "./images/giveherwings/6.jpg";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const GiveHerWings = () => {
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
      <div className="intiative_background_image">
        <h1 className="intiative-heading carousel-caption">
          Give her wings to fly <h4>A lifelong impact!</h4>
        </h1>
      </div>
      <div className="container ">
        <div className="content1 m-5 text-justify px-4">
          How often do we see girls who can openly share menstrual problems? Not
          often, isn’t it? There is no doubt that conversations around
          menstruation are stigmatized leading to less awareness and
          ever-deteriorating menstrual hygiene. Our initiative Giver Her Wings
          To Fly aims to end the stigma around menstruation with awareness
          programs and sanitary napkin distribution drives to ultimately help
          young girls lead a healthy life.
        </div>
        <section className="section3">
          <div className="section-img">
            <img className=" rounded m-2" src={six} alt="" />
          </div>
          <div className="content3 m-2 p-3">
            Sharva Foundation’s Impact <br />
            ●Distributed 6000+ sanitary pads in Pune & Jammu. <br />
            ●Supported 30 school girls with 3-month, 6-month, and a year-long
            stock of sanitary pads. <br />
            ●Conducted menstrual health awareness sessions in orphanages. <br />
          </div>
        </section>
        <div className="content2 text-yellow m-5 text-justify px-4">
          {" "}
          Menstruation has a lifelong impact, period . <br />
          According to a report by UNESCO , 1 out of 5 Indian school girls skip
          school or drop out of school entirely due to a lack of menstrual
          products and poor sanitation. <br />
          When a girl faces obstacles in healthily managing her menses, she is
          at risk for infection, her self-esteem and self-confidence suffer, she
          may remain absent from school during her period, or worse still, drop
          out of school altogether upon reaching puberty. This negatively
          affects the mental health of young girls over time, preventing them
          from achieving their full potential and having a healthy, productive
          life.
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
            <img className=" rounded m-2" src={two} alt="" />{" "}
            <img className=" rounded m-2" src={four} alt="" />{" "}
            <img className=" rounded m-2" src={five} alt="" />{" "}
            <img className=" rounded m-2" src={three} alt="" />
          </OwlCarousel>
        </section>
      </div>
    </div>
  );
};
export default GiveHerWings;
