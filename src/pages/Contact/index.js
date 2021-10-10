import React from "react";
import "./styles.scss";
import ContactProject from "./project";
import Worldwide from "./worldwide";
import Faqs from "./faqs";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <section className="contact-page__hero">
        <h1>Contact Us</h1>
      </section>
      <section className="contact-page__intro">
        <div className="intro-lead">
          <p>CONTACT US</p>
          <h2>Makoni Tech </h2>
        </div>
        <div className="intro-grid">
          <div className="intro-grid-container">
            <div className="intro-icon">
              <i className="far fa-envelope"></i>
            </div>
            <div className="intro-card">
              <h3>Email</h3>
              <p>makonitech@gmail.com</p>
            </div>
          </div>
          <div className="intro-grid-container">
            <div className="intro-icon">
              <i className="far fa-phone-alt"></i>
            </div>
            <div className="intro-card">
              <h3>Phone</h3>
              <p>(702) 555-0122</p>
            </div>
          </div>
          <div className="intro-grid-container">
            <div className="intro-icon">
              <i className="far fa-map-marker-alt"></i>
            </div>
            <div className="intro-card">
              <h3>Location</h3>
              <p>4 Royal Ln. Mesa, New Jersey </p>
            </div>
          </div>
        </div>
      </section>
      <ContactProject />
      <Worldwide />
      <Faqs />
    </div>
  );
};

export default ContactPage;
