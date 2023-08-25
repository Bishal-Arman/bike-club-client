import React, { useEffect, useState } from "react";
import ServicesCard from "../Home/Services/ServicesCard";
import "./AllServices.css";
const AllServices = () => {
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
    <div className="mb-20">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-yellow-600 mt-24">
          Bike Service Station
        </h1>
        <p className="w-1/2 mx-auto text-gray-500 my-4 text-justify">
          Very Good workshop for Bike, we are well trained and good skilled.
          Very Good for general service and wash. Reasonable price...
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
