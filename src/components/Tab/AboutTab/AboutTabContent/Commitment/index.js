import React from "react";
import commTabImg from "../../../../../images/comm-tab-img.png";
import "./styles.scss";

export const CommitmentTab = () => {
  return (
    <div className="commitment_wrap">
      <div className="comm-heading">
        <h3> What we believe</h3>
      </div>
      <div className="comm_content">
        <div className="comm-text_area">
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit Exercitation
            veniam consequat sunt <br />
            do amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt s.
          </p>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt
            <br />
            do amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt
          </p>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt
            <br />
            do amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt
            <br /> do amet sint. Velit officia consequat duis enim velit
            mollit.Exercitation veniam consequat sunt
          </p>
        </div>
        <div className="comm-tab_img">
          <img src={commTabImg} alt="" />
        </div>
      </div>
    </div>
  );
};
