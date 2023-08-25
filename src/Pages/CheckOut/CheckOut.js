import React from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { title, price, _id, img } = service;
  // console.log(img);

  const handleCheckout = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const price = form.price.value;
    const contact = form.phone.value;

    const booking = {
      customer_name: name,
      date,
      email,
      price,
      title,
      service_id: _id,
      img,
      contact,
    };
    // console.log(booking);

    fetch("https://bike-club-server.vercel.app/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          toast.success("Thank you very much.Order Confirm!Successfully");
        }
      });
  };
  return (
    <div className="mt-28">
      <h1 className="text-center text-2xl font-bold text-blue-600 border-b-2 border-dotted pb-5 mt">
        Service Name : {title}
      </h1>
      <form onSubmit={handleCheckout}>
        <div className="card-body grid grid-cols-1 md:grid-cols-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              required
              type="text"
              name="name"
              defaultValue={user?.displayName}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Choose Order Date</span>
            </label>
            <input
              required
              type="date"
              name="date"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              required
              defaultValue={user?.email}
              name="email"
              type="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={`$ ${price}`}
              className="input input-bordered"
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Contact Number</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6 md:mt-0 md:col-span-2">
            <input
              className="btn btn-primary"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
