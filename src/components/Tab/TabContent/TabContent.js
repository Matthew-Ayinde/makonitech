import React from "react";
import goals from "../../../images/goals.png";
import "./TabContent.scss";

const TabContent = () => {
  return (
    <div>
      <div className='tab_content'>
        <div className='tab_info'>
          <h3>Our approach to solving problems</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Lorem ipsum amet minim mollit non deserunt ullamco est sit
            aliqua dolor do amet sint. Velit officia consequat duis enim velit
            mollit. minim mollit non deserunt ullamco est sit aliqua dolor do
            amet sint. Lorem ipsum amet minim mollit non deserunt ullamco est
            sit aliqua dolor do amet sint. Velit officia consequat duis enim
            velit mollit.
          </p>
          <p>
            m amet minim mollit non deserunt ullamco est sit aliqua dolor do
            amet sint. Velit officia consequat duis enim velit mollit. sint.
            Velit officia consequat duis enim velit mollit. m amet minim mollit
            non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequat duis enim velit mollit.
            <p className='read__more'>Read more</p>
          </p>
        </div>
        <div className='tab_image'>
          <img src={goals} alt='' />
        </div>
      </div>
    </div>
  );
};

export default TabContent;
