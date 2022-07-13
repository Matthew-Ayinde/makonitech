import React, { useEffect, useRef } from "react";
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
  const videoEl = useRef(null);
  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };
  useEffect(() => {
    attemptPlay();
  }, []);
  return (
    <>
      {/* <ServicesHero title="Implementation Deployment" category="Security" /> */}
      <div className='security_hero'>
        <div className= "videoSection">
          <video
            playsInline
            loop
            muted
            // controls
            alt="All the devices"
            src={"https://makoni-website-videos.s3.amazonaws.com/Implementation&DeploymentCompressed.mp4"}
            ref={videoEl}
            type="video/mp4"
          />
          <div className={`hero-wrapper slideWrappervideo`}>
            <h5>SECURITY</h5>
            <h3>Implementation & Deployment</h3>
            <p>Defending your users and data, no matter where they are, is a more
                  critical job than ever before.
            </p>

            <div className={`related-cs`}>
              <div>
                <h5>Related Services</h5>
                <ul>
                  <li><a style={{color:'#fff'}} href='/data-migration'>Data Migration</a></li>
                  <li><a a style={{color:'#fff'}} href='/database-migration'>Database Migration</a></li>
                  <li><a style={{color:'#fff'}} href='/server-migration'>Server Migration</a></li>
                  <li><a style={{color:'#fff'}} href='/application-migration'>Application Migration</a></li>
                  <li><a style={{color:'#fff'}} href='/disaster-recovery'>Backup & Disaster Recovery</a></li>
                  {/* <li><a style={{color:'#fff'}} href='/implementation-deployment'>Implementation & Deployment</a></li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
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
