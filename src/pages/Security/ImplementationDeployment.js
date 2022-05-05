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
const ImplementationDeployment = () => {
  return (
    <>
      {/* <ServicesHero title="Implementation Deployment" category="Security" /> */}
      <div className='security_hero'>
        <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
          <div className='security_hero_content'>
            <div className='security_hero_info'>
              <h1>SECURITY</h1>
              <h2>Implementation & Deployment</h2>
              <p>
                Defending your users and data, no matter where they are,<br /> is a more
                critical job than ever before.
              </p>
            </div>
            <div className='security_hero_extra'>
              <div className='related_services'>
                <h3>Related Services</h3>
                <ul>
                  <li>
                    <Link to='/data-migration'>Data Migration</Link>
                  </li>
                  <li>
                    <Link to='/database-migration'>Database Migration</Link>
                  </li>
                  <li>
                    <Link to='/server-migration'>Server Migration</Link>
                  </li>
                  <li>
                    <Link to='/application-migration'>Application Migration</Link>
                  </li>
                  <li>
                    <Link to='/disaster-recovery'>Backup & Disaster Recovery</Link>
                  </li>
                  {/* <li>
                    <Link to='/implementation-deployment'>Implementation & Deployment</Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      <ServicesTab />
      <Results />
      <OurWork />
      <Help />
      <AdvertOne />
      <MakoniWay />
      <Insight />
    </>
  );
};
export default ImplementationDeployment ;
