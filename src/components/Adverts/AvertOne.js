import React from "react";
import { Link } from "react-router-dom";
import "./AdvertOne.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const AdvertOne = () => {
  return (
    <div className="advertone_wrapper">
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <div className="advertOne_content">
        
        <h1 className="sols">
          Ready To Realise Your Product
          <br /> Vission?
        </h1>
        <h1 className="soss">Ready To Realise Your Product Vission?</h1>
        <p>
          <Link to="/contact">Shoot Us A Message</Link>
        </p>
      </div>
      </ScrollAnimation>
    </div>
  );
};

export default AdvertOne;
