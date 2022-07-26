import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "../components/CSS/home.css";
const CountCard = (props) => {
  return (
    <div>
      {" "}
      <div className="count_box rounded mx-2 google_rating">
        <img width={"45px"} src={props.logo} alt="" />
        <div className="about_content_box ">
          <div className="count_numbers ">
            <h2 className="m-0 p-0 d-flex">
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                  <div className="mx-2 ">
                    {isVisible ? <CountUp end={props.count} /> : 94.8}
                  </div>
                )}
              </VisibilitySensor>
            </h2>
          </div>
        <div className="title_rating">{props.title} </div>
        </div>
      </div>
    </div>
  );
};

export default CountCard;
