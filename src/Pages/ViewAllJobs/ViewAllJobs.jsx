import { useEffect, useState } from "react";
import SingleJob from "./SingleJob";

const ViewAllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(6);
  useEffect(() => {
    fetch("jobPost.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-0 md:gap-5 mt-10">
        {jobs?.slice(0, dataLength).map((job, index) => (
          <SingleJob key={index} jobs={job}></SingleJob>
        ))}
      </div>

      <div className={dataLength === jobs.length ? "hidden" : ""}>
        <button
          onClick={() => setDataLength(jobs.length)}
          className="btn bg-[#3878E8] hover:bg-[#3878E8] text-white ">
          Show All Jobs
        </button>
      </div>
    </div>
  );
};

export default ViewAllJobs;
