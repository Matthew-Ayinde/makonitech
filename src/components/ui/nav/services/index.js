import React from "react";
import styles from "./styles.module.scss";
// import { GoPrimitiveDot } from "react-icons/go";
import IMG from "../../../../images/Rectangle 1884.png";

const servicesDrop = () => {
  return (
    <>
      <div className={styles.left}>
        <div className={styles.consultancy}>
          <h3>Cloud Services</h3>

          <ul className={styles.what_we_do_link}>
            <li>
              <a href='/'>
                {/* <span>
                  <GoPrimitiveDot />
                </span> */}
                AWS Cloud Services
              </a>
            </li>
            <li>
              <a href='/'>
                {/* <span>
                  <GoPrimitiveDot />
                </span> */}
                Azure Cloud Services
              </a>
            </li>
            <li>
              <a href='/'>
                {/* <span>
                  <GoPrimitiveDot />
                </span> */}
                Cloud Adoption
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.intelligence}>
          <h3>Cloud Security</h3>
          <ul className={styles.what_we_do_link}>
            <li>
              <a href='/security-detection'>
                {/* <span>
                  <GoPrimitiveDot />
                </span> */}
                Security Detection
              </a>
            </li>
            <li>
              <a href='/security-protection'>
                {/* <span>
                  <GoPrimitiveDot />
                </span> */}
                Security Protection
              </a>
            </li>
            <li>
              <a href='/cloud-assessments'>
                {/* <span>
                  <GoPrimitiveDot />
                </span> */}
                Cloud Assessments and Scanning tools
              </a>
            </li>
            <li>
              <a href='/zero-trust-network'>
                {/* <span>
                  <GoPrimitiveDot />
                </span> */}
                Zero Trust Network
              </a>
            </li>
            <li>
              <a href='/firewall-managment'>
                {/* <span>
                  <GoPrimitiveDot />
                </span> */}
                Firewall Management
              </a>
            </li>
            <li>
              <a href='/vulnerability-management'>
                {/* <span>
                  <GoPrimitiveDot />
                </span> */}
                Vulnerability Management
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.unnamed}>
          <h3>Cloud Migration</h3>
          <ul className={styles.what_we_do_link}>
            <li>
              <a href='/data-migration'>
                {/* <span>
                  <GoPrimitiveDot />
                </span> */}
                Data Migration
              </a>
            </li>
            <li>
              <a href='/database-migration'>
                {/* <span>
                  <GoPrimitiveDot />
                </span> */}
                Database Migration
              </a>
            </li>
            <li>
              <a href='/server-migration'>
                {/* <span>
                  <GoPrimitiveDot />
                </span> */}
                Server Migration
              </a>
            </li>
            <li>
              <a href='/application-migration'>
                {/* <span>
                  <GoPrimitiveDot />
                </span> */}
                Application Migration
              </a>
            </li>
            <li>
              <a href='/'>
                {/* <span>
                  <GoPrimitiveDot />
                </span> */}
                Backup & Disaster Recovery
              </a>
            </li>
            <li>
              <a href='/'>
                {/* <span>
                  <GoPrimitiveDot />
                </span> */}
                Implementation & Deployment
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.recovery}>
          <h3>Cloud Disaster Recovery</h3>
          <ul className={styles.what_we_do_link}>
            <li>
              <a href='/data-backup'>
                {/* <span>
                  <GoPrimitiveDot />
                </span> */}
                Data Backup & Restore
              </a>
            </li>
            <li>
              <a href='/application-discovery'>
                {/* <span>
                  <GoPrimitiveDot />
                </span> */}
                Application Discovery
              </a>
            </li>
            <li>
              <a href='/business-continuity-planning'>
                {/* <span>
                  <GoPrimitiveDot />
                </span> */}
                Business Continuity Planning
              </a>
            </li>
            <li>
              <a href='/ongoing-maintenance'>
                {/* <span>
                  <GoPrimitiveDot />
                </span> */}
                Ongoing Maintenance
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.devops}>
          <h3>DevOps Consulting</h3>
          <ul className={styles.what_we_do_link}>
            <li>
              <a href='/devops-buildout'>
                {/* <span>
                  <GoPrimitiveDot />
                </span> */}
                DevOps Buildout
              </a>
            </li>
            <li>
              <a href='/devops-security-operations'>
                {/* <span>
                  <GoPrimitiveDot />
                </span> */}
                DevOps Security Operations
              </a>
            </li>
            <li>
              <a href='/big-data-analytics'>
                {/* <span>
                  <GoPrimitiveDot />
                </span>{" "} */}
                Big Data Analytics
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.servicesImg}>
          <img alt='IMG' src={IMG} />
        </div>
      </div>
    </>
  );
};

export default servicesDrop;
