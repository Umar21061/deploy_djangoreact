import React, { useState, useEffect } from 'react';
import './Crew.css';

const Crew = () => {
    const [crewData, setCrewData] = useState([]);

    useEffect(() => {
        fetchCrewData();
    }, []);

    const fetchCrewData = async () => {
        try {
            const response = await fetch('/api/get_crew_data');
            const data = await response.json();
            setCrewData(data);
        } catch (error) {
            console.error('Error fetching crew data:', error);
        }
    };

    const handleMouseEnter = (index) => {
        document.querySelector(`.crew_${index} .crew-overlay`).style.visibility = 'visible';
    };

    const handleMouseLeave = (index) => {
        document.querySelector(`.crew_${index} .crew-overlay`).style.visibility = 'hidden';
    };

    return (
        <>
        <h5 className='crew-heading'> WHAT’S NEW IN OUR CREW?</h5>
        
        <div className="crew-container">
            {crewData.map((member, index) => (
                <div 
                    key={`crew_${index}`} 
                    className={`crew-member crew_${index}`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                >
                    <a href={member.link} target="_blank" rel="noopener noreferrer">
                        <img src={member.image_url} alt={member.image_text} />
                    </a>
                    <div className="crew-overlay">{member.image_text}</div>
                </div>
            ))}
        </div>
        </>
        
    );
};

export default Crew;
