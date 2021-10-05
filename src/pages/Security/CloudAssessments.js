import React from "react";
// import ProblemApproach from "../../components/Security/ProblemApproach";
// import SubNav from "../../components/SubNav";
// import Result from "../../components/Security/ClientResults";
import Help from "../../components/Help/Help";
import ServicesHero from "../../components/Hero/ServicesHero";
import ServicesTab from "../../components/Tab/ServicesTab";
import Results from "../../components/Results/Results";
import AdvertOne from "../../components/Adverts/AvertOne";
import MakoniWay from "../../components/MakoniWay/MakoniWay";
import Insight from "../../components/Insight";

const CloudAssessments = () => {

  return (
    <>
      <ServicesHero title='Cloud Assessments' category='Security'/>
      <ServicesTab />
      <Results />
      <Help />
      <AdvertOne />
      <MakoniWay />
      <Insight />
    </>
  )
}

export default CloudAssessments;