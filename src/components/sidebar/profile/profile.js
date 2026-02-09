import { CgProfile } from "react-icons/cg";

const Profile = () => {
    return (
        <>
            <div className="flex items-center w-full gap-4 p-2 text-white duration-300 bg-blue-400 border border-blue-500 rounded-md cursor-pointer hover:bg-blue-600">
                <div>
                    {/* profile logo */}
                    <CgProfile size={30} />
                </div>
                <div>
                    {/* profile text */}
                    <h2>Profile</h2>
                </div>
            </div>
        </>
    )
}

export default Profile;