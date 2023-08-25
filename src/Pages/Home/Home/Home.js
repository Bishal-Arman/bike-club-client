import React from "react";
import Banner from "../Banner/Banner";
import CoreFeatures from "../CoreFeatures/CoreFeatures";
import Schedule from "../Schedule/Schedule";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

import About from "./About/About";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Schedule></Schedule>
      <CoreFeatures></CoreFeatures>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
