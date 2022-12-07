import React from "react";

import "./CSS/joinus.css";

import joinus from "./images/joinus.jpg";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const initialState = {
  name: "",
  email: "",
  dob: "",
  gender: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  bloodgroup: "",
  currentcity: "",
  category: [],
  whyjoin: "",
};

class Join extends React.PureComponent {
  constructor() {
    super();
    this.state = initialState;
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleSubmit = (event) => {
    const {
      name,
      email,
      dob,
      gender,
      phone,
      address,
      city,
      state,
      bloodgroup,
      currentcity,
      category,
      whyjoin,
    } = this.state;
    var URI = "https://backend-for-sharvafoundation-new.vercel.app/";
    event.preventDefault();
    fetch(`${URI}join`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        dob: dob,
        gender: gender,
        phone: phone,
        address: address,
        city: city,
        state: state,
        bloodgroup: bloodgroup,
        currentcity: currentcity,
        category: category,
        whyjoin: whyjoin,
      }),
    })
      .then((response) => response.json())
      .then((resp) => {
        if (resp === "Success") {
          alert(
            "Your details have been recieved successfully.Thank you for registering."
          );
        }
      })
      .catch((err) => {
        console.log(err);
        alert("OOPS....something went wrong.Please try again.");
      });
    document.getElementById("registerForm").reset();
  };

  enable = (e) => {
    if (e.target.value === "3") {
      this.setState({ others: false });
    } else {
      this.setState({ others: true });
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleCheck = (event) => {
    const { id, value } = event.target;
    const check1 = document.getElementById(id);
    if (check1.checked) {
      const category = this.state.category;
      category.push(value);
      this.setState({ category: category }, () => {
        console.log("");
      });
    } else {
      const category = this.state.category;
      const filtered = category.filter((item) => item !== value);
      this.setState({ category: filtered }, () => {
        console.log("");
      });
    }
  };

  render() {
    return (
      <div className="CheckOut justify-content-center container">
        <div className="join_background_image">
          <h1 className="joinus-heading carousel-caption">JOIN US </h1>
        </div>

        <div className="checkout-content container mt-5">
          <div className="checkout-wrapper">
            <div className="scrollbar" id="style-2">
              <div className="force-overflow">
                <form
                  className="register-form"
                  id="registerForm"
                  onSubmit={this.handleSubmit}
                >
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-10 p-2 my-2">
                      {/* <!-- Checkout Form  --> */}
                      <div className="checkout-form p-2 border rounded">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-input d-flex row">
                              <label htmlFor="name" className="label">
                                Full Name<span className="red f3">*</span>
                              </label>
                              <input
                                className="inputform form_inputs"
                                // placeholder="Name"
                                name="name"
                                type="text"
                                onChange={this.handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-input d-flex row">
                              <label htmlFor="email" className="label">
                                Email<span className="red f3">*</span>
                              </label>
                              <input
                                className="inputform form_inputs"
                                // placeholder="Email Id"
                                name="email"
                                type="email"
                                onChange={this.handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-input d-flex row">
                              <label htmlFor="name" className="label">
                                Date of Birth<span className="red f3">*</span>
                              </label>
                              <input
                                className="inputform form_inputs"
                                // placeholder="DOB"
                                name="dob"
                                type="date"
                                onChange={this.handleChange}
                                required
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
                                defaultValue={""}
                                onChange={this.handleChange}
                              >
                                <option value={"female"}>Female</option>
                                <option value={"male"}> Male</option>
                                
                                <option value={"prefer-not-to-say"}>
                                  Prefer Not to Say
                                </option>
                              </select>
                            </div>
                          </div>
                          {/* <div className="col-md-6">
                            <div className="form-input form-select d-flex row">
                              <label htmlFor="gender" className="label">
                                Gender<span className="red f3">*</span>
                              </label>

                              <input
                                type="radio"
                                id="male"
                                name="gender"
                                value="male"
                                onChange={this.handleChange}
                                required
                              />
                              <label for="male" className="label">
                                Male
                              </label>

                              <input
                                type="radio"
                                id="female"
                                name="gender"
                                value="female"
                                onChange={this.handleChange}
                                required
                              />
                              <label for="female" className="label">
                                Female
                              </label>

                              <input
                                type="radio"
                                id="cis-male"
                                name="gender"
                                value="cis-male"
                                onChange={this.handleChange}
                                required
                              />
                              <label for="cis-male" className="label">
                                Cis-male
                              </label>

                              <input
                                type="radio"
                                id="cis-female"
                                name="gender"
                                value="cis-female"
                                onChange={this.handleChange}
                                required
                              />
                              <label for="cis-female" className="label">
                                Cis-female
                              </label>

                              <input
                                type="radio"
                                id="Trans male"
                                name="gender"
                                value="Trans male"
                                onChange={this.handleChange}
                                required
                              />
                              <label for="Trans female" className="label">
                                Trans male
                              </label>

                              <input
                                type="radio"
                                id="Trans female"
                                name="gender"
                                value="Trans female"
                                onChange={this.handleChange}
                                required
                              />
                              <label for="Trans male" className="label">
                                Trans female
                              </label>

                              <input
                                type="radio"
                                id="Non binary"
                                name="gender"
                                value="Non binary"
                                onChange={this.handleChange}
                                required
                              />
                              <label for="Non-binary" className="label">
                                Non-binary
                              </label>

                              <input
                                type="radio"
                                id="prefer not to say"
                                name="gender"
                                value="Prefer not to say"
                                onChange={this.handleChange}
                                required
                              />
                              <label for="not_to_say" className="label">
                                Prefer Not to Say
                              </label>
                            </div>
                          </div> */}
                          <div className="col-md-6">
                            <div className="form-input d-flex row">
                              <label htmlFor="phone" className="label">
                                Phone Number<span className="red f3">*</span>
                              </label>
                              <input
                                className="inputform form_inputs"
                                // placeholder="Phone no."
                                name="phone"
                                type="tel"
                                pattern="[0-9]{10}"
                                onChange={this.handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-input d-flex row">
                              <label for="edu" className="label">
                                Permanent Address
                                <span className="red f3">*</span>
                              </label>
                              <input
                                name="address"
                                className="inputform form_inputs"
                                // placeholder="Address"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-input d-flex row">
                              <label for="edu" className="label">
                                City<span className="red f3">*</span>
                              </label>
                              <input
                                name="city"
                                className="inputform form_inputs"
                                // placeholder="Address"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-input d-flex row">
                              <label htmlFor="occupation" className="label">
                                State<span className="red f3">*</span>
                              </label>
                              <input
                                name="state"
                                className="inputform form_inputs"
                                // placeholder="State"
                                type="text"
                                onChange={this.handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-input d-flex row">
                              <label
                                for="edu"
                                value={this.state.phone}
                                className="label"
                              >
                                Blood Group<span className="red f3">*</span>
                              </label>
                              <select
                                className="form-select"
                                id="edu"
                                onChange={this.handleChange}
                                name="bloodgroup"
                              >
                                <option value=" ">select an option</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-input d-flex row">
                              <label htmlFor="location" className="label">
                                Current City<span className="red f3">*</span>
                              </label>
                              <input
                                name="currentcity"
                                className="inputform form_inputs"
                                // placeholder="Current City"
                                type="text"
                                onChange={this.handleChange}
                                required
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-input d-flex row">
                              <label htmlFor="invest" className="label">
                                Individual's Category
                                <span className="red f3">*</span>
                              </label>

                              <div className="checkbox1    ">
                                <div className="input-group mb-3">
                                  <div className="input-group-text">
                                    <input
                                      className="form-check-input mt-0 "
                                      type="checkbox"
                                      id="bank"
                                      name="category"
                                      value="fieldwork"
                                      onClick={this.handleCheck}
                                      aria-label="Checkbox for following text input"
                                    />

                                    <label className="form-control" for="bank">
                                      Field Work
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="checkbox1    ">
                                <div className="input-group mb-3">
                                  <div className="input-group-text">
                                    <input
                                      className="form-check-input mt-0 "
                                      type="checkbox"
                                      id="mutual"
                                      name="category"
                                      value="photography"
                                      onClick={this.handleCheck}
                                    />
                                    <label
                                      className="form-control"
                                      for="mutual"
                                    >
                                      Photography
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="checkbox1    ">
                                <div className="input-group mb-3">
                                  <div className="input-group-text">
                                    <input
                                      className="form-check-input mt-0 "
                                      type="checkbox"
                                      id="bonds"
                                      name="category"
                                      value="videoeditor"
                                      onClick={this.handleCheck}
                                    />
                                    <label className="form-control" for="bonds">
                                      Video Editor
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="checkbox1    ">
                                <div className="input-group mb-3">
                                  <div className="input-group-text">
                                    <input
                                      className="form-check-input mt-0 "
                                      type="checkbox"
                                      id="post"
                                      name="category"
                                      value="contentwriting"
                                      onClick={this.handleCheck}
                                    />
                                    <label className="form-control" for="post">
                                      Content Writing
                                    </label>{" "}
                                  </div>
                                </div>
                              </div>
                              <div className="checkbox1    ">
                                <div className="input-group mb-3">
                                  <div className="input-group-text">
                                    <input
                                      className="form-check-input mt-0 "
                                      type="checkbox"
                                      id="money_market"
                                      name="category"
                                      value="fundraising"
                                      onClick={this.handleCheck}
                                    />
                                    <label
                                      className="form-control"
                                      for="money_market"
                                    >
                                      Fund Raising
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="checkbox1    ">
                                <div className="input-group mb-3">
                                  <div className="input-group-text">
                                    <input
                                      className="form-check-input mt-0 "
                                      type="checkbox"
                                      id="debt"
                                      name="category"
                                      value="creatives"
                                      onClick={this.handleCheck}
                                    />
                                    <label className="form-control" for="debt">
                                      Creatives
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="checkbox1    ">
                                <div className="input-group mb-3">
                                  <div className="input-group-text">
                                    <input
                                      className="form-check-input mt-0 "
                                      type="checkbox"
                                      id="none"
                                      name="category"
                                      value="awareness"
                                      onClick={this.handleCheck}
                                    />
                                    <label className="form-control" for="none">
                                      Awareness Sessions
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="checkbox1    ">
                                <div className="input-group mb-3">
                                  <div className="input-group-text">
                                    <input
                                      className="form-check-input mt-0 "
                                      type="checkbox"
                                      id="none"
                                      name="category"
                                      value="marketing"
                                      onClick={this.handleCheck}
                                    />
                                    <label className="form-control" for="none">
                                      Marketing
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="checkbox1    ">
                                <div className="input-group mb-3">
                                  <div className="input-group-text">
                                    <input
                                      className="form-check-input mt-0 "
                                      type="checkbox"
                                      id="none"
                                      name="category"
                                      value="marketing"
                                      onClick={this.handleCheck}
                                    />
                                    <label className="form-control" for="none">
                                      Graphic Designing
                                    </label>{" "}
                                  </div>
                                </div>
                              </div>
                              <div className="checkbox1    ">
                                <div className="input-group mb-3">
                                  <div className="input-group-text">
                                    <input
                                      className="form-check-input mt-0 "
                                      type="checkbox"
                                      id="none"
                                      name="category"
                                      value="strategies"
                                      onClick={this.handleCheck}
                                    />
                                    <label className="form-control" for="none">
                                      Strategies Buildup
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="checkbox1    ">
                                <div className="input-group mb-3">
                                  <div className="input-group-text">
                                    <input
                                      className="form-check-input mt-0 "
                                      type="checkbox"
                                      id="none"
                                      name="category"
                                      value="volunteer"
                                      onClick={this.handleCheck}
                                    />
                                    <label className="form-control" for="none">
                                      Volunteer
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-input d-flex row">
                              <label for="edu" className="label">
                                Why do you want to Join Us?
                                <span className="red f3">*</span>
                              </label>
                              <textarea
                                type="text"
                                name="whyjoin"
                                className="inputform form_inputs"
                                // placeholder=""
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12 inputBoxJoinUs">
                            <input
                              type="Submit"
                              className=" m-2 gradient_btn btn btn-sm btn-warning col-md-6 submitbutton"
                              name=""
                              value="Submit"
                            ></input>
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
          <div className="volenteer-img">
            <img src={joinus} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Join;
