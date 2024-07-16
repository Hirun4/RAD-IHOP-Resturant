import React from "react";
import AboutBackground from "../Assets/about-background-image.png";
import AboutBackgroundImage from "../Assets/oo.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import Navbar from "./Navbar";

const About = () => {
  return (
    <div><Navbar></Navbar>
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">*******</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
        At IHOP , we're passionate about bringing you delicious, high-quality meals straight 
        to your doorstep. </p>
        <p className="primary-text">
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
      </div>
    </div>
    </div>
  );
};

export default About;