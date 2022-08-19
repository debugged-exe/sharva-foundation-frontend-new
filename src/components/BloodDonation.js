import React from 'react'
import gallery_img_4 from "./images/gallery_img_4.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const BloodDonation = () => {
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
            <h1 className="intiative-heading carousel-caption">Blood Donation <h4>Gift Of Life!</h4></h1>
          </div>
          <div className="container ">
            <div className="content1 m-5 text-justify px-4">
            Blood is the most precious gift that you can give to others - a gift of life. Sharva Foundation aims to encourage everyone, whoever can, to donate blood and save lives
            </div>
            <section className="section3">
              <div className="section-img">
                <img className=" rounded m-2" src={gallery_img_4} alt="" />
              </div>
              <div className="content3 m-2 p-5">
              Why should you donate blood?
Blood can be stored only for a limited time before use which arises its constant need. So, a regular blood donation by a sufficient number of healthy people is required to ensure that blood will always be available whenever and wherever it is needed. 


              </div>
            </section>
            <div className="content2 text-yellow m-5 text-justify px-4">
              {" "}
              What do we do under this initiative? <br />
●	Blood donation drives across India to ensure availability.  <br />
●	Awareness programs to motivate everyone.  <br />
●	Voluntary involvement from team Sharva to help urgent cases. <br />

Sharva Foundation’s Impact <br />

●	____ cities <br />
●	____ blood donation drives  <br />

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

export default BloodDonation