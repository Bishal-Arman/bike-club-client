import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

const PrivaeRoute = ({ children }) => {
  let location=useLocation()
  const { loading, user } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex flex-row justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>;
      </div>
    );
  }
  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" state={{from:location}} replace></Navigate>;
};

export default PrivaeRoute;
