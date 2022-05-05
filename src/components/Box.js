import React from "react";
import { Link } from "react-router-dom";
const Box = ({text}) => {

  return (
    <>
      <div className="box">
        <Link to="/aerospace"><h4>Aerospace and Defense</h4></Link>
      </div>
      <div className="box">
        <Link to="/consumer-products"><h4>Consumer Products</h4></Link>
      </div>
      <div className="box">
        <Link to="/energy-and-natural-resources"><h4>Energy And Natural Resources</h4></Link>
      </div>
      <div className="box">
        <Link to="/financial-services"><h4>Financial Services</h4></Link>
      </div>
      <div className="box">
        <Link to="/automobile-and-mobility"><h4>Automotive and Mobility</h4></Link>
      </div>
      <div className="box">
        <Link to="/forest-products"><h4>Healthcare</h4></Link>
      </div>
      <div className="box">
        <Link to="/agriculture"><h4>Agriculture</h4></Link>
      </div>
      <div className="box">
        <Link to="/fintech"><h4>Fintech</h4></Link>
      </div>
      <div className="box">
        <Link to="/nearshore"><h4>Nearshore</h4></Link>
      </div>
      <div className="box">
        <Link to="/financial-services"><h4>Banking & Financial Services</h4></Link>
      </div>
      <div className="box">
        <Link to="/logistics"><h4>Industrial & Logistics</h4></Link>
      </div>
      <div className="box">
        <Link to="/entertainment"><h4>Media & Entertainment</h4></Link>
      </div>
      <div className="box">
        <Link to="/manufacturing-offshore"><h4>Manufacturing</h4></Link>
      </div>
      <div className="box">
        <Link to="/offshore"><h4> Offshore</h4></Link>
      </div>
      
    </>
  )
}

export default Box;