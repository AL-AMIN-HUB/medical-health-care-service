import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/9eb8828a-6692-499d-a7d8-ddfac1fc0894")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="services-bg py-5">
      <div className="text-center service-title">
        <h5 className="text-custom-primary my-5">Our Services</h5>
        <h3 className="text-custom-secondary">Medcity professional services</h3>
        <p className="text-muted">
          Why Medcity services is best all time since 1990. desires to obtain of itself, because it is pain, <br /> but because occasionally
          circumstance procure him some great deals.
        </p>
      </div>

      <div>
        <Row xs={1} sm={1} md={3} className="g-4 w-75 mx-auto mt-5">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Services;
