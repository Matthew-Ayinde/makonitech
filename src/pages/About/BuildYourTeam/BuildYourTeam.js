import React from "react";
import AboutHero from "../../../components/Hero/AboutHero/AboutHero";
import AboutTab from "../../../components/Tab/AboutTab/AboutTab";
import { CommitmentTab } from "../../../components/Tab/AboutTab/AboutTabContent/Commitment";
import commImgOne from "../../../images/comm-img-one.png";
import { Link } from "react-router-dom";
import commImgTwo from "../../../images/comm-img-two.png";
import commImgThree from "../../../images/comm-img-three.png";
import commImgFour from "../../../images/comm-img-four.png";
import commImgFive from "../../../images/comm-img-five.png";
import commImgSix from "../../../images/comm-img-six.png";
import commImgSeven from "../../../images/comm-img-seven.png";
import leftArrow from "../../../images/comm-left-arrow.png";
import rightArrow from "../../../images/comm-right-arrow.png";

import "./BuildYourTeam.scss";

const BuildYourTeam = () => {
  return (
    <div className="wrap-commitment_page">
      <AboutHero
        title="Build Your Team"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim purus tristique tincidunt sem ac dictum nam."
        heroImageIndex="
  bg_styles--3"
      />
      <AboutTab TabComponent={CommitmentTab} />
      <CommitmentTab />
      {/* section:-  In our managements’ words */}
      <section className="comm-section2">
        <div className="comm_text-area">
          <small>INCLUSION & DIVERSITY</small>
          <h6>In our managements’ words</h6>
        </div>
        <div className="banner_area">
          <img src={commImgOne} alt="" />
          <div className="comm-post_area">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book It has survived
              not only five centuries.
            </p>

            <div className="comm-post_author">
              <p>Lucky Onoriode</p>
              <small>CEO, Admin Alliance</small>
            </div>
            <div className="comm-arrows">
              <img src={leftArrow} alt="" />
              <img src={rightArrow} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* section: A commitment to our people */}
      <section className="comm-section3">
        <div className="">
          <h6>A commitment to our people</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tristique tristique morbi etiam amet. Gravida morbi lectus vivamus
            aliquam.
          </p>
        </div>
        <div className="comm_gallery">
          <figure className="figure">
            <img src={commImgTwo} alt="" />
            <figcaption className="fig-caption">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              <Link to="/" className="learn_more">
                Learn More
              </Link>
            </figcaption>
          </figure>
          <figure className="figure">
            <img src={commImgThree} alt="" />
            <figcaption className="fig-caption">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ullamcorper euismod arcu e volutpat turpis bibendum.
              <br />
              <Link to="/" className="learn_more">
                Learn More
              </Link>
            </figcaption>
          </figure>
          <figure className="figure">
            <img src={commImgFour} alt="" />
            <figcaption className="fig-caption">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              Ullamcorper euismod arcu e volutpat turpis bibendum.
              <br />
              <Link to="/" className="learn_more">
                Learn More
              </Link>
            </figcaption>
          </figure>
          <figure className="figure">
            <img src={commImgFive} alt="" />
            <figcaption className="fig-caption">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              <Link to="/" className="learn_more">
                Learn More
              </Link>
            </figcaption>
          </figure>
          <figure className="figure">
            <img src={commImgSix} alt="" />
            <figcaption className="fig-caption">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ullamcorper euismod arcu e volutpat turpis bibendum.
              <br />
              <Link to="/" className="learn_more">
                Learn More
              </Link>
            </figcaption>
          </figure>
          <figure className="figure">
            <img src={commImgSeven} alt="" />
            <figcaption className="fig-caption">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              Ullamcorper euismod arcu e volutpat turpis bibendum.
              <br />
              <Link to="/" className="learn_more">
                Learn More
              </Link>
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
};

export default BuildYourTeam;
