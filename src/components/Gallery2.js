import React from "react";
import gallery_img_1 from "./images/strivewithpride/3.jpg";

import gallery_img_2 from "./images/gallery_img_2.jpg";
import gallery_img_3 from "./images/giveherwings/1.jpg";
import gallery_img_4 from "./images/gallery.jpg";
import gallery_img_5 from "./images/gallery_img_5.jpg";
import gallery_img_6 from "./images/blooddonation/4.jpg";
import gallery_img_7 from "./images/ppkit.jpg";
import gallery_img_8 from "./images/projectgreen/2.jpg";
import gallery_img_9 from "./images/gallery_img_9.jpg";
import gallery_img_10 from "./images/blooddonation/1.jpg";
import gallery_img_11 from "./images/gallery_img_11.jpg";
import gallery_img_12 from "./images/gallery_img_12.jpg";
import { Link } from "react-router-dom";
const Gallery2 = () => {
  return (
    <div>
      <div className="gallery_heading  ">
        <h1 className="d-flex justify-content-center">Our Recent Events</h1>
        <div className="line"></div>
      </div>

      <div className="gallery">
        <div className="gallery__column">
          <Link to='/strivewithpride' className="gallery__link">
            <figure className="gallery__thumb">
              <img
                src={gallery_img_1}
                alt="Portrait by Jessica Felicio"
                className="gallery__image"
              />
            </figure>
          </Link>

          <Link to="/foodforcause" className="gallery__link">
            <figure className="gallery__thumb">
              <img
                src={gallery_img_2}
                alt="Portrait by Oladimeji Odunsi"
                className="gallery__image"
              />
            </figure>
          </Link>
          <Link to='/foodforcause' className="gallery__link">
            <figure className="gallery__thumb">
              <img
                src={gallery_img_5}
                alt="Portrait by Ivana Cajina"
                className="gallery__image"
              />
            </figure>
          </Link>
        </div>

        <div className="gallery__column">
          <Link to="/projectgreen" className="gallery__link">
            <figure className="gallery__thumb">
              <img
                src={gallery_img_4}
                alt="Portrait by Noah Buscher"
                className="gallery__image"
              />
            </figure>
          </Link>

          <Link to="/blooddonation" className="gallery__link">
            <figure className="gallery__thumb">
              <img
                src={gallery_img_6}
                alt="Portrait by Ivana Cajina"
                className="gallery__image"
              />
            </figure>
          </Link>
          <Link to="/giveherwings" className="gallery__link">
            <figure className="gallery__thumb">
              <img
                src={gallery_img_3}
                alt="Portrait by Ivana Cajina"
                className="gallery__image"
              />
            </figure>
          </Link>
        </div>

        <div className="gallery__column">
          <Link to="/foodforcause" className="gallery__link">
            <figure className="gallery__thumb">
              <img
                src={gallery_img_7}
                alt="Portrait by Mari Lezhava"
                className="gallery__image"
              />
            </figure>
          </Link>

          <Link to="/projectgreen" className="gallery__link">
            <figure className="gallery__thumb">
              <img
                src={gallery_img_8}
                alt="Portrait by Ethan Haddox"
                className="gallery__image"
              />
            </figure>
          </Link>
          <Link to="/foodforcause" className="gallery__link">
            <figure className="gallery__thumb">
              <img
                src={gallery_img_9}
                alt="Portrait by Ivana Cajina"
                className="gallery__image"
              />
            </figure>
          </Link>
        </div>

        <div className="gallery__column">
          <Link  to="/blooddonation" className="gallery__link">
            <figure className="gallery__thumb">
              <img
                src={gallery_img_10}
                alt="Portrait by Guilian Fremaux"
                className="gallery__image"
              />
            </figure>
          </Link>

          <Link
            to="/foodforcause"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src={gallery_img_11}
                alt="Portrait by Jasmin Chew"
                className="gallery__image"
              />
            </figure>
          </Link>
          <Link to="foodforcause" className="gallery__link">
            <figure className="gallery__thumb">
              <img
                src={gallery_img_12}
                alt="Portrait by Ivana Cajina"
                className="gallery__image"
              />
            </figure>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery2;
