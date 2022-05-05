import React from "react";
import Help from "../../components/Help/Help";
import ServicesHero from "../../components/Hero/ServicesHero";
import ServicesTab from "../../components/Tab/ServicesTab";
import Results from "../../components/Results/Results";
import AdvertOne from "../../components/Adverts/AvertOne";
import MakoniWay from "../../components/MakoniWay/MakoniWay";
import Insight from "../../components/Insight";
import OurWork from "../../components/Work/OurWork";
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from "react-router-dom";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const AwsCloudServices = () => {
  return (
    <>
      {/* <ServicesHero title="AWS Cloud Services" category="Security" /> */}
      <div className='security_hero'>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className='security_hero_content'>
          <div className='security_hero_info'>
            <h1>Security</h1>
            <h2>AWS Cloud Services</h2>
            <p>
              Defending your users and data, no matter where they are,<br /> is a more
              critical job than ever before.
            </p>
          </div>
          <div className='security_hero_extra'>
            <div className='related_services'>
              <h3>Related Services</h3>
              <ul>
                {/* <li>
                  <Link to='/aws-cloud-services'>AWS Cloud Services</Link>
                </li> */}
                <li>
                  <Link to='/aws-cloud-services'>Azure Cloud Services</Link>
                </li>
                <li>
                  <Link to='/cloud-adoption'>Cloud Adoption</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      </div>
      <Tabs>
        <div className="service_tabs_pills">
          <TabList className="">
            <Tab>Overview</Tab>
            <Tab>Client Result</Tab>
            <Tab>How we can help</Tab>
            <Tab>Insight</Tab>
          </TabList>
          </div>
          <TabPanel>
            <ServicesTab />
            <Results />
            <OurWork />
            <Help />
            <AdvertOne />
            <MakoniWay />
            <Insight />
          </TabPanel>

          <TabPanel>
            <div className="mt-70">
              <Results />
            </div>
          </TabPanel>

          <TabPanel>
            <Help />
          </TabPanel>

          <TabPanel>
            <Insight />
          </TabPanel>
        </Tabs>
        
    </>
  );
};
export default AwsCloudServices;
