import { CiCircleMore } from "react-icons/ci";

const More = () => {
    return (
        <>
            <div className="flex w-full items-center gap-4 border border-blue-500 bg-blue-400 rounded-md p-2 hover:bg-blue-600 text-white cursor-pointer duration-300">
                <div>
                    {/* more logo */}
                    <CiCircleMore size={30} />
                </div>
                <div>
                    {/* more text */}
                    <h2>More</h2>
                </div>
            </div>
        </>
    )
}

export default More;