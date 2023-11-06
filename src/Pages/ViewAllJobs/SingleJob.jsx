import { Link } from "react-router-dom";

const SingleJob = (job) => {
  const {
    _id,
    job_title,
    displayName,

    job_type,
    salary,

    postingDate,
    applicationDate,
  } = job.jobs;
  return (
    <div className="card-body h-96 border rounded-md border-blue-500 mt-5">
      <p className="card-title text-xl md:text-3xl font-extrabold text-blue-600">
        {job_title}
      </p>
      <div className="justify-between items-center text-sm md:text-xl font-bold">
        <h2>This Post: {displayName}</h2>
      </div>
      <div className="justify-between items-center text-sm md:text-xl font-semibold ">
        <p>Post Date: {postingDate}</p>
        <p>Last Deadline: {applicationDate}</p>
      </div>
      <div className="justify-between items-center text-sm md:text-xl font-bold text-blue-600">
        <p>Job Type: {job_type}</p>
        <p>Salary Range: {salary}</p>
      </div>
      <div className=" flex justify-between items-center text-sm md:text-xl font-semibold">
        <Link
          to={`/viewsDetails/${_id}`}
          className="btn bg-[#3878E8] hover:bg-[#3878E8] text-white">
          views Details
        </Link>
      </div>
    </div>
  );
};
export default SingleJob;
