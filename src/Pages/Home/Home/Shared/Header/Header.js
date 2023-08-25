import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../../contexts/AuthProvider/AuthProvider";
import headerLogo from "../../../../../images/headerlogo.png";
import "./header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const menuItems = (
    <>
      <li className="font-semibold text-xl flex flex-row">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/booking">My Booking</Link>
      </li>
    </>
  );
  return (
    <div className="navbar h-20 mb-12 pt-12 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl ">
          <img className="headerLogo" src={headerLogo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex lg:w-auto">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end flex flex-col items-end mt-3 lg:flex-row lg:mt-0">
        {user?.uid ? (
          <div className="flex flex-row">
            <span className="mr-3 text-blue-600 mt-3">{user?.displayName}</span>
            <button onClick={handleLogOut} className="btn btn-warning mr-3">
              <Link to="#">Logout</Link>
            </button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row">
            <button className="btn btn-outline  btn-secondary mr-3 mt-1">
              <Link to="/login">LogIn</Link>
            </button>
            <button className="btn btn-outline btn-warning mr-3 mt-1">
              <Link to="/SignUp">Signup</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
