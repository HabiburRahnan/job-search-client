import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const user = "habiburrahmanofficial157@gmail.com";
  const NavLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/allJobs">All Jobs</Link>
      </li>
      <li>
        <Link to="/appliedJobs">Applied Jobs</Link>
      </li>
      <li>
        <Link to="/addJob">Add Job</Link>
      </li>
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
          JOB<span className=" text-blue-800">SEARCH</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <div className="dropdown dropdown-end ">
            <label tabIndex={0} className="cursor-pointer">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
              </div>
            </label>
            <div
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <NavLink
                to="/user"
                className="px-4 py-2 hover:bg-base-300 rounded-lg">
                Profile
              </NavLink>

              <div
                //   onClick={logout}
                className="cursor-pointer text-red-500 px-4 py-2 hover:bg-base-300 rounded-lg">
                Logout
              </div>
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
