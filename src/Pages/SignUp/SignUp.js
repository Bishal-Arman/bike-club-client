import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import img from "../../images/login.avif";

const SignUp = () => {
  const { handleEmailPassSignUp, varifyEmail, handleUpdateProfile } =
    useContext(AuthContext);

  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      toast.error("Password should be at least 6 characters");
    }
    form.reset()
    // console.log(name, email, password);

    handleEmailPassSignUp(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        handleUserProfile(name);
        handleVarifyEmail();
        toast(
          "Please check your email in inbox or spam folder and verify it..!",
          {
            icon: "👏",
          }
        );
      })
      .catch((error) => {
        console.log(error);
      });

    const handleVarifyEmail = () => {
      varifyEmail();
    };
    const handleUserProfile = (name) => {
      const profile = {
        displayName: name,
      };
      handleUpdateProfile(profile)
        .then(() => {
          // Profile updated!
          // ...
        })
        .catch((error) => {
          // An error occurred
          // ...
        });
    };
  };
  return (
    <div className="hero my-20 ">
      <div className="hero-content grid md:grid-cols-2  gap-5 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <p className="py-6">
            <img className="login-img" src={img} alt="" />
          </p>
        </div>
        <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignup} className="card-body">
            <h1 className="text-5xl text-center font-bold">SignUp</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name "
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered"
              />

              {/* <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label> */}
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="SignUp"
                />
              </div>
            </div>
          </form>
          <p className="text-center my-2">
            Already have an account please{" "}
            <Link className="text-red-600 font-bold text-xl ms-2" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
