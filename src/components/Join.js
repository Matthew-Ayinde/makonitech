import React from "react";
import { industryInfo } from "../data/landingPageData";
import JoinCard from "../components/Help/JoinCard";
import ScrollAnimation from 'react-animate-on-scroll';

const Join = () => {

  return (
    <section className="join_team">
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <header>
          <h3>JOIN MAKONI TECH</h3>
        </header>
      </ScrollAnimation>

        <section>
          {
            industryInfo.map(data => {
              const {title, text, more, icons} = data;
              return (
                <JoinCard 
                  title={title}
                  text={text}
                  more={more}
                  icons={icons}
                />
              )
            })
          }
        </section>
    </section>
  )
}

export default Join;