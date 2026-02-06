import { useState } from "react";
import api from "../../utils/api";

const UploadModal = ({ onClose }) => {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");

  // Hidden geo data
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [locationFetched, setLocationFetched] = useState(false);

  const useCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLatitude(pos.coords.latitude);
        setLongitude(pos.coords.longitude);
        setLocationFetched(true);
      },
      () => {
        alert("Location permission denied");
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
      },
    );
  };

  const handleSubmit = async () => {
    if (!file) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("fileHeader", file);
    formData.append("description", description);

    // Silent geo data
    if (latitude && longitude) {
      formData.append("latitude", latitude.toString());
      formData.append("longitude", longitude.toString());
    }

    try {
      await api.post("/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      onClose();
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-sm">
      <div className="bg-white w-[90%] max-w-md rounded-xl p-6 shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-bold text-xl text-gray-800">Upload Image</h2>
          <button
            onClick={() => {
              console.log("Cancel clicked");
              onClose();
            }}
            className="text-2xl text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center transition cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* File */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Select Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-3"
          />
          {file && <p className="text-xs text-green-600 mt-1">✓ {file.name}</p>}
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Description
          </label>
          <textarea
            placeholder="Add description for your image..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border-2 border-gray-300 p-3 mb-3 w-full rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition resize-none"
            rows="3"
          />
        </div>

        {/* Location action */}
        <div className="mb-6 w-full">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Location
          </label>
          <button
            onClick={useCurrentLocation}
            className={`w-full px-4 py-3 rounded-lg font-semibold transition duration-300 flex items-center justify-center gap-2 ${
              locationFetched
                ? "bg-green-600 text-white shadow-md"
                : "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg"
            }`}
          >
            📍 {locationFetched ? "✓ Location Added" : "Use Current Location"}
          </button>
          {locationFetched && (
            <p className="text-xs text-green-600 mt-2 text-center">
              📌 Latitude: {latitude?.toFixed(4)}, Longitude:{" "}
              {longitude?.toFixed(4)}
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-green-700 shadow-lg transition transform hover:scale-105"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
