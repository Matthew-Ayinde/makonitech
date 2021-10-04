import React from "react";
import { Link } from "react-router-dom";
import IMG from "../../../images/industry-nav.svg";
import "./Industires.scss";

const Industires = () => {
  return (
    <div className='industries_wrapper'>
      <div className='industry_grid'>
        <ul>
          <li>
            <Link to='/'>* Aerospace and Defense</Link>
          </li>
          <li>
            <Link to='/'>* Retail</Link>
          </li>
          <li>
            <Link to='/'>* Insurance</Link>
          </li>
          <li>
            <Link to='/'>* Non-Profit</Link>
          </li>
          <li>
            <Link to='/'>* Offshore</Link>
          </li>
        </ul>
      </div>
      <div className='industry_grid'>
        <ul>
          <li>
            <Link to='/'>* Automotive</Link>
          </li>
          <li>
            <Link to='/'>* Healthcare</Link>
          </li>
          <li>
            <Link to='/'>* Agriculture</Link>
          </li>
          <li>
            <Link to='/'>* Aerospace and Defense</Link>
          </li>
          <li>
            <Link to='/'>* Nearshore</Link>
          </li>
        </ul>
      </div>
      <div className='industry_grid'>
        <ul>
          <li>
            <Link to='/'>* Banking & Financial Services</Link>
          </li>
          <li>
            <Link to='/'>* Industrial & Logistics</Link>
          </li>
          <li>
            <Link to='/'>* Media & Entertainment</Link>
          </li>
          <li>
            <Link to='/'>* Marketing</Link>
          </li>
        </ul>
      </div>
      <div className='industry_grid'>
        <img src={IMG} alt='IMG' />
      </div>
    </div>
  );
};

export default Industires;
