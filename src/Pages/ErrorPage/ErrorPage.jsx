import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="">
      <h1 className="text-4xl "> Unexpected Application Error!</h1>
      <img
        className="h-full w-1/2  "
        src="https://i.ibb.co/CzV6c0X/istockphoto-171302206-1024x1024.jpg"
        alt=""
      />
      <Link className="text-3xl text-blue-500 font-semibold" to="/">
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
