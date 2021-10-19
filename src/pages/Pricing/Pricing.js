import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import icon1 from "../../images/png-icon-13.png";
import icon2 from "../../images/png-icon-11.png";
import icon3 from "../../images/png-icon-12.png";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="py-5">
    <h5 className="text-center text-custom-primary "> Easy Pricing Plan</h5>
    <h5 style={{fontSize: '36px'}} className="text-center text-custom-secondary  fw-bold"> Make life easier with comfortable pricing</h5>
    
      <Row xs={1} sm={1} md={3} className="g-4 container mx-auto py-5">
        <Col>
          <Card className="text-center h-100 border-0 card-price p-2">
            <Card.Img className="img-fluid d-block mx-auto" style={{ width: "100px" }} variant="top" src={icon1} />
            <Card.Body>
              <Card.Title>
                <h3>Basic</h3>
                <p>
                  <small className="text-muted">for a week</small>
                </p>
                <h4 className="fw-bold border border-bottom-0 fs-2 mb-5 mx-5">$49</h4>
              </Card.Title>
              <Card.Text className="text-start">
                <p className="text-muted border-bottom mb-2 mx-5">Weekly health check-ups</p>
                <p className="text-muted border-bottom mb-2 mx-5">Lab test system an hour</p>
                <p className="text-muted border-bottom mb-2 mx-5">Free diet consultation</p>
                <p className="text-muted border-bottom mb-2 mx-5">Custom exercise plans</p>
              </Card.Text>
            </Card.Body>
            <Link to="/services">
              <Button className="btn btn-custom-bg  shadow border-0 w-50 mx-auto px-2 py-3 my-4  rounded-pill btn-hover">Get Started</Button>
            </Link>
          </Card>
        </Col>
        <Col>
          <Card className="text-center h-100 border-0 shadow p-2">
            <Card.Img className="img-fluid d-block mx-auto" style={{ width: "100px" }} variant="top" src={icon2} />
            <Card.Body>
              <Card.Title>
                <h3>Standard</h3>
                <p>
                  <small className="text-muted">for 3 weeks</small>
                </p>
                <h4 className="fw-bold border border-bottom-0 fs-2 mb-5 mx-5">$69</h4>
              </Card.Title>
              <Card.Text className="text-start">
                <p className="text-muted border-bottom mb-2 mx-5">Weekly health check-ups</p>
                <p className="text-muted border-bottom mb-2 mx-5">Lab test system an hour</p>
                <p className="text-muted border-bottom mb-2 mx-5">Free diet consultation</p>
                <p className="text-muted border-bottom mb-2 mx-5">Custom exercise plans</p>
              </Card.Text>
            </Card.Body>
            <Link to="/services">
              <Button className="btn button-active-color shadow border-0 w-50 mx-auto px-2 py-3 my-4  rounded-pill btn-hover">Get Started</Button>
            </Link>
          </Card>
        </Col>
        <Col>
          <Card className="text-center h-100 border-0 card-price p-2">
            <Card.Img className="img-fluid d-block mx-auto" style={{ width: "100px" }} variant="top" src={icon3} />
            <Card.Body>
              <Card.Title>
                <h3>Professional</h3>
                <p>
                  <small className="text-muted">for a month</small>
                </p>
                <h4 className="fw-bold border border-bottom-0 fs-2 mb-5 mx-5">$89</h4>
              </Card.Title>
              <Card.Text className="text-start">
                <p className="text-muted border-bottom mb-2 mx-5">Weekly health check-ups</p>
                <p className="text-muted border-bottom mb-2 mx-5">Lab test system an hour</p>
                <p className="text-muted border-bottom mb-2 mx-5">Free diet consultation</p>
                <p className="text-muted border-bottom mb-2 mx-5">Custom exercise plans</p>
              </Card.Text>
            </Card.Body>
            <Link to="/services">
              <Button className="btn btn-custom-bg  shadow border-0 w-50 mx-auto px-2 py-3 my-4  rounded-pill btn-hover">Get Started</Button>
            </Link>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Pricing;
