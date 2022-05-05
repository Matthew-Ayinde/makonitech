import React from "react";
import goalsImg from "../images/bg-land-img.png";
import ScrollAnimation from 'react-animate-on-scroll';

const Goals = () => {
  return (
    <section className='goals'>
     
        <div className='goals_content'>
        <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
          <h2>We champion the bold to achieve the extraordinary.</h2>
          <p>
            We don’t want our brand associated with anything that isn’t of the
            higest quality. We make quality products, we give quality advice and
            we only hire qulity people. People who want the best come to us for a
            reason
          </p>
          <div className='balls'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              width='32'
              height='32'
              viewBox='0 0 32 32'
            >
              <path
                stroke='#333'
                d='M31.5 16a15.5 15.5 0 1 1-31 0 15.5 15.5 0 0 1 31 0Z'
              />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              width='32'
              height='32'
              viewBox='0 0 32 32'
            >
              <path
                stroke='#333'
                d='M31.5 16a15.5 15.5 0 1 1-31 0 15.5 15.5 0 0 1 31 0Z'
              />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              width='32'
              height='32'
              viewBox='0 0 32 32'
            >
              <path
                stroke='#333'
                d='M31.5 16a15.5 15.5 0 1 1-31 0 15.5 15.5 0 0 1 31 0Z'
              />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              width='32'
              height='32'
              viewBox='0 0 32 32'
            >
              <path
                stroke='#333'
                d='M31.5 16a15.5 15.5 0 1 1-31 0 15.5 15.5 0 0 1 31 0Z'
              />
            </svg>
          </div>
        </ScrollAnimation>
        </div>
        <div className='goals_img'>
        <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
          <img src={goalsImg} alt='Goals' />
        </ScrollAnimation>
        </div>
    </section>
  );
};

export default Goals;
