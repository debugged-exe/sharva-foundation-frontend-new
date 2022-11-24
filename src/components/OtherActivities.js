import React, { useEffect } from "react";

import one from "./images/strivewithpride/1.jpg";
import two from "./images/strivewithpride/2.jpg";
import three from "./images/strivewithpride/3.jpg";
import four from "./images/strivewithpride/4.jpg";
import five from "./images/strivewithpride/5.jpg";
import heading from "./images/strivewithpride/headingbackground.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const StriveWithPride = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const styles = {
    backgroundImage: `linear-gradient(to top, #0000006e, #00000077), url(${heading})  `,
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
    <div className="initiatives strivewithpride">
      <div style={styles} className="intiative_background_image">
        <h1 className="intiative-heading  carousel-caption">
          Other Activities <div className="line"></div>{" "}
          <h4>Inclusivity For All!</h4>{" "}
        </h1>
      </div>
      <div className="container ">
        <div className="content1 m-5 fw-semibold text-dark text-justify  px-4">
          Pride events happen year-round around the world. Some are massive
          celebrations. Some are small underground gatherings. Some take place
          with the support of local authorities. Others face a violent backlash.
          What they all have in common is a purpose: fighting for the equality
          of LGBTIQ people everywhere. <br />
          <br />
          #StriveWithPride means celebrating and fighting for safety, freedom,
          dignity and, justice for LGBTQ community everywhere.
        </div>
        <section className="section3">
          <div className="section-img gallery__link gallery__thumb  ">
            <img className=" rounded   gallery__image" src={one} alt="" />
          </div>
          <div className="content3 m-2 text-dark fw-bold p-5">
            Pride is also a time to shine a spotlight on LGBTIQ issues and
            uplift and amplify the lives and contributions of LGBTIQ people.
            Your support during Pride month matters because the queer and trans
            community is one of the most marginalized globally and faces
            persecution, discrimination, and violence around the world. However,
            the movement has made tremendous progress in the last few years and
            organizations are fighting for LGBTIQ rights in most countries.
            <br />
          </div>
        </section>
        {/* <div className="content2 text-black m-5 text-justify px-4">
          {" "}
          <h4 className="mx-3 fw-bolder text-capitalise">
            MAIN OBJECTIV<br />
            <div className="line"></div>
          </h4>{" "}
          <p className="m-3 fw-semibold text-dark">
            Promoting social, political, and equality and campaigning for civil
            and lawful rights of intersex and transgender individuals. Working
            to set up friendly, economic, and environmental equity for
            transsexuals, intersex, and gender non-affirming individuals. Also,
            erode oppression and prohibition dependent on such factors as race,
            nationality, sex, class, religion, legitimate status, age, and
            sexual orientation. To stop discrimination dependent on gender
            identity and guarantee that the whole scope of transgender and
            intersex individuals are ensured.
          </p>
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
        </section> */}
        <section className="col m-5">
          <div className="row">
            <div className="card col p-2 border-0">
              <img src={four} width='350px' className='rounded' alt="error" />
              <p>Face Shield distribution drive in Khadki Cantonment.</p>
            </div>
            <div className="card col p-2 border-0">
              <img src={four} width='350px' className='rounded' alt="error" />
              <p>Face Shield distribution drive in Khadki Cantonment.</p>
            </div>
            <div className="card col p-2 border-0">
              <img src={four} width='350px' className='rounded' alt="error" />
              <p>Face Shield distribution drive in Khadki Cantonment.</p>
            </div>
          </div>
          <div className="row">
            <div className="card col p-2 border-0">
              <img src={four} width='350px' className='rounded' alt="error" />
              <p>Face Shield distribution drive in Khadki Cantonment.</p>
            </div>
            <div className="card col p-2 border-0">
              <img src={four} width='350px' className='rounded' alt="error" />
              <p>Face Shield distribution drive in Khadki Cantonment.</p>
            </div>
            <div className="card col p-2 border-0">
              <img src={four} width='350px' className='rounded' alt="error" />
              <p>Face Shield distribution drive in Khadki Cantonment.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StriveWithPride;
