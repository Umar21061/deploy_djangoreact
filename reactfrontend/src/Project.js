import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

const Project = () => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('All');
  const [names, setNames] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState(null);

  useEffect(() => {
    // Fetch options on component mount
    fetch('/api/global_project/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch options');
        }
        return response.json();
      })
      .then(data => {
        setOptions(data.options);
      })
      .catch(error => {
        console.error('Error fetching options:', error);
      });

    // Fetch all documents initially
    fetch(`/api/global_project/?option=All`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch all documents');
        }
        return response.json();
      })
      .then(data => {
        setDocuments(data.documents);
      })
      .catch(error => {
        console.error('Error fetching all documents:', error);
      });
  }, []);

  const handleClick = (option) => {
    setSelectedOption(option);
    if (option === "All") {
      // Fetch all documents if the "All" option is selected
      fetch(`/api/global_project/?option=All`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch all documents');
          }
          return response.json();
        })
        .then(data => {
          setDocuments(data.documents);
          setNames([]); // Clear names when "All" is selected
        })
        .catch(error => {
          console.error('Error fetching all documents:', error);
        });
    } else {
      // Fetch category names and documents based on the selected option
      fetch(`/api/global_project/?option=${encodeURIComponent(option)}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch names and documents');
          }
          return response.json();
        })
        .then(data => {
          setNames(data.names);
          // Fetch documents for each category under the selected option
          Promise.all(data.names.map(name =>
            fetch(`/api/global_project/?category=${encodeURIComponent(name)}`)
              .then(response => {
                if (!response.ok) {
                  throw new Error(`Failed to fetch documents for category ${name}`);
                }
                return response.json();
              })
              .then(categoryData => categoryData.documents)
          ))
          .then(docArrays => {
            const allDocs = docArrays.flat();
            setDocuments(allDocs);
          })
          .catch(error => {
            console.error('Error fetching documents for categories:', error);
          });
        })
        .catch(error => {
          console.error('Error fetching names and documents:', error);
        });
    }
  };

  const handleNameClick = (category) => {
    fetch(`/api/global_project/?category=${encodeURIComponent(category)}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch documents');
        }
        return response.json();
      })
      .then(data => {
        setDocuments(data.documents);
      })
      .catch(error => {
        console.error('Error fetching documents:', error);
      });
  };

  const handleVideoClick = (name, category) => {
    console.log('Selected document:', name, category);
    setSelectedDocument({ name, category });
  };

  return (
    <div className="project-container">
      {options.length > 0 ? (
        <div className="option-container">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleClick(option)}
              className={`project-button ${selectedOption === option ? 'selected' : ''}`}
            >
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
              <div className="project-video-container" onClick={() => handleVideoClick(doc.name, doc.category)}>
                <video className="project-video" controls autoPlay key={doc.video_url}>
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
