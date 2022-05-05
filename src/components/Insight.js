import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

const Insight = () => {
  return (
    <div className="insight">
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
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
              <p className="more_info"><a href="/insight">Read more</a></p>
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
                <p className="more_info"><a href="/insight">Read more</a></p>
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
                <p className="more_info"><a href="/insight">Read more</a></p>
              </article>
            </div>
          </section>
        </div>
        <section className="insight_footer">
        <a href="/insight">
          <button
            type="button"
            onClick={() => console.log("attach path")}
            className="insight_btn"
          >
            See All Insight
          </button>
          </a>
        </section>
        </ScrollAnimation>
      </div>
  );
};

export default Insight;
