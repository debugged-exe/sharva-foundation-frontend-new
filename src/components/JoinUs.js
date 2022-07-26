import React, { useEffect } from "react";
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
          <div class="scrollbar" id="style-7">
            <div class="force-overflow">
              <form className="register-form">
                <div className="row d-flex justify-content-center">
                  <div className="col-md-10 p-2 my-2">
                    {/* <!-- Checkout Form  --> */}
                    <div className="checkout-form p-2 border rounded">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-input d-flex row">
                            <label htmlfor="firstName" className="title">
                              First Name
                            </label>
                            <input
                              type="text"
                              className="bg-white   checkout_input"
                              name="firstName"
                              id="firstName"
                              required
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-input d-flex row">
                            <label htmlfor="lastName" className="title">
                              Last Name
                            </label>
                            <input
                              type="text"
                              className="bg-white border-0 checkout_input"
                              name="lastName"
                              id="lastName"
                              required
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-input d-flex row">
                            <label htmlfor="email" className="title">
                              Your Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              className="bg-white border-0 checkout_input"
                              id="email"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-input d-flex row">
                            <label htmlfor="email" className="title">
                              Date of Birth
                            </label>
                            <input
                              type="date"
                              placeholder="Enter BirthDate"
                              name="birthdate"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-input d-flex row">
                            <label htmlfor="email" className="title">
                              Gender
                            </label>
                            <select className="form-select">
                              <option name="male"> Male</option>
                              <option name="female">Female</option>
                              <option name="female">Cis-male</option>
                              <option name="female">Cis-female</option>
                              <option name="female">Trans male</option>
                              <option name="female">Trans female</option>
                              <option name="female">Non-binary</option>
                              <option name="female">Prefer Not to Say</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-input input-box d-flex row">
                            <label htmlfor="address1" className="title">
                              Street Address
                            </label>
                            <input
                              type="text"
                              className="bg-white border-0 checkout_input"
                              name="address1"
                              id="address1"
                            />
                          </div>
                        </div>

                        {/* <div className="col-md-6"></div> */}

                        <div className="col-md-6">
                          <div className="form-input d-flex row">
                            <label htmlfor="state" className="title">
                              State/Province
                            </label>
                            <input
                              type="text"
                              className="bg-white border-0 checkout_input"
                              name="state"
                              id="state"
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-input d-flex row">
                            <label htmlfor="city" className="title">
                              City
                            </label>
                            <input
                              type="text"
                              className="bg-white border-0 checkout_input"
                              name="city"
                              id="city"
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-input d-flex row">
                            <label htmlfor="zipcode" className="title">
                              Zip/Postal Code
                            </label>
                            <input
                              type="text"
                              className="bg-white border-0 checkout_input"
                              name="zipcode"
                              id="zipcode"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-input d-flex row">
                            <label htmlfor="email" className="title">
                              Blood Group
                            </label>
                            <select className="form-select">
                              <option name="male">Select an Option</option>
                              <option name="male"> A+</option>
                              <option name="female">A-</option>
                              <option name="female">B+</option>
                              <option name="female">B-</option>
                              <option name="female">AB+</option>
                              <option name="female">AB-</option>
                              <option name="female">O+</option>
                              <option name="female">O-</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-input d-flex row">
                            <label htmlfor="phone" className="title">
                              Current City
                            </label>
                            <input
                              type="text"
                              className="bg-white border-0 checkout_input"
                              name="city"
                              id="city"
                            />
                          </div>
                        </div>
                        <div className="col-md-10">
                          <div className=" d-flex row">
                            <label htmlfor="phone" className="title">
                              Individual Categories
                            </label>

                            <div className="checkbox1 ">
                              <div class="input-group mb-3">
                                <div class="input-group-text">
                                  <input
                                    class="form-check-input mt-0"
                                    type="checkbox"
                                    value=""
                                    aria-label="Checkbox for following text input"
                                  />
                                </div>
                                <label
                                  type="text"
                                  class="form-control"
                                  aria-label="Text input with checkbox"
                                >
                                  Field Work
                                </label>
                              </div>
                            </div>
                            <div className="checkbox1 ">
                              <div class="input-group mb-3">
                                <div class="input-group-text">
                                  <input
                                    class="form-check-input mt-0"
                                    type="checkbox"
                                    value=""
                                    aria-label="Checkbox for following text input"
                                  />
                                </div>
                                <label
                                  type="text"
                                  class="form-control"
                                  aria-label="Text input with checkbox"
                                >
                                  Photography
                                </label>
                              </div>
                            </div>
                            <div className="checkbox1 ">
                              <div class="input-group mb-3">
                                <div class="input-group-text">
                                  <input
                                    class="form-check-input mt-0"
                                    type="checkbox"
                                    value=""
                                    aria-label="Checkbox for following text input"
                                  />
                                </div>
                                <label
                                  type="text"
                                  class="form-control"
                                  aria-label="Text input with checkbox"
                                >
                                  Video Editor
                                </label>
                              </div>
                            </div>
                            <div className="checkbox1 ">
                              <div class="input-group mb-3">
                                <div class="input-group-text">
                                  <input
                                    class="form-check-input mt-0"
                                    type="checkbox"
                                    value=""
                                    aria-label="Checkbox for following text input"
                                  />
                                </div>
                                <label
                                  type="text"
                                  class="form-control"
                                  aria-label="Text input with checkbox"
                                >
                                  Content Writing
                                </label>
                              </div>
                            </div>
                            <div className="checkbox1 ">
                              <div class="input-group mb-3">
                                <div class="input-group-text">
                                  <input
                                    class="form-check-input mt-0"
                                    type="checkbox"
                                    value=""
                                    aria-label="Checkbox for following text input"
                                  />
                                </div>
                                <label
                                  type="text"
                                  class="form-control"
                                  aria-label="Text input with checkbox"
                                >
                                  Fund Raising
                                </label>
                              </div>
                            </div>
                            <div className="checkbox1 ">
                              <div class="input-group mb-3">
                                <div class="input-group-text">
                                  <input
                                    class="form-check-input mt-0"
                                    type="checkbox"
                                    value=""
                                    aria-label="Checkbox for following text input"
                                  />
                                </div>
                                <label
                                  type="text"
                                  class="form-control"
                                  aria-label="Text input with checkbox"
                                >
                                  Creatives
                                </label>
                              </div>
                            </div>
                            <div className="checkbox1 ">
                              <div class="input-group mb-3">
                                <div class="input-group-text">
                                  <input
                                    class="form-check-input mt-0"
                                    type="checkbox"
                                    value=""
                                    aria-label="Checkbox for following text input"
                                  />
                                </div>
                                <label
                                  type="text"
                                  class="form-control"
                                  aria-label="Text input with checkbox"
                                >
                                  Awareness Sessions
                                </label>
                              </div>
                            </div>
                            <div className="checkbox1 ">
                              <div class="input-group mb-3">
                                <div class="input-group-text">
                                  <input
                                    class="form-check-input mt-0"
                                    type="checkbox"
                                    value=""
                                    aria-label="Checkbox for following text input"
                                  />
                                </div>
                                <label
                                  type="text"
                                  class="form-control"
                                  aria-label="Text input with checkbox"
                                >
                                  Marketing
                                </label>
                              </div>
                            </div>
                            <div className="checkbox1 ">
                              <div class="input-group mb-3">
                                <div class="input-group-text">
                                  <input
                                    class="form-check-input mt-0"
                                    type="checkbox"
                                    value=""
                                    aria-label="Checkbox for following text input"
                                  />
                                </div>
                                <label
                                  type="text"
                                  class="form-control"
                                  aria-label="Text input with checkbox"
                                >
                                  Graphic Designing
                                </label>
                              </div>
                            </div>
                            <div className="checkbox1 ">
                              <div class="input-group mb-3">
                                <div class="input-group-text">
                                  <input
                                    class="form-check-input mt-0"
                                    type="checkbox"
                                    value=""
                                    aria-label="Checkbox for following text input"
                                  />
                                </div>
                                <label
                                  type="text"
                                  class="form-control"
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
                              name="message"
                              id=""
                              cols="20"
                              rows="10"
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
          autoPlay="true"
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
