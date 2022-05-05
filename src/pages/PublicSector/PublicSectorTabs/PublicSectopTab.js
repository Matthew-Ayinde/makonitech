import React, { useState } from "react";
import "./PublicSectorTab.scss";
import TabContent from "./TabContent/TabContent"
import ScrollAnimation from 'react-animate-on-scroll';

const PublicSectopTab = () => {
  const [selectedTabOne, setSelectedTabOne] = useState(true);
  const [selectedTabTwo, setSelectedTabTwo] = useState(false);
  const [selectedTabThree, setSelectedTabThree] = useState(false);
  const [selectedTabFour, setSelectedTabFour] = useState(false);
  const [selectedTabFive, setSelectedTabFive] = useState(false);

  const handleTabOne = () => {
    setSelectedTabOne(true);
    setSelectedTabTwo(false);
    setSelectedTabThree(false);
    setSelectedTabFour(false);
    setSelectedTabFive(false)
  };

  const handleTabTwo = () => {
    setSelectedTabOne(false);
    setSelectedTabTwo(true);
    setSelectedTabThree(false);
    setSelectedTabFour(false);
    setSelectedTabFive(false)
  };

  const handleTabThree = () => {
    setSelectedTabOne(false);
    setSelectedTabTwo(false);
    setSelectedTabThree(true);
    setSelectedTabFour(false);
    setSelectedTabFive(false)
  };

  const handleTabFour = () => {
    setSelectedTabOne(false);
    setSelectedTabTwo(false);
    setSelectedTabThree(false);
    setSelectedTabFour(true);
    setSelectedTabFive(false)
  };

  const handleTabFive = () => {
    setSelectedTabOne(false);
    setSelectedTabTwo(false);
    setSelectedTabThree(false);
    setSelectedTabFour(false);
    setSelectedTabFive(true)
  };

  return (
    <div className='service_tab_wrapper'>
      {/* <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className='service_tabs'>
          <ul>
            <li className={selectedTabOne && "tab_active"} onClick={handleTabOne}>
              Overview
            </li>
            <li className={selectedTabTwo && "tab_active"} onClick={handleTabTwo}>
              Europe
            </li>
            <li
              className={selectedTabThree && "tab_active"}
              onClick={handleTabThree}
            >
              Middle East
            </li>
            <li
              className={selectedTabFour && "tab_active"}
              onClick={handleTabFour}
            >
              United States
            </li>
            <li
              className={selectedTabFive && "tab_active"}
              onClick={handleTabFive}
            >
              Africa
            </li>
          </ul>
        </div>
      </ScrollAnimation> */}
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        {selectedTabOne && (
          <div className='service_tab_contents'>
            <TabContent />
          </div>
        )}
        {selectedTabTwo && (
          <div className='service_tab_contents'>
            <TabContent />
          </div>
        )}
        {selectedTabThree && (
          <div className='service_tab_contents'>
            <TabContent />
          </div>
        )}
        {selectedTabFour && (
          <div className='service_tab_contents'>
            <TabContent />
          </div>
        )}
        {selectedTabFive && (
          <div className='service_tab_contents'>
            <TabContent />
          </div>
        )}
      </ScrollAnimation>
    </div>
  );
};

export default PublicSectopTab;
