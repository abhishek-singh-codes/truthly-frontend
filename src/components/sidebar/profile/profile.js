import { CgProfile } from "react-icons/cg";

const Profile = () => {
    return (
        <>
            <div className="flex w-full items-center gap-4 border border-blue-500 bg-blue-400 rounded-md p-2 hover:bg-blue-600 text-white cursor-pointer duration-300">
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