import React from "react";
import "./Results.scss";

const Results = () => {
  return (
    <div className="results_wrapper">
      <header className="custom-header">
        <h4>Client Results</h4>
      </header>
      <span className="special-border"></span>
      <div className="results_content">
        <div className="count">
          <h2>52</h2>
          <p>Use case across 5 region</p>
        </div>
        <div className="count">
          <h2>200</h2>
          <p>Completed Projects</p>
        </div>
        <div className="count">
          <h2>5</h2>
          <p>Star ratings on app store</p>
        </div>
      </div>
    </div>
  );
};

export default Results;
