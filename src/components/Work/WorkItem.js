import React from "react";
import screen1 from '../../images/screen1.png';
import screen2 from '../../images/screen2.png';

const WorkItem = () => {

  return (
    <section className="work_item">
      <div className="sreen_one">
        <img src={screen1} alt="" />
      </div>

      <article>
        <div className="big__title">
          <h1>01</h1>
        <h4>INSURANCE STARTUP</h4>
        </div>
        <h5>Cloud Security & Compliance</h5>
        <p>
          Protect your cloud infrastructure from security threats, data loss and compliance risks with real time monitoring, auditing, and automated remedition
        </p>
        <div className="case_study">
          <div className="arrow_container">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="17" height="16" viewBox="0 0 17 16">
              <path fill="#000" d="M16.7 8.7a1 1 0 0 0 0-1.4L10.35.92a1 1 0 1 0-1.41 1.41L14.59 8l-5.66 5.66a1 1 0 0 0 1.41 1.41l6.37-6.36ZM0 9h16V7H0v2Z"/>
            </svg>                
          </div>
          <p>THE CASE STUDY</p>
        </div>
      </article>

      <div className="screen_two">
        <img src={screen2} alt="" />
      </div>
    </section>
  )
}

export default WorkItem;