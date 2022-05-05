import React from "react";
import { Link } from "react-router-dom";
import "./ServicesHero.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const ServicesHero = ({ text, title, sub_title, category }) => {
  console.log("title", title)
  return (
    <div className='security_hero'>
    <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <div className='security_hero_content'>
        <div className='security_hero_info'>
          <h1>SECURITY</h1>
          <h2>Application Discovery</h2>
          <p>
            Defending your users and data, no matter where they are,<br /> is a more
            critical job than ever before.
          </p>
        </div>
        <div className='security_hero_extra'>
          <div className='related_services'>
            <h3>Related Services</h3>
            <ul>
              <li>
                <Link to='/data-backup'>Data Backup & Restore</Link>
              </li>
              {/* <li>
                <Link to='/application-discovery'>Application Discovery</Link>
              </li> */}
              <li>
                <Link to='/business-continuity-planning'>Business Continuity Planning</Link>
              </li>
              <li>
                <Link to='/ongoing-maintenance'>Ongoing Maintenance</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  </div>
  );
};

export default ServicesHero;
