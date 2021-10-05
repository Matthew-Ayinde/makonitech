import React, { useState } from "react";
import "./CentralNav.css";

const CentralNav = () => {
  const [showContent, setShowContent] = useState(true);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <div className="cnav-wrap">
      <ul>
        <li onClick={toggleContent}>
          <div className="cnav-content">
            <h4>Commercial aviation</h4>
            {showContent ? (
              
              <p>
                The global pandemic has posed a profound stress test for every
                corner of the commercial aviation industry. As a new normal
                takes shape, we’re helping our clients redesign their operating
                models, navigate consolidation, and meet ambitious
                sustainability imperatives. Our clients include virtually every
                major aircraft and engine manufacturer, component creators,
                commercial transport companies, makers of jet propulsion
                systems, and dozens of key suppliers and service providers.
              </p>
            ) : ""}
          </div>
        </li>
        <li onClick={toggleContent}>
          <div className="cnav-content">
            <h4>Defense</h4>
            {showContent ? (
              <p>
                The global pandemic has posed a profound stress test for every
                corner of the commercial aviation industry. As a new normal
                takes shape, we’re helping our clients redesign their operating
                models, navigate consolidation, and meet ambitious
                sustainability imperatives. Our clients include virtually every
                major aircraft and engine manufacturer, component creators,
                commercial transport companies, makers of jet propulsion
                systems, and dozens of key suppliers and service providers.
              </p>
            ) : ""}
          </div>
        </li>
        <li onClick={toggleContent}>
          <div className="cnav-content">
            <h4>Space</h4>
            {showContent ? (
              <p>
                The global pandemic has posed a profound stress test for every
                corner of the commercial aviation industry. As a new normal
                takes shape, we’re helping our clients redesign their operating
                models, navigate consolidation, and meet ambitious
                sustainability imperatives. Our clients include virtually every
                major aircraft and engine manufacturer, component creators,
                commercial transport companies, makers of jet propulsion
                systems, and dozens of key suppliers and service providers.
              </p>
            ) : ""}
          </div>
        </li>
        <li onClick={toggleContent}>
          <div className="cnav-content">
            <h4>Government services</h4>
            {showContent ? (
              <p>
                The global pandemic has posed a profound stress test for every
                corner of the commercial aviation industry. As a new normal
                takes shape, we’re helping our clients redesign their operating
                models, navigate consolidation, and meet ambitious
                sustainability imperatives. Our clients include virtually every
                major aircraft and engine manufacturer, component creators,
                commercial transport companies, makers of jet propulsion
                systems, and dozens of key suppliers and service providers.
              </p>
            ) : ""}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CentralNav;
