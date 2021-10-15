import React from "react";
import icon1 from "../../../../../images/Group2.svg";
import icon2 from "../../../../../images/Group2.svg";
import icon3 from "../../../../../images/Group3.svg";
import icon4 from "../../../../../images/Group4.svg";
import icon5 from "../../../../../images/Group5.svg";
import icon6 from "../../../../../images/Group6.svg";

import "./styles.scss";

const TabComponent = () => {
  return (
    <div className="tab-component-wrap">
      <section className="sec_container1">
        <div className="sec_header">
          <h4>What you get with cloudfift</h4>
        </div>
        <div className="sec_content--one">
          <div className='bg-white-ff'>
            <img src={icon1} alt="" />
            <p>Top Talent</p>
          </div>
          <div>
            <img src={icon2} alt="" />
            <p>Flexible, cost-efficient cooperation models</p>
          </div>
          <div>
            <img src={icon3} alt="" />
            <p>Technology expertise</p>
          </div>
          <div>
            <img src={icon4} alt="" />
            <p>Design thinking transformation</p>
          </div>
          <div>
            <img src={icon5} alt="" />
            <p>Agile development method</p>
          </div>
          <div>
            <img src={icon6} alt="" />
            <p>Technological innovation</p>
          </div>
        </div>
      </section>

          </div>
  );
};

export default TabComponent;
