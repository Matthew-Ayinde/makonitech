import React from "react";
import styles from "./styles.module.scss";
import img from "../../../../images/portfolio-nav.svg";

const portfolio = () => {
  return (
    <>
      <div className={styles.left}>
        <ul>
          <li>
            <a href="/portfolio">Customers we serve</a>
          </li>
          <li>
            <a href="/portfolio">Accomplishments</a>
          </li>
        </ul>
      </div>

      <div className={styles.right}>
        <div className={styles.image}>
          <img alt="" src={img} />
        </div>
      </div>
    </>
  );
};

export default portfolio;
