import React from "react";
import "./MakoniWay.scss";
import IMG from "../../images/makoniway.svg";
const MakoniWay = () => {
  return (
    <div className='makoniway_wrapper'>
      <div className='makoniway_img'>
        <img src={IMG} alt='IMG' />
        <div className='makoni_header'>
          <h1>The Makoni Way</h1>
          <p>
            Makoni’s expert product design team lives and breathes your concept
            gaining insights from key stakeholders and the market at large, so
            you can develop your idea with confidence.
          </p>
        </div>
      </div>
      <div className='makoniway_contents'>
        <div className='makoniway_content'>
          <h2>Analysis and Scoping</h2>
          <p>
            We weave your objectives, milestones, expectations and budget
            together to create.
          </p>
        </div>
        <div className='makoniway_content'>
          <h2>UX Research</h2>
          <p>
            Our QA experts have a special eye for bugs and glitches. They test
            every pixel.
          </p>
        </div>
        <div className='makoniway_content'>
          <h2>QA Testing</h2>
          <p>
            We weave your objectives, milestones, expectations and budget
            together to create.
          </p>
        </div>
        <div className='makoniway_content'>
          <h2>Development</h2>
          <p>
            Our QA experts have a special eye for bugs and glitches. They test
            every pixel.
          </p>
        </div>
        <div className='makoniway_content'>
          <h2>App Lifecycle</h2>
          <p>
            We weave your objectives, milestones, expectations and budget
            together to create.
          </p>
        </div>
        <div className='makoniway_content'>
          <h2>Design</h2>
          <p>
            Our QA experts have a special eye for bugs and glitches. They test
            every pixel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MakoniWay;
