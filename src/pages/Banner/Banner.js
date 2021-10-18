import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../images/banner1.jpg";
import banner2 from "../../images/banner2.jpg";
import banner3 from "../../images/banner3.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item className="carousel-item">
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption className="banner-text">
            <h4>MEDICAL CENTER.</h4>
            <h2>
              Best <span>Medical &</span> <br /> Health Care Center.
            </h2>
            <p>
              Pleasure, but because those who do know how to pursue <br /> pleasure rationally extremely painful.
            </p>
            <button className="btn button-active-color text-white fs-4 py-2 px-4  rounded-pill position-relative">
              Learn More{" "}
              <span>
                {" "}
                <FontAwesomeIcon icon={faAngleDoubleRight} />{" "}
              </span>{" "}
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption className="banner-text">
            <h4>MEDICAL CENTER.</h4>
            <h2>
              Best <span>Medical &</span> <br /> Health Care Center.
            </h2>
            <p>
              Pleasure, but because those who do know how to pursue <br /> pleasure rationally extremely painful.
            </p>
            <button className="btn button-active-color text-white fs-4 py-2 px-4  rounded-pill position-relative">
              Learn More{" "}
              <span>
                {" "}
                <FontAwesomeIcon icon={faAngleDoubleRight} />{" "}
              </span>{" "}
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption className="banner-text">
            <h4>MEDICAL CENTER.</h4>
            <h2>
              Best <span>Medical &</span> <br /> Health Care Center.
            </h2>
            <p>
              Pleasure, but because those who do know how to pursue <br /> pleasure rationally extremely painful.
            </p>
            <button className="btn button-active-color text-white fs-4 py-2 px-4  rounded-pill position-relative">
              Learn More{" "}
              <span>
                {" "}
                <FontAwesomeIcon icon={faAngleDoubleRight} />{" "}
              </span>{" "}
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
