import React from "react";
import "./TeamWorks.css";
import { Card, Col, Row } from "react-bootstrap";
import member1 from "../../images/service-01.jpg";
import member2 from "../../images/service-02.jpg";
import member3 from "../../images/service-03.jpg";
import member4 from "../../images/service-04.jpg";
import img1 from "../../images/doctor_200x200.png";
import img2 from "../../images/ambulance_200x200.jpg";
import img3 from "../../images/bed_200x200.jpg";
import img4 from "../../images/Patients_1_200x200.jpg";

const TeamWorks = () => {
  return (
    <div className="pt-5">
      <div className="text-center">
        <p className="text-custom-primary">Working Process</p>
        <h2 className="text-custom-secondary fw-bold fs-1">How we works?</h2>
        <p className="text-muted mb-5">
          Why HounLare services is best all time since 1990. desires to obtain of itself, because it is pain, <br /> but because occasionally
          circumstance procure him some great deals.
        </p>
      </div>
      <Row xs={1} sm={1} md={4} className="g-4 container mx-auto mb-5">
        <Col>
          <Card className="h-100 border-0 text-center">
            <Card.Img className="img-fluid w-75 rounded-circle d-block mx-auto" variant="top" src={member1} />
            <Card.Body>
              <Card.Title>Registration</Card.Title>
              <Card.Text className="text-muted">
                To create an account and make <br /> easy treatment
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>{" "}
        <Col>
          <Card className="h-100 border-0 text-center">
            <Card.Img className="img-fluid w-75 rounded-circle d-block mx-auto" variant="top" src={member2} />
            <Card.Body>
              <Card.Title>Appointment</Card.Title>
              <Card.Text className="text-muted">
                To create an account and make <br /> easy treatment
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>{" "}
        <Col>
          <Card className="h-100 border-0 text-center">
            <Card.Img className="img-fluid w-75 rounded-circle d-block mx-auto" variant="top" src={member3} />
            <Card.Body>
              <Card.Title>Take Treatment</Card.Title>
              <Card.Text className="text-muted">
                To create an account and make <br /> easy treatment
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>{" "}
        <Col>
          <Card className="h-100 border-0 text-center">
            <Card.Img className="img-fluid w-75 rounded-circle d-block mx-auto" variant="top" src={member4} />
            <Card.Body>
              <Card.Title>Enjoy The Life</Card.Title>
              <Card.Text className="text-muted">
                To create an account and make <br /> easy treatment
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="second-row py-5">
        <div className="text-center">
          <p className="text-custom-primary">Our History</p>
          <h2 className="text-custom-secondary fw-bold fs-1">Take a look at our health</h2>
          <p className="text-muted mb-5">Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </div>
        <Row xs={1} md={4} className="g-4 container mx-auto">
          <Col>
            <Card className="bg-transparent border-0 text-center">
              <Card.Img style={{ width: "100px", height: "100px" }} className="d-block mx-auto" variant="top" src={img1} />

              <Card.Body>
                <Card.Title>
                  <h2 className="text-custom-secondary fs-1 fw-bold">175+</h2>
                </Card.Title>
                <Card.Text>
                  <h5>Total Doctors</h5>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bg-transparent border-0 text-center">
              <Card.Img style={{ width: "100px" }} className="d-block mx-auto" variant="top" src={img2} />

              <Card.Body>
                <Card.Title>
                  <h2 className="text-custom-secondary fs-1 fw-bold">20+</h2>
                </Card.Title>
                <Card.Text>
                  <h5>Ambulance</h5>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bg-transparent border-0 text-center">
              <Card.Img style={{ width: "100px", height: "100px" }} className="d-block mx-auto" variant="top" src={img3} />

              <Card.Body>
                <Card.Title>
                  <h2 className="text-custom-secondary fs-1 fw-bold">1280+</h2>
                </Card.Title>
                <Card.Text>
                  <h5>Total Beds</h5>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bg-transparent border-0 text-center">
              <Card.Img style={{ width: "100px", height: "100px" }} className="d-block mx-auto" variant="top" src={img4} />

              <Card.Body>
                <Card.Title>
                  <h2 className="text-custom-secondary fs-1 fw-bold">1536+</h2>
                </Card.Title>
                <Card.Text>
                  <h5>Total Patients</h5>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TeamWorks;
