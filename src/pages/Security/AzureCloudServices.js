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
const AzureCloudServices = () => {
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
      {/* <ServicesHero title="Azure Cloud Services" category="Security" /> */}
      <div className='security_hero'>
        <div className= "videoSection">
          <video
            playsInline
            loop
            muted
            // controls
            alt="All the devices"
            src={"https://makoni-website-videos.s3.amazonaws.com/AzureCloudServices1Compressed.mp4"}
            ref={videoEl}
            type="video/mp4"
          />
          <div className={`hero-wrapper slideWrappervideo`}>
            <h5>Security</h5>
            <h3>Azure Cloud Services</h3>
            <p>Defending your users and data, no matter where they are, is a more
                critical job than ever before.
            </p>

            <div className={`related-cs`}>
              <div>
                <h5>Related Services</h5>
                <ul>
                  <li><a style={{color:'#fff'}} href='/aws-cloud-services'>Azure Cloud Services</a></li>
                  <li><a style={{color:'#fff'}} href='/cloud-adoption'>Cloud Adoption</a></li>
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
export default AzureCloudServices;
