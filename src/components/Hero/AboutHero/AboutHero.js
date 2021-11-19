import React from "react";
import "./AboutHero.scss";

const AboutHero = ({ title, desc, heroImageIndex }) => {
  return (
    <div className={heroImageIndex}>
        <div className="about_text whatwebelieve">
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
    </div>
  );
};

export default AboutHero;
