import React from "react";
import { industryInfo } from "../data/landingPageData";
import JoinCard from "../components/Help/JoinCard";

const Join = () => {

  return (
    <section className="join_team">
      <header>
        <h3>JOIN MAKONI TECH</h3>
      </header>
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