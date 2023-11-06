import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";

import Swal from "sweetalert2";

const Login = () => {
  const { singIn, signInWithGoogle } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {})
      .catch(() => {});
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    singIn(email, password)
      .then(() => {
        navigate(location?.state ? location.state : "/");
        Swal.fire("success Login!", "thank you!", "success");
      })
      .catch(() => {
        Swal.fire(
          "please provide right email and password!",
          "thank you!",
          "error"
        );
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row ">
        <div className=" w-1/2 mr-12">
          <img
            src="https://i.ibb.co/Y8MgdKC/istockphoto-1287170933-1024x1024.jpg"
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-3xl text-center font-bold">Sign In</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn text-white font-bold bg-sky-600 hover:bg-sky-600  "
                type="submit"
                value="Sign In"
              />
            </div>
          </form>
          <div className="divider ">Or, Continue With</div>
          <div className=" flex justify-center ">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="btn btn-outline   flex justify-between items-center cursor-pointer w-2/3 hover:bg-sky-500  ">
              Google
              <FcGoogle className="w-8 h-8" />
            </button>
          </div>
          <p className="my-5 text-center">
            New to Job Search
            <Link className="ml-2 text-blue-600 font-bold" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
