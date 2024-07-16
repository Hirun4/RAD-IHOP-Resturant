import React, { useContext } from "react";
// import "./App.css";
import "./cssNew.css"

import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contacts";
import Footer from "./Components/Footer";
import { themeContext } from "./contextProviders/ThemeContextProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contacts from "./Components/Contacts";



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
    // <div className={"App " + theme}>
    //   <Home />
    //   <About />
    //   <Work />
    //   <Testimonial />
    //   <Contact />
    //   <Footer />
    // </div>
    <div className={theme}>
      <RouterProvider router={router} />
    </div>
    
  );
}

export default App;