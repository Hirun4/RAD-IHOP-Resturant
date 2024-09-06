import React, { useContext } from "react";
 import "./App.css";
//import "./cssNew.css"
import "./animation.css"
import "./theme.css"
import "./about.css"
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";

import Footer from "./Components/Footer";
import { themeContext } from "./contextProviders/ThemeContextProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contacts from "./Components/Contacts";
import "./contactform.css"
import "./themebutton.css"
import "./testimonials.css"
import "./work.css"
import "./Home.css"
import "./clock.css"


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "Home",
      element: <Home/>,
    },
    {
      path: "About",
      element: <About/>,
    },
    {
      path: "Contacts",
      element: <Contacts/>,
    },
    {
      path: "Testimonial",
      element: <Testimonial/>,
    },
    {
      path: "Work",
      element: <Work/>,
    },
  ]);

  const [theme, setTheme] = useContext(themeContext)
 
  return (
   
    <div className={theme}>
      <RouterProvider router={router} />
    </div>
    
  );
}

export default App;