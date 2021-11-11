import React from "react";
import styles from "./styles.module.scss";

const HomeInsight = () => {
  return (
    <section className={styles.insight}>
      <div className={`${styles.wrapper} wrapper`}>
        <h2>Insight</h2>

        <div className={styles.grid}>
          <div className={styles.left}>
            <div className={styles.bubble}>
              <h3>Tech Disruption</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                cras nunc, ut sapien sapien, pretium aenean. A odio enim sed dui
                nisi ac. Aliquam dolor volutpat urna nibh orci fermentum.{" "}
              </p>
              <a href="/">Read More</a>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.top}>
              <div className={styles.bubble}>
                <h3>Digital Evolution</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                  cras nunc, ut sapien sapien, pretium aenean. A odio enim sed
                  dui nisi ac. Aliquam dolor volutpat urna nibh orci fermentum.{" "}
                </p>
                <a href="/">Read More</a>
              </div>
              <div className={styles.img}></div>
            </div>

            <div className={styles.bottom}>
              <div className={styles.img}></div>
              <div className={styles.bubble}>
                <h3>Simplifying complexity</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                  cras nunc, ut sapien sapien, pretium aenean. A odio enim sed
                  dui nisi ac. Aliquam dolor volutpat urna nibh orci fermentum.{" "}
                </p>
                <a href="/">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeInsight;
