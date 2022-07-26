import React from "react";
import gallery_img_1 from "./images/gallery_img_1.jpg";
import gallery_img_2 from "./images/gallery_img_2.jpg";
import gallery_img_3 from "./images/gallery_img_3.jpg";
import gallery_img_4 from "./images/gallery_img_4.jpg";

const Gallery = () => {
  return (
    <div className="gallery_section my-5 py-3 ">
      <div className="gallery_heading  ">
        <h5 className="d-flex justify-content-center">
          Lorem ipsum dolor sit amet.
        </h5>
        <h1 className="d-flex justify-content-center">
          Lorem ipsum dolor sit amet consectetur
        </h1>
      </div>
      <div className="gallery_section_img my-0 py-3  ">
        <div className="gallery_section_1">
          <img className="hoverimage" src={gallery_img_2} alt="error" />
          <img className="hoverimage" src={gallery_img_3} alt="error" />
          <img className="hoverimage" src={gallery_img_4} alt="error" />
          <img className="hoverimage" src={gallery_img_3} alt="error" />
        </div>
        <div className="gallery_section_2">
          <img className="hoverimage" src={gallery_img_1} alt="error" />
          <img className="hoverimage" src={gallery_img_4} alt="error" />
          <img className="hoverimage" src={gallery_img_1} alt="error" />
          <img className="hoverimage" src={gallery_img_2} alt="error" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
