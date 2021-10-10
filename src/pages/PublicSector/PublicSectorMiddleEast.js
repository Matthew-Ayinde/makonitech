import React from "react";
import PublicSectopTab from "./PublicSectorTabs/PublicSectopTab";
import "./PublicSector.scss";
import AdvertOne from "../../components/Adverts/AvertOne";
import MakoniWay from "../../components/MakoniWay/MakoniWay";
import Insight from "../../components/Insight";
import Testimonial from "../../components/Testimonial";

const PublicSectorMiddleEast = () => {
  return (
    <div className='public-sector'>
      <div className='public-sector-middle-east-hero'>
        <div className='public-sector-content'>
          <h1>Public Sector in the Middle East</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim
            purus tristique tincidunt sem ac dictum nam.
          </p>
        </div>
      </div>
      <PublicSectopTab />
      <AdvertOne />
      <MakoniWay />
      <Testimonial />
      <Insight />
    </div>
  );
};

export default PublicSectorMiddleEast;
