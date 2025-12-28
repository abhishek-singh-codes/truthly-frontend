const ImageInfo = ({userName, location}) => {
    return (
        <div>
            <div>
                <h1 className="font-semibold text-[12px] md:text-[15px] ">{ userName }</h1>
            </div>
            <div>
                <h6 className="text-[10px] md:text-[12px]">{location.city}, { location.state }</h6>
            </div>
        </div>
    );
}

export default ImageInfo