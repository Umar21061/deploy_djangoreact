import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Ebook.css';


const Ebook = () => {
    const [ebookData, setEbookData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/get_ebook_data/');
                setEbookData(response.data);
            } catch (error) {
                console.error('Error fetching ebook data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="ebook-container">
            {ebookData ? (
                <div>
                    <h2 className="ebook-heading">{ebookData.heading}</h2>
                    <p className="ebook-location">Location: {ebookData.location}</p>
                    <p className="ebook-team-size">Team Size: {ebookData.team_size}</p>
                    <p className="ebook-compensation">Compensation:</p>
                    <ul>
                        <li>CoE: {ebookData.compensation.CoE}</li>
                        <li>B2B: {ebookData.compensation.B2B}</li>
                    </ul>
                    <p className="ebook-description">Job Description: {ebookData.job_description}</p>
                    <button className="ebook-button"  >{ebookData.btn}</button>
                </div>
            ) : (
                <p className="loading">Loading...</p>
            )}
        </div>
    );
};

export default Ebook;
