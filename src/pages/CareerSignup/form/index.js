import React from "react";
import "./styles.scss";

const CareerSignupForm = () => {
  return (
    <div className="career-signup-form">
      <div className="career-signup-form__lead">
        <h1>Career Center</h1>
        <p>
          Receive job alerts, insider news/tips, and personalize your site
          experience. See how we work at the heart of change to do incredible
          things. <span>Sign up</span> below.
        </p>
      </div>

      <form className="form-career">
        <div className="form-career-group">
          <label htmlFor="email">What’s your Email?</label>
          <input id="email" placeholder="Enter your email" type="email" />
        </div>
        <div className="form-career-group">
          <label htmlFor="password">Create a Password</label>
          <input
            id="password"
            placeholder="Create a Password"
            type="password"
          />
        </div>
        <div className="form-career-group">
          <label htmlFor="confirm">Confirm your password</label>
          <input id="confirm" placeholder="Confirm password" type="password" />
        </div>
        <div className="form-career-group">
          <label htmlFor="fullName">What should we call you?</label>
          <input id="fullName" placeholder="Enter full name" type="text" />
        </div>
        <div className="form-career-group">
          <label htmlFor="country">Country</label>
          <input id="country" placeholder="Nigeria" type="text" />
        </div>
        <div className="form-career-checkbox">
          <label>
            <input type="checkbox" id="tick" />I would prefer not to receive
            marketing messages from Cloudtician
          </label>
        </div>
        <div className="submit-btn">
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default CareerSignupForm;
