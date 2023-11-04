import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import Home from "./Pages/Home/Home";
import AllJobs from "./Pages/AllJobs/AllJobs";
import AppliedJobs from "./Pages/AppliedJobs/AppliedJobs";
import AddAJob from "./Pages/AddAJob/AddAJob";
import Blogs from "./Pages/Blogs/Blogs";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allJobs",
        element: <AllJobs></AllJobs>,
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/addJob",
        element: <AddAJob></AddAJob>,
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
