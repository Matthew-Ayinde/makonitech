import React from "react";
import styles from "./styles.module.scss";
import IMG from "../../../../images/industry-nav.svg";

const industries = () => {
  return (
    <>
      <div className={styles.left}>
        <ul>
          <li>
            <a href="/industries">All Industries</a>
          </li>
          <li>
            <a href="/aerospace">Aerospace and Defense</a>
          </li>
          <li>
            <a href="/consumer-products">Consumer Products</a>
          </li>
          <li>
            <a href="/energy-and-natural-resources">Energy And Natural Resources</a>
          </li>
          <li>
            <a href="/financial-services">Financial Services</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="/automobile-and-mobility">Automotive and Mobility</a>
          </li>
          <li>
            <a href="/forest-products">Healthcare</a>
          </li>
          <li>
            <a href="/">Agriculture</a>
          </li>
          <li>
            <a href="/">Fintech</a>
          </li>
          <li>
            <a href="/">Nearshore</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="/">Banking & Financial Services</a>
          </li>
          <li>
            <a href="/">Industrial & Logistics</a>
          </li>
          <li>
            <a href="/">Media & Entertainment</a>
          </li>
          <li>
            <a href="/">Manufacturing Offshore</a>
          </li>
        </ul>
      </div>

      <div className={styles.right}>
        <div className={styles.industriesImg}>
        <img src={IMG} alt='IMG' />
        </div>
      </div>
    </>
  );
};

export default industries;
