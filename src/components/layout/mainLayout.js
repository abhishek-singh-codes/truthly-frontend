import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import Distance from "../DistanceRange/Distance";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      
      {/* Navbar (fixed height) */}
      <Navbar />

      {/* Main area below navbar */}
      <div className="flex flex-1 overflow-hidden gap-4 pt-4">

        {/* LEFT SIDEBAR */}
        <div className="hidden sm:block w-64">
          <div className="sticky border border-blue-200 rounded-md shadow-md p-4">
            <Sidebar />
          </div>
        </div>

        {/* MIDDLE SCROLLABLE CONTENT */}
        <div className="flex-1 overflow-y-auto border border-blue-200 rounded-md p-4">
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
