import React from "react";
import {
  FaPeopleArrows,
  FaClock,
  FaMotorcycle,
  FaHandsHelping,
  FaCheckDouble,
} from "react-icons/fa";
import "./CoreFeatures.css";

const CoreFeatures = () => {
  return (
    <div className="my-20">
      <h1 className="text-center text-orange-600 text-3xl font-bold pb-3">
        Core Features
      </h1>
      <p className="text-center text-5xl  font-bold pb-6">Why Choose Us</p>
      <p className="text-center text-gray-500 pb-6">
        These are our strengths and qualities.No doubt these qualities, as well
        as numerous others, are essential for success on a broader and long-term
        level.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 my-5">
        <div className="border-2 border-gray-200 py-5 rounded-md shadow-2xl">
          <div className="flex flex-row justify-center items-center">
            <FaPeopleArrows className="text-purple-600 icon "></FaPeopleArrows>
          </div>
          <p className="text-center text-success">Expert Team</p>
        </div>
        <div className="border-2 border-gray-200 py-5 rounded-md shadow-2xl">
          <div className="flex flex-row justify-center items-center">
            <FaClock className="text-red-600  icon"></FaClock>
          </div>
          <p className="text-center text-success">Timely Delivery</p>
        </div>
        <div className="border-2 border-gray-200 py-5 rounded-md shadow-2xl">
          <div className="flex flex-row justify-center items-center">
            <FaMotorcycle className="text-blue-500 icon"></FaMotorcycle>
          </div>
          <p className="text-center text-success">Best Equipment</p>
        </div>
        <div className="border-2 border-gray-200 py-5 rounded-md shadow-2xl">
          <div className="flex flex-row justify-center items-center">
            <FaHandsHelping className="text-yellow-500 icon"></FaHandsHelping>
          </div>
          <p className="text-center text-success">24/7 Support</p>
        </div>
        <div className="border-2 border-gray-200 py-5 rounded-md shadow-2xl">
          <div className="flex flex-row justify-center items-center">
            <FaCheckDouble className="text-purple-600 icon"></FaCheckDouble>
          </div>
          <p className="text-center text-success">100% Guarantee</p>
        </div>
      </div>
    </div>
  );
};

export default CoreFeatures;
