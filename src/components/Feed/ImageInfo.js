const ImageInfo = ({userName, location}) => {
    return (
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex-shrink-0 bg-gradient-to-br from-indigo-500 to-pink-500 text-white font-semibold flex items-center justify-center shadow-md">
                {userName?.[0]?.toUpperCase() || "U"}
            </div>
            <div className="min-w-0">
                <div>
                    <h1 className="font-semibold text-sm md:text-base text-white truncate">{ userName }</h1>
                </div>
                <div>
                    <h6 className="text-xs md:text-sm text-white truncate">
                        <span className="mr-1">📍</span>
                        {location?.city || "Unknown"}, { location?.state || "-" }
                    </h6>
                </div>
            </div>
        </div>
    );
}

export default ImageInfo