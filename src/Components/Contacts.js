import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Form from "./Form";
import Clock from "./Clock";
const Contacts = () => {
  return (
    <div className="cont-theme">
      <Navbar />
      <Clock />
      <div className="contact-page-wrapper">
        <h1 className="contact-primary-heading">Have Question In Mind?</h1>
        <h1 className="contact-primary-heading">Let Us Help You</h1>
       
        <Form></Form>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Contacts;
