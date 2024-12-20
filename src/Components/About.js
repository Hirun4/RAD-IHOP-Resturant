import React from "react";

import { BsFillPlayCircleFill } from "react-icons/bs";
import Navbar from "./Navbar";
import Clock from "./Clock";
import Footer from "./Footer";
const About = () => {
  return (
    <div className="for-you"><Navbar></Navbar>
    <Clock />
    <div className="about-section-container">
      
      
      <div className="about-section-text-container">
     
        
        <h1 className="about-primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="about-primary-text">
        At IHOP , we're passionate about bringing you delicious, high-quality meals straight 
        to your doorstep. </p>
        <p className="about-primary-text">
        Our chefs use the freshest ingredients to create a diverse menu of mouth-watering dishes.
         Whether you're craving comfort food or something new, we've got something to satisfy
          every palate.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
          
        </div>
        <Footer />
      </div>
      
    </div>
    
    </div>
    
  );
};

export default About;