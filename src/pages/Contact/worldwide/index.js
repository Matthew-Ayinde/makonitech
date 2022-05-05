import React from "react";
import "./styles.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const worldwide = () => {
  return (
    <section className="contact-worldwide">
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className="world-intro">
          <h2>Makoni Tech Worldwide</h2>
          <p>
            This map highlights where we focus our work to support communities and
            ecosystems around the world
          </p>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className="world-map">
          <img
            alt=""
            src={require("../../../images/mapGroupContact.svg").default}
          />
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default worldwide;
