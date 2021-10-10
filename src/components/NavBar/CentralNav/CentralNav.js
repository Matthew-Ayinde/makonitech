import React, { useState } from "react";
import "./CentralNav.css";

const CentralNav = () => {
  const [selectedTabOne, setSelectedTabOne] = useState(true);
  const [selectedTabTwo, setSelectedTabTwo] = useState(false);
  const [selectedTabThree, setSelectedTabThree] = useState(false);
  const [selectedTabFour, setSelectedTabFour] = useState(false);

  const handleTabOne = () => {
    setSelectedTabOne(!selectedTabOne);
    setSelectedTabTwo(false);
    setSelectedTabThree(false);
    setSelectedTabFour(false);
  };

  const handleTabTwo = () => {
    setSelectedTabOne(false);
    setSelectedTabTwo(!selectedTabTwo);
    setSelectedTabThree(false);
    setSelectedTabFour(false);
  };

  const handleTabThree = () => {
    setSelectedTabOne(false);
    setSelectedTabTwo(false);
    setSelectedTabThree(!selectedTabThree);
    setSelectedTabFour(false);
  };

  const handleTabFour = () => {
    setSelectedTabOne(false);
    setSelectedTabTwo(false);
    setSelectedTabThree(false);
    setSelectedTabFour(!selectedTabFour);
  };

  return (
    <div className="cnav-wrap">
      <ul>
        <li onClick={handleTabOne}>
          <div className="cnav-content">
            <h4>Commercial aviation</h4>
            {selectedTabOne ? (
              <p>
                The global pandemic has posed a profound stress test for every
                corner of the commercial aviation industry. As a new normal
                takes shape, we’re helping our clients redesign their operating
                models, navigate consolidation, and meet ambitious sustainability imperatives. Our clients include virtually every major aircraft and engine manufacturer, component creators, commercial transport companies, makers of jet propulsion systems, and dozens of key suppliers and service providers.
              </p>
            ) : (
              ""
            )}
          </div>
        </li>
        <li onClick={handleTabTwo}>
          <div className="cnav-content">
            <h4>Defense</h4>
            {selectedTabTwo ? (
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
            ) : (
              ""
            )}
          </div>
        </li>
        <li onClick={handleTabThree}>
          <div className="cnav-content">
            <h4>Space</h4>
            {selectedTabThree ? (
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
            ) : (
              ""
            )}
          </div>
        </li>
        <li onClick={handleTabFour}>
          <div className="cnav-content">
            <h4>Government services</h4>
            {selectedTabFour ? (
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
            ) : (
              ""
            )}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CentralNav;
