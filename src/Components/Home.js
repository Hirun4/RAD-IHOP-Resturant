import React, { useContext, useEffect, useState } from "react";


import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { themeContext } from "../contextProviders/ThemeContextProvider";

import Clock from "./Clock";

import BounceTextAnimation from "./BounceTextAnimation";
import Logo from '../Assets/images.jpeg';
import Logo2 from '../Assets/ii.jpg';

const Home = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
  });

  // const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [theme, setTheme] = useContext(themeContext)
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [message, setMessage] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setWelcomeMessage(`Welcome ${formData.firstName} ${formData.lastName}!`);
  };

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  useEffect(() => {
    const date = new Date().toLocaleTimeString()
    const hour = date.split(":")[0]
    const abbr = date.split(" ")[1]

    console.log(hour, " ", abbr)

    if(12 > hour && hour >= 6 && abbr == "AM"){
      setMessage("morning Sir/Madam!")
    }else if(( hour == 12 || (6 > hour && hour >= 1) ) && abbr == "PM"){
      setMessage("afternoon Sir/Madam!")
    }else if(12 > hour && hour >= 6 && abbr == "PM"){
      setMessage("evening Sir/Madam!")
    }else{
      setMessage("night Sir/Madam!")
    }
  })

  return (
    <div className={theme == "dark" ? "dark-theme" : "light-theme"}>
      <Navbar />
      <Clock />
      <div className="home-container">
        <div className="home-banner-container">
         
          <div className="home-text-section">
          
            <BounceTextAnimation />
            <div>
             {/* <img src={Logo} alt="Logo" className="responsive-image" /> */}
             <img src={Logo2} alt="Logo" className="responsive-image" />
            </div>
            <h1 className={"primary-heading ${theme}"}>
              Your Favorite Food Delivered Hot & Fresh
            </h1>
          
            <div className="form-section">
              <form onSubmit={handleSubmit}>
                <input className="one"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                />
                <input className="two"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                />
                <button className="sub" type="submit">Submit</button>
              </form>
              <p>{welcomeMessage}</p>
            </div>
            <div className="greeting">
              Good {message}
            </div>
            <p className="primary-text">
              Healthy switcher chefs do all the prep work, like peeling,
              chopping & marinating, so you can cook a fresh food.
            </p>
            <button className="secondary-button">
              Order Now <FiArrowRight />
            </button>
            </div>
          
         
        </div>

      </div>
    </div>
  );
};

export default Home;
