import { CgProfile } from "react-icons/cg";
import { useEffect, useState } from "react";
import api from "../../../utils/api";

const Profile = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                setLoading(true);
                const res = await api.get("/profile");
                setData(res.data.resultObj);
            } catch (err) {
                console.error("Profile fetch error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    if (loading) {
        return <p className="mt-10 text-center text-white">Loading...</p>;
    }

    if (!data) return null;

    return (
        <div className="w-full max-w-4xl mx-auto text-white">
            {/* Top Profile Section */}
            <div className="flex items-center gap-6 p-6 border-b border-gray-700">
                {/* Avatar */}
                <div className="flex items-center justify-center w-20 h-20 bg-blue-500 rounded-full">
                    <CgProfile size={50} />
                </div>

                {/* User Info */}
                <div>
                    <h1 className="text-2xl font-semibold">
                        {data.userName}
                    </h1>
                    <p className="mt-1 text-gray-400">
                        {data.bio || "No bio added"}
                    </p>

                    {/* Stats */}
                    <div className="flex gap-6 mt-3 text-sm">
                        <div>
                            <span className="font-bold">
                                {data.images.length}
                            </span>{" "}
                            posts
                        </div>
                        <div>
                            <span className="font-bold">
                                {data.neighbours}
                            </span>{" "}
                            neighbours
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-2 mt-4 md:grid-cols-3">
                {data.images.map((img, index) => (
                    <div
                        key={index}
                        className="relative w-full overflow-hidden aspect-square"
                    >
                        <img
                            src={img}
                            alt="user post"
                            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profile;
