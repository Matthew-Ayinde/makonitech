import React from "react";
import WorkItem from "./WorkItem";
import Carousel from 'react-elastic-carousel';
import './our-work.css'
import ScrollAnimation from 'react-animate-on-scroll';

const OurWork = () => {

  const breakPoints = [
    {
      width: "1px",
      itemsToShow: 1,
      itemsToScroll: 1
    }
  ]

  return (
    <section className="work">
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <header>
          <h3>Our Work</h3>
          <p>Kobofund me Project</p>
        </header>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <Carousel breakPoints={breakPoints} infiniteLoop={true} enableAutoPlay autoPlaySpeed={13000} >
          <WorkItem />
          <WorkItem />
          <WorkItem />
        </Carousel>
      </ScrollAnimation>
    </section>
  )
}

export default OurWork;