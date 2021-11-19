// PAL - People and Leadership page
import React from "react";
import "./CorporateResponsibility.scss";
import AboutHero from "../../../components/Hero/AboutHero/AboutHero";
import MeetTeam from "../../../components/Team/MeetTeam"

const CorporateResponsibility = () => {
  return (
    <div>
      <AboutHero
        title="Corporate Responsibility"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim purus tristique tincidunt sem ac dictum nam."
        heroImageIndex="bg_styles--5"
      />

      <section className="culture_section">
        <h3>Our Culture</h3>
        <div className="culture_wrap">
          <div className="first_col">
            <h4>THE CLOUDFIFT WAY</h4>
            <h5>We create innovative solutions for industries</h5>
            <p>
              We are driven by the power of data to create extraordinary
              outcomes for clients in heavily regulated inductries
            </p>
            <div className="culture_btn">
              <button>Learn More</button>
            </div>
          </div>
          <div className="second_col">
            <div>
              <p>We encourage growth</p>
              <p>
                <small>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </small>
              </p>
            </div>
            <div>
              <p>Positive Coporate Culture</p>
              <p>
                <small>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </small>
              </p>
            </div>
            <div>
              <p>Positive Coporate Culture</p>
              <p>
                <small>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </small>
              </p>
            </div>
          </div>
          <div className="third_col">
            <div>
              <p>Positive Coporate Culture</p>
              <p>
                <small>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </small>
              </p>
            </div>
            <div>
              <p>Personal and professional growthrd</p>
              <p>
                <small>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </small>
              </p>
            </div>
            <div>
              <p>Positive Coporate Culture</p>
              <p>
                <small>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </small>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: import Team component */}
      <MeetTeam />
    </div>
  );
};

export default  CorporateResponsibility;
