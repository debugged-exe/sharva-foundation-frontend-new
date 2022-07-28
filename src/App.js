import "./App.css";

import Footer from "./components/Footer";

import Home from "./components/Home";

import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import JoinUs from "./components/JoinUs";
import Initiatives from "./components/Initiatives";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/join-us" element={<JoinUs/>} />
        <Route exact path="/contact-us" element={<ContactUs/>} />
        <Route exact path="/initiatives" element={<Initiatives/>} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
