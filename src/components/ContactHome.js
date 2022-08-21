import React,{useState} from "react";
import hr from "./images/hr.png";

import handshake from "./images/handshake.png";

import group from "./images/group.png";
import "./CSS/home.css";
const ContactHome = () => {
  const [contactData, setcontactData] = useState({name: "",
 
 email: "",
 message: "",})


  const handleInputs = (e) => {
    const { name, value } = e.target;

    setcontactData({
      ...contactData,
      [name]: value,
    });
    console.log(value);
  };


  
  const URL = 'https://sharva-backend.herokuapp.com/'

  const feedbackform = async (e) => {
    e.preventDefault();
    const {
      name,
      email,
      message
     
    } =contactData;
    try {
      const res = await fetch(`${URL}post-feedback`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          
        }),
      });

      const data = await res.json();
      console.log(data);
      if (data === "") {
        console.log("msg not sent");
      } else {
        alert("message sent");
        setcontactData({
          ...contactData,
          name: "",
          email: "",
          message: "",
          
        });
      }
      setcontactData({
        ...contactData,
        name: contactData.name,
        email: contactData.email,
        message: contactData.message,
        
      });
    } catch (err) {
      console.log(err);
      alert("this email already exist");
    }
  };
  return (
    <div className="contactus_footer ">

      <div className="line_for_heading"></div>
      <div className="map m-0 d-flex contact_us">  
        <div className="map_image_box">
          {/* <a className="map_image" href="https://goo.gl/maps/ahXFY8m6chDXqwVn9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d888.9533996341432!2d74.8168858953428!3d32.732786445842265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x974c8a5d51de0523!2zMzLCsDQzJzU3LjIiTiA3NMKwNDknMDIuNSJF!5e0!3m2!1sen!2sin!4v1658735038838!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowfullscreen=""
              title="sharvamap"
              loading="lazy"
              className="sharva-map"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </a> */}
          <div className="img_content">
            <div className=" img_box_content team">
              <img className="contact_map_logo" src={group} alt=" " />
              <div className="logo text-white">
                <h5>Team</h5>{" "}
                <a href="mailto:team.sharvafoundation@gmail.com">
                  team.sharvafoundation@gmail.com
                </a>
              </div>
            </div>
            <div className=" img_box_content manager">
              <img className="contact_map_logo" src={handshake} alt=" " />
              <div className="logo text-white">
                <h5>Manager</h5>{" "}
                <a href="mailto:managersharvafoundation@gmail.com">
                  managersharvafoundation@gmail.com
                </a>
              </div>
            </div>
            <div className=" img_box_content team">
              <img className="contact_map_logo" src={hr} alt=" " />
              <div className="logo text-white">
                <h5>HR</h5>{" "}
                <a href="mailto:sharvafoundation@gmail.com">
                  hr.sharvafoundation@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="form  m-3 ">
          <div className="contact-us">
            <div className="heading_contact">
              {" "}
              <div className="text-dark px-5">
                Any help that goes undocumented can result in the failure of
                someone’s livelihood and survival. It is of utmost importance
                that this be prevented. There’s where we come in. And only by
                contacting us can you acquire a platform that helps to
                distribute this aid.
              </div>{" "}
            </div>
            <form onSubmit={feedbackform} className="my-5 px-5 contact_us_form">
              <div className="d-flex m-2  input_box_1">
                <input
                  id="customerName"
                  className="rounded p-2"
                  name="name"
                  required=""
                  onChange={handleInputs}
                  placeholder="NAME"
                  type="text"
                />

                <input
                  id="customerName"
                  className="rounded"
                  name="email"
                  required=""
                  onChange={handleInputs}
                  placeholder="EMAIL"
                  type="email"
                />
              </div>

              

              <textarea
                id="customerNote"
                className="rounded"
                name="message"
                placeholder="MESSAGE"
                required=""
                rows="4"
                onChange={handleInputs}
              ></textarea>
              <div className="button rounded">
                <button className="rounded contact_submit_btn gradient_btn">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHome;
