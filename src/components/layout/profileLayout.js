import { useState } from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";

import UploadModal from "../uploadImage/UploadModal";
import { Outlet, useNavigate } from "react-router-dom";

const ProfileLayout = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

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

        {/* Profile */}
        <div className="flex-1 ml-0 sm:ml-60 mr-0 sm:mr-72">
          <Outlet />
        </div>

      </div>

      {/* MODAL AT TOP LEVEL */}
      {open && <UploadModal onClose={() => {
          setOpen(false)
          navigate("/")
        }}
      />}
    </div>
  );
};

export default ProfileLayout;
