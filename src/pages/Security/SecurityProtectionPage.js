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
          <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
            <div className='security_hero_content slideWrappervideo'>
              <div className='security_hero_info'>
                <h1>SECURITY</h1>
                <h2>Security Protection</h2>
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
                      <Link to='/security-detection'>Security Detection</Link>
                    </li>
                    {/* <li>
                      <Link to='/security-protection'>Security Protection</Link>
                    </li> */}
                    <li>
                      <Link to='/cloud-assessments'>Cloud Assessments and Scanning tools</Link>
                    </li>
                    <li>
                      <Link to='/zero-trust-network'>Zero Trust Network</Link>
                    </li>
                    <li>
                      <Link to='/firewall-managment'>Firewall Management</Link>
                    </li>
                    <li>
                      <Link to='/vulnerability-management'>Vulnerability Management</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollAnimation>
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
