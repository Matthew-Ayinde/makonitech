import React from "react";
import { Link } from "react-router-dom";
import "./SortClients.scss";

const SortClients = () => {
  return (
    <div className='sort_clients_wrapper'>
      <div className='container sort_clients_contents'>
        <div className='vacancy-wrapper-head add_padding'>
          <div className='vacancy-wrapper-head-group'>
            <label htmlFor='vacancies-filter'>Vacancies</label>
            <div className='select-wrapper'>
              <select id='vacancies-filter'></select>
            </div>
          </div>
          <div className='vacancy-wrapper-head-group'>
            <label htmlFor='location'>All Location</label>
            <div className='select-wrapper'>
              <select id='location'></select>
            </div>
          </div>
          <div className='vacancy-wrapper-head-group'>
            <button>Search</button>
          </div>
        </div>
        <div className='row'>
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
        </div>

        <div className='learn_more_cta'>
          <button className='learn_more_cta_btn'>LOAD MORE</button>
        </div>
      </div>
    </div>
  );
};

export default SortClients;
