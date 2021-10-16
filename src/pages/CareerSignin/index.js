import React from "react";
import "./styles.scss";
import CareerSignInForm from "./form";

const CareerSignIn = () => {
  return (
    <div className="career-signup">
      <div className="career-signup__left"></div>

      <div className="career-signup__right">
        <CareerSignInForm />
      </div>
    </div>
  );
};

export default CareerSignIn;
