import { Helmet } from "react-helmet";
import Banner from "./Banner";
import HomePageTabs from "./HomePageTabs";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../ShearPages/Loading/Loading";
import { useEffect } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [about, setAbout] = useState([]);

  useEffect(() => {
    fetch("about.json")
      .then((res) => res.json())
      .then((data) => setAbout(data));
  }, []);
  // console.log(about);
  const { isLoading } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(`homeExtra.json`)
        .then((res) => res.json())
        .then((data) => setData(data)),
  });

  if (isLoading) return <Loading></Loading>;

  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <title>Home | Job Search</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Banner></Banner>
      <h1 className="text-xl md:text-4xl text-center font-bold text-orange-500 py-5">
        Job y category section
      </h1>
      <HomePageTabs></HomePageTabs>
      <div className="pb-5">
        <h1 className="text-xl md:text-4xl text-center font-bold text-orange-500 py-5">
          The Benefits of Using FlexJobs
        </h1>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center items-center py-2 md:py-5 gap-5 md:gap-10 ">
          {data?.map((item) => (
            <div
              key={item.id}
              className="card h-80 bg-base-100 shadow-xl border border-orange-500">
              <figure className="px-10 pt-10">
                <img src={item.image} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-blue-600 font-semibold">
                  {item.title}
                </h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pb-5">
        <h1 className="text-xl md:text-4xl text-center font-bold text-blue-500 py-5">
          What Our Customers are Saying About Us
        </h1>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center items-center py-2 md:py-5 gap-5 md:gap-10 ">
          {about?.map((item) => (
            <div
              key={item.id}
              className="card h-56 bg-base-100 shadow-xl border border-blue-500">
              <figure className="px-10 py-5 pt-10">
                <div className="avatar mr-2">
                  <div className="w-12 rounded-full">
                    <img src={item.image} />
                  </div>
                </div>
                <h2 className="card-title text-orange-500 font-semibold">
                  {item.name}
                  <span className="text-black font-extralight text-sm">
                    {item.company}
                  </span>
                </h2>
              </figure>
              <p className="px-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center  py-10">
        <div className="stats stats-vertical lg:stats-horizontal shadow ">
          <div className="stat">
            <div className="stat-figure text-orange-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div className="stat-title">Confirm Jobs</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">Jan 1st - Aug 1st</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-orange-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
              </svg>
            </div>
            <div className="stat-title">New Users</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-orange-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
              </svg>
            </div>
            <div className="stat-title">New Registers</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
