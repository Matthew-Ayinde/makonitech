import React from "react";
import { Container } from "react-bootstrap";
import "./styles.css";
import ScrollAnimation from 'react-animate-on-scroll';

const IndustryHero = ({ title, desc, heroBg }) => {
  return (
    <div className={heroBg}>

      <Container>
        {/* pass background image class as prop, so as to use different component hero images */}
        {/* <div >
          <div></div>
        </div> */}
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className="ind_banner-text">
          <h5>INDUSTRY</h5>

          <h3>{title}</h3>
          <p>{desc} </p>
        </div>
      </ScrollAnimation>
        </Container>
    </div>
  );
};

export default IndustryHero;
