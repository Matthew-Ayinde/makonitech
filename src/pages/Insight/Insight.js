import React from "react";
import "./Insight.scss";

const Insight = () => {
  return (
    <div className='portfolio_wrapper_page'>
      <div className='portfolio_wrapper_hero'>
        <div className='hero_contents'>
          <h1>Insight</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
            nisl mauris eu consectetur in odio ut risus. Ut cursus tortor
            viverra viverra nec in lectus. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sodales nisl mauris eu consectetur in
            odio ut risus. Ut cursus tortor viverra viverra nec in lectus.
          </p>
        </div>
      </div>

      <div className='container sort_clients_contents'>
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

       

      </div>
    </div>
  );
};

export default Insight;
