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
            <Link to='/industries'>* Industries</Link>
          </li>
          <li>
            <Link to='/aerospace'>* Aerospace and Defense</Link>
          </li>
          <li>
            <Link to='/consumer-products'>* Consumer Products</Link>
          </li>
          <li>
            <Link to='/energy-and-natural-resources'>* Energy And Natural Resources</Link>
          </li>
          <li>
            <Link to='/financial-services'>* Financial Services</Link>
          </li>
          
        </ul>
      </div>
      <div className='industry_grid'>
        <ul>
        <li>
            <Link to='/automobile-and-mobility'>* Automotive and Mobility</Link>
          </li>
          <li>
            <Link to='/forest-products'>* forest-products</Link>
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
