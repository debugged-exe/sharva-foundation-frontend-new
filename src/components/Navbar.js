import React, { useEffect, useState } from "react";
import sharva_logo_black from "./images/sharva-logo.png";
import sharva_logo_white from "./images/sharvawhitelogo.png";
import "./CSS/navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [navColor, setnavColor] = useState("transparent");
  const [textColor, settextColor] = useState("#fefefe");
  const [shadow, setShadow] = useState("");
const [sharvaLogo, setsharvaLogo] = useState(sharva_logo_white)
  const listenScrollEvent = () => {
    window.scrollY > 20 ? setnavColor("#fefefe") : setnavColor("transparent");
    window.scrollY > 20 ? settextColor("#151515") : settextColor("#fefefe");
    window.scrollY > 20 ? setShadow("shadow-lg") : setShadow(""); window.scrollY > 20 ? setsharvaLogo(sharva_logo_black) : setsharvaLogo(sharva_logo_white);
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <div className=" d-flex  row w-100 above_navbar_div ">
      <nav
        style={{
          backgroundColor: navColor,
          transition: "all 0.5s",
          color: textColor,
        }}
        className={`Header ${shadow}  navbar top navbar-expand-lg `}
      >
        <div className="container-fluid ">
          <Link
            to="/"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
          >
            <img
              src={sharvaLogo}
              className="mx-3 sharva-logo"
              width="80px"
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse  navbar-collapse rounded"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-lg-0">
              <li className="nav-item dropdown">
                <Link
                  // data-toggle="collapse"
                  // data-target=".navbar-collapse.show"
                  className="nav-link  dropdown-toggle"
                  to="/initiatives"
                  id="navbarDropdown"
                  style={{
                    transition: "all 0.5s",
                    color: textColor,
                  }}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  OUR INITIATIVES
                </Link>
                <ul
                  className="  dropdown-menu "
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                      className="dropdown-item"
                      to="/foodforcause"
                    >
                      Food For Cause
                    </Link>
                  </li>
                  <li>
                    <Link
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                      className="dropdown-item"
                      to="/strivewithpride"
                    >
                      Strive With Pride
                    </Link>
                  </li>
                 
                  <li>
                    <Link
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                      className="dropdown-item"
                      to="/giveherwings"
                    >
                      Give her wings to fly 
                    </Link>
                  </li><li>
                    <Link
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                      className="dropdown-item"
                      to="/projectgreen"
                    >
                      Project Green
                    </Link>
                  </li><li>
                    <Link
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                      className="dropdown-item"
                      to="/blooddonation"
                    >
                      Blood Donation
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className="nav-item "
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <a
                  className="nav-link   "
                  style={{
                    transition: "all 0.5s",
                    color: textColor,
                  }}
                  href="https://nimble-pudding-8b267a.netlify.app/#AboutUs"
                >
                  COVID 19
                </a>
              </li>
              <li
                className="nav-item "
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <a
                  className="nav-link   "
                  style={{
                    transition: "all 0.5s",
                    color: textColor,
                  }}
                  href="https://nimble-pudding-8b267a.netlify.app/#AboutUs"
                >
                  ABOUT US
                </a>
              </li>
              <li className="nav-item ">
                <Link
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  className="nav-link  "
                  style={{
                    transition: "all 0.5s",
                    color: textColor,
                  }}
                  to="/join-us"
                >
                  JOIN US
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  className="nav-link "
                  style={{
                    transition: "all 0.5s",
                    color: textColor,
                  }}
                  to="/contact-us"
                >
                  CONTACT US
                </Link>
              </li>
              <li className="nav-item ">
                <a className="nav-link  " href="https://rzp.io/l/oQlaIFYe">
                  <button
                    type="button"
                    className="gradient_btn btn btn-sm btn-warning"
                  >
                    DONATE NOW{" "}
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
