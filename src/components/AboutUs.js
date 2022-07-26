import React from "react";
import sharva from "./images/sharva.jpg";


const AboutUs = () => {
  return (
    <div className="container my-5 py-5">
      <div className="headings_about_us   ">
        {/* <h5 >Lorem ipsum dolor sit amet.</h5>{" "} */}
        <h1 >ABOUT SHARVA</h1>
        <div className="line"></div>
      </div>
      <div className="main_div_about d-flex ">
        <div className="content_about d-flex row justify-content-start ">
          <div className="sec1 ">
            
            <div className="details_about">
            Sharva Foundation is a group of determined individuals who share the same mindset, that is the maximum reconciliation of the fragments of the society which are over looked and undocumented for. Brought to life during the coronavirus pandemic, we quickly learned the hardships faced by the people. In times of despair, we took it upon us to create a society that helps and works to grow together.
            </div>
          </div>
          <div className="sec1 ">
            <div className="details_about">
            We have witnessed growth exponentially and that made it clear that there are people out there who want to provide their aid and we act like a platform. We hope to see tomorrow build out on a foundation laid by love, trust and care. That is what drives our purpose. In times such as these, it is of upmost importance that we need to work together. Any undocumented call of aid can turn out to be the decision that governs someone’s survival. By reaching us is how you prevent this.
            </div>
          </div>

        </div>
        <div className="image_about "><img  src={sharva} alt="" /></div>
      </div>
    </div>
  );
};

export default AboutUs;
