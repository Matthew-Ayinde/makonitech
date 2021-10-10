import React from "react";
import { Container } from "react-bootstrap";
// import heroBg from "../../images/ind-hero-bg.png";
import "./Industries.css";

function IndustriesHero() {
  return (
    <div className="hero">

      <Container>
        {/* pass background image class as prop, so as to use different component hero images */}
        <div className="ind_hero-new">
          <div></div>
        </div>

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
            <button>Contact Us</button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default IndustriesHero;
