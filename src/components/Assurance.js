import React from "react";
import checked from "../images/check-circle.svg";
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from "react-router-dom";

const Assurance = () => {

  return (
    <section className="assurance">
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <section className="assurance_content">
          <header>
            <h3>Keep your activities on the cloud with 100% security.</h3>
          </header>
          <div className="btn_wrapper">
            <Link to="/contact" className="request_btn" style={{color: "#14151f"}}>Shoot Us A Message</Link>
          </div>
        </section> 
        <section className="assurance_footer">
          <div>
            <img src={checked} alt="Checked icon" />
            <p style={{marginBottom:'0'}}>24/7 Support Service</p>
          </div>
          <div>
            <img src={checked} alt="Checked icon" />
            <p style={{marginBottom:'0'}}>100% Quality Guarantee</p>
          </div>
          <div>
            <img src={checked} alt="Checked icon" />
            <p style={{marginBottom:'0'}}>No Service Downtime</p>
          </div>
        </section>
      </ScrollAnimation>
    </section>
  )
}

export default Assurance;