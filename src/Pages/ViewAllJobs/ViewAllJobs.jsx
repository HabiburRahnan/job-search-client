import { useState } from "react";
import SingleJob from "./SingleJob";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../ShearPages/Loading/Loading";

const ViewAllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(6);
  // useEffect(() => {
  //   fetch("http://localhost:5000/addNewJob")
  //     .then((res) => res.json())
  //     .then((data) => setJobs(data));
  // }, []);

  const { isPending } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(`http://localhost:5000/addNewJob`)
        .then((res) => res.json())
        .then((data) => setJobs(data)),
  });

  if (isPending) return <Loading></Loading>;

  return (
    <div className="mb-10">
      <Helmet>
        <meta charset="utf-8" />
        <title>AllJobs | Job Search</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
