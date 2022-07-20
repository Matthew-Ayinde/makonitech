import React from "react";
import styles from "./styles.module.scss";


const aboutDrop = () => {
  return (
    <>
      <div className={styles.aboutLeft}>
        <div className={styles.who}>
          <h3>WHO WE ARE</h3>
          <ul>
            <li>
              <a href="/about">Who we are</a>
            </li>
            <li>
              <a href="/pal">Our People Leadership</a>
            </li>
            {/* <li>
              <a href="/csr">How we work with Clients</a>
            </li> */}
            <li>
              <a href="/how_we_work">How we work</a>
            </li>
            <li>
              <a href="/csr">Investor Relations</a>
            </li>
            <li>
              <a href="/how_we_work">Our Process</a>
            </li>
          </ul>
        </div>

        <div className={styles.believe}>
          <h3>WHAT WE BELIEVE</h3>
          <ul>
            <li>
              <a href="/business-affiliation">Business Affiliation</a>
            </li>
            <li>
              <a href="/corporate-responsibility">Corporate Responsibility</a>
            </li>
            <li>
              <a href="/build-your-team">Build your team</a>
            </li>
            <li>
              <a href="/inclusion-diversity">Inclusion & Diversity</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.aboutRight}>
        <div className={styles.review}>
          <i className="fas fa-quote-left"></i>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
        </div>

        <div className={styles.reviewDetails}>
          <div className={styles.reviewImg}>
            <img alt="" src="/images/about-drop.png" />
          </div>
          <div className={styles.reviewInfo}>
            <span>Lucky Onoriode,</span>
            <span>CEO, Makonitech</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default aboutDrop;
