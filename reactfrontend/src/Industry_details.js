import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Industry = () => {
  const [industryData, setIndustryData] = useState([]);

  useEffect(() => {
    const fetchIndustryData = async () => {
      try {
        const response = await axios.get('/api/industry-details/');
        setIndustryData(response.data);
      } catch (error) {
        console.error('Error fetching industry data:', error);
      }
    };

    fetchIndustryData();
  }, []);

  return (
    <div className="industry-container">
      {industryData.map((industry, index) => (
        <div key={index} className="industry-item">
          <h3>{industry.heading1}</h3>
          <p>{industry.text1}</p>
          <p>{industry.button}</p>
          <img src={industry.image1} alt="Image 1" />
          <h3>{industry.heading2}</h3>
          <h4>{industry.title}</h4>
          <p>{industry.title_description}</p>
          <img src={industry.title_image} alt="Title Image" />
          <img src={industry.logo} alt="Logo" />
        </div>
      ))}
    </div>
  );
};

export default Industry;
