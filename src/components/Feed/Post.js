import ImageHolder from "./ImageHolder";
import ImageAnalytics from "./ImageAnalytics";
import ImageInfo from "./ImageInfo";
import Caption from "./Caption";

const Post = ({ imageUrl, analytics, userName, caption, location, imageId }) => {
  return (
    <div className="flex flex-col w-full h-full p-4 border border-blue-200 roundled-sm md:rounded-md shadow-lg bg-white">
      <ImageInfo userName={userName} location={location} />
      <ImageHolder imageUrl={imageUrl} />
      <ImageAnalytics analytics={analytics} imageId={imageId} />
      <Caption caption={caption} />
    </div>
  );
};

export default Post;
