import React from "react";

import "../components/CSS/home.css";
import food from "./images/food.png";
import trees from "./images/tree.png";
import help from "./images/help.png";
import blood from "./images/blood.png";
import man from "./images/man.png";
import sanitary from "./images/sanitary-napkin.png";
import CountCard from "./CountCard";

const Count = () => {
  return (
    <div className="my-5 py-4 ">
    <h1 className="text-center my-4">OUR PROGRESS</h1>
      <section className="count text-white">
        <div className=" count_users  d-flex justify-content-center   ">
          <div className="count_parents">
            <div className="inside_counter d-flex">
              {/* <div className="count_box mx-2 google_rating">
                <img width={"45px"} src={google} alt="" />
                <div className="about_content_box">
                  <div className="count_numbers ">
                    <h2 className="m-0 p-0">431</h2>
                  </div>
                  <div className="title_rating">GOOGLE RATING </div>
                </div>
              </div>
              <span></span> */}
              <div className="justify-content-center d-flex flex-wrap">
                <CountCard
                  title="Food Kits Distributed"
                  logo={food}
                  count="12791"
                />
                <CountCard
                  title="People Helped"
                  logo={help}
                  count=" 22023"
                />
                <CountCard
                  title="Blood Donated"
                  logo={blood}
                  count="60"
                />
                <CountCard
                  title="Volunteers"
                  logo={man}
                  count="217"
                />
                <CountCard
                  title="Trees Planted"
                  logo={trees}
                  count="631"
                />
                <CountCard
                  title="Sanitary Stock Donated "
                  logo={sanitary}
                  count="13179"
                />
                <CountCard
                  title="Reflective Collars"
                  logo="https://cdn-icons-png.flaticon.com/128/1202/1202341.png"
                  count="300"
                />
                {/* 
                <div className="_count_upper_section1 "></div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Count;
