import React from "react";
import AboutUs from "./AboutUs";
import BrandNames from "./BrandNames";
import ContactHome from "./ContactHome";
import Count from "./Count";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./CSS/home.css";
import DonationCard from "./DonationCard";
import Gallery2 from "./Gallery2";
import MerchantDise from "./MerchantDise";
const Home = () => {
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
    <>
      <div className=" d-flex justify-content-center w-100">
        {/* <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"  
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div> */}
    
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div
            className="carousel-item active img-gradient"
            data-bs-interval="5000"
          >
            <div className="img img1"></div>
            <div className="carousel-caption  ">
              <h1>लोका: समस्ता: सुखिनो भवन्तु ।</h1>
              <div className="button m-4">
                <button className="rounded gradient_btn fw-bold px-4 p-2  ">
                  JOIN US NOW
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item  img-gradient" data-bs-interval="5000">
            <div className="img img2"></div>
            <div className="carousel-caption   ">
              <h1>लोका: समस्ता: सुखिनो भवन्तु ।</h1>
              <div className="button m-4">
                <button className="rounded gradient_btn fw-bold px-4 p-2   ">
                  JOIN US NOW
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item img-gradient" data-bs-interval="5000">
            <div className="img img3"></div>
            <div className="carousel-caption ">
              <h1>लोका: समस्ता: सुखिनो भवन्तु ।</h1>
              <div className="button m-4">
                <button className="rounded gradient_btn  border rounded px-4 p-2  ">
                  JOIN US NOW
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item img-gradient" data-bs-interval="5000">
            <div className="img img4"></div>
            <div className="carousel-caption ">
              <h1>लोका: समस्ता: सुखिनो भवन्तु ।</h1>
              <div className="button m-4">
                <button className="rounded gradient_btn  border rounded px-4 p-2  ">
                  JOIN US NOW
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item img-gradient" data-bs-interval="5000">
            <div className="img img5"></div>
            <div className="carousel-caption ">
              <h1>लोका: समस्ता: सुखिनो भवन्तु ।</h1>
              <div className="button m-4">
                <button className="rounded gradient_btn  border rounded px-4 p-2  ">
                  JOIN US NOW
                </button>
              </div>
            </div>
          </div>
         
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* <OwlCarousel
          className="carousel-inner home-carousel "
         items={1}
          loop
          autoPlay="true"
          margin={0}
        >
          <div
            className="carousel-item active img-gradient"
            data-bs-interval="5000"
          >
            <div className="img img1"></div>
            <div className="carousel-caption  ">
              <h1>लोका: समस्ता: सुखिनो भवन्तु ।</h1>
              <div className="button m-4">
                <button className="rounded gradient_btn fw-bold px-4 p-2  ">
                  JOIN US NOW
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item  img-gradient" data-bs-interval="5000">
            <div className="img img2"></div>
            <div className="carousel-caption   ">
              <h1>लोका: समस्ता: सुखिनो भवन्तु ।</h1>
              <div className="button m-4">
                <button className="rounded gradient_btn fw-bold px-4 p-2   ">
                  JOIN US NOW
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item img-gradient" data-bs-interval="5000">
            <div className="img img3"></div>
            <div className="carousel-caption ">
              <h1>लोका: समस्ता: सुखिनो भवन्तु ।</h1>
              <div className="button m-4">
                <button className="rounded gradient_btn  border rounded px-4 p-2  ">
                  JOIN US NOW
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item img-gradient" data-bs-interval="5000">
            <div className="img img4"></div>
            <div className="carousel-caption ">
              <h1>लोका: समस्ता: सुखिनो भवन्तु ।</h1>
              <div className="button m-4">
                <button className="rounded gradient_btn  border rounded px-4 p-2  ">
                  JOIN US NOW
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item img-gradient" data-bs-interval="5000">
            <div className="img img5"></div>
            <div className="carousel-caption ">
              <h1>लोका: समस्ता: सुखिनो भवन्तु ।</h1>
              <div className="button m-4">
                <button className="rounded gradient_btn  border rounded px-4 p-2  ">
                  JOIN US NOW
                </button>
              </div>
            </div>
          </div>
        </OwlCarousel> */}
      </div>
      <Count />
      <DonationCard />
      <BrandNames />
      <Gallery2 />
      <AboutUs />
      <MerchantDise />
      {/* <ContactHome/> */}
    </>
  );
};

export default Home;
