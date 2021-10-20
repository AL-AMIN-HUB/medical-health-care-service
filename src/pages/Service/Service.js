import Aos from "aos";
import React, { useEffect } from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = (props) => {
  // animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const { name, image, desc, id } = props.service;
  return (
    <div>
      <Col>
        <Card data-Aos="fade-up" className="h-100 pb-4">
          <div className="blog-img-div">
            <Card.Img variant="top" className="img-fluid blog-img" src={image} />
          </div>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{desc.slice(0, 80)}...</Card.Text>
          </Card.Body>
          <Button className="btn button-active-color border-0 w-50 mx-auto fs-5 py-2  rounded-pill btn-hover">
            <Link className="text-decoration-none text-white" to={`/serviceDetails/${id}`}>
              {" "}
              View Details
            </Link>{" "}
          </Button>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
