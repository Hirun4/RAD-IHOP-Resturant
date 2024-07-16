import React from "react";
import ProfilePic from "../Assets/aruna.jpeg";
import { AiFillStar } from "react-icons/ai";
import Navbar from "./Navbar";
const Testimonial = () => {
  return (
    <div><Navbar></Navbar>
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">******</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        Welcome to our review page! Here, you'll find honest feedback from our valued
         customers about their experiences with our food delivery service. We pride ourselves
          on delivering delicious meals and exceptional service right to your doorstep. Read on 
          to see what others are saying about us!
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        The food delivery service from this restaurant exceeded expectations. The dishes arrived
         hot and fresh, beautifully packaged to maintain their presentation and quality. The 
         flavors were outstanding, with each bite showcasing the care and expertise put into
          its preparation. The delivery was prompt and the staff courteous, ensuring a smooth
          and pleasant experience from ordering to enjoying the meal at home.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Aruna Silva</h2>
      </div>
    </div>
    </div>
  );
};

export default Testimonial;