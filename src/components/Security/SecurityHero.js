import React from "react";
import security from "../../images/security-hero.png";
import "./security.css";

const SecurityHero = ({text, title, sub_title}) => {

  return (
    <section className="security_hero">
      <div className="security_hero-bg">
        <img src={security} alt="" />
      </div>
      <section className="security_hero-content">
        <div className="security_hero-info">
          <h1>Security</h1>
          <h2>Security Detection</h2>
          <p>Defending your users and data, no matter where they are,
              is a more critical job than ever before.
          </p>
        </div>
        <div className="security_hero-extra">
          <div className="related-services">
            <h3>Related Services</h3>
            <p>
              Security Protection Cloud Assessments Zero Trust Network Backup & Disaster Recovery Firewall Management
            </p>
          </div>
        </div>
      </section>
    </section>
  )
}

export default SecurityHero;