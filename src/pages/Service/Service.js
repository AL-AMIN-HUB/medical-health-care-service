import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { name, image, desc, id } = props.service;
  return (
    <div>
      <Col>
        <Card className="h-100 pb-4">
          <Card.Img variant="top" className="img-fluid" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{desc.slice(0, 80)}...</Card.Text>
          </Card.Body>
          <Button className="btn button-active-color border-0 w-50 mx-auto fs-4 py-2  rounded-pill btn-hover">
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
