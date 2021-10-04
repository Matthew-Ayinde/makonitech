import React from "react";
import {Link} from 'react-router-dom'
import { Container } from "react-bootstrap";
//import Herobg from "../images/hero-bg.png"

const Hero = () => {

  return (
    <section className="hero">
      <Container>
        <div className="hero_content">
          <div className="hero_info">
            <h1>
              Building secure
              on-prem & cloud
              environment.
            </h1>
            <p>
              Defending your users and data, no matter where they are,
              is a more critical job than ever before.
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