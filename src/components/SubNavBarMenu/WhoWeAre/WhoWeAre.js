import React from "react";
import "./WhoWeAre.scss";
import IMG from "../../../images/who-we-are-nav.svg";
import { Link } from "react-router-dom";

const WhoWeAre = () => {
  return (
    <div className='who_we_are_wrapper'>
      <div className='who_we_are_links'>
        <div className='who_we_are_items'>
          <h2>WHO WE ARE</h2>
          <div className='first'>
            <ul>
              <li>
                <Link to='/'>Who we are</Link>
              </li>
              <li>
                <Link to='/'>Our People Leadership</Link>
              </li>
              <li>
                <Link to='/'>How we work with Clients</Link>
              </li>
              <li>
                <Link to='/'>How we work</Link>
              </li>
              <li>
                <Link to='/'>Invesor Relations</Link>
              </li>
              <li>
                <Link to='/'>Our Process</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='who_we_are_items'>
          <h2>What we believe</h2>
          <div className='first'>
            <ul>
              <li>
                <Link to='/'>Business Affiliation</Link>
              </li>
              <li>
                <Link to='/'>Corporate Responsibility</Link>
              </li>
              <li>
                <Link to='/'>Build your team</Link>
              </li>
              <li>
                <Link to='/'>Inclusion & Diversity</Link>
              </li>
              <li>
                <Link to='/'>Careers</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='who_we_are_img'>
        <img src={IMG} alt='IMG' />
      </div>
    </div>
  );
};

export default WhoWeAre;
