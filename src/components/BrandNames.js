import React from 'react'
import Marquee from "react-fast-marquee";
import brand_1 from "./images/brand1.jpg";
import brand_2 from "./images/brand2.jpg";
import brand_3 from "./images/brand3.jpg";
import brand_4 from "./images/brand4.jpg";
import brand_5 from "./images/brand5.jpg";
import brand_6 from "./images/brand6.png";
import brand_7 from "./images/brand7.jpg";
import brand_8 from "./images/brand8.jpg";
import brand_9 from "./images/brand9.jpg";
import brand_10 from "./images/brand10.jpg";
import brand_11 from "./images/brand11.jpg";
import brand_12 from "./images/brand12.jpg";
import brand_13 from "./images/debugged.exe_logo.png"
const BrandNames = () => {
  return (
    <div><div className="brands_working_with container rounded text-dark fw-5">
    <h1 className=' m-0 brand_name_title '>


BRANDS THAT HAVE HELPED US IN OUR INITIATIVES
    </h1>
    <div className="line"></div>
        <Marquee loop={0} pauseOnHover={true} gradient={false} freezeDelay={1000}  speed={50} className="brand_names m-0 ">
           
            <img width='120px' src={brand_1} alt="error" className="brand" />
            <img width='120px' src="https://cache.marriott.com/content/dam/marriott-digital/wi/global-property-shared/en_us/logo/assets/wi_logo_L.png" alt="error" className="brand" />
            <img width='200px' src={brand_13} alt="error" className="brand" />
            <img width='120px' src={brand_2} alt="error" className="brand" />
            <img width='120px' src={brand_3} alt="error" className="brand" />
            <img width='120px' src={brand_4} alt="error" className="brand" />
            <img width='120px' src={brand_5} alt="error" className="brand" />
        </Marquee>
        <Marquee loop={0} gradient={false} pauseOnHover={true} freezeDelay={1000}  speed={80} className="brand_names m-0 ">
           
           <img width='120px' src={brand_6} alt="error" className="brand" />
         
           <img width='120px' src={brand_7} alt="error" className="brand" />
           <img width='120px' src={brand_8} alt="error" className="brand" />
           <img width='120px' src={brand_9} alt="error" className="brand" />
           <img width='120px' src={brand_10} alt="error" className="brand" />
           <img width='120px' src={brand_11} alt="error" className="brand" />           <img width='120px' src={brand_12} alt="error" className="brand" />
       </Marquee>
    </div>
    
    </div>
  )
}

export default BrandNames