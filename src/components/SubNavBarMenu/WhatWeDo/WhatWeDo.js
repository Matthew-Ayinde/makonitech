import React from "react";
import { Link } from "react-router-dom";
import "./WhatWeDo.scss";
import IMG from "../../../images/who-we-are-nav.svg";

const WhatWeDo = () => {
  return (
    <div className='what-we-do-wrapper'>
      <div className='what-we-do-links'>
        <div className='single-nav-links'>
          <h2>Cloud Services</h2>
          <ul className='what-we-do-link'>
            <li>
              <Link to='/'>AWS Cloud Services</Link>
            </li>
            <li>
              <Link to='/'>Azure Cloud Services</Link>
            </li>
            <li>
              <Link to='/'>Cloud Adoption</Link>
            </li>
          </ul>
        </div>
        <div className='single-nav-links'>
          <h2>Cloud Security</h2>
          <ul className='what-we-do-link'>
            <li>
              <Link to='/security-detection'>Security Detection</Link>
            </li>
            <li>
              <Link to='/security-protection'>Security Protection</Link>
            </li>
            <li>
              <Link to='/cloud-assessments'>
                Cloud Assessments and Scanning tools
              </Link>
            </li>
            <li>
              <Link to='/zero-trust-network'>Zero Trust Network</Link>
            </li>
            <li>
              <Link to='/firewall-managment'>Firewall Management</Link>
            </li>
            <li>
              <Link to='/vulnerability-management'>
                Vulnerability Management
              </Link>
            </li>
          </ul>
        </div>
        <div className='single-nav-links'>
          <h2>Cloud Migration</h2>
          <ul className='what-we-do-link'>
            <li>
              <Link to='/data-migration'>Data Migration</Link>
            </li>
            <li>
              <Link to='/database-migration'>Database Migration</Link>
            </li>
            <li>
              <Link to='/server-migration'>Server Migration</Link>
            </li>
            <li>
              <Link to='/application-migration'>Application Migration</Link>
            </li>
            <li>
              <Link to='/'>Backup & Disaster Recovery</Link>
            </li>
            <li>
              <Link to='/'>Implementation & Deployment</Link>
            </li>
          </ul>
        </div>
        <div className='single-nav-links'>
          <h2>Cloud Disaster Recovery</h2>
          <ul className='what-we-do-link'>
            <li>
              <Link to='/data-backup'>Data Backup & Restore</Link>
            </li>
            <li>
              <Link to='/application-discovery'>Application Discovery</Link>
            </li>
            <li>
              <Link to='/business-continuity-planning'>
                Business Continuity Planning
              </Link>
            </li>
            <li>
              <Link to='/ongoing-maintenance'>Ongoing Maintenance</Link>
            </li>
          </ul>
        </div>
        <div className='single-nav-links'>
          <h2>DevOps Consulting</h2>
          <ul className='what-we-do-link'>
            <li>
              <Link to='/devops-buildout'>DevOps Buildout</Link>
            </li>
            <li>
              <Link to='/devops-security-operations'>
                DevSecOps (DevOps Security Operations)
              </Link>
            </li>
            <li>
              <Link to='/big-data-analytics'> Big Data Analytics</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='public-img'>
        <img src={IMG} alt='IMG' />
      </div>
    </div>
  );
};

export default WhatWeDo;
