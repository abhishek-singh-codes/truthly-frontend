import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import Distance from "../DistanceRange/Distance";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="h-screen overflow-auto">
      <Navbar />

      <div className="flex w-full gap-4 p-4">

        {/* LEFT SIDEBAR */}
        <div className="sticky top-20 hidden w-auto border border-blue-200 rounded-md shadow-md sm:flex p-4">
          <Sidebar />
        </div>

        {/* MIDDLE CONTENT (CHANGES BY ROUTE) */}
        <div className="flex-1 p-4 border border-blue-200 rounded-md overflow-y-auto">
          <Outlet />
        </div>

        {/* RIGHT PANEL (ALWAYS VISIBLE) */}
        <div className="sticky top-20 hidden w-auto border border-blue-200 rounded-md shadow-md sm:flex p-4">
          <Distance />
        </div>

      </div>
    </div>
  );
};

export default MainLayout;
