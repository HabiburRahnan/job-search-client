import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

import Swal from "sweetalert2";

const Login = () => {
  const { singIn, signInWithGoogle } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {})
      .catch((err) => {});
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    singIn(email, password)
      .then(() => {
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
                className="btn btn-primary"
                type="submit"
                value="Sign In"
              />
            </div>
          </form>
          <p className="mb-5 text-white">
            <button onClick={handleGoogleSignIn} className="btn btn-primary">
              Google
            </button>
          </p>
          <p className="my-5 text-center">
            New to Job Search
            <Link className="text-orange-600 font-bold" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
