import React from "react";
import "./AboutHero.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const AboutHero = ({ title, desc, heroImageIndex }) => {
  return (
    <div className={heroImageIndex}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className="about_text whatwebelieve">
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default AboutHero;
