import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.scss";
import IMG from "../../../images/portfolio-nav.svg";

const Portfolio = ({handleCloseSubNav}) => {
  return (
    <div className='portfolio_wrapper'>
      <div className='portfolio-links'>
        <ul>
          <li>
            <Link to="/" onClick={handleCloseSubNav}>Customers we Serve</Link>
          </li>
          <li>
            <Link to="/" onClick={handleCloseSubNav}>Accomplishments</Link>
          </li>
        </ul>
      </div>
      <div className='portfolio-img'>
        <img src={IMG} alt='IMG' />
      </div>
    </div>
  );
};

export default Portfolio;
