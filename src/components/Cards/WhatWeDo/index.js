import React from "react";
import quote from "../../../images/quote.png";

import "./styles.css";

const index = ({ imgUrl, text }) => {
  return (
    <div className="card_wrap">
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
  );
};

export default index;
