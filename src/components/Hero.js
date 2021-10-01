import React from "react";
import {Link} from 'react-router-dom'
import { Container } from "react-bootstrap";
import Herobg from "../images/hero-bg.png"

const Hero = () => {

  return (
    <section className="hero">
      <Container>
        <div className="hero_bg">
          <img src={Herobg} alt="Hero" />
        </div>
        <div className="hero_content">
          <div className="hero_info">
            <h1>
              <span>Building secure</span>
              <br /> 
              <span>on-prem & cloud</span> 
              <br />
              <span>environment.</span>
            </h1>
            <p>
              <span>Defending your users and data, no matter where they are,</span> 
              <br />
              <span>is a more critical job than ever before.</span>
            </p>
          </div>
          <div className="hero_nav">
            <ul className="hero_nav-list">
              <li className="hero_nav-item">
                <Link>Private Equity </Link>
              </li>
              <li className="hero_nav-item">
                <Link>Agile Enterprise</Link>
              </li>
              <li className="hero_nav-item">
                <Link>Health Care</Link>
              </li>
              <li className="hero_nav-item">
                <Link>Authomative</Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero;