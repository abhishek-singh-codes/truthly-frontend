import { CgProfile } from "react-icons/cg";

const Profile = () => {
    return (
        <>
            <div className="flex items-center gap-4">
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