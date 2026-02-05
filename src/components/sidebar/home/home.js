import { IoHome } from "react-icons/io5";

const Home = () => {
    return (
        <>
            <div className="flex items-center gap-4">
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