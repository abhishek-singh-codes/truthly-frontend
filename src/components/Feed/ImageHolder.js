const ImageHolder = ({ imageUrl }) => {
  return (
    <div className="flex justify-center w-full px-4">
      <div className="w-full max-w-3xl rounded-xl overflow-hidden bg-gradient-to-br from-white to-gray-50 shadow-lg border border-gray-100">
        {/* image container keeps natural aspect ratio, limits height for tall images */}
        <div className="flex items-center justify-center bg-black/5">
          <img
            src={imageUrl}
            alt="feed"
            className="w-full h-auto max-h-[70vh] object-contain transition-transform duration-300 hover:scale-[1.01]"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};


export default ImageHolder;

