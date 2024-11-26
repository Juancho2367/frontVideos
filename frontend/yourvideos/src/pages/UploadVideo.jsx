import React, { useState } from "react";
import API from "../api/axios";
import "../Style/UploadVideo.css"; 

const UploadVideo = () => {
  const [title, setTitle] = useState("");
  const [videoFile, setVideoFile] = useState(null);

  const handleFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !videoFile) {
      alert("Por favor, completa todos los campos");
      return;
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("video", videoFile);

    try {
      const response = await API.post("/videos", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Video subido exitosamente");
      setTitle("");
      setVideoFile(null);
    } catch (err) {
      console.error(err);
      alert("Error al subir el video");
    }
  };

    return (
        <div className="upload-container">
          <h2 style={{ textAlign: "center" }}>Subir Video</h2>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <label htmlFor="title">Título del video:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Introduce un título"
              required
              style={{
                padding: "0.6rem",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "1rem",
              }}
            />
      
            <label htmlFor="video">Archivo del video:</label>
            <input
              type="file"
              id="video"
              accept="video/*"
              onChange={handleFileChange}
              required
              style={{
                padding: "0.6rem",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "1rem",
              }}
            />
      
            <button
              type="submit"
              style={{
                backgroundColor: "#4caf50",
                color: "white",
                border: "none",
                padding: "0.8rem",
                fontSize: "1rem",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s, transform 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#45a049")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#4caf50")}
            >
              Subir Video
            </button>
          </form>
        </div>
      );
};

export default UploadVideo;
