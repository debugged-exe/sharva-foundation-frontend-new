import React,{useEffect} from "react";
import './CSS/initiatives.css';
import one from './images/projectruya/1.jpg';
import two from './images/projectruya/2.jpg';
import three from './images/projectruya/3.jpg';
import four from './images/projectruya/4.jpg';
// import six from './images/projectruya/6.jpg';
// import seven from './images/projectruya/7.jpg';
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
       Project Ruya
          <h4>Feed Who Need!</h4>
        </h1>
      </div>
      <div className="container ">
        <div className="content1 m-5 text-justify px-4">
        This continuous search for scribes for every exam season, be it competitive exams, academic exams like model tests, semester exams and so on it's a huge strain on the students' psyche and affects their overall performance. Students have to deal with a lot of uncertainties starting from availability of good scribes, their on time presence at exam and the level of expertise a scribe has in being able to assist the student appropriately.
        </div>
        <section className="section3">
          <div className="section-img">
            <img className=" rounded m-2" src={four} alt="" />
          </div>
          <div className="content3 m-2 fw-semibold p-5">
          People with disabilities in general lack the social capacity to search for eligible scribes and more often even the scribes who have been scheduled to appear may not turn up at the last moment. The unavailability of scribes, mostly written off as a minor inconvenience, can actually be a deal breaker for many aspiring visually impaired students and exam candidates. There is also a need for proper rapport and communication between the student and the scribe which if lacking can affect the student’s performance.     When The many attempts to get a proper scribe is in itself a big challenge, many visually impaired students get discouraged to continue their studies and may also drop out of exams given the inconveniences caused. projectruya

          </div>
        </section>
        <div className="content2  fw-semibol m-5 text-justify px-4">
          {" "}
     <br />

At Lit the Light, we understand the plight of our visually challenged students and have been trying our best to assist our students in their search for reliable scribes. We have been arranging scribes and reading assistance to students ever since our inception. Every year we manage to satisfy more than 5000 scribe requests for a varied range of exams like semester exams, model exams, online and offline competitive exams for bank jobs and government jobs and so on. Our Health & Family Welfare department reports that the prevalence of blindness is 4 per 1000 population just in the state of Tamil Nadu that could count to thousands of visually impaired students and aspirants who are in need of quality scribe assistance every year. <br />

Our visually impaired brethren are no less capable to perform like the rest of us. Giving them the equal opportunity they deserve can help them realise their potential and perform their best. Let us join hands to make scribing easy and more accessible so every visually impaired student studies well without the added stress of having to search for a scribe for every exam they take.
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
            <img className=" rounded m-2" src={two} alt="" />{" "}

          </div>
          <div className="food-carousel">

            <img className=" rounded m-2" src={three} alt="" />{" "}
          </div>
          <div className="food-carousel">

            <img className=" rounded m-2" src={one} alt="" />
          </div>
          </OwlCarousel>
        
        </section>
      </div>
    </div>
  );
};

export default FoodForCause;
