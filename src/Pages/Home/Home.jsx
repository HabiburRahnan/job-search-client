import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="tabs tabs-boxed">
        <a className="tab">Tab 1</a>
        <a className="tab ">Tab 2</a>
        <a className="tab">Tab 3</a>
      </div>
    </div>
  );
};

export default Home;
