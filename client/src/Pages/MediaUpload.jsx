import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './MediaUpload.css';

export const MediaUpload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    const token = localStorage.getItem('token');
    try {
      await axios.post('http://localhost:5000/api/media/upload', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      alert("Upload successful!");
      navigate('/dashboard');
    } catch (error) {
      console.error('Upload failed:', error);
      alert("Upload failed: " + error.response.data.message);
    }
  };

  return (
    <div className="media-upload-container">
      <div className="form-container">
        <h2 className="form-title">Upload Media</h2>
        <p className="form-subtitle">Select a file to upload</p>
        <input type="file" onChange={handleFileChange} className="file-input" />
        {/* {preview && <img src={preview} alt="Preview" className="preview-image" />} */}
        {preview && (
          // Check if the file is an image or video
          file.type.startsWith('image/') ? (
            <img src={preview} alt="Preview" className="preview-image" />
          ) : (
            <video src={preview} controls className="preview-image" />
          )
        )}
        <button onClick={handleUpload} className="submit-button">Upload</button>
      </div>
    </div>
  );
};

// export default MediaUpload;
