import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer-bg py-5 ">
      <div className="row container mx-auto">
        <div className="col-md-3 col-12">
          <img
            className="img-fluid pb-5 "
            style={{ width: "250px", borderRadius: "5px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs60-jeTSdDs0gJ9-QT9vkayEyJiDsw0iMTg&usqp=CAU"
            alt=""
          />
          <ul className="footer-ul pb-3">
            <li>F1 455 Caron Town.</li>
            <li>Office No 1025</li>
            <li>assignment@gmail.com</li>
            <li>+88 01779 265502</li>
          </ul>
          <div className="d-flex">
            <input className="form-control rounded-0 fs-5" type="email" placeholder="Email" name="email" />

            <button className="btn button-active-color rounded-0 fs-5 text-white px-3">
              {" "}
              <FontAwesomeIcon icon={faPaperPlane} />{" "}
            </button>
          </div>
        </div>
        <div className="col-md-3 col-12">
          <h3 className="text-white">Our Departments.</h3>
          <ul className="footer-ul py-3">
            <li>Medcity & intensive care</li>
            <li>Home Care</li>
            <li>Caregivers</li>
            <li>Diagnosis & Investigation</li> <li>Medical & Surgical</li> <li>Mental Health</li> <li>Specialized Support Service</li>
          </ul>
        </div>
        <div className="col-md-3 col-12">
          <h3 className="text-white">Helpful Links</h3>
          <ul className="footer-ul py-3">
            <li>Who We Are</li>
            <li>Out Team Mission History</li>
            <li>Awards since 1990-2021</li>
            <li>Experience Purpose</li> <li>Success Story</li> <li>Specialized Support</li>
          </ul>
        </div>
        <div className="col-md-3 col-12">
          <h3 className="text-white">Our Gallery.</h3>
          <Row xs={3} md={3} className="g-2 py-4">
            <Col>
              <Card>
                <Card.Img variant="top" src="https://oilytheme.net/demo-html/2021/003/hounlare/assets/img/background/bg-06.jpg" />
              </Card>
            </Col>{" "}
            <Col>
              <Card>
                <Card.Img variant="top" src="https://oilytheme.net/demo-html/2021/003/hounlare/assets/img/background/bg-07.jpg" />
              </Card>
            </Col>{" "}
            <Col>
              <Card>
                <Card.Img variant="top" src="https://oilytheme.net/demo-html/2021/003/hounlare/assets/img/background/bg-08.jpg" />
              </Card>
            </Col>{" "}
            <Col>
              <Card>
                <Card.Img variant="top" src="https://oilytheme.net/demo-html/2021/003/hounlare/assets/img/background/bg-09.jpg" />
              </Card>
            </Col>{" "}
            <Col>
              <Card>
                <Card.Img variant="top" src="https://oilytheme.net/demo-html/2021/003/hounlare/assets/img/background/bg-10.jpg" />
              </Card>
            </Col>{" "}
            <Col>
              <Card>
                <Card.Img variant="top" src="https://oilytheme.net/demo-html/2021/003/hounlare/assets/img/background/bg-11.jpg" />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <hr className="text-white my-5" />
      <div className="d-md-flex container mx-auto justify-content-between align-items-center text-md-start text-center">
        <div>
          <i class="fab fa-facebook-f text-muted ms-4 fs-4"></i>
          <i class="fab fa-twitter text-muted ms-4 fs-4"></i>
          <i class="fab fa-instagram text-muted ms-4 fs-4"></i>
          <i class="fab fa-linkedin-in text-muted ms-4 fs-4"></i>
        </div>
        <div className="text-muted">
          <h5>
            &copy; 2021 by <span className="text-custom-primary">Assign10</span> alright reserved by Al Amin
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
