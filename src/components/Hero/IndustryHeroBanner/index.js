import React from "react";
import { Container } from "react-bootstrap";
import "./styles.css";

const IndustryHero = ({ title, desc, heroBg }) => {
  return (
    <div className="hero">

      <Container>
        {/* pass background image class as prop, so as to use different component hero images */}
        <div className={heroBg}>
          <div></div>
        </div>

      <div className="ind_banner-text">
        <h5>INDUSTRY</h5>

        <h3>{title}</h3>
        <p>{desc} </p>
      </div>
        </Container>
    </div>
  );
};

export default IndustryHero;
