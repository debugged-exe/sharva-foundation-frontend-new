import React from "react";
import gallery_img_4 from "./images/gallery_img_4.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const FoodForCause = () => {
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
          Food For Cause
          <h4>Feed Who Need!</h4>
        </h1>
      </div>
      <div className="container ">
        <div className="content1 m-5 text-justify px-4">
          Sharva Foundation’s pursuit of a society where people are not deprived
          of the basic necessities such as food is the motivation behind the
          initiative. Food For Cause is a continuous effort to feed the needy
          with healthy meals.
        </div>
        <section className="section3">
          <div className="section-img">
            <img className=" rounded m-2" src={gallery_img_4} alt="" />
          </div>
          <div className="content3 m-2 p-5">
          Sharva Foundation’s Impact <br />
A thankyou smile that draws on the face of everyone who collects food is priceless and keeps us on our toes to feed more and more people. Till now we have: <br />

●	6____  cities, <br />
●	50100+ food distribution drives, <br />
●	1500010000+ food meals delivered. <br />

          </div>
        </section>
        <div className="content2 text-yellow m-5 text-justify px-4">
          {" "}
          How do we do this? <br />
          ● how many people require food, <br />
          ● a convenient spot in the locality to gather people for swift distribution.
        </div>

        <section className="intiative-carousel">
          <OwlCarousel
            className=" owl-theme"
            {...options}
            loop
            autoPlay="true"
            margin={65}
          >
            <img className=" rounded m-2" src={gallery_img_4} alt="" />{" "}
            <img className=" rounded m-2" src={gallery_img_4} alt="" />{" "}
            <img className=" rounded m-2" src={gallery_img_4} alt="" />{" "}
            <img className=" rounded m-2" src={gallery_img_4} alt="" />{" "}
            <img className=" rounded m-2" src={gallery_img_4} alt="" />
          </OwlCarousel>
        
        </section>
      </div>
    </div>
  );
};

export default FoodForCause;
