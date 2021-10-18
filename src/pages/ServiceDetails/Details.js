import React from "react";

const Details = (props) => {
  const { name, image, desc } = props.details;
  return (
    <div className="row container mx-auto my-5">
      <div className="col-md-8 col-12">
        <h2>
          Know more us of our department services of <span>dental</span> treatment.
        </h2>
        <p>
          Latos vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet.
        </p>
        <img className="img-fluid" src={image} alt="" />
        <h4 className="mt-3">Service: {name}</h4>
        <p style={{ textAlign: "justify" }} className="lead">
          {desc}
        </p>
      </div>
      <div className="col-md-1 d-md-block d-none">{/* This is empty */}</div>
      <div className="col-md-3 col-12">
        <h3>Recent Done Works</h3>
      </div>
    </div>
  );
};

export default Details;
