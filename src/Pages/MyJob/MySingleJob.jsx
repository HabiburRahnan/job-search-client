/* eslint-disable react/prop-types */
const MySingleJob = ({ allJob }) => {
  const { job_title, photo } = allJob;
  console.log(allJob);
  return (
    <tbody>
      <tr>
        <th>
          <button
            // onClick={() => handleDelete(_id)}
            className="btn btn-sm btn-circle btn-outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
        <td className="hidden md:block">
          <div className="avatar ">
            <div className="rounded w-24 h-24">
              <img src={photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </td>

        <td className="">{job_title}</td>

        <th>
          <button
            //   onClick={() => handleConfirm(_id)}
            className="btn btn-ghost ">
            Update
          </button>
        </th>
      </tr>
    </tbody>
  );
};

export default MySingleJob;
