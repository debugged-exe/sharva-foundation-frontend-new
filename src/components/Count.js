import React,{useState,useEffect} from "react";

import "../components/CSS/home.css";
import food from "./images/food.png";
import trees from "./images/tree.png";
import help from "./images/help.png";
import blood from "./images/blood.png";
import man from "./images/man.png";
import sanitary from "./images/sanitary-napkin.png";
import CountCard from "./CountCard";

const Count = () => {
  const [countsData, setCountsData] = useState([]);
  useEffect(() => {
   const usercount = async () => {
    try {
      const res = await fetch(
        "https://sharva-backend.herokuapp.com/fetch_counts",
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        }
      );
      const data = await res.json();
      console.log(data);
      setCountsData(data);
    } catch (err) {
      console.log(err);
    }
  };

  
    usercount()
  }, []);

  
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
                  title="Blood Donated"
                  logo={blood}
                  count={countsData[0].blood_donated}
                />
             
                <CountCard
                  title="People Helped"
                  logo={help}
                  count={countsData[0].people_helped}
                />
               <CountCard
                  title="Reflective Collars"
                  logo="https://cdn-icons-png.flaticon.com/128/1202/1202341.png"
                  count={countsData[0].reflective_collars}
                />
                <CountCard
                  title="Sanitary Stock Donated "
                  logo={sanitary}
                  count={countsData[0].sanitary_donated}
                />
               
                <CountCard
                  title="Trees Planted"
                  logo={trees}
                  count={countsData[0].trees_planted}
                />
                 <CountCard
                  title="Volunteers"
                  logo={man}
                  count={countsData[0].volunteers}
                />
                   <CountCard
                  title="Food Kits Distributed"
                  logo={food}
                  count={countsData[0].food_kits}
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
