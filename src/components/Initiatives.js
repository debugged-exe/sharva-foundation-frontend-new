import React, { useEffect } from "react";
import "./CSS/initiatives.css";
import gallery_img_4 from "./images/gallery_img_4.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const Initiatives = () => {
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
        <h1 className="intiative-heading carousel-caption">intiative #1 </h1>
      </div>
      <div className="container ">
        <div className="content1 m-5 text-justify px-4">
          Menstruation also known as a period in other terms is the regular
          discharge of blood and mucosal tissue from the inner lining of the
          uterus through the vagina. These are the days when concepts like
          self-esteem develop. Many school going girls avoid going to school
          because of the shame and stigma attached to menstruation. Lack of
          awareness combined with lack of proper sanitation methods add to the
          same.
        </div>
        <section className="section3">
          <div className="section-img">
            <img className=" rounded m-2" src={gallery_img_4} alt="" />
          </div>
          <div className="content3 m-2 p-5">
          Under the campaign #GiveHerConfidence we distribute sanitary pads to thousands of young girls and women and educate them about the physical and emotional changes that they go through during this phase which in turn helps them differentiate between facts and myths around periods, so that they can lead a better life and have the courage to pursue their dreams.
          </div>
        </section>
        <div className="content2 text-yellow m-5 text-justify px-4">
          {" "}
          There are over 355 million menstruating women and girls in India.{" "}
          <br />
          • Out of which 71% of girls report having no knowledge of menstruation
          before their first period. <br />
          • Girls often turn to their mothers for information and support, but
          70% of mothers consider menstruation “dirty,” further perpetuating
          taboos. <br />• Parents rarely prepare their daughters for something
          they know is bound to happen. And this unpreparedness leads to so much
          avoidable fear and anxiety.
        </div>
     
        <section className="intiative-carousel">
          <OwlCarousel
            className=" owl-theme"
            {...options}
            loop
            autoPlay="true"
            margin={65}
          >
            <img className=" rounded m-2" src={gallery_img_4} alt="" />            <img className=" rounded m-2" src={gallery_img_4} alt="" />            <img className=" rounded m-2" src={gallery_img_4} alt="" />            <img className=" rounded m-2" src={gallery_img_4} alt="" />            <img className=" rounded m-2" src={gallery_img_4} alt="" />

          </OwlCarousel>
        </section>
      </div>
    </div>
  );
};

export default Initiatives;
