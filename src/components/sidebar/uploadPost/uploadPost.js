import { MdPostAdd } from "react-icons/md";

const UploadPost = () => {
    return (
        <>
            <div className="flex w-full items-center gap-4 border border-blue-500 bg-blue-400 rounded-md p-2 hover:bg-blue-600 text-white cursor-pointer duration-300">
                <div>
                    {/* UploadPost logo */}
                    <MdPostAdd size={30}/>
                </div>
                <div>
                    {/* UploadPost text */}
                    <h2 className="font-semibold">Upload Post</h2>
                </div>
            </div>
        </>
    )
}

export default UploadPost;