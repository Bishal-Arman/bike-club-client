import React from "react";
import { useNavigate } from "react-router-dom";
import pagenotfound from "../../images/pagenotfound.png";
import "./PageNotFound.css";

const PageNotFound = () => {
  const navigate = useNavigate();
  const handleBackServices = () => {
    navigate("/services");
  };
  const handleBackHome = () => {
    navigate("/");
  };
  return (
    <>
      <div
        className="pageNotFound "
        data-aos="fade-right"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="2000"
      >
        <div className="pageError">
          <img
            style={{ width: "500px" }}
            className="img-fluid rounded "
            src={pagenotfound}
            alt=""
          />
        </div>
        <div className="text-center backCourse-btn">
          <button
            className="btn btn-outline btn-secondary"
            onClick={handleBackServices}
          >
            Back To The Courses
          </button>
        </div>
        <div className="text-center mt-3 backHome-btn ">
          <button
            className="btn btn-outline btn-error"
            onClick={handleBackHome}
          >
            Back To The Home
          </button>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
