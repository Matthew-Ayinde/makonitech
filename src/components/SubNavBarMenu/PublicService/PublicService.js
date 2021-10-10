import React from "react";
import { Link } from "react-router-dom";
import "./PublicService.scss";
import IMG from "../../../images/public-nav.svg";

const PublicService = ({handleCloseSubNav}) => {
  return (
    <div className='public_wrapper'>
      <div className='public-links'>
        <ul className='public-link'>
          <li>
            <Link to='/public-sector-africa' onClick={handleCloseSubNav}>Africa</Link>
          </li>
          <li>
            <Link to='/public-sector-middle-east' onClick={handleCloseSubNav}>Middle Esat</Link>
          </li>
          <li>
            <Link to='/public-sector-usa' onClick={handleCloseSubNav}>USA</Link>
          </li>
          <li>
            <Link to='/public-sector-europe' onClick={handleCloseSubNav}>Europe</Link>
          </li>
        </ul>
      </div>
      <div className='public-img'>
        <img src={IMG} alt='IMG' />
      </div>
    </div>
  );
};

export default PublicService;
