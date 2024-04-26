import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProjectDetails.css'; // Import your CSS file

const ProjectDetails = () => {
    const [projectData, setProjectData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/project_Details/');
                console.log(response.data); // Log the response data
                setProjectData(response.data);
            } catch (error) {
                console.error('Error fetching project details:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Project Details</h1>
            {projectData.map((project, index) => (
                <div key={index}>
                    <h2>{project._id}</h2>
                    <div className="project-details-item" style={{ backgroundImage: `url(${project.backend_development.image_url})` }}>
                        <h3>{project.backend_development.heading}</h3>
                        <p>{project.backend_development.text}</p>
                    </div>
                    <div className="project-details-background2" style={{ backgroundImage: `url(${project.backend_development.image_url2})` }}>
                        <h3>{project.backend_development.heading2}</h3>
                        <p>{project.backend_development.text2}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectDetails;
