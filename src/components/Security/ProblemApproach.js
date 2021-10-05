import React from "react";
import goals from "../../images/goals.png";

const ProblemApproach = () => {

  return (
    <section className="approach">
      <div className="approach_content">
        <h3>Our approach to solving problems</h3>
        <div className="approach_info">
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Lorem ipsum amet minim mollit non     deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. minim mollit    non deserunt ullamco est sit aliqua dolor do amet sint. Lorem ipsum amet minim mollit non deserunt ullamco est  sit   aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
          </p>
          <p>
            m amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim       velit       mollit.  sint. Velit officia consequat duis enim velit mollit. 
            m amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim     velit   mollit. 
            <br />
            <span>Read more</span>
          </p>
        </div>
        <div>
          <img src={goals} alt="" />
        </div>
      </div>
      <div className="approach_footer">
        <strong>Partnership with over 200 companies</strong>
        <div className="dot"></div>
        <strong>Collaborating with teams accross 5 continents</strong>
        <div className="dot"></div>
        <strong>8 weeks from planning to finish</strong>
        <div className="dot"></div>
        <strong>Partners evaluation of over $6b</strong>
        <div className="dot"></div>
        <strong>Launched over 20 successful products</strong>
      </div>
    </section>
  )
}

export default ProblemApproach