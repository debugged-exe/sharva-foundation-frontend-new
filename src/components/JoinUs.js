import React, { useEffect, useState } from "react";
import "./CSS/joinus.css";
import donation_card_1 from "./images/donation_card_2.jpg";
import donation_card_2 from "./images/donation_card_2.jpg";
import donation_card_3 from "./images/donation_card_3.jpg";
import donation_card_4 from "./images/donation_card_4.jpg";
import donation_card_5 from "./images/donation_card_5.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const JoinUs = () => {
  const [userData, setUserData] = useState({
    firstname:"",
    lastname:"",
    email:"",
    dob:"",
    gender:"",
    street_address:"",
    state_province:"",
    city:"",
    zip_code:"",
    blood_grp:"",
    current_city:"",
    category:[],
    reason_to_join:"",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
    console.log(value)
  };
  
  const feedbackform = async (e) => {
    e.preventDefault();
    const {
      firstname,
      lastname,
      email,
      dob,
      gender,
      street_address,
      state_province,
      city,
      zip_code,
      blood_grp,
      current_city,
      category,
      reason_to_join,
    } = userData;
    try {
      const res = await fetch(
        "https://sharva-backend.herokuapp.com/post-joinus",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            firstname:firstname,
            lastname:lastname,
            email:email,
            dob:dob,
            gender:gender,
            street_address:street_address,
            state_province:state_province,
            city:city,
            zip_code:zip_code,
            blood_grp:blood_grp,
            current_city:current_city,
            category:category,
            reason_to_join:reason_to_join,
          }),
        }
      );

      const data = await res.json();
      console.log(data);
      if (data === "") {
        console.log("msg not sent");
      } else {
        alert("message sent");
        setUserData({
          ...userData,
          firstname: "",
          lastname: "",
          email: "",
          dob: "",
          gender: "",
          street_address: "",
          state_province: "",
          city: "",
          zip_code: "",
          blood_grp: "",
          current_city: "",
          category:[],
          reason_to_join: "",
        });
      }
      setUserData({
        ...userData,
        firstname: userData.firstname,
        lastname: userData.lastname,
        email: userData.email,
        dob: userData.dob,
        gender: userData.gender,
        street_address: userData.street_address,
        state_province: userData.state_province,
        city: userData.city,
        zip_code: userData.zip_code,
        blood_grp: userData.blood_grp,
        current_city: userData.current_city,
        category: userData.category,
        reason_to_join: userData.reason_to_join,
      });
    } catch (err) {
      console.log(err);
      alert("this email already exist");
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const options = {
    margin: 10,
    responsiveClass: true,

    dots: true,
    autoplay: true,

    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  return (
    <div className="CheckOut justify-content-center container">
      <div className="join_background_image">
        <h1 className="joinus-heading carousel-caption">JOIN US </h1>
      </div>

      <div className="checkout-content container mt-5">
        <div className="checkout-wrapper">
          <div className="scrollbar" id="style-7">
            <div className="force-overflow">
              <form onSubmit={feedbackform} className="register-form">
                <div className="row d-flex justify-content-center">
                  <div className="col-md-10 p-2 my-2">
                    {/* <!-- Checkout Form  --> */}
                    <div className="checkout-form p-2 border rounded">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-input d-flex row">
                            <label htmlFor="firstName" className="title">
                              First Name
                            </label>
                            <input
                              type="text"
                              className="bg-white   checkout_input"
                              name="firstname"
                              id="firstName"
                              placeholder="enter your first name"
                              value={userData.firstname}
                              onChange={handleInputs}
                              required
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-input d-flex row">
                            <label htmlFor="lastName" className="title">
                              Last Name
                            </label>
                            <input
                              type="text"
                              name="lastname"
                              className="bg-white border-0 checkout_input"
                              id="lastName"
                              value={userData.lastname}
                              onChange={handleInputs}
                              required
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-input d-flex row">
                            <label htmlFor="email" className="title">
                              Your Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              className="bg-white border-0 checkout_input"
                              id="email"
                              value={userData.email}
                              onChange={handleInputs}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-input d-flex row">
                            <label htmlFor="email" className="title">
                              Date of Birth
                            </label>
                            <input
                              type="date"
                              placeholder="Enter BirthDate"
                              name="dob"
                              value={userData.dob}
                              onChange={handleInputs}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-input d-flex row">
                            <label htmlFor="email" className="title">
                              Gender
                            </label>
                            <select
                              className="form-select"
                             name="gender"
                              defaultValue= {userData.gender}
                              onChange={handleInputs}
                            >
                              <option  value={"female"}>Female</option>
                              <option  value={"male"}> Male</option>
                              <option  value={"cis-male"}>Cis-male</option>
                              <option  value={"cis-female"}>Cis-female</option>
                              <option  value={"trans-male"}>Trans male</option>
                              <option  value={"trans-female"}>Trans female</option>
                              <option  value={"non-binary"}>Non-binary</option>
                              <option  value={"prefer-not-to-say"}>Prefer Not to Say</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-input input-box d-flex row">
                            <label htmlFor="address1" className="title">
                              Street Address
                            </label>
                            <input
                              type="text"
                              className="bg-white border-0 checkout_input"
                              name="street_address"
                              id="address1"
                              value={userData.street_address}
                              onChange={handleInputs}
                            />
                          </div>
                        </div>

                        {/* <div className="col-md-6"></div> */}

                        <div className="col-md-6">
                          <div className="form-input d-flex row">
                            <label htmlFor="state" className="title">
                              State/Province
                            </label>
                            <input
                              type="text"
                              className="bg-white border-0 checkout_input"
                              name="state_province"
                              id="state"
                              value={userData.state_province}
                              onChange={handleInputs}
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-input d-flex row">
                            <label htmlFor="city" className="title">
                              City
                            </label>
                            <input
                              type="text"
                              className="bg-white border-0 checkout_input"
                              name="city"
                              id="city"
                              value={userData.city}
                              onChange={handleInputs}
                              required
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-input d-flex row">
                            <label htmlFor="zipcode" className="title">
                              Zip/Postal Code
                            </label>
                            <input
                              type="text"
                              className="bg-white border-0 checkout_input"
                              name="zip_code"
                              id="zipcode"
                              value={userData.zip_code}
                              onChange={handleInputs}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-input d-flex row">
                            <label htmlFor="email" className="title">
                              Blood Group
                            </label>
                            <select
                              className="form-select"
                              name="blood_grp"
                              defaultValue={userData.blood_grp}
                              onChange={handleInputs}
                              placeholder="select and option"
                            >
                              
                              <option value={"A+"} > A+</option>
                              <option value={"A-"} >A-</option>
                              <option value={"B+"} >B+</option>
                              <option value={"B-"} >B-</option>
                              <option value={"AB+"} >AB+</option>
                              <option value={"AB-"} >AB-</option>
                              <option value={"O+"} >O+</option>
                              <option value={"O-"} >O-</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-input d-flex row">
                            <label htmlFor="phone" className="title">
                              Current City
                            </label>
                            <input
                              type="text"
                              className="bg-white border-0 checkout_input"
                              name="current_city"
                              value={userData.current_city}
                              onChange={handleInputs}
                              id="city"
                            />
                          </div>
                        </div>
                        <div className="col-md-10">
                          <div className=" d-flex row">
                            <label htmlFor="phone" className="title">
                              Individual Categories
                            </label>

                            <div className="checkbox1 ">
                              <div className="input-group mb-3">
                                <div className="input-group-text">
                                  <input
                                    className="form-check-input mt-0"
                                    type="checkbox"
                                    value={"field-work"} name="category" 
                                    aria-label="Checkbox for following text input"
                                  />
                                </div>
                                <label
                                  type="text"
                                  className="form-control"
                                  aria-label="Text input with checkbox"
                                >
                                  Field Work
                                </label>
                              </div>
                            </div>
                            <div className="checkbox1 ">
                              <div className="input-group mb-3">
                                <div className="input-group-text">
                                  <input
                                    className="form-check-input mt-0"
                                    type="checkbox"
                                    value={"photography"} name="category" 
                                    aria-label="Checkbox for following text input"
                                  />
                                </div>
                                <label
                                  type="text"
                                  className="form-control"
                                  aria-label="Text input with checkbox"
                                >
                                  Photography
                                </label>
                              </div>
                            </div>
                            <div className="checkbox1 ">
                              <div className="input-group mb-3">
                                <div className="input-group-text">
                                  <input
                                    className="form-check-input mt-0"
                                    type="checkbox"
                                    value={"video-editor"} name="category" 
                                    aria-label="Checkbox for following text input"
                                  />
                                </div>
                                <label
                                  type="text"
                                  className="form-control"
                                  aria-label="Text input with checkbox"
                                >
                                  Video Editor
                                </label>
                              </div>
                            </div>
                            <div className="checkbox1 ">
                              <div className="input-group mb-3">
                                <div className="input-group-text">
                                  <input
                                    className="form-check-input mt-0"
                                    type="checkbox"
                                    value={"content-writing"} name="category" 
                                    aria-label="Checkbox for following text input"
                                  />
                                </div>
                                <label
                                  type="text"
                                  className="form-control"
                                  aria-label="Text input with checkbox"
                                >
                                  Content Writing
                                </label>
                              </div>
                            </div>
                            <div className="checkbox1 ">
                              <div className="input-group mb-3">
                                <div className="input-group-text">
                                  <input
                                    className="form-check-input mt-0"
                                    type="checkbox"
                                    value={"fund-raising"} name="category" 
                                    aria-label="Checkbox for following text input"
                                  />
                                </div>
                                <label
                                  type="text"
                                  className="form-control"
                                  aria-label="Text input with checkbox"
                                >
                                  Fund Raising
                                </label>
                              </div>
                            </div>
                            <div className="checkbox1 ">
                              <div className="input-group mb-3">
                                <div className="input-group-text">
                                  <input
                                    className="form-check-input mt-0"
                                    type="checkbox"
                                    value={"creatives"} name="category" 
                                    aria-label="Checkbox for following text input"
                                  />
                                </div>
                                <label
                                  type="text"
                                  className="form-control"
                                  aria-label="Text input with checkbox"
                                >
                                  Creatives
                                </label>
                              </div>
                            </div>
                            <div className="checkbox1 ">
                              <div className="input-group mb-3">
                                <div className="input-group-text">
                                  <input
                                    className="form-check-input mt-0"
                                    type="checkbox"
                                    value={"awareness-sessions"} name="category" 
                                    aria-label="Checkbox for following text input"
                                  />
                                </div>
                                <label
                                  type="text"
                                  className="form-control"
                                  aria-label="Text input with checkbox"
                                >
                                  Awareness Sessions
                                </label>
                              </div>
                            </div>
                            <div className="checkbox1 ">
                              <div className="input-group mb-3">
                                <div className="input-group-text">
                                  <input
                                    className="form-check-input mt-0"
                                    type="checkbox"
                                    value={"marketing"} name="category" 
                                    aria-label="Checkbox for following text input"
                                  />
                                </div>
                                <label
                                  type="text"
                                  className="form-control"
                                  aria-label="Text input with checkbox"
                                >
                                  Marketing
                                </label>
                              </div>
                            </div>
                            <div className="checkbox1 ">
                              <div className="input-group mb-3">
                                <div className="input-group-text">
                                  <input
                                    className="form-check-input mt-0"
                                    type="checkbox"
                                    value={"graphic-designing"} name="category" 
                                    aria-label="Checkbox for following text input"
                                  />
                                </div>
                                <label
                                  type="text"
                                  className="form-control"
                                  aria-label="Text input with checkbox"
                                >
                                  Graphic Designing
                                </label>
                              </div>
                            </div>
                            <div className="checkbox1 ">
                              <div className="input-group mb-3">
                                <div className="input-group-text">
                                  <input
                                    className="form-check-input mt-0"
                                    type="checkbox"
                                    value={"strategies-buildup"} name="category" 
                                    aria-label="Checkbox for following text input"
                                  />
                                </div>
                                <label
                                  type="text"
                                  className="form-control"
                                  aria-label="Text input with checkbox"
                                >
                                  Strategies Buildup
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-10 ">
                          <div className="form-input textarea-joinus">
                            <label htmlFor="message" className="title">
                              Why do you want to Join Us?
                            </label>
                            <textarea
                              name="reason_to_join"
                              id=""
                              cols="20"
                              rows="10"
                              value={userData.reason_to_join}
                              onChange={handleInputs}
                            ></textarea>
                          </div>
                        </div>
                        <div className="submitbutton  col-md-6 ">
                          <div className="bg-brown rounded text-white ">
                            <button
                              type="submit"
                              defaultValue="Send  Message"
                              className="m-2 p-1 rounded joinus_submit_btn  gradient_btn btn-fill"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <!-- Checkout Form --> */}
        </div>
        <OwlCarousel
          items={1}
          className="container owl-theme"
          {...options}
          loop
          autoPlay={true}
          margin={5}
        >
          <div className="img">
            <img src={donation_card_1} alt="error" />
          </div>
          <div className="img">
            <img src={donation_card_2} alt="error" />
          </div>
          <div className="img">
            <img src={donation_card_3} alt="error" />
          </div>
          <div className="img">
            <img src={donation_card_4} alt="error" />
          </div>
          <div className="img">
            <img src={donation_card_5} alt="error" />
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default JoinUs;
