import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import Home from "./Pages/Home/Home";
import AppliedJobs from "./Pages/AppliedJobs/AppliedJobs";
import AddAJob from "./Pages/AddAJob/AddAJob";
import Blogs from "./Pages/Blogs/Blogs";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import AuthProvider from "./Provider/AuthProvider";
import PrivetRoute from "./Route/PrivetRoute.jsx";
import { Toaster } from "react-hot-toast";
import Profile from "./Pages/Profile/Profile.jsx";
import MyJob from "./Pages/MyJob/MyJob.jsx";
import ViewAllJobs from "./Pages/ViewAllJobs/ViewAllJobs.jsx";
import ViewsDetails from "./Components/ViewsDetails/ViewsDetails.jsx";
import UpdateJob from "./Pages/UpdateJob/UpdateJob.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/viewsDetails/:id",
        element: (
          <PrivetRoute>
            <ViewsDetails></ViewsDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addNewJob/${params.id}`),
      },
      {
        path: "/viewAllJobs",
        element: (
          <PrivetRoute>
            <ViewAllJobs></ViewAllJobs>
          </PrivetRoute>
        ),
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
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/myJob",
        element: <MyJob></MyJob>,
      },
      {
        path: "/updateJob/:id",
        element: <UpdateJob></UpdateJob>,
        loader: (params) =>
          fetch(`http://localhost:5000/addNewJob/${params.params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </AuthProvider>
  </React.StrictMode>
);
