import { Outlet } from "react-router-dom";
import Breadcrumb from "../components/breadcrumb";
import "../App.css"

function Home() {
  return (
    <div className="w-screen h-screen bg-gray-200 background">
      <div className="flex flex-col items-center gap-8 ">
        <h1 className=" text-4xl text-[#2E4053 ] mt-6">
          My Breadcrumb Component 🍞
        </h1>
        <Breadcrumb />
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
