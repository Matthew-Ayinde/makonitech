import React from "react";
import img1 from "../../../images/insight-img1.png";
import img2 from "../../../images/insight-img2.png";
import img3 from "../../../images/insight-img3.png";
import img4 from "../../../images/insight-img4.png";
import img5 from "../../../images/insight-img5.png";
import img6 from "../../../images/insight-img6.png";

import "./Insight.css";

const Insight = () => {
  return (
    <>
      <div className="insight_wrap">
        <div className="grid_wrap--1">
          <div className="insight_grid--1">
            <img src={img1} alt="" />
          </div>
          <div className="insight_grid--2">
            <img src={img2} alt="" />
            <div className="insight_text-area">
              <h5>Tech Disruption</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                cras nunc, ut sapien sapien, pretium aenean. A odio enim sed dui
                nisi ac. Aliquam dolor volutpat urna nibh orci fermentum.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="grid_wrap--2">
          <div className="insight_grid--3">
            <img src={img3} alt="" />
          </div>
          <div className="insight_grid--5">
            <img src={img5} alt="" />
            <div className="text--2">
              <h5>Digital Evolution</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                cras nunc, ut sapien sapien, pretium aenean. A odio enim sed dui
                nisi ac. Aliquam dolor volutpat urna nibh orci fermentum.
              </p>
              <a href="/">Read More</a>
            </div>
          </div>
        </div>

        <div className="grid_wrap--3">
          <div className="insight_grid--4">
            <img src={img4} alt="" />
          </div>
          <div className="insight_grid--6">
            <img src={img6} alt="" />
            <div className="insight_text-area text--3">
              <h5>Simplifying Complexity</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                cras nunc, ut sapien sapien, pretium aenean. A odio enim sed dui
                nisi ac. Aliquam dolor volutpat urna nibh orci fermentum.
              </p>
              <a href="/">Read More</a>
            </div>
          </div>
        </div>
      </div>
      <div className="insight_btn">
        <button>See All Insight</button>
      </div>
    </>
  );
};

export default Insight;
