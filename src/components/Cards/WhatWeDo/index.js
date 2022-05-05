import React from "react";
import quote from "../../../images/quote.png";
import ScrollAnimation from 'react-animate-on-scroll';

import "./styles.css";

const index = ({ imgUrl, text }) => {
  return (
    <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <div className="card_wrap">
        <div className="card_container">
          <div className="card_left-img">
            <img src={imgUrl} alt="" />
          </div>
          <div className="text_area">
            <p>
              <img src={quote} alt="quote" />
              {text}
            </p>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default index;
