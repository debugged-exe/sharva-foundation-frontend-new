import React from "react";
import merchancise_1 from "./images/merchandise_1.png";
import merchancise_2 from "./images/merchandise_2.png";
import merchancise_3 from "./images/merchandise_3.png";
import './CSS/home.css'
import { Link } from "react-router-dom";

const MerchantDise = () => {
  
  return (
    <div>
      <div className="join_us bg-dark d-flex  justify-content-between p-3">
        <div className="content m-4 text-center mx-0  text-white w-60">
          <h4 className="text-uppercase mx-5">
            <strong>Be part of a pan-Indian volunteer network</strong>
          </h4>
        </div>
        <div className="button m-4  " >
          <button className="gradient_btn mx-5  px-4 p-2 rounded text-white ">
            <strong><Link className="home_join_us" to="/join-us">

JOIN US NOW
</Link> </strong>
          </button>
        </div>
      </div>
      <div className="merchandise ">
        {/* <h3>Lorem, ipsum dolor sit amet consectetur adipisicing.</h3> */}
        <h1>OWN YOURS NOW! </h1>
        <div className="line"></div>
        <div className="merchandise_main_box">
          <div
            id="carouselExampleIndicators"
            className=" caruosel_for_merchandise carousel slide"
            data-bs-ride="true"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={merchancise_1} alt="error" />
              </div>
              <div className="carousel-item">
                <img src={merchancise_2} alt="error" />
              </div>
              <div className="carousel-item">
                <img src={merchancise_3} alt="error" />
              </div>
            </div>
          </div>
          <div className="merchandise_content m-3 p-3">
            We at Sharva Foundation are elated to announce that our merchandise
            is here! <br /> <br />
            We as a growing NGO wanted to recognise all of your efforts by
            giving you these as a token of appreciation! The price for the
            Merchandise is ₹350+ shipping charges *(shipping charges will be
            applicable based on your address and it will not exceed ₹50){" "}
          </div>
          <div className="line ">
            <button className="bg-white  fw-bold  rounded text-yellow ">
              Get Your Merchandise!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantDise;
