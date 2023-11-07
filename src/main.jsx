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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

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
        element: (
          <PrivetRoute>
            <AppliedJobs></AppliedJobs>
          </PrivetRoute>
        ),
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
        element: <ViewAllJobs></ViewAllJobs>,
      },
      {
        path: "/addJob",
        element: (
          <PrivetRoute>
            <AddAJob></AddAJob>
          </PrivetRoute>
        ),
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
        element: (
          <PrivetRoute>
            <Profile></Profile>
          </PrivetRoute>
        ),
      },
      {
        path: "/myJob",
        element: (
          <PrivetRoute>
            <MyJob></MyJob>
          </PrivetRoute>
        ),
      },

      {
        path: "/updateJob/:id",
        element: (
          <PrivetRoute>
            <UpdateJob></UpdateJob>
          </PrivetRoute>
        ),
        loader: (params) =>
          fetch(`http://localhost:5000/addNewJob/${params.params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster></Toaster>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
