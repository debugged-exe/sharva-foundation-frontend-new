import "./App.css";
import AboutUs from "./components/AboutUs";
import BrandNames from "./components/BrandNames";
import Count from "./components/Count";
import DonationCard from "./components/DonationCard";
import Footer from "./components/Footer";
import Gallery2 from "./components/Gallery2";
import Home from "./components/Home";
import MerchantDise from "./components/MerchantDise";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import JoinUs from "./components/JoinUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/join-us" element={<JoinUs/>} />
        <Route exact path="/contact-us" element={<ContactUs/>} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
