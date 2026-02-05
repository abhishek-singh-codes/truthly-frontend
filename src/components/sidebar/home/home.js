import { IoHome } from "react-icons/io5";

const Home = () => {
    return (
        <>
            <div className="flex w-full items-center gap-4 border border-blue-500 bg-blue-400 rounded-md p-2 hover:bg-blue-600 text-white cursor-pointer duration-300">
                <div>
                    {/* home logo */}
                    <IoHome size={30} />
                </div>
                <div>
                    {/* Home text */}
                    <h2>Home</h2>
                </div>
            </div>
        </>
    )
}

export default Home;