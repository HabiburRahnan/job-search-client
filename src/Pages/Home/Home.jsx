import { Helmet } from "react-helmet";
import Banner from "./Banner";
import HomePageTabs from "./HomePageTabs";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../ShearPages/Loading/Loading";

const Home = () => {
  const [data, setData] = useState([]);

  const { isLoading } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(`homeExtra.json`)
        .then((res) => res.json())
        .then((data) => setData(data)),
  });

  if (isLoading) return <Loading></Loading>;
  console.log(data);
  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <title>Home | Job Search</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Banner></Banner>
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

    </div>
  );
};

export default Home;
