import React,{useEffect,useState} from "react";
import sharva_logo from "./images/sharva-logo.png";

import './CSS/navbar.css'
import { Link } from "react-router-dom";
const Navbar = () => {
  const [navColor, setnavColor] = useState("transparent");
  const [textColor, settextColor] = useState("#fefefe");
  const [shadow, setShadow] = useState("")

  const listenScrollEvent = () => {
    window.scrollY > 20 ? setnavColor("#fefefe") : setnavColor("transparent");
    window.scrollY > 20 ? settextColor("#151515") : settextColor("#fefefe");
    window.scrollY > 20 ? setShadow("shadow-lg") : setShadow("");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <div className=" d-flex  row w-100 above_navbar_div ">
      <nav style={{
          backgroundColor: navColor,
          transition: "all 0.5s",
          color:textColor 
        }}
        className={`Header ${shadow}  navbar top navbar-expand-lg ` }  >
        <div  className="container-fluid ">
        <Link to="/" >

          <img src={sharva_logo} className='mx-3 sharva-logo' width = '80px' alt="" />
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
            <span  className="navbar-toggler-icon"></span>
          </button>
          <div  className="collapse rounded navbar-collapse" id="navbarSupportedContent">
            <ul  className="navbar-nav  mb-lg-0">
              <li  className="nav-item dropdown">
          <a  className="nav-link  dropdown-toggle" href="/" id="navbarDropdown" style={{
          
          transition: "all 0.5s",
          color:textColor 
        }} role="button" data-bs-toggle="dropdown" aria-expanded="false">
            OUR INITIATIVES
          </a>
          <ul  className="  dropdown-menu " aria-labelledby="navbarDropdown">
            <li><a  className="dropdown-item" href="/">Action</a></li>
            <li><a  className="dropdown-item" href="/">Another action</a></li>
            <li><hr  className="dropdown-divider"/></li>
            <li><a  className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li  className="nav-item ">
                <a  className="nav-link   " style={{
          
          transition: "all 0.5s",
          color:textColor 
        }} href="/">
                  ABOUT US
                </a>
              </li>
              <li  className="nav-item ">
                <Link  className="nav-link  " style={{
          
          transition: "all 0.5s",
          color:textColor 
        }} to="/join-us">
                    JOIN US
                </Link>
              </li>
              <li  className="nav-item ">
                <Link  className="nav-link " style={{
          
          transition: "all 0.5s",
          color:textColor 
        }} to="/contact-us">
                CONTACT US
                </Link>
              </li>
              <li  className="nav-item ">
                <a  className="nav-link  " href="/">
                  <button type="button" className="gradient_btn btn btn-sm btn-warning">DONATE NOW </button> 
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
