import { useState } from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import Distance from "../DistanceRange/Distance";
import UploadModal from "../uploadImage/UploadModal";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* NAVBAR */}
      <div className="fixed top-0 left-0 w-full z-40">
        <Navbar />
      </div>

      {/* MAIN LAYOUT */}
      <div className="pt-16 flex">
        {/* SIDEBAR */}
        <div className="hidden sm:block">
          <div className="fixed top-16 left-4 w-auto z-30 border border-gray-800 p-4 rounded-md">
            <Sidebar onOpenModal={() => setOpen(true)} />
          </div>
        </div>

        {/* FEED */}
        <div className="flex-1 ml-0 sm:ml-60 mr-0 sm:mr-72">
          <Outlet />
        </div>

        {/* RIGHT PANEL */}
        <div className="hidden sm:block">
          <div className="fixed top-16 right-4 w-64 z-30 border p-4 rounded-md border-gray-800">
            <Distance />
          </div>
        </div>
      </div>

      {/* MODAL AT TOP LEVEL */}
      {open && <UploadModal onClose={() => setOpen(false)} />}
    </div>
  );
};

export default MainLayout;
