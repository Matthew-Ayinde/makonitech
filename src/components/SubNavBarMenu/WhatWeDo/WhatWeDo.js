import React from "react";
import { Link } from "react-router-dom";
import "./WhatWeDo.scss";
import IMG from "../../../images/who-we-are-nav.svg";
import { GoPrimitiveDot } from "react-icons/go";

const WhatWeDo = ({ handleCloseSubNav }) => {
  return (
    <div className='what-we-do-wrapper'>
      <div className='what-we-do-links'>
        <div className='single-nav-links'>
          <h2>Cloud Services</h2>
          {/* <ul className='what-we-do-link'>
            <li>
              <Link to='/aws-cloud-services' onClick={handleCloseSubNav}>
                <span>
                  <GoPrimitiveDot />
                </span>
                AWS Cloud Services
              </Link>
            </li>
            <li>
              <Link to='/azure-cloud-services' onClick={handleCloseSubNav}>
                <span>
                  <GoPrimitiveDot />
                </span>
                Azure Cloud Services
              </Link>
            </li>
            <li>
              <Link to='/cloud-adoption' onClick={handleCloseSubNav}>
                <span>
                  <GoPrimitiveDot />
                </span>
                Cloud Adoption
              </Link>
            </li>
          </ul> */}
           <ul>
                <li>
                  <Link to='/aws-cloud-services'>AWS Cloud Services</Link>
                </li>
                <li>
                  <Link to='/aws-cloud-services'>Azure Cloud Services</Link>
                </li>
                <li>
                  <Link to='/cloud-adoption'>Cloud Adoption</Link>
                </li>
              </ul>
        </div>
        <div className='single-nav-links'>
          <h2>Cloud Security</h2>
          <ul className='what-we-do-link'>
            <li>
              <Link to='/security-detection' onClick={handleCloseSubNav}>
                <span>
                  <GoPrimitiveDot />
                </span>
                Security Detection
              </Link>
            </li>
            <li>
              <Link to='/security-protection' onClick={handleCloseSubNav}>
                <span>
                  <GoPrimitiveDot />
                </span>
                Security Protection
              </Link>
            </li>
            <li>
              <Link to='/cloud-assessments' onClick={handleCloseSubNav}>
                <span>
                  <GoPrimitiveDot />
                </span>
                Cloud Assessments and Scanning tools
              </Link>
            </li>
            <li>
              <Link to='/zero-trust-network' onClick={handleCloseSubNav}>
                <span>
                  <GoPrimitiveDot />
                </span>
                Zero Trust Network
              </Link>
            </li>
            <li>
              <Link to='/firewall-managment' onClick={handleCloseSubNav}>
                <span>
                  <GoPrimitiveDot />
                </span>
                Firewall Management
              </Link>
            </li>
            <li>
              <Link to='/vulnerability-management' onClick={handleCloseSubNav}>
                <span>
                  <GoPrimitiveDot />
                </span>
                Vulnerability Management
              </Link>
            </li>
          </ul>
        </div>
        <div className='single-nav-links'>
          <h2>Cloud Migration</h2>
          <ul className='what-we-do-link'>
            <li>
              <Link to='/data-migration' onClick={handleCloseSubNav}>
                <span>
                  <GoPrimitiveDot />
                </span>
                Data Migration
              </Link>
            </li>
            <li>
              <Link to='/database-migration' onClick={handleCloseSubNav}>
                <span>
                  <GoPrimitiveDot />
                </span>
                Database Migration
              </Link>
            </li>
            <li>
              <Link to='/server-migration' onClick={handleCloseSubNav}>
                <span>
                  <GoPrimitiveDot />
                </span>
                Server Migration
              </Link>
            </li>
            <li>
              <Link to='/application-migration' onClick={handleCloseSubNav}>
                <span>
                  <GoPrimitiveDot />
                </span>
                Application Migration
              </Link>
            </li>
            <li>
              <Link to='/disaster-recovery' onClick={handleCloseSubNav}>
                <span>
                  <GoPrimitiveDot />
                </span>
                Backup & Disaster Recovery
              </Link>
            </li>
            <li>
              <Link to='implementation-deployment' onClick={handleCloseSubNav}>
                <span>
                  <GoPrimitiveDot />
                </span>
                Implementation & Deployment
              </Link>
            </li>
          </ul>
        </div>
        <div className='single-nav-links'>
          <h2>Cloud Disaster Recovery</h2>
          <ul className='what-we-do-link'>
            <li>
              <Link to='/data-backup' onClick={handleCloseSubNav}>
                <span>
                  <GoPrimitiveDot />
                </span>
                Data Backup & Restore
              </Link>
            </li>
            <li>
              <Link to='/application-discovery' onClick={handleCloseSubNav}>
                <span>
                  <GoPrimitiveDot />
                </span>
                Application Discovery
              </Link>
            </li>
            <li>
              <Link to='/business-continuity-planning' onClick={handleCloseSubNav}>
                <span>
                  <GoPrimitiveDot />
                </span>
                Business Continuity Planning
              </Link>
            </li>
            <li>
              <Link to='/ongoing-maintenance' onClick={handleCloseSubNav}>
                <span>
                  <GoPrimitiveDot />
                </span>
                Ongoing Maintenance
              </Link>
            </li>
          </ul>
        </div>
        <div className='single-nav-links'>
          <h2>DevOps Consulting</h2>
          <ul className='what-we-do-link'>
            <li>
              <Link to='/devops-buildout' onClick={handleCloseSubNav}>
                <span>
                  <GoPrimitiveDot />
                </span>
                DevOps Buildout
              </Link>
            </li>
            <li>
              <Link to='/devops-security-operations' onClick={handleCloseSubNav}>
                <span>
                  <GoPrimitiveDot />
                </span>
                DevOps Security Operations
              </Link>
            </li>
            <li>
              <Link to='/big-data-analytics' onClick={handleCloseSubNav}>
                <span>
                  <GoPrimitiveDot />
                </span>{" "}
                Big Data Analytics
              </Link>
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
