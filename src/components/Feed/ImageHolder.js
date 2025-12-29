const ImageHolder = ({ imageUrl }) => {
  return (
    <div className="flex justify-center w-full">
      <div className="flex items-center justify-center w-full max-w-sm border aspect-square rounded-xl">
        <img
          src={imageUrl}
          alt="feed"
          className="object-contain w-full h-full rounded"
          loading="lazy"
        />
      </div>
    </div>
  );
};


export default ImageHolder;

