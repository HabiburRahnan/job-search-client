import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <title>Profile | Job Search</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1 className="text-xl text-center font-semibold">
        Hello,{" "}
        <span className="text-blue-500 font-bold">{user?.displayName} </span>
        Welcome Our, Job-Search Web Site
      </h1>
      <div className="flex-row-reverse md:flex justify-center items-center md:gap-10 bg-base-200 shadow-xl py-10">
        <div>
          <h1 className=" md:text-2xl text-center font-bold">
            Your Email: {user?.email}
          </h1>
          <div className="mt-5 border border-orange-500 rounded-lg  py-5">
            <h1 className="text-center text-2xl  pb-5 font-semibold">
              Contact Us
            </h1>
            <p className="text-center text-xl">Email: Job-Search@gmail.com</p>
            <p className="text-center text-xl">Facebook: Job-Search.com</p>
          </div>
        </div>
        <img
          className="h-96 w-96 rounded-lg mt-5"
          src={user?.photoURL}
          alt=""
        />
      </div>

      {/* <div className="my-14 ">
        <table className="table md:w-1/2 border ">
          <thead className="text-center text-2xl">
            <tr className="text-center text-light-blue-300">
              Personal contact
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Phone Number:</td>
              <td>01308-102789</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>HabiburrahmanOfficial@gmail.com</td>
            </tr>
            <tr>
              <td>Location:</td>
              <td>Khoddo Thampat, Nagor Mirjong, Taghat, Rangpur</td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default Profile;
