import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServicesCard from "./ServicesCard";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://bike-club-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setServices(data);
      });
  }, []);
  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-orange-600 mt-24">Services</h1>
        <p className="w-1/2 mx-auto text-gray-500 my-4 text-justify">
          Authorized Dealers have service facility to maintain your motor
          cycles. And besides, we have training programs and provides to our
          dealer staffs. Trained dealer staffs will support your motor cycle
          life
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {services &&
          services
            .slice(0, 3)
            .map((service) => (
              <ServicesCard key={service._id} service={service}></ServicesCard>
            ))}
      </div>
      <div>
        <Link to="/services" className="text-center mt-5 seeAllBikes ">
          <button className="btn btn-active btn-secondary">
            More Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
