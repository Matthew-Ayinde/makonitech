import React from "react";
import { Link } from "react-router-dom";
import IMG from "../../../images/industry-nav.svg";
import "./Industires.scss";

const Industires = ({handleCloseSubNav}) => {
  return (
    <div className='industries_wrapper'>
      <div className='industry_grid'>
        <ul>
          <li>
            <Link to='/industries' onClick={handleCloseSubNav}>* Industries</Link>
          </li>
          <li>
            <Link to='/aerospace' onClick={handleCloseSubNav}>* Aerospace and Defense</Link>
          </li>
          <li>
            <Link to='/consumer-products' onClick={handleCloseSubNav}>* Consumer Products</Link>
          </li>
          <li>
            <Link to='/energy-and-natural-resources' onClick={handleCloseSubNav}>* Energy And Natural Resources</Link>
          </li>
          <li>
            <Link to='/financial-services' onClick={handleCloseSubNav}>* Financial Services</Link>
          </li>
          
        </ul>
      </div>
      <div className='industry_grid'>
        <ul>
        <li>
            <Link to='/automobile-and-mobility' onClick={handleCloseSubNav}>* Automotive and Mobility</Link>
          </li>
          <li>
            <Link to='/forest-products' onClick={handleCloseSubNav}>* forest-products</Link>
          </li>
          <li>
            <Link to='/agriculture' onClick={handleCloseSubNav}>* Agriculture</Link>
          </li>
          <li>
            <Link to='/automobile-and-mobility' onClick={handleCloseSubNav}>* Aerospace and Defense</Link>
          </li>
          <li>
            <Link to='/nearshore' onClick={handleCloseSubNav}>* Nearshore</Link>
          </li>
        </ul>
      </div>
      <div className='industry_grid'>
        <ul>
          <li>
            <Link to='/fintech' onClick={handleCloseSubNav}>* Banking & Financial Services</Link>
          </li>
          <li>
            <Link to='/logistics' onClick={handleCloseSubNav}>* Industrial & Logistics</Link>
          </li>
          <li>
            <Link to='/entertainment' onClick={handleCloseSubNav}>* Media & Entertainment</Link>
          </li>
          <li>
            <Link to='/entertainment' onClick={handleCloseSubNav}>* Marketing</Link>
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
