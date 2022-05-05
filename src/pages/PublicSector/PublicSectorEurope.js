import React from "react";
import PublicSectopTab from "./PublicSectorTabs/PublicSectopTab";
import "./PublicSector.scss";
import AdvertOne from "../../components/Adverts/AvertOne";
import MakoniWay from "../../components/MakoniWay/MakoniWay";
import Insight from "../../components/Insight";
import Testimonial from "../../components/Testimonial";
import ScrollAnimation from 'react-animate-on-scroll';

const PublicSectorEurope = () => {
    return (
      <div className='public-sector'>
        <div className='public-sector-europe-hero'>
          <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
            <div className='public-sector-content'>
              <h1>Public Sector in Europe</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim
                purus tristique tincidunt sem ac dictum nam.
              </p>
            </div>
            </ScrollAnimation>
        </div>
        <PublicSectopTab />
        <AdvertOne />
        <MakoniWay />
        <Testimonial />
        <Insight />
      </div>
    );
}

export default PublicSectorEurope
