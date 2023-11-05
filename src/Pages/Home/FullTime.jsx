const FullTime = (job) => {
  console.log(job.jobs);
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
    <div className="card">
      <figure>
        <img
          src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="car!"
        />
      </figure>
      <div className="card-body">
        <p className="card-title text-xl md:text-3xl">{job_title}</p>
        <div className="justify-between items-center text-sm md:text-xl font-semibold">
          <h2>Name: {name}</h2>
          <h2>Name Of the Post In job: {username}</h2>
        </div>
        <div className="justify-between items-center text-sm md:text-xl font-semibold ">
          <p>Post Date: {job_posting_date}</p>
          <p>Last Deadline: {application_deadline}</p>
        </div>
        <div className="justify-between items-center text-sm md:text-xl font-semibold ">
          <p>Job Type: {job_type}</p>
          <p>Salary Range: {salary_range}</p>
        </div>
        <div className=" flex justify-between items-center text-sm md:text-xl font-semibold">
          <p>Applied {job_applied_number}</p>
          <button className="btn btn-primary">Learn now!</button>
        </div>
      </div>
    </div>
  );
};

export default FullTime;
