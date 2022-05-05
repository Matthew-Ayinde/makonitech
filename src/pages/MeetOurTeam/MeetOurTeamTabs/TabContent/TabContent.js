import React from "react";
import guy from "../../../../images/guy.svg";
import girl from "../../../../images/girl.svg";
import woman from "../../../../images/woman.svg";
import "./TabContent.scss";
import "../../../../components/Vacancy/Vacancy.css";
import { Card } from "react-bootstrap";
import ScrollAnimation from 'react-animate-on-scroll';

const TabContent = () => {
  return (
    <div>
      <div className="saved_jobs_tab_content">
        <div className="saved_jobs_tab_info">
          <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
            <div className="d-flex justify-content-center flex-column align-items-center text-center">
              <h3 className="tab_info_h3">MEET OUR PEOPLE</h3>
              <p className="tab_info_p">
                Your can connect with some Makonitech people here
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
            <div className="vacancy-grid">
              <Card
                className="d-flex justify-content-center flex-column align-items-center text-center "
                style={{ width: "350.47px", borderRadius: "4px", border:"none"}}
              >
                <Card.Img
                  variant="top"
                  src={guy}
                  style={{ borderRadius: "4px" }}
                />
                <Card.Body className="card_body">
                  <Card.Title className="card_title">Orlean Dwyer</Card.Title>
                  <Card.Text className="card_sub_title">Frontend Dev</Card.Text>
                  <Card.Text className="card_body_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Card.Text>
                  <Card.Text className="card_footer">Know Orlean more</Card.Text>
                </Card.Body>
              </Card>

              <Card
                className="d-flex justify-content-center flex-column align-items-center text-center"
                style={{ width: "350.47px", borderRadius: "4px", border:"none"}}
              >
                <Card.Img
                  variant="top"
                  src={woman}
                  style={{ borderRadius: "4px" }}
                />
                <Card.Body className="card_body">
                  <Card.Title className="card_title">Sheila Brooks</Card.Title>
                  <Card.Text className="card_sub_title">Frontend Dev</Card.Text>
                  <Card.Text className="card_body_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Card.Text>
                  <Card.Text className="card_footer">Know Sheila more</Card.Text>
                </Card.Body>
              </Card>

              <Card
                className="d-flex justify-content-center flex-column align-items-center text-center"
                style={{ width: "350.47px", borderRadius: "4px", border:"none"}}
              >
                <Card.Img
                  variant="top"
                  src={girl}
                  style={{ borderRadius: "4px" }}
                />
                <Card.Body className="card_body">
                  <Card.Title className="card_title">Sandy Lory</Card.Title>
                  <Card.Text className="card_sub_title">Frontend Dev</Card.Text>
                  <Card.Text className="card_body_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Card.Text>
                  <Card.Text className="card_footer">Know Sandy more</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default TabContent;
