import React from "react";
import "./Vacancy.css";
import Pagination from "../pagination";
import ScrollAnimation from 'react-animate-on-scroll';

const Vacancy = () => {
  return (
    <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <section className="vacancy_section">
        <header>
          <h3 className="vacancy_section_header">VACANCIES</h3>
        </header>
        <section>
          <div className="vacancy-wrapper">
            <div className="vacancy-wrapper-head">
              <div className="vacancy-wrapper-head-group">
                <label htmlFor="vacancies-filter">Vacancies</label>
                <div className="select-wrapper">
                  <select id="vacancies-filter"></select>
                </div>
              </div>
              <div className="vacancy-wrapper-head-group">
                <label htmlFor="location">All Location</label>
                <div className="select-wrapper">
                  <select id="location"></select>
                </div>
              </div>
              <div className="vacancy-wrapper-head-group">
                <button>Search</button>
              </div>
            </div>

            <div className="vacancy-grid">
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

            <Pagination
              containerClassName="pagination"
              pageCount={7}
              activeClassName="paginate-active"
              disabledClassName="paginate-disabled"
              previousClassName="paginate-previous"
              nextClassName="paginate-next"
              marginPagesDisplayed={1}
            />
          </div>
        </section>
      </section>
    </ScrollAnimation>
  );
};

export default Vacancy;
