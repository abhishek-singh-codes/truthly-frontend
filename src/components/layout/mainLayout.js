import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import Distance from "../DistanceRange/Distance";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="h-screen bg-gray-50">
      {/* NAVBAR (fixed top) */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* MAIN LAYOUT */}
      <div className="pt-16 flex">
        {/* LEFT SIDEBAR (fixed) */}
        <div className="hidden sm:block">
          <div className="fixed top-16 left-4 w-64 border border-blue-200 rounded-md shadow-md p-4 bg-white">
            <Sidebar />
          </div>
        </div>

        {/* CENTER FEED (scrollable) */}
        <div className="flex-1 px-4 ml-0 sm:ml-72 mr-0 sm:mr-72 h-[calc(100vh-4rem)]">
          <div className="border border-blue-200 rounded-md p-4 bg-white">
            <Outlet />
          </div>
        </div>

        {/* RIGHT PANEL (fixed) */}
        <div className="hidden sm:block">
          <div className="fixed top-16 right-4 w-64 border border-blue-200 rounded-md shadow-md p-4 bg-white">
            <Distance />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
