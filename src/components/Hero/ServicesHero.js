import React from "react";
import { Link } from "react-router-dom";
import "./ServicesHero.scss";

const ServicesHero = ({ text, title, sub_title, category }) => {
  console.log("title", title)
  return (
    <div className='security_hero'>
      <div className='security_hero_content'>
        <div className='security_hero_info'>
          <h1>{category}</h1>
          <h2>{title}</h2>
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
                <Link to='/'>Security Protection</Link>
              </li>
              <li>
                <Link to='/'>Cloud Assessments</Link>
              </li>
              <li>
                <Link to='/'>Zero Trust Network</Link>
              </li>
              <li>
                <Link to='/'>Backup & Disaster Recovery</Link>
              </li>
              <li>
                <Link to='/'>Firewall Management</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;
