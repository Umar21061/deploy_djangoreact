import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './RecentCase.css';

const RecentCase = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    // Fetch all documents and select the first category's first three projects
    fetch(`/api/global_project/?option=All`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch all documents');
        }
        return response.json();
      })
      .then(data => {
        if (data.documents.length > 0) {
          const firstCategory = data.documents[0].category;
          const firstCategoryDocs = data.documents.filter(doc => doc.category === firstCategory).slice(0, 3);
          setDocuments(firstCategoryDocs);
        }
      })
      .catch(error => {
        console.error('Error fetching documents:', error);
      });
  }, []);

  return (
    <div className="recent-case-container">
      <h2 className="recent-case-heading">Our Projects</h2>
      {documents.map((doc, index) => (
        <div key={index} className="recent-case-item">
          <Link to={`/projectdetails/${encodeURIComponent(doc.category)}/${encodeURIComponent(doc.name)}`}>
            <RecentCaseVideo
              videoUrl={doc.video_url}
              name={doc.name}
              description={doc.description}
            />
          </Link>
        </div>
      ))}
      <div className="centered-button-container">
        <Link to="/project">
          <button className="btn-primary">See More</button>
        </Link>
      </div>
    </div>
  );
};

const RecentCaseVideo = ({ videoUrl, name, description }) => {
  const videoRef = useRef(null);
  const [textVisible, setTextVisible] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
    setTextVisible(true);
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset video to start
    }
    setTextVisible(false);
  };

  return (
    <div
      className="recent-case-video-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        className="recent-case-video"
        ref={videoRef}
        muted
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {textVisible && (
        <div className="recent-case-text-overlay">
          <p className="recent-case-text">{name}</p>
          <p className="recent-case-text">{description}</p>
        </div>
      )}
    </div>
  );
};

export default RecentCase;
