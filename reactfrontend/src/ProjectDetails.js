import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css';
import Footer from './Footer';
import Cons from './Cons';
import loadingImage from './image/loading3.gif'; 

function ProjectDetails() {
  const { category, name } = useParams();
  const [projectDetail, setProjectDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjectDetail = async () => {
      try {
        const response = await fetch(`/api/project-detail/?category=${encodeURIComponent(category)}&name=${encodeURIComponent(name)}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProjectDetail(data.document);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProjectDetail();

    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, [category, name]);

  if (loading) {
    return  <div style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <img src={loadingImage} alt="Loading..." style={{ maxWidth: '50%', maxHeight: '50%', margin: 'auto' }} />
  </div>
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="project_details-container">
      {projectDetail && (
        <div className="project_item">
          {/* Your project details rendering */}
        </div>
      )}
      <Cons/>
      <Footer/>
    </div>
  );
}

export default ProjectDetails;
