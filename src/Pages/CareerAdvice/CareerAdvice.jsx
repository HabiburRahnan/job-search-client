import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const CareerAdvice = () => {
  const [careers, setCareers] = useState();

  useEffect(() => {
    fetch("Career.json")
      .then((res) => res.json())
      .then((data) => setCareers(data));
  }, []);

  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <title>CareerAdvice | Job Search</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1 className="text-xl md:text-4xl text-center font-bold text-blue-500 py-5">
        Write an Effective Resume
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-12 ">
        <div className=" md:col-span-8  text-center items-center py-2 md:py-5 gap-5 md:gap-10 ">
          {careers?.map((item) => (
            <div key={item.id} className="hero   bg-base-200">
              <div className="hero-content flex-col lg:flex-row">
                <img
                  src={item.image}
                  className="max-w-sm rounded-lg shadow-lg shadow-orange-500"
                />
                <div>
                  <p className=" text-white flex justify-start bg-orange-500  w-[73px] rounded-sm items-center">
                    RESUMES
                  </p>
                  <h1 className="text-xl font-bold text-orange-500">
                    {item.header}
                  </h1>
                  <p className="py-3">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="border md:col-span-4  gap-5 py-5">
          <div className="card  bg-base-100 shadow-xl image-full">
            <figure>
              <img
                className="w-full"
                src="https://i.ibb.co/yRgLnDD/download-41.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <p className="text-center text-2xl font-bold text-orange-500">
                Get great content like this and the hottest jobs delivered to
                your inbox.
              </p>
              <Link to="/login" className="btn text-blue-500">
                Login
              </Link>

              <div className="card-actions justify-center">
                <h2 className="card-title text-xl font-bold text-orange-500">
                  Job Search
                </h2>
              </div>
            </div>
          </div>
          <div className="card  bg-base-100 shadow-xl image-full py-5">
            <figure>
              <img
                className="w-full"
                src="https://i.ibb.co/RBN9Qr8/images-23.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <p className="text-center text-3xl font-bold text-orange-500">
                Explore jobs at Amazon, Walmart, Microsoft, Google, and Uber &
                more!
              </p>
              <Link to="/viewAllJobs" className="btn text-blue-500">
                Click Our Jobs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerAdvice;
