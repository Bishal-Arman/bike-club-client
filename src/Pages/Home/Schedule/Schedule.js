import React from "react";
import { FaCalendarAlt, FaBlenderPhone, FaStreetView } from "react-icons/fa";
const Schedule = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 bg-black my-10 py-5 rounded-md mt-5">
      <div className="flex flex-row justify-center items-center text-white">
        <div className="mr-2 text-green-500 ">
          <FaCalendarAlt className="w-5"></FaCalendarAlt>
        </div>
        <div>
          <p>We are open sunday-friday</p>
          <p>7:00 am - 10.00 pm</p>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center  text-white">
        <div className="mr-2 text-red-500">
          <FaBlenderPhone className="w-5"></FaBlenderPhone>
        </div>
        <div>
          <p>Have any question?Contact:</p>
          <p>+8801784950443</p>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center  text-white">
        <div className="mr-2 text-blue-500">
          <FaStreetView className="w-5"></FaStreetView>
        </div>
        <div>
          <p>Our main office or campus</p>
          <p>Mirpur-001,Dhaka</p>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
