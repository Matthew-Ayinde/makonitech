import React, { useState } from "react";
import "./ServicesTab.scss";
import TabContent from "./TabContent/TabContent";
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';
const ServicesTab = () => {
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
    <div className='service_tab_wrapper'>
      {/* <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className='service_tabs'>
          <ul>
            <li className={selectedTabOne && "tab_active"} onClick={handleTabOne}>
              <Link to="#overview">Overview</Link> 
            </li>
            <li className={selectedTabTwo && "tab_active"} onClick={handleTabTwo}>
            <Link to="#clientresult">Client Result</Link>
            </li>
            <li
              className={selectedTabThree && "tab_active"} onClick={handleTabThree}>
              <Link to="#howcanhelp">How we can help</Link>
            </li>
            <li
              className={selectedTabFour && "tab_active"} onClick={handleTabFour}>
              <Link to="#insights">Insights</Link>
            </li>
          </ul>
        </div>
      </ScrollAnimation> */}
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        {selectedTabOne && (
          <div id="overview" className='service_tab_contents'>
            <TabContent />
          </div>
        )}
        {selectedTabTwo && (
          <div id="clientresult" className='service_tab_contents'>
            <TabContent />
          </div>
        )}
        {selectedTabThree && (
          <div id="howcanhelp" className='service_tab_contents'>
            <TabContent />
          </div>
        )}
        {selectedTabFour && (
          <div id="insights" className='service_tab_contents'>
            <TabContent />
          </div>
        )}
      </ScrollAnimation>




    </div>
  );
};

export default ServicesTab;
