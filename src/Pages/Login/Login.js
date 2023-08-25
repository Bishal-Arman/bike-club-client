import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import img from "../../images/login.avif";
import "./Login.css";

const Login = () => {
  const { handleEmailPassLogin, handleGoogleSignIn } = useContext(AuthContext);
  let location = useLocation();
  let navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    handleEmailPassLogin(email, password)
      .then((result) => {
        const user = result.user;
        if (user.emailVerified === true) {
          navigate(from, { replace: true });
        }

        // console.log(user);
        form.reset();
      })
      .catch((error) => {
        // console.log(error);
        toast.error("Password do not match.Please type the right password");
      });
  };
  const handleGoogleLogIn = () => {
    handleGoogleSignIn()
      .then((result) => {
        const user = result.user;
        // console.log(user);
        if (user) {
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-5xl text-center font-bold">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your email please"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="Your password please"
                className="input input-bordered"
              />

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </div>
          </form>
          <p className="text-center my-2">
            If you are new please{" "}
            <Link className="text-red-600 font-bold text-xl ms-2" to="/signup">
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
