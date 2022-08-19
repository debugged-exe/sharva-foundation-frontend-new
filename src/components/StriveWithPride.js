import React from 'react'
import gallery_img_4 from "./images/gallery_img_4.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const StriveWithPride = () => {
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
            <h1 className="intiative-heading carousel-caption">Strive With Pride <h4>Inclusivity FOr All!</h4> </h1>
          </div>
          <div className="container ">
            <div className="content1 m-5 text-justify px-4">
            You, us, and everyone deserve to live with honor, dignity, and equal opportunities to prosper in life. Yet, our society takes a blindfold when it comes to the transgender community. In various parts of our country, transgenders are still viewed differently but the reality is they are just being themselves. Aren’t we all different in some way? 
            </div>
            <section className="section3">
              <div className="section-img">
                <img className=" rounded m-2" src={gallery_img_4} alt="" />
              </div>
              <div className="content3 m-2 p-5">
              Our initiative Strive With Pride helps the transgender community with necessities such as ration, clothes, and blankets. Sharva Foundation’s aim is not to provide only tangible items but to encourage society as a whole to be inclusive of transgenders, who are often excluded from the social landscape . 
              </div>
            </section>
            <div className="content2 text-yellow m-5 text-justify px-4">
              {" "}
        
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

export default StriveWithPride