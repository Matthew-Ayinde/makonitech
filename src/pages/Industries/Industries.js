import React from "react";
import OurExpertise from "../../components/Expertise/OurExpertise";
// import NavBar from "../../components/NavBar/NavBar";
import "./Industries.css";
import IndustriesHero from "./IndustriesHero";
import img1 from "../../images/g-img1.png"
import img2 from "../../images/g-img2.png";

import img3 from "../../images/g-img3.png"
import img4 from "../../images/g-img4.png"
import img5 from "../../images/g-img5.png"
import img6 from "../../images/g-img6.png"
import img7 from "../../images/g-img7.png"


const Industries = () => {
  return (
    <div className="industries-wrap">
    
      <IndustriesHero />
      <IndSection />

      <OurExpertise />
    </div>
  );
};

export default Industries;

const IndSection = () => {
  return (
    <section className="ind_section">
      <h3>Ambitiously growing people together across different industries</h3>
      <div className="image_grid">
        <img className="grid_item--1" src={img1} alt="" />
        <img className="grid_item--2" src={img2} alt="" />
        <img className="grid_item--3" src={img3} alt="" />
        <img className="grid_item--4" src={img4} alt="" />
        <img className="grid_item--5" src={img5} alt="" />
        <img className="grid_item--6" src={img6} alt="" />
        <img className="grid_item--7" src={img7} alt="" />
      </div>
    </section>
  );
};
