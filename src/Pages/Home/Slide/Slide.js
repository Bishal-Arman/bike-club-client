import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slide.css";
import { FaUserCircle } from "react-icons/fa";
import { HiStar } from "react-icons/hi";

const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="my-10">
      <div className="max-w-full mx-auto mt-12 px-4 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
        <Slider {...settings}>
          <article className="shadow-2xl drop-shadow-xl rounded-lg bg-gray-100 px-6 py-8 gap-2">
            <div className="flex items-center my-3">
              <FaUserCircle className="user-icon mr-3  "></FaUserCircle>{" "}
              <span className="text-xl md:text-2xl lg:text-3xl font-bold">
                Sahariar Khan Mim
              </span>
            </div>

            <span className="text-lg text-gray-700 font-semibold ">
              Businessman
            </span>
            <p className="text-gray-800">
              First of all , I would share my buying experience of this
              bike.Thinking of it ,the first word that comes to my mouth is
              "awesome". Its really awesome and great. That's because ,when,the
              first time i saw this bike in showroom,i got attracted by its
              look,and also i got affordable price from dealer for this
              bike,with good warranty services.And also aftersale services were
              too impressive.Its so impressive.Its my opinion.
            </p>
            <div className="flex items-center text-yellow-500 text-xl mt-3">
              <HiStar></HiStar>
              <HiStar></HiStar>
              <HiStar></HiStar>
              <HiStar></HiStar>
              <HiStar></HiStar>
            </div>
          </article>
          <article className="shadow-2xl drop-shadow-xl rounded-lg  bg-gray-100 px-6 py-8 gap-2">
            <div className="flex items-center my-3">
              <FaUserCircle className="user-icon mr-3  "></FaUserCircle>{" "}
              <span className="text-xl md:text-2xl lg:text-3xl font-bold">
                Abu Bashar Ratul
              </span>
            </div>
            <span className="text-lg text-gray-700 font-semibold">Teacher</span>
            <p className="text-gray-800">
              I had booked this bike, in mid 2020, and been riding this bike
              regularly on my daily commute as well as occasional 1 day rides of
              around 300 kms (to&fro).Its really awesome and great. I have
              clocked almost 17k kms now, and loved the every bit of riding
              experience on it.To the untrained it might look like a bullet, but
              trust me it feels nothing like it, the feel and comfort on this
              bike is awesome, the built quality is good.
            </p>
            <div className="flex items-center text-yellow-500 text-xl mt-3">
              <HiStar></HiStar>
              <HiStar></HiStar>
              <HiStar></HiStar>
              <HiStar></HiStar>
              <HiStar></HiStar>
            </div>
          </article>
          <article className="shadow-2xl drop-shadow-xl rounded-lg  bg-gray-100 px-6 py-8 gap-2">
            <div className="flex items-center my-3">
              <FaUserCircle className="user-icon mr-3  "></FaUserCircle>{" "}
              <span className="text-xl md:text-2xl lg:text-3xl font-bold">
                Lord Shanto
              </span>
            </div>
            <span className="text-lg text-gray-700 font-semibold">
              Sportsman
            </span>
            <p className="text-gray-800">
              I would share my buying experience of this bike.Thinking of it
              ,the first word that comes to my mouth is "awesome". That's
              because ,when,the first time i saw this bike in showroom,i got
              attracted by its look,and also i got affordable price from dealer
              for this bike,with good warranty services.And also aftersale
              services were too impressive.Its my opinion.To the untrained it
              might look like a bullet.
            </p>
            <div className="flex items-center text-yellow-500 text-xl mt-3">
              <HiStar></HiStar>
              <HiStar></HiStar>
              <HiStar></HiStar>
              <HiStar></HiStar>
              <HiStar></HiStar>
            </div>
          </article>
        </Slider>
      </div>
    </section>
  );
};

export default Slide;
