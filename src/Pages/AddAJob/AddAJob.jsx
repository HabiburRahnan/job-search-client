import { useContext } from "react";
import Title from "../../Components/Title";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
// import axios from "axios";
// import DatePicker from "react-datepicker";

const AddAJob = () => {
  // const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);

  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const job_title = form.job_title.value;
    const displayName = user?.displayName;
    const email = user?.email;
    const job_type = form.job_type.value;
    const salary = form.salary.value;
    const postingDate = form.postingDate.value;
    const applicationDate = form.applicationDate.value;
    const photo = form.photo.value;
    const description = form.description.value;
    const applicationNumber = form.applicationNumber.value;

    const addNewJob = {
      job_title,
      displayName,
      description,
      email,
      job_type,
      salary,
      photo,
      postingDate,
      applicationDate,
      applicationNumber,
    };
    console.log(addNewJob);

    fetch(`https://job-search-server-site.vercel.app/addNewJob`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addNewJob),
    })
      .then((res) => res.json())

      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Jobs add successfully", "thank you!", "success");
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-0 md:p-24">
      <Helmet>
        <meta charset="utf-8" />
        <title>AddJob | Job Search</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
                name="job_title"
                placeholder="Job Title"
                className="input input-bordered w-full"
                required
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
                readOnly
                defaultValue={user?.displayName}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className=" md:flex mb-0 md:mb-8">
          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text">Job type</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="job_type"
                placeholder="Job type"
                required
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
                required
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
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="mb-8">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                placeholder="Description"
                required
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
                required
                className="input input-bordered"
              />
            </label>
          </div>

          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text">Application Deadline</span>
            </label>
            <label className="input-group">
              <input
                type="date"
                name="applicationDate"
                placeholder="date"
                required
                className="input input-bordered"
              />
            </label>
          </div>
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
          value="Add A New Job"
          className="btn btn-block text-white bg-blue-500 hover:bg-blue-500 my-10"
        />
      </form>
    </div>
  );
};

export default AddAJob;
