import React from 'react'
import heroBg from "../../images/ind-hero-bg.png";
import './Industries.css'

function IndustriesHero() {
    return (
      <div className="ind_hero-bg">
        <div className="bg_img">
          <img src={heroBg} alt="" />
          <div className="bg-overlay"></div>
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
      </div>
    );
}

export default IndustriesHero
