import { MdPostAdd } from "react-icons/md";

const UploadPost = () => {
    return (
        <>
            <div className="flex items-center gap-4">
                <div>
                    {/* UploadPost logo */}
                    <MdPostAdd size={30} />
                </div>
                <div>
                    {/* UploadPost text */}
                    <h2>Upload Post</h2>
                </div>
            </div>
        </>
    )
}

export default UploadPost;