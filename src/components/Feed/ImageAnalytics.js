import { FaHeart, FaRegHeart, FaRegComment } from "react-icons/fa";
import api from "../../utils/api"
import {useState} from "react"

const ImageAnalytics = ({ analytics, imageId }) => {
  const [isLiked, setIsLiked] = useState(analytics.isLike)
  const [likeCount, setLikeCount] = useState(analytics.like)
  const [loading, setLoading] = useState(false)

  const toggleLike = async () => {
    if (loading) return
    setLoading(true)

    const prevLiked = isLiked; 
    setIsLiked(!prevLiked)
    setLikeCount((c) => (prevLiked ? c-1 : c+1))

    try{
      if (!prevLiked){
        await api.post(`/interactions/images/${imageId}/like`)
      }else{
        await api.delete(`/interactions/images/${imageId}/like`)
      }
    } catch(err){
      setIsLiked(prevLiked);
      setLikeCount((c) => (prevLiked ? c + 1 : c - 1));
      console.error("Like toggle failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-between gap-4 text-lg md:text-xl mt-3">
      <div className="flex items-center gap-4">
        <button
          className={`flex items-center gap-2 px-3 py-1 rounded-full transition-transform duration-150 ${isLiked ? "bg-red-50 shadow-sm" : "bg-gray-300 hover:bg-gray-50"}`}
          onClick={toggleLike}
          disabled={loading}
          aria-pressed={isLiked}
        >
          {isLiked ? (
            <FaHeart className="text-red-500"/>
          ) : (
            <FaRegHeart className="text-gray-500" />
          )}
          <span className="text-sm md:text-base text-gray-700">{likeCount}</span>
        </button>

        {/* <button className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-300 hover:bg-gray-50 transition-shadow shadow-sm">
          <FaRegComment className="text-gray-600"/>
          <span className="text-sm md:text-base text-gray-700">{analytics.comment}</span>
        </button> */}
      </div>

      <div className="text-xs text-gray-400 hidden md:block">
        {/* optional meta */}
      </div>
    </div>
  )
};

export default ImageAnalytics;
