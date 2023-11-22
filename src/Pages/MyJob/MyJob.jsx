import { useContext, useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import MySingleJob from "./MySingleJob";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import axios from "axios";

const MyJob = () => {
  const { user } = useContext(AuthContext);
  const [myAllJObs, setMyAllJObs] = useState([]);

  const url = `https://job-search-server-site.vercel.app/addNewJob?email=${user?.email}`;

  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      // console.log(res.data);
      setMyAllJObs(res?.data);
    });

    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setMyAllJObs(data);
    //   });
  }, [url]);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://job-search-server-site.vercel.app/addNewJob/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your job has been deleted.", "success");

              const remaining = myAllJObs?.filter(
                (product) => product._id !== id
              );
              setMyAllJObs(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <Helmet>
        <meta charset="utf-8" />
        <title>MyJob | Job Search</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
            <MySingleJob
              key={allJob._id}
              allJob={allJob}
              handleDelete={handleDelete}></MySingleJob>
          ) : (
            ""
          )
        )}
      </table>
    </div>
  );
};

export default MyJob;
