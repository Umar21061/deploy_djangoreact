import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css';
import Footer from './Footer';

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
  }, [category, name]);

  if (loading) {
    return           <div style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <img src={loadingImage} alt="Loading..." style={{ maxWidth: '20%', maxHeight: '30%', margin: 'auto' }} />
</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="project_details-container">
      {projectDetail && (
        <div className="project_item">
          <video className="project_video" src={projectDetail.video_url} autoPlay muted></video>
          <h1 className="project_video_heading">{projectDetail.video_heading2}</h1>
          <h3 className="project_video_text">{projectDetail.video_text2}</h3>
          <div className="row">
            <div className="col-md-9">
              <h2 className="project_about_heading">{projectDetail.about_heading}</h2>
              <p className="project_about_text">{projectDetail.about_text}</p>
            </div>
            <div className="col-md-3">
              <h3 className="project_about_heading">{projectDetail.about_heading2}</h3>
              <p className="project_about_text">{projectDetail.about_text2}</p>
              <p className="project_about_text">{projectDetail.about_text3}</p>
              <h3 className="project_about_heading">{projectDetail.about_heading3}</h3>
              <p className="project_about_text">{projectDetail.about_text4}</p>
              <h3 className="project_about_heading">{projectDetail.about_heading4}</h3>
              <p className="project_about_text">{projectDetail.about_text5}</p>
            </div>
          </div>
          <p className="project_image_text">{projectDetail.image_text}</p>
          <div className="row">
            <div className="col-md-12">
              <img className="project_image" src={projectDetail.image_url} alt="Image 1" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <img className="project_image" src={projectDetail.image_url1} alt="Image 2" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img className="project_image" src={projectDetail.image_url2} alt="Image 3" />
            </div>
            <div className="col-md-6">
              <img className="project_image" src={projectDetail.image_url3} alt="Image 4" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <img className="project_image" src={projectDetail.image_url4} alt="Image 5" />
            </div>
          </div>
         
        </div>
      )}
   
      <Footer/>
    </div>
  );
}

export default ProjectDetails;
