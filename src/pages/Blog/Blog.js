import React from "react";
import "./Blog.css";
import blog1 from "../../images/blog-01.jpg";
import blog2 from "../../images/blog-02.jpg";
import blog3 from "../../images/blog-03.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClone, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="blog-section">
      <div className="py-5">
        <div className="text-center text-white blog">
          <div className="pt-5">
            <h5>From Blog</h5>
            <h2 className="fw-bold">News & blog</h2>
            <p>
              We are the best medical services provider in the Worldipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiudolore
              magnaveniam
            </p>
          </div>
        </div>
      </div>
      <div className="row container mx-auto shadow rounded-3 row-blog">
        <div className="col-md-4 col-12">
          <div className="blog-img-div">
            <img className="img-fluid blog-img" src={blog1} alt="" />
          </div>
          <div className="p-2 shadow-sm blog-text">
            <div className="d-flex justify-content-between mt-2">
              <p className="text-muted">
                <FontAwesomeIcon icon={faUser} /> Post By: Rt Shuvro
              </p>
              <p className="text-muted">
                <FontAwesomeIcon icon={faClone} /> Hospital
              </p>
            </div>
            <h5>Why we are the best in the world most popular hospital ever?</h5>
          </div>
        </div>{" "}
        <div className="col-md-4 col-12">
          <div className="blog-img-div">
            {" "}
            <img className="img-fluid blog-img" src={blog2} alt="" />
          </div>
          <div className="p-2 shadow-sm blog-text">
            <div className="d-flex justify-content-between mt-2">
              <p className="text-muted">
                <FontAwesomeIcon icon={faUser} /> Post By: Rt Shuvro
              </p>
              <p className="text-muted">
                <FontAwesomeIcon icon={faClone} /> Medical
              </p>
            </div>
            <h5>Why we are the best in the world most popular hospital ever?</h5>
          </div>
        </div>{" "}
        <div className="col-md-4 col-12">
          <div className="blog-img-div">
            <img className="img-fluid blog-img" src={blog3} alt="" />
          </div>
          <div className="p-2 shadow-sm blog-text">
            <div className="d-flex justify-content-between mt-2">
              <p className="text-muted">
                <FontAwesomeIcon icon={faUser} /> Post By: Rt Shuvro
              </p>
              <p className="text-muted">
                <FontAwesomeIcon icon={faClone} /> Sexual
              </p>
            </div>
            <h5>Why we are the best in the world most popular hospital ever?</h5>
          </div>
        </div>
        <Link className="d-md-block mx-md-auto btn-blog" to="/services">
          <Button className="btn btn-custom-bg  shadow border-0 w-50 mx-auto px-2 py-3 my-4  rounded-pill btn-hover">See service post</Button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
