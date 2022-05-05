import React from "react";
import { Container } from "react-bootstrap";
import "../PartnersAffiliation/PartnersAffiliation.css";
import { Card } from "react-bootstrap";
// import ikea from "../../images/ikea.svg";
import paddington from "../../images/paddington.svg";
import Pagination from "../../components/pagination";
import ScrollAnimation from 'react-animate-on-scroll';

const PartnersAffiliation = () => {
  return (
    <>
      <section className="partner--hero">
        <Container>
          <div className="partner--hero_content">
          <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
            <div className="partner--hero_info">
              <h1>Partners And Affliations</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
                nisl mauris eu consectetur in odio ut risus. Ut cursus tortor
                viverra viverra nec in lectus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sodales nisl mauris eu consectetur
                in odio ut risus. Ut cursus tortor viverra viverra nec in
                lectus.
              </p>{" "}
              <div className="partner--hero_btn">
                <button>Join Us</button>
              </div>
            </div>
            </ScrollAnimation>
          </div>
        </Container>
      </section>

     
      <section className="partner_section">
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <header>
          <h3 className="partner_section_header">Our Partners</h3>
        </header>
        <div className="partner-grid">
          <Card
            className="d-flex justify-content-center flex-column align-items-center text-left partner-card "
            style={{ borderRadius: "4px", border: "none" }}
          >
            <Card.Img
              variant="top"
              src={paddington}
              style={{ borderRadius: "4px", width: "97.31px" }}
              className=""
            />
            <Card.Body className="card_body">
              <Card.Text className="partner_card_body_text ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            className="d-flex justify-content-center flex-column align-items-center text-left partner-card "
            style={{ borderRadius: "4px", border: "none" }}
          >
            <Card.Img
              variant="top"
              src={paddington}
              style={{ borderRadius: "4px", width: "97.31px" }}
            />
            <Card.Body className="card_body">
              <Card.Text className="partner_card_body_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            className="d-flex justify-content-center flex-column align-items-center text-left partner-card "
            style={{ borderRadius: "4px", border: "none" }}
          >
            <Card.Img
              variant="top"
              src={paddington}
              style={{ borderRadius: "4px", width: "97.31px" }}
            />
            <Card.Body className="card_body">
              <Card.Text className="partner_card_body_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            className="d-flex justify-content-center flex-column align-items-center text-left partner-card "
            style={{ borderRadius: "4px", border: "none" }}
          >
            <Card.Img
              variant="top"
              src={paddington}
              style={{ borderRadius: "4px", width: "97.31px" }}
            />
            <Card.Body className="card_body">
              <Card.Text className="partner_card_body_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            className="d-flex justify-content-center flex-column align-items-center text-left partner-card "
            style={{ borderRadius: "4px", border: "none" }}
          >
            <Card.Img
              variant="top"
              src={paddington}
              style={{ borderRadius: "4px", width: "97.31px" }}
              className=""
            />
            <Card.Body className="card_body">
              <Card.Text className="partner_card_body_text ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            className="d-flex justify-content-center flex-column align-items-center text-left partner-card "
            style={{ borderRadius: "4px", border: "none" }}
          >
            <Card.Img
              variant="top"
              src={paddington}
              style={{ borderRadius: "4px", width: "97.31px" }}
            />
            <Card.Body className="card_body">
              <Card.Text className="partner_card_body_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            className="d-flex justify-content-center flex-column align-items-center text-left partner-card "
            style={{ borderRadius: "4px", border: "none" }}
          >
            <Card.Img
              variant="top"
              src={paddington}
              style={{ borderRadius: "4px", width: "97.31px" }}
            />
            <Card.Body className="card_body">
              <Card.Text className="partner_card_body_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            className="d-flex justify-content-center flex-column align-items-center text-left partner-card "
            style={{ borderRadius: "4px", border: "none" }}
          >
            <Card.Img
              variant="top"
              src={paddington}
              style={{ borderRadius: "4px", width: "97.31px" }}
            />
            <Card.Body className="card_body">
              <Card.Text className="partner_card_body_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            className="d-flex justify-content-center flex-column align-items-center text-left partner-card "
            style={{ borderRadius: "4px", border: "none" }}
          >
            <Card.Img
              variant="top"
              src={paddington}
              style={{ borderRadius: "4px", width: "97.31px" }}
              className=""
            />
            <Card.Body className="card_body">
              <Card.Text className="partner_card_body_text ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            className="d-flex justify-content-center flex-column align-items-center text-left partner-card "
            style={{ borderRadius: "4px", border: "none" }}
          >
            <Card.Img
              variant="top"
              src={paddington}
              style={{ borderRadius: "4px", width: "97.31px" }}
            />
            <Card.Body className="card_body">
              <Card.Text className="partner_card_body_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            className="d-flex justify-content-center flex-column align-items-center text-left partner-card "
            style={{ borderRadius: "4px", border: "none" }}
          >
            <Card.Img
              variant="top"
              src={paddington}
              style={{ borderRadius: "4px", width: "97.31px" }}
            />
            <Card.Body className="card_body">
              <Card.Text className="partner_card_body_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            className="d-flex justify-content-center flex-column align-items-center text-left partner-card "
            style={{ borderRadius: "4px", border: "none" }}
          >
            <Card.Img
              variant="top"
              src={paddington}
              style={{ borderRadius: "4px", width: "97.31px" }}
            />
            <Card.Body className="card_body">
              <Card.Text className="partner_card_body_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            className="d-flex justify-content-center flex-column align-items-center text-left partner-card "
            style={{ borderRadius: "4px", border: "none" }}
          >
            <Card.Img
              variant="top"
              src={paddington}
              style={{ borderRadius: "4px", width: "97.31px" }}
              className=""
            />
            <Card.Body className="card_body">
              <Card.Text className="partner_card_body_text ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            className="d-flex justify-content-center flex-column align-items-center text-left partner-card "
            style={{ borderRadius: "4px", border: "none" }}
          >
            <Card.Img
              variant="top"
              src={paddington}
              style={{ borderRadius: "4px", width: "97.31px" }}
            />
            <Card.Body className="card_body">
              <Card.Text className="partner_card_body_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            className="d-flex justify-content-center flex-column align-items-center text-left partner-card "
            style={{ borderRadius: "4px", border: "none" }}
          >
            <Card.Img
              variant="top"
              src={paddington}
              style={{ borderRadius: "4px", width: "97.31px" }}
            />
            <Card.Body className="card_body">
              <Card.Text className="partner_card_body_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            className="d-flex justify-content-center flex-column align-items-center text-left partner-card "
            style={{ borderRadius: "4px", border: "none" }}
            >
            <Card.Img
              variant="top"
              src={paddington}
              style={{ borderRadius: "4px", width: "97.31px" }}
            />
            <Card.Body className="card_body">
              <Card.Text className="partner_card_body_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
            </Card.Body>
          </Card>
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
      </ScrollAnimation>

      </section>
    
    </>
  );
};

export default PartnersAffiliation;
