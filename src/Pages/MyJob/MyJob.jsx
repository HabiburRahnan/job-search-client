import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import MySingleJob from "./MySingleJob";

const MyJob = () => {
  const myAllJObs = useLoaderData();
  console.log(myAllJObs);
  const { user } = useContext(AuthContext);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Delete</th>
            <th className="hidden md:block">Job Photo</th>
            <th>Job Name</th>

            <th>Status</th>
          </tr>
        </thead>
        {myAllJObs?.map((allJob) =>
          allJob?.email === user?.email ? (
            <MySingleJob key={allJob._id} allJob={allJob}></MySingleJob>
          ) : (
            ""
          )
        )}
      </table>
    </div>
  );
};

export default MyJob;
