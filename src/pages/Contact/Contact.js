import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import "./Contact.css";
import address1 from "../../images/about-18.jpg";
import address2 from "../../images/about-19.jpg";
import address3 from "../../images/about-20.jpg";
import icon1 from "../../images/135044.svg";
import icon2 from "../../images/01-25-16.svg";
import icon3 from "../../images/building.svg";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="pb-5">
      <div className="contact">
        <h2>Contact Us</h2>
      </div>
      <Row xs={1} sm={1} md={3} className="g-4 container pt-5 mx-auto">
        <Col>
          <Card className="h-100 border-0 shadow">
            <Card.Img variant="top" src={address1} />
            <Card.Body className="text-center">
              <Card.Img style={{ width: "90px" }} className="d-block mx-auto py-3" src={icon1} />
              <Card.Title>Our Main Office</Card.Title>
              <Card.Text className="text-muted">2021 Beston Icecare Apt. 896, Venaville 202020, Bangladesh</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100 border-0 shadow">
            <Card.Img variant="top" src={address2} />
            <Card.Body className="text-center">
              <Card.Img style={{ width: "90px" }} className="d-block mx-auto py-3" src={icon2} />
              <Card.Title>Los Lngeles</Card.Title>
              <Card.Text className="text-muted">2021 Beston Icecare Apt. 896, Venaville 202020, Bangladesh</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100 border-0 shadow">
            <Card.Img variant="top" src={address3} />
            <Card.Body className="text-center">
              <Card.Img style={{ width: "90px" }} className="d-block mx-auto py-3" src={icon3} />
              <Card.Title>Las Vegas</Card.Title>
              <Card.Text className="text-muted">2021 Beston Icecare Apt. 896, Venaville 202020, Bangladesh</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div>
        <h2 className="text-center mt-5  text-custom-secondary ">Contact Us Or Send Us Your Message</h2>
      </div>
      <div style={{ marginTop: "50px" }} className="row container mx-auto py-5">
        <div className="col-md-4 col-12  h-75 work-card  shadow-sm p-0">
          <h3 className="button-active-color m-0 p-3 fs-2 text-white">Quick Understanding</h3>
          <p className="text-muted p-5">
            Really we are help you as soon as posible. diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
            gubergren, no sea takimata sanctus est Lorem dolor sit ametco.
          </p>
        </div>
        <div className="col-md-8 col-12 ">
          <Form onSubmit={handleSubmit}>
            <Row sm={1} xs={1} md={2} className="mb-3 container-fluid">
              <Form.Group className="py-2 py-md-0" as={Col} controlId="formGridEmail">
                <Form.Control className="bg-input form-control-lg  border-0 " type="email" placeholder="Enter email*" required />
              </Form.Group>

              <Form.Group className="py-2 py-md-0" as={Col} controlId="formGridPassword">
                <Form.Control className="bg-input form-control-lg  border-0 " type="password" placeholder="Password*" required />
              </Form.Group>
            </Row>{" "}
            <Row sm={1} xs={1} md={2} className="mb-3 container-fluid">
              <Form.Group className="py-2 py-md-0" as={Col} controlId="formGridEmail">
                <Form.Control className="bg-input form-control-lg  border-0 " type="number" placeholder="Phone Number*" />
              </Form.Group>

              <Form.Group className="py-2 py-md-0" as={Col} controlId="formGridPassword">
                <Form.Control className="bg-input form-control-lg  border-0 " type="text" placeholder="Subject" />
              </Form.Group>
            </Row>{" "}
            <Row sm={1} xs={1} md={1} className="mb-3 container-fluid">
              <Form.Group className="py-2 py-md-0" as={Col} controlId="formGridEmail">
                <Form.Control className="bg-input form-control-lg  border-0 " placeholder="Your Message" as="textarea" rows="7" name="address" />
              </Form.Group>

              <Button className="w-100 mx-auto mt-5 py-3 border-0 fs-5 button-active-color text-white" type="submit">
                Send Message
              </Button>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
