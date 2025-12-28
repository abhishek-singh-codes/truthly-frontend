const ImageHolder = ({ imageUrl }) => {
  return (
    <div className="">
      <img
        src={imageUrl}
        alt="feed"
        className="w-full rounded-xl md:h-[350px] h-[300px]"
        loading="lazy"
      />
    </div>
  );
};

export default ImageHolder;
