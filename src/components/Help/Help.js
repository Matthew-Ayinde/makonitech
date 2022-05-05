import React from "react";
import { helpData } from "../../data/servicesPageData";
import "./Help.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const Help = () => {
  return (
    
      <div className='help_wrapper'>
        <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <h3>How We Can Help</h3>
        <div className='help_contents'>
          {helpData.map((data) => (
            <div className='team_cards'>
              <img src={data.icons[0]} alt='' />
              <h4>{data.title}</h4>
              <div className='card_contents'>
                <p>{data.text}</p>
              </div>
              <div className='card_footers'>
                <p>{data.more}</p>
                <img src={data.icons[1]} alt='' />
              </div>
            </div>
          ))}
        </div>
    </ScrollAnimation>

      </div>
  );
};

export default Help;
