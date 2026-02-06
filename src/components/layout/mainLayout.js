import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import Distance from "../DistanceRange/Distance";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="">
      {/* NAVBAR (fixed top) */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* MAIN LAYOUT */}
      <div className="pt-16 flex">
        {/* LEFT SIDEBAR (fixed) */}
        <div className="hidden sm:block">
          <div className="fixed top-16 left-4 w-auto border rounded-md shadow-md p-4">
            <Sidebar />
          </div>
        </div>

        {/* CENTER FEED (scrollable) */}
        <div className="flex-1  ml-0 sm:ml-60 mr-0 sm:mr-72 h-[calc(100vh-4rem)]">
          <div className="border rounded-md p-4">
            <Outlet />
          </div>
        </div>

        {/* RIGHT PANEL (fixed) */}
        <div className="hidden sm:block">
          <div className="fixed top-16 right-4 w-64 border  rounded-md shadow-md p-4">
            <Distance />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
