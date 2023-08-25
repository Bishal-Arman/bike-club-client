import React from "react";
import "./BannerItem.css";
const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} alt="" className="w-full banner-img rounded-xl" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4">
        <h1 className="lg:text-5xl font-bold text-white">
          Affordable <br />
          Price for bike <br />
          Servicing...
        </h1>
      </div>
      <div className="absolute  flex justify-end transform -translate-y-1/2 w-2/5 left-24  top-1/2 ">
        <h1 className="lg:text-xl  text-white">
          Experience Bike Reviews, News, and Latest Motorcycle Price In
          Bangladesh
        </h1>
      </div>

      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
