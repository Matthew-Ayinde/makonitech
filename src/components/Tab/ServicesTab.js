import React, { useState } from "react";
import "./ServicesTab.scss";
import TabContent from "./TabContent/TabContent";

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
      <div className='service_tabs'>
        <ul>
          <li className={selectedTabOne && "tab_active"} onClick={handleTabOne}>
            Overview
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
      </div>

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
    </div>
  );
};

export default ServicesTab;
