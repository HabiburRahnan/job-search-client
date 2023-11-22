import { useState } from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../ShearPages/Loading/Loading";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import AllJob from "./page/AllJob";
import FullTime from "./page/FullTime";
import PartTime from "./page/PartTime";
import Remote from "./page/Remote";

const ViewAllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(6);

  const { isPending } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(`https://job-search-server-site.vercel.app/addNewJob`)
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
      <Tabs>
        <TabList className=" grid grid-cols-2 md:grid-cols-4 text-center items-center py-2 md:py-5 gap-5 md:gap-10 tabItem  ">
          <Tab className="border border-blue-600 rounded-xl">All Jobs</Tab>
          <Tab className="border border-blue-600 rounded-xl">Full Time</Tab>
          <Tab className="border border-blue-600 rounded-xl">Part Time</Tab>
          <Tab className="border border-blue-600 rounded-xl">Remote</Tab>
        </TabList>

        <TabPanel>
          <div>
            <div className="grid grid-cols-1 mx-5 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-0 md:gap-5 mt-10">
              {jobs?.slice(0, dataLength)?.map((job, index) => (
                <>
                  <AllJob key={index} jobs={job}></AllJob>
                </>
              ))}
            </div>

            <div className={dataLength === jobs?.length ? "hidden" : ""}>
              <button
                onClick={() => setDataLength(jobs?.length)}
                className="btn  bg-[#3878E8] hover:bg-[#3878E8] text-white mt-5 items-center ">
                Show All Jobs
              </button>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 mx-5 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-0 md:gap-5 mt-10">
            {jobs?.map((job, index) =>
              job?.job_type == "Full-Time" ? (
                <FullTime key={index} jobs={job}></FullTime>
              ) : (
                ""
              )
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 mx-5 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-0 md:gap-5 mt-10">
            {jobs?.map((job, index) =>
              job?.job_type == "Part-Time" ? (
                <PartTime key={index} jobs={job}></PartTime>
              ) : (
                ""
              )
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 mx-5 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-0 md:gap-5 mt-10">
            {jobs?.map((job, index) =>
              job?.job_type == "Remote" ? (
                <Remote key={index} jobs={job}></Remote>
              ) : (
                ""
              )
            )}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ViewAllJobs;
