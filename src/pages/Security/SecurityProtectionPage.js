import React, { useEffect, useRef } from "react";
import Insight from "../../components/Insight";
import AdvertOne from "../../components/Adverts/AvertOne";
import Help from "../../components/Help/Help";
import ServicesHero from "../../components/Hero/ServicesHero";
import MakoniWay from "../../components/MakoniWay/MakoniWay";
import Results from "../../components/Results/Results";
import ServicesTab from "../../components/Tab/ServicesTab";
import OurWork from "../../components/Work/OurWork";
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from "react-router-dom";

const SecurityProtectionPage = () => {
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
      {/* <ServicesHero title='Security Protection' category='Security'/> */}
      <div className='security_hero'>
        <div className= "videoSection">
          <video
            playsInline
            loop
            muted
            // controls
            alt="All the devices"
            src={"https://makoni-website-videos.s3.amazonaws.com/SecurityProtectionCompressed.mp4"}
            ref={videoEl}
            type="video/mp4"
          />
          <div className={`hero-wrapper slideWrappervideo`}>
            <h5>Security</h5>
            <h3>Security Protection</h3>
            <p>Defending your users and data, no matter where they are, is a more
                critical job than ever before.
            </p>

            <div className={`related-cs`}>
              <div>
                <h5>Related Services</h5>
                <ul>
                  <li><a style={{color:'#fff'}} href='/security-detection'>Security Detection</a></li>
                  {/* <li><a style={{color:'#fff'}} href='/security-protection'>Security Protection</a></li> */}
                  <li><a style={{color:'#fff'}} href='/zero-trust-network'>Zero Trust Network</a></li>
                  <li><a style={{color:'#fff'}} href='/cloud-assessments'>Cloud Assessments & Scanning tools</a></li>
                  <li><a style={{color:'#fff'}} href='/firewall-managment'>Firewall Management</a></li>
                  <li><a style={{color:'#fff'}} href='/vulnerability-management'>Vulnerability Management</a></li>
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

export default SecurityProtectionPage;
