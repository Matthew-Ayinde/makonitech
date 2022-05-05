import React from "react";
import IndustryHeroBanner from "../../../../components/Hero/IndustryHeroBanner";
import MeetTeam from "../../../../components/Team/MeetTeam";
import imgUrl from "../../../../images/tall-building.png";
import airplane from "../../../../images/airplane.png";
import AerospaceCard from "../../../../components/Cards/WhatWeDo";
// import "./Aerospace.css";
import CentralNav from "../../../../components/NavBar/CentralNav/CentralNav";
import Insight from "../../../../components/Insight";
import Help from "../../../../components/Help/Help";
import Results from "../../../../components/Results/Results";
import ScrollAnimation from 'react-animate-on-scroll';

const ManufacturingOffshore = () => {
  return (
    <div>
      <IndustryHeroBanner
        title='Manufacturing Offshore'
        desc="Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.."
        heroBg={"fin-serv-hero"}
      />
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className='aero-about'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur.
          </p>
        </div>
      </ScrollAnimation>
      <div className="sec">
        <Results />
      </div>

      {/* What_we_do section - "wwd" */}
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className='wwd-section'>
          <div className='wwd-row1'>
            <CentralNav />
            <div className='wwd-img'>
              <img src={airplane} alt='' />
            </div>
          </div>

          <AerospaceCard
            imgUrl={imgUrl}
            text='Our networks are designed to provide specialist solutions and services to meet the peculiar needs of government and public services organisations in the following areas:'
          />
        </div>
      </ScrollAnimation>
      {/* <InsightComponent /> */}
      <MeetTeam />
      <Insight />
      <Help />
    </div>
  );
};

export default ManufacturingOffshore;
