import React from "react";

const Insight = () => {

  return (
    <section className="insight">
      <header>
        <h3>Insight</h3>
      </header>
      <div className="insight_content">
        <section className="first_column">
          <article className="disruption">
            <h4>Tech Disruption</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio cras nunc, ut sapien sapien, pretium aenean. 
            A odio enim sed dui nisi ac.orci fermentum. 
            </p>
            <br />
            <p className="more_info">Read more</p>
          </article>
        </section>
        <section className="second_column">
          <div>
            <article className="evolution">
              <h4>
                <span>Digital</span>
                <br />
                <span>Evolution</span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio cras nunc, ut sapien sapien, pretium aenean. A odio enim sed dui nisi ac.orci fermentum. 
              </p>
              <br />
              <p className="more_info">Read more</p>
            </article>
            <section className="robot_bg">

            </section>
          </div>
          <div>
            <section className="analysis_bg"></section>
            <article className="complexity">
              <h4>
                <span>Simplifying</span>
                <br />
                <span>complexity</span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio cras nunc, ut sapien sapien, pretium aenean. 
              A odio enim sed dui nisi ac.orci fermentum. 
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
         >See All Insight</button>
      </section>
    </section>
  )
}

export default Insight;