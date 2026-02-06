import { MdPostAdd } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import UploadModal from "../../uploadImage/UploadModal";

const UploadPost = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="flex w-full items-center gap-4 border border-blue-500 bg-blue-400 rounded-md p-2 hover:bg-blue-600 text-white cursor-pointer duration-300"
      >
        <div>
          {/* UploadPost logo */}
          <MdPostAdd size={30} />
        </div>
        <div>
          {/* UploadPost text */}
          <h2 className="font-semibold">Upload Post</h2>
        </div>
      </div>
      {open && (
        <UploadModal
          onClose={() => {
            navigate("/");
            setOpen(false);
        }}
        />
      )}
    </>
  );
};

export default UploadPost;
