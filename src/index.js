import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import './App.css';
import About from "./Components/About";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Contacts from "./Components/Contacts";
import Testimonial from "./Components/Testimonial";

import Home from "./Components/Home";
import Work from "./Components/Work";
import { themeContext, ThemeContextProvider } from "./contextProviders/ThemeContextProvider";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home/>,
//   },
//   {
//     path: "Home",
//     element: <Home/>,
//   },
//   {
//     path: "About",
//     element: <About/>,
//   },
//   {
//     path: "Contacts",
//     element: <Contacts/>,
//   },
//   {
//     path: "Testimonial",
//     element: <Testimonial/>,
//   },
//   {
//     path: "Work",
//     element: <Work/>,
//   },
// ]);

// const [theme, setTheme] = useContext(themeContext)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
     
        <App />
      
    </ThemeContextProvider>
  </React.StrictMode>
);