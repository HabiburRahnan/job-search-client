import { Helmet } from "react-helmet";
import Title from "../../Components/Title";
// import { useQuery } from "@tanstack/react-query";

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useState } from "react";
import AllJobs from "./AllJobs";
import FullTime from "./FullTime";
import PartTime from "./PartTime";
import Remote from "./Remote";
import Loading from "../../ShearPages/Loading/Loading";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useEffect } from "react";

const AppliedJobs = () => {
  const { user, loading } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  console.log(jobs);

  useEffect(() => {
    fetch("https://job-search-server-site.vercel.app/applyJob", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) =>
        data.filter((job) => (user?.email === job?.email ? setJobs(job) : ""))
      );
  }, [user?.email]);

  if (loading) return <Loading></Loading>;
  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <title>AppliedJob | Job Search</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Title>Applied Job</Title>

      <div className="mb-10">
        <Tabs>
          <TabList className=" grid grid-cols-2 md:grid-cols-4 text-center items-center py-2 md:py-5 gap-5 lg:gap-10 tabItem  ">
            <Tab className="border border-blue-600 rounded-xl">All Jobs</Tab>
            <Tab className="border border-blue-600 rounded-xl">Full Time</Tab>
            <Tab className="border border-blue-600 rounded-xl">Part Time</Tab>
            <Tab className="border border-blue-600 rounded-xl">Remote</Tab>
          </TabList>

          <TabPanel>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-0 md:gap-1 lg:gap-5 mt-10">
                <AllJobs jobs={jobs}></AllJobs>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-0 md:gap-5 mt-10">
              {jobs?.job_type == "Full-Time" ? (
                <FullTime jobs={jobs}></FullTime>
              ) : (
                ""
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-0 md:gap-5 mt-10">
              {jobs?.job_type == "Part-Time" ? (
                <PartTime jobs={jobs}></PartTime>
              ) : (
                ""
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-0 md:gap-5 mt-10">
              {jobs?.job_type == "Remote" ? <Remote jobs={jobs}></Remote> : ""}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default AppliedJobs;
