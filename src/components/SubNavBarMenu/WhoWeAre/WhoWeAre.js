import React from "react";
import "./WhoWeAre.scss";
import IMG from "../../../images/who-we-are-nav.svg";
import { Link } from "react-router-dom";

const WhoWeAre = ({handleCloseSubNav}) => {
  return (
    <div className="who_we_are_wrapper">
      <div className="who_we_are_links">
        <div className="who_we_are_items">
          <h2>WHO WE ARE</h2>
          <div className="first">
            <ul>
              <li >
                <Link to="/about" onClick={handleCloseSubNav}>Who we are</Link>
              </li>
              <li>
                <Link to="/pal" onClick={handleCloseSubNav}>Our People Leadership</Link>
              </li>
              <li>
                <Link to="/csr" onClick={handleCloseSubNav}>How we work with Clients</Link>
              </li>
              <li>
                <Link to="/how_we_work" onClick={handleCloseSubNav}>How we work</Link>
              </li>
              <li>
                <Link to="/csr" onClick={handleCloseSubNav}>Invesor Relations</Link>
              </li>
              <li>
                <Link to="/" onClick={handleCloseSubNav}>Our Process</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="who_we_are_items">
          <h2>What we believe</h2>
          <div className="first">
            <ul>
              <li>
                <Link to="/" onClick={handleCloseSubNav}>Business Affiliation</Link>
              </li>
              <li>
                <Link to="/corporate_responsibility" onClick={handleCloseSubNav}>
                  Corporate Responsibility
                </Link>
              </li>
              <li>
                <Link to="/" onClick={handleCloseSubNav}>Build your team</Link>
              </li>
              <li>
                <Link to="/" onClick={handleCloseSubNav}>Inclusion & Diversity</Link>
              </li>
              <li>
                <Link to="/careers" onClick={handleCloseSubNav}>Careers</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="who_we_are_img">
        <img src={IMG} alt="IMG" />
      </div>
    </div>
  );
};

export default WhoWeAre;
