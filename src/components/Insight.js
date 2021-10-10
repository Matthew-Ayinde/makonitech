import React from "react";

const Insight = () => {
  return (
    <div className="insight">
      <header>
        <span className="special-border"></span> <h3>Insight</h3>
        <span className="special-border"></span>
      </header>
      <div className="insight_content">
        <section className="first_column">
          <article className="disruption">
            <h4>Tech Disruption</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio cras
              nunc, ut sapien sapien, pretium aenean. A odio enim sed dui nisi
              ac.orci fermentum.
            </p>
            <br />
            <p className="more_info">Read more</p>
          </article>
        </section>
        <section className="second_column">
          <div className="second_column_evolution">
            <article className="evolution">
              <h4>
                <span>Digital</span>
                <br />
                <span>Evolution</span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                cras nunc, ut sapien sapien, pretium aenean. A odio enim sed dui
                nisi ac.orci fermentum.
              </p>
              <br />
              <p className="more_info">Read more</p>
            </article>
            <section className="robot_bg"></section>
          </div>
          <div className="second_column_evolution">
            <section className="analysis_bg"></section>
            <article className="complexity">
              <h4>
                <span>Simplifying</span>
                <br />
                <span>complexity</span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                cras nunc, ut sapien sapien, pretium aenean. A odio enim sed dui
                nisi ac.orci fermentum.
              </p>
              <br />
              <p className="more_info">Read more</p>
            </article>
          </div>
        </section>
      </div>
      <section className="insight_footer">
        <button
          type="button"
          onClick={() => console.log("attach path")}
          className="insight_btn"
        >
          See All Insight
        </button>
      </section>
    </div>
  );
};

export default Insight;
