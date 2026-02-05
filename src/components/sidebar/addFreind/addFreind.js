import { IoIosPersonAdd } from "react-icons/io";

const AddFreind = () => {
    return (
        <>
            <div className="flex items-center gap-4">
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