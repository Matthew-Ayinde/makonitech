import React from "react";
import { disData } from "../data/landingPageData";
import Box from "./Box";
import ScrollAnimation from 'react-animate-on-scroll';

const Questions = () => {

  return (
    <div className="questions">
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <header>
          <h3>What is your industry?</h3>
          {/* <p>Answer two questions and put our thinking to work on your challenges.</p> */}
        </header>
        <section>
        <Box/>
          {/* {
            disData.map(data => (
              <Box text={data} />
            ))
          } */}
        </section>
      </ScrollAnimation>
    </div>
  )
}

export default Questions;