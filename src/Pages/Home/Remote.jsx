const Remote = (job) => {
  const {
    name,
    username,
    job_title,
    job_posting_date,
    job_applied_number,
    application_deadline,
    salary_range,
    job_type,
  } = job.jobs;
  return (
    <div className="card-body border rounded-md border-blue-500">
    <p className="card-title text-xl md:text-3xl font-extrabold text-blue-600">
      {job_title}
    </p>
    <div className="justify-between items-center text-sm md:text-xl font-bold">
      <h2>Name: {name}</h2>
      <h2>This Post: {username}</h2>
    </div>
    <div className="justify-between items-center text-sm md:text-xl font-semibold ">
      <p>Post Date: {job_posting_date}</p>
      <p>Last Deadline: {application_deadline}</p>
    </div>
    <div className="justify-between items-center text-sm md:text-xl font-bold text-blue-600">
      <p>Job Type: {job_type}</p>
      <p>Salary Range: {salary_range}</p>
    </div>
    <div className=" flex justify-between items-center text-sm md:text-xl font-semibold">
      <p>Applied: {job_applied_number}</p>
      <button className="btn bg-[#3878E8] hover:bg-[#3878E8] text-white">
        views Details
      </button>
    </div>
  </div>
  );
};

export default Remote;
