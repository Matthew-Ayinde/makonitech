import React from "react";
import Hero from "../components/Hero";
import Reason from "../components/Reason";
import Testimonial from "../components/Testimonial";
import Questions from "../components/Question";
import Join from "../components/Join";
import Insight from "../components/Insight";
import OurWork from "../components/Work/OurWork";
// import HomeInsight from "../components/homeInsight";

const LandingPage = () => {

  return (
    <>
      <Hero />
      <OurWork />
      <Reason />
      <Testimonial />
      <Questions />
      <Join />
      <Insight />
      {/* <HomeInsight /> */}
    </>
  )
}

export default LandingPage;