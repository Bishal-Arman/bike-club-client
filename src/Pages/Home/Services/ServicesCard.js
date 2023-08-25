import React from "react";
import "./Services.css";

import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const ServicesCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl mx-auto">
      <figure>
        <img src={img} alt="" className="px-4 pt-4 bike-img" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}!</h2>
        <p className="text-red-600 font-semibold text-xl">Price: ${price}</p>
        <div className="card-actions justify-end">
          <Link to={`/checkout/${_id}`}>
            <button className="btn btn-outline btn-error">
              <FaArrowRight></FaArrowRight>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
