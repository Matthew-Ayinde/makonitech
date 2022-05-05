// 'Who we are' page
import React from "react";
import AboutHero from "../../components/Hero/AboutHero/AboutHero";
import AboutTab from "../../components/Tab/AboutTab/AboutTab";
import partnerIcon from "../../images/arrow 5.svg";
import secImg from "../../images/secImg.png";
import secImg2 from "../../images/rectangle1730.png";
import secImg3 from "../../images/rectangle1731.png";
import secImg4 from "../../images/Group1000.png";
import TabContent from "../../components/Tab/AboutTab/AboutTabContent";
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from "react-router-dom";

import "./About.scss";

const About = () => {
  return (
    <div className='wrap-about_page'>
      <AboutHero
        title='Who We Are'
        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim purus tristique tincidunt sem ac dictum nam.'
        heroImageIndex='
  bg_styles--1'
      />
      <AboutTab TabComponent={TabContent} />
      <TabContent />
      
      <section className='sec_containerTwo'>
        <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
          <div className='container sec_content'>
            <div className='sec_text'>
              <h2>Ready to realise your product vision?</h2>
              <p>
              <Link to="/contact">
                Partner with Us
                <span className='partner-icon'>
                  <img src={partnerIcon} alt='' />
                </span>
                </Link>
              </p>
            </div>
            <div className='sec_img'>
              <img src={secImg} alt='' />
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* What we do section */}
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <section className='sec-containerThree'>
          <div className='sec_header'>
            <h3>What we do</h3>
          </div>
          <div className='sec_content'>
            <div className='container sec_content-one'>
              <div className='sec-one_img'>
                <img src={secImg2} alt='' />
              </div>
              <div className='sec-one_text'>
                <div>
                  <h5>Superior quality of work</h5>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                    amet sint. Velit officia consequat duis enim velit mollit.
                    Exercitation veniam consequat sunt do amet sint. Velit officia
                    consequat duis enim velit mollit. Exercitation veniam
                    consequat sunt{" "}
                  </p>
                </div>
                <div>
                  <h5>Interactive consultation</h5>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                    amet sint. Velit officia consequat duis enim velit mollit.
                    Exercitation veniam consequat sunt do amet sint. Velit officia
                    consequat duis enim velit mollit. Exercitation veniam
                    consequat sunt{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className='container sec_content-two'>
              <div className='sec-one_text'>
                <div>
                  <h5>High quality and detailed deliverables</h5>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                    amet sint. Velit officia consequat duis enim velit mollit.
                    Exercitation veniam consequat sunt do amet sint. Velit officia
                    consequat duis enim velit mollit. Exercitation veniam
                    consequat sunt
                  </p>
                </div>
                <div>
                  <h5>Superior quality of work</h5>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                    amet sint. Velit officia consequat duis enim velit mollit.
                    Exercitation veniam consequat sunt do amet sint. Velit officia
                    consequat duis enim velit mollit. Exercitation veniam
                    consequat sunt
                  </p>
                </div>
              </div>
              <div className='sec-one_img'>
                <img src={secImg3} alt='' />
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
      {/* Why Cloud Fift Section */}
      <section className='sec_container4'>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className='sec_header'>
          <h3>Why Makonitech</h3>
        </div>
        <div className='sec_content'>
          <div>
            <h6>Technology Pragmatists</h6>
            <p>
              We use tools and talents the job requires. Together with our
              clients to figure out requirements for a successful and intutive
              product.
            </p>
          </div>
          <div>
            <h6>Never compromise on quality</h6>
            <p>
              We don’t want our brand associated with anything that isn’t of the
              higest quality. We make quality products, we give quality advice
              and we only hire qulity people. People who want the best come to
              us for a reason
            </p>
          </div>
          <div>
            <h6>The experience is everything</h6>
            <p>
              We not only figure out the experience and write the code, but we
              give advice on the product development right from start. Our goal
              is to contribute to a thriving business
            </p>
          </div>
          <div>
            <h6>Technology Pragmatists</h6>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt
            </p>
          </div>
          <div>
            <h6>Never compromise on quality</h6>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt
            </p>
          </div>
          <div>
            <h6>The experience is everything</h6>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt
            </p>
          </div>
        </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
          <section className='inner-sec'>
            <div>
              <img src={secImg4} alt='' />
            </div>
            <div className='inner_sec-text'>
              <h4>Our Nearshore & Offshore Teams</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className='inner_sec-aside'>
                <p>
                  We offer flexible cooperation models that fit your goals,
                  resources and timeline.
                  <br />
                </p>
                  <h5>
                    <a href='/'>Learn More</a>
                  </h5>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </section>
    </div>
  );
};

export default About;
