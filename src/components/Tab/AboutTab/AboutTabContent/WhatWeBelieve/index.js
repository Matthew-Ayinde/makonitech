import React from "react";
import "./styles.css";
import secImg2 from "../../../../../images/Rectangle-1701.png";
import secImg3 from "../../../../../images/Rectangle-70.png";
import secImg4 from "../../../../../images/previous.png";
import secImg5 from "../../../../../images/next.png";
import { Container, Card } from "react-bootstrap";
import ScrollAnimation from 'react-animate-on-scroll';

const WhatWeBelieveContent = () => {
  return (
    <div>
      <section className="">
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className="sec_header">
          <h4>What we believe</h4>
        </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
          <div className=" sec_content">
            <div className="container sec_content-one">
              <div className="sec-one_text">
                <div>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                    amet sint. Velit officia consequat duis enim velit mollit.
                    Exercitation veniam consequat sunt do amet sint. Velit officia
                    consequat duis enim velit mollit. Exercitation veniam
                    consequat sunt s. Amet minim mollit non deserunt ullamco est
                    sit aliqua dolor
                  </p>
                </div>
                <div>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                    amet sint. Velit officia consequat duis enim velit mollit.
                    Exercitation veniam consequat sunt do amet sint. Velit officia
                    consequat duis enim velit mollit. Exercitation veniam
                    consequat sunt s. Amet minim mollit non deserunt ullamco est
                    sit aliqua dolor
                  </p>
                </div>
                <div>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                    amet sint. Velit officia consequat duis enim velit mollit.
                    Exercitation veniam consequat sunt do amet sint. Velit officia
                    consequat duis enim velit mollit. Exercitation veniam
                    consequat sunt s. Amet minim mollit non deserunt ullamco est
                    sit aliqua dolor
                  </p>
                </div>
              </div>
              <div className="sec-one_img">
                <img src={secImg2} alt="" />
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
          <div className="container sec_content-one_one">
            <h3>INCLUSION & DIVERSITY</h3>
            <h1>In our managements’ words</h1>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
          <div className="sec_content">
            <div className="container sec_content-one_two">
              <div className="sec-two_img">
                <img src={secImg3} alt="" />
              </div>
              <div className="sec-two_text sec_content_two">
                <div className="">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries.
                  </p>
                </div>
                <div className="sec-two_text_two">
                  <h4>Lucky Onoriode</h4>
                  <p>CEO, Admin Alliance</p>
                </div>
                <div className="sec-two_text_three">
                  <div className="previous">
                    <input
                      type="image"
                      src={secImg4}
                      name="previous"
                      alt="previous"
                    />
                  </div>
                  <div className="next">
                    <input type="image" src={secImg5} name="next" alt="next" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
          <div className="container sec_content-two_one">
            <h3>A commitment to our people</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tristique tristique morbi etiam amet. Gravida morbi lectus vivamus
              aliquam.
            </p>
          </div>
        </ScrollAnimation>
        <section>
          <Container>
            <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
              <div className="">
                <div className="makoni--container_sub  sec_content-two_two">
                  <div className=" sec_content-two_two--card">
                  <Card className="sec_content-two_two_card sec_content-two_two_card-1">
                      <Card.Body className="sec_content-two_two-card--body">
                        <div className="sec_content-two_two_card_aside">
                          <Card.Text className="sec_content-two_two_card--text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ullamcorper euismod arcu e volutpat turpis
                            bibendum.
                          </Card.Text>
                          <Card.Title className="sec_content-two_two_card--header">
                            Learn More
                          </Card.Title>
                        </div>
                      </Card.Body>
                    </Card>

                    <Card className="sec_content-two_two_card sec_content-two_two_card-2">
                      <Card.Body className="sec_content-two_two-card--body">
                        <div className="sec_content-two_two_card_aside">
                          <Card.Text className="sec_content-two_two_card--text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ullamcorper euismod arcu e volutpat turpis
                            bibendum.
                          </Card.Text>
                          <Card.Title className="sec_content-two_two_card--header">
                            Learn More
                          </Card.Title>
                        </div>
                      </Card.Body>
                    </Card>

                    <Card className="sec_content-two_two_card sec_content-two_two_card-3">
                      <Card.Body className="sec_content-two_two-card--body">
                        <div className="sec_content-two_two_card_aside">
                          <Card.Text className="sec_content-two_two_card--text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ullamcorper euismod arcu e volutpat turpis
                            bibendum.
                          </Card.Text>
                          <Card.Title className="sec_content-two_two_card--header">
                            Learn More
                          </Card.Title>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>

                  <div className=" sec_content-two_two--card">
                  <Card className="sec_content-two_two_card sec_content-two_two_card-4">
                      <Card.Body className="sec_content-two_two-card--body">
                        <div className="sec_content-two_two_card_aside">
                          <Card.Text className="sec_content-two_two_card--text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ullamcorper euismod arcu e volutpat turpis
                            bibendum.
                          </Card.Text>
                          <Card.Title className="sec_content-two_two_card--header">
                            Learn More
                          </Card.Title>
                        </div>
                      </Card.Body>
                    </Card>

                    <Card className="sec_content-two_two_card sec_content-two_two_card-5">
                      <Card.Body className="sec_content-two_two-card--body">
                        <div className="sec_content-two_two_card_aside">
                          <Card.Text className="sec_content-two_two_card--text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ullamcorper euismod arcu e volutpat turpis
                            bibendum.
                          </Card.Text>
                          <Card.Title className="sec_content-two_two_card--header">
                            Learn More
                          </Card.Title>
                        </div>
                      </Card.Body>
                    </Card>

                    <Card className="sec_content-two_two_card sec_content-two_two_card-6">
                      <Card.Body className="sec_content-two_two-card--body">
                        <div className="sec_content-two_two_card_aside">
                          <Card.Text className="sec_content-two_two_card--text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ullamcorper euismod arcu e volutpat turpis
                            bibendum.
                          </Card.Text>
                          <Card.Title className="sec_content-two_two_card--header">
                            Learn More
                          </Card.Title>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </Container>
        </section>
      </section>
    </div>
  );
};

export default WhatWeBelieveContent;
