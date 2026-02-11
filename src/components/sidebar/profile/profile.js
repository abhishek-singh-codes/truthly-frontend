import { CgProfile } from "react-icons/cg";
const Profile = () => {
    return (
        <>
            <div className="flex w-full items-center gap-4 border  bg-gray-300 rounded-md p-2 hover:bg-black text-black hover:text-white cursor-pointer duration-300">
                <div>
                    {/* home logo */}
                    <CgProfile size={30} />
                </div>
                <div>
                    {/* Home text */}
                    <h2 className="font-semibold">Profile</h2>
                </div>
            </div>
        </>
    )
}

export default Profile;