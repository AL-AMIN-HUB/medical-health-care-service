import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Details from "./Details";

const ServiceDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch("https://mocki.io/v1/9eb8828a-6692-499d-a7d8-ddfac1fc0894")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  const exactDetails = details.filter((td) => td.id == id);
  console.log(exactDetails);

  return (
    <div>
      {exactDetails.map((details) => (
        <Details key={details.id} details={details}></Details>
      ))}
    </div>
  );
};

export default ServiceDetails;
