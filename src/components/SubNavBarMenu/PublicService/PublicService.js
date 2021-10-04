import React from "react";
import { Link } from "react-router-dom";
import "./PublicService.scss";
import IMG from "../../../images/public-nav.svg";

const PublicService = () => {
  return (
    <div className='public_wrapper'>
      <div className='public-links'>
        <ul className='public-link'>
          <li>
            <Link>Africa</Link>
          </li>
          <li>
            <Link>Middle Esat</Link>
          </li>
          <li>
            <Link>USA</Link>
          </li>
          <li>
            <Link>Europe</Link>
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
