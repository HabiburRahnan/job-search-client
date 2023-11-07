import { useContext, useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet";

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
  const applyEmail = email;
  useEffect(() => {
    const timestamp = Date.now();
    const date = new Date(timestamp);
    setCurrentDate(date);
  }, []);

  const handleApplyJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const job_title = viewJob?.job_title;
    const displayName = user?.displayName;
    const email = user?.email;
    const job_type = viewJob?.job_type;
    const postingDate = viewJob?.postingDate;
    const applicationDate = viewJob?.applicationDate;
    const resume = form.resume.value;
    const applyJob = {
      job_title,
      photo,
      displayName,
      job_type,
      postingDate,
      applicationDate,
      resume,
      email,
    };
    // console.log(applyJob);
    if (Date.parse(applicationDate) >= currentDate) {
      if (user?.email !== applyEmail) {
        Swal.fire("Apply Job success!", "You clicked the button!", "success");
        fetch(`http://localhost:5000/applyJob`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(applyJob),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                title: "success!",
                text: "apply Job",
                icon: "success",
                confirmButtonText: "ok",
              });
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
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "apply date is over!",
      });
    }
    btn.current.click();
  };

  const btn = useRef();

  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <title>ViewsDetails | Job Search</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
              className="btn  text-white bg-blue-500 hover:bg-blue-500 my-10"
              onClick={() => document.getElementById("my_modal_5").showModal()}>
              Apply Now
            </button>

            <dialog id="my_modal_5" className="modal  modal-middle">
              <div className="modal-box ">
                <h1 className="text-2xl font-bold mb-10 text-blue-600 text-center">
                  Apply Now
                </h1>

                <form method="dialog" onSubmit={handleApplyJob}>
                  <div className=" md:flex mb-0 md:mb-8">
                    <div className="form-control  md:w-1/2">
                      <label className="label">
                        <span className="label-text">Job Title</span>
                      </label>
                      <label className="input-group">
                        <input
                          type="text"
                          name="job_title"
                          readOnly
                          placeholder="Job Title"
                          defaultValue={job_title}
                          className="input input-bordered "
                        />
                      </label>
                    </div>
                    <div className="form-control  md:w-1/2 ml-0 md:ml-4">
                      <label className="label">
                        <span className="label-text">User Name</span>
                      </label>
                      <label className="input-group">
                        <input
                          name="userName"
                          type="text"
                          readOnly
                          defaultValue={user?.displayName}
                          className="input input-bordered "
                        />
                      </label>
                    </div>
                  </div>
                  <div className=" md:flex mb-0 md:mb-8">
                    <div className="form-control  md:w-1/2">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <label className="input-group">
                        <input
                          type="text"
                          name="Email"
                          placeholder="Email"
                          readOnly
                          defaultValue={user.email}
                          className="input input-bordered "
                        />
                      </label>
                    </div>
                    <div className="form-control  md:w-1/2 ml-0 md:ml-4">
                      <label className="label">
                        <span className="label-text">Resume URL</span>
                      </label>
                      <label className="input-group">
                        <input
                          name="resume"
                          type="url"
                          placeholder="Resume URL"
                          className="input input-bordered "
                          required
                        />
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn text-white bg-blue-500 hover:bg-blue-500 my-10">
                    Apply confirm
                  </button>
                </form>
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button ref={btn} className="btn hidden">
                    Close
                  </button>
                </form>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewsDetails;
