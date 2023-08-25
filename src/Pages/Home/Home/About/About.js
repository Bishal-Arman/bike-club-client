import React from "react";
import bikePerson from "../../../../images/banner/about-bike-person.webp";
import helmet from "../../../../images/banner/helmet.jpg";
const About = () => {
  return (
    <div className="hero my-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-1/2">
          <h1 className="text-orange-600 text-3xl font-bold pb-3">About Us</h1>
          <h1 className="text-5xl  font-bold text-justify">
            We are qualified,
            <br />
            experience <br />
            in this field
          </h1>

          <p className="py-6 text-gray-500 text-justify ">
            The principal activities are manufacturing and assembling of
            motorcycles, scooters and other forms of motor vehicles and related
            accessories.
          </p>
          <button className="btn btn-outline btn-info">Get More Info</button>
        </div>
        <div className="w-1/2 relative">
          <img
            src={bikePerson}
            alt=""
            className="w-4/5 h-1/2 rounded-lg shadow-2xl"
          />
          <img
            src={helmet}
            alt=""
            className="absolute right-5 top-1/2 w-3/5 bottom-8  rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
