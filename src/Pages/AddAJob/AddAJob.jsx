import { useContext, useState } from "react";
import Title from "../../Components/Title";
import { AuthContext } from "../../Provider/AuthProvider";
import DatePicker from "react-datepicker";
import axios from "axios";

const AddAJob = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);

  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const jobTitle = form.jobTitle.value;
    const displayName = user?.displayName;
    const email = user?.email;
    const category = form.category.value;
    const salary = form.salary.value;
    // const postingDate = form.postingDate.value;
    // const applicationDate = form.applicationDate.value;
    const photo = form.photo.value;
    const applicationNumber = form.applicationNumber.value;

    const addNewJob = {
      jobTitle,
      displayName,
      email,
      category,
      salary,
      photo,
      // postingDate,
      // applicationDate,
      applicationNumber,
    };
    // console.log(addNewJob);

    axios
      .post("http://localhost:5000/addNewJobs", addNewJob)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    // fetch(`http://localhost:5000/addNewJobs`, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(addNewJob),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  };

  return (
    <div className="bg-[#F4F3F0] p-0 md:p-24">
      <Title>Add a New Job</Title>
      <form onSubmit={handleAddJob} className="mt-10">
        <div className=" md:flex mb-0 md:mb-8">
          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text">Job Title</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-full md:w-1/2 ml-0 md:ml-4">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <label className="input-group">
              <input
                name="userName"
                type="text"
                defaultValue={user?.displayName}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className=" md:flex mb-0 md:mb-8">
          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text">Job Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                placeholder="Job Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-full md:w-1/2 ml-0 md:ml-4">
            <label className="label">
              <span className="label-text">Salary Range</span>
            </label>
            <label className="input-group">
              <input
                name="salary"
                type="text"
                placeholder="Salary Range"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="mb-8">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="photo url"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  items-center mb-0 md:mb-8">
          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text">Job Posting Date</span>
            </label>
            <label className="input-group">
              <input
                type="date"
                name="postingDate"
                placeholder="date"
                className="input input-bordered"
              />
            </label>
          </div>

          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          {/* <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text">Application Deadline</span>
            </label>
            <label className="input-group">
              <input
                type="date"
                name="applicationDate"
                placeholder="date"
                className="input input-bordered"
              />
            </label>
          </div> */}
          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text">Job Application Number</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="applicationNumber"
                placeholder="Job Application Number"
                className="input input-bordered"
              />
            </label>
          </div>
        </div>

        <input
          type="submit"
          value="Add Product"
          className="btn btn-block text-white bg-blue-500 hover:bg-blue-500 my-10"
        />
      </form>
    </div>
  );
};

export default AddAJob;
