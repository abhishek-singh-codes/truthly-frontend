import { MdPostAdd } from "react-icons/md";

const UploadPost = () => {
  return (
    <div className="flex items-center w-full gap-4 p-2 text-black duration-300 bg-gray-300 border rounded-md cursor-pointer hover:bg-black hover:text-white">
      <MdPostAdd size={30} />
      <h2 className="font-semibold">Upload Post</h2>
    </div>
  );
};


export default UploadPost;
