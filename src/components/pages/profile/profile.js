import { useState, useEffect } from "react";
import { IoMdPerson } from "react-icons/io";
import api from "../../../utils/api";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [bio, setBio] = useState("");
  const [userName, setUserName] = useState("");
  const [images, setImages] = useState([]);
  const [friends, setFriends] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await api("/profile");
        const data = res.data;

        setBio(data?.resultObj?.bio || "");
        setUserName(data?.resultObj?.userName || "");
        setImages(data?.resultObj?.images || []);
        setFriends(data?.friends?.friends || 0);
      } catch (err) {
        console.error("Profile fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-white p-6">Loading profile...</div>;
  }

  return (
    <div className="min-h-screen text-white px-4 sm:px-8 py-8 flex-1">
      {/* CENTERED CONTENT WRAPPER */}
      <div className="">

        {/* PROFILE HEADER */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-gray-800 pb-6">

          {/* Avatar */}
          <div className="w-24 h-24 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center">
            <IoMdPerson size={50} />
          </div>

          {/* User Info */}
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-semibold">
              {userName || "User"}
            </h2>

            {/* Stats */}
            <div className="flex gap-6 justify-center sm:justify-start mt-3 text-sm text-gray-300">
              <div>
                <span className="font-semibold text-white">
                  {images.length}
                </span>{" "}
                posts
              </div>
              <div>
                <span className="font-semibold text-white">
                  {friends}
                </span>{" "}
                friends
              </div>
            </div>

            {/* Bio */}
            <p className="mt-3 text-gray-400 max-w-md">
              {bio || "No bio added"}
            </p>
          </div>
        </div>

        {/* POSTS SECTION */}
        <div className="mt-6">
          <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-4">
            Posts
          </h3>

          {/* Image Grid */}
          <div className="grid gap-1 grid-cols-[repeat(auto-fill,minmax(140px,1fr))]">
            {images.length === 0 ? (
              <p className="text-gray-500 col-span-full">
                No images yet
              </p>
            ) : (
              images.map((imageUrl, index) => (
                <div
                  key={index}
                  className="aspect-square w-full overflow-hidden border border-gray-800"
                >
                  <img
                    src={imageUrl}
                    alt="feed"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
