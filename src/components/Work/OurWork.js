import React from "react";
import WorkItem from "./WorkItem";
import Carousel from 'react-elastic-carousel';
import './our-work.css'

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
      <header>
        <h3>Our Work</h3>
        <p>Kobofund me Project</p>
      </header>
      <Carousel breakPoints={breakPoints}>
        <WorkItem />
        <WorkItem />
        <WorkItem />
      </Carousel>
    </section>
  )
}

export default OurWork;