import { Outlet } from "react-router-dom";
import Navbar from "../ShearPages/Navbar/Navbar";
import Footer from "../ShearPages/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="h-screen  lg:w-[1200px] mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
