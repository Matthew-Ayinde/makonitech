import React from "react";
// import { Container } from "react-bootstrap";
import "./AboutHero.scss";

const AboutHero = ({ title, desc, heroImageIndex }) => {
  return (
    <div className={heroImageIndex}>
      {/* <Container> */}
        
        <div className="about_text">
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
      {/* </Container> */}
    </div>
  );
};

export default AboutHero;
