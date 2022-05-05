import React from "react";
// import { Container } from "react-bootstrap";
// import heroBg from "../../images/ind-hero-bg.png";
import "./Industries.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from "react-router-dom";

function IndustriesHero() {
  return (
    <div className="hero_ind">
      {/* <Container> */}
        {/* pass background image class as prop, so as to use different component hero images */}
        <div className="ind_hero-new">
          <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
            <div className="ind_hero-text">
              <h2>Industries</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
                nisl mauris eu consectetur in odio ut risus. Ut cursus tortor
                viverra viverra nec in lectus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sodales nisl mauris eu consectetur in
                odio ut risus. Ut cursus tortor viverra viverra nec in lectus.
              </p>
              <div className="ind_hero-btn">
                <button><Link to="/contact" style={{color: "#fff"}}>Contact Us</Link></button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      {/* </Container> */}
    </div>
  );
}

export default IndustriesHero;
