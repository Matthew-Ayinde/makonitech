import React from "react";
import { Link } from "react-router-dom";
import "./SortClients.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const SortClients = () => {
  return (
    <div className='sort_clients_wrapper'>
      <div className='container sort_clients_contents'>
        <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
          <div className='vacancy-wrapper-head add_padding'>
            <div className='vacancy-wrapper-head-group'>
              <label htmlFor='vacancies-filter'>Categories</label>
              <div className='select-wrapper'>
                <select id='vacancies-filter'></select>
              </div>
            </div>
            <div className='vacancy-wrapper-head-group'>
              <label htmlFor='location'>Month</label>
              <div className='select-wrapper'>
                <select id='location'></select>
              </div>
            </div>
            <div className='vacancy-wrapper-head-group'>
              <button>Show All</button>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4 col-sm-12 unique'>
              <div className='content_img_bg'>
                <h4>Cloudticians</h4>
                <h3>
                Education and Learning
                </h3>
                <p> Learn How we helped Cloudticians.org shape their Cloud Infrastructure for Delivering Tutorial videos.</p>
                <p><Link to="/portfolio-details">LEARN MORE</Link></p>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 unique'>
              <div className='content_img_bg'>
                  <h4>Timbo</h4>
                  <h3>
                  Telecommications
                  </h3>
                  <p>Learn How we helped Timbo Achieve Optimal Excellence in the cloud for Seamless meetings.</p>
                  <p><Link to="/portfolio-details">LEARN MORE</Link></p>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 unique'>
            <div className='content_img_bg'>
                  <h4>Tuvo</h4>
                  <h3>
                  Finance
                  </h3>
                  <p>Learn How we helped Tuvo achieve optimum security for fast and seamless transactions.</p>
                  <p><Link to="/portfolio-details">LEARN MORE</Link></p>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 unique'>
              <div className='content_img_bg'>
                  <h4>Kobofundme</h4>
                  <h3>
                  Startup&Finance
                  </h3>
                  <p>Learn How we helped Kobofundme achieve optimum security for safe crowdfunding.</p>
                  <p><Link to="/portfolio-details">LEARN MORE</Link></p>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 unique'>
              <div className='content_img_bg'>
                  <h4>Kobotree</h4>
                  <h3>
                  Finance
                  </h3>
                  <p>Learn How we helped Kobotree achieve optimum security for fast and seamless transactions.</p>
                  <p><Link to="/portfolio-details">LEARN MORE</Link></p>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 unique'>
              <div className='content_img_bg'>
                  <h4>Vindoc</h4>
                  <h3>
                  Medicine
                  </h3>
                  <p>Learn How we helped vindoce Achieve Optimal Excellence in the cloud.</p>
                  <p><Link to="/portfolio-details">LEARN MORE</Link></p>
              </div>
            </div>

            {/* <div className='col-md-4 col-sm-12 unique'>
              <div className='content_img_bg'>
                <h4>INSURANCE</h4>
                <h3>
                  SAAS FOR DIGITAL
                  <br /> RESEARCHES
                </h3>
                <p><Link to="/portfolio-details">LEARN MORE</Link></p>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 unique'>
              <div className='content_img_bg'>
                <h4>INSURANCE</h4>
                <h3>
                  SAAS FOR DIGITAL
                  <br /> RESEARCHES
                </h3>
                <p><Link to="/portfolio-details">LEARN MORE</Link></p>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 unique'>
              <div className='content_img_bg'>
                <h4>INSURANCE</h4>
                <h3>
                  SAAS FOR DIGITAL
                  <br /> RESEARCHES
                </h3>
                <p><Link to="/portfolio-details">LEARN MORE</Link></p>
              </div>
            </div>

            <div className='col-md-4 col-sm-12 unique'>
              <div className='content_img_bg'>
                <h4>INSURANCE</h4>
                <h3>
                  SAAS FOR DIGITAL
                  <br /> RESEARCHES
                </h3>
                <p><Link to="/portfolio-details">LEARN MORE</Link></p>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 unique'>
              <div className='content_img_bg'>
                <h4>INSURANCE</h4>
                <h3>
                  SAAS FOR DIGITAL
                  <br /> RESEARCHES
                </h3>
                <p><Link to="/portfolio-details">LEARN MORE</Link></p>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 unique'>
              <div className='content_img_bg'>
                <h4>INSURANCE</h4>
                <h3>
                  SAAS FOR DIGITAL
                  <br /> RESEARCHES
                </h3>
                <p><Link to="/portfolio-details">LEARN MORE</Link></p>
              </div>
            </div> */}
          </div>

          <div className='learn_more_cta'>
            <button className='learn_more_cta_btn'>LOAD MORE</button>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default SortClients;
