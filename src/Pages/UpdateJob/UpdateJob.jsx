import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Title from "../../Components/Title";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
const UpdateJob = () => {
  const updateOneJob = useLoaderData();
  const {
    _id,
    job_title,
    description,
    job_type,
    salary,
    photo,
    postingDate,
    applicationDate,
    applicationNumber,
  } = updateOneJob;
  console.log(updateOneJob);
  const { user } = useContext(AuthContext);

  const updatedThisJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const job_title = form.job_title.value;
    const displayName = user?.displayName;
    const email = user?.email;
    const job_type = form.job_type.value;
    const salary = form.salary.value;
    const postingDate = form.postingDate.value;
    const applicationDate = form.applicationDate.value;
    const photo = form.photo.value;
    const description = form.description.value;
    const applicationNumber = form.applicationNumber.value;

    const UpdatedJob = {
      job_title,
      displayName,
      description,
      email,
      job_type,
      salary,
      photo,
      postingDate,
      applicationDate,
      applicationNumber,
    };
    console.log(UpdatedJob);
    fetch(`https://job-search-server-gamma.vercel.app/addNewJob/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdatedJob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "success!",
            text: "Job updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-0 md:p-24">
      <Helmet>
        <meta charset="utf-8" />
        <title>UpdateJob | Job Search</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Title>Update this Job</Title>
      <form onSubmit={updatedThisJob} className="mt-10">
        <div className=" md:flex mb-0 md:mb-8">
          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text">Job Title</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="job_title"
                placeholder="Job Title"
                defaultValue={job_title}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-full md:w-1/2 ml-0 md:ml-4">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <label className="input-group">
              <input
                name="userName"
                type="text"
                defaultValue={user?.displayName}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className=" md:flex mb-0 md:mb-8">
          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text">Job job type</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="job_type"
                placeholder="Job job type"
                defaultValue={job_type}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-full md:w-1/2 ml-0 md:ml-4">
            <label className="label">
              <span className="label-text">Salary Range</span>
            </label>
            <label className="input-group">
              <input
                name="salary"
                type="text"
                placeholder="Salary Range"
                defaultValue={salary}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="mb-8">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="photo url"
                defaultValue={photo}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="mb-8">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                placeholder="Description"
                defaultValue={description}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  items-center mb-0 md:mb-8">
          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text">Job Posting Date</span>
            </label>
            <label className="input-group">
              <input
                type="date"
                name="postingDate"
                placeholder="date"
                defaultValue={postingDate}
                className="input input-bordered"
              />
            </label>
          </div>

          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text">Application Deadline</span>
            </label>
            <label className="input-group">
              <input
                type="date"
                name="applicationDate"
                placeholder="date"
                defaultValue={applicationDate}
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text">Job Application Number</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="applicationNumber"
                placeholder="Job Application Number"
                defaultValue={applicationNumber}
                className="input input-bordered"
              />
            </label>
          </div>
        </div>

        <input
          type="submit"
          value="Update job"
          className="btn btn-block text-white bg-blue-500 hover:bg-blue-500 my-10"
        />
      </form>
    </div>
  );
};

export default UpdateJob;
