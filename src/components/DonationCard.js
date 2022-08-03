import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import donation_card_1 from "./images/donation_card_2.jpg";
import donation_card_2 from "./images/donation_card_2.jpg";
import donation_card_3 from "./images/donation_card_3.jpg";
import donation_card_4 from "./images/donation_card_4.jpg";
import donation_card_5 from "./images/donation_card_5.png";
import donation_card_6 from "./images/animal.jpg";

import "react-multi-carousel/lib/styles.css";

const DonationCard = (props) => {
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
    <div className=" donation_background  ">
      <div className="gradient_for_donation_card">
        <h1 className="text-yellow ">Our Recent Causes to Serve Better</h1>
        <div className="line"></div>
        <div className="title text-white ">
          Making society a better place to live in is neither a one-day task nor
          an individual’s job. Well, it is not impossible too but we, Sharva
          Foundation, need all the resources that we can garner to continue our
          constant efforts. The ongoing projects reflect our commitment towards
          the causes that need urgent or intense efforts. Give us a helping hand
          to make a real impact in the real world!
        </div>

        <OwlCarousel
          className="container owl-theme"
          {...options}
          loop
          autoPlay={true}
          margin={55}
        >
          <div className="card bg-transparent">
            <img
              src={donation_card_1}
              className="card-img-top rounded"
             alt="error"
            />
            <div className="card-body">
              <h5 className="card-title text-white"> Rupees 1 Campaign</h5>
              <p className="card-text text-white">
                Have you ever heard of the proverb "little drops make the mighty
                ocean"? we believe that if evn only one rupee contribution is
                made by a large mass , it can help us to proactively offer help
                for any caouse or tragedies due to an uncalled situation
              </p>
            </div>
            <button className="rounded gradient_btn  btn button text-white">
              DONATE NOW
            </button>
          </div>
          <div className="card bg-transparent">
            <img
              src={donation_card_2}
              className="card-img-top rounded"
             alt="error"
            />
            <div className="card-body">
              <h5 className="card-title text-white"> Strive With Pride</h5>
              <p className="card-text text-white">
                Our intiatives helps the transgender community with basic
                necessities. Sharva Foundation's aim is not to provide only
                tangible items but to encourage society as a whole to be
                inclusive of transgenders, who are ofter excluded from the
                social landscape
              </p>
            </div>
            <button className="rounded gradient_btn  btn button text-white">
              DONATE NOW
            </button>
          </div>
          <div className="card bg-transparent">
            <img
              src={donation_card_3}
              className="card-img-top rounded"
             alt="error"
            />
            <div className="card-body">
              <h5 className="card-title text-white"> As Free As a Bird</h5>
              <p className="card-text text-white">
                Mensturation is a biological process and females , from puberty
                till menopause , have no control over it. With this initiative,
                we provide thress months, six months, or a yearly stock of
                sanitary napkins to girls who struggle to maintain mensturation
                hygiene due to financial challenges or less awareness
              </p>
            </div>
            <button className="rounded gradient_btn  btn button text-white">
              DONATE NOW
            </button>
          </div>
          <div className="card bg-transparent">
            <img
              src={donation_card_4}
              className="card-img-top rounded"
             alt="error"
            />
            <div className="card-body">
              <h5 className="card-title text-white"> Food For Cause</h5>
              <p className="card-text text-white">
                Food is teh most basic necessity and still, a large population
                sleeps hungry and wakes up malnutrition. Since the inception of
                this campaign, our voluenteers have completed 100+ food drives
                where we served cooded and packed meals to the needy.
              </p>
            </div>
            <button className="rounded gradient_btn  btn button text-white">
              DONATE NOW
            </button>
          </div>
          <div className="card bg-transparent">
            <img
              src={donation_card_5}
              className="card-img-top rounded"
             alt="error"
            />
            <div className="card-body">
              <h5 className="card-title text-white"> Give her Wings To Fly</h5>
              <p className="card-text text-white">
                Mensturation is a biological process and females , from puberty
                till menopause , have no control over it. With this initiative,
                we provide thress months, six months, or a yearly stock of
                sanitary napkins to girls who struggle to maintain mensturation
                hygiene due to financial challenges or less awareness
              </p>
            </div>
            <button className="rounded gradient_btn  btn button text-white">
              DONATE NOW
            </button>
          </div>
          <div className="card bg-transparent">
            <img
              src={donation_card_6}
              className="card-img-top rounded"
             alt="error"
            />
            <div className="card-body">
              <h5 className="card-title text-white">Voice For Voiceless</h5>
              <p className="card-text text-white">
                Mensturation is a biological process and females , from puberty
                till menopause , have no control over it. With this initiative,
                we provide thress months, six months, or a yearly stock of
                sanitary napkins to girls who struggle to maintain mensturation
                hygiene due to financial challenges or less awareness
              </p>
            </div>
            <button className="rounded gradient_btn  btn button text-white">
              DONATE NOW
            </button>
          </div>
        </OwlCarousel>
        {/* <div className="text-white carousel about_donation">
          <Carousel
            responsive={responsive}
            swipeable={true}
            
            draggable={false}
            showDots={true}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={5000}
   
            // customTransition="all .5"
            transitionDuration={4000}
            containerclassName="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={props.deviceType}
            dotListclassName="custom-dot-list-style"
            itemclassName="carousel-item-padding-40-px"
          >
            <div className="card bg-transparent">
              <img
                src={donation_card_1}
                className="card-img-top rounded"
               alt="error"
              />
              <div className="card-body">
                <h5 className="card-title text-white"> rupees 1 campaign</h5>
                <p className="card-text text-white">
                  have you ever heard of the proverb "little drops make the
                  mighty ocean"? we believe that if evn only one rupee
                  contribution is made by a large mass , it can help us to
                  proactively offer help for any caouse or tragedies due to an
                  uncalled situation
                </p>
              </div>
              <button className="rounded gradient_btn  btn button text-white">DONATE NOW</button>
            </div>
            <div className="card bg-transparent">
              <img
                src={donation_card_2}
                className="card-img-top rounded"
               alt="error"
              />
              <div className="card-body">
                <h5 className="card-title text-white"> Strive With Pride</h5>
                <p className="card-text text-white">
                  our intiatives helps the transgender community with basic
                  necessities. Sharva Foundation's aim is not to provide only
                  tangible items but to encourage society as a whole to be
                  inclusive of transgenders, who are ofter excluded from the
                  social landscape
                </p>
              </div>
              <button className="rounded gradient_btn  btn button text-white">DONATE NOW</button>
            </div>
            <div className="card bg-transparent">
              <img
                src={donation_card_3}
                className="card-img-top rounded"
               alt="error"
              />
              <div className="card-body">
                <h5 className="card-title text-white"> As Free As a Bird</h5>
                <p className="card-text text-white">
                  Mensturation is a biological process and females , from
                  puberty till menopause , have no control over it. With this
                  initiative, we provide thress months, six months, or a yearly
                  stock of sanitary napkins to girls who struggle to maintain
                  mensturation hygiene due to financial challenges or less
                  awareness
                </p>
              </div>
              <button className="rounded gradient_btn  btn button text-white">DONATE NOW</button>
            </div>
            <div className="card bg-transparent">
              <img
                src={donation_card_4}
                className="card-img-top rounded"
               alt="error"
              />
              <div className="card-body">
                <h5 className="card-title text-white"> Food For Cause</h5>
                <p className="card-text text-white">
                  Food is teh most basic necessity and still, a large population
                  sleeps hungry and wakes up malnutrition. Since the inception
                  of this campaign, our voluenteers have completed 100+ food
                  drives where we served cooded and packed meals to the needy.
                </p>
              </div>
              <button className="rounded gradient_btn  btn button text-white">DONATE NOW</button>
            </div>
            <div className="card bg-transparent">
              <img
                src={donation_card_5}
                className="card-img-top rounded"
               alt="error"
              />
              <div className="card-body">
                <h5 className="card-title text-white">
                  {" "}
                  Give her Winfs To Fly
                </h5>
                <p className="card-text text-white">
                  Mensturation is a biological process and females , from
                  puberty till menopause , have no control over it. With this
                  initiative, we provide thress months, six months, or a yearly
                  stock of sanitary napkins to girls who struggle to maintain
                  mensturation hygiene due to financial challenges or less
                  awareness
                </p>
              </div>
              <button className="rounded gradient_btn  btn button text-white">DONATE NOW</button>
            </div>
          </Carousel>
        </div> */}
      </div>
    </div>
  );
};

export default DonationCard;
