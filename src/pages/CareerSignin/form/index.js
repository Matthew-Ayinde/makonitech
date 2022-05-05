import React from "react";
import "./styles.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const CareerSignInForm = () => {
  return (
    <div className="career-signup-form">
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className="career-signup-form__lead">
          <h1>Career Center</h1>
          <p>
            Receive job alerts, insider news/tips, and personalize your site
            experience. See how we work at the heart of change to do incredible
            things. <span>Log In</span> below.
          </p>
        </div>

        <form className="form-career">
          <div className="form-career-group">
            <label htmlFor="email">Email</label>
            <input id="email" placeholder="Enter your email" type="email" />
          </div>
          <div className="form-career-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              placeholder="Enter Password"
              type="password"
            />
          </div>
        
          <div className="form-career-checkbox">
            <label>
              <input type="checkbox" id="tick" />I would prefer not to receive
              marketing messages from Cloudtician
            </label>
          </div>
          <div className="submit-btn">
            <button>Log In</button>
          </div>
        </form>
      </ScrollAnimation>
    </div>
  );
};

export default CareerSignInForm;
