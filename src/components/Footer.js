import React from "react";
import { footerData } from "../data/commonData";
import FooterLink from "./FooterLink";
import Cert from "../images/aws-cert-badge 1.svg";
import twitter from "../images/twitter.svg";
import dribbble from "../images/dribbble.svg";
import instagram from "../images/instagram.svg";
import youtube from "../images/youtube.svg";
import ScrollAnimation from 'react-animate-on-scroll';

const Footer = () => {
  return (
    <footer className="footer">
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className="main_footer-content">
          <div className="footer_header">
            <header>
              <img src={Cert} alt="" />
            </header>
            <p>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing</span>
              <br />
              <span>elit. Venenatis ultrices amet, velit at.</span>
            </p>
          </div>
          <div className="sub_footer-content">
            {footerData.map((data, index) => {
              const { header, links } = data;

              return <FooterLink key={index} title={header} links={links} />;
            })}
          </div>
        </div>
        <div className="bottom_footer">
          <p>© 2021 Makonitech Inc. All rights reserved</p>
          <p><a href="/privacy-policy">Privacy policy</a> | <a href="/terms-of-service">Terms of Service</a></p>
          <ul className="social_list">
            <li className="social_item">
              <a href="/" className="social_link">
                <img src={instagram} alt="Instagram icon" />
              </a>
            </li>
            <li className="social_item">
              <a href="/" className="social_link">
                <img src={dribbble} alt="Dribbble icon" />
              </a>
            </li>
            <li className="social_item">
              <a href="/" className="social_link">
                <img src={twitter} alt="Twitter icon" />
              </a>
            </li>
            <li className="social_item">
              <a href="/" className="social_link">
                <img src={youtube} alt="Youtube icon" />
              </a>
            </li>
          </ul>
        </div>
      </ScrollAnimation>
    </footer>
  );
};

export default Footer;
