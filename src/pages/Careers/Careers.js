import React from "react";
import "../Careers/Careers.css";
import { Container, Card } from "react-bootstrap";
import Join from "../../components/Join";


const Careers = () => {
  return (
    <>
      <section className="career--hero">
        <Container>
          <div className="career--hero_content">
            <div className="career--hero_info">
              <h1>Makoni Tech Career</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
                nisl mauris eu consectetur in odio ut risus. Ut cursus tortor
                viverra viverra nec in lectus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sodales nisl mauris eu consectetur
                in odio ut risus. Ut cursus tortor viverra viverra nec in
                lectus.
              </p>{" "}
              <div className="career--hero_btn">
                <button>Contact Us</button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="makoni--container">
            <div className="makoni--container_sub">
              <div className="makoni--container_sub--text">
                <h1>Why Makoni Tech</h1>
              </div>
              <div className="makoni--card">
                <Card className="makoni_card makoni_card-1">
                  <Card.Body className="card--body">
                    <Card.Title className="makoni_card--header">
                      Positive Corporate Culture
                    </Card.Title>
                    <Card.Text className="makoni_card--text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      At id consequat pellentesque volutpat dolor lorem maecenas
                      nullam lectus. Quis a eu, amet, adipiscing et at erat
                      aliquet.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card className="makoni_card makoni_card-2">
                  <Card.Body className="card--body">
                    <Card.Title className="makoni_card--header">
                    Reach Your True Potential
                    </Card.Title>
                    <Card.Text className="makoni_card--text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      At id consequat pellentesque volutpat dolor lorem maecenas
                      nullam lectus. Quis a eu, amet, adipiscing et at erat
                      aliquet.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card className="makoni_card makoni_card-3">
                  <Card.Body className="card--body">
                    <Card.Title className="makoni_card--header">
                    Personal and Professional Growth
                    </Card.Title>
                    <Card.Text className="makoni_card--text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      At id consequat pellentesque volutpat dolor lorem maecenas
                      nullam lectus. Quis a eu, amet, adipiscing et at erat
                      aliquet.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </section>
   
      <Join />
    </>
  );
};

export default Careers;
