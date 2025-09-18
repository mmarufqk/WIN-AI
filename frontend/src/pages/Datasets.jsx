import React, { useState, useEffect } from "react";
import api from "../api";

const Dataset = () => {
  const [datasets, setDatasets] = useState([]);
  const [file, setFile] = useState(null);

  // Fetch dataset list
  useEffect(() => {
    fetchDatasets();
  }, []);

  const fetchDatasets = async () => {
    try {
      const res = await api.get("api/datasets/"); 
      setDatasets(res.data);
    } catch (err) {
      console.error("Error fetching datasets:", err);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      await api.post("api/datasets/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setFile(null);
      fetchDatasets();
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📊 My Datasets</h1>

      {/* Upload form */}
      <form onSubmit={handleUpload} className="mb-6">
        <input
          type="file"
          accept=".csv"
          onChange={(e) => setFile(e.target.files[0])}
          className="border p-2 mr-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Upload
        </button>
      </form>

      {/* Dataset list */}
      <ul>
        {datasets.map((ds) => (
          <li key={ds.id} className="border-b py-2">
            <span className="font-semibold">{ds.file}</span>
            <br />
            <small className="text-gray-500">
              Uploaded: {new Date(ds.uploaded_at).toLocaleString()}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dataset;
