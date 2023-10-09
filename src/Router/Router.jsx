import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Error/ErrorPage";
import Gallery from "../Pages/Gallery/Gallery";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import EventDetails from "../Pages/EventDetails/EventDetails";
import Blog from "../Pages/Blog/Blog";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/events.json"),
      },
      {
        path: "/event/:id",
        element: <PrivateRoute><EventDetails></EventDetails></PrivateRoute>,
        loader: () => fetch("/events.json"),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);

export default Router;
