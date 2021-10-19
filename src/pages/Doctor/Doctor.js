import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import doctor1 from "../../images/Doctor_01.jpg";
import doctor2 from "../../images/Doctor_02.jpg";
import doctor3 from "../../images/Doctor_03.jpg";
import doctor4 from "../../images/doctor_04.jpg";
import "./Doctor.css";

const Doctor = () => {
  return (
    <div className="doctor-row">
      <div className="text-center">
        <p className=" fw-bold text-custom-primary">Helpful Doctors</p>
        <h2 className="text-custom-secondary fs-1">Advanced carefully doctors</h2>
        <p className="lead text-muted mb-5">
          Our administration and support staff all have exceptional people <br /> skills and trained to assist you with all medical enquiries.
        </p>
      </div>
      <Row xs={1} sm={1} md={4} className="g-3 container mx-auto ">
        <Col>
          <Card className="h-100 border-0 shadow ">
            <div className="blog-img-div">
              <Card.Img className="img-fluid blog-img" variant="top" src={doctor4} />
            </div>
            <Card.Body>
              <Card.Title>
                <h3>Dr. Rass Venors</h3>
                <p>
                  <small>MBBS of Pathology</small>
                </p>
              </Card.Title>
              <Card.Text className="text-muted">
                Pathology is the medical specialty concerned with the study of the nature and causes of diseases. It underpins every aspect of
                medicine, from diagnostic testing.
              </Card.Text>
            </Card.Body>
            <Link to="/pricing">
              <button style={{ width: "150px" }} className="btn text-info">
                Read More <FontAwesomeIcon icon={faArrowRight} />{" "}
              </button>
            </Link>
          </Card>
        </Col>
        <Col>
          <Card className="h-100 border-0 shadow ">
            <div className="blog-img-div">
              <Card.Img className="img-fluid blog-img" variant="top" src={doctor1} />
            </div>
            <Card.Body>
              <Card.Title>
                <h3>Richard Muldoone</h3>
                <p>
                  <small>Cardiology Specialist</small>
                </p>
              </Card.Title>
              <Card.Text className="text-muted">
                Muldoone obtained his undergraduate degree in Biomedical Engineering at Tulane University prior to attending St George's University
                School of Medicine.
              </Card.Text>
            </Card.Body>
            <Link to="/pricing">
              <button style={{ width: "150px" }} className="btn text-info">
                Read More <FontAwesomeIcon icon={faArrowRight} />{" "}
              </button>
            </Link>
          </Card>
        </Col>
        <Col>
          <Card className="h-100 border-0 shadow ">
            <div className="blog-img-div">
              <Card.Img className="img-fluid blog-img" variant="top" src={doctor2} />
            </div>
            <Card.Body>
              <Card.Title>
                <h3>Michael Brian</h3>
                <p>
                  <small>Dermatologists</small>
                </p>
              </Card.Title>
              <Card.Text className="text-muted">
                Brian specializes in treating skin, hair, nail, and mucous membrane. He also address cosmetic issues, helping to revitalize the
                appearance of the skin and nails.
              </Card.Text>
            </Card.Body>
            <Link to="/pricing">
              <button style={{ width: "150px" }} className="btn text-info">
                Read More <FontAwesomeIcon icon={faArrowRight} />{" "}
              </button>
            </Link>
          </Card>
        </Col>
        <Col>
          <Card className="h-100 border-0 shadow ">
            <div className="blog-img-div">
              <Card.Img className="img-fluid blog-img" variant="top" src={doctor3} />
            </div>
            <Card.Body>
              <Card.Title>
                <h3>Maria Andaloro</h3>
                <p>
                  <small>Pediatrician</small>
                </p>
              </Card.Title>
              <Card.Text className="text-muted">
                Andaloro graduated from medical school and completed 3 years residency program in pediatrics. She passed rigorous exams by the
                American Board of Pediatrics.
              </Card.Text>
            </Card.Body>
            <Link to="/pricing">
              <button style={{ width: "150px" }} className="btn text-info">
                Read More <FontAwesomeIcon icon={faArrowRight} />{" "}
              </button>
            </Link>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Doctor;
