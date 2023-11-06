import { Helmet } from "react-helmet";
import Banner from "./Banner";
import HomePageTabs from "./HomePageTabs";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <title>Home | Job Search</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Banner></Banner>
      <HomePageTabs></HomePageTabs>
    </div>
  );
};

export default Home;
