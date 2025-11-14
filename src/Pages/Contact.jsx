import React from "react";
import ContactTop from "../Components/contact/ContactTop.jsx";
import Contactsecond from "../Components/contact/Contactsecond.jsx";
import ContactBottem from "../Components/contact/ContactBottem.jsx";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <div>
      <div className="mt-10 pt-20 mx-7">
        <div className="w-full mx-auto px-1">
          <ContactTop/>
          <Contactsecond/>
          <ContactBottem/>
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
