import React from "react";
import "./styles.scss";
import CareerSignupForm from "./form";

const CareerSignup = () => {
  return (
    <div className="career-signup">
      <div className="career-signup__left"></div>

      <div className="career-signup__right">
        <CareerSignupForm />
      </div>
    </div>
  );
};

export default CareerSignup;
