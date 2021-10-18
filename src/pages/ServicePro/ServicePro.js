import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import "./ServicePro.css";
import icon1 from "../../images/png-icon-12.png";
import icon2 from "../../images/png-icon-13.png";
import icon3 from "../../images/png-icon-14.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const ServicePro = () => {
  return (
    <div className="bg-pro py-5">
      <div className="text-center service-title">
        <h5 className="text-custom-primary my-5">Trusted Service</h5>
        <h3 className="text-custom-secondary">
          We’re launched most powerful treatment <br /> system. They are <span className="text-custom-primary">making beautifully</span>.
        </h3>
        <p className="text-muted">
          Why Medcity services is best all time since 1990. desires to obtain of itself, because it is pain, <br /> but because occasionally
          circumstance procure him some great deals.
        </p>
      </div>
      <Row xs={1} sm={1} md={3} className="g-4 py-5 container mx-auto">
        <Col>
          <Card className="h-100 border-0">
            <Card.Img
              className="img-fluid d-block mx-auto py-4"
              style={{ width: "100px", borderBottom: "1px solid #E12454" }}
              variant="top"
              src={icon1}
            />
            <Card.Body className="text-center">
              <Card.Title className="fs-4">Primary Health Care</Card.Title>
              <Card.Text className="py-4">
                Primary healthcare refers to a broad range of health services provided by medical professionals in the community.
              </Card.Text>
              <Link to="/pricing">
                {" "}
                <Button className="btn border-0 button-active-color text-white fs-5 py-2 px-4  rounded-pill btn-hover">
                  Booking Now{" "}
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faAngleDoubleRight} />{" "}
                  </span>{" "}
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100 border-0">
            <Card.Img
              className="img-fluid d-block mx-auto py-4"
              style={{ width: "100px", borderBottom: "1px solid #E12454" }}
              variant="top"
              src={icon2}
            />
            <Card.Body className="text-center">
              <Card.Title className="fs-4">Gynecological Clinic</Card.Title>
              <Card.Text className="py-4">
                The Gynecology Clinic offers care for females from infancy through menopause and annual exams to complex problems including Fibroids,
                Gynecology and Young Adult...
              </Card.Text>
              <Link to="/pricing">
                {" "}
                <Button className="btn border-0 button-active-color text-white fs-5 py-2 px-4  rounded-pill btn-hover">
                  Booking Now{" "}
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faAngleDoubleRight} />{" "}
                  </span>{" "}
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100 border-0">
            <Card.Img
              className="img-fluid d-block mx-auto py-4"
              style={{ width: "90px", borderBottom: "1px solid #E12454" }}
              variant="top"
              src={icon3}
            />
            <Card.Body className="text-center">
              <Card.Title className="fs-4">Precise Diagnosis</Card.Title>
              <Card.Text className="py-4">
                Discover integrated approaches to improve diagnostic accuracy and get actionable insights. See how diagnostic challenges can
              </Card.Text>
              <Link to="/pricing">
                {" "}
                <Button className="btn border-0 button-active-color text-white fs-5 py-2 px-4  rounded-pill btn-hover">
                  Booking Now{" "}
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faAngleDoubleRight} />{" "}
                  </span>{" "}
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ServicePro;
