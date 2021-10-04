import React from "react";
import Insight from "../../components/Insight";
import AdvertOne from "../../components/Adverts/AvertOne";
import Help from "../../components/Help/Help";
import ServicesHero from "../../components/Hero/ServicesHero";
import MakoniWay from "../../components/MakoniWay/MakoniWay";
import Results from "../../components/Results/Results";
import ServicesTab from "../../components/Tab/ServicesTab";

const SecurityProtectionPage = () => {
  return (
    <>
      <ServicesHero title='Security Protection' category='Security'/>
      <ServicesTab />
      <Results />
      <Help />
      <AdvertOne />
      <MakoniWay />
      <Insight />
    </>
  );
};

export default SecurityProtectionPage;
