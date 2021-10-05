import React from "react";
import "./styles.css";

const IndustryHero = ({ title, desc, heroBg }) => {
  return (
    <div className="ind_banner">
      <div className="bg-overlay"></div>
      <img src={heroBg} alt="" />

      <div className="ind_banner-text">
        <h5>INDUSTRY</h5>

        <h3>{title}</h3>
        <p>{desc} </p>
      </div>
    </div>
  );
};

export default IndustryHero;
