import React from "react";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import BookingDetails from "./BookingDetails";

const MyBooking = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `https://bike-club-server.vercel.app/booking?email=${user?.email}`;

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("bike-club-jwtToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (!data.error) {
          setBookings(data);
        } else {
          navigate("/");
        }
      });
  }, [url, navigate]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://bike-club-server.vercel.app/booking/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount === 1) {
              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              setBookings(remaining);
            }
          });
      }
    });
  };

  const handleConfirm = (id) => {
    fetch(`https://bike-club-server.vercel.app/booking/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          const remaining = bookings.filter((booking) => booking._id !== id);
          const update = bookings.find((booking) => booking._id === id);
          update.status = "confirm";
          const newBookings = [update, ...remaining];
          setBookings(newBookings);
        }
      });
  };

  return (
    <div className="overflow-x-auto my-28">
      {bookings.length === 0 ? (
        <p className="text-center font-semibold text-red-500 text-xl">
          `~~~No bookings available.Go and booking at least one service~~~
        </p>
      ) : (
        <table className="min-w-full table-auto">
          {/* Table headers */}
          <tbody>
            {bookings.map((booking) => (
              <BookingDetails
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleConfirm={handleConfirm}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyBooking;
