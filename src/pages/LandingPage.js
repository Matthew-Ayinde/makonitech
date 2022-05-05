import React from "react";
import Hero from "../components/Hero";
import Reason from "../components/Reason";
import Testimonial from "../components/Testimonial";
import Questions from "../components/Question";
import Join from "../components/Join";
import Insight from "../components/Insight";
import OurWork from "../components/Work/OurWork";
// import HomeInsight from "../components/homeInsight";
import CookieConsent, { Cookies } from "react-cookie-consent";
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
      <div className="cookies">
        <CookieConsent
          location="bottom"
          buttonText="I Agree"
          cookieName="myAwesomeCookieName2"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
        >
         <div className="leftCol">
          <div class="cookie_message__title">Our website uses cookies to personalise content and to analyse our traffic which may also result in profiling.</div>
          We may as well share information about your use of our site with our social media, advertising and analytics partners for advertising purposes. You may delete and block all cookies from this site <a href="#" >as described here</a>. Check our  <a href="/cookies-policy">cookie policy</a> to learn more on how we process your personal data.
        </div>
        </CookieConsent>
      </div>
      {/* <HomeInsight /> */}
    </>
  )
}

export default LandingPage;