import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Doctor from "../Doctor/Doctor";
import Pricing from "../Pricing/Pricing";
import Services from "../Services/Services";
import TeamWorks from "../TeamWorks/TeamWorks";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Pricing></Pricing>
      <Blog></Blog>
      <Doctor></Doctor>
      <TeamWorks></TeamWorks>
    </div>
  );
};

export default Home;
