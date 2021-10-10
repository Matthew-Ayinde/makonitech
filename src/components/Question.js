import React from "react";
import { disData } from "../data/landingPageData";
import Box from "./Box";

const Questions = () => {

  return (
    <div className="questions">
      <header>
        <h3>What is your industry?</h3>
        <p>Answer two questions and put our thinking to work on your challenges.</p>
      </header>
      <section>
        {
          disData.map(data => (
            <Box text={data} />
          ))
        }
      </section>
    </div>
  )
}

export default Questions;