import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import "../InsightDetails/InsightDetails.css";
import profile from "../../images/Ellipse-39.svg";
import img1 from "../../images/image-1.png";
import img2 from "../../images/image-2.png";
import img3 from "../../images/image-3.png";
import httpService from "../../utils/axios";
import dateFormatter from "../../utils/dateFormatter";

const InsightDetails = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({});

  useEffect(() => {
    setLoading(true);

    httpService
      .get(`/insights/${id}`)
      .then((response) => {
        setDetails(response.data.message.data);
        setLoading(false);
      })
      .catch((error) => {});
  }, [id]);

  return (
    <>
      <section className="insight_details--hero">
        <Container>
          <div className="insight_details--hero_content">
            <div className="insight_details--hero_info">
              <h4>Insights</h4>
              <h1>{loading ? "Loading..." : details.title}</h1>
            </div>
          </div>
        </Container>
      </section>

      <section className="insight_details_main_sub">
        <section className="d-flex justify-content-between insight_sub">
          <div className="d-flex justify-content-center ">
            <div className=" insight_details_image">
              <img src={profile} alt="profile-img" />
            </div>
            <div className="d-flex justify-content-center flex-column ">
              <p className="insight_span_p">
                By{" "}
                <span>
                  {details.createdBy.firstName}&nbsp;
                  {details.createdBy.lastName}
                </span>
              </p>
              {/* <p className="insight_span_p">MakoniTech’s Head of Software</p> */}
            </div>
          </div>

          <div className="d-flex justify-content-end flex-column ">
            <div></div>

            <div className="d-flex justify-content-end  flex-row gap-5">
              <p className="insight_sub_p">
                Published: <span> {dateFormatter(details.createdAt)}</span>
              </p>
              {/* <p className="insight_sub_p ml-5">
                Updated: <span> April 8, 2021</span>
              </p> */}
            </div>
          </div>
        </section>

        <section className="d-flex justify-content-between insight_sub">
          <div
            style={{ fontSize: 18 }}
            dangerouslySetInnerHTML={{ __html: details.body }}
          />
        </section>

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
    </>
  );
};

export default InsightDetails;
