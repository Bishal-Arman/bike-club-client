import React from "react";

const BookingDetails = ({ booking, handleDelete, handleConfirm }) => {
  //   console.log(booking);
  const { _id, img, title, price, date, status } = booking;

  return (
    <tr>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-circle  btn-outline "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className=" rounded-full w-12 h-12 ">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </td>
      <td className="font-bold ">Service Name: {title}</td>
      <td className=" mr-5">Price: {price}..</td>
      <td className="">Order date: {date}</td>
      <td>
        {status ? (
          <span className="text-primary font-bold">Confirm</span>
        ) : (
          <button
            onClick={() => handleConfirm(_id)}
            className="btn btn-ghost btn-xs "
          >
            <span className="text-red-600">Please Confirm</span>
          </button>
        )}
      </td>
    </tr>
  );
};

export default BookingDetails;
