import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const UserDetails = () => {
  const IP = process.env.REACT_APP_BACKEND_IP;
  const token = Cookies.get("access_token");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const res = await fetch(`${IP}/api/v1/user`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      setUserData(data?.resultObj);
    };

    fetchUserData();
  }, [token, IP]);

  if (!userData) {
    return (
      <div className="p-4 text-center text-gray-500">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm p-6 mx-auto bg-white rounded-2xl">
      
      {/* Avatar + Name */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center justify-center text-xl font-semibold text-white bg-indigo-600 rounded-full w-14 h-14">
          {userData.firstName?.[0]}
          {userData.lastName?.[0]}
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            {userData.firstName} {userData.lastName}
          </h2>
          <p className="text-sm text-gray-500">{userData.userName}</p>
        </div>
      </div>

      {/* Location Info */}
      <div className="space-y-2 text-sm text-gray-700">
        <div className="flex justify-between">
          <span className="text-gray-500">City</span>
          <span className="font-medium">{userData.city}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">State</span>
          <span className="font-medium">{userData.state}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Country</span>
          <span className="font-medium">{userData.country}</span>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
