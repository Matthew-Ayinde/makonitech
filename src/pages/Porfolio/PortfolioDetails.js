import React from "react";
import "./PortfolioDetails.scss";
import IMG from "../../images/image 18.png";
import IMG1 from "../../images/Group 11478.png";
import IMG2 from "../../images/ttt1.png";
import IMG3 from "../../images/ttt2.png";
import IMG4 from "../../images/ttt3.png";
import ScrollAnimation from 'react-animate-on-scroll';

const PortfolioDetails = () => {
  return (
    <div className='portfolio-details-wrapper'>
          <div className='portfolio-details_hero'>
            <div className='row portfolio-details_contents_wrapper'>
            <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
              <div className='col-md-8 col-sm-12 portfolio-details_hero_contents'>
                <h3> Case Study</h3>
                <p>Modernizes Existing Web App with Data Management</p>
              </div>
            </ScrollAnimation>

              {/* <div className='col-md-6 portfolio-details_hero_contents_img'>
                <img src={IMG} alt='' />
              </div> */}
            </div>
          </div>
      <div className='container about-details-contents'>
        <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
          <div className='row w-100'>
            <div className='col-lg-6 col-md-12  shrink-col'>
              <h2>ABOUT THE CLIENT</h2>
              <p className='special_pp'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in{" "}
              </p>
            </div>
            <div className='col-lg-6 col-md-12  shrink-col'>
              <h2>DESCRIPRION</h2>
            </div>
            <div className='col-lg-6 col-md-12  shrink-col'>
              <h2>PROJECT OVERVIEW</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit{" "}
              </p>
            </div>
            <div className='col-lg-6 col-md-12  shrink-col'>
              <img src={IMG} alt='img' className='img-fluid' />
            </div>
          </div>
        </ScrollAnimation>
      </div>

      <div className='solution_wrapper'>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className='container'>
          <div className=' row'>
            <div className=' col-lg-6 col-md-12 solution_contents'>
              <img src={IMG1} alt='' className='img-fluid' />
            </div>
            <div className=' col-lg-6 col-md-12 solution_contents'>
              <h2>THE SOLUTION</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <p>
                {" "}
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit{" "}
              </p>
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='display__img'>
                <img src={IMG2} alt='img' className='img-fluid' />
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='display__img'>
                <img src={IMG3} alt='img' className='img-fluid' />
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='display__img'>
                <img src={IMG4} alt='img' className='img-fluid' />
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      </div>
    </div>
  );
};

export default PortfolioDetails;
