import { useState } from "react";
import api from "../../utils/api";

const UploadModal = ({ onClose }) => {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = async () => {
    if (!file) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("fileHeader", file);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("country", country);
    formData.append("description", description);

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
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white w-[90%] max-w-md rounded-lg p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg">Upload Image</h2>
          <button onClick={onClose} className="text-xl">✕</button>
        </div>

        {/* File picker */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
          className="mb-3 w-full"
        />

        {/* Text fields */}
        <input
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border p-2 mb-2 w-full rounded"
        />
        <input
          placeholder="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="border p-2 mb-2 w-full rounded"
        />
        <input
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="border p-2 mb-2 w-full rounded"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 mb-3 w-full rounded"
        />

        {/* Actions */}
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 border rounded">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
