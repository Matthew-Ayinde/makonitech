import React from "react";
import JoinCard from "../JoinCard";
import { helpData } from "../../data/servicesPageData";

const Help = () => {

  return (
    <section className="help">
      <header>
        <h3>How We Can Help</h3>
      </header>
      {/*<div className="help_content">
        {
          helpData.map(data => {
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
      </div>*/}
    </section>
  )
}

export default Help;