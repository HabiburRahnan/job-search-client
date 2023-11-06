import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const ViewsDetails = () => {
  const viewJob = useLoaderData();
  const { user } = useContext(AuthContext);

  const {
    displayName,
    applicationNumber,
    email,
    description,
    job_title,
    postingDate,
    applicationDate,
    salary,
    job_type,
    photo,
  } = viewJob;

  const [currentDate, setCurrentDate] = useState(null);

  useEffect(() => {
    const timestamp = Date.now();
    const date = new Date(timestamp);
    setCurrentDate(date);
  }, []);

  const handleApplyJob = () => {
    if (applicationDate !== currentDate) {
      if (user?.email !== email) {
        Swal.fire("Apply Job success!", "You clicked the button!", "success");
        fetch(`http://localhost:5000/applyJob`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(viewJob),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "success!",
                text: "apply Job",
                icon: "success",
                confirmButtonText: "Cool",
              });
              <Link to=""></Link>;
            }
          });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You Have Post This job!",
        });
      }
    } else {
      console.log("u have not apply");
    }
  };
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <img className="lg:h-[500px] w-full" src={photo} alt="Shoes" />

        <div className="card-body">
          <div className=" md:flex justify-between items-center text-sm md:text-xl font-semibold ">
            <h2 className="card-title   text-xl md:text-4xl font-extrabold text-blue-600">
              JOb Name: {job_title}
            </h2>
            <h2 className="card-title text-2xl md:text-3xl text-blue-600">
              Name: {displayName}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center text-sm md:text-2xl font-bold md:py-10">
            <p>Post Date: {postingDate}</p>
            <p>Last Deadline: {applicationDate}</p>

            <p>Salary Range: {salary}</p>
          </div>
          <p className="text-xl font-semibold">
            <span className="text-blue-600 text-2xl">Details: </span>{" "}
            {description}
          </p>

          <div className="card-actions flex justify-between">
            <div className="text-2xl font-semibold text-blue-600 md:flex justify-between md:gap-10">
              <p>Job Type: {job_type}</p>
              <p>Applicants:{applicationNumber}</p>
            </div>
            <button
              onClick={handleApplyJob}
              className="btn  bg-blue-600 hover:bg-blue-600 text-white">
              Apply This Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewsDetails;
