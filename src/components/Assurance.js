import React from "react";
import checked from "../images/check-circle.svg";

const Assurance = () => {

  return (
    <section className="assurance">
      <section className="assurance_content">
        <header>
          <h3>Keep your activities on the cloud with 100% security.</h3>
        </header>
        <div className="btn_wrapper">
          <button type="button" className="request_btn">Request A Quote</button>
        </div>
      </section> 
      <section className="assurance_footer">
        <div>
          <img src={checked} alt="Checked icon" />
          <p>24/7 Support Service</p>
        </div>
        <div>
          <img src={checked} alt="Checked icon" />
          <p>100% Quality Guarantee</p>
        </div>
        <div>
          <img src={checked} alt="Checked icon" />
          <p>No Service Downtime</p>
        </div>
      </section>
    </section>
  )
}

export default Assurance;