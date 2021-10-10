// About Tab content - atc
import React from "react";
import imgOne from "../../../../images/about-tab-img.png";
import imgTwo from "../../../../images/about-tab-img2.png";
import "./styles.scss";

const TabContent = () => {
  return (
    // ATC - About tab content
    <div className="atc_container">
      <div className="atc_inner-wrap">
        <div className="atc-img_wrap">
          <img className="imgOne" src={imgOne} alt="" />
          <img className="imgTwo" src={imgTwo} alt="" />
        </div>
        <div className="atc-text_wrap">
          <h3 className="atc-h1">Who We Are</h3>
          <p className="atc-p" style={{ color: "#1E2348" }}>
            <strong>
              We are in the business of solving problems. dolor do amet sint.
              Velit officia consequat duis enim velit mollit. Exercitation
              veniam consequat sunt{" "}
            </strong>
          </p>
          <p className="atc-p">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt do amet sint. Velit officia consequat duis
            enim velit mollit. Exercitation veniam consequat sunt s.
          </p>
          <p className="atc-p">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt do amet sint. Velit officia consequat duis
            enim velit mollit. Exercitation veniam consequat sunt ufwhiofwjow
            sunt do amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt.
          </p>
          <p className="atc-p">
            sunt do amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TabContent;
