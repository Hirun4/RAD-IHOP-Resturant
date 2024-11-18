import React from "react";
import naveen from "../Assets/naveen.jpeg";
import kavindu from "../Assets/kavindu.jpeg";
import januda from "../Assets/januda.jpeg";
import Navbar from "./Navbar";
import historyy from "../Assets/res.jpg";
import missionn from "../Assets/mis.jpg";
import valuee from "../Assets/val.jpg";
import Clock from "./Clock";

const Work = () => {
  const workInfoData = [
    {
      image: naveen,
      title: "Naveen-Founder & CEO",
      text: "Naveen is the visionary behind our restaurant, leading the team with passion and dedication. ",
    },
    {
      image: kavindu,
      title: "Kavindu-Head Chef",
      text: "Kavindu crafts each menu item with creativity and skill, ensuring every dish is a masterpiece. ",
    },
    {
      image: januda,
      title: "Januda-Customer Service Manager",
      text: "Januda ensures that our customers have the best possible experience, from placing their order to receiving their meal.",
    },
  ];
  return (
    <div className="about-us">
      <Navbar></Navbar>
      <Clock />
      <div className="work-section-wrapper">
        <div className="work-section-top">
          <h1 className="work-primary-heading">About Our Resturant</h1>
          <h2 className="history">Our History</h2>
          <img src={historyy} alt="" />
          <p className={"primary-text"}>
            Founded in 2010, our restaurant has grown from a small family-owned
            eatery to a beloved food delivery service. Over the years, we've
            built a reputation for our commitment to quality and customer
            satisfaction. From our humble beginnings, we have continuously
            evolved, embracing innovation while preserving our core values of
            excellence and dedication.
          </p>
          <h2 className="mission">Our Mission</h2>
          <img src={missionn} alt="" />
          <p className="primary-text">
            Our mission is to bring delicious, high-quality meals to your
            doorstep, providing a convenient and delightful dining experience.
            We strive to use the freshest ingredients, ensure timely deliveries,
            and offer exceptional customer service.
          </p>
          <h2 class="values">Our Values</h2>
          <img src={valuee} alt="" />
          <ul classname="values-list">
            <li>
              <strong>Quality:</strong> We use only the freshest ingredients to
              prepare our meals.
            </li>
            <li>
              <strong>Customer Satisfaction:</strong> We are committed to
              providing excellent service and delicious food to our customers.
            </li>
            <li>
              <strong>Innovation:</strong> We continually seek new ways to
              improve our menu and delivery service.
            </li>
            <li>
              <strong>Community:</strong> We value our community and strive to
              give back whenever possible.
            </li>
            <li>
              <strong>Sustainability:</strong> We are dedicated to sustainable
              practices, from sourcing ingredients to packaging.
            </li>
          </ul>
          <h2 className="team">Our Team</h2>
        </div>
        <div className="work-section-bottom">
          {workInfoData.map((data) => (
            <div className="work-section-info" key={data.title}>
              <div className="info-boxes-img-container">
                <img src={data.image} alt="" />
              </div>
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </div>
          ))}
        </div>
        
      </div>
      
    </div>
    
  );
};

export default Work;
