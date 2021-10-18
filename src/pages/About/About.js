import React from "react";
import PlayIcon from "../../images/png-icon-09.png";
import about2 from "../../images/about-02.jpg";
import about3 from "../../images/about-03.jpg";
import iconSetting from "../../images/png-icon-10.png";
import iconDoller from "../../images/png-icon-11.png";
import "./About.css";

const About = () => {
  return (
    <div className="row container mx-auto ">
      <div className="col-md-6 col-lg-6 col-12 my-5">
        <div>
          <img className="w-25" src={PlayIcon} alt="" />

          <img className="d-block ms-auto w-50" src={about2} alt="" />

          <img className="w-50" src={about3} alt="" />
        </div>
      </div>
      <div className="col-md-6 col-lg-6 col-12 second-col">
        <h5>
          About The <span className="text-custom-primary">Medcity</span> Healthcare
        </h5>
        <h3 className="text-custom-secondary">
          We’re lanced most <span className="text-custom-primary">powerful treatment</span> system. They are making beautifully.
        </h3>
        <p className="text-muted">
          Every patient getting best care from us. again is there anyone who of itself, because it is pain, but because occasionally circumstance
          procure him some great pleasure.
        </p>
        <div className="d-flex justify-content-between align-items-center my-3">
          <div className="me-3">
            <img src={iconSetting} alt="" />
          </div>
          <div>
            <p className="text-muted">
              Popular belief Lorem Ipsum is not simply random text. It has roots in a piece of clasrs old Richard McClintock.
            </p>
          </div>
        </div>{" "}
        <div className="d-flex justify-content-between my-3">
          <div className="me-3">
            <img src={iconDoller} alt="" />
          </div>
          <div>
            <p className="text-muted">
              Easy pament process belief Lorem Ipsum is not simply random text. It has roots in a McClintock. Book Now Learn More
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
