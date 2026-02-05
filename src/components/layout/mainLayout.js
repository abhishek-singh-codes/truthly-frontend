import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import Distance from "../DistanceRange/Distance";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <div className="flex w-full gap-4 px-4 pt-4">

        {/* LEFT SIDEBAR */}
        <div className="hidden sm:block w-auto">
          <div className="sticky border border-blue-200 rounded-md shadow-md p-4 w-full">
            <Sidebar />
          </div>
        </div>

        {/* MIDDLE CONTENT (WINDOW SCROLLS) */}
        <div className="flex-1 border border-blue-200 rounded-md p-4">
          <Outlet />
        </div>

        {/* RIGHT PANEL */}
        <div className="hidden sm:block w-64">
          <div className="sticky border border-blue-200 rounded-md shadow-md p-4">
            <Distance />
          </div>
        </div>

      </div>
    </div>
  );
};

export default MainLayout;
