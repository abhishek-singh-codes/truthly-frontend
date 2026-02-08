import { IoHome } from "react-icons/io5";

const Home = () => {
    return (
        <>
            <div className="flex w-full items-center gap-4 border  bg-gray-300 rounded-md p-2 hover:bg-black text-black hover:text-white cursor-pointer duration-300">
                <div>
                    {/* home logo */}
                    <IoHome size={30} />
                </div>
                <div>
                    {/* Home text */}
                    <h2 className="font-semibold">Home</h2>
                </div>
            </div>
        </>
    )
}

export default Home;