import React from "react";
import "./CareerDetails.css";
import { Container } from "react-bootstrap";
import profile from "../../images/Ellipse-14.png";
import ScrollAnimation from 'react-animate-on-scroll';

const CareersDetails = () => {
  return (
    <>
      <section className="career_details--hero">
        <Container>
          <div className="career_details--hero_content">
            <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
              <div className="career_details--hero_info">
                <h1>RESEARCH AND DEVELOPMENT ENGINEER</h1>
                <div className="d-flex justify-content-flex-start gap-5">
                  <h4>Lagos</h4>
                  <h4>Remote</h4>
                  <h4>Software</h4>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </Container>
      </section>
      
      <section className="career_details_sub">
        <div className="d-flex justify-content-between">
          <div className="left-side">
            <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
            <div className=" ">
              <div className="d-flex justify-content-flex-start flex-column align-items-start text-start career_details_sub_sub">
                <h2 className="career_details_sub_h2">About MAKONI TECH</h2>
                <p className="career_details_sub_p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At id
                  consequat pellentesque volutpat dolor lorem maecenas nullam
                  lectus. Quis a eu, amet, adipiscing et at erat aliquet. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. At id
                  consequat pellentesque volutpat dolor lorem maecenas nullam
                  lectus. Quis a eu, amet, adipiscing et at erat aliquet. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. At id
                  consequat pellentesque volutpat dolor lorem maecenas nullam
                  lectus. Quis a eu, amet, adipiscing et at erat aliquet. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. At id
                  consequat pellentesque volutpat dolor lorem maecenas nullam
                  lectus. Quis a eu, amet, adipiscing{" "}
                </p>
              </div>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
            <div className="">
              <div className="d-flex justify-content-flex-start flex-column align-items-start text-start career_details_sub_sub">
                <h2 className="career_details_sub_h2">REQUIREMENTS</h2>
                <p className="career_details_sub_p">
                  2+ years of experience in recruitment{" "}
                </p>
                <p className="career_details_sub_p">
                  {" "}
                  Understanding of IT-related roles and specifics{" "}
                </p>
                <p className="career_details_sub_p">Communication skills</p>
                <p className="career_details_sub_p">
                  Personal accountability, work ethic, integrity, and
                  organizational skills with attention to detail
                </p>
              </div>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
            <div className=" ">
              <div className="d-flex justify-content-flex-start flex-column align-items-start text-start career_details_sub_sub">
                <h2 className="career_details_sub_h2">RESPONSIBILITIES</h2>
                <p className="career_details_sub_p">
                  Plan and execute all stages of the recruitment-related process
                </p>
                <p className="career_details_sub_p">
                  Handle simultaneously set of approximately 5 vacancies of
                  different levels
                </p>
                <p className="career_details_sub_p">
                  Provide qualified consultancy services to internal customers
                </p>
                <p className="career_details_sub_p">
                  Keep ATS (applicants tracking system) flow and statuses to the
                  rules and procedures
                </p>
                <p className="career_details_sub_p">
                  Communication with agencies and sourcing team
                </p>
                <p className="career_details_sub_p">
                  Providing good candidate experience for the candidates
                </p>
              </div>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
            <div className=" ">
              <div className="d-flex justify-content-flex-start flex-column align-items-start text-start career_details_sub_sub">
                <h5 className="career_details_sub_h5">
                  Full recruitment lifecycle:
                </h5>
                <p className="career_details_sub_p">
                  Vacancy requirements elicitation
                </p>
                <p className="career_details_sub_p">Active search</p>
                <p className="career_details_sub_p">Passive search</p>
                <p className="career_details_sub_p">
                  Interview scheduling and hosting
                </p>
                <p className="career_details_sub_p">
                  Negotiations and offering
                </p>
                <p className="career_details_sub_p">Placement</p>
              </div>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
            <div className=" ">
              <div className="d-flex justify-content-flex-start flex-column align-items-start text-start career_details_sub_sub">
                <h2 className="career_details_sub_h2">
                  WHAT WILL YOU GET WITH Makonitech
                </h2>
                <p className="career_details_sub_p">
                  Plan and execute all stages of the recruitment-related process
                </p>
                <p className="career_details_sub_p">
                  Handle simultaneously set of approximately 5 vacancies of
                  different levels
                </p>
                <p className="career_details_sub_p">
                  Provide qualified consultancy services to internal customers
                </p>
                <p className="career_details_sub_p">
                  Keep ATS (applicants tracking system) flow and statuses to the
                  rules and procedures
                </p>
                <p className="career_details_sub_p">
                  Communication with agencies and sourcing team
                </p>
                <p className="career_details_sub_p">
                  Providing good candidate experience for the candidates
                </p>
              </div>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
            <div className=" ">
              <div className="d-flex justify-content-flex-start flex-column align-items-start text-start career_details_sub_sub">
                <h2 className="career_details_sub_h2">
                  YOU MAY FIND INTERESTING
                </h2>
                <div className="career_details-grid saved_jobs_vacancy_grid">
                  <div className="vacancy-card">
                    <div className="vacancy-card-head">
                      <span>NEW</span>
                    </div>
                    <div className="vacancy-card-body">
                      <h3>RESEARCH AND DEVELOPMENT ENGINEER</h3>
                      <p>
                        <i className="fal fa-map-marker-alt"></i>
                        <span>Lagos, Nigeria. Remote</span>
                      </p>
                    </div>
                    <div className="vacancy-card-footer">
                      <p>
                        <i className="fas fa-square"></i>{" "}
                        <span>Software Engineering</span>
                      </p>
                    </div>
                  </div>
                  <div className="vacancy-card">
                    <div className="vacancy-card-head">
                      <span>NEW</span>
                    </div>
                    <div className="vacancy-card-body">
                      <h3>RESEARCH AND DEVELOPMENT ENGINEER</h3>
                      <p>
                        <i className="fal fa-map-marker-alt"></i>
                        <span>Lagos, Nigeria. Remote</span>
                      </p>
                    </div>
                    <div className="vacancy-card-footer">
                      <p>
                        <i className="fas fa-square"></i>{" "}
                        <span>Software Engineering</span>
                      </p>
                    </div>
                  </div>
                  <div className="vacancy-card">
                    <div className="vacancy-card-head">
                      <span>NEW</span>
                    </div>
                    <div className="vacancy-card-body">
                      <h3>RESEARCH AND DEVELOPMENT ENGINEER</h3>
                      <p>
                        <i className="fal fa-map-marker-alt"></i>
                        <span>Lagos, Nigeria. Remote</span>
                      </p>
                    </div>
                    <div className="vacancy-card-footer">
                      <p>
                        <i className="fas fa-square"></i>{" "}
                        <span>Software Engineering</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </ScrollAnimation>
          </div>
          <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
          <div className="right-side">
            <div className="d-flex justify-content-center flex-column align-items-center text-center career_details_sub_sub_right">
              <img src={profile} alt="profile-img" className="mb-4" />
              <p className="career_details_sub_sub_right_p">Fisayo Clement</p>
              <p className="career_details_sub_sub_right_p">HR Manager</p>
              <div className="career_details_btn_btn">
                <button>Apply</button>
              </div>
              <div className="career_details_btn">
                <button>Save Job</button>
              </div>
            </div>
          </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
};

export default CareersDetails;
