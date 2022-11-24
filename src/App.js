import "./App.css";

import Footer from "./components/Footer";

import Home from "./components/Home";

import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./components/ContactUs";

import FoodForCause from "./components/FoodForCause";
import ProjectGreen from "./components/ProjectGreen";
import GiveHerWings from "./components/GiveHerWings";
import StriveWithPride from "./components/StriveWithPride";
import BloodDonation from "./components/BloodDonation";
import Covid from "./components/Covid";
import VoiceForVoiceless from "./components/VoiceForVoiceless";
import ProjectRuya from "./components/ProjectRuya";
import OtherActivities from "./components/OtherActivities";

import Join from "./components/Join";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/join-us" element={<Join/>} />
        <Route exact path="/contact-us" element={<ContactUs/>} />
        <Route exact path="/strivewithpride" element={<StriveWithPride/>} />
        <Route exact path="/giveherwings" element={<GiveHerWings/>} />
        <Route exact path="/projectgreen" element={<ProjectGreen/>} />
        <Route exact path="/blooddonation" element={<BloodDonation/>} />
        <Route exact path="/foodforcause" element={<FoodForCause/>} />
        <Route exact path="/covid19"  element={<Covid/>} />
        <Route exact path="/voiceforvoiceless"  element={<VoiceForVoiceless/>} />
        <Route exact path="/projectruya"  element={<ProjectRuya/>} />
        <Route exact path="/otheractivities"  element={<OtherActivities/>} />
     
      </Routes>
      
      <Footer />

    </div>
  );
}

export default App;
