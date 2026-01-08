import { FaCamera } from "react-icons/fa";
import {useState} from "react"; 
import UploadModal from "./UploadModal";

const UploadImage = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button className="bg-blue-500 hover:bg-blue-700 text-white h-10 p-2 rounded-md transition duration-300 cursor-pointer w-full"
        onClick={() => setOpen(true)}
      >
        <div className="flex justify-center items-center gap-2">
          <h1 className="font-semibold">Upload Image</h1>
          <FaCamera size={20} color="#fff" />
        </div>
      </button>
      {open && <UploadModal onClose={() => setOpen(false)} />}
    </>
  );
};

export default UploadImage;
