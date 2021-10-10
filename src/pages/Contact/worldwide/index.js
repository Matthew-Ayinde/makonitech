import React from "react";
import "./styles.scss";

const worldwide = () => {
  return (
    <section className="contact-worldwide">
      <div className="world-intro">
        <h2>Makoni Tech Worldwide</h2>
        <p>
          This map highlights where we focus our work to support communities and
          ecosystems around the world
        </p>
      </div>

      <div className="world-map">
        <img
          alt=""
          src={require("../../../images/mapGroupContact.svg").default}
        />
      </div>
    </section>
  );
};

export default worldwide;
