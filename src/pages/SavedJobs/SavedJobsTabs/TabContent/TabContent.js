import React from "react";
// import goals from "../../../../images/goals.png";
import "./TabContent.scss";
import "../../../../components/Vacancy/Vacancy.css";
import ScrollAnimation from 'react-animate-on-scroll';

const TabContent = () => {
  return (
    <div>
      <div className="saved_jobs_tab_content">
        <div className="saved_jobs_tab_info">
          <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
            <div className="d-flex justify-content-center flex-column align-items-center text-center">
              <h3 className="tab_info_h3">SAVED JOBS</h3>
              <p className="tab_info_p">Jobs you saved are here</p>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
              <div className="vacancy-grid saved_jobs_vacancy_grid">
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
            </ScrollAnimation>
        </div>
        {/* <div className="tab_image">
          <img src={goals} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default TabContent;
