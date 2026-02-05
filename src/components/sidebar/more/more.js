import { CiCircleMore } from "react-icons/ci";

const More = () => {
    return (
        <>
            <div className="flex items-center gap-4">
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