import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import FullTime from "./FullTime.jsx";

const HomePageTabs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobPost.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <Tabs>
        <TabList className=" grid grid-cols-2 md:grid-cols-4 text-center items-center py-2 md:py-5 gap-5 md:gap-10 tabItem ">
          <Tab>All Jobs</Tab>
          <Tab>Full Time</Tab>
          <Tab>Part Time</Tab>
          <Tab>Remote</Tab>
        </TabList>

        <TabPanel>
          <h2>all jobs</h2>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-0 md:gap-5 mt-10">
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
          <h2>Part Time</h2>
        </TabPanel>
        <TabPanel>
          <h2>Remote</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default HomePageTabs;
