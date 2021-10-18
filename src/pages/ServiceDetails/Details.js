import React from "react";

const Details = (props) => {
  const { name, image, desc } = props.details;
  return (
    <div className="row container mx-auto my-5">
      <div className="col-md-7 col-12 me-5">
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

      <div className="col-md-4 col-12  h-75 work-card work-bg shadow-sm p-0">
        <h3 className="button-active-color m-0 p-3 fs-2 text-white">Recent Done Works</h3>
        <div className="d-flex ps-3 pt-3 align-items-center">
          <div className="me-3">
            <img
              style={{ width: "100px", borderRadius: "10px" }}
              className="img-fluid"
              src="https://oilytheme.net/demo-html/2021/003/hounlare/assets/img/blog/blog-09.jpg"
              alt=""
            />
          </div>
          <div>
            <h4 className="work-title text-custom-secondary">Old Caregiver</h4>
            <p>
              We service at home for <br /> old ages
            </p>
          </div>
        </div>{" "}
        <div className="d-flex ps-3 pt-3 align-items-center">
          <div className="me-3">
            <img
              style={{ width: "100px", borderRadius: "10px" }}
              className="img-fluid"
              src="https://oilytheme.net/demo-html/2021/003/hounlare/assets/img/blog/blog-10.jpg"
              alt=""
            />
          </div>
          <div>
            <h4 className="work-title text-custom-secondary">Baby Care</h4>
            <p>
              We service at home for <br /> old ages
            </p>
          </div>
        </div>{" "}
        <div className="d-flex ps-3 pt-3 align-items-center">
          <div className="me-3">
            <img
              style={{ width: "100px", borderRadius: "10px" }}
              className="img-fluid"
              src="https://oilytheme.net/demo-html/2021/003/hounlare/assets/img/blog/blog-11.jpg"
              alt=""
            />
          </div>
          <div>
            <h4 className="work-title text-custom-secondary">Eye Care</h4>
            <p>
              We service at home for <br /> old ages
            </p>
          </div>
        </div>{" "}
        <div className="d-flex ps-3 pt-3 align-items-center pb-2">
          <div className="me-3">
            <img
              style={{ width: "100px", borderRadius: "10px" }}
              className="img-fluid"
              src="https://oilytheme.net/demo-html/2021/003/hounlare/assets/img/blog/blog-12.jpg"
              alt=""
            />
          </div>
          <div>
            <h4 className="work-title text-custom-secondary">Emergency help</h4>
            <p>
              We service at home for <br /> old ages
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
