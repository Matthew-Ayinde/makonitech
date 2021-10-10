import React from "react";
import { Container } from "react-bootstrap";
import "./AboutHero.scss";

const AboutHero = ({ title, desc, heroImageIndex }) => {
  return (
    <div className="hero">
      <Container>
        {/* pass background image class as prop, so as to use different component hero images */}
        <div className={heroImageIndex}>
          <div></div>
        </div>
        <div className="about_text">
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
      </Container>
    </div>
  );
};

export default AboutHero;
