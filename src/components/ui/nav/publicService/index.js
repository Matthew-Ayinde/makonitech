import React from "react";
import styles from "./styles.module.scss";
import IMG from "../../../../images/public-nav.svg";

const publicService = () => {
  return (
    <>
      <div className={styles.left}>
        <ul>
          <li>
            <a href="/public-sector-africa">Africa</a>
          </li>
          <li>
            <a href="/public-sector-middle-east">Middle Esat</a>
          </li>
          <li>
            <a href="/public-sector-usa">USA</a>
          </li>
          <li>
            <a href="/public-sector-europe">EUROPE</a>
          </li>
        </ul>
      </div>

      <div className={styles.right}>
        <div className={styles.image}>
        <img src={IMG} alt='IMG' />
        </div>
      </div>
    </>
  );
};

export default publicService;
