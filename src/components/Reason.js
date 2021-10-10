import React from "react";
import ReasonList from "./ReasonList";
import { reasonData } from "../data/landingPageData";
import rotate from "../images/rotate.svg";
import nuts from "../images/nuts.svg";
import cart from "../images/cart.svg";

const Reason = () => {

  return (
    <div className="reason">
      <section className="reason_intro">
        <h3>Why Choose Us?</h3>
        <p>
          We don’t want our brand associated with anything that isn’t of the higest quality. We make quality products, we 
        give quality advice and we only hire qulity people. People who want the best come to us for a reason
        </p>
        <div className="reasons_option">
          <section className="reasons_inner">
            <div>
              <img src={nuts} alt="" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="51" height="16" viewBox="0 0 51 16">
                <path fill="#040404" d="M50.7 8.7a1 1 0 0 0 0-1.4L44.35.92a1 1 0 1 0-1.41 1.41L48.59 8l-5.66 5.66a1 1 0 0 0 1.41 1.41l6.37-6.36ZM0 9h50V7H0v2Z"/>
              </svg>
              <h4>Our Story</h4>
            </div>
          </section>
          <div className="inner_vert"></div>
          <section className="reasons_inner">
            <div>
              <img src={rotate} alt="" />
              <span className="inner_line"></span>
              <h4>Our Services</h4>
            </div>
          </section>
          <div className="inner_vert"></div>
          <section className="reasons_inner">
            <div>
              <img src={cart} alt="" />
              <span className="inner_line"></span>
              <h4>Industries we serve</h4>
            </div>
          </section>
        </div>
        
      </section>
      
      <section className="reason_list">
        {
          reasonData.map(reas => {
            const {label, heading, content} = reas;
            return (
              <ReasonList  label={label} heading={heading} content={content} />
            )
          })
        }
      </section>
    </div>
  )
}

export default Reason;