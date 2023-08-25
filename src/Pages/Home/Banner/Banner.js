import React from "react";
import img3 from "../../../images/banner/img-6.jpg";
import img2 from "../../../images/banner/bn-2.jpg";
import img1 from "../../../images/banner/img-3.webp";
import img4 from "../../../images/banner/img-7.webp";
import BannerItem from "./BannerItem";

const bannerData = [
  {
    image: img1,
    id: 1,
    prev: 4,
    next: 2,
  },
  {
    image: img2,
    id: 2,
    prev: 1,
    next: 3,
  },
  {
    image: img3,
    id: 3,
    prev: 2,
    next: 4,
  },
  {
    image: img4,
    id: 4,
    prev: 3,
    next: 1,
  },
];

const Banner = () => {
  return (
    <div className="carousel w-full py-5">
      {bannerData.map((slide) => (
        <BannerItem key={slide.id} slide={slide}></BannerItem>
      ))}
    </div>
  );
};

export default Banner;
