import React from "react";
import { Container,  Card } from "react-bootstrap";
import "../InsightDetails/InsightDetails.css";
import profile from "../../images/Ellipse-39.svg";
import man from "../../images/Rectangle-1809.svg";
import group from "../../images/Rectangle-2023.svg";
import next from "../../images/next-icon.svg";
import prev from "../../images/prev-icon.svg";
import img1 from "../../images/image-1.png";
import img2 from "../../images/image-2.png";
import img3 from "../../images/image-3.png";

const InsightDetails = () => {
  return (
    <>
      <section className="insight_details--hero">
        <Container>
          <div className="insight_details--hero_content">
            <div className="insight_details--hero_info">
              <h4>Insights</h4>
              <h1>Long Established</h1>
            </div>
          </div>
        </Container>
      </section>

      <section  className="insight_details_main_sub">
        <section className="d-flex justify-content-between insight_sub">
          <div className="d-flex justify-content-center ">
            <div className=" insight_details_image">
              <img src={profile} alt="profile-img" />
            </div>
            <div className="d-flex justify-content-center flex-column ">
              <p className="insight_span_p">
                By <span>Edward Gigi</span>
              </p>
              <p className="insight_span_p">MakoniTech’s Head of Software</p>
            </div>
          </div>

          <div className="d-flex justify-content-end flex-column ">
            <div></div>

            <div className="d-flex justify-content-end  flex-row gap-5">
              <p className="insight_sub_p">
                Published: <span> June 27, 2021</span>
              </p>
              <p className="insight_sub_p ml-5">
                Updated: <span> April 8, 2021</span>
              </p>
            </div>
          </div>
        </section>

        <section className="insight_sub_section">
          <div>
            <h1>What exactly is Long Established about?</h1>
          </div>
          <section className="insight_sub_section_hero">
            <div className="insight_details--hero_content"></div>
          </section>
          <p className="insight_sub_section_p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </section>

        <section className="insight_sub_sub_section">
          <div>
            <h1>Advanced Task Management</h1>
          </div>
          <div className="d-flex justify-content-between gap-3 align-items-center text-start tester">
            <p className="text_section insight_sub_sub_section_p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam,
            </p>
            <img src={man} alt="profile-img" className="img_section" />
          </div>

          <div>
            <h1>Team Integrations</h1>
          </div>
          <div className="d-flex justify-content-between gap-3 align-items-center text-start">
            <img src={group} alt="profile-img" className="img_section" />
            <p className="text_section insight_sub_sub_section_p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui
            </p>
          </div>

          <div>
            <h1>Conclusion Points</h1>
          </div>

          <div className="bullet_section">
            <p className="bullet_section_p">
              Track the behavior and patterns of your users. It is the best
              tactic to find out how users interact with your app and which
              possible stumbling blocks they face. Use Hotjar to get these
              insights firsthand.
            </p>
            <p className="bullet_section_p">
              Listen to user feedback and research the suggested improvements
              for possible implementation. Most likely, your users will share
              their feedback with you. To make the most use of their
              suggestions, make sure to research and validate the ideas
              presented.
            </p>
            <p className="bullet_section_p">
              Proceed with testing. An increased load on the app in use may lead
              to unexpected crashes. Keep track of your testing strategy to make
              sure your MVP will work well.{" "}
            </p>
            <p className="bullet_section_p">
              Prioritize new features. We understand your desire to turn your
              MVP into a full-fledged solution as soon as possible. However, at
              this stage, you have to add only the necessary features to improve
              the user experience without overloading the application.
            </p>
            <p className="bullet_section_p">
              Source:
              https://archer-soft.com/blog/proof-concept-vs-prototype-vs-mvp-vs-pilot-plan-realize-your-idea
            </p>
          </div>

          <div className="insight_details_btn d-flex justify-content-between">
            <button className="d-flex justify-content-center align-items-center text-center">
              <img src={prev} alt="prev-icon" className="mx-3" /> Previous Post
            </button>
            <button className="d-flex justify-content-center align-items-center text-center">
              Next Post <img src={next} alt="next-icon" className="mx-3" />
            </button>
          </div>

          <div className="insight_details-grid">
            <Card
              className="d-flex justify-content-center flex-column align-items-center text-left insight_details-card "
              style={{ borderRadius: "4px", border: "none", width: "400px" }}
            >
              <Card.Img
                variant="top"
                src={img3}
                style={{ borderRadius: "4px" }}
                className=""
              />
              <Card.Body className="card_body">
                <Card.Title className="insight_details_card_title">
                  long established
                </Card.Title>
                <Card.Text className="insight_details_card_body_text">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that....
                </Card.Text>
                <div className="d-flex justify-content-between insight_details_footer ">
                  <Card.Text className="insight_details_left_footer">
                    <h5> May 20th 2020</h5>
                  </Card.Text>
                  <Card.Text className="insight_details_right_footer">
                    <h5> Read more</h5>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>

            <Card
              className="d-flex justify-content-center flex-column align-items-center text-left  insight_details-card "
              style={{ borderRadius: "4px", border: "none", width: "400px" }}
            >
              <Card.Img
                variant="top"
                src={img2}
                style={{ borderRadius: "4px" }}
              />
              <Card.Body className="card_body">
                <Card.Title className="insight_details_card_title">
                  long established
                </Card.Title>
                <Card.Text className="insight_details_card_body_text">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that....
                </Card.Text>
                <div className="d-flex justify-content-between insight_details_footer ">
                  <Card.Text className="insight_details_left_footer">
                    <h5> May 20th 2020</h5>
                  </Card.Text>
                  <Card.Text className="insight_details_right_footer">
                    <h5> Read more</h5>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>

            <Card
              className="d-flex justify-content-center flex-column align-items-center text-left insight_details-card"
              style={{ borderRadius: "4px", border: "none", width: "400px" }}
            >
              <Card.Img
                variant="top"
                src={img1}
                style={{ borderRadius: "4px" }}
              />
              <Card.Body className="card_body">
                <Card.Title className="insight_details_card_title">
                  long established
                </Card.Title>
                <Card.Text className="insight_details_card_body_text">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that....
                </Card.Text>

                <div className="d-flex justify-content-between insight_details_footer ">
                  <Card.Text className="insight_details_left_footer ">
                    <h5> May 20th 2020</h5>
                  </Card.Text>
                  <Card.Text className="insight_details_right_footer">
                    <h5> Read more</h5>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </div>
        </section>
      </section>
    </>
  );
};

export default InsightDetails;
