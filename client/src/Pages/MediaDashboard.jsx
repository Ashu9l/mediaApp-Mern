import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMedia } from '../features/media/mediaSlice';
import axios from 'axios';
import './MediaDashboard.css'; // Ensure to create this CSS file

const MediaDashboard = () => {
  const dispatch = useDispatch();
  const mediaList = useSelector((state) => state.media.mediaList);

  useEffect(() => {
    const fetchMedia = async () => {
      const token = localStorage.getItem('token'); // Retrieve the token
      try {
        const response = await axios.get('http://localhost:5000/api/media/', {
          headers: {
            'Authorization': `Bearer ${token}`, // Include the token in the headers
          },
        });
        dispatch(setMedia(response.data));
      } catch (error) {
        console.error('Failed to fetch media:', error);
        // Handle unauthorized access or other errors
        if (error.response && error.response.status === 401) {
          alert("Unauthorized access. Please log in again.");
          // Optionally, redirect to login or handle logout
        }
      }
    };
    fetchMedia();
  }, [dispatch]);

  return (
    <div className="media-dashboard-container">
      <div className="media-grid">
        {mediaList.map((media) => (
          <div key={media._id} className="media-item">
            {media.fileType === 'image' ? (
              <img src={`http://localhost:5000${media.fileUrl}`} alt={media.filename} className="media-image" />
            ) : (
              <video controls className="media-video">
                <source src={`http://localhost:5000${media.fileUrl}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <h3 className="media-filename">{media.filename}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaDashboard;
  