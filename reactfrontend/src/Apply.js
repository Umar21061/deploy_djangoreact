import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Apply.css'; 

const Apply = () => {
    const [jobData, setJobData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/get_job_data');
                setJobData(response.data);
            } catch (error) {
                console.error('Error fetching job data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="apply-container">
            {jobData ? (
                <div>
                    <h2 className="apply-heading">{jobData.heading}</h2>
                    <p className="apply-location">Location: {jobData.location}</p>
                    <p className="apply-team-size">Team Size: {jobData.team_size}</p>
                    <p className="apply-compensation">Compensation:</p>
                    <ul>
                        <li>CoE: {jobData.compensation.CoE}</li>
                        <li>B2B: {jobData.compensation.B2B}</li>
                    </ul>
                    <p className="apply-description">Job Description:{jobData.job_description}</p>
                    <button className="apply-button">{jobData.btn}</button>
                </div>
            ) : (
                <p className="loading">Loading...</p>
            )}
        </div>
    );
};

export default Apply;
