import { FaHeart, FaRegHeart, FaRegComment } from "react-icons/fa";
import api from "../../utils/api"
import {useState} from "react"

const ImageAnalytics = ({ analytics, imageId }) => {
  {console.log(analytics)}
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
    <div className="flex text-xl justify-evenly">
      <button
        className="flex items-center gap-1"
        onClick={toggleLike}
        disabled={loading}
      >
        {isLiked ? (
          <FaHeart className="text-red-500"/>
        ) : (
          <FaRegHeart className="text-gray-500" />
        )}
        <span>{likeCount}</span>
      </button>

      <button className="flex items-center gap-1">
        <FaRegComment/>
        <span>{analytics.comment}</span>
      </button>
    </div>
  )
};

export default ImageAnalytics;
