import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Pricing from "../Pricing/Pricing";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Pricing></Pricing>
      <Blog></Blog>
    </div>
  );
};

export default Home;
