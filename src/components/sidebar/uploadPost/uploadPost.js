import { MdPostAdd } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import UploadModal from "../../uploadImage/UploadModal";

const UploadPost = () => {
  return (
    <div className="flex w-full items-center gap-4 border bg-white rounded-md p-2 hover:bg-black text-black hover:text-white cursor-pointer duration-300">
      <MdPostAdd size={30} />
      <h2 className="font-semibold">Upload Post</h2>
    </div>
  );
};


export default UploadPost;
