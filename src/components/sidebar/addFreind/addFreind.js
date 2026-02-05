import { IoIosPersonAdd } from "react-icons/io";

const AddFreind = () => {
    return (
        <>
            <div className="flex w-full items-center gap-4 border border-blue-500 bg-blue-400 rounded-md p-2 hover:bg-blue-600 text-white cursor-pointer duration-300">
                <div>
                    {/* addFreind logo */}
                    <IoIosPersonAdd size={30} />
                </div>
                <div>
                    {/* addFreind text */}
                    <h2>Add Freind</h2>
                </div>
            </div>
        </>
    )
}

export default AddFreind;