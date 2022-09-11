import React,{useEffect} from "react";
import './CSS/initiatives.css';
import one from './images/ppkit.jpg';
import two from './images/gallery_img_11.jpg';
import three from './images/foodforcause/3.jpg';
import four from './images/foodforcause/4.jpg';
import six from './images/foodforcause/6.jpg';
import seven from './images/foodforcause/7.jpg';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const FoodForCause = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
   
  }, []);
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
        COVID-19 Pandemic Relief Campaign
          {/* <h4>Feed Who Need!</h4> */}
        </h1>
      </div>
      <div className="container ">
        <div className="content1 m-5 text-justify px-4">
        <h4>Challenging time for everyone</h4>
          The pandemic hindered everyone's way of life by posing a complete lockdown. The shutdown of the nation forced the daily wage workers to literally walk back to their homes hundreds of km away from areas where they earned their daily bread. Due to the loss of jobs and limited resources to consume, the masses struggled to live through these times. The adverse effect of this scenario will prevail for a long time until everything is brought back to normal, which seems quite a daunting task. 
        </div>
        <section className="section3">
          <div className="section-img">
            <img className=" rounded m-2" src={one} alt="" />
          </div>
          <div className="content3 m-2 p-5">
          The COVID-19 pandemic is one of the worst health and economic crises in modern history and it continues to require the best of humanity to overcome. Our campaign represents similar collective humanitarian efforts to help communities who are adversely affected and deprived of the minimum resources to survive this crisis.

          </div>
        </section>
        <div className="content2  m-5 text-justify px-4">
          {" "} <h4 className="text-yellow ">

          Creating a positive impact
          </h4>
Sharva Foundation’s first-ever event was organized during the crisis to help when society needed it the most. We believe that each one of us is an integral part of our communities. The collective and consistent effort can create a positive impact to tackle and minimize the long-term adversities that the pandemic has bestowed upon us. Let’s help one by one everyone!
<h4 className="text-end text-yellow yexy-justify  ">

Give us a helping hand!
</h4>
If you acknowledge the severe conditions of the most vulnerable, we believe NOW is the time to act.  Your generous help will be given back to communities with the resources to help everyone survive the crisis times and minimize the long-term adverse effects. You can support our other initiatives too which also channelize the resources to those who are affected the most

        </div>

        <section className="intiative-carousel">
          <OwlCarousel
            className=" owl-theme"
            {...options}
            loop
            autoPlay="true"
            margin={65}
          ><div className="food-carousel">
            <img className=" rounded m-2" src={two} alt="" />{" "}

          </div>
          <div className="food-carousel">
            <img className=" rounded m-2" src={three} alt="" />{" "}

          </div>
          <div className="food-carousel">
            <img className=" rounded m-2" src={four} alt="" />{" "}

          </div>
          <div className="food-carousel">

            <img className=" rounded m-2" src={seven} alt="" />{" "}
          </div>
          <div className="food-carousel">

            <img className=" rounded m-2" src={six} alt="" />
          </div>
          </OwlCarousel>
        
        </section>
      </div>
    </div>
  );
};

export default FoodForCause;
