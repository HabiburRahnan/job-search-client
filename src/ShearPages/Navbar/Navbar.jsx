import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const name = user?.displayName;

  const handleSingOut = () => {
    logOut().then().catch();
  };

  const NavLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/viewAllJobs">All Jobs</Link>
      </li>
      <>
        {user?.email ? (
          <>
            <li>
              <Link to="/appliedJobs">Applied Jobs</Link>
            </li>
            <li>
              <Link to="/addJob">Add Job</Link>
            </li>
            <li>
              <Link to="/myJob">My job</Link>
            </li>
          </>
        ) : (
          ""
        )}
      </>

      <li>
        <Link to="/blog">Blogs</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {NavLinks}
          </ul>
        </div>
        <Link
          to="/"
          className=" btn  items-center normal-case text-xl font-extrabold">
          JOB<span className=" text-[#3878E8]">SEARCH</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <div className={`dropdown dropdown-end group-hover:${name}`}>
            <label tabIndex={0} className="cursor-pointer">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img
                    className={`rounded-full w-12 `}
                    src={user?.photoURL}
                    alt=""
                  />
                </div>
              </div>
            </label>
            <div
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <NavLink
                to="/profile"
                className="px-4 py-2 hover:bg-base-300 rounded-lg">
                Profile
              </NavLink>

              <button onClick={handleSingOut} className="btn">
                Log Out
              </button>
            </div>
          </div>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "btn  btn-sm" : "btn btn-ghost btn-sm"
            }>
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
