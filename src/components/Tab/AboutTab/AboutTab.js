import React, { useState } from "react";
import "./AboutTab.scss";
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from "react-router-dom";

const AboutTab = ({ TabComponent }) => {
  const [selectedTabOne, setSelectedTabOne] = useState(true);
  const [selectedTabTwo, setSelectedTabTwo] = useState(false);
  const [selectedTabThree, setSelectedTabThree] = useState(false);
  const [selectedTabFour, setSelectedTabFour] = useState(false);

  const handleTabOne = () => {
    setSelectedTabOne(true);
    setSelectedTabTwo(false);
    setSelectedTabThree(false);
    setSelectedTabFour(false);
  };

  const handleTabTwo = () => {
    setSelectedTabOne(false);
    setSelectedTabTwo(true);
    setSelectedTabThree(false);
    setSelectedTabFour(false);
  };

  const handleTabThree = () => {
    setSelectedTabOne(false);
    setSelectedTabTwo(false);
    setSelectedTabThree(true);
    setSelectedTabFour(false);
  };

  const handleTabFour = () => {
    setSelectedTabOne(false);
    setSelectedTabTwo(false);
    setSelectedTabThree(false);
    setSelectedTabFour(true);
  };

  return (
    <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <div className="about_tab_wrapper">
        {/* <div className="about_tabs">
          <ul>
            <li className={selectedTabOne && "tab_active"} onClick={handleTabOne}>
              <Link to="/how_we_work#clientresult">Overview</Link>
            </li>
            <li className={selectedTabTwo && "tab_active"} onClick={handleTabTwo}>
              Client Result
            </li>
            <li
              className={selectedTabThree && "tab_active"}
              onClick={handleTabThree}
            >
              How we can help
            </li>
            <li
              className={selectedTabFour && "tab_active"}
              onClick={handleTabFour}
            >
              Insights
            </li>
          </ul>
        </div> */}

        {selectedTabOne && (
          <div className="about_tab_contents">
            {/* <TabContent /> */}
            {TabComponent}
          </div>
        )}
        {selectedTabTwo && (
          <div className="about_tab_contents">
            {/* <TabContent /> */}
            {TabComponent}
          </div>
        )}
        {selectedTabThree && (
          <div className="about_tab_contents">
            {/* <TabContent /> */}
            {TabComponent}
          </div>
        )}
        {selectedTabFour && (
          <div className="about_tab_contents">
            {/* <TabContent /> */}
            {TabComponent}
          </div>
        )}
      </div>
    </ScrollAnimation>
  );
};

export default AboutTab;
