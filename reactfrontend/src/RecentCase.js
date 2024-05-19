import React, { useState, useEffect } from 'react';
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
      {documents.map((doc, index) => (
        <div key={index} className="recent-case-item">
          <Link to={`/projectdetails/${encodeURIComponent(doc.category)}/${encodeURIComponent(doc.name)}`}>
            <div className="recent-case-video-container">
              <video className="recent-case-video" controls autoPlay key={doc.video_url}>
                <source src={doc.video_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="recent-case-text-overlay">
                <p className="recent-case-text">{doc.name}</p>
                <p className="recent-case-text">{doc.description}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
      <div className="centered-button-container">
        <Link to="/somepage">
          <button className="btn-primary">See More</button>
        </Link>
      </div>
    </div>
  );
};

export default RecentCase;
