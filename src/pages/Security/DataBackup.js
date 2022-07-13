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
const DataBackup = () => {
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
      {/* <ServicesHero title='Data Backup & Restore' category='Security'/> */}
      <div className='security_hero'>
        <div className= "videoSection">
          <video
            playsInline
            loop
            muted
            // controls
            alt="All the devices"
            src={"https://makoni-website-videos.s3.amazonaws.com/DataBackup&RestoreCompressed.mp4"}
            ref={videoEl}
            type="video/mp4"
          />
          <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
            <div className='security_hero_content slideWrappervideo'>
              <div className='security_hero_info'>
                <h1>SECURITY</h1>
                <h2>Data Backup & Restore</h2>
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
                      <Link to='/data-backup'>Data Backup & Restore</Link>
                    </li> */}
                    <li>
                      <Link to='/application-discovery'>Application Discovery</Link>
                    </li>
                    <li>
                      <Link to='/business-continuity-planning'>Business Continuity Planning</Link>
                    </li>
                    <li>
                      <Link to='/ongoing-maintenance'>Ongoing Maintenance</Link>
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
  )
}

export default DataBackup;