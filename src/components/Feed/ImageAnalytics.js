import { FaHeart, FaRegComment } from "react-icons/fa";

const ImageAnalytics = ({ analytics }) => {
  return (
    <div className="flex text-xl justify-evenly">
      <button className="flex items-center gap-1">
        <FaHeart />
        <span>{analytics.like}</span>
      </button>

      <button className="flex items-center gap-1">
        <FaRegComment />
        <span>{analytics.comment}</span>
      </button>
    </div>
  );
};

export default ImageAnalytics;
