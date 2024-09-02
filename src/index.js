import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import {  ThemeContextProvider } from "./contextProviders/ThemeContextProvider";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
     
        <App />
      
    </ThemeContextProvider>
  </React.StrictMode>
);