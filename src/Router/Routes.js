import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AllServices from "../Pages/AllServices/AllServices";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyBooking from "../Pages/MyBooking/MyBooking";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import SignUp from "../Pages/SignUp/SignUp";
import PrivaeRoute from "../PrivateRoute/PrivaeRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <SignUp></SignUp> },
      {
        path: "/services",
        element: <AllServices></AllServices>,
      },
      {
        path: "/checkout/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://bike-club-server.vercel.app/services/${params.id}`
          );
        },
        element: (
          <PrivaeRoute>
            <CheckOut></CheckOut>
          </PrivaeRoute>
        ),
      },
      { path: "*", element: <PageNotFound></PageNotFound> },
      {
        path: "/booking",
        element: (
          <PrivaeRoute>
            <MyBooking></MyBooking>
          </PrivaeRoute>
        ),
      },
    ],
  },
]);
