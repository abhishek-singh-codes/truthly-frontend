import ImageHolder from "./ImageHolder";
import ImageAnalytics from "./ImageAnalytics";
import ImageInfo from "./ImageInfo";
import Caption from "./Caption";

const Post = ({ imageUrl, analytics, userName, caption, location }) => {
  return (
    <div className="p-2 border rounded-sm shadow-sm md:rounded-md md:shadow-md md:p-2">
      <ImageInfo userName={userName} location={location} />
      <ImageHolder imageUrl={imageUrl} />
      <ImageAnalytics analytics={analytics} />
      <Caption caption={caption} />
    </div>
  );
};

export default Post;
