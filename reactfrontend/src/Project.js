import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

const Project = () => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('All');
  const [names, setNames] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const videoRefs = useRef([]);

  useEffect(() => {
    fetchOptions();
    fetchAllDocuments();
  }, []);

  const fetchOptions = async () => {
    try {
      const response = await fetch('/api/global_project/');
      if (!response.ok) throw new Error('Failed to fetch options');
      const data = await response.json();
      setOptions(data.options);
    } catch (error) {
      console.error('Error fetching options:', error);
    }
  };

  const fetchAllDocuments = async () => {
    try {
      const response = await fetch('/api/global_project/?option=All');
      if (!response.ok) throw new Error('Failed to fetch all documents');
      const data = await response.json();
      setDocuments(data.documents);
    } catch (error) {
      console.error('Error fetching all documents:', error);
    }
  };

  const handleClick = async (option) => {
    setSelectedOption(option);
    if (option === 'All') {
      fetchAllDocuments();
      setNames([]);
    } else {
      try {
        const response = await fetch(`/api/global_project/?option=${encodeURIComponent(option)}`);
        if (!response.ok) throw new Error('Failed to fetch names and documents');
        const data = await response.json();
        setNames(data.names);
        const docArrays = await Promise.all(
          data.names.map(name => fetch(`/api/global_project/?category=${encodeURIComponent(name)}`).then(res => res.json()).then(data => data.documents))
        );
        setDocuments(docArrays.flat());
      } catch (error) {
        console.error('Error fetching names and documents:', error);
      }
    }
  };

  const handleNameClick = async (category) => {
    try {
      const response = await fetch(`/api/global_project/?category=${encodeURIComponent(category)}`);
      if (!response.ok) throw new Error('Failed to fetch documents');
      const data = await response.json();
      setDocuments(data.documents);
    } catch (error) {
      console.error('Error fetching documents:', error);
    }
  };

  const handleVideoClick = (name, category) => {
    setSelectedDocument({ name, category });
  };

  const handleMouseEnter = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].play();
    }
  };

  const handleMouseLeave = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
      videoRefs.current[index].currentTime = 0; // Reset video to start
    }
  };

  return (
    <div className="project-container">

    
    <div  className='heading display-6 fw lh-1 mb-5 slice-left-to-right' style={{ marginBottom: '30px',marginTop: '50px' }}>We Craft cutting-edge solutions powered by AI, driving digital Transformation and Innovation for businesses worldwide</div>
      {options.length > 0 ? (
        <div className="option-container">
          {options.map((option, index) => (
            <button key={index} onClick={() => handleClick(option)} className={`project-button ${selectedOption === option ? 'selected' : ''}`}>
              {option}
            </button>
          ))}
        </div>
      ) : (
        <p className="black-text">No options Available</p>
      )}

      {selectedOption && selectedOption !== 'All' && (
        <div>
          <div className="name-container">
            {names.map((name, index) => (
              <button key={index} onClick={() => handleNameClick(name)} className="name-button">{name}</button>
            ))}
          </div>
        </div>
      )}

      <div className="document-list">
        {documents.map((doc, index) => (
          <div key={index} className="document-item">
            <Link to={`/projectdetails/${encodeURIComponent(doc.category)}/${encodeURIComponent(doc.name)}`}>
              <div className="project-video-container"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                onClick={() => handleVideoClick(doc.name, doc.category)}
              >
                <video className="project-video" ref={el => videoRefs.current[index] = el} key={doc.video_url} muted>
                  <source src={doc.video_url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="text-overlay">
                  <p className="project-text">{doc.name}</p>
                  <p className="project-text">{doc.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {selectedDocument && (
        <div>
          <p>Selected Document Name: {selectedDocument.name}</p>
          <p>Selected Document Category: {selectedDocument.category}</p>
        </div>
      )}
    </div>
  );
};

export default Project;
