import React from "react";
import gallery_img_1 from "./images/strive.jpg";
import gallery_img_2 from "./images/gallery_img_2.jpg";
import gallery_img_3 from "./images/gallery_img_3.jpg";

import gallery_img_4 from "./images/gallery.jpg";
import gallery_img_5 from "./images/gallery_img_5.jpg";
import gallery_img_6 from "./images/gallery_img_6.jpg";
import gallery_img_7 from "./images/ppkit.jpg";
import gallery_img_8 from "./images/gallery_img_8.jpg";
import gallery_img_9 from "./images/gallery_img_9.jpg";
import gallery_img_10 from "./images/gallery_img_10.jpg";
import gallery_img_11 from "./images/gallery_img_11.jpg";
import gallery_img_12 from "./images/gallery_img_12.jpg";
const Gallery2 = () => {
  return (
    <div>
      <div className="gallery_heading  ">
        <h1 className="d-flex justify-content-center">Our Recent Events</h1>
        <div className="line"></div>
      </div>

      <div className="gallery">
        <div className="gallery__column">
          <a href={gallery_img_1} className="gallery__link">
            <figure className="gallery__thumb">
              <img
                src={gallery_img_1}
                alt="Portrait by Jessica Felicio"
                className="gallery__image"
              />
            </figure>
          </a>

          <a href="https://unsplash.com/@oladimeg" className="gallery__link">
            <figure className="gallery__thumb">
              <img
                src={gallery_img_2}
                alt="Portrait by Oladimeji Odunsi"
                className="gallery__image"
              />
            </figure>
          </a>
          <a href="https://unsplash.com/@von_co" className="gallery__link">
            <figure className="gallery__thumb">
              <img
                src={gallery_img_3}
                alt="Portrait by Ivana Cajina"
                className="gallery__image"
              />
            </figure>
          </a>
        </div>

        <div className="gallery__column">
          <a href="https://unsplash.com/@noahbuscher" className="gallery__link">
            <figure className="gallery__thumb">
              <img
                src={gallery_img_4}
                alt="Portrait by Noah Buscher"
                className="gallery__image"
              />
            </figure>
          </a>

          <a href="https://unsplash.com/@von_co" className="gallery__link">
            <figure className="gallery__thumb">
              <img
                src={gallery_img_6}
                alt="Portrait by Ivana Cajina"
                className="gallery__image"
              />
            </figure>
          </a>
          <a href="https://unsplash.com/@von_co" className="gallery__link">
            <figure className="gallery__thumb">
              <img
                src={gallery_img_5}
                alt="Portrait by Ivana Cajina"
                className="gallery__image"
              />
            </figure>
          </a>
        </div>

        <div className="gallery__column">
          <a href="https://unsplash.com/@marilezhava" className="gallery__link">
            <figure className="gallery__thumb">
              <img
                src={gallery_img_7}
                alt="Portrait by Mari Lezhava"
                className="gallery__image"
              />
            </figure>
          </a>

          <a href="https://unsplash.com/@ethanhaddox" className="gallery__link">
            <figure className="gallery__thumb">
              <img
                src={gallery_img_8}
                alt="Portrait by Ethan Haddox"
                className="gallery__image"
              />
            </figure>
          </a>
          <a href="https://unsplash.com/@von_co" className="gallery__link">
            <figure className="gallery__thumb">
              <img
                src={gallery_img_9}
                alt="Portrait by Ivana Cajina"
                className="gallery__image"
              />
            </figure>
          </a>
        </div>

        <div className="gallery__column">
          <a href="https://unsplash.com/@frxgui" className="gallery__link">
            <figure className="gallery__thumb">
              <img
                src={gallery_img_10}
                alt="Portrait by Guilian Fremaux"
                className="gallery__image"
              />
            </figure>
          </a>

          <a
            href="https://unsplash.com/@majestical_jasmin"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src={gallery_img_11}
                alt="Portrait by Jasmin Chew"
                className="gallery__image"
              />
            </figure>
          </a>
          <a href="https://unsplash.com/@von_co" className="gallery__link">
            <figure className="gallery__thumb">
              <img
                src={gallery_img_12}
                alt="Portrait by Ivana Cajina"
                className="gallery__image"
              />
            </figure>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery2;
