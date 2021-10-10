import React from "react";
import AboutHero from "../../../components/Hero/AboutHero/AboutHero";
// import heroImg from '../../../images/about-hero2.png'
import AboutTab from "../../../components/Tab/AboutTab/AboutTab";
import TabComponent from "../../../components/Tab/AboutTab/AboutTabContent/HowWeWorkTabComponent";
import treeImg from "../../../images/image 2.svg";
import carouselImg from "../../../images/rectangle5.png";
import Img3 from "../../../images/rectangle17.png";
import circleThree from "../../../images/circle-three.svg";
import AccordionComponent from "../../../components/Accordion";
import Carousel from "react-elastic-carousel";

import "./HowWeWork.scss";

const HowWeWork = () => {
  return (
    <div>
      <AboutHero
        title="How We Work"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim purus tristique tincidunt sem ac dictum nam."
        heroImageIndex="bg_styles--2"
      />
      <AboutTab TabComponent={TabComponent} />
      <TabComponent />

      {/* Section2: How we work with our clients */}
      <section className="sec_container2">
        <div className="sec_header">
          <h4 style={{ color: "#C4C4C4" }}>How we work with our clients </h4>
        </div>
        <div className="sec-content">
          <img src={treeImg} alt="" />
        </div>
      </section>

      {/* Section3: How we corporate */}
      <section className="sec_container3">
        <div>
          <img src={Img3} alt="" />
        </div>
        <div>
          <h3>How We Cooporate</h3>
          <div>
            <AccordionComponent />
          </div>
        </div>
      </section>

      {/* Section4: What we do */}
      <section className="sec_container2">
        <div className="sec_header">
          <h4 style={{ color: "#C4C4C4" }}>What we do </h4>
        </div>
        <Carousel
          easing="cubic-bezier(1,.15,.55,1.54)"
          tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
          transitionMs={700}
          focusOnSelect={true}
          className="project_carousel"
          itemsToShow={1}
        >
          <div className="carousel_wrap">
            <div className="text_area">
              <div>
                <img src={circleThree} alt="" />
                <h6>Discovery</h6>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco aboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Utenim ad minim veniam, quis nostrud exercitation ullamco aboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu
              </p>
            </div>
            <img src={carouselImg} alt="" />
          </div>
          <div className="carousel_wrap">
            <div className="text_area">
              <div>
                <img src={circleThree} alt="" />
                <h6>Discovery</h6>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco aboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Utenim ad minim veniam, quis nostrud exercitation ullamco aboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu
              </p>
            </div>
            <img src={carouselImg} alt="" />
          </div>
          <div className="carousel_wrap">
            <div className="text_area">
              <div>
                <img src={circleThree} alt="" />
                <h6>Discovery</h6>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco aboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Utenim ad minim veniam, quis nostrud exercitation ullamco aboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu
              </p>
            </div>
            <img src={carouselImg} alt="" />
          </div>
          <div className="carousel_wrap">
            <div className="text_area">
              <div>
                <img src={circleThree} alt="" />
                <h6>Discovery</h6>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco aboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Utenim ad minim veniam, quis nostrud exercitation ullamco aboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu
              </p>
            </div>
            <img src={carouselImg} alt="" />
          </div>
        </Carousel>
      </section>
    </div>
  );
};

export default HowWeWork;
